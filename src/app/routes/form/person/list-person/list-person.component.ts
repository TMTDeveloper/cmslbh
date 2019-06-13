import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
  ElementRef,
} from '@angular/core';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { tap, map } from 'rxjs/operators';
import { STComponent, STColumn, STData, STChange } from '@delon/abc';
import { AllPersonGQL, AllPerson, PersonWhereInput } from '@shared';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { MtVocabHelper } from '@shared/helper/index';
@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.less'],
})
export class ListPersonComponent implements OnInit {
  @Input() parent: boolean;

  @ViewChild('card') card: ElementRef;

  @ViewChild('modalContent') modalEl: TemplateRef<{}>;

  q: any = {
    namaLengkap: null,
    nomorId: null,
  };
  data: AllPerson.Persons[] = [];
  dataSelected: AllPerson.Persons;

  loading = false;

  @ViewChild('st')
  st: STComponent;
  columns: STColumn[] = [
    {
      title: 'Action',
      buttons: [
        {
          text: 'Select',
          click: (item: any) => this.msg.success(`配置${item.no}`),
          iif: () => this.parent,
        },
        {
          text: 'Edit',
          click: (item: any) => {
            this.dataSelected = item;
            this.add(this.modalEl, 'Edit Data');
          },
        },
      ],
    },

    {
      title: 'Nama Lengkap',
      index: 'namaLengkap',
      sort: {
        default: 'ascend',
        compare: (a, b) => {
          const nameA = a.namaLengkap.toUpperCase();
          const nameB = b.namaLengkap.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        },
      },
    },
    { title: 'Email', index: 'email' },
    { title: 'Telp', index: 'telepon' },
    { title: 'Nomor Id', index: 'nomorId' },
    {
      title: 'Updated At',
      index: 'updatedAt',
      type: 'date',
      sort: {
        compare: (a, b) => a.updatedAt - b.updatedAt,
      },
    },
    {
      title: 'Created At',
      index: 'createdAt',
      type: 'date',
      sort: {
        compare: (a: any, b: any) => moment(a.createdAt).unix() - moment(b.createdAt).unix(),
      },
    },
    // {
    //   title: '服务调用次数',
    //   index: 'callNo',
    //   type: 'number',
    //   format: (item: any) => `${item.callNo} 万`,
    //   sorter: (a: any, b: any) => a.callNo - b.callNo,
    // },
    // {
    //   title: '状态',
    //   index: 'status',
    //   render: 'status',
    //   filter: {
    //     menus: this.status,
    //     fn: (filter: any, record: any) => record.status === filter.index,
    //   },
    // },
    // {
    //   title: '更新时间',
    //   index: 'updatedAt',
    //   type: 'date',
    //   sort: {
    //     compare: (a: any, b: any) => a.updatedAt - b.updatedAt,
    //   },
    // },
    // {
    //   title: '操作',
    //   buttons: [
    //     {
    //       text: '配置',
    //       click: (item: any) => this.msg.success(`配置${item.no}`),
    //     },
    //     {
    //       text: '订阅警报',
    //       click: (item: any) => this.msg.success(`订阅警报${item.no}`),
    //     },
    //   ],
    // },
  ];
  selectedRows: STData[] = [];
  description = '';
  totalCallNo = 0;
  expandForm = false;

  constructor(
    private http: _HttpClient,
    public msg: NzMessageService,
    private modalSrv: NzModalService,
    private cdr: ChangeDetectorRef,
    private allPersonGQL: AllPersonGQL,
    public mtVocab: MtVocabHelper,
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.loading = true;
    console.log(this.searchGenerator());
    this.allPersonGQL
      .watch(this.searchGenerator())
      .valueChanges.pipe(
        map(result => result.data.persons),
        tap(() => (this.loading = false)),
      )
      .subscribe(res => {
        this.data = res;
        this.cdr.detectChanges();
        console.log(this.data);
      });
  }

  searchGenerator(): AllPerson.Variables {
    console.log(this.q);
    if (this.q.namaLengkap || this.q.nomorId) {
      return <AllPerson.Variables>{
        where: <PersonWhereInput>{
          OR: <PersonWhereInput[]>[
            { namaLengkap_contains: this.q.namaLengkap === '' ? null : this.q.namaLengkap },
            { nomorId_contains: this.q.nomorId === '' ? null : this.q.nomorId },
          ],
        },
      };
    }
    console.log('came here');
    return {};
  }

  stChange(e: STChange) {
    switch (e.type) {
      case 'checkbox':
        this.selectedRows = e.checkbox!;
        this.totalCallNo = this.selectedRows.reduce((total, cv) => total + cv.callNo, 0);
        this.cdr.detectChanges();
        break;
      case 'filter':
        this.getData();
        break;
    }
  }

  remove() {
    this.http.delete('/rule', { nos: this.selectedRows.map(i => i.no).join(',') }).subscribe(() => {
      this.getData();
      this.st.clearCheck();
    });
  }

  approval() {
    this.msg.success(`审批了 ${this.selectedRows.length} 笔`);
  }

  add(tpl: TemplateRef<{}>, title: string, data?: any) {
    this.mtVocab.findParent('12090910000063').then(res => {
      console.log(res);
    });

    console.log(this.card.nativeElement.offsetWidth);
    this.modalSrv.create({
      nzTitle: title,
      nzContent: tpl,
      nzWidth: this.card.nativeElement.offsetWidth,
      nzFooter: null,
      nzBodyStyle: {},
      nzOnOk: () => {
        this.loading = true;
        this.http.post('/rule', { description: this.description }).subscribe(() => this.getData());
      },
    });
  }

  closeModal($event) {
    this.modalSrv.closeAll();
  }

  reset() {
    // wait form reset updated finished
    setTimeout(() => this.getData());
  }
}
