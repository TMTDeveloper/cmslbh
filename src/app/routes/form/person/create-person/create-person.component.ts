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
  PostPersonGQL,
  PersonUpdateInput,
  PutPersonGQL,
  PersonWhereUniqueInput,
} from '@shared';
import { MtVocabHelper } from '@shared/helper';
import * as moment from 'moment';
import { map, take } from 'rxjs/operators';
import { AllPersonGQL } from '@shared/generated/graphql';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.less'],
})
export class CreatePersonComponent implements OnInit, OnDestroy {
  private _editData: any;

  constructor(
    public msg: NzMessageService,
    private getMtVocabsGQL: GetMtVocabsGQL,
    public mtVocabHelper: MtVocabHelper,
    private postPersonGQL: PostPersonGQL,
    private settingService: SettingsService,
    private putPersonGQL: PutPersonGQL,
  ) {}

  @Output() saveDone = new EventEmitter<boolean>();
  @ViewChild('sf') sf: SFComponent;
  @Input() parent: boolean;
  @Input() mode = 'create';
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
    this.mode === 'edit'
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

    if (this.mode === 'edit') {
      data.updatedBy = this.settingService.user.name;
      const { id, createdAt, updatedAt, __typename, _values, ...newData } = data;
      return <PersonUpdateInput>{ ...newData };
    } else {
      data.createdBy = this.settingService.user.name;
      return <PersonCreateInput>{ ...data };
    }
  }

  dataMutationCreate(data: PersonCreateInput) {
    this.postPersonGQL
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
    this.putPersonGQL
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

  schema: SFSchema = {
    properties: {
      id: {
        type: 'string',
        ui: {
          hidden: true,
        },
      },
      namaLengkap: {
        type: 'string',
        title: 'Nama Lengkap',
      },
      alias: {
        type: 'string',
        title: 'Alias',
      },
      unitSatuan: {
        type: 'string',
        title: 'Unit Satuan',
        ui: {
          widget: 'select',
          asyncData: () => this.mtVocabHelper.getMtVocabEnum(7, 'kode'),
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
      orderBy: MtVocabOrderByInput.TeksAsc,
    };
  }
}
