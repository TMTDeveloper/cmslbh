import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnDestroy } from '@angular/core';
import { NzMessageService, CascaderOption } from 'ng-zorro-antd';
import { SettingsService } from '@delon/theme';
import { SFSchema, CascaderWidget, SFComponent } from '@delon/form';
import {
  GetMtVocabsGQL,
  GetMtVocabs,
  MtVocabWhereInput,
  MtVocabGroupWhereInput,
  MtVocabOrderByInput,
  PersonCreateInput,
  CreatePersonGQL,
  PersonUpdateInput,
  UpdatePersonGQL,
  PersonWhereUniqueInput,
} from '@shared';
import { MtVocabHelper } from '@shared/helper';
import * as moment from 'moment';
import { map, take } from 'rxjs/operators';
import { AllPersonGQL } from '@shared/generated/graphql';
import { STComponent, STColumn, STData, STChange } from '@delon/abc';

@Component({
  selector: 'app-create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.less'],
})
export class CreateApplicationComponent implements OnInit, OnDestroy {
  private _editData: any;
  private clientData = [];

  constructor(
    public msg: NzMessageService,
    private getMtVocabsGQL: GetMtVocabsGQL,
    public mtVocabHelper: MtVocabHelper,
    private createPersonGQL: CreatePersonGQL,
    private settingService: SettingsService,
    private updatePersonGQL: UpdatePersonGQL,
  ) {}

  @Output() saveDone = new EventEmitter<boolean>();
  @ViewChild('sf') sf: SFComponent;
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
    const processedData = this.processData(value);
    !this.create
      ? this.dataMutationUpdate(<PersonUpdateInput>processedData, <PersonWhereUniqueInput>{ id: value.id })
      : this.dataMutationCreate(<PersonCreateInput>processedData);
  }

  processData(data: any): PersonCreateInput | PersonUpdateInput {
    if (data.domisiliSama === true) {
      data.alamatDomisili = null;
      data.distrikDomisili = null;
    }
    if (data.disabilitas === false) {
      data.jenisDisabilitas = null;
      data.alatBantu = null;
    }
    data.distrikId = Array.isArray(data.distrikId) ? data.distrikId.slice(-1)[0] : null;
    data.distrikDomisili = Array.isArray(data.distrikDomisili) ? data.distrikDomisili.slice(-1)[0] : null;
    data.pekerjaan = Array.isArray(data.pekerjaan) ? data.pekerjaan.slice(-1)[0] : null;
    data.tglLahir = moment(data.tglLahir, 'YYYY-MM-DD HH:mm:ss').toDate() || null;
    data.createdBy = this.settingService.user.name;
    data.updatedBy = this.settingService.user.name;
    if (!this.create) {
      const { id, createdAt, updatedAt, __typename, _values, ...newData } = data;
      return <PersonUpdateInput>{ ...newData };
    } else {
      return <PersonCreateInput>{ ...data };
    }
  }

  dataMutationCreate(data: PersonCreateInput) {
    this.createPersonGQL
      .mutate({ data })
      .pipe(take(1))
      .subscribe(
        () => {
          this.msg.success('Data Sukses Dibuat');
          this.sf.refreshSchema(this.schema);
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
      index: 'namaLengkap',
    },
    {
      title: 'Email',
      index: 'email',
    },
    {
      title: 'Telp',
      index: 'telepon',
    },
    {
      title: 'Nomor Id',
      index: 'nomorId',
    },
    {
      title: 'Updated At',
      index: 'updatedAt',
      type: 'date',
    },
    {
      title: 'Created At',
      index: 'createdAt',
      type: 'date',
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
      noReg: {
        type: 'string',
        title: 'No Reg',
      },
      regDate: {
        type: 'string',
        title: 'Tanggal Registrasi',
      },
      clients: {
        type: 'string',
        title: 'Clients',
        enum: [],
        ui: {
          widget: 'custom',
        },
        default: 'test',
      },
      statusPerwakilan: {
        type: 'string',
        title: 'Unit Satuan',
        ui: {
          widget: 'select',
          asyncData: () => this.mtVocabHelper.getMtVocabEnum(70, 'kode'),
        },
      },
      jmlAnggota: {
        type: 'number',
        title: 'Jumlah Anggota',
        ui: {
          visibleIf: {
            unitSatuan: (value: any) => value !== '01000000000007' && value !== null,
          },
        },
      },
      jenisKelamin: {
        type: 'string',
        title: 'Jenis Kelamin',
        ui: {
          widget: 'radio',
          asyncData: () => this.mtVocabHelper.getMtVocabEnum(74, 'teks'),
        },
      },
      tmpLahir: {
        type: 'string',
        title: 'Tempat Lahir',
      },
      tglLahir: {
        type: 'string',
        title: 'Tanggal Lahir',
        ui: { widget: 'date', mode: 'date', displayFormat: 'dd-MM-yyyy' },
      },
      agama: {
        type: 'string',
        title: 'Agama',
        ui: {
          widget: 'select',
          asyncData: () => this.mtVocabHelper.getMtVocabEnum(75, 'teks'),
        },
      },
      wargaNegara: {
        type: 'string',
        title: 'Warga Negara',
        ui: {
          widget: 'select',
          asyncData: () => this.mtVocabHelper.getMtVocabEnum(77, 'teks'),
        },
      },
      golDarah: {
        type: 'string',
        title: 'Golongan Darah',
        enum: ['A', 'B', 'AB', 'O'],
        ui: {
          widget: 'radio',
          styleType: 'button',
          buttonStyle: 'solid',
        },
      },
      telepon: {
        type: 'string',
        title: 'Telepon',
      },
      email: {
        type: 'string',
        title: 'Email',
      },
      jenisId: {
        type: 'string',
        title: 'Jenis ID',
        ui: {
          widget: 'select',
          asyncData: () => this.mtVocabHelper.getMtVocabEnum(76, 'teks'),
        },
      },
      nomorId: {
        type: 'string',
        title: 'Nomor Id',
      },
      alamatId: {
        type: 'string',
        title: 'Alamat ID',
        ui: {
          widget: 'textarea',
          autosize: { minRows: 2, maxRows: 6 },
        },
      },
      distrikId: {
        type: 'string',
        title: 'Distrik ID',
        ui: {
          widget: 'cascader',
          asyncData: ((node: CascaderOption, index: number, me: CascaderWidget) => {
            return new Promise(async resolve => {
              const data = await this.getTreeData(
                node.value === undefined ? '00030424000063' : node.value.toString(),
                63,
              );

              (node as any).children = data;
              resolve();
              me.detectChanges(true);
            });
          }) as any,
        },
      },
      domisiliSama: {
        type: 'boolean',
        title: 'Domisili sama ?',
        description: 'Checklist Jika Domisili sama',
        ui: {
          widget: 'checkbox',
        },
        default: true,
      },
      alamatDomisili: {
        type: 'string',
        title: 'Alamat Domisili',
        ui: {
          widget: 'textarea',
          autosize: { minRows: 2, maxRows: 6 },
          visibleIf: {
            domisiliSama: (value: any) => value === false,
          },
        },
      },

      distrikDomisili: {
        type: 'string',
        title: 'Distrik Domisili',
        ui: {
          widget: 'cascader',
          asyncData: ((node: CascaderOption, index: number, me: CascaderWidget) => {
            return new Promise(async resolve => {
              const data = await this.getTreeData(
                node.value === undefined ? '00030424000063' : node.value.toString(),
                63,
              );

              (node as any).children = data;
              resolve();
              me.detectChanges(true);
            });
          }) as any,
          visibleIf: {
            domisiliSama: (value: any) => value === false,
          },
        },
      },
      jenisDomisili: {
        type: 'string',
        title: 'Jenis Domisili',
        ui: {
          widget: 'select',
          asyncData: () => this.mtVocabHelper.getMtVocabEnum(71, 'teks'),
        },
      },
      pendidikan: {
        type: 'string',
        title: 'Pendidikan',
        ui: {
          widget: 'select',
          asyncData: () => this.mtVocabHelper.getMtVocabEnum(78, 'kode'),
        },
      },
      pekerjaan: {
        type: 'string',
        title: 'Pekerjaan',
        ui: {
          widget: 'cascader',
          asyncData: ((node: CascaderOption, index: number, me: CascaderWidget) => {
            return new Promise(async resolve => {
              const data = await this.getTreeData(node.value === undefined ? '0' : node.value.toString(), 10);
              for (const item in data) {
                const child = await this.mtVocabHelper.isThereAChild(data[item].value);
                data[item].isLeaf = child.length === 0;
              }
              (node as any).children = data;
              resolve();
              me.detectChanges(true);
            });
          }) as any,
        },
      },
      statusPernikahan: {
        type: 'string',
        title: 'Status Pernikahan',
        ui: {
          widget: 'select',
          asyncData: () => this.mtVocabHelper.getMtVocabEnum(79, 'teks'),
        },
      },
      disabilitas: {
        type: 'boolean',
        title: 'Mempunyai Disabilitas?',
        description: 'Checklist jika mempunyai disabilitas',
        ui: {
          widget: 'checkbox',
        },
        default: false,
      },
      jenisDisabilitas: {
        type: 'string',
        title: 'Jenis Disabilitas',
        ui: {
          widget: 'select',
          asyncData: () => this.mtVocabHelper.getMtVocabEnum(95, 'kode'),
          visibleIf: {
            disabilitas: (value: any) => value === true,
          },
        },
      },
      alatBantu: {
        type: 'string',
        title: 'Alat Bantu Disabilitas',
        ui: {
          widget: 'select',
          asyncData: () => this.mtVocabHelper.getMtVocabEnum(96, 'kode'),
          visibleIf: {
            disabilitas: (value: any) => value === true,
          },
        },
      },
    },
    required: ['namaLengkap', 'unitSatuan'],

    ui: {
      size: 'large',
    },
  };

  private getTreeData(kode: any, kode_list: number) {
    return this.getMtVocabsGQL
      .watch(this.searchTreeGenerator(kode, kode_list))
      .valueChanges.pipe(
        map(result =>
          result.data.mtVocabs.map(res => {
            const obj: any = {};
            obj.value = res.KODE;
            obj.label = res.teks;
            obj.parent = res.kode_induk;
            if (kode_list === 63) {
              obj.isLeaf = res.level === 3;
            }
            return obj;
          }),
        ),
      )
      .pipe(take(1))
      .toPromise();
  }

  private searchTreeGenerator(kode: string, kode_list: number): GetMtVocabs.Variables {
    return <GetMtVocabs.Variables>{
      where: <MtVocabWhereInput>{
        AND: <MtVocabWhereInput[]>[{ kode_induk: kode, kode_list: <MtVocabGroupWhereInput>{ kode_list: kode_list } }],
      },
      orderBy: MtVocabOrderByInput.Teks_Asc,
    };
  }
}
