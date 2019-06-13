import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NzMessageService, CascaderOption } from 'ng-zorro-antd';
import { SFSchema, CascaderWidget, SFSchemaEnumType } from '@delon/form';
import { GetMtVocabsGQL, GetMtVocabs, MtVocabWhereInput, MtVocabGroupWhereInput, MtVocabOrderByInput } from '@shared';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { map, take } from 'rxjs/operators';
import * as df_id from 'date-fns/locale/id';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.less'],
})
export class CreatePersonComponent implements OnInit {
  formData = {
    email: 'zenhuwmanK@gmail.com',
    name: 'Reza Aulia',
  };

  constructor(public msg: NzMessageService, private getMtVocabsGQL: GetMtVocabsGQL) {
    // this.getTreeData();
  }
  @Input() parent: boolean;
  @Input() editData: any;
  @Output() saveDone = new EventEmitter<boolean>();

  submit(value: any) {
    this.msg.success(JSON.stringify(value));
    this.saveDone.emit(true);
  }
  schema: SFSchema = {
    properties: {
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
        minLength: 3,
        ui: {
          widget: 'select',
          asyncData: () => this.getMtVocab(7),
        },
      },
      tempatLahir: {
        type: 'string',
        title: 'Tempat Lahir',
      },
      date: {
        type: 'string',
        title: 'Tanggal Lahir',
        ui: { widget: 'date', mode: 'date', displayFormat: 'DD MMMM YYYY' },
      },
      year: {
        type: 'number',
        ui: { widget: 'date', mode: 'year' },
      },
      async: {
        type: 'number',
        title: 'Alamat',
        ui: {
          widget: 'cascader',
          asyncData: ((node: CascaderOption, index: number, me: CascaderWidget) => {
            return new Promise(async resolve => {
              const data = await this.getTreeData(node.value === undefined ? '00030424000063' : node.value.toString());

              (node as any).children = data;
              resolve();
              me.detectChanges(true);
            });
          }) as any,
        },
      },
    },
    ui: {
      size: 'large',
    },
  };

  getTreeData(kode) {
    return this.getMtVocabsGQL
      .watch(this.searchTreeGenerator(kode))
      .valueChanges.pipe(
        map(result =>
          result.data.mtVocabs.map(res => {
            const obj: any = {};
            obj.value = res.KODE;
            obj.label = res.teks;
            obj.parent = res.kode_induk;
            obj.isLeaf = res.level === 3;
            return obj;
          }),
        ),
      )
      .pipe(take(1))
      .toPromise();
  }

  getMtVocab(kode_list: number) {
    return this.getMtVocabsGQL
      .watch(this.searchGenerator(kode_list))
      .valueChanges.pipe(
        map(
          result =>
            result.data.mtVocabs.map(res => {
              const obj: any = {};
              obj.value = res.KODE;
              obj.label = res.teks;
              return obj;
            }) as SFSchemaEnumType[],
        ),
      )
      .pipe(take(1));
  }

  private searchTreeGenerator(kode): GetMtVocabs.Variables {
    console.log(kode);
    return <GetMtVocabs.Variables>{
      where: <MtVocabWhereInput>{
        AND: <MtVocabWhereInput[]>[{ kode_induk: kode, kode_list: <MtVocabGroupWhereInput>{ kode_list: 63 } }],
      },
      orderBy: MtVocabOrderByInput.Teks_Asc,
    };
  }

  private searchGenerator(kode_list: number): GetMtVocabs.Variables {
    return <GetMtVocabs.Variables>{
      where: <MtVocabWhereInput>{
        AND: <MtVocabWhereInput[]>[{ kode_list: <MtVocabGroupWhereInput>{ kode_list: kode_list } }],
      },
      orderBy: MtVocabOrderByInput.Teks_Asc,
    };
  }

  dataTemplate = {
    id: 2,
    agama: 'islam',
    alamatDomisili: null,
    alamatId: null,
    alatBantu: null,
    // alias: null,
    createdAt: '2019-06-01T22:58:32.567Z',
    createdBy: null,
    disabilitas: true,
    distrikDomisili: null,
    distrikId: null,
    domisiliSama: true,
    email: null,
    golDarah: null,
    jenisDisabilitas: null,
    jenisDomisili: null,
    jenisId: null,
    jenisKelamin: null,
    jmlAnggota: null,
    // namaLengkap: 'aulia',
    nomorId: '12346',
    pekerjaan: null,
    pendidikan: null,
    statusPernikahan: null,
    telepon: null,
    // tglLahir: null,
    // tmpLahir: null,
    // unitSatuan: null,
    updatedAt: '2019-06-01T22:58:32.567Z',
    updatedBy: null,
    wargaNegara: null,
    applications: [],
    clients: [],
    documents: [],
    __typename: 'Person',
    _values: [
      { text: '' },
      { text: 'aulia', org: 'aulia' },
      { text: '', org: null },
      { text: '', org: null },
      { text: '12346', org: '12346' },
      { text: '2019-06-02 05:58', org: '2019-06-01T22:58:32.567Z' },
      { text: '2019-06-02 05:58', org: '2019-06-01T22:58:32.567Z' },
    ],
  };
  ngOnInit() {}
}
