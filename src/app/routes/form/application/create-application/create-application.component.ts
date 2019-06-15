import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  OnDestroy,
  TemplateRef,
  ElementRef,
} from '@angular/core';
import { NzMessageService, NzModalService, NzModalRef } from 'ng-zorro-antd';
import { SettingsService } from '@delon/theme';
import { SFSchema, SFComponent, FormProperty, PropertyGroup, ErrorData } from '@delon/form';
import {
  GetMtVocabsGQL,
  GetMtVocabs,
  MtVocabWhereInput,
  MtVocabGroupWhereInput,
  MtVocabOrderByInput,
  PersonCreateInput,
  PostPersonGQL,
  PersonUpdateInput,
  PutPersonGQL,
  PersonWhereUniqueInput,
  AllPerson,
  ClientCreateManyWithoutApplicationIdInput,
  ClientCreateWithoutApplicationIdInput,
  ApplicationCreateInput,
  CaseCreateWithoutApplicationInput,
  PostApplicationGQL,
} from '@shared';
import { MtVocabHelper } from '@shared/helper';
import * as moment from 'moment';
import { take } from 'rxjs/operators';
import { STComponent, STColumn } from '@delon/abc';

@Component({
  selector: 'app-create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.less'],
})
export class CreateApplicationComponent implements OnInit, OnDestroy {
  public modalEditData: any;
  private _editData: any;
  clientData: any[] = [];
  modalInstance: NzModalRef;
  mode = '';
  constructor(
    public msg: NzMessageService,
    public mtVocabHelper: MtVocabHelper,
    private postPersonGQL: PostPersonGQL,
    private settingService: SettingsService,
    private updatePersonGQL: PutPersonGQL,
    private modalSrv: NzModalService,
    private postApplicationGQL: PostApplicationGQL,
  ) {}

  @Output() saveDone = new EventEmitter<any>();
  @ViewChild('sf') sf: SFComponent;
  @ViewChild('st') st: STComponent;
  @ViewChild('modalClient') modalClient: TemplateRef<{}>;
  @ViewChild('card') card: ElementRef;
  @Input() parent: boolean;
  @Input() create: boolean;
  @Input()
  set editData(editData: any) {
    (async () => {
      this.loading = true;
      if (!Array.isArray(editData.distrikId) && editData.distrikId) {
        editData.distrikId = (await this.mtVocabHelper.findParent(editData.distrikId)).reverse();
      }
      if (!Array.isArray(editData.distrikDomisili) && editData.distrikDomisili) {
        editData.distrikDomisili = (await this.mtVocabHelper.findParent(editData.distrikDomisili)).reverse();
      }
      if (!Array.isArray(editData.pekerjaan) && editData.pekerjaan) {
        editData.pekerjaan = (await this.mtVocabHelper.findParentPekerjaan(editData.pekerjaan)).reverse();
      }
      this._editData = editData;
      this.loading = false;
    })();
  }
  get editData(): any {
    return this._editData;
  }

  ngOnInit() {}

  ngOnDestroy(): void {}
  loading = false;

  submit(value: any) {
    console.log(value);

    const processedData = this.processData(value);
    console.log(processedData);
    this.dataMutationCreate(processedData);
    // !this.create
    //   ? this.dataMutationUpdate(<PersonUpdateInput>processedData, <PersonWhereUniqueInput>{ id: value.id })
    //   : this.dataMutationCreate(<PersonCreateInput>processedData);
  }

  processData(data: any): ApplicationCreateInput {
    // createmode
    const arrClient = <ClientCreateWithoutApplicationIdInput[]>[];
    for (const obj of this.clientData) {
      if (obj.fileList.length > 0) obj.sktmUpload = obj.fileList[0].name;
      const personId = obj.personId.id;
      obj.personId = undefined;
      data.createdBy = this.settingService.user.name;
      data.updatedBy = this.settingService.user.name;
      const { fileList, _values, ...newData } = obj;
      newData.personId = { connect: { id: personId } };
      arrClient.push(newData);
    }
    const clients = <ClientCreateManyWithoutApplicationIdInput>{ create: arrClient };
    const caseCreate = <CaseCreateWithoutApplicationInput>(<unknown>{
      create: {
        caseClosed: false,
        unlockPk: false,
        lockDitolak: false,
        unlockTransfer: false,
      },
    });
    data.regDate = moment(data.regDate, 'YYYY-MM-DD HH:mm:ss').toDate();
    data.case = caseCreate;
    const wakilId = data.wakilId.id;
    data.wakilId = undefined;
    data.clients = clients;
    data.createdBy = this.settingService.user.name;
    data.updatedBy = this.settingService.user.name;
    const { ...applicationCreateInput } = data;
    applicationCreateInput.wakilId = { connect: { id: wakilId } };

    return <ApplicationCreateInput>{ ...applicationCreateInput };
  }

  dataMutationCreate(data: ApplicationCreateInput) {
    this.postApplicationGQL
      .mutate({ data })
      .pipe(take(1))
      .subscribe(
        () => {
          this.msg.success('Data Sukses Dibuat');
          this.clientData.length = 0;
          setTimeout(() => this.st.reset());
          setTimeout(() => this.sf.refreshSchema());
          if (this.parent) this.saveDone.emit(true);
        },
        error => {
          this.msg.error(JSON.stringify(error));
        },
      );
  }

  dataMutationUpdate(data: PersonUpdateInput, id: PersonWhereUniqueInput) {
    this.updatePersonGQL
      .mutate({ where: id, data: data })
      .pipe(take(1))
      .subscribe(
        () => {
          this.msg.success('Data Sukses Dirubah');
          this.sf.refreshSchema(this.schema);
          if (this.parent) this.saveDone.emit(true);
        },
        error => {
          this.msg.error(JSON.stringify(error));
        },
      );
  }

  columns: STColumn[] = [
    {
      title: 'Nama Lengkap',
      index: 'personId.namaLengkap',
    },
    {
      title: 'SKTM',
      index: 'personId.sktm',
      format: (item: any) => (item.sktm ? 'Ada SKTM' : 'Tidak ada SKTM'),
    },
    {
      title: 'Action',
      buttons: [
        {
          text: 'Delete',
          click: (item: any) => {
            this.clientData.forEach((el, ind) => {
              if (el.personId.id === item.personId.id) {
                this.clientData.splice(ind, 1);
              }
            });
            this.st.removeRow(item);
            this.sf.setValue('/clients', this.clientData);
          },
        },
        {
          text: 'Edit',
          click: (item: any) => {
            this.modalEditData = item;
            this.createModal(this.modalClient, 'Edit Client', 'edit');
          },
        },
      ],
    },
  ];

  schema: SFSchema = {
    properties: {
      id: {
        type: 'string',
        ui: {
          hidden: true,
        },
      },
      statusPerwakilan: {
        type: 'string',
        title: 'Status Perwakilan',
        ui: {
          widget: 'select',
          asyncData: () => this.mtVocabHelper.getMtVocabEnum(70, 'kode'),
        },
      },
      noReg: {
        type: 'string',
        title: 'No Reg',
      },
      regDate: {
        type: 'string',
        title: 'Tanggal Registrasi',
        ui: { widget: 'date', mode: 'date', displayFormat: 'dd-MM-yyyy' },
      },
      clients: {
        type: 'string',
        title: 'Clients',
        ui: {
          widget: 'custom',
        },
      },
      wakilId: {
        type: 'string',
        title: 'Yang Mewakili',
        readOnly: true,
        ui: {
          widget: 'custom',
        },
      },
      relasiWakilClient: {
        type: 'string',
        title: 'Hubungan wakil dengan klien',
      },
      jumlahPenerimaManfaat: {
        type: 'number',
        title: 'Jumlah Penerima Manfaat',
      },
      pernahKlien: {
        type: 'string',
        title: 'Apakah Pernah Menjadi Klien LBH',
        ui: {
          widget: 'select',
          asyncData: () => this.mtVocabHelper.getMtVocabEnum(97, 'teks'),
        },
      },
      waktuPernahKlien: {
        type: 'string',
        title: 'Bila Pernah, Kapan?',
        ui: {
          widget: 'textarea',
          autosize: { minRows: 2, maxRows: 6 },
          visibleIf: {
            pernahKlien: (value: any) => value === 'PERNAH',
          },
        },
      },
      pernahPpLain: {
        type: 'string',
        title: 'Perkara ini pernah dibawa ke pihak lain?',
        ui: {
          widget: 'select',
          asyncData: () => this.mtVocabHelper.getMtVocabEnum(97, 'teks'),
        },
      },
      ppLain: {
        type: 'string',
        title: 'Bila pernah, sebutkan',
        ui: {
          widget: 'textarea',
          autosize: { minRows: 2, maxRows: 6 },
          visibleIf: {
            pernahPpLain: (value: any) => value === 'PERNAH',
          },
        },
      },
      infoLbh: {
        type: 'string',
        title: 'Tahu informasi LBH dari mana?',
        ui: {
          widget: 'textarea',
          autosize: { minRows: 2, maxRows: 6 },
        },
      },
      whyLbh: {
        type: 'string',
        title: 'Mengapa anda memilih untuk datang ke LBH?',
        ui: {
          widget: 'textarea',
          autosize: { minRows: 2, maxRows: 6 },
        },
      },
      dudukPerara: {
        type: 'string',
        title: 'Jelaskan duduk perkara yang sedang dihadapi',
        ui: {
          widget: 'textarea',
          autosize: { minRows: 2, maxRows: 6 },
        },
      },
      konfirmasiData: {
        type: 'boolean',
        title: 'Data Sudah Benar',
        description: 'Konfirmasi data yang diisikan sudah benar',
        ui: {
          widget: 'checkbox',
          validator: (value: any, formProperty: FormProperty, form: PropertyGroup): ErrorData[] => {
            if (value === false) {
              return <ErrorData[]>[{ message: 'Konfirmasi Harus Di Checklist' }];
            }
          },
        },
        default: false,
      },
      setujuAdvokasi: {
        type: 'boolean',
        title: 'Setuju, mengerti dan bersedia advokasi',
        description: 'Pilih jika setuju untuk advokasi',
        ui: {
          widget: 'checkbox',
          validator: (value: any, formProperty: FormProperty, form: PropertyGroup): ErrorData[] => {
            if (value === false) {
              return <ErrorData[]>[{ message: 'Harus Setuju Advokasi' }];
            }
          },
        },
        default: false,
      },
    },
    required: ['statusPerwakilan', 'noReg', 'regDate', 'konfirmasiData', 'setujuAdvokasi', 'wakilId', 'clients'],

    ui: {
      size: 'large',
    },
  };

  createModal(tpl: TemplateRef<{}>, title: string, mode?: string) {
    this.mode = mode;
    if (this.mode === 'create') this.modalEditData = {};
    this.modalInstance = this.modalSrv.create({
      nzTitle: title,
      nzContent: tpl,
      nzWidth: this.card.nativeElement.offsetWidth,
      nzFooter: null,
      nzBodyStyle: {},
    });
  }

  closeModalAndSaveData(event: AllPerson.Persons) {
    this.modalInstance.close();
    this.sf.setValue('/wakilId', event);
  }

  saveClient(event: any) {
    this.modalInstance.close();
    const sameIndex = this.clientData.findIndex(el => el.personId.id === event.value.personId.id);
    if (sameIndex > -1) {
      this.mode === 'create'
        ? this.msg.warning('Person sudah dipilih menjadi client')
        : (this.clientData[sameIndex] = event.value);
    } else {
      this.clientData.push(event.value);
    }
    this.st.reload();
    this.sf.setValue('/clients', this.clientData);
    console.log(event);
    console.log(this.clientData);
  }
}
