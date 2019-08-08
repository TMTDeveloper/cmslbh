import {
  Component,
  OnInit,
  ChangeDetectorRef,
  OnDestroy,
  TemplateRef,
  ViewChild,
  ElementRef,
  Input,
} from '@angular/core';
import { STColumn } from '@delon/abc';
import { NzMessageService, NzTabChangeEvent, NzModalService } from 'ng-zorro-antd';
import { _HttpClient, SettingsService } from '@delon/theme';
import {
  GetCaseGQL,
  GetCase,
  Case,
  GetCaseQuery,
  Application,
  CaseUpdateInput,
  CaseWhereUniqueInput,
  PutCaseGQL,
  CaseConsultationAppCreateWithoutCaseConsultationIdInput,
  UserCreateOneInput,
  PutCaseMutationVariables,
  CaseProgressCreateWithoutCaseIdInput,
  CaseProgressUpdateOneWithoutCaseIdInput,
  CaseProgressActivityLitCreateWithoutCaseProgressActivityIdInput,
  DestroyCaseProgressActivity,
  DestroyCaseProgressActivityGQL,
} from '@shared';
import { QueryRef } from 'apollo-angular';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap, map, tap, take } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';
import { ApolloQueryResult } from 'apollo-client';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { MtVocabHelper } from '@shared/helper';
import * as moment from 'moment';
import { SFSchema, SFComponent } from '@delon/form';

@Component({
  selector: 'app-view-case',
  templateUrl: './view-case.component.html',
  styleUrls: ['./view-case.component.less'],
})
export class ViewCaseComponent implements OnInit, OnDestroy {
  @ViewChild('card') card: ElementRef;
  @ViewChild('sfUmum') sfUmum: SFComponent;
  @ViewChild('modalContentKonsultasi') modalContentKonsultasi: TemplateRef<{}>;
  @ViewChild('modalContentKonsultasiView') modalContentKonsultasiView: TemplateRef<{}>;
  @ViewChild('modalContentAktifitasView') modalContentAktifitasView: TemplateRef<{}>;
  @Input() parent: boolean;
  @Input() caseParam: string;
  list: any[] = [];

  opColumns: STColumn[] = [
    { title: '操作类型', index: 'type' },
    { title: '操作人', index: 'name' },
    { title: '执行结果', index: 'status', render: 'status' },
    { title: '操作时间', index: 'updatedAt', type: 'date' },
    { title: '备注', index: 'memo', default: '-' },
  ];

  cases: QueryRef<GetCase.Query, GetCase.Variables>;
  loading = false;
  caseObs: Subscription;
  data: GetCase.Cases | any = <GetCase.Cases>{};
  caseId: number;
  show = true;
  changeShow() {
    this.show = !this.show;
  }
  modalInstance: any;
  // showedit
  showEditUmum = false;
  dataModalTemp: any = {};
  modeEditModal: string;
  kabid = false;
  constructor(
    public msg: NzMessageService,
    private http: _HttpClient,
    private cdr: ChangeDetectorRef,
    private getCaseGQL: GetCaseGQL,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    public mtVocabHelper: MtVocabHelper,
    private modalSrv: NzModalService,
    private putCaseGQL: PutCaseGQL,
    private settingService: SettingsService,
    private destoryCaseProgressActivity: DestroyCaseProgressActivityGQL,
  ) {
    if ((this.kabid = this.settingService.user.roles_type.find(el => el.type.id === 5))) {
      this.kabid = true;
    }
  }

  public momentF(data) {
    return moment(data);
  }

  getData() {
    // this.cases.refetch({ where: { id: this.caseId } }).then(val => {
    //   console.log(val);
    //   if (val) {
    //     this.data = val;
    //     this.translateMtVocab();
    //   } else {
    //     this.loading = true;
    //     setTimeout(() => {
    //       this.loading = false;
    //       this.location.back();
    //     }, 2000);
    //   }
    //   this.cdr.detectChanges();
    // });
    this.loading = true;
    this.caseObs.unsubscribe();
    this.caseObs = this.cases.valueChanges
      .pipe(
        map(result => result.data.cases[0]),
        tap(() => (this.loading = false)),
      )
      .subscribe(val => {
        console.log(val);
        if (val) {
          this.data = val;
          this.translateMtVocab();
        } else {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.location.back();
          }, 2000);
        }
        this.cdr.detectChanges();
      });
  }
  ngOnInit() {
    if (this.parent) {
      this.caseId = Number(this.caseParam);
      this.cases = this.getCaseGQL.watch(
        // <GetLogRequest.Variables>{ where: { pp_some: { appConsultation: { id: this.settingService.user.id } } } },
        { where: { id: this.caseId } },
        {
          fetchPolicy: 'no-cache',
        },
      );
      this.loading = true;
      this.caseObs = this.cases.valueChanges
        .pipe(
          map(result => result.data.cases[0]),
          tap(() => (this.loading = false)),
        )
        .subscribe(val => {
          console.log(val);
          if (val) {
            this.data = val;
            this.translateMtVocab();
            console.log(this.data);
          } else {
            this.loading = true;
            setTimeout(() => {
              this.loading = false;
              this.location.back();
            }, 2000);
          }
          this.cdr.detectChanges();
        });
    } else {
      this.route.paramMap.subscribe(res => {
        this.caseId = Number(res.get('id'));
        this.cases = this.getCaseGQL.watch(
          // <GetLogRequest.Variables>{ where: { pp_some: { appConsultation: { id: this.settingService.user.id } } } },
          { where: { id: this.caseId } },
          {
            fetchPolicy: 'no-cache',
          },
        );
        this.loading = true;
        this.caseObs = this.cases.valueChanges
          .pipe(
            map(result => result.data.cases[0]),
            tap(() => (this.loading = false)),
          )
          .subscribe(val => {
            console.log(val);
            if (val) {
              this.data = val;
              this.translateMtVocab();
              console.log(this.data);
            } else {
              this.loading = true;
              setTimeout(() => {
                this.loading = false;
                this.location.back();
              }, 2000);
            }
            this.cdr.detectChanges();
          });
      });
    }
    // this.caseObs = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.getCaseGQL
    //       .watch(
    //         // <GetLogRequest.Variables>{ where: { pp_some: { appConsultation: { id: this.settingService.user.id } } } },
    //         { where: { id: Number(params.get('id')) } },
    //         {
    //           fetchPolicy: 'no-cache',
    //         },
    //       )
    //       .valueChanges.pipe(map(result => result.data.cases[0])),
    //   ),
    // );
    // console.log('sampe sini');
    // this.loading = true;
    // this.caseObs = this.cases.valueChanges
    //   .pipe(
    //     map(result => result.data.cases[0]),
    //     tap(() => (this.loading = false)),
    //   )
    //   .subscribe(res => {
    //     console.log(res);
    //     if (res) {
    //       this.data = res;
    //     } else {
    //       this.router.navigateByUrl('/exception/404');
    //     }
    //     this.cdr.detectChanges();
    //   });
  }
  ngOnDestroy(): void {
    this.caseObs.unsubscribe();
  }
  change(args: NzTabChangeEvent) {
    this.list = this.data[`advancedOperation${args.index + 1}`];
  }

  translateMtVocab() {
    this.data.application.statusPerwakilanTeks = this.mtVocabHelper.translateMtVocab(
      this.data.application.statusPerwakilan,
    );
    if ('progresses' in this.data) {
      if (this.data.progresses) {
        if ('jenisPeradilan' in this.data.progresses) {
          this.data.progresses.jenisPeradilanTeks = this.mtVocabHelper.translateMtVocab(
            this.data.progresses.jenisPeradilan,
          );
        }
      }
    }
  }

  translateClients() {
    if (!this.data.application) return '';
    const formatText = this.data.application.clients.map(val => {
      return val.personId.namaLengkap;
    });
    formatText.sort();
    let concattedText = '';
    for (const a of formatText) {
      concattedText === '' ? (concattedText = a) : (concattedText = concattedText + ', ' + a);
    }
    return concattedText;
  }

  translateStatusPk(data) {
    switch (data) {
      case '0111':
        return 'Belum diputuskan';
      case '4111':
        return 'Tidak Didampingi';
      case '5111':
        return 'Transfer';
      case '6111':
        return 'Didampingi';
      case '7111':
        return 'Didampingi sebagai ghost lawyer';
    }
    // { value: '0111', label: 'Belum diputuskan' },
    // { value: '4111', label: 'Tidak Didampingi' },
    // { value: '4111', label: 'Transfer' },
    // { value: '6111', label: 'Didampingi' },
    // { value: '7111', label: 'Didampingi sebagai ghost lawyer' },
  }

  allowedConsultation = async () => {
    if (this.data.hasOwnProperty('application')) {
      const ppList = await this.mtVocabHelper.findConsultationToday(this.data.application.noReg);
      console.log(ppList);
      if (ppList.find(el => el === this.settingService.user.id)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  // schema
  schemaUmum: SFSchema = {
    properties: {
      judulKasus: {
        type: 'string',
        title: 'Judul Kasus',
      },
      kronologiKasus: {
        type: 'string',
        title: 'Kronologi',
        ui: { widget: 'textarea', autosize: { minRows: 6, maxRows: 12 } },
      },
      targetAdvokasi: {
        type: 'string',
        title: 'Target Akhir Advokasi',
        ui: { widget: 'textarea', autosize: { minRows: 6, maxRows: 12 } },
      },
    },
    ui: {
      size: 'large',
    },
  };

  schemaPenangananLebihLanjut: SFSchema = {
    properties: {
      statusPendampingan: {
        type: 'string',
        title: 'Penanganan Lebih Lanjut',
        enum: [
          { value: '0111', label: 'Belum diputuskan' },
          { value: '4111', label: 'Tidak Didampingi' },
          { value: '5111', label: 'Transfer' },
          { value: '6111', label: 'Didampingi' },
          { value: '7111', label: 'Didampingi sebagai ghost lawyer' },
        ],
        ui: {
          widget: 'select',
        },
      },
    },
    ui: {
      size: 'large',
    },
  };

  schemaCatatanPendampingan: SFSchema = {
    properties: {
      jenisPeradilan: {
        type: 'string',
        title: 'Jenis Peradilan',
        ui: {
          widget: 'select',
          asyncData: () => this.mtVocabHelper.getMtVocabEnum(89, 'kode'),
        },
      },
      catatan: {
        type: 'string',
        title: 'Catatan',
        ui: { widget: 'textarea', autosize: { minRows: 6, maxRows: 12 } },
      },
    },
    required: ['jenisPeradilan'],
    ui: {
      size: 'large',
    },
  };

  schemaAktifitasPendampingan: SFSchema = {
    properties: {
      judulAktifitas: {
        type: 'string',
        title: 'Judul',
      },
      tglAktifitas: {
        type: 'string',
        title: 'Tanggal',
        ui: { widget: 'date', mode: 'date', displayFormat: 'dd-MM-yyyy' },
      },
      position: {
        type: 'string',
        title: 'Posisi Kasus',
        ui: { widget: 'textarea', autosize: { minRows: 6, maxRows: 12 } },
      },
      targetAdvokasi: {
        type: 'string',
        title: 'Target Advokasi',
        ui: { widget: 'textarea', autosize: { minRows: 6, maxRows: 12 } },
      },
      capaian: {
        type: 'string',
        title: 'Capaian',
        ui: { widget: 'textarea', autosize: { minRows: 6, maxRows: 12 } },
      },
      hambatan: {
        type: 'string',
        title: 'Hambatan',
        ui: { widget: 'textarea', autosize: { minRows: 6, maxRows: 12 } },
      },
      rencanaStrategi: {
        type: 'string',
        title: 'Rencana Strategi',
        ui: { widget: 'textarea', autosize: { minRows: 6, maxRows: 12 } },
      },
      activitieslit: {
        type: 'string',
        title: 'Aktifitas Litigasi',
        ui: {
          widget: 'select',
          mode: 'tags',
          asyncData: () => this.mtVocabHelper.getMtVocabEnum(83, 'kode'),
        },
      },
      activitiesnonlit: {
        type: 'string',
        title: 'Aktifitas Non-Litigasi',
        ui: {
          widget: 'select',
          mode: 'tags',
          asyncData: () => this.mtVocabHelper.getMtVocabEnum(84, 'kode'),
        },
      },
    },
    required: ['judulAktifitas', 'tglAktifitas', 'activitieslit', 'activitiesnonlit'],
    ui: {
      size: 'large',
    },
  };

  schemaRapatPK: SFSchema = {
    properties: {
      tglRapat: {
        type: 'string',
        title: 'Tanggal Rapat PK',
        ui: { widget: 'date', mode: 'date', displayFormat: 'dd-MM-yyyy' },
      },
      didampingi: {
        type: 'string',
        title: 'Penanganan Lebih Lanjut',
        enum: [
          { value: '0111', label: 'Belum diputuskan' },
          { value: '4111', label: 'Tidak Didampingi' },
          { value: '5111', label: 'Transfer' },
          { value: '6111', label: 'Didampingi' },
          { value: '7111', label: 'Didampingi sebagai ghost lawyer' },
        ],
        ui: {
          widget: 'select',
        },
      },
      ppPendamping: {
        type: 'string',
        title: 'PP Pendamping',
        ui: {
          widget: 'select',
          asyncData: () => this.mtVocabHelper.getUsers(['3']),
          visibleIf: {
            didampingi: (value: any) => value === '0111' || value === '6111' || value === '7111',
          },
        },
      },
      statusAlasanTdk: {
        type: 'string',
        title: 'Alasan bila kasus tidak didampingi/transfer',
        ui: {
          widget: 'textarea',
          autosize: { minRows: 6, maxRows: 12 },
          visibleIf: {
            didampingi: (value: any) => value === '4111' || value === '5111',
          },
        },
      },
    },
    required: ['ppPendamping', 'didampingi', 'tglRapat', 'statusAlasanTdk'],
    ui: {
      size: 'large',
    },
  };

  schemaTransfer: SFSchema = {
    properties: {
      tglTransfer: {
        type: 'string',
        title: 'Tanggal Transfer',
        ui: { widget: 'date', mode: 'date', displayFormat: 'dd-MM-yyyy' },
      },
      network: {
        type: 'string',
        title: 'Ditransfer Ke',
        ui: {
          widget: 'select',
          asyncData: () => this.mtVocabHelper.getNetworksEnum('1'),
        },
      },
      catatan: {
        type: 'string',
        title: 'Catatan',
        ui: {
          widget: 'textarea',
          autosize: { minRows: 6, maxRows: 12 },
        },
      },
    },
    required: ['tglTransfer', 'network'],
    ui: {
      size: 'large',
    },
  };

  submitRapatPK(data) {
    console.log(data);
    this.dataMutationUpdateUmum(this.processDataRapatPK(data), { id: this.data.id });
  }

  submitTransfer(data) {
    console.log(data);
    this.dataMutationUpdateUmum(this.processTransfer(data), { id: this.data.id });
  }

  submitCatatanPendampingan(data) {
    console.log(data);
    this.dataMutationUpdateUmum(this.processCatatanPendampingan(data), { id: this.data.id });
  }

  submitAktifitasPendampingan(data) {
    console.log(data);
    if (this.modeEditModal === 'edit') {
      console.log('hoiii');
      this.destoryCaseProgressActivity
        .mutate({ where: { caseId: this.data.id } })
        .toPromise()
        .then(
          res => {
            this.dataMutationUpdateUmum(this.processAktifitasPendampingan(data), { id: this.data.id });
          },
          error => {
            this.msg.error(JSON.stringify(error));
          },
        );
    } else {
      this.dataMutationUpdateUmum(this.processAktifitasPendampingan(data), { id: this.data.id });
    }
  }

  processAktifitasPendampingan(data): CaseUpdateInput | string {
    if ('activities' in this.data) {
      if (this.data.activites) {
        const activitieslit = <CaseProgressActivityLitCreateWithoutCaseProgressActivityIdInput[]>[];
        for (const a of data.activitieslit) {
          activitieslit.push({
            kodeMt: a,
          });
        }
        const activitiesnonlit = <CaseProgressActivityLitCreateWithoutCaseProgressActivityIdInput[]>[];
        for (const a of data.activitiesnonlit) {
          activitiesnonlit.push({
            kodeMt: a,
          });
        }
        return <CaseUpdateInput>{
          activities: {
            update: [
              {
                data: {
                  capaian: data.capaian,
                  createdBy: this.settingService.user.name,
                  hambatan: data.hambatan,
                  judulAktifitas: data.judulAktifitas,
                  position: data.position,
                  rencanaStrategi: data.rencanaStrategi,
                  targetAdvokasi: data.targetAdvokasi,
                  tglAktifitas: moment(data.tglAktifitas).toDate(),
                  activitieslit: { create: activitieslit },
                  activitiesnonlit: { create: activitiesnonlit },
                  updatedBy: this.settingService.user.name,
                },
                where: { id: data.id },
              },
            ],
          },
        };
      } else {
        console.log('masuksini');
        const activitieslit = <CaseProgressActivityLitCreateWithoutCaseProgressActivityIdInput[]>[];
        for (const a of data.activitieslit) {
          activitieslit.push({
            kodeMt: a,
          });
        }
        const activitiesnonlit = <CaseProgressActivityLitCreateWithoutCaseProgressActivityIdInput[]>[];
        for (const a of data.activitiesnonlit) {
          activitiesnonlit.push({
            kodeMt: a,
          });
        }
        return <CaseUpdateInput>{
          activities: {
            create: [
              {
                capaian: data.capaian,
                createdBy: this.settingService.user.name,
                hambatan: data.hambatan,
                judulAktifitas: data.judulAktifitas,
                position: data.position,
                rencanaStrategi: data.rencanaStrategi,
                targetAdvokasi: data.targetAdvokasi,
                tglAktifitas: moment(data.tglAktifitas).toDate(),
                activitieslit: { create: activitieslit },
                activitiesnonlit: { create: activitiesnonlit },
              },
            ],
          },
        };
      }
    }
  }

  processCatatanPendampingan(data): CaseUpdateInput | string {
    if ('progresses' in this.data) {
      if (this.data.progresses !== null) {
        return <CaseUpdateInput>{
          progresses: {
            update: {
              catatan: data.catatan,
              jenisPeradilan: data.jenisPeradilan,
              updatedBy: this.settingService.user.name,
            },
          },
        };
      } else {
        console.log('masuksini');
        return <CaseUpdateInput>{
          updatedBy: this.settingService.user.name,
          progresses: <CaseProgressUpdateOneWithoutCaseIdInput>{
            create: <CaseProgressCreateWithoutCaseIdInput>{
              updatedBy: '',
              catatan: data.catatan,
              jenisPeradilan: data.jenisPeradilan,
              createdBy: this.settingService.user.name,
            },
          },
        };
      }
    }
  }

  processTransfer(data): CaseUpdateInput | string {
    if ('transfer' in this.data) {
      if (this.data.transfer !== null) {
        return <CaseUpdateInput>{
          transfer: {
            update: {
              catatan: data.catatan,
              network: { connect: { id: data.network } },
              updatedBy: this.settingService.user.name,
              tglTransfer: moment(data.tglTransfer).toDate(),
            },
          },
        };
      } else {
        console.log('masuksini');
        return {
          transfer: {
            create: {
              catatan: data.catatan,
              network: { connect: { id: data.network } },
              createdBy: this.settingService.user.name,
              tglTransfer: moment(data.tglTransfer).toDate(),
            },
          },
        };
      }
    }
  }

  processDataRapatPK(data): CaseUpdateInput | string {
    if ('progresses' in this.data) {
      if (this.data.progresses) {
        return 'Status penanganan lebih lanjut tidak bisa dirubah karena sudah ada aktifitas pendampingan';
      }
    }
    switch (data.didampingi) {
      case '0111':
        return <CaseUpdateInput>{
          statusPendampingan: '0111',
          application: { update: { tahap: '2012' } },
          pk: {
            update: {
              tglRapat: moment(data.tglRapat).toDate(),
              updatedBy: this.settingService.user.name,
              didampingi: data.didampingi,
              ppPendamping: { connect: { id: data.ppPendamping } },
              statusAlasanTdk: '',
            },
          },
          transfer: 'transfer' in this.data ? (this.data.transfer !== null ? { delete: true } : null) : null,
        };
      case '4111':
        return <CaseUpdateInput>{
          statusPendampingan: '4111',
          application: { update: { tahap: '2012' } },
          pk: {
            update: {
              tglRapat: moment(data.tglRapat).toDate(),
              updatedBy: this.settingService.user.name,
              didampingi: data.didampingi,
              ppPendamping:
                'ppPendamping' in this.data.pk
                  ? this.data.pk.ppPendamping !== null
                    ? { disconnect: true }
                    : null
                  : null,
              statusAlasanTdk: data.statusAlasanTdk,
            },
          },
          transfer: 'transfer' in this.data ? (this.data.transfer !== null ? { delete: true } : null) : null,
        };
      case '5111':
        return <CaseUpdateInput>{
          statusPendampingan: '5111',
          application: { update: { tahap: '2012' } },
          pk: {
            update: {
              tglRapat: moment(data.tglRapat).toDate(),
              updatedBy: this.settingService.user.name,
              didampingi: data.didampingi,
              ppPendamping:
                'ppPendamping' in this.data.pk
                  ? this.data.pk.ppPendamping !== null
                    ? { disconnect: true }
                    : null
                  : null,
              statusAlasanTdk: data.statusAlasanTdk,
            },
          },
          transfer:
            'transfer' in this.data
              ? this.data.transfer !== null
                ? null
                : { create: { tglTransfer: moment().toDate() } }
              : { create: { tglTransfer: moment().toDate() } },
        };
      case '6111':
        return <CaseUpdateInput>{
          statusPendampingan: '6111',
          application: { update: { tahap: '2012' } },
          pk: {
            update: {
              tglRapat: moment(data.tglRapat).toDate(),
              updatedBy: this.settingService.user.name,
              didampingi: data.didampingi,
              ppPendamping: { connect: { id: data.ppPendamping } },
              statusAlasanTdk: '',
            },
          },
          transfer: 'transfer' in this.data ? (this.data.transfer !== null ? { delete: true } : null) : null,
        };

      case '7111':
        return <CaseUpdateInput>{
          statusPendampingan: '7111',
          application: { update: { tahap: '2012' } },
          pk: {
            update: {
              tglRapat: moment(data.tglRapat).toDate(),
              updatedBy: this.settingService.user.name,
              didampingi: data.didampingi,
              ppPendamping: { connect: { id: data.ppPendamping } },
              statusAlasanTdk: '',
            },
          },
          transfer: 'transfer' in this.data ? (this.data.transfer !== null ? { delete: true } : null) : null,
        };
    }
  }

  submitUmum(data) {
    console.log(data);
    this.dataMutationUpdateUmum(data, { id: this.data.id });
  }
  editUmum(tpl: TemplateRef<{}>, title: string) {
    this.modalInstance = this.modalSrv.create({
      nzTitle: title,
      nzContent: tpl,
      nzWidth: this.card.nativeElement.offsetWidth,
      nzFooter: null,
      nzBodyStyle: {},
    });
  }

  async openModalRapatPK(template: TemplateRef<{}>) {
    this.loading = true;

    if (!this.settingService.user.roles_type.find(el => el.type.id === 5)) {
      this.msg.info('Hanya Kabid yang bisa mengedit hasil Rapat PK');
      this.loading = false;
      return;
    }

    if ('pk' in this.data) {
      this.dataModalTemp = this.data.pk;
    }

    console.log(this.dataModalTemp);

    this.editUmum(template, 'Edit Data Rapat PK');
    this.loading = false;
  }

  async openModalTransfer(template: TemplateRef<{}>) {
    this.loading = true;

    if (!this.settingService.user.roles_type.find(el => el.type.id === 5)) {
      this.msg.info('Hanya Kabid yang bisa mengedit form Transfer');
      this.loading = false;
      return;
    }
    if ('pk' in this.data) {
      if (this.data.pk !== null) {
        if (this.data.pk.didampingi !== '5111') {
          this.msg.info('Hasil Rapat PK harus menjadi transfer untuk mengedit Form ini');
          this.loading = false;
          return;
        }
      } else {
        if (this.data.statusPendampingan !== '5111') {
          this.msg.info('Status penanganan lebih lanjut bukan untuk di transfer');
          this.loading = false;
          return;
        }
      }
    } else {
      if (this.data.statusPendampingan !== '5111') {
        this.msg.info('Status penanganan lebih lanjut bukan untuk di transfer');
        this.loading = false;
        return;
      }
    }

    console.log(this.dataModalTemp);
    if ('transfer' in this.data) {
      if (this.data.transfer !== null) {
        this.dataModalTemp = this.data.transfer;
      }
    }

    this.editUmum(template, 'Edit Data Transfer');
    this.loading = false;
  }

  async openCatatanPendampingan(template: TemplateRef<{}>) {
    this.loading = true;
    if (this.data.pk !== null) {
      if ('ppPendamping' in this.data.pk) {
        if (this.data.pk.ppPendamping.id !== this.settingService.user.id) {
          this.msg.info('Hanya PP Pendamping Yang Bisa Menambahkan Catatan Pendampingan');
          this.loading = false;
          return;
        }
      }
    } else {
      this.msg.info('PP Pendamping Belum Ditentukan');
      this.loading = false;
      return;
    }
    if ('progresses' in this.data) {
      this.dataModalTemp = this.data.progresses;
    }

    console.log(this.dataModalTemp);

    this.editUmum(template, 'Edit Data Jenis Peradilan');
    this.loading = false;
  }

  async openAktifitasPendampinganAdd(template: TemplateRef<{}>) {
    this.loading = true;
    if (this.data.pk !== null) {
      if ('ppPendamping' in this.data.pk) {
        if (this.data.pk.ppPendamping.id !== this.settingService.user.id) {
          this.msg.info('Hanya PP Pendamping Yang Bisa Menambahkan Catatan Pendampingan');
          this.loading = false;
          return;
        }
      }
    } else {
      this.msg.info('PP Pendamping Belum Ditentukan');
      this.loading = false;
      return;
    }
    if ('activities' in this.data) {
      this.dataModalTemp = this.data.activities;
    }
    this.modeEditModal = 'add';
    this.dataModalTemp = {};
    console.log(this.dataModalTemp);
    this.editAktifitasPendampingan(template, 'Add Data Aktifitas Pendampingan');
    this.loading = false;
  }

  async openModalUmum(template: TemplateRef<{}>) {
    this.loading = true;
    const ppList = await this.mtVocabHelper.findHandlingPPArray(this.data.id);

    if (!ppList[0].find(el => el.id === this.settingService.user.id)) {
      this.msg.info('Anda Tidak Pernah Menangani Kasus Ini');
      this.loading = false;
      return;
    }

    this.dataModalTemp = {
      judulKasus: this.data.judulKasus,
      kronologiKasus: this.data.kronologiKasus,
      targetAdvokasi: this.data.targetAdvokasi,
    };
    console.log(this.dataModalTemp);
    // this.sfUmum. formData = {
    //   judulKasus: this.data.judulKasus,
    //   kronologiKasus: this.data.kronologiKasus,
    //   targetAdvokasi: this.data.targetAdvokasi,
    // };
    this.editUmum(template, 'Edit Data Umum');
    this.loading = false;
  }

  async openModalPenangananLebihLanjut(template: TemplateRef<{}>) {
    this.loading = true;
    const ppList = await this.mtVocabHelper.findHandlingPPArray(this.data.id);

    if ('pk' in this.data) {
      if (this.data.pk !== null) {
        this.msg.info('Sudah ada Rapat PK, edit keputusan melalui Rapat PK');
        this.loading = false;
        return;
      }
    }

    this.dataModalTemp = {
      statusPendampingan: this.data.statusPendampingan,
    };
    console.log(this.dataModalTemp);
    // this.sfUmum. formData = {
    //   judulKasus: this.data.judulKasus,
    //   kronologiKasus: this.data.kronologiKasus,
    //   targetAdvokasi: this.data.targetAdvokasi,
    // };
    this.editUmum(template, 'Edit Penanganan Lebih Lanjut');
    this.loading = false;
  }

  dataMutationUpdateUmum(data: CaseUpdateInput | string, id: CaseWhereUniqueInput) {
    if (typeof data === 'string') {
      this.msg.info(data);
      return;
    }
    console.log(data);
    this.putCaseGQL
      .mutate(<PutCaseMutationVariables>{ where: id, data: data })
      .pipe(take(1))
      .subscribe(
        () => {
          this.msg.success('Data Berhasil Diubah');
          this.getData();
          if (this.modalInstance) this.modalInstance.close();
        },
        error => {
          this.msg.error('Data Gagal Diubah');
          this.msg.error(JSON.stringify(error));
        },
      );
  }

  schemaKonsultasi: SFSchema = {
    properties: {
      judulAktifitas: {
        type: 'string',
        title: 'Judul Aktifitas',
      },
      isiKonsul: {
        type: 'string',
        title: 'Isi Konsultasi',
        ui: { widget: 'textarea', autosize: { minRows: 6, maxRows: 12 } },
      },
      harapan: {
        type: 'string',
        title: 'Harapan',
        ui: { widget: 'textarea', autosize: { minRows: 6, maxRows: 12 } },
      },
      saranHukum: {
        type: 'string',
        title: 'Saran Hukum',
        ui: { widget: 'textarea', autosize: { minRows: 6, maxRows: 12 } },
      },
      rencanaTindakLanjut: {
        type: 'string',
        title: 'Rencana Tindak Lanjut',
        ui: { widget: 'textarea', autosize: { minRows: 6, maxRows: 12 } },
      },
    },
    ui: {
      size: 'large',
    },
  };

  submitKonsultasi(data) {
    console.log(data);
    if (this.modeEditModal === 'add') {
      this.dataMutationUpdateUmum(this.processDataConsultation(data), { id: this.data.id });
    } else {
      this.dataMutationUpdateUmum(this.processDataConsultationEdit(data), { id: this.data.id });
    }
  }

  processDataConsultation(data) {
    const appList: CaseConsultationAppCreateWithoutCaseConsultationIdInput[] = [];
    const logRequestToday = this.data.logRequests.find(el => moment().isSame(el.tglRequest, 'day'));
    console.log(logRequestToday);
    for (const a of logRequestToday.pp) {
      const b = <CaseConsultationAppCreateWithoutCaseConsultationIdInput>{
        appConsultation: { connect: { id: a.appConsultation.id } },
      };
      appList.push(b);
    }

    const dataInput = <CaseUpdateInput>{
      logRequests: { update: [{ where: { ID: logRequestToday.ID }, data: { statusRequest: '2' } }] },
      consultations: {
        create: [
          {
            isiKonsul: data.isiKonsul,
            judulAktifitas: data.judulAktifitas,
            harapan: data.harapan,
            saranHukum: data.saranHukum,
            rencanaTindakLanjut: data.rencanaTindakLanjut,
            tglKonsul: moment().toDate(),
            apps: { create: appList },
          },
        ],
      },
    };
    return dataInput;
  }
  processDataConsultationEdit(data) {
    const appList: CaseConsultationAppCreateWithoutCaseConsultationIdInput[] = [];
    const logRequestToday = this.data.logRequests.find(
      el => moment().isSame(el.tglRequest, 'day') && el.caseId.id === this.data.id,
    );
    console.log(logRequestToday);
    for (const a of logRequestToday.pp) {
      const b = <CaseConsultationAppCreateWithoutCaseConsultationIdInput>{
        appConsultation: { connect: { id: a.appConsultation.id } },
      };
      appList.push(b);
    }
    const dataInput = <CaseUpdateInput>{
      logRequests: { update: [{ where: { ID: logRequestToday.ID }, data: { statusRequest: '2' } }] },
      consultations: {
        update: [
          {
            where: { id: data.id },
            data: {
              isiKonsul: data.isiKonsul,
              judulAktifitas: data.judulAktifitas,
              harapan: data.harapan,
              saranHukum: data.saranHukum,
              rencanaTindakLanjut: data.rencanaTindakLanjut,
            },
          },
        ],
      },
    };
    return dataInput;
  }

  editKonsultasi(tpl: TemplateRef<{}>, title: string) {
    this.modalInstance = this.modalSrv.create({
      nzTitle: title,
      nzContent: tpl,
      nzWidth: this.card.nativeElement.offsetWidth,
      nzFooter: null,
      nzBodyStyle: {},
    });
  }

  editAktifitasPendampingan(tpl: TemplateRef<{}>, title: string) {
    this.modalInstance = this.modalSrv.create({
      nzTitle: title,
      nzContent: tpl,
      nzWidth: this.card.nativeElement.offsetWidth,
      nzFooter: null,
      nzBodyStyle: {},
    });
  }

  openModalKonsultasiAdd(template: TemplateRef<{}>) {
    if (!this.checkEligibleConsultation()) {
      this.msg.info('Tidak Ada Request Konsultasi');
      return;
    }
    this.modeEditModal = 'add';

    this.dataModalTemp = {};
    console.log(this.dataModalTemp);
    this.editKonsultasi(template, 'Add Data Konsultasi');
  }

  openModalKonsultasiEdit(template: TemplateRef<{}>, data) {
    this.modeEditModal = 'edit';

    this.dataModalTemp = data;
    console.log(this.dataModalTemp);
    this.editKonsultasi(template, 'Edit Data Konsultasi');
  }

  async openModalKonsultasiView(template: TemplateRef<{}>, data) {
    const listPP = await this.mtVocabHelper.findHandlingPPString(this.data.id);

    this.dataModalTemp = data;
    this.dataModalTemp.listPP = listPP[0];
    console.log(listPP);
    this.modeEditModal = 'edit';
    console.log(this.dataModalTemp);
    this.editKonsultasi(template, 'View Data Konsultasi');
  }

  async openModalAktifitasView(template: TemplateRef<{}>, data) {
    // const listPP = await this.mtVocabHelper.findHandlingPPString(this.data.id);

    this.dataModalTemp = data;
    this.modeEditModal = 'edit';
    console.log(this.dataModalTemp);
    this.editKonsultasi(template, 'View Data Aktifitas Pendampingan');
  }

  dataMutationUpdateKonsultasi(data: CaseUpdateInput, id: CaseWhereUniqueInput) {
    this.putCaseGQL
      .mutate({ where: id, data: data })
      .pipe(take(1))
      .subscribe(
        () => {
          this.msg.success('Data Berhasil Diubah');
          this.getData();
          if (this.modalInstance) this.modalInstance.close();
        },
        error => {
          this.msg.error('Data Gagal Diubah');
          this.msg.error(JSON.stringify(error));
        },
      );
  }

  // table
  columnsConsultation: STColumn[] = [
    {
      title: 'Action',
      buttons: [
        {
          text: 'Edit',
          click: (item: any) => {
            this.openModalKonsultasiEdit(this.modalContentKonsultasi, item);
          },
          iif: (item: any) => {
            return this.checkEligibleConsultationEdit();
          },
        },
        {
          text: 'View',
          click: (item: any) => {
            this.openModalKonsultasiView(this.modalContentKonsultasiView, item);
          },
        },
      ],
    },
    {
      title: 'Tgl Konsul',
      index: 'tglKonsul',
      type: 'date',
      sort: {
        default: 'ascend',
        compare: (a: any, b: any) => moment(b.tglKonsul).unix() - moment(a.tglKonsul).unix(),
      },
    },
    {
      title: 'Judul Aktifitas',
      index: 'judulAktifitas',
    },
    {
      title: 'PP',
      index: 'applicationId.clients',
      format: (item, col) => {
        console.log(item);
        const pp = item.apps.find(el => {
          if (el.appConsultation.roles_type.find(element => element.type.id === 3)) {
            return true;
          } else return false;
        });
        console.log(pp);
        return pp.appConsultation.name;
      },
    },
    {
      title: 'APP',
      index: 'applicationId.clients',
      format: (item, col) => {
        item.apps.forEach((el, ind, obj) => {
          if (el.appConsultation.roles_type.find(app => app.type.id !== 4)) {
            obj.splice(ind, 1);
          }
        });
        console.log(item.apps);
        const formatText = item.apps.map(val => {
          return val.appConsultation.name;
        });
        formatText.sort();
        let concattedText = '';
        for (const a of formatText) {
          concattedText === '' ? (concattedText = a) : (concattedText = concattedText + ', ' + a);
        }
        return concattedText;
      },
    },
  ];

  columnsCatatanPendampingan: STColumn[] = [
    {
      title: 'Action',
      buttons: [
        {
          text: 'Edit',
          click: (item: any) => {
            this.openModalKonsultasiEdit(this.modalContentKonsultasi, item);
          },
          iif: (item: any) => {
            return this.checkEligibleConsultationEdit();
          },
        },
        {
          text: 'View',
          click: (item: any) => {
            this.openModalAktifitasView(this.modalContentAktifitasView, item);
          },
        },
      ],
    },
    {
      title: 'Tanggal',
      index: 'tglAktifitas',
      type: 'date',
      sort: {
        default: 'ascend',
        compare: (a: any, b: any) => moment(b.tglKonsul).unix() - moment(a.tglKonsul).unix(),
      },
    },
    {
      title: 'Judul Aktifitas',
      index: 'judulAktifitas',
    },
  ];

  checkEligibleConsultation() {
    // return false;
    if (this.data.consultations.find(el => moment().isSame(el.tglKonsul, 'day') && el.caseId.id === this.data.id))
      return false;
    const logRequestToday = this.data.logRequests.find(
      el => moment().isSame(el.tglRequest, 'day') && el.caseId.id === this.data.id,
    );
    if (!logRequestToday) return false;
    if (logRequestToday.pp.find(el => el.appConsultation.id === this.settingService.user.id)) {
      return true;
    } else {
      return false;
    }
  }
  checkEligibleConsultationEdit() {
    // return false;

    const logRequestToday = this.data.logRequests.find(
      el => moment().isSame(el.tglRequest, 'day') && el.caseId.id === this.data.id,
    );
    if (!logRequestToday) return false;
    if (logRequestToday.pp.find(el => el.appConsultation.id === this.settingService.user.id)) {
      return true;
    } else {
      return false;
    }
  }
}
