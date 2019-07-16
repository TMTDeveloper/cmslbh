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
import { SFSchema, SFComponent, ErrorData } from '@delon/form';
import {
  AllPerson,
  ClientCreateManyWithoutApplicationIdInput,
  ClientCreateWithoutApplicationIdInput,
  ApplicationCreateInput,
  CaseCreateWithoutApplicationInput,
  PostApplicationGQL,
  ApplicationUpdateInput,
  ClientUpdateManyWithoutApplicationIdInput,
  ClientUpdateWithWhereUniqueWithoutApplicationIdInput,
  ApplicationWhereUniqueInput,
  PutApplicationGQL,
  ClientWhereUniqueInput,
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
  deletedClient: any[] = [];
  modalInstance: NzModalRef;
  mode = '';
  constructor(
    public msg: NzMessageService,
    public mtVocabHelper: MtVocabHelper,
    private settingService: SettingsService,
    private modalSrv: NzModalService,
    private postApplicationGQL: PostApplicationGQL,
    private putApplicationGQL: PutApplicationGQL,
  ) {}

  @Output() saveDone = new EventEmitter<any>();
  @ViewChild('sf') sf: SFComponent;
  @ViewChild('st') st: STComponent;
  @ViewChild('modalClient') modalClient: TemplateRef<{}>;
  @ViewChild('card') card: ElementRef;
  @Input() parent: boolean;
  @Input() modeApp = 'create';
  @Input()
  set editData(editData: any) {
    (async () => {
      this.loading = true;
      if (this.modeApp !== 'create') {
        for (const obj of editData.clients) {
          if (obj.sktmUpload !== '') obj.fileList = [{ name: obj.sktmUpload, status: 'done' }];
        }
        this.clientData = editData.clients;
      }
      this._editData = editData;
      console.log(editData);
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
    if (this.modeApp === 'create') {
      const processedData = this.processDataCreate(value);
      console.log(processedData);
      this.dataMutationCreate(processedData);
    } else {
      const processedData = this.processDataUpdate(value);
      console.log(processedData);
      this.dataMutationUpdate(processedData, { id: value.id });
    }
  }

  processDataCreate(data: any): ApplicationCreateInput {
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

  processDataUpdate(data: any): ApplicationUpdateInput {
    // updatemode
    const clients = this.processUpdateClientData(data);
    data.regDate = moment(data.regDate, 'YYYY-MM-DD HH:mm:ss').toDate();
    const wakilId = data.wakilId.id;
    data.wakilId = undefined;
    data.tahap = '1';
    data.clients = clients;
    data.updatedBy = this.settingService.user.name;
    delete data.case;
    const { id, fileList, createdAt, createdBy, updatedAt, __typename, _values, ...applicationUpdateInput } = data;
    applicationUpdateInput.wakilId = { connect: { id: wakilId } };

    return <ApplicationUpdateInput>{ ...applicationUpdateInput };
  }

  processUpdateClientData(data: any) {
    const clients = <ClientUpdateManyWithoutApplicationIdInput>{};
    const arrClientUpdate = <ClientUpdateWithWhereUniqueWithoutApplicationIdInput[]>[];
    const arrClientCreate = <ClientCreateWithoutApplicationIdInput[]>[];
    const arrClientDelete = <ClientWhereUniqueInput[]>[...this.deletedClient];
    for (const obj of this.clientData) {
      if (obj.id) {
        if (obj.fileList) if (obj.fileList.length > 0) obj.sktmUpload = obj.fileList[0].name;
        let personId;
        if (obj.personId.id) {
          personId = obj.personId.id;
        } else {
          personId = obj.personId;
        }
        obj.personId = undefined;
        data.updatedBy = this.settingService.user.name;
        const { fileList, createdBy, id, createdAt, updatedAt, __typename, _values, ...newData } = obj;
        newData.personId = { connect: { id: personId } };
        arrClientUpdate.push(<ClientUpdateWithWhereUniqueWithoutApplicationIdInput>{
          where: { id: obj.id },
          data: newData,
        });
      } else {
        if (obj.fileList.length > 0) obj.sktmUpload = obj.fileList[0].name;
        const personId = obj.personId.id;
        obj.personId = undefined;
        data.createdBy = this.settingService.user.name;
        data.updatedBy = this.settingService.user.name;
        const { fileList, _values, ...newData } = obj;
        newData.personId = { connect: { id: personId } };
        arrClientCreate.push(newData);
      }
    }
    clients.update = arrClientUpdate;
    clients.create = arrClientCreate;
    clients.delete = arrClientDelete;
    return clients;
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

  dataMutationUpdate(data: ApplicationUpdateInput, id: ApplicationWhereUniqueInput) {
    this.putApplicationGQL
      .mutate({ where: id, data: data })
      .pipe(take(1))
      .subscribe(
        () => {
          this.msg.success('Data Sukses Dirubah');
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
            if (item.id) this.deletedClient.push({ id: item.id });
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
          validator: (value: any): ErrorData[] => {
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
          validator: (value: any): ErrorData[] => {
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
