type Maybe<T> = T | null;

export type AggregateApplication = {
  count: number;
};

export type AggregateCase = {
  count: number;
};

export type AggregateCaseClassification = {
  count: number;
};

export type AggregateCaseConsultation = {
  count: number;
};

export type AggregateCaseConsultationApp = {
  count: number;
};

export type AggregateCaseDocument = {
  count: number;
};

export type AggregateCaseIssue = {
  count: number;
};

export type AggregateCaseKorban = {
  count: number;
};

export type AggregateCasePelaku = {
  count: number;
};

export type AggregateCasePk = {
  count: number;
};

export type AggregateCaseProgress = {
  count: number;
};

export type AggregateCaseProgressActivity = {
  count: number;
};

export type AggregateCaseProgressActivityLit = {
  count: number;
};

export type AggregateCaseProgressActivityNonlit = {
  count: number;
};

export type AggregateCaseTransferReferral = {
  count: number;
};

export type AggregateCaseViolatedRight = {
  count: number;
};

export type AggregateClient = {
  count: number;
};

export type AggregateDaftarPengacara = {
  count: number;
};

export type AggregateDataDict = {
  count: number;
};

export type AggregateDataDictLocal = {
  count: number;
};

export type AggregateLogRequest = {
  count: number;
};

export type AggregateLogRequestApp = {
  count: number;
};

export type AggregateMtVocab = {
  count: number;
};

export type AggregateMtVocabGroup = {
  count: number;
};

export type AggregateNetwork = {
  count: number;
};

export type AggregatePerson = {
  count: number;
};

export type AggregatePersonDocument = {
  count: number;
};

export type AggregateRole = {
  count: number;
};

export type AggregateUser = {
  count: number;
};

export type AggregateUserProfile = {
  count: number;
};

export type Application = {
  id: number;
  createdAt: Date;
  createdBy?: Maybe<string>;
  dudukPerara?: Maybe<string>;
  infoLbh?: Maybe<string>;
  jumlahPenerimaManfaat?: Maybe<number>;
  konfirmasiData: boolean;
  noReg?: Maybe<string>;
  pernahKlien?: Maybe<string>;
  pernahPpLain?: Maybe<string>;
  ppLain?: Maybe<string>;
  regDate?: Maybe<Date>;
  relasiWakilClient?: Maybe<string>;
  setujuAdvokasi: boolean;
  statusPerwakilan?: Maybe<string>;
  updatedAt: Date;
  updatedBy?: Maybe<string>;
  wakilId: Person;
  waktuPernahKlien?: Maybe<string>;
  whyLbh?: Maybe<string>;
  case: Case;
  clients?: Maybe<Array<Client>>;
};

export type ApplicationClientsArgs = {
  where?: Maybe<ClientWhereInput>;
  orderBy?: Maybe<ClientOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type ApplicationConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<ApplicationEdge>>;
  aggregate: AggregateApplication;
};

export type ApplicationCreateInput = {
  createdBy: Maybe<string>;
  dudukPerara: Maybe<string>;
  infoLbh: Maybe<string>;
  jumlahPenerimaManfaat: Maybe<number>;
  konfirmasiData: boolean;
  noReg: Maybe<string>;
  pernahKlien: Maybe<string>;
  pernahPpLain: Maybe<string>;
  ppLain: Maybe<string>;
  regDate: Maybe<Date>;
  relasiWakilClient: Maybe<string>;
  setujuAdvokasi: boolean;
  statusPerwakilan: Maybe<string>;
  updatedBy: Maybe<string>;
  waktuPernahKlien: Maybe<string>;
  whyLbh: Maybe<string>;
  wakilId: PersonCreateOneWithoutApplicationsInput;
  case: CaseCreateOneWithoutApplicationInput;
  clients: Maybe<ClientCreateManyWithoutApplicationIdInput>;
};

export type ApplicationCreateManyWithoutWakilIdInput = {
  create: Maybe<Array<ApplicationCreateWithoutWakilIdInput>>;
  connect: Maybe<Array<ApplicationWhereUniqueInput>>;
};

export type ApplicationCreateOneWithoutCaseInput = {
  create: Maybe<ApplicationCreateWithoutCaseInput>;
  connect: Maybe<ApplicationWhereUniqueInput>;
};

export type ApplicationCreateOneWithoutClientsInput = {
  create: Maybe<ApplicationCreateWithoutClientsInput>;
  connect: Maybe<ApplicationWhereUniqueInput>;
};

export type ApplicationCreateWithoutCaseInput = {
  createdBy: Maybe<string>;
  dudukPerara: Maybe<string>;
  infoLbh: Maybe<string>;
  jumlahPenerimaManfaat: Maybe<number>;
  konfirmasiData: boolean;
  noReg: Maybe<string>;
  pernahKlien: Maybe<string>;
  pernahPpLain: Maybe<string>;
  ppLain: Maybe<string>;
  regDate: Maybe<Date>;
  relasiWakilClient: Maybe<string>;
  setujuAdvokasi: boolean;
  statusPerwakilan: Maybe<string>;
  updatedBy: Maybe<string>;
  waktuPernahKlien: Maybe<string>;
  whyLbh: Maybe<string>;
  wakilId: PersonCreateOneWithoutApplicationsInput;
  clients: Maybe<ClientCreateManyWithoutApplicationIdInput>;
};

export type ApplicationCreateWithoutClientsInput = {
  createdBy: Maybe<string>;
  dudukPerara: Maybe<string>;
  infoLbh: Maybe<string>;
  jumlahPenerimaManfaat: Maybe<number>;
  konfirmasiData: boolean;
  noReg: Maybe<string>;
  pernahKlien: Maybe<string>;
  pernahPpLain: Maybe<string>;
  ppLain: Maybe<string>;
  regDate: Maybe<Date>;
  relasiWakilClient: Maybe<string>;
  setujuAdvokasi: boolean;
  statusPerwakilan: Maybe<string>;
  updatedBy: Maybe<string>;
  waktuPernahKlien: Maybe<string>;
  whyLbh: Maybe<string>;
  wakilId: PersonCreateOneWithoutApplicationsInput;
  case: CaseCreateOneWithoutApplicationInput;
};

export type ApplicationCreateWithoutWakilIdInput = {
  createdBy: Maybe<string>;
  dudukPerara: Maybe<string>;
  infoLbh: Maybe<string>;
  jumlahPenerimaManfaat: Maybe<number>;
  konfirmasiData: boolean;
  noReg: Maybe<string>;
  pernahKlien: Maybe<string>;
  pernahPpLain: Maybe<string>;
  ppLain: Maybe<string>;
  regDate: Maybe<Date>;
  relasiWakilClient: Maybe<string>;
  setujuAdvokasi: boolean;
  statusPerwakilan: Maybe<string>;
  updatedBy: Maybe<string>;
  waktuPernahKlien: Maybe<string>;
  whyLbh: Maybe<string>;
  case: CaseCreateOneWithoutApplicationInput;
  clients: Maybe<ClientCreateManyWithoutApplicationIdInput>;
};

export type ApplicationEdge = {
  node: Application;
  cursor: string;
};

export enum ApplicationOrderByInput {
  Id_Asc = 'id_ASC',
  Id_Desc = 'id_DESC',
  CreatedAt_Asc = 'createdAt_ASC',
  CreatedAt_Desc = 'createdAt_DESC',
  CreatedBy_Asc = 'createdBy_ASC',
  CreatedBy_Desc = 'createdBy_DESC',
  DudukPerara_Asc = 'dudukPerara_ASC',
  DudukPerara_Desc = 'dudukPerara_DESC',
  InfoLbh_Asc = 'infoLbh_ASC',
  InfoLbh_Desc = 'infoLbh_DESC',
  JumlahPenerimaManfaat_Asc = 'jumlahPenerimaManfaat_ASC',
  JumlahPenerimaManfaat_Desc = 'jumlahPenerimaManfaat_DESC',
  KonfirmasiData_Asc = 'konfirmasiData_ASC',
  KonfirmasiData_Desc = 'konfirmasiData_DESC',
  NoReg_Asc = 'noReg_ASC',
  NoReg_Desc = 'noReg_DESC',
  PernahKlien_Asc = 'pernahKlien_ASC',
  PernahKlien_Desc = 'pernahKlien_DESC',
  PernahPpLain_Asc = 'pernahPpLain_ASC',
  PernahPpLain_Desc = 'pernahPpLain_DESC',
  PpLain_Asc = 'ppLain_ASC',
  PpLain_Desc = 'ppLain_DESC',
  RegDate_Asc = 'regDate_ASC',
  RegDate_Desc = 'regDate_DESC',
  RelasiWakilClient_Asc = 'relasiWakilClient_ASC',
  RelasiWakilClient_Desc = 'relasiWakilClient_DESC',
  SetujuAdvokasi_Asc = 'setujuAdvokasi_ASC',
  SetujuAdvokasi_Desc = 'setujuAdvokasi_DESC',
  StatusPerwakilan_Asc = 'statusPerwakilan_ASC',
  StatusPerwakilan_Desc = 'statusPerwakilan_DESC',
  UpdatedAt_Asc = 'updatedAt_ASC',
  UpdatedAt_Desc = 'updatedAt_DESC',
  UpdatedBy_Asc = 'updatedBy_ASC',
  UpdatedBy_Desc = 'updatedBy_DESC',
  WaktuPernahKlien_Asc = 'waktuPernahKlien_ASC',
  WaktuPernahKlien_Desc = 'waktuPernahKlien_DESC',
  WhyLbh_Asc = 'whyLbh_ASC',
  WhyLbh_Desc = 'whyLbh_DESC',
}

export type ApplicationPreviousValues = {
  id: number;
  createdAt: Date;
  createdBy?: Maybe<string>;
  dudukPerara?: Maybe<string>;
  infoLbh?: Maybe<string>;
  jumlahPenerimaManfaat?: Maybe<number>;
  konfirmasiData: boolean;
  noReg?: Maybe<string>;
  pernahKlien?: Maybe<string>;
  pernahPpLain?: Maybe<string>;
  ppLain?: Maybe<string>;
  regDate?: Maybe<Date>;
  relasiWakilClient?: Maybe<string>;
  setujuAdvokasi: boolean;
  statusPerwakilan?: Maybe<string>;
  updatedAt: Date;
  updatedBy?: Maybe<string>;
  waktuPernahKlien?: Maybe<string>;
  whyLbh?: Maybe<string>;
};

export type ApplicationScalarWhereInput = {
  AND: Maybe<Array<ApplicationScalarWhereInput>>;
  OR: Maybe<Array<ApplicationScalarWhereInput>>;
  NOT: Maybe<Array<ApplicationScalarWhereInput>>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  createdAt: Maybe<Date>;
  createdAt_not: Maybe<Date>;
  createdAt_in: Maybe<Array<Date>>;
  createdAt_not_in: Maybe<Array<Date>>;
  createdAt_lt: Maybe<Date>;
  createdAt_lte: Maybe<Date>;
  createdAt_gt: Maybe<Date>;
  createdAt_gte: Maybe<Date>;
  createdBy: Maybe<string>;
  createdBy_not: Maybe<string>;
  createdBy_in: Maybe<Array<string>>;
  createdBy_not_in: Maybe<Array<string>>;
  createdBy_lt: Maybe<string>;
  createdBy_lte: Maybe<string>;
  createdBy_gt: Maybe<string>;
  createdBy_gte: Maybe<string>;
  createdBy_contains: Maybe<string>;
  createdBy_not_contains: Maybe<string>;
  createdBy_starts_with: Maybe<string>;
  createdBy_not_starts_with: Maybe<string>;
  createdBy_ends_with: Maybe<string>;
  createdBy_not_ends_with: Maybe<string>;
  dudukPerara: Maybe<string>;
  dudukPerara_not: Maybe<string>;
  dudukPerara_in: Maybe<Array<string>>;
  dudukPerara_not_in: Maybe<Array<string>>;
  dudukPerara_lt: Maybe<string>;
  dudukPerara_lte: Maybe<string>;
  dudukPerara_gt: Maybe<string>;
  dudukPerara_gte: Maybe<string>;
  dudukPerara_contains: Maybe<string>;
  dudukPerara_not_contains: Maybe<string>;
  dudukPerara_starts_with: Maybe<string>;
  dudukPerara_not_starts_with: Maybe<string>;
  dudukPerara_ends_with: Maybe<string>;
  dudukPerara_not_ends_with: Maybe<string>;
  infoLbh: Maybe<string>;
  infoLbh_not: Maybe<string>;
  infoLbh_in: Maybe<Array<string>>;
  infoLbh_not_in: Maybe<Array<string>>;
  infoLbh_lt: Maybe<string>;
  infoLbh_lte: Maybe<string>;
  infoLbh_gt: Maybe<string>;
  infoLbh_gte: Maybe<string>;
  infoLbh_contains: Maybe<string>;
  infoLbh_not_contains: Maybe<string>;
  infoLbh_starts_with: Maybe<string>;
  infoLbh_not_starts_with: Maybe<string>;
  infoLbh_ends_with: Maybe<string>;
  infoLbh_not_ends_with: Maybe<string>;
  jumlahPenerimaManfaat: Maybe<number>;
  jumlahPenerimaManfaat_not: Maybe<number>;
  jumlahPenerimaManfaat_in: Maybe<Array<number>>;
  jumlahPenerimaManfaat_not_in: Maybe<Array<number>>;
  jumlahPenerimaManfaat_lt: Maybe<number>;
  jumlahPenerimaManfaat_lte: Maybe<number>;
  jumlahPenerimaManfaat_gt: Maybe<number>;
  jumlahPenerimaManfaat_gte: Maybe<number>;
  konfirmasiData: Maybe<boolean>;
  konfirmasiData_not: Maybe<boolean>;
  noReg: Maybe<string>;
  noReg_not: Maybe<string>;
  noReg_in: Maybe<Array<string>>;
  noReg_not_in: Maybe<Array<string>>;
  noReg_lt: Maybe<string>;
  noReg_lte: Maybe<string>;
  noReg_gt: Maybe<string>;
  noReg_gte: Maybe<string>;
  noReg_contains: Maybe<string>;
  noReg_not_contains: Maybe<string>;
  noReg_starts_with: Maybe<string>;
  noReg_not_starts_with: Maybe<string>;
  noReg_ends_with: Maybe<string>;
  noReg_not_ends_with: Maybe<string>;
  pernahKlien: Maybe<string>;
  pernahKlien_not: Maybe<string>;
  pernahKlien_in: Maybe<Array<string>>;
  pernahKlien_not_in: Maybe<Array<string>>;
  pernahKlien_lt: Maybe<string>;
  pernahKlien_lte: Maybe<string>;
  pernahKlien_gt: Maybe<string>;
  pernahKlien_gte: Maybe<string>;
  pernahKlien_contains: Maybe<string>;
  pernahKlien_not_contains: Maybe<string>;
  pernahKlien_starts_with: Maybe<string>;
  pernahKlien_not_starts_with: Maybe<string>;
  pernahKlien_ends_with: Maybe<string>;
  pernahKlien_not_ends_with: Maybe<string>;
  pernahPpLain: Maybe<string>;
  pernahPpLain_not: Maybe<string>;
  pernahPpLain_in: Maybe<Array<string>>;
  pernahPpLain_not_in: Maybe<Array<string>>;
  pernahPpLain_lt: Maybe<string>;
  pernahPpLain_lte: Maybe<string>;
  pernahPpLain_gt: Maybe<string>;
  pernahPpLain_gte: Maybe<string>;
  pernahPpLain_contains: Maybe<string>;
  pernahPpLain_not_contains: Maybe<string>;
  pernahPpLain_starts_with: Maybe<string>;
  pernahPpLain_not_starts_with: Maybe<string>;
  pernahPpLain_ends_with: Maybe<string>;
  pernahPpLain_not_ends_with: Maybe<string>;
  ppLain: Maybe<string>;
  ppLain_not: Maybe<string>;
  ppLain_in: Maybe<Array<string>>;
  ppLain_not_in: Maybe<Array<string>>;
  ppLain_lt: Maybe<string>;
  ppLain_lte: Maybe<string>;
  ppLain_gt: Maybe<string>;
  ppLain_gte: Maybe<string>;
  ppLain_contains: Maybe<string>;
  ppLain_not_contains: Maybe<string>;
  ppLain_starts_with: Maybe<string>;
  ppLain_not_starts_with: Maybe<string>;
  ppLain_ends_with: Maybe<string>;
  ppLain_not_ends_with: Maybe<string>;
  regDate: Maybe<Date>;
  regDate_not: Maybe<Date>;
  regDate_in: Maybe<Array<Date>>;
  regDate_not_in: Maybe<Array<Date>>;
  regDate_lt: Maybe<Date>;
  regDate_lte: Maybe<Date>;
  regDate_gt: Maybe<Date>;
  regDate_gte: Maybe<Date>;
  relasiWakilClient: Maybe<string>;
  relasiWakilClient_not: Maybe<string>;
  relasiWakilClient_in: Maybe<Array<string>>;
  relasiWakilClient_not_in: Maybe<Array<string>>;
  relasiWakilClient_lt: Maybe<string>;
  relasiWakilClient_lte: Maybe<string>;
  relasiWakilClient_gt: Maybe<string>;
  relasiWakilClient_gte: Maybe<string>;
  relasiWakilClient_contains: Maybe<string>;
  relasiWakilClient_not_contains: Maybe<string>;
  relasiWakilClient_starts_with: Maybe<string>;
  relasiWakilClient_not_starts_with: Maybe<string>;
  relasiWakilClient_ends_with: Maybe<string>;
  relasiWakilClient_not_ends_with: Maybe<string>;
  setujuAdvokasi: Maybe<boolean>;
  setujuAdvokasi_not: Maybe<boolean>;
  statusPerwakilan: Maybe<string>;
  statusPerwakilan_not: Maybe<string>;
  statusPerwakilan_in: Maybe<Array<string>>;
  statusPerwakilan_not_in: Maybe<Array<string>>;
  statusPerwakilan_lt: Maybe<string>;
  statusPerwakilan_lte: Maybe<string>;
  statusPerwakilan_gt: Maybe<string>;
  statusPerwakilan_gte: Maybe<string>;
  statusPerwakilan_contains: Maybe<string>;
  statusPerwakilan_not_contains: Maybe<string>;
  statusPerwakilan_starts_with: Maybe<string>;
  statusPerwakilan_not_starts_with: Maybe<string>;
  statusPerwakilan_ends_with: Maybe<string>;
  statusPerwakilan_not_ends_with: Maybe<string>;
  updatedAt: Maybe<Date>;
  updatedAt_not: Maybe<Date>;
  updatedAt_in: Maybe<Array<Date>>;
  updatedAt_not_in: Maybe<Array<Date>>;
  updatedAt_lt: Maybe<Date>;
  updatedAt_lte: Maybe<Date>;
  updatedAt_gt: Maybe<Date>;
  updatedAt_gte: Maybe<Date>;
  updatedBy: Maybe<string>;
  updatedBy_not: Maybe<string>;
  updatedBy_in: Maybe<Array<string>>;
  updatedBy_not_in: Maybe<Array<string>>;
  updatedBy_lt: Maybe<string>;
  updatedBy_lte: Maybe<string>;
  updatedBy_gt: Maybe<string>;
  updatedBy_gte: Maybe<string>;
  updatedBy_contains: Maybe<string>;
  updatedBy_not_contains: Maybe<string>;
  updatedBy_starts_with: Maybe<string>;
  updatedBy_not_starts_with: Maybe<string>;
  updatedBy_ends_with: Maybe<string>;
  updatedBy_not_ends_with: Maybe<string>;
  waktuPernahKlien: Maybe<string>;
  waktuPernahKlien_not: Maybe<string>;
  waktuPernahKlien_in: Maybe<Array<string>>;
  waktuPernahKlien_not_in: Maybe<Array<string>>;
  waktuPernahKlien_lt: Maybe<string>;
  waktuPernahKlien_lte: Maybe<string>;
  waktuPernahKlien_gt: Maybe<string>;
  waktuPernahKlien_gte: Maybe<string>;
  waktuPernahKlien_contains: Maybe<string>;
  waktuPernahKlien_not_contains: Maybe<string>;
  waktuPernahKlien_starts_with: Maybe<string>;
  waktuPernahKlien_not_starts_with: Maybe<string>;
  waktuPernahKlien_ends_with: Maybe<string>;
  waktuPernahKlien_not_ends_with: Maybe<string>;
  whyLbh: Maybe<string>;
  whyLbh_not: Maybe<string>;
  whyLbh_in: Maybe<Array<string>>;
  whyLbh_not_in: Maybe<Array<string>>;
  whyLbh_lt: Maybe<string>;
  whyLbh_lte: Maybe<string>;
  whyLbh_gt: Maybe<string>;
  whyLbh_gte: Maybe<string>;
  whyLbh_contains: Maybe<string>;
  whyLbh_not_contains: Maybe<string>;
  whyLbh_starts_with: Maybe<string>;
  whyLbh_not_starts_with: Maybe<string>;
  whyLbh_ends_with: Maybe<string>;
  whyLbh_not_ends_with: Maybe<string>;
};

export type ApplicationSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<Application>;
  updatedFields?: Maybe<Array<string>>;
  previousValues?: Maybe<ApplicationPreviousValues>;
};

export type ApplicationSubscriptionWhereInput = {
  AND: Maybe<Array<ApplicationSubscriptionWhereInput>>;
  OR: Maybe<Array<ApplicationSubscriptionWhereInput>>;
  NOT: Maybe<Array<ApplicationSubscriptionWhereInput>>;
  mutation_in: Maybe<Array<MutationType>>;
  updatedFields_contains: Maybe<string>;
  updatedFields_contains_every: Maybe<Array<string>>;
  updatedFields_contains_some: Maybe<Array<string>>;
  node: Maybe<ApplicationWhereInput>;
};

export type ApplicationUpdateInput = {
  createdBy: Maybe<string>;
  dudukPerara: Maybe<string>;
  infoLbh: Maybe<string>;
  jumlahPenerimaManfaat: Maybe<number>;
  konfirmasiData: Maybe<boolean>;
  noReg: Maybe<string>;
  pernahKlien: Maybe<string>;
  pernahPpLain: Maybe<string>;
  ppLain: Maybe<string>;
  regDate: Maybe<Date>;
  relasiWakilClient: Maybe<string>;
  setujuAdvokasi: Maybe<boolean>;
  statusPerwakilan: Maybe<string>;
  updatedBy: Maybe<string>;
  waktuPernahKlien: Maybe<string>;
  whyLbh: Maybe<string>;
  wakilId: Maybe<PersonUpdateOneRequiredWithoutApplicationsInput>;
  case: Maybe<CaseUpdateOneRequiredWithoutApplicationInput>;
  clients: Maybe<ClientUpdateManyWithoutApplicationIdInput>;
};

export type ApplicationUpdateManyDataInput = {
  createdBy: Maybe<string>;
  dudukPerara: Maybe<string>;
  infoLbh: Maybe<string>;
  jumlahPenerimaManfaat: Maybe<number>;
  konfirmasiData: Maybe<boolean>;
  noReg: Maybe<string>;
  pernahKlien: Maybe<string>;
  pernahPpLain: Maybe<string>;
  ppLain: Maybe<string>;
  regDate: Maybe<Date>;
  relasiWakilClient: Maybe<string>;
  setujuAdvokasi: Maybe<boolean>;
  statusPerwakilan: Maybe<string>;
  updatedBy: Maybe<string>;
  waktuPernahKlien: Maybe<string>;
  whyLbh: Maybe<string>;
};

export type ApplicationUpdateManyMutationInput = {
  createdBy: Maybe<string>;
  dudukPerara: Maybe<string>;
  infoLbh: Maybe<string>;
  jumlahPenerimaManfaat: Maybe<number>;
  konfirmasiData: Maybe<boolean>;
  noReg: Maybe<string>;
  pernahKlien: Maybe<string>;
  pernahPpLain: Maybe<string>;
  ppLain: Maybe<string>;
  regDate: Maybe<Date>;
  relasiWakilClient: Maybe<string>;
  setujuAdvokasi: Maybe<boolean>;
  statusPerwakilan: Maybe<string>;
  updatedBy: Maybe<string>;
  waktuPernahKlien: Maybe<string>;
  whyLbh: Maybe<string>;
};

export type ApplicationUpdateManyWithoutWakilIdInput = {
  create: Maybe<Array<ApplicationCreateWithoutWakilIdInput>>;
  connect: Maybe<Array<ApplicationWhereUniqueInput>>;
  set: Maybe<Array<ApplicationWhereUniqueInput>>;
  disconnect: Maybe<Array<ApplicationWhereUniqueInput>>;
  delete: Maybe<Array<ApplicationWhereUniqueInput>>;
  update: Maybe<Array<ApplicationUpdateWithWhereUniqueWithoutWakilIdInput>>;
  updateMany: Maybe<Array<ApplicationUpdateManyWithWhereNestedInput>>;
  deleteMany: Maybe<Array<ApplicationScalarWhereInput>>;
  upsert: Maybe<Array<ApplicationUpsertWithWhereUniqueWithoutWakilIdInput>>;
};

export type ApplicationUpdateManyWithWhereNestedInput = {
  where: ApplicationScalarWhereInput;
  data: ApplicationUpdateManyDataInput;
};

export type ApplicationUpdateOneRequiredWithoutCaseInput = {
  create: Maybe<ApplicationCreateWithoutCaseInput>;
  connect: Maybe<ApplicationWhereUniqueInput>;
  update: Maybe<ApplicationUpdateWithoutCaseDataInput>;
  upsert: Maybe<ApplicationUpsertWithoutCaseInput>;
};

export type ApplicationUpdateOneRequiredWithoutClientsInput = {
  create: Maybe<ApplicationCreateWithoutClientsInput>;
  connect: Maybe<ApplicationWhereUniqueInput>;
  update: Maybe<ApplicationUpdateWithoutClientsDataInput>;
  upsert: Maybe<ApplicationUpsertWithoutClientsInput>;
};

export type ApplicationUpdateWithoutCaseDataInput = {
  createdBy: Maybe<string>;
  dudukPerara: Maybe<string>;
  infoLbh: Maybe<string>;
  jumlahPenerimaManfaat: Maybe<number>;
  konfirmasiData: Maybe<boolean>;
  noReg: Maybe<string>;
  pernahKlien: Maybe<string>;
  pernahPpLain: Maybe<string>;
  ppLain: Maybe<string>;
  regDate: Maybe<Date>;
  relasiWakilClient: Maybe<string>;
  setujuAdvokasi: Maybe<boolean>;
  statusPerwakilan: Maybe<string>;
  updatedBy: Maybe<string>;
  waktuPernahKlien: Maybe<string>;
  whyLbh: Maybe<string>;
  wakilId: Maybe<PersonUpdateOneRequiredWithoutApplicationsInput>;
  clients: Maybe<ClientUpdateManyWithoutApplicationIdInput>;
};

export type ApplicationUpdateWithoutClientsDataInput = {
  createdBy: Maybe<string>;
  dudukPerara: Maybe<string>;
  infoLbh: Maybe<string>;
  jumlahPenerimaManfaat: Maybe<number>;
  konfirmasiData: Maybe<boolean>;
  noReg: Maybe<string>;
  pernahKlien: Maybe<string>;
  pernahPpLain: Maybe<string>;
  ppLain: Maybe<string>;
  regDate: Maybe<Date>;
  relasiWakilClient: Maybe<string>;
  setujuAdvokasi: Maybe<boolean>;
  statusPerwakilan: Maybe<string>;
  updatedBy: Maybe<string>;
  waktuPernahKlien: Maybe<string>;
  whyLbh: Maybe<string>;
  wakilId: Maybe<PersonUpdateOneRequiredWithoutApplicationsInput>;
  case: Maybe<CaseUpdateOneRequiredWithoutApplicationInput>;
};

export type ApplicationUpdateWithoutWakilIdDataInput = {
  createdBy: Maybe<string>;
  dudukPerara: Maybe<string>;
  infoLbh: Maybe<string>;
  jumlahPenerimaManfaat: Maybe<number>;
  konfirmasiData: Maybe<boolean>;
  noReg: Maybe<string>;
  pernahKlien: Maybe<string>;
  pernahPpLain: Maybe<string>;
  ppLain: Maybe<string>;
  regDate: Maybe<Date>;
  relasiWakilClient: Maybe<string>;
  setujuAdvokasi: Maybe<boolean>;
  statusPerwakilan: Maybe<string>;
  updatedBy: Maybe<string>;
  waktuPernahKlien: Maybe<string>;
  whyLbh: Maybe<string>;
  case: Maybe<CaseUpdateOneRequiredWithoutApplicationInput>;
  clients: Maybe<ClientUpdateManyWithoutApplicationIdInput>;
};

export type ApplicationUpdateWithWhereUniqueWithoutWakilIdInput = {
  where: ApplicationWhereUniqueInput;
  data: ApplicationUpdateWithoutWakilIdDataInput;
};

export type ApplicationUpsertWithoutCaseInput = {
  update: ApplicationUpdateWithoutCaseDataInput;
  create: ApplicationCreateWithoutCaseInput;
};

export type ApplicationUpsertWithoutClientsInput = {
  update: ApplicationUpdateWithoutClientsDataInput;
  create: ApplicationCreateWithoutClientsInput;
};

export type ApplicationUpsertWithWhereUniqueWithoutWakilIdInput = {
  where: ApplicationWhereUniqueInput;
  update: ApplicationUpdateWithoutWakilIdDataInput;
  create: ApplicationCreateWithoutWakilIdInput;
};

export type ApplicationWhereInput = {
  AND: Maybe<Array<ApplicationWhereInput>>;
  OR: Maybe<Array<ApplicationWhereInput>>;
  NOT: Maybe<Array<ApplicationWhereInput>>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  createdAt: Maybe<Date>;
  createdAt_not: Maybe<Date>;
  createdAt_in: Maybe<Array<Date>>;
  createdAt_not_in: Maybe<Array<Date>>;
  createdAt_lt: Maybe<Date>;
  createdAt_lte: Maybe<Date>;
  createdAt_gt: Maybe<Date>;
  createdAt_gte: Maybe<Date>;
  createdBy: Maybe<string>;
  createdBy_not: Maybe<string>;
  createdBy_in: Maybe<Array<string>>;
  createdBy_not_in: Maybe<Array<string>>;
  createdBy_lt: Maybe<string>;
  createdBy_lte: Maybe<string>;
  createdBy_gt: Maybe<string>;
  createdBy_gte: Maybe<string>;
  createdBy_contains: Maybe<string>;
  createdBy_not_contains: Maybe<string>;
  createdBy_starts_with: Maybe<string>;
  createdBy_not_starts_with: Maybe<string>;
  createdBy_ends_with: Maybe<string>;
  createdBy_not_ends_with: Maybe<string>;
  dudukPerara: Maybe<string>;
  dudukPerara_not: Maybe<string>;
  dudukPerara_in: Maybe<Array<string>>;
  dudukPerara_not_in: Maybe<Array<string>>;
  dudukPerara_lt: Maybe<string>;
  dudukPerara_lte: Maybe<string>;
  dudukPerara_gt: Maybe<string>;
  dudukPerara_gte: Maybe<string>;
  dudukPerara_contains: Maybe<string>;
  dudukPerara_not_contains: Maybe<string>;
  dudukPerara_starts_with: Maybe<string>;
  dudukPerara_not_starts_with: Maybe<string>;
  dudukPerara_ends_with: Maybe<string>;
  dudukPerara_not_ends_with: Maybe<string>;
  infoLbh: Maybe<string>;
  infoLbh_not: Maybe<string>;
  infoLbh_in: Maybe<Array<string>>;
  infoLbh_not_in: Maybe<Array<string>>;
  infoLbh_lt: Maybe<string>;
  infoLbh_lte: Maybe<string>;
  infoLbh_gt: Maybe<string>;
  infoLbh_gte: Maybe<string>;
  infoLbh_contains: Maybe<string>;
  infoLbh_not_contains: Maybe<string>;
  infoLbh_starts_with: Maybe<string>;
  infoLbh_not_starts_with: Maybe<string>;
  infoLbh_ends_with: Maybe<string>;
  infoLbh_not_ends_with: Maybe<string>;
  jumlahPenerimaManfaat: Maybe<number>;
  jumlahPenerimaManfaat_not: Maybe<number>;
  jumlahPenerimaManfaat_in: Maybe<Array<number>>;
  jumlahPenerimaManfaat_not_in: Maybe<Array<number>>;
  jumlahPenerimaManfaat_lt: Maybe<number>;
  jumlahPenerimaManfaat_lte: Maybe<number>;
  jumlahPenerimaManfaat_gt: Maybe<number>;
  jumlahPenerimaManfaat_gte: Maybe<number>;
  konfirmasiData: Maybe<boolean>;
  konfirmasiData_not: Maybe<boolean>;
  noReg: Maybe<string>;
  noReg_not: Maybe<string>;
  noReg_in: Maybe<Array<string>>;
  noReg_not_in: Maybe<Array<string>>;
  noReg_lt: Maybe<string>;
  noReg_lte: Maybe<string>;
  noReg_gt: Maybe<string>;
  noReg_gte: Maybe<string>;
  noReg_contains: Maybe<string>;
  noReg_not_contains: Maybe<string>;
  noReg_starts_with: Maybe<string>;
  noReg_not_starts_with: Maybe<string>;
  noReg_ends_with: Maybe<string>;
  noReg_not_ends_with: Maybe<string>;
  pernahKlien: Maybe<string>;
  pernahKlien_not: Maybe<string>;
  pernahKlien_in: Maybe<Array<string>>;
  pernahKlien_not_in: Maybe<Array<string>>;
  pernahKlien_lt: Maybe<string>;
  pernahKlien_lte: Maybe<string>;
  pernahKlien_gt: Maybe<string>;
  pernahKlien_gte: Maybe<string>;
  pernahKlien_contains: Maybe<string>;
  pernahKlien_not_contains: Maybe<string>;
  pernahKlien_starts_with: Maybe<string>;
  pernahKlien_not_starts_with: Maybe<string>;
  pernahKlien_ends_with: Maybe<string>;
  pernahKlien_not_ends_with: Maybe<string>;
  pernahPpLain: Maybe<string>;
  pernahPpLain_not: Maybe<string>;
  pernahPpLain_in: Maybe<Array<string>>;
  pernahPpLain_not_in: Maybe<Array<string>>;
  pernahPpLain_lt: Maybe<string>;
  pernahPpLain_lte: Maybe<string>;
  pernahPpLain_gt: Maybe<string>;
  pernahPpLain_gte: Maybe<string>;
  pernahPpLain_contains: Maybe<string>;
  pernahPpLain_not_contains: Maybe<string>;
  pernahPpLain_starts_with: Maybe<string>;
  pernahPpLain_not_starts_with: Maybe<string>;
  pernahPpLain_ends_with: Maybe<string>;
  pernahPpLain_not_ends_with: Maybe<string>;
  ppLain: Maybe<string>;
  ppLain_not: Maybe<string>;
  ppLain_in: Maybe<Array<string>>;
  ppLain_not_in: Maybe<Array<string>>;
  ppLain_lt: Maybe<string>;
  ppLain_lte: Maybe<string>;
  ppLain_gt: Maybe<string>;
  ppLain_gte: Maybe<string>;
  ppLain_contains: Maybe<string>;
  ppLain_not_contains: Maybe<string>;
  ppLain_starts_with: Maybe<string>;
  ppLain_not_starts_with: Maybe<string>;
  ppLain_ends_with: Maybe<string>;
  ppLain_not_ends_with: Maybe<string>;
  regDate: Maybe<Date>;
  regDate_not: Maybe<Date>;
  regDate_in: Maybe<Array<Date>>;
  regDate_not_in: Maybe<Array<Date>>;
  regDate_lt: Maybe<Date>;
  regDate_lte: Maybe<Date>;
  regDate_gt: Maybe<Date>;
  regDate_gte: Maybe<Date>;
  relasiWakilClient: Maybe<string>;
  relasiWakilClient_not: Maybe<string>;
  relasiWakilClient_in: Maybe<Array<string>>;
  relasiWakilClient_not_in: Maybe<Array<string>>;
  relasiWakilClient_lt: Maybe<string>;
  relasiWakilClient_lte: Maybe<string>;
  relasiWakilClient_gt: Maybe<string>;
  relasiWakilClient_gte: Maybe<string>;
  relasiWakilClient_contains: Maybe<string>;
  relasiWakilClient_not_contains: Maybe<string>;
  relasiWakilClient_starts_with: Maybe<string>;
  relasiWakilClient_not_starts_with: Maybe<string>;
  relasiWakilClient_ends_with: Maybe<string>;
  relasiWakilClient_not_ends_with: Maybe<string>;
  setujuAdvokasi: Maybe<boolean>;
  setujuAdvokasi_not: Maybe<boolean>;
  statusPerwakilan: Maybe<string>;
  statusPerwakilan_not: Maybe<string>;
  statusPerwakilan_in: Maybe<Array<string>>;
  statusPerwakilan_not_in: Maybe<Array<string>>;
  statusPerwakilan_lt: Maybe<string>;
  statusPerwakilan_lte: Maybe<string>;
  statusPerwakilan_gt: Maybe<string>;
  statusPerwakilan_gte: Maybe<string>;
  statusPerwakilan_contains: Maybe<string>;
  statusPerwakilan_not_contains: Maybe<string>;
  statusPerwakilan_starts_with: Maybe<string>;
  statusPerwakilan_not_starts_with: Maybe<string>;
  statusPerwakilan_ends_with: Maybe<string>;
  statusPerwakilan_not_ends_with: Maybe<string>;
  updatedAt: Maybe<Date>;
  updatedAt_not: Maybe<Date>;
  updatedAt_in: Maybe<Array<Date>>;
  updatedAt_not_in: Maybe<Array<Date>>;
  updatedAt_lt: Maybe<Date>;
  updatedAt_lte: Maybe<Date>;
  updatedAt_gt: Maybe<Date>;
  updatedAt_gte: Maybe<Date>;
  updatedBy: Maybe<string>;
  updatedBy_not: Maybe<string>;
  updatedBy_in: Maybe<Array<string>>;
  updatedBy_not_in: Maybe<Array<string>>;
  updatedBy_lt: Maybe<string>;
  updatedBy_lte: Maybe<string>;
  updatedBy_gt: Maybe<string>;
  updatedBy_gte: Maybe<string>;
  updatedBy_contains: Maybe<string>;
  updatedBy_not_contains: Maybe<string>;
  updatedBy_starts_with: Maybe<string>;
  updatedBy_not_starts_with: Maybe<string>;
  updatedBy_ends_with: Maybe<string>;
  updatedBy_not_ends_with: Maybe<string>;
  waktuPernahKlien: Maybe<string>;
  waktuPernahKlien_not: Maybe<string>;
  waktuPernahKlien_in: Maybe<Array<string>>;
  waktuPernahKlien_not_in: Maybe<Array<string>>;
  waktuPernahKlien_lt: Maybe<string>;
  waktuPernahKlien_lte: Maybe<string>;
  waktuPernahKlien_gt: Maybe<string>;
  waktuPernahKlien_gte: Maybe<string>;
  waktuPernahKlien_contains: Maybe<string>;
  waktuPernahKlien_not_contains: Maybe<string>;
  waktuPernahKlien_starts_with: Maybe<string>;
  waktuPernahKlien_not_starts_with: Maybe<string>;
  waktuPernahKlien_ends_with: Maybe<string>;
  waktuPernahKlien_not_ends_with: Maybe<string>;
  whyLbh: Maybe<string>;
  whyLbh_not: Maybe<string>;
  whyLbh_in: Maybe<Array<string>>;
  whyLbh_not_in: Maybe<Array<string>>;
  whyLbh_lt: Maybe<string>;
  whyLbh_lte: Maybe<string>;
  whyLbh_gt: Maybe<string>;
  whyLbh_gte: Maybe<string>;
  whyLbh_contains: Maybe<string>;
  whyLbh_not_contains: Maybe<string>;
  whyLbh_starts_with: Maybe<string>;
  whyLbh_not_starts_with: Maybe<string>;
  whyLbh_ends_with: Maybe<string>;
  whyLbh_not_ends_with: Maybe<string>;
  wakilId: Maybe<PersonWhereInput>;
  case: Maybe<CaseWhereInput>;
  clients_every: Maybe<ClientWhereInput>;
  clients_some: Maybe<ClientWhereInput>;
  clients_none: Maybe<ClientWhereInput>;
};

export type ApplicationWhereUniqueInput = {
  id: Maybe<number>;
};

export type BatchPayload = {
  count: Long;
};

export type Case = {
  id: number;
  applicationId?: Maybe<number>;
  caseClosed: boolean;
  caseClosedJenis?: Maybe<string>;
  createdAt: Date;
  createdBy?: Maybe<string>;
  hakTerlanggar?: Maybe<string>;
  issue?: Maybe<string>;
  judulKasus?: Maybe<string>;
  klasifikasiDok?: Maybe<string>;
  kronologiKasus?: Maybe<string>;
  lockDitolak: boolean;
  statusPendampingan?: Maybe<string>;
  targetAdvokasi?: Maybe<string>;
  unlockPk: boolean;
  unlockTransfer: boolean;
  updatedAt: Date;
  updatedBy?: Maybe<string>;
  application: Application;
  clients?: Maybe<Array<Client>>;
  classifications?: Maybe<Array<CaseClassification>>;
  consultations?: Maybe<Array<CaseConsultation>>;
  documents?: Maybe<Array<CaseDocument>>;
  issues?: Maybe<Array<CaseIssue>>;
  korbans?: Maybe<Array<CaseKorban>>;
  pelakus?: Maybe<Array<CasePelaku>>;
  pks?: Maybe<Array<CasePk>>;
  progresses?: Maybe<Array<CaseProgress>>;
  activities?: Maybe<Array<CaseProgressActivity>>;
  transferreferrals?: Maybe<Array<CaseTransferReferral>>;
  violatedrights?: Maybe<Array<CaseViolatedRight>>;
};

export type CaseClientsArgs = {
  where?: Maybe<ClientWhereInput>;
  orderBy?: Maybe<ClientOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type CaseClassificationsArgs = {
  where?: Maybe<CaseClassificationWhereInput>;
  orderBy?: Maybe<CaseClassificationOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type CaseConsultationsArgs = {
  where?: Maybe<CaseConsultationWhereInput>;
  orderBy?: Maybe<CaseConsultationOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type CaseDocumentsArgs = {
  where?: Maybe<CaseDocumentWhereInput>;
  orderBy?: Maybe<CaseDocumentOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type CaseIssuesArgs = {
  where?: Maybe<CaseIssueWhereInput>;
  orderBy?: Maybe<CaseIssueOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type CaseKorbansArgs = {
  where?: Maybe<CaseKorbanWhereInput>;
  orderBy?: Maybe<CaseKorbanOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type CasePelakusArgs = {
  where?: Maybe<CasePelakuWhereInput>;
  orderBy?: Maybe<CasePelakuOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type CasePksArgs = {
  where?: Maybe<CasePkWhereInput>;
  orderBy?: Maybe<CasePkOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type CaseProgressesArgs = {
  where?: Maybe<CaseProgressWhereInput>;
  orderBy?: Maybe<CaseProgressOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type CaseActivitiesArgs = {
  where?: Maybe<CaseProgressActivityWhereInput>;
  orderBy?: Maybe<CaseProgressActivityOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type CaseTransferreferralsArgs = {
  where?: Maybe<CaseTransferReferralWhereInput>;
  orderBy?: Maybe<CaseTransferReferralOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type CaseViolatedrightsArgs = {
  where?: Maybe<CaseViolatedRightWhereInput>;
  orderBy?: Maybe<CaseViolatedRightOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type CaseClassification = {
  id: number;
  caseId: Case;
  kodeMt?: Maybe<string>;
};

export type CaseClassificationConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<CaseClassificationEdge>>;
  aggregate: AggregateCaseClassification;
};

export type CaseClassificationCreateInput = {
  kodeMt: Maybe<string>;
  caseId: CaseCreateOneWithoutClassificationsInput;
};

export type CaseClassificationCreateManyWithoutCaseIdInput = {
  create: Maybe<Array<CaseClassificationCreateWithoutCaseIdInput>>;
  connect: Maybe<Array<CaseClassificationWhereUniqueInput>>;
};

export type CaseClassificationCreateWithoutCaseIdInput = {
  kodeMt: Maybe<string>;
};

export type CaseClassificationEdge = {
  node: CaseClassification;
  cursor: string;
};

export enum CaseClassificationOrderByInput {
  Id_Asc = 'id_ASC',
  Id_Desc = 'id_DESC',
  KodeMt_Asc = 'kodeMt_ASC',
  KodeMt_Desc = 'kodeMt_DESC',
}

export type CaseClassificationPreviousValues = {
  id: number;
  kodeMt?: Maybe<string>;
};

export type CaseClassificationScalarWhereInput = {
  AND: Maybe<Array<CaseClassificationScalarWhereInput>>;
  OR: Maybe<Array<CaseClassificationScalarWhereInput>>;
  NOT: Maybe<Array<CaseClassificationScalarWhereInput>>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  kodeMt: Maybe<string>;
  kodeMt_not: Maybe<string>;
  kodeMt_in: Maybe<Array<string>>;
  kodeMt_not_in: Maybe<Array<string>>;
  kodeMt_lt: Maybe<string>;
  kodeMt_lte: Maybe<string>;
  kodeMt_gt: Maybe<string>;
  kodeMt_gte: Maybe<string>;
  kodeMt_contains: Maybe<string>;
  kodeMt_not_contains: Maybe<string>;
  kodeMt_starts_with: Maybe<string>;
  kodeMt_not_starts_with: Maybe<string>;
  kodeMt_ends_with: Maybe<string>;
  kodeMt_not_ends_with: Maybe<string>;
};

export type CaseClassificationSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<CaseClassification>;
  updatedFields?: Maybe<Array<string>>;
  previousValues?: Maybe<CaseClassificationPreviousValues>;
};

export type CaseClassificationSubscriptionWhereInput = {
  AND: Maybe<Array<CaseClassificationSubscriptionWhereInput>>;
  OR: Maybe<Array<CaseClassificationSubscriptionWhereInput>>;
  NOT: Maybe<Array<CaseClassificationSubscriptionWhereInput>>;
  mutation_in: Maybe<Array<MutationType>>;
  updatedFields_contains: Maybe<string>;
  updatedFields_contains_every: Maybe<Array<string>>;
  updatedFields_contains_some: Maybe<Array<string>>;
  node: Maybe<CaseClassificationWhereInput>;
};

export type CaseClassificationUpdateInput = {
  kodeMt: Maybe<string>;
  caseId: Maybe<CaseUpdateOneRequiredWithoutClassificationsInput>;
};

export type CaseClassificationUpdateManyDataInput = {
  kodeMt: Maybe<string>;
};

export type CaseClassificationUpdateManyMutationInput = {
  kodeMt: Maybe<string>;
};

export type CaseClassificationUpdateManyWithoutCaseIdInput = {
  create: Maybe<Array<CaseClassificationCreateWithoutCaseIdInput>>;
  connect: Maybe<Array<CaseClassificationWhereUniqueInput>>;
  set: Maybe<Array<CaseClassificationWhereUniqueInput>>;
  disconnect: Maybe<Array<CaseClassificationWhereUniqueInput>>;
  delete: Maybe<Array<CaseClassificationWhereUniqueInput>>;
  update: Maybe<Array<CaseClassificationUpdateWithWhereUniqueWithoutCaseIdInput>>;
  updateMany: Maybe<Array<CaseClassificationUpdateManyWithWhereNestedInput>>;
  deleteMany: Maybe<Array<CaseClassificationScalarWhereInput>>;
  upsert: Maybe<Array<CaseClassificationUpsertWithWhereUniqueWithoutCaseIdInput>>;
};

export type CaseClassificationUpdateManyWithWhereNestedInput = {
  where: CaseClassificationScalarWhereInput;
  data: CaseClassificationUpdateManyDataInput;
};

export type CaseClassificationUpdateWithoutCaseIdDataInput = {
  kodeMt: Maybe<string>;
};

export type CaseClassificationUpdateWithWhereUniqueWithoutCaseIdInput = {
  where: CaseClassificationWhereUniqueInput;
  data: CaseClassificationUpdateWithoutCaseIdDataInput;
};

export type CaseClassificationUpsertWithWhereUniqueWithoutCaseIdInput = {
  where: CaseClassificationWhereUniqueInput;
  update: CaseClassificationUpdateWithoutCaseIdDataInput;
  create: CaseClassificationCreateWithoutCaseIdInput;
};

export type CaseClassificationWhereInput = {
  AND: Maybe<Array<CaseClassificationWhereInput>>;
  OR: Maybe<Array<CaseClassificationWhereInput>>;
  NOT: Maybe<Array<CaseClassificationWhereInput>>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  kodeMt: Maybe<string>;
  kodeMt_not: Maybe<string>;
  kodeMt_in: Maybe<Array<string>>;
  kodeMt_not_in: Maybe<Array<string>>;
  kodeMt_lt: Maybe<string>;
  kodeMt_lte: Maybe<string>;
  kodeMt_gt: Maybe<string>;
  kodeMt_gte: Maybe<string>;
  kodeMt_contains: Maybe<string>;
  kodeMt_not_contains: Maybe<string>;
  kodeMt_starts_with: Maybe<string>;
  kodeMt_not_starts_with: Maybe<string>;
  kodeMt_ends_with: Maybe<string>;
  kodeMt_not_ends_with: Maybe<string>;
  caseId: Maybe<CaseWhereInput>;
};

export type CaseClassificationWhereUniqueInput = {
  id: Maybe<number>;
};

export type CaseConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<CaseEdge>>;
  aggregate: AggregateCase;
};

export type CaseConsultation = {
  id: number;
  appKonsul?: Maybe<string>;
  caseId: Case;
  createdAt: Date;
  createdBy?: Maybe<string>;
  isiKonsul?: Maybe<string>;
  judulAktifitas?: Maybe<string>;
  ppKonsul?: Maybe<string>;
  tglKonsul?: Maybe<Date>;
  updatedAt: Date;
  updatedBy?: Maybe<string>;
  apps?: Maybe<Array<CaseConsultationApp>>;
};

export type CaseConsultationAppsArgs = {
  where?: Maybe<CaseConsultationAppWhereInput>;
  orderBy?: Maybe<CaseConsultationAppOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type CaseConsultationApp = {
  id: number;
  appConsultation?: Maybe<string>;
  caseConsultationId: CaseConsultation;
};

export type CaseConsultationAppConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<CaseConsultationAppEdge>>;
  aggregate: AggregateCaseConsultationApp;
};

export type CaseConsultationAppCreateInput = {
  appConsultation: Maybe<string>;
  caseConsultationId: CaseConsultationCreateOneWithoutAppsInput;
};

export type CaseConsultationAppCreateManyWithoutCaseConsultationIdInput = {
  create: Maybe<Array<CaseConsultationAppCreateWithoutCaseConsultationIdInput>>;
  connect: Maybe<Array<CaseConsultationAppWhereUniqueInput>>;
};

export type CaseConsultationAppCreateWithoutCaseConsultationIdInput = {
  appConsultation: Maybe<string>;
};

export type CaseConsultationAppEdge = {
  node: CaseConsultationApp;
  cursor: string;
};

export enum CaseConsultationAppOrderByInput {
  Id_Asc = 'id_ASC',
  Id_Desc = 'id_DESC',
  AppConsultation_Asc = 'appConsultation_ASC',
  AppConsultation_Desc = 'appConsultation_DESC',
}

export type CaseConsultationAppPreviousValues = {
  id: number;
  appConsultation?: Maybe<string>;
};

export type CaseConsultationAppScalarWhereInput = {
  AND: Maybe<Array<CaseConsultationAppScalarWhereInput>>;
  OR: Maybe<Array<CaseConsultationAppScalarWhereInput>>;
  NOT: Maybe<Array<CaseConsultationAppScalarWhereInput>>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  appConsultation: Maybe<string>;
  appConsultation_not: Maybe<string>;
  appConsultation_in: Maybe<Array<string>>;
  appConsultation_not_in: Maybe<Array<string>>;
  appConsultation_lt: Maybe<string>;
  appConsultation_lte: Maybe<string>;
  appConsultation_gt: Maybe<string>;
  appConsultation_gte: Maybe<string>;
  appConsultation_contains: Maybe<string>;
  appConsultation_not_contains: Maybe<string>;
  appConsultation_starts_with: Maybe<string>;
  appConsultation_not_starts_with: Maybe<string>;
  appConsultation_ends_with: Maybe<string>;
  appConsultation_not_ends_with: Maybe<string>;
};

export type CaseConsultationAppSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<CaseConsultationApp>;
  updatedFields?: Maybe<Array<string>>;
  previousValues?: Maybe<CaseConsultationAppPreviousValues>;
};

export type CaseConsultationAppSubscriptionWhereInput = {
  AND: Maybe<Array<CaseConsultationAppSubscriptionWhereInput>>;
  OR: Maybe<Array<CaseConsultationAppSubscriptionWhereInput>>;
  NOT: Maybe<Array<CaseConsultationAppSubscriptionWhereInput>>;
  mutation_in: Maybe<Array<MutationType>>;
  updatedFields_contains: Maybe<string>;
  updatedFields_contains_every: Maybe<Array<string>>;
  updatedFields_contains_some: Maybe<Array<string>>;
  node: Maybe<CaseConsultationAppWhereInput>;
};

export type CaseConsultationAppUpdateInput = {
  appConsultation: Maybe<string>;
  caseConsultationId: Maybe<CaseConsultationUpdateOneRequiredWithoutAppsInput>;
};

export type CaseConsultationAppUpdateManyDataInput = {
  appConsultation: Maybe<string>;
};

export type CaseConsultationAppUpdateManyMutationInput = {
  appConsultation: Maybe<string>;
};

export type CaseConsultationAppUpdateManyWithoutCaseConsultationIdInput = {
  create: Maybe<Array<CaseConsultationAppCreateWithoutCaseConsultationIdInput>>;
  connect: Maybe<Array<CaseConsultationAppWhereUniqueInput>>;
  set: Maybe<Array<CaseConsultationAppWhereUniqueInput>>;
  disconnect: Maybe<Array<CaseConsultationAppWhereUniqueInput>>;
  delete: Maybe<Array<CaseConsultationAppWhereUniqueInput>>;
  update: Maybe<Array<CaseConsultationAppUpdateWithWhereUniqueWithoutCaseConsultationIdInput>>;
  updateMany: Maybe<Array<CaseConsultationAppUpdateManyWithWhereNestedInput>>;
  deleteMany: Maybe<Array<CaseConsultationAppScalarWhereInput>>;
  upsert: Maybe<Array<CaseConsultationAppUpsertWithWhereUniqueWithoutCaseConsultationIdInput>>;
};

export type CaseConsultationAppUpdateManyWithWhereNestedInput = {
  where: CaseConsultationAppScalarWhereInput;
  data: CaseConsultationAppUpdateManyDataInput;
};

export type CaseConsultationAppUpdateWithoutCaseConsultationIdDataInput = {
  appConsultation: Maybe<string>;
};

export type CaseConsultationAppUpdateWithWhereUniqueWithoutCaseConsultationIdInput = {
  where: CaseConsultationAppWhereUniqueInput;
  data: CaseConsultationAppUpdateWithoutCaseConsultationIdDataInput;
};

export type CaseConsultationAppUpsertWithWhereUniqueWithoutCaseConsultationIdInput = {
  where: CaseConsultationAppWhereUniqueInput;
  update: CaseConsultationAppUpdateWithoutCaseConsultationIdDataInput;
  create: CaseConsultationAppCreateWithoutCaseConsultationIdInput;
};

export type CaseConsultationAppWhereInput = {
  AND: Maybe<Array<CaseConsultationAppWhereInput>>;
  OR: Maybe<Array<CaseConsultationAppWhereInput>>;
  NOT: Maybe<Array<CaseConsultationAppWhereInput>>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  appConsultation: Maybe<string>;
  appConsultation_not: Maybe<string>;
  appConsultation_in: Maybe<Array<string>>;
  appConsultation_not_in: Maybe<Array<string>>;
  appConsultation_lt: Maybe<string>;
  appConsultation_lte: Maybe<string>;
  appConsultation_gt: Maybe<string>;
  appConsultation_gte: Maybe<string>;
  appConsultation_contains: Maybe<string>;
  appConsultation_not_contains: Maybe<string>;
  appConsultation_starts_with: Maybe<string>;
  appConsultation_not_starts_with: Maybe<string>;
  appConsultation_ends_with: Maybe<string>;
  appConsultation_not_ends_with: Maybe<string>;
  caseConsultationId: Maybe<CaseConsultationWhereInput>;
};

export type CaseConsultationAppWhereUniqueInput = {
  id: Maybe<number>;
};

export type CaseConsultationConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<CaseConsultationEdge>>;
  aggregate: AggregateCaseConsultation;
};

export type CaseConsultationCreateInput = {
  appKonsul: Maybe<string>;
  createdBy: Maybe<string>;
  isiKonsul: Maybe<string>;
  judulAktifitas: Maybe<string>;
  ppKonsul: Maybe<string>;
  tglKonsul: Maybe<Date>;
  updatedBy: Maybe<string>;
  caseId: CaseCreateOneWithoutConsultationsInput;
  apps: Maybe<CaseConsultationAppCreateManyWithoutCaseConsultationIdInput>;
};

export type CaseConsultationCreateManyWithoutCaseIdInput = {
  create: Maybe<Array<CaseConsultationCreateWithoutCaseIdInput>>;
  connect: Maybe<Array<CaseConsultationWhereUniqueInput>>;
};

export type CaseConsultationCreateOneWithoutAppsInput = {
  create: Maybe<CaseConsultationCreateWithoutAppsInput>;
  connect: Maybe<CaseConsultationWhereUniqueInput>;
};

export type CaseConsultationCreateWithoutAppsInput = {
  appKonsul: Maybe<string>;
  createdBy: Maybe<string>;
  isiKonsul: Maybe<string>;
  judulAktifitas: Maybe<string>;
  ppKonsul: Maybe<string>;
  tglKonsul: Maybe<Date>;
  updatedBy: Maybe<string>;
  caseId: CaseCreateOneWithoutConsultationsInput;
};

export type CaseConsultationCreateWithoutCaseIdInput = {
  appKonsul: Maybe<string>;
  createdBy: Maybe<string>;
  isiKonsul: Maybe<string>;
  judulAktifitas: Maybe<string>;
  ppKonsul: Maybe<string>;
  tglKonsul: Maybe<Date>;
  updatedBy: Maybe<string>;
  apps: Maybe<CaseConsultationAppCreateManyWithoutCaseConsultationIdInput>;
};

export type CaseConsultationEdge = {
  node: CaseConsultation;
  cursor: string;
};

export enum CaseConsultationOrderByInput {
  Id_Asc = 'id_ASC',
  Id_Desc = 'id_DESC',
  AppKonsul_Asc = 'appKonsul_ASC',
  AppKonsul_Desc = 'appKonsul_DESC',
  CreatedAt_Asc = 'createdAt_ASC',
  CreatedAt_Desc = 'createdAt_DESC',
  CreatedBy_Asc = 'createdBy_ASC',
  CreatedBy_Desc = 'createdBy_DESC',
  IsiKonsul_Asc = 'isiKonsul_ASC',
  IsiKonsul_Desc = 'isiKonsul_DESC',
  JudulAktifitas_Asc = 'judulAktifitas_ASC',
  JudulAktifitas_Desc = 'judulAktifitas_DESC',
  PpKonsul_Asc = 'ppKonsul_ASC',
  PpKonsul_Desc = 'ppKonsul_DESC',
  TglKonsul_Asc = 'tglKonsul_ASC',
  TglKonsul_Desc = 'tglKonsul_DESC',
  UpdatedAt_Asc = 'updatedAt_ASC',
  UpdatedAt_Desc = 'updatedAt_DESC',
  UpdatedBy_Asc = 'updatedBy_ASC',
  UpdatedBy_Desc = 'updatedBy_DESC',
}

export type CaseConsultationPreviousValues = {
  id: number;
  appKonsul?: Maybe<string>;
  createdAt: Date;
  createdBy?: Maybe<string>;
  isiKonsul?: Maybe<string>;
  judulAktifitas?: Maybe<string>;
  ppKonsul?: Maybe<string>;
  tglKonsul?: Maybe<Date>;
  updatedAt: Date;
  updatedBy?: Maybe<string>;
};

export type CaseConsultationScalarWhereInput = {
  AND: Maybe<Array<CaseConsultationScalarWhereInput>>;
  OR: Maybe<Array<CaseConsultationScalarWhereInput>>;
  NOT: Maybe<Array<CaseConsultationScalarWhereInput>>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  appKonsul: Maybe<string>;
  appKonsul_not: Maybe<string>;
  appKonsul_in: Maybe<Array<string>>;
  appKonsul_not_in: Maybe<Array<string>>;
  appKonsul_lt: Maybe<string>;
  appKonsul_lte: Maybe<string>;
  appKonsul_gt: Maybe<string>;
  appKonsul_gte: Maybe<string>;
  appKonsul_contains: Maybe<string>;
  appKonsul_not_contains: Maybe<string>;
  appKonsul_starts_with: Maybe<string>;
  appKonsul_not_starts_with: Maybe<string>;
  appKonsul_ends_with: Maybe<string>;
  appKonsul_not_ends_with: Maybe<string>;
  createdAt: Maybe<Date>;
  createdAt_not: Maybe<Date>;
  createdAt_in: Maybe<Array<Date>>;
  createdAt_not_in: Maybe<Array<Date>>;
  createdAt_lt: Maybe<Date>;
  createdAt_lte: Maybe<Date>;
  createdAt_gt: Maybe<Date>;
  createdAt_gte: Maybe<Date>;
  createdBy: Maybe<string>;
  createdBy_not: Maybe<string>;
  createdBy_in: Maybe<Array<string>>;
  createdBy_not_in: Maybe<Array<string>>;
  createdBy_lt: Maybe<string>;
  createdBy_lte: Maybe<string>;
  createdBy_gt: Maybe<string>;
  createdBy_gte: Maybe<string>;
  createdBy_contains: Maybe<string>;
  createdBy_not_contains: Maybe<string>;
  createdBy_starts_with: Maybe<string>;
  createdBy_not_starts_with: Maybe<string>;
  createdBy_ends_with: Maybe<string>;
  createdBy_not_ends_with: Maybe<string>;
  isiKonsul: Maybe<string>;
  isiKonsul_not: Maybe<string>;
  isiKonsul_in: Maybe<Array<string>>;
  isiKonsul_not_in: Maybe<Array<string>>;
  isiKonsul_lt: Maybe<string>;
  isiKonsul_lte: Maybe<string>;
  isiKonsul_gt: Maybe<string>;
  isiKonsul_gte: Maybe<string>;
  isiKonsul_contains: Maybe<string>;
  isiKonsul_not_contains: Maybe<string>;
  isiKonsul_starts_with: Maybe<string>;
  isiKonsul_not_starts_with: Maybe<string>;
  isiKonsul_ends_with: Maybe<string>;
  isiKonsul_not_ends_with: Maybe<string>;
  judulAktifitas: Maybe<string>;
  judulAktifitas_not: Maybe<string>;
  judulAktifitas_in: Maybe<Array<string>>;
  judulAktifitas_not_in: Maybe<Array<string>>;
  judulAktifitas_lt: Maybe<string>;
  judulAktifitas_lte: Maybe<string>;
  judulAktifitas_gt: Maybe<string>;
  judulAktifitas_gte: Maybe<string>;
  judulAktifitas_contains: Maybe<string>;
  judulAktifitas_not_contains: Maybe<string>;
  judulAktifitas_starts_with: Maybe<string>;
  judulAktifitas_not_starts_with: Maybe<string>;
  judulAktifitas_ends_with: Maybe<string>;
  judulAktifitas_not_ends_with: Maybe<string>;
  ppKonsul: Maybe<string>;
  ppKonsul_not: Maybe<string>;
  ppKonsul_in: Maybe<Array<string>>;
  ppKonsul_not_in: Maybe<Array<string>>;
  ppKonsul_lt: Maybe<string>;
  ppKonsul_lte: Maybe<string>;
  ppKonsul_gt: Maybe<string>;
  ppKonsul_gte: Maybe<string>;
  ppKonsul_contains: Maybe<string>;
  ppKonsul_not_contains: Maybe<string>;
  ppKonsul_starts_with: Maybe<string>;
  ppKonsul_not_starts_with: Maybe<string>;
  ppKonsul_ends_with: Maybe<string>;
  ppKonsul_not_ends_with: Maybe<string>;
  tglKonsul: Maybe<Date>;
  tglKonsul_not: Maybe<Date>;
  tglKonsul_in: Maybe<Array<Date>>;
  tglKonsul_not_in: Maybe<Array<Date>>;
  tglKonsul_lt: Maybe<Date>;
  tglKonsul_lte: Maybe<Date>;
  tglKonsul_gt: Maybe<Date>;
  tglKonsul_gte: Maybe<Date>;
  updatedAt: Maybe<Date>;
  updatedAt_not: Maybe<Date>;
  updatedAt_in: Maybe<Array<Date>>;
  updatedAt_not_in: Maybe<Array<Date>>;
  updatedAt_lt: Maybe<Date>;
  updatedAt_lte: Maybe<Date>;
  updatedAt_gt: Maybe<Date>;
  updatedAt_gte: Maybe<Date>;
  updatedBy: Maybe<string>;
  updatedBy_not: Maybe<string>;
  updatedBy_in: Maybe<Array<string>>;
  updatedBy_not_in: Maybe<Array<string>>;
  updatedBy_lt: Maybe<string>;
  updatedBy_lte: Maybe<string>;
  updatedBy_gt: Maybe<string>;
  updatedBy_gte: Maybe<string>;
  updatedBy_contains: Maybe<string>;
  updatedBy_not_contains: Maybe<string>;
  updatedBy_starts_with: Maybe<string>;
  updatedBy_not_starts_with: Maybe<string>;
  updatedBy_ends_with: Maybe<string>;
  updatedBy_not_ends_with: Maybe<string>;
};

export type CaseConsultationSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<CaseConsultation>;
  updatedFields?: Maybe<Array<string>>;
  previousValues?: Maybe<CaseConsultationPreviousValues>;
};

export type CaseConsultationSubscriptionWhereInput = {
  AND: Maybe<Array<CaseConsultationSubscriptionWhereInput>>;
  OR: Maybe<Array<CaseConsultationSubscriptionWhereInput>>;
  NOT: Maybe<Array<CaseConsultationSubscriptionWhereInput>>;
  mutation_in: Maybe<Array<MutationType>>;
  updatedFields_contains: Maybe<string>;
  updatedFields_contains_every: Maybe<Array<string>>;
  updatedFields_contains_some: Maybe<Array<string>>;
  node: Maybe<CaseConsultationWhereInput>;
};

export type CaseConsultationUpdateInput = {
  appKonsul: Maybe<string>;
  createdBy: Maybe<string>;
  isiKonsul: Maybe<string>;
  judulAktifitas: Maybe<string>;
  ppKonsul: Maybe<string>;
  tglKonsul: Maybe<Date>;
  updatedBy: Maybe<string>;
  caseId: Maybe<CaseUpdateOneRequiredWithoutConsultationsInput>;
  apps: Maybe<CaseConsultationAppUpdateManyWithoutCaseConsultationIdInput>;
};

export type CaseConsultationUpdateManyDataInput = {
  appKonsul: Maybe<string>;
  createdBy: Maybe<string>;
  isiKonsul: Maybe<string>;
  judulAktifitas: Maybe<string>;
  ppKonsul: Maybe<string>;
  tglKonsul: Maybe<Date>;
  updatedBy: Maybe<string>;
};

export type CaseConsultationUpdateManyMutationInput = {
  appKonsul: Maybe<string>;
  createdBy: Maybe<string>;
  isiKonsul: Maybe<string>;
  judulAktifitas: Maybe<string>;
  ppKonsul: Maybe<string>;
  tglKonsul: Maybe<Date>;
  updatedBy: Maybe<string>;
};

export type CaseConsultationUpdateManyWithoutCaseIdInput = {
  create: Maybe<Array<CaseConsultationCreateWithoutCaseIdInput>>;
  connect: Maybe<Array<CaseConsultationWhereUniqueInput>>;
  set: Maybe<Array<CaseConsultationWhereUniqueInput>>;
  disconnect: Maybe<Array<CaseConsultationWhereUniqueInput>>;
  delete: Maybe<Array<CaseConsultationWhereUniqueInput>>;
  update: Maybe<Array<CaseConsultationUpdateWithWhereUniqueWithoutCaseIdInput>>;
  updateMany: Maybe<Array<CaseConsultationUpdateManyWithWhereNestedInput>>;
  deleteMany: Maybe<Array<CaseConsultationScalarWhereInput>>;
  upsert: Maybe<Array<CaseConsultationUpsertWithWhereUniqueWithoutCaseIdInput>>;
};

export type CaseConsultationUpdateManyWithWhereNestedInput = {
  where: CaseConsultationScalarWhereInput;
  data: CaseConsultationUpdateManyDataInput;
};

export type CaseConsultationUpdateOneRequiredWithoutAppsInput = {
  create: Maybe<CaseConsultationCreateWithoutAppsInput>;
  connect: Maybe<CaseConsultationWhereUniqueInput>;
  update: Maybe<CaseConsultationUpdateWithoutAppsDataInput>;
  upsert: Maybe<CaseConsultationUpsertWithoutAppsInput>;
};

export type CaseConsultationUpdateWithoutAppsDataInput = {
  appKonsul: Maybe<string>;
  createdBy: Maybe<string>;
  isiKonsul: Maybe<string>;
  judulAktifitas: Maybe<string>;
  ppKonsul: Maybe<string>;
  tglKonsul: Maybe<Date>;
  updatedBy: Maybe<string>;
  caseId: Maybe<CaseUpdateOneRequiredWithoutConsultationsInput>;
};

export type CaseConsultationUpdateWithoutCaseIdDataInput = {
  appKonsul: Maybe<string>;
  createdBy: Maybe<string>;
  isiKonsul: Maybe<string>;
  judulAktifitas: Maybe<string>;
  ppKonsul: Maybe<string>;
  tglKonsul: Maybe<Date>;
  updatedBy: Maybe<string>;
  apps: Maybe<CaseConsultationAppUpdateManyWithoutCaseConsultationIdInput>;
};

export type CaseConsultationUpdateWithWhereUniqueWithoutCaseIdInput = {
  where: CaseConsultationWhereUniqueInput;
  data: CaseConsultationUpdateWithoutCaseIdDataInput;
};

export type CaseConsultationUpsertWithoutAppsInput = {
  update: CaseConsultationUpdateWithoutAppsDataInput;
  create: CaseConsultationCreateWithoutAppsInput;
};

export type CaseConsultationUpsertWithWhereUniqueWithoutCaseIdInput = {
  where: CaseConsultationWhereUniqueInput;
  update: CaseConsultationUpdateWithoutCaseIdDataInput;
  create: CaseConsultationCreateWithoutCaseIdInput;
};

export type CaseConsultationWhereInput = {
  AND: Maybe<Array<CaseConsultationWhereInput>>;
  OR: Maybe<Array<CaseConsultationWhereInput>>;
  NOT: Maybe<Array<CaseConsultationWhereInput>>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  appKonsul: Maybe<string>;
  appKonsul_not: Maybe<string>;
  appKonsul_in: Maybe<Array<string>>;
  appKonsul_not_in: Maybe<Array<string>>;
  appKonsul_lt: Maybe<string>;
  appKonsul_lte: Maybe<string>;
  appKonsul_gt: Maybe<string>;
  appKonsul_gte: Maybe<string>;
  appKonsul_contains: Maybe<string>;
  appKonsul_not_contains: Maybe<string>;
  appKonsul_starts_with: Maybe<string>;
  appKonsul_not_starts_with: Maybe<string>;
  appKonsul_ends_with: Maybe<string>;
  appKonsul_not_ends_with: Maybe<string>;
  createdAt: Maybe<Date>;
  createdAt_not: Maybe<Date>;
  createdAt_in: Maybe<Array<Date>>;
  createdAt_not_in: Maybe<Array<Date>>;
  createdAt_lt: Maybe<Date>;
  createdAt_lte: Maybe<Date>;
  createdAt_gt: Maybe<Date>;
  createdAt_gte: Maybe<Date>;
  createdBy: Maybe<string>;
  createdBy_not: Maybe<string>;
  createdBy_in: Maybe<Array<string>>;
  createdBy_not_in: Maybe<Array<string>>;
  createdBy_lt: Maybe<string>;
  createdBy_lte: Maybe<string>;
  createdBy_gt: Maybe<string>;
  createdBy_gte: Maybe<string>;
  createdBy_contains: Maybe<string>;
  createdBy_not_contains: Maybe<string>;
  createdBy_starts_with: Maybe<string>;
  createdBy_not_starts_with: Maybe<string>;
  createdBy_ends_with: Maybe<string>;
  createdBy_not_ends_with: Maybe<string>;
  isiKonsul: Maybe<string>;
  isiKonsul_not: Maybe<string>;
  isiKonsul_in: Maybe<Array<string>>;
  isiKonsul_not_in: Maybe<Array<string>>;
  isiKonsul_lt: Maybe<string>;
  isiKonsul_lte: Maybe<string>;
  isiKonsul_gt: Maybe<string>;
  isiKonsul_gte: Maybe<string>;
  isiKonsul_contains: Maybe<string>;
  isiKonsul_not_contains: Maybe<string>;
  isiKonsul_starts_with: Maybe<string>;
  isiKonsul_not_starts_with: Maybe<string>;
  isiKonsul_ends_with: Maybe<string>;
  isiKonsul_not_ends_with: Maybe<string>;
  judulAktifitas: Maybe<string>;
  judulAktifitas_not: Maybe<string>;
  judulAktifitas_in: Maybe<Array<string>>;
  judulAktifitas_not_in: Maybe<Array<string>>;
  judulAktifitas_lt: Maybe<string>;
  judulAktifitas_lte: Maybe<string>;
  judulAktifitas_gt: Maybe<string>;
  judulAktifitas_gte: Maybe<string>;
  judulAktifitas_contains: Maybe<string>;
  judulAktifitas_not_contains: Maybe<string>;
  judulAktifitas_starts_with: Maybe<string>;
  judulAktifitas_not_starts_with: Maybe<string>;
  judulAktifitas_ends_with: Maybe<string>;
  judulAktifitas_not_ends_with: Maybe<string>;
  ppKonsul: Maybe<string>;
  ppKonsul_not: Maybe<string>;
  ppKonsul_in: Maybe<Array<string>>;
  ppKonsul_not_in: Maybe<Array<string>>;
  ppKonsul_lt: Maybe<string>;
  ppKonsul_lte: Maybe<string>;
  ppKonsul_gt: Maybe<string>;
  ppKonsul_gte: Maybe<string>;
  ppKonsul_contains: Maybe<string>;
  ppKonsul_not_contains: Maybe<string>;
  ppKonsul_starts_with: Maybe<string>;
  ppKonsul_not_starts_with: Maybe<string>;
  ppKonsul_ends_with: Maybe<string>;
  ppKonsul_not_ends_with: Maybe<string>;
  tglKonsul: Maybe<Date>;
  tglKonsul_not: Maybe<Date>;
  tglKonsul_in: Maybe<Array<Date>>;
  tglKonsul_not_in: Maybe<Array<Date>>;
  tglKonsul_lt: Maybe<Date>;
  tglKonsul_lte: Maybe<Date>;
  tglKonsul_gt: Maybe<Date>;
  tglKonsul_gte: Maybe<Date>;
  updatedAt: Maybe<Date>;
  updatedAt_not: Maybe<Date>;
  updatedAt_in: Maybe<Array<Date>>;
  updatedAt_not_in: Maybe<Array<Date>>;
  updatedAt_lt: Maybe<Date>;
  updatedAt_lte: Maybe<Date>;
  updatedAt_gt: Maybe<Date>;
  updatedAt_gte: Maybe<Date>;
  updatedBy: Maybe<string>;
  updatedBy_not: Maybe<string>;
  updatedBy_in: Maybe<Array<string>>;
  updatedBy_not_in: Maybe<Array<string>>;
  updatedBy_lt: Maybe<string>;
  updatedBy_lte: Maybe<string>;
  updatedBy_gt: Maybe<string>;
  updatedBy_gte: Maybe<string>;
  updatedBy_contains: Maybe<string>;
  updatedBy_not_contains: Maybe<string>;
  updatedBy_starts_with: Maybe<string>;
  updatedBy_not_starts_with: Maybe<string>;
  updatedBy_ends_with: Maybe<string>;
  updatedBy_not_ends_with: Maybe<string>;
  caseId: Maybe<CaseWhereInput>;
  apps_every: Maybe<CaseConsultationAppWhereInput>;
  apps_some: Maybe<CaseConsultationAppWhereInput>;
  apps_none: Maybe<CaseConsultationAppWhereInput>;
};

export type CaseConsultationWhereUniqueInput = {
  id: Maybe<number>;
};

export type CaseCreateInput = {
  applicationId: Maybe<number>;
  caseClosed: boolean;
  caseClosedJenis: Maybe<string>;
  createdBy: Maybe<string>;
  hakTerlanggar: Maybe<string>;
  issue: Maybe<string>;
  judulKasus: Maybe<string>;
  klasifikasiDok: Maybe<string>;
  kronologiKasus: Maybe<string>;
  lockDitolak: boolean;
  statusPendampingan: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  unlockPk: boolean;
  unlockTransfer: boolean;
  updatedBy: Maybe<string>;
  application: ApplicationCreateOneWithoutCaseInput;
  clients: Maybe<ClientCreateManyWithoutCaseidInput>;
  classifications: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>;
  consultations: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>;
  documents: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>;
  issues: Maybe<CaseIssueCreateManyWithoutCaseIdInput>;
  korbans: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>;
  pelakus: Maybe<CasePelakuCreateManyWithoutCaseIdInput>;
  pks: Maybe<CasePkCreateManyWithoutCaseIdInput>;
  progresses: Maybe<CaseProgressCreateManyWithoutCaseIdInput>;
  activities: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>;
  transferreferrals: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>;
  violatedrights: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>;
};

export type CaseCreateOneWithoutActivitiesInput = {
  create: Maybe<CaseCreateWithoutActivitiesInput>;
  connect: Maybe<CaseWhereUniqueInput>;
};

export type CaseCreateOneWithoutApplicationInput = {
  create: Maybe<CaseCreateWithoutApplicationInput>;
  connect: Maybe<CaseWhereUniqueInput>;
};

export type CaseCreateOneWithoutClassificationsInput = {
  create: Maybe<CaseCreateWithoutClassificationsInput>;
  connect: Maybe<CaseWhereUniqueInput>;
};

export type CaseCreateOneWithoutClientsInput = {
  create: Maybe<CaseCreateWithoutClientsInput>;
  connect: Maybe<CaseWhereUniqueInput>;
};

export type CaseCreateOneWithoutConsultationsInput = {
  create: Maybe<CaseCreateWithoutConsultationsInput>;
  connect: Maybe<CaseWhereUniqueInput>;
};

export type CaseCreateOneWithoutDocumentsInput = {
  create: Maybe<CaseCreateWithoutDocumentsInput>;
  connect: Maybe<CaseWhereUniqueInput>;
};

export type CaseCreateOneWithoutIssuesInput = {
  create: Maybe<CaseCreateWithoutIssuesInput>;
  connect: Maybe<CaseWhereUniqueInput>;
};

export type CaseCreateOneWithoutKorbansInput = {
  create: Maybe<CaseCreateWithoutKorbansInput>;
  connect: Maybe<CaseWhereUniqueInput>;
};

export type CaseCreateOneWithoutPelakusInput = {
  create: Maybe<CaseCreateWithoutPelakusInput>;
  connect: Maybe<CaseWhereUniqueInput>;
};

export type CaseCreateOneWithoutPksInput = {
  create: Maybe<CaseCreateWithoutPksInput>;
  connect: Maybe<CaseWhereUniqueInput>;
};

export type CaseCreateOneWithoutProgressesInput = {
  create: Maybe<CaseCreateWithoutProgressesInput>;
  connect: Maybe<CaseWhereUniqueInput>;
};

export type CaseCreateOneWithoutTransferreferralsInput = {
  create: Maybe<CaseCreateWithoutTransferreferralsInput>;
  connect: Maybe<CaseWhereUniqueInput>;
};

export type CaseCreateOneWithoutViolatedrightsInput = {
  create: Maybe<CaseCreateWithoutViolatedrightsInput>;
  connect: Maybe<CaseWhereUniqueInput>;
};

export type CaseCreateWithoutActivitiesInput = {
  applicationId: Maybe<number>;
  caseClosed: boolean;
  caseClosedJenis: Maybe<string>;
  createdBy: Maybe<string>;
  hakTerlanggar: Maybe<string>;
  issue: Maybe<string>;
  judulKasus: Maybe<string>;
  klasifikasiDok: Maybe<string>;
  kronologiKasus: Maybe<string>;
  lockDitolak: boolean;
  statusPendampingan: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  unlockPk: boolean;
  unlockTransfer: boolean;
  updatedBy: Maybe<string>;
  application: ApplicationCreateOneWithoutCaseInput;
  clients: Maybe<ClientCreateManyWithoutCaseidInput>;
  classifications: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>;
  consultations: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>;
  documents: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>;
  issues: Maybe<CaseIssueCreateManyWithoutCaseIdInput>;
  korbans: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>;
  pelakus: Maybe<CasePelakuCreateManyWithoutCaseIdInput>;
  pks: Maybe<CasePkCreateManyWithoutCaseIdInput>;
  progresses: Maybe<CaseProgressCreateManyWithoutCaseIdInput>;
  transferreferrals: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>;
  violatedrights: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>;
};

export type CaseCreateWithoutApplicationInput = {
  applicationId: Maybe<number>;
  caseClosed: boolean;
  caseClosedJenis: Maybe<string>;
  createdBy: Maybe<string>;
  hakTerlanggar: Maybe<string>;
  issue: Maybe<string>;
  judulKasus: Maybe<string>;
  klasifikasiDok: Maybe<string>;
  kronologiKasus: Maybe<string>;
  lockDitolak: boolean;
  statusPendampingan: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  unlockPk: boolean;
  unlockTransfer: boolean;
  updatedBy: Maybe<string>;
  clients: Maybe<ClientCreateManyWithoutCaseidInput>;
  classifications: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>;
  consultations: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>;
  documents: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>;
  issues: Maybe<CaseIssueCreateManyWithoutCaseIdInput>;
  korbans: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>;
  pelakus: Maybe<CasePelakuCreateManyWithoutCaseIdInput>;
  pks: Maybe<CasePkCreateManyWithoutCaseIdInput>;
  progresses: Maybe<CaseProgressCreateManyWithoutCaseIdInput>;
  activities: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>;
  transferreferrals: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>;
  violatedrights: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>;
};

export type CaseCreateWithoutClassificationsInput = {
  applicationId: Maybe<number>;
  caseClosed: boolean;
  caseClosedJenis: Maybe<string>;
  createdBy: Maybe<string>;
  hakTerlanggar: Maybe<string>;
  issue: Maybe<string>;
  judulKasus: Maybe<string>;
  klasifikasiDok: Maybe<string>;
  kronologiKasus: Maybe<string>;
  lockDitolak: boolean;
  statusPendampingan: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  unlockPk: boolean;
  unlockTransfer: boolean;
  updatedBy: Maybe<string>;
  application: ApplicationCreateOneWithoutCaseInput;
  clients: Maybe<ClientCreateManyWithoutCaseidInput>;
  consultations: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>;
  documents: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>;
  issues: Maybe<CaseIssueCreateManyWithoutCaseIdInput>;
  korbans: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>;
  pelakus: Maybe<CasePelakuCreateManyWithoutCaseIdInput>;
  pks: Maybe<CasePkCreateManyWithoutCaseIdInput>;
  progresses: Maybe<CaseProgressCreateManyWithoutCaseIdInput>;
  activities: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>;
  transferreferrals: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>;
  violatedrights: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>;
};

export type CaseCreateWithoutClientsInput = {
  applicationId: Maybe<number>;
  caseClosed: boolean;
  caseClosedJenis: Maybe<string>;
  createdBy: Maybe<string>;
  hakTerlanggar: Maybe<string>;
  issue: Maybe<string>;
  judulKasus: Maybe<string>;
  klasifikasiDok: Maybe<string>;
  kronologiKasus: Maybe<string>;
  lockDitolak: boolean;
  statusPendampingan: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  unlockPk: boolean;
  unlockTransfer: boolean;
  updatedBy: Maybe<string>;
  application: ApplicationCreateOneWithoutCaseInput;
  classifications: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>;
  consultations: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>;
  documents: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>;
  issues: Maybe<CaseIssueCreateManyWithoutCaseIdInput>;
  korbans: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>;
  pelakus: Maybe<CasePelakuCreateManyWithoutCaseIdInput>;
  pks: Maybe<CasePkCreateManyWithoutCaseIdInput>;
  progresses: Maybe<CaseProgressCreateManyWithoutCaseIdInput>;
  activities: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>;
  transferreferrals: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>;
  violatedrights: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>;
};

export type CaseCreateWithoutConsultationsInput = {
  applicationId: Maybe<number>;
  caseClosed: boolean;
  caseClosedJenis: Maybe<string>;
  createdBy: Maybe<string>;
  hakTerlanggar: Maybe<string>;
  issue: Maybe<string>;
  judulKasus: Maybe<string>;
  klasifikasiDok: Maybe<string>;
  kronologiKasus: Maybe<string>;
  lockDitolak: boolean;
  statusPendampingan: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  unlockPk: boolean;
  unlockTransfer: boolean;
  updatedBy: Maybe<string>;
  application: ApplicationCreateOneWithoutCaseInput;
  clients: Maybe<ClientCreateManyWithoutCaseidInput>;
  classifications: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>;
  documents: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>;
  issues: Maybe<CaseIssueCreateManyWithoutCaseIdInput>;
  korbans: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>;
  pelakus: Maybe<CasePelakuCreateManyWithoutCaseIdInput>;
  pks: Maybe<CasePkCreateManyWithoutCaseIdInput>;
  progresses: Maybe<CaseProgressCreateManyWithoutCaseIdInput>;
  activities: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>;
  transferreferrals: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>;
  violatedrights: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>;
};

export type CaseCreateWithoutDocumentsInput = {
  applicationId: Maybe<number>;
  caseClosed: boolean;
  caseClosedJenis: Maybe<string>;
  createdBy: Maybe<string>;
  hakTerlanggar: Maybe<string>;
  issue: Maybe<string>;
  judulKasus: Maybe<string>;
  klasifikasiDok: Maybe<string>;
  kronologiKasus: Maybe<string>;
  lockDitolak: boolean;
  statusPendampingan: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  unlockPk: boolean;
  unlockTransfer: boolean;
  updatedBy: Maybe<string>;
  application: ApplicationCreateOneWithoutCaseInput;
  clients: Maybe<ClientCreateManyWithoutCaseidInput>;
  classifications: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>;
  consultations: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>;
  issues: Maybe<CaseIssueCreateManyWithoutCaseIdInput>;
  korbans: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>;
  pelakus: Maybe<CasePelakuCreateManyWithoutCaseIdInput>;
  pks: Maybe<CasePkCreateManyWithoutCaseIdInput>;
  progresses: Maybe<CaseProgressCreateManyWithoutCaseIdInput>;
  activities: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>;
  transferreferrals: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>;
  violatedrights: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>;
};

export type CaseCreateWithoutIssuesInput = {
  applicationId: Maybe<number>;
  caseClosed: boolean;
  caseClosedJenis: Maybe<string>;
  createdBy: Maybe<string>;
  hakTerlanggar: Maybe<string>;
  issue: Maybe<string>;
  judulKasus: Maybe<string>;
  klasifikasiDok: Maybe<string>;
  kronologiKasus: Maybe<string>;
  lockDitolak: boolean;
  statusPendampingan: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  unlockPk: boolean;
  unlockTransfer: boolean;
  updatedBy: Maybe<string>;
  application: ApplicationCreateOneWithoutCaseInput;
  clients: Maybe<ClientCreateManyWithoutCaseidInput>;
  classifications: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>;
  consultations: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>;
  documents: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>;
  korbans: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>;
  pelakus: Maybe<CasePelakuCreateManyWithoutCaseIdInput>;
  pks: Maybe<CasePkCreateManyWithoutCaseIdInput>;
  progresses: Maybe<CaseProgressCreateManyWithoutCaseIdInput>;
  activities: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>;
  transferreferrals: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>;
  violatedrights: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>;
};

export type CaseCreateWithoutKorbansInput = {
  applicationId: Maybe<number>;
  caseClosed: boolean;
  caseClosedJenis: Maybe<string>;
  createdBy: Maybe<string>;
  hakTerlanggar: Maybe<string>;
  issue: Maybe<string>;
  judulKasus: Maybe<string>;
  klasifikasiDok: Maybe<string>;
  kronologiKasus: Maybe<string>;
  lockDitolak: boolean;
  statusPendampingan: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  unlockPk: boolean;
  unlockTransfer: boolean;
  updatedBy: Maybe<string>;
  application: ApplicationCreateOneWithoutCaseInput;
  clients: Maybe<ClientCreateManyWithoutCaseidInput>;
  classifications: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>;
  consultations: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>;
  documents: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>;
  issues: Maybe<CaseIssueCreateManyWithoutCaseIdInput>;
  pelakus: Maybe<CasePelakuCreateManyWithoutCaseIdInput>;
  pks: Maybe<CasePkCreateManyWithoutCaseIdInput>;
  progresses: Maybe<CaseProgressCreateManyWithoutCaseIdInput>;
  activities: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>;
  transferreferrals: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>;
  violatedrights: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>;
};

export type CaseCreateWithoutPelakusInput = {
  applicationId: Maybe<number>;
  caseClosed: boolean;
  caseClosedJenis: Maybe<string>;
  createdBy: Maybe<string>;
  hakTerlanggar: Maybe<string>;
  issue: Maybe<string>;
  judulKasus: Maybe<string>;
  klasifikasiDok: Maybe<string>;
  kronologiKasus: Maybe<string>;
  lockDitolak: boolean;
  statusPendampingan: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  unlockPk: boolean;
  unlockTransfer: boolean;
  updatedBy: Maybe<string>;
  application: ApplicationCreateOneWithoutCaseInput;
  clients: Maybe<ClientCreateManyWithoutCaseidInput>;
  classifications: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>;
  consultations: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>;
  documents: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>;
  issues: Maybe<CaseIssueCreateManyWithoutCaseIdInput>;
  korbans: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>;
  pks: Maybe<CasePkCreateManyWithoutCaseIdInput>;
  progresses: Maybe<CaseProgressCreateManyWithoutCaseIdInput>;
  activities: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>;
  transferreferrals: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>;
  violatedrights: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>;
};

export type CaseCreateWithoutPksInput = {
  applicationId: Maybe<number>;
  caseClosed: boolean;
  caseClosedJenis: Maybe<string>;
  createdBy: Maybe<string>;
  hakTerlanggar: Maybe<string>;
  issue: Maybe<string>;
  judulKasus: Maybe<string>;
  klasifikasiDok: Maybe<string>;
  kronologiKasus: Maybe<string>;
  lockDitolak: boolean;
  statusPendampingan: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  unlockPk: boolean;
  unlockTransfer: boolean;
  updatedBy: Maybe<string>;
  application: ApplicationCreateOneWithoutCaseInput;
  clients: Maybe<ClientCreateManyWithoutCaseidInput>;
  classifications: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>;
  consultations: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>;
  documents: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>;
  issues: Maybe<CaseIssueCreateManyWithoutCaseIdInput>;
  korbans: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>;
  pelakus: Maybe<CasePelakuCreateManyWithoutCaseIdInput>;
  progresses: Maybe<CaseProgressCreateManyWithoutCaseIdInput>;
  activities: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>;
  transferreferrals: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>;
  violatedrights: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>;
};

export type CaseCreateWithoutProgressesInput = {
  applicationId: Maybe<number>;
  caseClosed: boolean;
  caseClosedJenis: Maybe<string>;
  createdBy: Maybe<string>;
  hakTerlanggar: Maybe<string>;
  issue: Maybe<string>;
  judulKasus: Maybe<string>;
  klasifikasiDok: Maybe<string>;
  kronologiKasus: Maybe<string>;
  lockDitolak: boolean;
  statusPendampingan: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  unlockPk: boolean;
  unlockTransfer: boolean;
  updatedBy: Maybe<string>;
  application: ApplicationCreateOneWithoutCaseInput;
  clients: Maybe<ClientCreateManyWithoutCaseidInput>;
  classifications: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>;
  consultations: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>;
  documents: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>;
  issues: Maybe<CaseIssueCreateManyWithoutCaseIdInput>;
  korbans: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>;
  pelakus: Maybe<CasePelakuCreateManyWithoutCaseIdInput>;
  pks: Maybe<CasePkCreateManyWithoutCaseIdInput>;
  activities: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>;
  transferreferrals: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>;
  violatedrights: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>;
};

export type CaseCreateWithoutTransferreferralsInput = {
  applicationId: Maybe<number>;
  caseClosed: boolean;
  caseClosedJenis: Maybe<string>;
  createdBy: Maybe<string>;
  hakTerlanggar: Maybe<string>;
  issue: Maybe<string>;
  judulKasus: Maybe<string>;
  klasifikasiDok: Maybe<string>;
  kronologiKasus: Maybe<string>;
  lockDitolak: boolean;
  statusPendampingan: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  unlockPk: boolean;
  unlockTransfer: boolean;
  updatedBy: Maybe<string>;
  application: ApplicationCreateOneWithoutCaseInput;
  clients: Maybe<ClientCreateManyWithoutCaseidInput>;
  classifications: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>;
  consultations: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>;
  documents: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>;
  issues: Maybe<CaseIssueCreateManyWithoutCaseIdInput>;
  korbans: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>;
  pelakus: Maybe<CasePelakuCreateManyWithoutCaseIdInput>;
  pks: Maybe<CasePkCreateManyWithoutCaseIdInput>;
  progresses: Maybe<CaseProgressCreateManyWithoutCaseIdInput>;
  activities: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>;
  violatedrights: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>;
};

export type CaseCreateWithoutViolatedrightsInput = {
  applicationId: Maybe<number>;
  caseClosed: boolean;
  caseClosedJenis: Maybe<string>;
  createdBy: Maybe<string>;
  hakTerlanggar: Maybe<string>;
  issue: Maybe<string>;
  judulKasus: Maybe<string>;
  klasifikasiDok: Maybe<string>;
  kronologiKasus: Maybe<string>;
  lockDitolak: boolean;
  statusPendampingan: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  unlockPk: boolean;
  unlockTransfer: boolean;
  updatedBy: Maybe<string>;
  application: ApplicationCreateOneWithoutCaseInput;
  clients: Maybe<ClientCreateManyWithoutCaseidInput>;
  classifications: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>;
  consultations: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>;
  documents: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>;
  issues: Maybe<CaseIssueCreateManyWithoutCaseIdInput>;
  korbans: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>;
  pelakus: Maybe<CasePelakuCreateManyWithoutCaseIdInput>;
  pks: Maybe<CasePkCreateManyWithoutCaseIdInput>;
  progresses: Maybe<CaseProgressCreateManyWithoutCaseIdInput>;
  activities: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>;
  transferreferrals: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>;
};

export type CaseDocument = {
  id: number;
  caseId: Case;
  createdAt: Date;
  createdBy?: Maybe<string>;
  jenisDokumen?: Maybe<string>;
  judulDokumen?: Maybe<string>;
  keterangan?: Maybe<string>;
  link?: Maybe<string>;
  updatedAt: Date;
  updatedBy?: Maybe<string>;
};

export type CaseDocumentConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<CaseDocumentEdge>>;
  aggregate: AggregateCaseDocument;
};

export type CaseDocumentCreateInput = {
  createdBy: Maybe<string>;
  jenisDokumen: Maybe<string>;
  judulDokumen: Maybe<string>;
  keterangan: Maybe<string>;
  link: Maybe<string>;
  updatedBy: Maybe<string>;
  caseId: CaseCreateOneWithoutDocumentsInput;
};

export type CaseDocumentCreateManyWithoutCaseIdInput = {
  create: Maybe<Array<CaseDocumentCreateWithoutCaseIdInput>>;
  connect: Maybe<Array<CaseDocumentWhereUniqueInput>>;
};

export type CaseDocumentCreateWithoutCaseIdInput = {
  createdBy: Maybe<string>;
  jenisDokumen: Maybe<string>;
  judulDokumen: Maybe<string>;
  keterangan: Maybe<string>;
  link: Maybe<string>;
  updatedBy: Maybe<string>;
};

export type CaseDocumentEdge = {
  node: CaseDocument;
  cursor: string;
};

export enum CaseDocumentOrderByInput {
  Id_Asc = 'id_ASC',
  Id_Desc = 'id_DESC',
  CreatedAt_Asc = 'createdAt_ASC',
  CreatedAt_Desc = 'createdAt_DESC',
  CreatedBy_Asc = 'createdBy_ASC',
  CreatedBy_Desc = 'createdBy_DESC',
  JenisDokumen_Asc = 'jenisDokumen_ASC',
  JenisDokumen_Desc = 'jenisDokumen_DESC',
  JudulDokumen_Asc = 'judulDokumen_ASC',
  JudulDokumen_Desc = 'judulDokumen_DESC',
  Keterangan_Asc = 'keterangan_ASC',
  Keterangan_Desc = 'keterangan_DESC',
  Link_Asc = 'link_ASC',
  Link_Desc = 'link_DESC',
  UpdatedAt_Asc = 'updatedAt_ASC',
  UpdatedAt_Desc = 'updatedAt_DESC',
  UpdatedBy_Asc = 'updatedBy_ASC',
  UpdatedBy_Desc = 'updatedBy_DESC',
}

export type CaseDocumentPreviousValues = {
  id: number;
  createdAt: Date;
  createdBy?: Maybe<string>;
  jenisDokumen?: Maybe<string>;
  judulDokumen?: Maybe<string>;
  keterangan?: Maybe<string>;
  link?: Maybe<string>;
  updatedAt: Date;
  updatedBy?: Maybe<string>;
};

export type CaseDocumentScalarWhereInput = {
  AND: Maybe<Array<CaseDocumentScalarWhereInput>>;
  OR: Maybe<Array<CaseDocumentScalarWhereInput>>;
  NOT: Maybe<Array<CaseDocumentScalarWhereInput>>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  createdAt: Maybe<Date>;
  createdAt_not: Maybe<Date>;
  createdAt_in: Maybe<Array<Date>>;
  createdAt_not_in: Maybe<Array<Date>>;
  createdAt_lt: Maybe<Date>;
  createdAt_lte: Maybe<Date>;
  createdAt_gt: Maybe<Date>;
  createdAt_gte: Maybe<Date>;
  createdBy: Maybe<string>;
  createdBy_not: Maybe<string>;
  createdBy_in: Maybe<Array<string>>;
  createdBy_not_in: Maybe<Array<string>>;
  createdBy_lt: Maybe<string>;
  createdBy_lte: Maybe<string>;
  createdBy_gt: Maybe<string>;
  createdBy_gte: Maybe<string>;
  createdBy_contains: Maybe<string>;
  createdBy_not_contains: Maybe<string>;
  createdBy_starts_with: Maybe<string>;
  createdBy_not_starts_with: Maybe<string>;
  createdBy_ends_with: Maybe<string>;
  createdBy_not_ends_with: Maybe<string>;
  jenisDokumen: Maybe<string>;
  jenisDokumen_not: Maybe<string>;
  jenisDokumen_in: Maybe<Array<string>>;
  jenisDokumen_not_in: Maybe<Array<string>>;
  jenisDokumen_lt: Maybe<string>;
  jenisDokumen_lte: Maybe<string>;
  jenisDokumen_gt: Maybe<string>;
  jenisDokumen_gte: Maybe<string>;
  jenisDokumen_contains: Maybe<string>;
  jenisDokumen_not_contains: Maybe<string>;
  jenisDokumen_starts_with: Maybe<string>;
  jenisDokumen_not_starts_with: Maybe<string>;
  jenisDokumen_ends_with: Maybe<string>;
  jenisDokumen_not_ends_with: Maybe<string>;
  judulDokumen: Maybe<string>;
  judulDokumen_not: Maybe<string>;
  judulDokumen_in: Maybe<Array<string>>;
  judulDokumen_not_in: Maybe<Array<string>>;
  judulDokumen_lt: Maybe<string>;
  judulDokumen_lte: Maybe<string>;
  judulDokumen_gt: Maybe<string>;
  judulDokumen_gte: Maybe<string>;
  judulDokumen_contains: Maybe<string>;
  judulDokumen_not_contains: Maybe<string>;
  judulDokumen_starts_with: Maybe<string>;
  judulDokumen_not_starts_with: Maybe<string>;
  judulDokumen_ends_with: Maybe<string>;
  judulDokumen_not_ends_with: Maybe<string>;
  keterangan: Maybe<string>;
  keterangan_not: Maybe<string>;
  keterangan_in: Maybe<Array<string>>;
  keterangan_not_in: Maybe<Array<string>>;
  keterangan_lt: Maybe<string>;
  keterangan_lte: Maybe<string>;
  keterangan_gt: Maybe<string>;
  keterangan_gte: Maybe<string>;
  keterangan_contains: Maybe<string>;
  keterangan_not_contains: Maybe<string>;
  keterangan_starts_with: Maybe<string>;
  keterangan_not_starts_with: Maybe<string>;
  keterangan_ends_with: Maybe<string>;
  keterangan_not_ends_with: Maybe<string>;
  link: Maybe<string>;
  link_not: Maybe<string>;
  link_in: Maybe<Array<string>>;
  link_not_in: Maybe<Array<string>>;
  link_lt: Maybe<string>;
  link_lte: Maybe<string>;
  link_gt: Maybe<string>;
  link_gte: Maybe<string>;
  link_contains: Maybe<string>;
  link_not_contains: Maybe<string>;
  link_starts_with: Maybe<string>;
  link_not_starts_with: Maybe<string>;
  link_ends_with: Maybe<string>;
  link_not_ends_with: Maybe<string>;
  updatedAt: Maybe<Date>;
  updatedAt_not: Maybe<Date>;
  updatedAt_in: Maybe<Array<Date>>;
  updatedAt_not_in: Maybe<Array<Date>>;
  updatedAt_lt: Maybe<Date>;
  updatedAt_lte: Maybe<Date>;
  updatedAt_gt: Maybe<Date>;
  updatedAt_gte: Maybe<Date>;
  updatedBy: Maybe<string>;
  updatedBy_not: Maybe<string>;
  updatedBy_in: Maybe<Array<string>>;
  updatedBy_not_in: Maybe<Array<string>>;
  updatedBy_lt: Maybe<string>;
  updatedBy_lte: Maybe<string>;
  updatedBy_gt: Maybe<string>;
  updatedBy_gte: Maybe<string>;
  updatedBy_contains: Maybe<string>;
  updatedBy_not_contains: Maybe<string>;
  updatedBy_starts_with: Maybe<string>;
  updatedBy_not_starts_with: Maybe<string>;
  updatedBy_ends_with: Maybe<string>;
  updatedBy_not_ends_with: Maybe<string>;
};

export type CaseDocumentSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<CaseDocument>;
  updatedFields?: Maybe<Array<string>>;
  previousValues?: Maybe<CaseDocumentPreviousValues>;
};

export type CaseDocumentSubscriptionWhereInput = {
  AND: Maybe<Array<CaseDocumentSubscriptionWhereInput>>;
  OR: Maybe<Array<CaseDocumentSubscriptionWhereInput>>;
  NOT: Maybe<Array<CaseDocumentSubscriptionWhereInput>>;
  mutation_in: Maybe<Array<MutationType>>;
  updatedFields_contains: Maybe<string>;
  updatedFields_contains_every: Maybe<Array<string>>;
  updatedFields_contains_some: Maybe<Array<string>>;
  node: Maybe<CaseDocumentWhereInput>;
};

export type CaseDocumentUpdateInput = {
  createdBy: Maybe<string>;
  jenisDokumen: Maybe<string>;
  judulDokumen: Maybe<string>;
  keterangan: Maybe<string>;
  link: Maybe<string>;
  updatedBy: Maybe<string>;
  caseId: Maybe<CaseUpdateOneRequiredWithoutDocumentsInput>;
};

export type CaseDocumentUpdateManyDataInput = {
  createdBy: Maybe<string>;
  jenisDokumen: Maybe<string>;
  judulDokumen: Maybe<string>;
  keterangan: Maybe<string>;
  link: Maybe<string>;
  updatedBy: Maybe<string>;
};

export type CaseDocumentUpdateManyMutationInput = {
  createdBy: Maybe<string>;
  jenisDokumen: Maybe<string>;
  judulDokumen: Maybe<string>;
  keterangan: Maybe<string>;
  link: Maybe<string>;
  updatedBy: Maybe<string>;
};

export type CaseDocumentUpdateManyWithoutCaseIdInput = {
  create: Maybe<Array<CaseDocumentCreateWithoutCaseIdInput>>;
  connect: Maybe<Array<CaseDocumentWhereUniqueInput>>;
  set: Maybe<Array<CaseDocumentWhereUniqueInput>>;
  disconnect: Maybe<Array<CaseDocumentWhereUniqueInput>>;
  delete: Maybe<Array<CaseDocumentWhereUniqueInput>>;
  update: Maybe<Array<CaseDocumentUpdateWithWhereUniqueWithoutCaseIdInput>>;
  updateMany: Maybe<Array<CaseDocumentUpdateManyWithWhereNestedInput>>;
  deleteMany: Maybe<Array<CaseDocumentScalarWhereInput>>;
  upsert: Maybe<Array<CaseDocumentUpsertWithWhereUniqueWithoutCaseIdInput>>;
};

export type CaseDocumentUpdateManyWithWhereNestedInput = {
  where: CaseDocumentScalarWhereInput;
  data: CaseDocumentUpdateManyDataInput;
};

export type CaseDocumentUpdateWithoutCaseIdDataInput = {
  createdBy: Maybe<string>;
  jenisDokumen: Maybe<string>;
  judulDokumen: Maybe<string>;
  keterangan: Maybe<string>;
  link: Maybe<string>;
  updatedBy: Maybe<string>;
};

export type CaseDocumentUpdateWithWhereUniqueWithoutCaseIdInput = {
  where: CaseDocumentWhereUniqueInput;
  data: CaseDocumentUpdateWithoutCaseIdDataInput;
};

export type CaseDocumentUpsertWithWhereUniqueWithoutCaseIdInput = {
  where: CaseDocumentWhereUniqueInput;
  update: CaseDocumentUpdateWithoutCaseIdDataInput;
  create: CaseDocumentCreateWithoutCaseIdInput;
};

export type CaseDocumentWhereInput = {
  AND: Maybe<Array<CaseDocumentWhereInput>>;
  OR: Maybe<Array<CaseDocumentWhereInput>>;
  NOT: Maybe<Array<CaseDocumentWhereInput>>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  createdAt: Maybe<Date>;
  createdAt_not: Maybe<Date>;
  createdAt_in: Maybe<Array<Date>>;
  createdAt_not_in: Maybe<Array<Date>>;
  createdAt_lt: Maybe<Date>;
  createdAt_lte: Maybe<Date>;
  createdAt_gt: Maybe<Date>;
  createdAt_gte: Maybe<Date>;
  createdBy: Maybe<string>;
  createdBy_not: Maybe<string>;
  createdBy_in: Maybe<Array<string>>;
  createdBy_not_in: Maybe<Array<string>>;
  createdBy_lt: Maybe<string>;
  createdBy_lte: Maybe<string>;
  createdBy_gt: Maybe<string>;
  createdBy_gte: Maybe<string>;
  createdBy_contains: Maybe<string>;
  createdBy_not_contains: Maybe<string>;
  createdBy_starts_with: Maybe<string>;
  createdBy_not_starts_with: Maybe<string>;
  createdBy_ends_with: Maybe<string>;
  createdBy_not_ends_with: Maybe<string>;
  jenisDokumen: Maybe<string>;
  jenisDokumen_not: Maybe<string>;
  jenisDokumen_in: Maybe<Array<string>>;
  jenisDokumen_not_in: Maybe<Array<string>>;
  jenisDokumen_lt: Maybe<string>;
  jenisDokumen_lte: Maybe<string>;
  jenisDokumen_gt: Maybe<string>;
  jenisDokumen_gte: Maybe<string>;
  jenisDokumen_contains: Maybe<string>;
  jenisDokumen_not_contains: Maybe<string>;
  jenisDokumen_starts_with: Maybe<string>;
  jenisDokumen_not_starts_with: Maybe<string>;
  jenisDokumen_ends_with: Maybe<string>;
  jenisDokumen_not_ends_with: Maybe<string>;
  judulDokumen: Maybe<string>;
  judulDokumen_not: Maybe<string>;
  judulDokumen_in: Maybe<Array<string>>;
  judulDokumen_not_in: Maybe<Array<string>>;
  judulDokumen_lt: Maybe<string>;
  judulDokumen_lte: Maybe<string>;
  judulDokumen_gt: Maybe<string>;
  judulDokumen_gte: Maybe<string>;
  judulDokumen_contains: Maybe<string>;
  judulDokumen_not_contains: Maybe<string>;
  judulDokumen_starts_with: Maybe<string>;
  judulDokumen_not_starts_with: Maybe<string>;
  judulDokumen_ends_with: Maybe<string>;
  judulDokumen_not_ends_with: Maybe<string>;
  keterangan: Maybe<string>;
  keterangan_not: Maybe<string>;
  keterangan_in: Maybe<Array<string>>;
  keterangan_not_in: Maybe<Array<string>>;
  keterangan_lt: Maybe<string>;
  keterangan_lte: Maybe<string>;
  keterangan_gt: Maybe<string>;
  keterangan_gte: Maybe<string>;
  keterangan_contains: Maybe<string>;
  keterangan_not_contains: Maybe<string>;
  keterangan_starts_with: Maybe<string>;
  keterangan_not_starts_with: Maybe<string>;
  keterangan_ends_with: Maybe<string>;
  keterangan_not_ends_with: Maybe<string>;
  link: Maybe<string>;
  link_not: Maybe<string>;
  link_in: Maybe<Array<string>>;
  link_not_in: Maybe<Array<string>>;
  link_lt: Maybe<string>;
  link_lte: Maybe<string>;
  link_gt: Maybe<string>;
  link_gte: Maybe<string>;
  link_contains: Maybe<string>;
  link_not_contains: Maybe<string>;
  link_starts_with: Maybe<string>;
  link_not_starts_with: Maybe<string>;
  link_ends_with: Maybe<string>;
  link_not_ends_with: Maybe<string>;
  updatedAt: Maybe<Date>;
  updatedAt_not: Maybe<Date>;
  updatedAt_in: Maybe<Array<Date>>;
  updatedAt_not_in: Maybe<Array<Date>>;
  updatedAt_lt: Maybe<Date>;
  updatedAt_lte: Maybe<Date>;
  updatedAt_gt: Maybe<Date>;
  updatedAt_gte: Maybe<Date>;
  updatedBy: Maybe<string>;
  updatedBy_not: Maybe<string>;
  updatedBy_in: Maybe<Array<string>>;
  updatedBy_not_in: Maybe<Array<string>>;
  updatedBy_lt: Maybe<string>;
  updatedBy_lte: Maybe<string>;
  updatedBy_gt: Maybe<string>;
  updatedBy_gte: Maybe<string>;
  updatedBy_contains: Maybe<string>;
  updatedBy_not_contains: Maybe<string>;
  updatedBy_starts_with: Maybe<string>;
  updatedBy_not_starts_with: Maybe<string>;
  updatedBy_ends_with: Maybe<string>;
  updatedBy_not_ends_with: Maybe<string>;
  caseId: Maybe<CaseWhereInput>;
};

export type CaseDocumentWhereUniqueInput = {
  id: Maybe<number>;
};

export type CaseEdge = {
  node: Case;
  cursor: string;
};

export type CaseIssue = {
  id: number;
  caseId: Case;
  kodeMt?: Maybe<string>;
};

export type CaseIssueConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<CaseIssueEdge>>;
  aggregate: AggregateCaseIssue;
};

export type CaseIssueCreateInput = {
  kodeMt: Maybe<string>;
  caseId: CaseCreateOneWithoutIssuesInput;
};

export type CaseIssueCreateManyWithoutCaseIdInput = {
  create: Maybe<Array<CaseIssueCreateWithoutCaseIdInput>>;
  connect: Maybe<Array<CaseIssueWhereUniqueInput>>;
};

export type CaseIssueCreateWithoutCaseIdInput = {
  kodeMt: Maybe<string>;
};

export type CaseIssueEdge = {
  node: CaseIssue;
  cursor: string;
};

export enum CaseIssueOrderByInput {
  Id_Asc = 'id_ASC',
  Id_Desc = 'id_DESC',
  KodeMt_Asc = 'kodeMt_ASC',
  KodeMt_Desc = 'kodeMt_DESC',
}

export type CaseIssuePreviousValues = {
  id: number;
  kodeMt?: Maybe<string>;
};

export type CaseIssueScalarWhereInput = {
  AND: Maybe<Array<CaseIssueScalarWhereInput>>;
  OR: Maybe<Array<CaseIssueScalarWhereInput>>;
  NOT: Maybe<Array<CaseIssueScalarWhereInput>>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  kodeMt: Maybe<string>;
  kodeMt_not: Maybe<string>;
  kodeMt_in: Maybe<Array<string>>;
  kodeMt_not_in: Maybe<Array<string>>;
  kodeMt_lt: Maybe<string>;
  kodeMt_lte: Maybe<string>;
  kodeMt_gt: Maybe<string>;
  kodeMt_gte: Maybe<string>;
  kodeMt_contains: Maybe<string>;
  kodeMt_not_contains: Maybe<string>;
  kodeMt_starts_with: Maybe<string>;
  kodeMt_not_starts_with: Maybe<string>;
  kodeMt_ends_with: Maybe<string>;
  kodeMt_not_ends_with: Maybe<string>;
};

export type CaseIssueSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<CaseIssue>;
  updatedFields?: Maybe<Array<string>>;
  previousValues?: Maybe<CaseIssuePreviousValues>;
};

export type CaseIssueSubscriptionWhereInput = {
  AND: Maybe<Array<CaseIssueSubscriptionWhereInput>>;
  OR: Maybe<Array<CaseIssueSubscriptionWhereInput>>;
  NOT: Maybe<Array<CaseIssueSubscriptionWhereInput>>;
  mutation_in: Maybe<Array<MutationType>>;
  updatedFields_contains: Maybe<string>;
  updatedFields_contains_every: Maybe<Array<string>>;
  updatedFields_contains_some: Maybe<Array<string>>;
  node: Maybe<CaseIssueWhereInput>;
};

export type CaseIssueUpdateInput = {
  kodeMt: Maybe<string>;
  caseId: Maybe<CaseUpdateOneRequiredWithoutIssuesInput>;
};

export type CaseIssueUpdateManyDataInput = {
  kodeMt: Maybe<string>;
};

export type CaseIssueUpdateManyMutationInput = {
  kodeMt: Maybe<string>;
};

export type CaseIssueUpdateManyWithoutCaseIdInput = {
  create: Maybe<Array<CaseIssueCreateWithoutCaseIdInput>>;
  connect: Maybe<Array<CaseIssueWhereUniqueInput>>;
  set: Maybe<Array<CaseIssueWhereUniqueInput>>;
  disconnect: Maybe<Array<CaseIssueWhereUniqueInput>>;
  delete: Maybe<Array<CaseIssueWhereUniqueInput>>;
  update: Maybe<Array<CaseIssueUpdateWithWhereUniqueWithoutCaseIdInput>>;
  updateMany: Maybe<Array<CaseIssueUpdateManyWithWhereNestedInput>>;
  deleteMany: Maybe<Array<CaseIssueScalarWhereInput>>;
  upsert: Maybe<Array<CaseIssueUpsertWithWhereUniqueWithoutCaseIdInput>>;
};

export type CaseIssueUpdateManyWithWhereNestedInput = {
  where: CaseIssueScalarWhereInput;
  data: CaseIssueUpdateManyDataInput;
};

export type CaseIssueUpdateWithoutCaseIdDataInput = {
  kodeMt: Maybe<string>;
};

export type CaseIssueUpdateWithWhereUniqueWithoutCaseIdInput = {
  where: CaseIssueWhereUniqueInput;
  data: CaseIssueUpdateWithoutCaseIdDataInput;
};

export type CaseIssueUpsertWithWhereUniqueWithoutCaseIdInput = {
  where: CaseIssueWhereUniqueInput;
  update: CaseIssueUpdateWithoutCaseIdDataInput;
  create: CaseIssueCreateWithoutCaseIdInput;
};

export type CaseIssueWhereInput = {
  AND: Maybe<Array<CaseIssueWhereInput>>;
  OR: Maybe<Array<CaseIssueWhereInput>>;
  NOT: Maybe<Array<CaseIssueWhereInput>>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  kodeMt: Maybe<string>;
  kodeMt_not: Maybe<string>;
  kodeMt_in: Maybe<Array<string>>;
  kodeMt_not_in: Maybe<Array<string>>;
  kodeMt_lt: Maybe<string>;
  kodeMt_lte: Maybe<string>;
  kodeMt_gt: Maybe<string>;
  kodeMt_gte: Maybe<string>;
  kodeMt_contains: Maybe<string>;
  kodeMt_not_contains: Maybe<string>;
  kodeMt_starts_with: Maybe<string>;
  kodeMt_not_starts_with: Maybe<string>;
  kodeMt_ends_with: Maybe<string>;
  kodeMt_not_ends_with: Maybe<string>;
  caseId: Maybe<CaseWhereInput>;
};

export type CaseIssueWhereUniqueInput = {
  id: Maybe<number>;
};

export type CaseKorban = {
  id: number;
  caseId: Case;
  personId?: Maybe<Person>;
};

export type CaseKorbanConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<CaseKorbanEdge>>;
  aggregate: AggregateCaseKorban;
};

export type CaseKorbanCreateInput = {
  caseId: CaseCreateOneWithoutKorbansInput;
  personId: Maybe<PersonCreateOneWithoutCasekorbansInput>;
};

export type CaseKorbanCreateManyWithoutCaseIdInput = {
  create: Maybe<Array<CaseKorbanCreateWithoutCaseIdInput>>;
  connect: Maybe<Array<CaseKorbanWhereUniqueInput>>;
};

export type CaseKorbanCreateManyWithoutPersonIdInput = {
  create: Maybe<Array<CaseKorbanCreateWithoutPersonIdInput>>;
  connect: Maybe<Array<CaseKorbanWhereUniqueInput>>;
};

export type CaseKorbanCreateWithoutCaseIdInput = {
  personId: Maybe<PersonCreateOneWithoutCasekorbansInput>;
};

export type CaseKorbanCreateWithoutPersonIdInput = {
  caseId: CaseCreateOneWithoutKorbansInput;
};

export type CaseKorbanEdge = {
  node: CaseKorban;
  cursor: string;
};

export enum CaseKorbanOrderByInput {
  Id_Asc = 'id_ASC',
  Id_Desc = 'id_DESC',
}

export type CaseKorbanPreviousValues = {
  id: number;
};

export type CaseKorbanScalarWhereInput = {
  AND: Maybe<Array<CaseKorbanScalarWhereInput>>;
  OR: Maybe<Array<CaseKorbanScalarWhereInput>>;
  NOT: Maybe<Array<CaseKorbanScalarWhereInput>>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
};

export type CaseKorbanSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<CaseKorban>;
  updatedFields?: Maybe<Array<string>>;
  previousValues?: Maybe<CaseKorbanPreviousValues>;
};

export type CaseKorbanSubscriptionWhereInput = {
  AND: Maybe<Array<CaseKorbanSubscriptionWhereInput>>;
  OR: Maybe<Array<CaseKorbanSubscriptionWhereInput>>;
  NOT: Maybe<Array<CaseKorbanSubscriptionWhereInput>>;
  mutation_in: Maybe<Array<MutationType>>;
  updatedFields_contains: Maybe<string>;
  updatedFields_contains_every: Maybe<Array<string>>;
  updatedFields_contains_some: Maybe<Array<string>>;
  node: Maybe<CaseKorbanWhereInput>;
};

export type CaseKorbanUpdateInput = {
  caseId: Maybe<CaseUpdateOneRequiredWithoutKorbansInput>;
  personId: Maybe<PersonUpdateOneWithoutCasekorbansInput>;
};

export type CaseKorbanUpdateManyWithoutCaseIdInput = {
  create: Maybe<Array<CaseKorbanCreateWithoutCaseIdInput>>;
  connect: Maybe<Array<CaseKorbanWhereUniqueInput>>;
  set: Maybe<Array<CaseKorbanWhereUniqueInput>>;
  disconnect: Maybe<Array<CaseKorbanWhereUniqueInput>>;
  delete: Maybe<Array<CaseKorbanWhereUniqueInput>>;
  update: Maybe<Array<CaseKorbanUpdateWithWhereUniqueWithoutCaseIdInput>>;
  deleteMany: Maybe<Array<CaseKorbanScalarWhereInput>>;
  upsert: Maybe<Array<CaseKorbanUpsertWithWhereUniqueWithoutCaseIdInput>>;
};

export type CaseKorbanUpdateManyWithoutPersonIdInput = {
  create: Maybe<Array<CaseKorbanCreateWithoutPersonIdInput>>;
  connect: Maybe<Array<CaseKorbanWhereUniqueInput>>;
  set: Maybe<Array<CaseKorbanWhereUniqueInput>>;
  disconnect: Maybe<Array<CaseKorbanWhereUniqueInput>>;
  delete: Maybe<Array<CaseKorbanWhereUniqueInput>>;
  update: Maybe<Array<CaseKorbanUpdateWithWhereUniqueWithoutPersonIdInput>>;
  deleteMany: Maybe<Array<CaseKorbanScalarWhereInput>>;
  upsert: Maybe<Array<CaseKorbanUpsertWithWhereUniqueWithoutPersonIdInput>>;
};

export type CaseKorbanUpdateWithoutCaseIdDataInput = {
  personId: Maybe<PersonUpdateOneWithoutCasekorbansInput>;
};

export type CaseKorbanUpdateWithoutPersonIdDataInput = {
  caseId: Maybe<CaseUpdateOneRequiredWithoutKorbansInput>;
};

export type CaseKorbanUpdateWithWhereUniqueWithoutCaseIdInput = {
  where: CaseKorbanWhereUniqueInput;
  data: CaseKorbanUpdateWithoutCaseIdDataInput;
};

export type CaseKorbanUpdateWithWhereUniqueWithoutPersonIdInput = {
  where: CaseKorbanWhereUniqueInput;
  data: CaseKorbanUpdateWithoutPersonIdDataInput;
};

export type CaseKorbanUpsertWithWhereUniqueWithoutCaseIdInput = {
  where: CaseKorbanWhereUniqueInput;
  update: CaseKorbanUpdateWithoutCaseIdDataInput;
  create: CaseKorbanCreateWithoutCaseIdInput;
};

export type CaseKorbanUpsertWithWhereUniqueWithoutPersonIdInput = {
  where: CaseKorbanWhereUniqueInput;
  update: CaseKorbanUpdateWithoutPersonIdDataInput;
  create: CaseKorbanCreateWithoutPersonIdInput;
};

export type CaseKorbanWhereInput = {
  AND: Maybe<Array<CaseKorbanWhereInput>>;
  OR: Maybe<Array<CaseKorbanWhereInput>>;
  NOT: Maybe<Array<CaseKorbanWhereInput>>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  caseId: Maybe<CaseWhereInput>;
  personId: Maybe<PersonWhereInput>;
};

export type CaseKorbanWhereUniqueInput = {
  id: Maybe<number>;
};

export enum CaseOrderByInput {
  Id_Asc = 'id_ASC',
  Id_Desc = 'id_DESC',
  ApplicationId_Asc = 'applicationId_ASC',
  ApplicationId_Desc = 'applicationId_DESC',
  CaseClosed_Asc = 'caseClosed_ASC',
  CaseClosed_Desc = 'caseClosed_DESC',
  CaseClosedJenis_Asc = 'caseClosedJenis_ASC',
  CaseClosedJenis_Desc = 'caseClosedJenis_DESC',
  CreatedAt_Asc = 'createdAt_ASC',
  CreatedAt_Desc = 'createdAt_DESC',
  CreatedBy_Asc = 'createdBy_ASC',
  CreatedBy_Desc = 'createdBy_DESC',
  HakTerlanggar_Asc = 'hakTerlanggar_ASC',
  HakTerlanggar_Desc = 'hakTerlanggar_DESC',
  Issue_Asc = 'issue_ASC',
  Issue_Desc = 'issue_DESC',
  JudulKasus_Asc = 'judulKasus_ASC',
  JudulKasus_Desc = 'judulKasus_DESC',
  KlasifikasiDok_Asc = 'klasifikasiDok_ASC',
  KlasifikasiDok_Desc = 'klasifikasiDok_DESC',
  KronologiKasus_Asc = 'kronologiKasus_ASC',
  KronologiKasus_Desc = 'kronologiKasus_DESC',
  LockDitolak_Asc = 'lockDitolak_ASC',
  LockDitolak_Desc = 'lockDitolak_DESC',
  StatusPendampingan_Asc = 'statusPendampingan_ASC',
  StatusPendampingan_Desc = 'statusPendampingan_DESC',
  TargetAdvokasi_Asc = 'targetAdvokasi_ASC',
  TargetAdvokasi_Desc = 'targetAdvokasi_DESC',
  UnlockPk_Asc = 'unlockPk_ASC',
  UnlockPk_Desc = 'unlockPk_DESC',
  UnlockTransfer_Asc = 'unlockTransfer_ASC',
  UnlockTransfer_Desc = 'unlockTransfer_DESC',
  UpdatedAt_Asc = 'updatedAt_ASC',
  UpdatedAt_Desc = 'updatedAt_DESC',
  UpdatedBy_Asc = 'updatedBy_ASC',
  UpdatedBy_Desc = 'updatedBy_DESC',
}

export type CasePelaku = {
  id: number;
  caseId: Case;
  personId?: Maybe<Person>;
};

export type CasePelakuConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<CasePelakuEdge>>;
  aggregate: AggregateCasePelaku;
};

export type CasePelakuCreateInput = {
  caseId: CaseCreateOneWithoutPelakusInput;
  personId: Maybe<PersonCreateOneWithoutCasepelakusInput>;
};

export type CasePelakuCreateManyWithoutCaseIdInput = {
  create: Maybe<Array<CasePelakuCreateWithoutCaseIdInput>>;
  connect: Maybe<Array<CasePelakuWhereUniqueInput>>;
};

export type CasePelakuCreateManyWithoutPersonIdInput = {
  create: Maybe<Array<CasePelakuCreateWithoutPersonIdInput>>;
  connect: Maybe<Array<CasePelakuWhereUniqueInput>>;
};

export type CasePelakuCreateWithoutCaseIdInput = {
  personId: Maybe<PersonCreateOneWithoutCasepelakusInput>;
};

export type CasePelakuCreateWithoutPersonIdInput = {
  caseId: CaseCreateOneWithoutPelakusInput;
};

export type CasePelakuEdge = {
  node: CasePelaku;
  cursor: string;
};

export enum CasePelakuOrderByInput {
  Id_Asc = 'id_ASC',
  Id_Desc = 'id_DESC',
}

export type CasePelakuPreviousValues = {
  id: number;
};

export type CasePelakuScalarWhereInput = {
  AND: Maybe<Array<CasePelakuScalarWhereInput>>;
  OR: Maybe<Array<CasePelakuScalarWhereInput>>;
  NOT: Maybe<Array<CasePelakuScalarWhereInput>>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
};

export type CasePelakuSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<CasePelaku>;
  updatedFields?: Maybe<Array<string>>;
  previousValues?: Maybe<CasePelakuPreviousValues>;
};

export type CasePelakuSubscriptionWhereInput = {
  AND: Maybe<Array<CasePelakuSubscriptionWhereInput>>;
  OR: Maybe<Array<CasePelakuSubscriptionWhereInput>>;
  NOT: Maybe<Array<CasePelakuSubscriptionWhereInput>>;
  mutation_in: Maybe<Array<MutationType>>;
  updatedFields_contains: Maybe<string>;
  updatedFields_contains_every: Maybe<Array<string>>;
  updatedFields_contains_some: Maybe<Array<string>>;
  node: Maybe<CasePelakuWhereInput>;
};

export type CasePelakuUpdateInput = {
  caseId: Maybe<CaseUpdateOneRequiredWithoutPelakusInput>;
  personId: Maybe<PersonUpdateOneWithoutCasepelakusInput>;
};

export type CasePelakuUpdateManyWithoutCaseIdInput = {
  create: Maybe<Array<CasePelakuCreateWithoutCaseIdInput>>;
  connect: Maybe<Array<CasePelakuWhereUniqueInput>>;
  set: Maybe<Array<CasePelakuWhereUniqueInput>>;
  disconnect: Maybe<Array<CasePelakuWhereUniqueInput>>;
  delete: Maybe<Array<CasePelakuWhereUniqueInput>>;
  update: Maybe<Array<CasePelakuUpdateWithWhereUniqueWithoutCaseIdInput>>;
  deleteMany: Maybe<Array<CasePelakuScalarWhereInput>>;
  upsert: Maybe<Array<CasePelakuUpsertWithWhereUniqueWithoutCaseIdInput>>;
};

export type CasePelakuUpdateManyWithoutPersonIdInput = {
  create: Maybe<Array<CasePelakuCreateWithoutPersonIdInput>>;
  connect: Maybe<Array<CasePelakuWhereUniqueInput>>;
  set: Maybe<Array<CasePelakuWhereUniqueInput>>;
  disconnect: Maybe<Array<CasePelakuWhereUniqueInput>>;
  delete: Maybe<Array<CasePelakuWhereUniqueInput>>;
  update: Maybe<Array<CasePelakuUpdateWithWhereUniqueWithoutPersonIdInput>>;
  deleteMany: Maybe<Array<CasePelakuScalarWhereInput>>;
  upsert: Maybe<Array<CasePelakuUpsertWithWhereUniqueWithoutPersonIdInput>>;
};

export type CasePelakuUpdateWithoutCaseIdDataInput = {
  personId: Maybe<PersonUpdateOneWithoutCasepelakusInput>;
};

export type CasePelakuUpdateWithoutPersonIdDataInput = {
  caseId: Maybe<CaseUpdateOneRequiredWithoutPelakusInput>;
};

export type CasePelakuUpdateWithWhereUniqueWithoutCaseIdInput = {
  where: CasePelakuWhereUniqueInput;
  data: CasePelakuUpdateWithoutCaseIdDataInput;
};

export type CasePelakuUpdateWithWhereUniqueWithoutPersonIdInput = {
  where: CasePelakuWhereUniqueInput;
  data: CasePelakuUpdateWithoutPersonIdDataInput;
};

export type CasePelakuUpsertWithWhereUniqueWithoutCaseIdInput = {
  where: CasePelakuWhereUniqueInput;
  update: CasePelakuUpdateWithoutCaseIdDataInput;
  create: CasePelakuCreateWithoutCaseIdInput;
};

export type CasePelakuUpsertWithWhereUniqueWithoutPersonIdInput = {
  where: CasePelakuWhereUniqueInput;
  update: CasePelakuUpdateWithoutPersonIdDataInput;
  create: CasePelakuCreateWithoutPersonIdInput;
};

export type CasePelakuWhereInput = {
  AND: Maybe<Array<CasePelakuWhereInput>>;
  OR: Maybe<Array<CasePelakuWhereInput>>;
  NOT: Maybe<Array<CasePelakuWhereInput>>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  caseId: Maybe<CaseWhereInput>;
  personId: Maybe<PersonWhereInput>;
};

export type CasePelakuWhereUniqueInput = {
  id: Maybe<number>;
};

export type CasePk = {
  id: number;
  caseId: Case;
  createdAt: Date;
  createdBy?: Maybe<string>;
  didampingi: boolean;
  legalMemo?: Maybe<string>;
  notulaRapat?: Maybe<string>;
  ppPendamping?: Maybe<number>;
  statusAlasanTdk?: Maybe<string>;
  tglRapat?: Maybe<Date>;
  updatedAt: Date;
  updatedBy?: Maybe<string>;
};

export type CasePkConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<CasePkEdge>>;
  aggregate: AggregateCasePk;
};

export type CasePkCreateInput = {
  createdBy: Maybe<string>;
  didampingi: boolean;
  legalMemo: Maybe<string>;
  notulaRapat: Maybe<string>;
  ppPendamping: Maybe<number>;
  statusAlasanTdk: Maybe<string>;
  tglRapat: Maybe<Date>;
  updatedBy: Maybe<string>;
  caseId: CaseCreateOneWithoutPksInput;
};

export type CasePkCreateManyWithoutCaseIdInput = {
  create: Maybe<Array<CasePkCreateWithoutCaseIdInput>>;
  connect: Maybe<Array<CasePkWhereUniqueInput>>;
};

export type CasePkCreateWithoutCaseIdInput = {
  createdBy: Maybe<string>;
  didampingi: boolean;
  legalMemo: Maybe<string>;
  notulaRapat: Maybe<string>;
  ppPendamping: Maybe<number>;
  statusAlasanTdk: Maybe<string>;
  tglRapat: Maybe<Date>;
  updatedBy: Maybe<string>;
};

export type CasePkEdge = {
  node: CasePk;
  cursor: string;
};

export enum CasePkOrderByInput {
  Id_Asc = 'id_ASC',
  Id_Desc = 'id_DESC',
  CreatedAt_Asc = 'createdAt_ASC',
  CreatedAt_Desc = 'createdAt_DESC',
  CreatedBy_Asc = 'createdBy_ASC',
  CreatedBy_Desc = 'createdBy_DESC',
  Didampingi_Asc = 'didampingi_ASC',
  Didampingi_Desc = 'didampingi_DESC',
  LegalMemo_Asc = 'legalMemo_ASC',
  LegalMemo_Desc = 'legalMemo_DESC',
  NotulaRapat_Asc = 'notulaRapat_ASC',
  NotulaRapat_Desc = 'notulaRapat_DESC',
  PpPendamping_Asc = 'ppPendamping_ASC',
  PpPendamping_Desc = 'ppPendamping_DESC',
  StatusAlasanTdk_Asc = 'statusAlasanTdk_ASC',
  StatusAlasanTdk_Desc = 'statusAlasanTdk_DESC',
  TglRapat_Asc = 'tglRapat_ASC',
  TglRapat_Desc = 'tglRapat_DESC',
  UpdatedAt_Asc = 'updatedAt_ASC',
  UpdatedAt_Desc = 'updatedAt_DESC',
  UpdatedBy_Asc = 'updatedBy_ASC',
  UpdatedBy_Desc = 'updatedBy_DESC',
}

export type CasePkPreviousValues = {
  id: number;
  createdAt: Date;
  createdBy?: Maybe<string>;
  didampingi: boolean;
  legalMemo?: Maybe<string>;
  notulaRapat?: Maybe<string>;
  ppPendamping?: Maybe<number>;
  statusAlasanTdk?: Maybe<string>;
  tglRapat?: Maybe<Date>;
  updatedAt: Date;
  updatedBy?: Maybe<string>;
};

export type CasePkScalarWhereInput = {
  AND: Maybe<Array<CasePkScalarWhereInput>>;
  OR: Maybe<Array<CasePkScalarWhereInput>>;
  NOT: Maybe<Array<CasePkScalarWhereInput>>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  createdAt: Maybe<Date>;
  createdAt_not: Maybe<Date>;
  createdAt_in: Maybe<Array<Date>>;
  createdAt_not_in: Maybe<Array<Date>>;
  createdAt_lt: Maybe<Date>;
  createdAt_lte: Maybe<Date>;
  createdAt_gt: Maybe<Date>;
  createdAt_gte: Maybe<Date>;
  createdBy: Maybe<string>;
  createdBy_not: Maybe<string>;
  createdBy_in: Maybe<Array<string>>;
  createdBy_not_in: Maybe<Array<string>>;
  createdBy_lt: Maybe<string>;
  createdBy_lte: Maybe<string>;
  createdBy_gt: Maybe<string>;
  createdBy_gte: Maybe<string>;
  createdBy_contains: Maybe<string>;
  createdBy_not_contains: Maybe<string>;
  createdBy_starts_with: Maybe<string>;
  createdBy_not_starts_with: Maybe<string>;
  createdBy_ends_with: Maybe<string>;
  createdBy_not_ends_with: Maybe<string>;
  didampingi: Maybe<boolean>;
  didampingi_not: Maybe<boolean>;
  legalMemo: Maybe<string>;
  legalMemo_not: Maybe<string>;
  legalMemo_in: Maybe<Array<string>>;
  legalMemo_not_in: Maybe<Array<string>>;
  legalMemo_lt: Maybe<string>;
  legalMemo_lte: Maybe<string>;
  legalMemo_gt: Maybe<string>;
  legalMemo_gte: Maybe<string>;
  legalMemo_contains: Maybe<string>;
  legalMemo_not_contains: Maybe<string>;
  legalMemo_starts_with: Maybe<string>;
  legalMemo_not_starts_with: Maybe<string>;
  legalMemo_ends_with: Maybe<string>;
  legalMemo_not_ends_with: Maybe<string>;
  notulaRapat: Maybe<string>;
  notulaRapat_not: Maybe<string>;
  notulaRapat_in: Maybe<Array<string>>;
  notulaRapat_not_in: Maybe<Array<string>>;
  notulaRapat_lt: Maybe<string>;
  notulaRapat_lte: Maybe<string>;
  notulaRapat_gt: Maybe<string>;
  notulaRapat_gte: Maybe<string>;
  notulaRapat_contains: Maybe<string>;
  notulaRapat_not_contains: Maybe<string>;
  notulaRapat_starts_with: Maybe<string>;
  notulaRapat_not_starts_with: Maybe<string>;
  notulaRapat_ends_with: Maybe<string>;
  notulaRapat_not_ends_with: Maybe<string>;
  ppPendamping: Maybe<number>;
  ppPendamping_not: Maybe<number>;
  ppPendamping_in: Maybe<Array<number>>;
  ppPendamping_not_in: Maybe<Array<number>>;
  ppPendamping_lt: Maybe<number>;
  ppPendamping_lte: Maybe<number>;
  ppPendamping_gt: Maybe<number>;
  ppPendamping_gte: Maybe<number>;
  statusAlasanTdk: Maybe<string>;
  statusAlasanTdk_not: Maybe<string>;
  statusAlasanTdk_in: Maybe<Array<string>>;
  statusAlasanTdk_not_in: Maybe<Array<string>>;
  statusAlasanTdk_lt: Maybe<string>;
  statusAlasanTdk_lte: Maybe<string>;
  statusAlasanTdk_gt: Maybe<string>;
  statusAlasanTdk_gte: Maybe<string>;
  statusAlasanTdk_contains: Maybe<string>;
  statusAlasanTdk_not_contains: Maybe<string>;
  statusAlasanTdk_starts_with: Maybe<string>;
  statusAlasanTdk_not_starts_with: Maybe<string>;
  statusAlasanTdk_ends_with: Maybe<string>;
  statusAlasanTdk_not_ends_with: Maybe<string>;
  tglRapat: Maybe<Date>;
  tglRapat_not: Maybe<Date>;
  tglRapat_in: Maybe<Array<Date>>;
  tglRapat_not_in: Maybe<Array<Date>>;
  tglRapat_lt: Maybe<Date>;
  tglRapat_lte: Maybe<Date>;
  tglRapat_gt: Maybe<Date>;
  tglRapat_gte: Maybe<Date>;
  updatedAt: Maybe<Date>;
  updatedAt_not: Maybe<Date>;
  updatedAt_in: Maybe<Array<Date>>;
  updatedAt_not_in: Maybe<Array<Date>>;
  updatedAt_lt: Maybe<Date>;
  updatedAt_lte: Maybe<Date>;
  updatedAt_gt: Maybe<Date>;
  updatedAt_gte: Maybe<Date>;
  updatedBy: Maybe<string>;
  updatedBy_not: Maybe<string>;
  updatedBy_in: Maybe<Array<string>>;
  updatedBy_not_in: Maybe<Array<string>>;
  updatedBy_lt: Maybe<string>;
  updatedBy_lte: Maybe<string>;
  updatedBy_gt: Maybe<string>;
  updatedBy_gte: Maybe<string>;
  updatedBy_contains: Maybe<string>;
  updatedBy_not_contains: Maybe<string>;
  updatedBy_starts_with: Maybe<string>;
  updatedBy_not_starts_with: Maybe<string>;
  updatedBy_ends_with: Maybe<string>;
  updatedBy_not_ends_with: Maybe<string>;
};

export type CasePkSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<CasePk>;
  updatedFields?: Maybe<Array<string>>;
  previousValues?: Maybe<CasePkPreviousValues>;
};

export type CasePkSubscriptionWhereInput = {
  AND: Maybe<Array<CasePkSubscriptionWhereInput>>;
  OR: Maybe<Array<CasePkSubscriptionWhereInput>>;
  NOT: Maybe<Array<CasePkSubscriptionWhereInput>>;
  mutation_in: Maybe<Array<MutationType>>;
  updatedFields_contains: Maybe<string>;
  updatedFields_contains_every: Maybe<Array<string>>;
  updatedFields_contains_some: Maybe<Array<string>>;
  node: Maybe<CasePkWhereInput>;
};

export type CasePkUpdateInput = {
  createdBy: Maybe<string>;
  didampingi: Maybe<boolean>;
  legalMemo: Maybe<string>;
  notulaRapat: Maybe<string>;
  ppPendamping: Maybe<number>;
  statusAlasanTdk: Maybe<string>;
  tglRapat: Maybe<Date>;
  updatedBy: Maybe<string>;
  caseId: Maybe<CaseUpdateOneRequiredWithoutPksInput>;
};

export type CasePkUpdateManyDataInput = {
  createdBy: Maybe<string>;
  didampingi: Maybe<boolean>;
  legalMemo: Maybe<string>;
  notulaRapat: Maybe<string>;
  ppPendamping: Maybe<number>;
  statusAlasanTdk: Maybe<string>;
  tglRapat: Maybe<Date>;
  updatedBy: Maybe<string>;
};

export type CasePkUpdateManyMutationInput = {
  createdBy: Maybe<string>;
  didampingi: Maybe<boolean>;
  legalMemo: Maybe<string>;
  notulaRapat: Maybe<string>;
  ppPendamping: Maybe<number>;
  statusAlasanTdk: Maybe<string>;
  tglRapat: Maybe<Date>;
  updatedBy: Maybe<string>;
};

export type CasePkUpdateManyWithoutCaseIdInput = {
  create: Maybe<Array<CasePkCreateWithoutCaseIdInput>>;
  connect: Maybe<Array<CasePkWhereUniqueInput>>;
  set: Maybe<Array<CasePkWhereUniqueInput>>;
  disconnect: Maybe<Array<CasePkWhereUniqueInput>>;
  delete: Maybe<Array<CasePkWhereUniqueInput>>;
  update: Maybe<Array<CasePkUpdateWithWhereUniqueWithoutCaseIdInput>>;
  updateMany: Maybe<Array<CasePkUpdateManyWithWhereNestedInput>>;
  deleteMany: Maybe<Array<CasePkScalarWhereInput>>;
  upsert: Maybe<Array<CasePkUpsertWithWhereUniqueWithoutCaseIdInput>>;
};

export type CasePkUpdateManyWithWhereNestedInput = {
  where: CasePkScalarWhereInput;
  data: CasePkUpdateManyDataInput;
};

export type CasePkUpdateWithoutCaseIdDataInput = {
  createdBy: Maybe<string>;
  didampingi: Maybe<boolean>;
  legalMemo: Maybe<string>;
  notulaRapat: Maybe<string>;
  ppPendamping: Maybe<number>;
  statusAlasanTdk: Maybe<string>;
  tglRapat: Maybe<Date>;
  updatedBy: Maybe<string>;
};

export type CasePkUpdateWithWhereUniqueWithoutCaseIdInput = {
  where: CasePkWhereUniqueInput;
  data: CasePkUpdateWithoutCaseIdDataInput;
};

export type CasePkUpsertWithWhereUniqueWithoutCaseIdInput = {
  where: CasePkWhereUniqueInput;
  update: CasePkUpdateWithoutCaseIdDataInput;
  create: CasePkCreateWithoutCaseIdInput;
};

export type CasePkWhereInput = {
  AND: Maybe<Array<CasePkWhereInput>>;
  OR: Maybe<Array<CasePkWhereInput>>;
  NOT: Maybe<Array<CasePkWhereInput>>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  createdAt: Maybe<Date>;
  createdAt_not: Maybe<Date>;
  createdAt_in: Maybe<Array<Date>>;
  createdAt_not_in: Maybe<Array<Date>>;
  createdAt_lt: Maybe<Date>;
  createdAt_lte: Maybe<Date>;
  createdAt_gt: Maybe<Date>;
  createdAt_gte: Maybe<Date>;
  createdBy: Maybe<string>;
  createdBy_not: Maybe<string>;
  createdBy_in: Maybe<Array<string>>;
  createdBy_not_in: Maybe<Array<string>>;
  createdBy_lt: Maybe<string>;
  createdBy_lte: Maybe<string>;
  createdBy_gt: Maybe<string>;
  createdBy_gte: Maybe<string>;
  createdBy_contains: Maybe<string>;
  createdBy_not_contains: Maybe<string>;
  createdBy_starts_with: Maybe<string>;
  createdBy_not_starts_with: Maybe<string>;
  createdBy_ends_with: Maybe<string>;
  createdBy_not_ends_with: Maybe<string>;
  didampingi: Maybe<boolean>;
  didampingi_not: Maybe<boolean>;
  legalMemo: Maybe<string>;
  legalMemo_not: Maybe<string>;
  legalMemo_in: Maybe<Array<string>>;
  legalMemo_not_in: Maybe<Array<string>>;
  legalMemo_lt: Maybe<string>;
  legalMemo_lte: Maybe<string>;
  legalMemo_gt: Maybe<string>;
  legalMemo_gte: Maybe<string>;
  legalMemo_contains: Maybe<string>;
  legalMemo_not_contains: Maybe<string>;
  legalMemo_starts_with: Maybe<string>;
  legalMemo_not_starts_with: Maybe<string>;
  legalMemo_ends_with: Maybe<string>;
  legalMemo_not_ends_with: Maybe<string>;
  notulaRapat: Maybe<string>;
  notulaRapat_not: Maybe<string>;
  notulaRapat_in: Maybe<Array<string>>;
  notulaRapat_not_in: Maybe<Array<string>>;
  notulaRapat_lt: Maybe<string>;
  notulaRapat_lte: Maybe<string>;
  notulaRapat_gt: Maybe<string>;
  notulaRapat_gte: Maybe<string>;
  notulaRapat_contains: Maybe<string>;
  notulaRapat_not_contains: Maybe<string>;
  notulaRapat_starts_with: Maybe<string>;
  notulaRapat_not_starts_with: Maybe<string>;
  notulaRapat_ends_with: Maybe<string>;
  notulaRapat_not_ends_with: Maybe<string>;
  ppPendamping: Maybe<number>;
  ppPendamping_not: Maybe<number>;
  ppPendamping_in: Maybe<Array<number>>;
  ppPendamping_not_in: Maybe<Array<number>>;
  ppPendamping_lt: Maybe<number>;
  ppPendamping_lte: Maybe<number>;
  ppPendamping_gt: Maybe<number>;
  ppPendamping_gte: Maybe<number>;
  statusAlasanTdk: Maybe<string>;
  statusAlasanTdk_not: Maybe<string>;
  statusAlasanTdk_in: Maybe<Array<string>>;
  statusAlasanTdk_not_in: Maybe<Array<string>>;
  statusAlasanTdk_lt: Maybe<string>;
  statusAlasanTdk_lte: Maybe<string>;
  statusAlasanTdk_gt: Maybe<string>;
  statusAlasanTdk_gte: Maybe<string>;
  statusAlasanTdk_contains: Maybe<string>;
  statusAlasanTdk_not_contains: Maybe<string>;
  statusAlasanTdk_starts_with: Maybe<string>;
  statusAlasanTdk_not_starts_with: Maybe<string>;
  statusAlasanTdk_ends_with: Maybe<string>;
  statusAlasanTdk_not_ends_with: Maybe<string>;
  tglRapat: Maybe<Date>;
  tglRapat_not: Maybe<Date>;
  tglRapat_in: Maybe<Array<Date>>;
  tglRapat_not_in: Maybe<Array<Date>>;
  tglRapat_lt: Maybe<Date>;
  tglRapat_lte: Maybe<Date>;
  tglRapat_gt: Maybe<Date>;
  tglRapat_gte: Maybe<Date>;
  updatedAt: Maybe<Date>;
  updatedAt_not: Maybe<Date>;
  updatedAt_in: Maybe<Array<Date>>;
  updatedAt_not_in: Maybe<Array<Date>>;
  updatedAt_lt: Maybe<Date>;
  updatedAt_lte: Maybe<Date>;
  updatedAt_gt: Maybe<Date>;
  updatedAt_gte: Maybe<Date>;
  updatedBy: Maybe<string>;
  updatedBy_not: Maybe<string>;
  updatedBy_in: Maybe<Array<string>>;
  updatedBy_not_in: Maybe<Array<string>>;
  updatedBy_lt: Maybe<string>;
  updatedBy_lte: Maybe<string>;
  updatedBy_gt: Maybe<string>;
  updatedBy_gte: Maybe<string>;
  updatedBy_contains: Maybe<string>;
  updatedBy_not_contains: Maybe<string>;
  updatedBy_starts_with: Maybe<string>;
  updatedBy_not_starts_with: Maybe<string>;
  updatedBy_ends_with: Maybe<string>;
  updatedBy_not_ends_with: Maybe<string>;
  caseId: Maybe<CaseWhereInput>;
};

export type CasePkWhereUniqueInput = {
  id: Maybe<number>;
};

export type CasePreviousValues = {
  id: number;
  applicationId?: Maybe<number>;
  caseClosed: boolean;
  caseClosedJenis?: Maybe<string>;
  createdAt: Date;
  createdBy?: Maybe<string>;
  hakTerlanggar?: Maybe<string>;
  issue?: Maybe<string>;
  judulKasus?: Maybe<string>;
  klasifikasiDok?: Maybe<string>;
  kronologiKasus?: Maybe<string>;
  lockDitolak: boolean;
  statusPendampingan?: Maybe<string>;
  targetAdvokasi?: Maybe<string>;
  unlockPk: boolean;
  unlockTransfer: boolean;
  updatedAt: Date;
  updatedBy?: Maybe<string>;
};

export type CaseProgress = {
  id: number;
  caseId: Case;
  catatan?: Maybe<string>;
  createdAt: Date;
  createdBy?: Maybe<string>;
  jenisPeradilan?: Maybe<string>;
  updatedAt: Date;
  updatedBy?: Maybe<string>;
};

export type CaseProgressActivity = {
  id: number;
  capaian?: Maybe<string>;
  caseId: Case;
  createdAt: Date;
  createdBy?: Maybe<string>;
  hambatan?: Maybe<string>;
  judulAktifitas?: Maybe<string>;
  position?: Maybe<string>;
  rencanaStrategi?: Maybe<string>;
  targetAdvokasi?: Maybe<string>;
  tglAktifitas?: Maybe<Date>;
  updatedAt: Date;
  updatedBy?: Maybe<string>;
  activitieslit?: Maybe<Array<CaseProgressActivityLit>>;
  activitiesnonlit?: Maybe<Array<CaseProgressActivityNonlit>>;
};

export type CaseProgressActivityActivitieslitArgs = {
  where?: Maybe<CaseProgressActivityLitWhereInput>;
  orderBy?: Maybe<CaseProgressActivityLitOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type CaseProgressActivityActivitiesnonlitArgs = {
  where?: Maybe<CaseProgressActivityNonlitWhereInput>;
  orderBy?: Maybe<CaseProgressActivityNonlitOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type CaseProgressActivityConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<CaseProgressActivityEdge>>;
  aggregate: AggregateCaseProgressActivity;
};

export type CaseProgressActivityCreateInput = {
  capaian: Maybe<string>;
  createdBy: Maybe<string>;
  hambatan: Maybe<string>;
  judulAktifitas: Maybe<string>;
  position: Maybe<string>;
  rencanaStrategi: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  tglAktifitas: Maybe<Date>;
  updatedBy: Maybe<string>;
  caseId: CaseCreateOneWithoutActivitiesInput;
  activitieslit: Maybe<CaseProgressActivityLitCreateManyWithoutCaseProgressActivityIdInput>;
  activitiesnonlit: Maybe<CaseProgressActivityNonlitCreateManyWithoutCaseProgressActivityIdInput>;
};

export type CaseProgressActivityCreateManyWithoutCaseIdInput = {
  create: Maybe<Array<CaseProgressActivityCreateWithoutCaseIdInput>>;
  connect: Maybe<Array<CaseProgressActivityWhereUniqueInput>>;
};

export type CaseProgressActivityCreateOneWithoutActivitieslitInput = {
  create: Maybe<CaseProgressActivityCreateWithoutActivitieslitInput>;
  connect: Maybe<CaseProgressActivityWhereUniqueInput>;
};

export type CaseProgressActivityCreateOneWithoutActivitiesnonlitInput = {
  create: Maybe<CaseProgressActivityCreateWithoutActivitiesnonlitInput>;
  connect: Maybe<CaseProgressActivityWhereUniqueInput>;
};

export type CaseProgressActivityCreateWithoutActivitieslitInput = {
  capaian: Maybe<string>;
  createdBy: Maybe<string>;
  hambatan: Maybe<string>;
  judulAktifitas: Maybe<string>;
  position: Maybe<string>;
  rencanaStrategi: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  tglAktifitas: Maybe<Date>;
  updatedBy: Maybe<string>;
  caseId: CaseCreateOneWithoutActivitiesInput;
  activitiesnonlit: Maybe<CaseProgressActivityNonlitCreateManyWithoutCaseProgressActivityIdInput>;
};

export type CaseProgressActivityCreateWithoutActivitiesnonlitInput = {
  capaian: Maybe<string>;
  createdBy: Maybe<string>;
  hambatan: Maybe<string>;
  judulAktifitas: Maybe<string>;
  position: Maybe<string>;
  rencanaStrategi: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  tglAktifitas: Maybe<Date>;
  updatedBy: Maybe<string>;
  caseId: CaseCreateOneWithoutActivitiesInput;
  activitieslit: Maybe<CaseProgressActivityLitCreateManyWithoutCaseProgressActivityIdInput>;
};

export type CaseProgressActivityCreateWithoutCaseIdInput = {
  capaian: Maybe<string>;
  createdBy: Maybe<string>;
  hambatan: Maybe<string>;
  judulAktifitas: Maybe<string>;
  position: Maybe<string>;
  rencanaStrategi: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  tglAktifitas: Maybe<Date>;
  updatedBy: Maybe<string>;
  activitieslit: Maybe<CaseProgressActivityLitCreateManyWithoutCaseProgressActivityIdInput>;
  activitiesnonlit: Maybe<CaseProgressActivityNonlitCreateManyWithoutCaseProgressActivityIdInput>;
};

export type CaseProgressActivityEdge = {
  node: CaseProgressActivity;
  cursor: string;
};

export type CaseProgressActivityLit = {
  id: number;
  caseProgressActivityId: CaseProgressActivity;
  kodeMt?: Maybe<string>;
};

export type CaseProgressActivityLitConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<CaseProgressActivityLitEdge>>;
  aggregate: AggregateCaseProgressActivityLit;
};

export type CaseProgressActivityLitCreateInput = {
  kodeMt: Maybe<string>;
  caseProgressActivityId: CaseProgressActivityCreateOneWithoutActivitieslitInput;
};

export type CaseProgressActivityLitCreateManyWithoutCaseProgressActivityIdInput = {
  create: Maybe<Array<CaseProgressActivityLitCreateWithoutCaseProgressActivityIdInput>>;
  connect: Maybe<Array<CaseProgressActivityLitWhereUniqueInput>>;
};

export type CaseProgressActivityLitCreateWithoutCaseProgressActivityIdInput = {
  kodeMt: Maybe<string>;
};

export type CaseProgressActivityLitEdge = {
  node: CaseProgressActivityLit;
  cursor: string;
};

export enum CaseProgressActivityLitOrderByInput {
  Id_Asc = 'id_ASC',
  Id_Desc = 'id_DESC',
  KodeMt_Asc = 'kodeMt_ASC',
  KodeMt_Desc = 'kodeMt_DESC',
}

export type CaseProgressActivityLitPreviousValues = {
  id: number;
  kodeMt?: Maybe<string>;
};

export type CaseProgressActivityLitScalarWhereInput = {
  AND: Maybe<Array<CaseProgressActivityLitScalarWhereInput>>;
  OR: Maybe<Array<CaseProgressActivityLitScalarWhereInput>>;
  NOT: Maybe<Array<CaseProgressActivityLitScalarWhereInput>>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  kodeMt: Maybe<string>;
  kodeMt_not: Maybe<string>;
  kodeMt_in: Maybe<Array<string>>;
  kodeMt_not_in: Maybe<Array<string>>;
  kodeMt_lt: Maybe<string>;
  kodeMt_lte: Maybe<string>;
  kodeMt_gt: Maybe<string>;
  kodeMt_gte: Maybe<string>;
  kodeMt_contains: Maybe<string>;
  kodeMt_not_contains: Maybe<string>;
  kodeMt_starts_with: Maybe<string>;
  kodeMt_not_starts_with: Maybe<string>;
  kodeMt_ends_with: Maybe<string>;
  kodeMt_not_ends_with: Maybe<string>;
};

export type CaseProgressActivityLitSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<CaseProgressActivityLit>;
  updatedFields?: Maybe<Array<string>>;
  previousValues?: Maybe<CaseProgressActivityLitPreviousValues>;
};

export type CaseProgressActivityLitSubscriptionWhereInput = {
  AND: Maybe<Array<CaseProgressActivityLitSubscriptionWhereInput>>;
  OR: Maybe<Array<CaseProgressActivityLitSubscriptionWhereInput>>;
  NOT: Maybe<Array<CaseProgressActivityLitSubscriptionWhereInput>>;
  mutation_in: Maybe<Array<MutationType>>;
  updatedFields_contains: Maybe<string>;
  updatedFields_contains_every: Maybe<Array<string>>;
  updatedFields_contains_some: Maybe<Array<string>>;
  node: Maybe<CaseProgressActivityLitWhereInput>;
};

export type CaseProgressActivityLitUpdateInput = {
  kodeMt: Maybe<string>;
  caseProgressActivityId: Maybe<CaseProgressActivityUpdateOneRequiredWithoutActivitieslitInput>;
};

export type CaseProgressActivityLitUpdateManyDataInput = {
  kodeMt: Maybe<string>;
};

export type CaseProgressActivityLitUpdateManyMutationInput = {
  kodeMt: Maybe<string>;
};

export type CaseProgressActivityLitUpdateManyWithoutCaseProgressActivityIdInput = {
  create: Maybe<Array<CaseProgressActivityLitCreateWithoutCaseProgressActivityIdInput>>;
  connect: Maybe<Array<CaseProgressActivityLitWhereUniqueInput>>;
  set: Maybe<Array<CaseProgressActivityLitWhereUniqueInput>>;
  disconnect: Maybe<Array<CaseProgressActivityLitWhereUniqueInput>>;
  delete: Maybe<Array<CaseProgressActivityLitWhereUniqueInput>>;
  update: Maybe<Array<CaseProgressActivityLitUpdateWithWhereUniqueWithoutCaseProgressActivityIdInput>>;
  updateMany: Maybe<Array<CaseProgressActivityLitUpdateManyWithWhereNestedInput>>;
  deleteMany: Maybe<Array<CaseProgressActivityLitScalarWhereInput>>;
  upsert: Maybe<Array<CaseProgressActivityLitUpsertWithWhereUniqueWithoutCaseProgressActivityIdInput>>;
};

export type CaseProgressActivityLitUpdateManyWithWhereNestedInput = {
  where: CaseProgressActivityLitScalarWhereInput;
  data: CaseProgressActivityLitUpdateManyDataInput;
};

export type CaseProgressActivityLitUpdateWithoutCaseProgressActivityIdDataInput = {
  kodeMt: Maybe<string>;
};

export type CaseProgressActivityLitUpdateWithWhereUniqueWithoutCaseProgressActivityIdInput = {
  where: CaseProgressActivityLitWhereUniqueInput;
  data: CaseProgressActivityLitUpdateWithoutCaseProgressActivityIdDataInput;
};

export type CaseProgressActivityLitUpsertWithWhereUniqueWithoutCaseProgressActivityIdInput = {
  where: CaseProgressActivityLitWhereUniqueInput;
  update: CaseProgressActivityLitUpdateWithoutCaseProgressActivityIdDataInput;
  create: CaseProgressActivityLitCreateWithoutCaseProgressActivityIdInput;
};

export type CaseProgressActivityLitWhereInput = {
  AND: Maybe<Array<CaseProgressActivityLitWhereInput>>;
  OR: Maybe<Array<CaseProgressActivityLitWhereInput>>;
  NOT: Maybe<Array<CaseProgressActivityLitWhereInput>>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  kodeMt: Maybe<string>;
  kodeMt_not: Maybe<string>;
  kodeMt_in: Maybe<Array<string>>;
  kodeMt_not_in: Maybe<Array<string>>;
  kodeMt_lt: Maybe<string>;
  kodeMt_lte: Maybe<string>;
  kodeMt_gt: Maybe<string>;
  kodeMt_gte: Maybe<string>;
  kodeMt_contains: Maybe<string>;
  kodeMt_not_contains: Maybe<string>;
  kodeMt_starts_with: Maybe<string>;
  kodeMt_not_starts_with: Maybe<string>;
  kodeMt_ends_with: Maybe<string>;
  kodeMt_not_ends_with: Maybe<string>;
  caseProgressActivityId: Maybe<CaseProgressActivityWhereInput>;
};

export type CaseProgressActivityLitWhereUniqueInput = {
  id: Maybe<number>;
};

export type CaseProgressActivityNonlit = {
  id: number;
  caseProgressActivityId: CaseProgressActivity;
  kodeMt?: Maybe<string>;
};

export type CaseProgressActivityNonlitConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<CaseProgressActivityNonlitEdge>>;
  aggregate: AggregateCaseProgressActivityNonlit;
};

export type CaseProgressActivityNonlitCreateInput = {
  kodeMt: Maybe<string>;
  caseProgressActivityId: CaseProgressActivityCreateOneWithoutActivitiesnonlitInput;
};

export type CaseProgressActivityNonlitCreateManyWithoutCaseProgressActivityIdInput = {
  create: Maybe<Array<CaseProgressActivityNonlitCreateWithoutCaseProgressActivityIdInput>>;
  connect: Maybe<Array<CaseProgressActivityNonlitWhereUniqueInput>>;
};

export type CaseProgressActivityNonlitCreateWithoutCaseProgressActivityIdInput = {
  kodeMt: Maybe<string>;
};

export type CaseProgressActivityNonlitEdge = {
  node: CaseProgressActivityNonlit;
  cursor: string;
};

export enum CaseProgressActivityNonlitOrderByInput {
  Id_Asc = 'id_ASC',
  Id_Desc = 'id_DESC',
  KodeMt_Asc = 'kodeMt_ASC',
  KodeMt_Desc = 'kodeMt_DESC',
}

export type CaseProgressActivityNonlitPreviousValues = {
  id: number;
  kodeMt?: Maybe<string>;
};

export type CaseProgressActivityNonlitScalarWhereInput = {
  AND: Maybe<Array<CaseProgressActivityNonlitScalarWhereInput>>;
  OR: Maybe<Array<CaseProgressActivityNonlitScalarWhereInput>>;
  NOT: Maybe<Array<CaseProgressActivityNonlitScalarWhereInput>>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  kodeMt: Maybe<string>;
  kodeMt_not: Maybe<string>;
  kodeMt_in: Maybe<Array<string>>;
  kodeMt_not_in: Maybe<Array<string>>;
  kodeMt_lt: Maybe<string>;
  kodeMt_lte: Maybe<string>;
  kodeMt_gt: Maybe<string>;
  kodeMt_gte: Maybe<string>;
  kodeMt_contains: Maybe<string>;
  kodeMt_not_contains: Maybe<string>;
  kodeMt_starts_with: Maybe<string>;
  kodeMt_not_starts_with: Maybe<string>;
  kodeMt_ends_with: Maybe<string>;
  kodeMt_not_ends_with: Maybe<string>;
};

export type CaseProgressActivityNonlitSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<CaseProgressActivityNonlit>;
  updatedFields?: Maybe<Array<string>>;
  previousValues?: Maybe<CaseProgressActivityNonlitPreviousValues>;
};

export type CaseProgressActivityNonlitSubscriptionWhereInput = {
  AND: Maybe<Array<CaseProgressActivityNonlitSubscriptionWhereInput>>;
  OR: Maybe<Array<CaseProgressActivityNonlitSubscriptionWhereInput>>;
  NOT: Maybe<Array<CaseProgressActivityNonlitSubscriptionWhereInput>>;
  mutation_in: Maybe<Array<MutationType>>;
  updatedFields_contains: Maybe<string>;
  updatedFields_contains_every: Maybe<Array<string>>;
  updatedFields_contains_some: Maybe<Array<string>>;
  node: Maybe<CaseProgressActivityNonlitWhereInput>;
};

export type CaseProgressActivityNonlitUpdateInput = {
  kodeMt: Maybe<string>;
  caseProgressActivityId: Maybe<CaseProgressActivityUpdateOneRequiredWithoutActivitiesnonlitInput>;
};

export type CaseProgressActivityNonlitUpdateManyDataInput = {
  kodeMt: Maybe<string>;
};

export type CaseProgressActivityNonlitUpdateManyMutationInput = {
  kodeMt: Maybe<string>;
};

export type CaseProgressActivityNonlitUpdateManyWithoutCaseProgressActivityIdInput = {
  create: Maybe<Array<CaseProgressActivityNonlitCreateWithoutCaseProgressActivityIdInput>>;
  connect: Maybe<Array<CaseProgressActivityNonlitWhereUniqueInput>>;
  set: Maybe<Array<CaseProgressActivityNonlitWhereUniqueInput>>;
  disconnect: Maybe<Array<CaseProgressActivityNonlitWhereUniqueInput>>;
  delete: Maybe<Array<CaseProgressActivityNonlitWhereUniqueInput>>;
  update: Maybe<Array<CaseProgressActivityNonlitUpdateWithWhereUniqueWithoutCaseProgressActivityIdInput>>;
  updateMany: Maybe<Array<CaseProgressActivityNonlitUpdateManyWithWhereNestedInput>>;
  deleteMany: Maybe<Array<CaseProgressActivityNonlitScalarWhereInput>>;
  upsert: Maybe<Array<CaseProgressActivityNonlitUpsertWithWhereUniqueWithoutCaseProgressActivityIdInput>>;
};

export type CaseProgressActivityNonlitUpdateManyWithWhereNestedInput = {
  where: CaseProgressActivityNonlitScalarWhereInput;
  data: CaseProgressActivityNonlitUpdateManyDataInput;
};

export type CaseProgressActivityNonlitUpdateWithoutCaseProgressActivityIdDataInput = {
  kodeMt: Maybe<string>;
};

export type CaseProgressActivityNonlitUpdateWithWhereUniqueWithoutCaseProgressActivityIdInput = {
  where: CaseProgressActivityNonlitWhereUniqueInput;
  data: CaseProgressActivityNonlitUpdateWithoutCaseProgressActivityIdDataInput;
};

export type CaseProgressActivityNonlitUpsertWithWhereUniqueWithoutCaseProgressActivityIdInput = {
  where: CaseProgressActivityNonlitWhereUniqueInput;
  update: CaseProgressActivityNonlitUpdateWithoutCaseProgressActivityIdDataInput;
  create: CaseProgressActivityNonlitCreateWithoutCaseProgressActivityIdInput;
};

export type CaseProgressActivityNonlitWhereInput = {
  AND: Maybe<Array<CaseProgressActivityNonlitWhereInput>>;
  OR: Maybe<Array<CaseProgressActivityNonlitWhereInput>>;
  NOT: Maybe<Array<CaseProgressActivityNonlitWhereInput>>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  kodeMt: Maybe<string>;
  kodeMt_not: Maybe<string>;
  kodeMt_in: Maybe<Array<string>>;
  kodeMt_not_in: Maybe<Array<string>>;
  kodeMt_lt: Maybe<string>;
  kodeMt_lte: Maybe<string>;
  kodeMt_gt: Maybe<string>;
  kodeMt_gte: Maybe<string>;
  kodeMt_contains: Maybe<string>;
  kodeMt_not_contains: Maybe<string>;
  kodeMt_starts_with: Maybe<string>;
  kodeMt_not_starts_with: Maybe<string>;
  kodeMt_ends_with: Maybe<string>;
  kodeMt_not_ends_with: Maybe<string>;
  caseProgressActivityId: Maybe<CaseProgressActivityWhereInput>;
};

export type CaseProgressActivityNonlitWhereUniqueInput = {
  id: Maybe<number>;
};

export enum CaseProgressActivityOrderByInput {
  Id_Asc = 'id_ASC',
  Id_Desc = 'id_DESC',
  Capaian_Asc = 'capaian_ASC',
  Capaian_Desc = 'capaian_DESC',
  CreatedAt_Asc = 'createdAt_ASC',
  CreatedAt_Desc = 'createdAt_DESC',
  CreatedBy_Asc = 'createdBy_ASC',
  CreatedBy_Desc = 'createdBy_DESC',
  Hambatan_Asc = 'hambatan_ASC',
  Hambatan_Desc = 'hambatan_DESC',
  JudulAktifitas_Asc = 'judulAktifitas_ASC',
  JudulAktifitas_Desc = 'judulAktifitas_DESC',
  Position_Asc = 'position_ASC',
  Position_Desc = 'position_DESC',
  RencanaStrategi_Asc = 'rencanaStrategi_ASC',
  RencanaStrategi_Desc = 'rencanaStrategi_DESC',
  TargetAdvokasi_Asc = 'targetAdvokasi_ASC',
  TargetAdvokasi_Desc = 'targetAdvokasi_DESC',
  TglAktifitas_Asc = 'tglAktifitas_ASC',
  TglAktifitas_Desc = 'tglAktifitas_DESC',
  UpdatedAt_Asc = 'updatedAt_ASC',
  UpdatedAt_Desc = 'updatedAt_DESC',
  UpdatedBy_Asc = 'updatedBy_ASC',
  UpdatedBy_Desc = 'updatedBy_DESC',
}

export type CaseProgressActivityPreviousValues = {
  id: number;
  capaian?: Maybe<string>;
  createdAt: Date;
  createdBy?: Maybe<string>;
  hambatan?: Maybe<string>;
  judulAktifitas?: Maybe<string>;
  position?: Maybe<string>;
  rencanaStrategi?: Maybe<string>;
  targetAdvokasi?: Maybe<string>;
  tglAktifitas?: Maybe<Date>;
  updatedAt: Date;
  updatedBy?: Maybe<string>;
};

export type CaseProgressActivityScalarWhereInput = {
  AND: Maybe<Array<CaseProgressActivityScalarWhereInput>>;
  OR: Maybe<Array<CaseProgressActivityScalarWhereInput>>;
  NOT: Maybe<Array<CaseProgressActivityScalarWhereInput>>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  capaian: Maybe<string>;
  capaian_not: Maybe<string>;
  capaian_in: Maybe<Array<string>>;
  capaian_not_in: Maybe<Array<string>>;
  capaian_lt: Maybe<string>;
  capaian_lte: Maybe<string>;
  capaian_gt: Maybe<string>;
  capaian_gte: Maybe<string>;
  capaian_contains: Maybe<string>;
  capaian_not_contains: Maybe<string>;
  capaian_starts_with: Maybe<string>;
  capaian_not_starts_with: Maybe<string>;
  capaian_ends_with: Maybe<string>;
  capaian_not_ends_with: Maybe<string>;
  createdAt: Maybe<Date>;
  createdAt_not: Maybe<Date>;
  createdAt_in: Maybe<Array<Date>>;
  createdAt_not_in: Maybe<Array<Date>>;
  createdAt_lt: Maybe<Date>;
  createdAt_lte: Maybe<Date>;
  createdAt_gt: Maybe<Date>;
  createdAt_gte: Maybe<Date>;
  createdBy: Maybe<string>;
  createdBy_not: Maybe<string>;
  createdBy_in: Maybe<Array<string>>;
  createdBy_not_in: Maybe<Array<string>>;
  createdBy_lt: Maybe<string>;
  createdBy_lte: Maybe<string>;
  createdBy_gt: Maybe<string>;
  createdBy_gte: Maybe<string>;
  createdBy_contains: Maybe<string>;
  createdBy_not_contains: Maybe<string>;
  createdBy_starts_with: Maybe<string>;
  createdBy_not_starts_with: Maybe<string>;
  createdBy_ends_with: Maybe<string>;
  createdBy_not_ends_with: Maybe<string>;
  hambatan: Maybe<string>;
  hambatan_not: Maybe<string>;
  hambatan_in: Maybe<Array<string>>;
  hambatan_not_in: Maybe<Array<string>>;
  hambatan_lt: Maybe<string>;
  hambatan_lte: Maybe<string>;
  hambatan_gt: Maybe<string>;
  hambatan_gte: Maybe<string>;
  hambatan_contains: Maybe<string>;
  hambatan_not_contains: Maybe<string>;
  hambatan_starts_with: Maybe<string>;
  hambatan_not_starts_with: Maybe<string>;
  hambatan_ends_with: Maybe<string>;
  hambatan_not_ends_with: Maybe<string>;
  judulAktifitas: Maybe<string>;
  judulAktifitas_not: Maybe<string>;
  judulAktifitas_in: Maybe<Array<string>>;
  judulAktifitas_not_in: Maybe<Array<string>>;
  judulAktifitas_lt: Maybe<string>;
  judulAktifitas_lte: Maybe<string>;
  judulAktifitas_gt: Maybe<string>;
  judulAktifitas_gte: Maybe<string>;
  judulAktifitas_contains: Maybe<string>;
  judulAktifitas_not_contains: Maybe<string>;
  judulAktifitas_starts_with: Maybe<string>;
  judulAktifitas_not_starts_with: Maybe<string>;
  judulAktifitas_ends_with: Maybe<string>;
  judulAktifitas_not_ends_with: Maybe<string>;
  position: Maybe<string>;
  position_not: Maybe<string>;
  position_in: Maybe<Array<string>>;
  position_not_in: Maybe<Array<string>>;
  position_lt: Maybe<string>;
  position_lte: Maybe<string>;
  position_gt: Maybe<string>;
  position_gte: Maybe<string>;
  position_contains: Maybe<string>;
  position_not_contains: Maybe<string>;
  position_starts_with: Maybe<string>;
  position_not_starts_with: Maybe<string>;
  position_ends_with: Maybe<string>;
  position_not_ends_with: Maybe<string>;
  rencanaStrategi: Maybe<string>;
  rencanaStrategi_not: Maybe<string>;
  rencanaStrategi_in: Maybe<Array<string>>;
  rencanaStrategi_not_in: Maybe<Array<string>>;
  rencanaStrategi_lt: Maybe<string>;
  rencanaStrategi_lte: Maybe<string>;
  rencanaStrategi_gt: Maybe<string>;
  rencanaStrategi_gte: Maybe<string>;
  rencanaStrategi_contains: Maybe<string>;
  rencanaStrategi_not_contains: Maybe<string>;
  rencanaStrategi_starts_with: Maybe<string>;
  rencanaStrategi_not_starts_with: Maybe<string>;
  rencanaStrategi_ends_with: Maybe<string>;
  rencanaStrategi_not_ends_with: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  targetAdvokasi_not: Maybe<string>;
  targetAdvokasi_in: Maybe<Array<string>>;
  targetAdvokasi_not_in: Maybe<Array<string>>;
  targetAdvokasi_lt: Maybe<string>;
  targetAdvokasi_lte: Maybe<string>;
  targetAdvokasi_gt: Maybe<string>;
  targetAdvokasi_gte: Maybe<string>;
  targetAdvokasi_contains: Maybe<string>;
  targetAdvokasi_not_contains: Maybe<string>;
  targetAdvokasi_starts_with: Maybe<string>;
  targetAdvokasi_not_starts_with: Maybe<string>;
  targetAdvokasi_ends_with: Maybe<string>;
  targetAdvokasi_not_ends_with: Maybe<string>;
  tglAktifitas: Maybe<Date>;
  tglAktifitas_not: Maybe<Date>;
  tglAktifitas_in: Maybe<Array<Date>>;
  tglAktifitas_not_in: Maybe<Array<Date>>;
  tglAktifitas_lt: Maybe<Date>;
  tglAktifitas_lte: Maybe<Date>;
  tglAktifitas_gt: Maybe<Date>;
  tglAktifitas_gte: Maybe<Date>;
  updatedAt: Maybe<Date>;
  updatedAt_not: Maybe<Date>;
  updatedAt_in: Maybe<Array<Date>>;
  updatedAt_not_in: Maybe<Array<Date>>;
  updatedAt_lt: Maybe<Date>;
  updatedAt_lte: Maybe<Date>;
  updatedAt_gt: Maybe<Date>;
  updatedAt_gte: Maybe<Date>;
  updatedBy: Maybe<string>;
  updatedBy_not: Maybe<string>;
  updatedBy_in: Maybe<Array<string>>;
  updatedBy_not_in: Maybe<Array<string>>;
  updatedBy_lt: Maybe<string>;
  updatedBy_lte: Maybe<string>;
  updatedBy_gt: Maybe<string>;
  updatedBy_gte: Maybe<string>;
  updatedBy_contains: Maybe<string>;
  updatedBy_not_contains: Maybe<string>;
  updatedBy_starts_with: Maybe<string>;
  updatedBy_not_starts_with: Maybe<string>;
  updatedBy_ends_with: Maybe<string>;
  updatedBy_not_ends_with: Maybe<string>;
};

export type CaseProgressActivitySubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<CaseProgressActivity>;
  updatedFields?: Maybe<Array<string>>;
  previousValues?: Maybe<CaseProgressActivityPreviousValues>;
};

export type CaseProgressActivitySubscriptionWhereInput = {
  AND: Maybe<Array<CaseProgressActivitySubscriptionWhereInput>>;
  OR: Maybe<Array<CaseProgressActivitySubscriptionWhereInput>>;
  NOT: Maybe<Array<CaseProgressActivitySubscriptionWhereInput>>;
  mutation_in: Maybe<Array<MutationType>>;
  updatedFields_contains: Maybe<string>;
  updatedFields_contains_every: Maybe<Array<string>>;
  updatedFields_contains_some: Maybe<Array<string>>;
  node: Maybe<CaseProgressActivityWhereInput>;
};

export type CaseProgressActivityUpdateInput = {
  capaian: Maybe<string>;
  createdBy: Maybe<string>;
  hambatan: Maybe<string>;
  judulAktifitas: Maybe<string>;
  position: Maybe<string>;
  rencanaStrategi: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  tglAktifitas: Maybe<Date>;
  updatedBy: Maybe<string>;
  caseId: Maybe<CaseUpdateOneRequiredWithoutActivitiesInput>;
  activitieslit: Maybe<CaseProgressActivityLitUpdateManyWithoutCaseProgressActivityIdInput>;
  activitiesnonlit: Maybe<CaseProgressActivityNonlitUpdateManyWithoutCaseProgressActivityIdInput>;
};

export type CaseProgressActivityUpdateManyDataInput = {
  capaian: Maybe<string>;
  createdBy: Maybe<string>;
  hambatan: Maybe<string>;
  judulAktifitas: Maybe<string>;
  position: Maybe<string>;
  rencanaStrategi: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  tglAktifitas: Maybe<Date>;
  updatedBy: Maybe<string>;
};

export type CaseProgressActivityUpdateManyMutationInput = {
  capaian: Maybe<string>;
  createdBy: Maybe<string>;
  hambatan: Maybe<string>;
  judulAktifitas: Maybe<string>;
  position: Maybe<string>;
  rencanaStrategi: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  tglAktifitas: Maybe<Date>;
  updatedBy: Maybe<string>;
};

export type CaseProgressActivityUpdateManyWithoutCaseIdInput = {
  create: Maybe<Array<CaseProgressActivityCreateWithoutCaseIdInput>>;
  connect: Maybe<Array<CaseProgressActivityWhereUniqueInput>>;
  set: Maybe<Array<CaseProgressActivityWhereUniqueInput>>;
  disconnect: Maybe<Array<CaseProgressActivityWhereUniqueInput>>;
  delete: Maybe<Array<CaseProgressActivityWhereUniqueInput>>;
  update: Maybe<Array<CaseProgressActivityUpdateWithWhereUniqueWithoutCaseIdInput>>;
  updateMany: Maybe<Array<CaseProgressActivityUpdateManyWithWhereNestedInput>>;
  deleteMany: Maybe<Array<CaseProgressActivityScalarWhereInput>>;
  upsert: Maybe<Array<CaseProgressActivityUpsertWithWhereUniqueWithoutCaseIdInput>>;
};

export type CaseProgressActivityUpdateManyWithWhereNestedInput = {
  where: CaseProgressActivityScalarWhereInput;
  data: CaseProgressActivityUpdateManyDataInput;
};

export type CaseProgressActivityUpdateOneRequiredWithoutActivitieslitInput = {
  create: Maybe<CaseProgressActivityCreateWithoutActivitieslitInput>;
  connect: Maybe<CaseProgressActivityWhereUniqueInput>;
  update: Maybe<CaseProgressActivityUpdateWithoutActivitieslitDataInput>;
  upsert: Maybe<CaseProgressActivityUpsertWithoutActivitieslitInput>;
};

export type CaseProgressActivityUpdateOneRequiredWithoutActivitiesnonlitInput = {
  create: Maybe<CaseProgressActivityCreateWithoutActivitiesnonlitInput>;
  connect: Maybe<CaseProgressActivityWhereUniqueInput>;
  update: Maybe<CaseProgressActivityUpdateWithoutActivitiesnonlitDataInput>;
  upsert: Maybe<CaseProgressActivityUpsertWithoutActivitiesnonlitInput>;
};

export type CaseProgressActivityUpdateWithoutActivitieslitDataInput = {
  capaian: Maybe<string>;
  createdBy: Maybe<string>;
  hambatan: Maybe<string>;
  judulAktifitas: Maybe<string>;
  position: Maybe<string>;
  rencanaStrategi: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  tglAktifitas: Maybe<Date>;
  updatedBy: Maybe<string>;
  caseId: Maybe<CaseUpdateOneRequiredWithoutActivitiesInput>;
  activitiesnonlit: Maybe<CaseProgressActivityNonlitUpdateManyWithoutCaseProgressActivityIdInput>;
};

export type CaseProgressActivityUpdateWithoutActivitiesnonlitDataInput = {
  capaian: Maybe<string>;
  createdBy: Maybe<string>;
  hambatan: Maybe<string>;
  judulAktifitas: Maybe<string>;
  position: Maybe<string>;
  rencanaStrategi: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  tglAktifitas: Maybe<Date>;
  updatedBy: Maybe<string>;
  caseId: Maybe<CaseUpdateOneRequiredWithoutActivitiesInput>;
  activitieslit: Maybe<CaseProgressActivityLitUpdateManyWithoutCaseProgressActivityIdInput>;
};

export type CaseProgressActivityUpdateWithoutCaseIdDataInput = {
  capaian: Maybe<string>;
  createdBy: Maybe<string>;
  hambatan: Maybe<string>;
  judulAktifitas: Maybe<string>;
  position: Maybe<string>;
  rencanaStrategi: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  tglAktifitas: Maybe<Date>;
  updatedBy: Maybe<string>;
  activitieslit: Maybe<CaseProgressActivityLitUpdateManyWithoutCaseProgressActivityIdInput>;
  activitiesnonlit: Maybe<CaseProgressActivityNonlitUpdateManyWithoutCaseProgressActivityIdInput>;
};

export type CaseProgressActivityUpdateWithWhereUniqueWithoutCaseIdInput = {
  where: CaseProgressActivityWhereUniqueInput;
  data: CaseProgressActivityUpdateWithoutCaseIdDataInput;
};

export type CaseProgressActivityUpsertWithoutActivitieslitInput = {
  update: CaseProgressActivityUpdateWithoutActivitieslitDataInput;
  create: CaseProgressActivityCreateWithoutActivitieslitInput;
};

export type CaseProgressActivityUpsertWithoutActivitiesnonlitInput = {
  update: CaseProgressActivityUpdateWithoutActivitiesnonlitDataInput;
  create: CaseProgressActivityCreateWithoutActivitiesnonlitInput;
};

export type CaseProgressActivityUpsertWithWhereUniqueWithoutCaseIdInput = {
  where: CaseProgressActivityWhereUniqueInput;
  update: CaseProgressActivityUpdateWithoutCaseIdDataInput;
  create: CaseProgressActivityCreateWithoutCaseIdInput;
};

export type CaseProgressActivityWhereInput = {
  AND: Maybe<Array<CaseProgressActivityWhereInput>>;
  OR: Maybe<Array<CaseProgressActivityWhereInput>>;
  NOT: Maybe<Array<CaseProgressActivityWhereInput>>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  capaian: Maybe<string>;
  capaian_not: Maybe<string>;
  capaian_in: Maybe<Array<string>>;
  capaian_not_in: Maybe<Array<string>>;
  capaian_lt: Maybe<string>;
  capaian_lte: Maybe<string>;
  capaian_gt: Maybe<string>;
  capaian_gte: Maybe<string>;
  capaian_contains: Maybe<string>;
  capaian_not_contains: Maybe<string>;
  capaian_starts_with: Maybe<string>;
  capaian_not_starts_with: Maybe<string>;
  capaian_ends_with: Maybe<string>;
  capaian_not_ends_with: Maybe<string>;
  createdAt: Maybe<Date>;
  createdAt_not: Maybe<Date>;
  createdAt_in: Maybe<Array<Date>>;
  createdAt_not_in: Maybe<Array<Date>>;
  createdAt_lt: Maybe<Date>;
  createdAt_lte: Maybe<Date>;
  createdAt_gt: Maybe<Date>;
  createdAt_gte: Maybe<Date>;
  createdBy: Maybe<string>;
  createdBy_not: Maybe<string>;
  createdBy_in: Maybe<Array<string>>;
  createdBy_not_in: Maybe<Array<string>>;
  createdBy_lt: Maybe<string>;
  createdBy_lte: Maybe<string>;
  createdBy_gt: Maybe<string>;
  createdBy_gte: Maybe<string>;
  createdBy_contains: Maybe<string>;
  createdBy_not_contains: Maybe<string>;
  createdBy_starts_with: Maybe<string>;
  createdBy_not_starts_with: Maybe<string>;
  createdBy_ends_with: Maybe<string>;
  createdBy_not_ends_with: Maybe<string>;
  hambatan: Maybe<string>;
  hambatan_not: Maybe<string>;
  hambatan_in: Maybe<Array<string>>;
  hambatan_not_in: Maybe<Array<string>>;
  hambatan_lt: Maybe<string>;
  hambatan_lte: Maybe<string>;
  hambatan_gt: Maybe<string>;
  hambatan_gte: Maybe<string>;
  hambatan_contains: Maybe<string>;
  hambatan_not_contains: Maybe<string>;
  hambatan_starts_with: Maybe<string>;
  hambatan_not_starts_with: Maybe<string>;
  hambatan_ends_with: Maybe<string>;
  hambatan_not_ends_with: Maybe<string>;
  judulAktifitas: Maybe<string>;
  judulAktifitas_not: Maybe<string>;
  judulAktifitas_in: Maybe<Array<string>>;
  judulAktifitas_not_in: Maybe<Array<string>>;
  judulAktifitas_lt: Maybe<string>;
  judulAktifitas_lte: Maybe<string>;
  judulAktifitas_gt: Maybe<string>;
  judulAktifitas_gte: Maybe<string>;
  judulAktifitas_contains: Maybe<string>;
  judulAktifitas_not_contains: Maybe<string>;
  judulAktifitas_starts_with: Maybe<string>;
  judulAktifitas_not_starts_with: Maybe<string>;
  judulAktifitas_ends_with: Maybe<string>;
  judulAktifitas_not_ends_with: Maybe<string>;
  position: Maybe<string>;
  position_not: Maybe<string>;
  position_in: Maybe<Array<string>>;
  position_not_in: Maybe<Array<string>>;
  position_lt: Maybe<string>;
  position_lte: Maybe<string>;
  position_gt: Maybe<string>;
  position_gte: Maybe<string>;
  position_contains: Maybe<string>;
  position_not_contains: Maybe<string>;
  position_starts_with: Maybe<string>;
  position_not_starts_with: Maybe<string>;
  position_ends_with: Maybe<string>;
  position_not_ends_with: Maybe<string>;
  rencanaStrategi: Maybe<string>;
  rencanaStrategi_not: Maybe<string>;
  rencanaStrategi_in: Maybe<Array<string>>;
  rencanaStrategi_not_in: Maybe<Array<string>>;
  rencanaStrategi_lt: Maybe<string>;
  rencanaStrategi_lte: Maybe<string>;
  rencanaStrategi_gt: Maybe<string>;
  rencanaStrategi_gte: Maybe<string>;
  rencanaStrategi_contains: Maybe<string>;
  rencanaStrategi_not_contains: Maybe<string>;
  rencanaStrategi_starts_with: Maybe<string>;
  rencanaStrategi_not_starts_with: Maybe<string>;
  rencanaStrategi_ends_with: Maybe<string>;
  rencanaStrategi_not_ends_with: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  targetAdvokasi_not: Maybe<string>;
  targetAdvokasi_in: Maybe<Array<string>>;
  targetAdvokasi_not_in: Maybe<Array<string>>;
  targetAdvokasi_lt: Maybe<string>;
  targetAdvokasi_lte: Maybe<string>;
  targetAdvokasi_gt: Maybe<string>;
  targetAdvokasi_gte: Maybe<string>;
  targetAdvokasi_contains: Maybe<string>;
  targetAdvokasi_not_contains: Maybe<string>;
  targetAdvokasi_starts_with: Maybe<string>;
  targetAdvokasi_not_starts_with: Maybe<string>;
  targetAdvokasi_ends_with: Maybe<string>;
  targetAdvokasi_not_ends_with: Maybe<string>;
  tglAktifitas: Maybe<Date>;
  tglAktifitas_not: Maybe<Date>;
  tglAktifitas_in: Maybe<Array<Date>>;
  tglAktifitas_not_in: Maybe<Array<Date>>;
  tglAktifitas_lt: Maybe<Date>;
  tglAktifitas_lte: Maybe<Date>;
  tglAktifitas_gt: Maybe<Date>;
  tglAktifitas_gte: Maybe<Date>;
  updatedAt: Maybe<Date>;
  updatedAt_not: Maybe<Date>;
  updatedAt_in: Maybe<Array<Date>>;
  updatedAt_not_in: Maybe<Array<Date>>;
  updatedAt_lt: Maybe<Date>;
  updatedAt_lte: Maybe<Date>;
  updatedAt_gt: Maybe<Date>;
  updatedAt_gte: Maybe<Date>;
  updatedBy: Maybe<string>;
  updatedBy_not: Maybe<string>;
  updatedBy_in: Maybe<Array<string>>;
  updatedBy_not_in: Maybe<Array<string>>;
  updatedBy_lt: Maybe<string>;
  updatedBy_lte: Maybe<string>;
  updatedBy_gt: Maybe<string>;
  updatedBy_gte: Maybe<string>;
  updatedBy_contains: Maybe<string>;
  updatedBy_not_contains: Maybe<string>;
  updatedBy_starts_with: Maybe<string>;
  updatedBy_not_starts_with: Maybe<string>;
  updatedBy_ends_with: Maybe<string>;
  updatedBy_not_ends_with: Maybe<string>;
  caseId: Maybe<CaseWhereInput>;
  activitieslit_every: Maybe<CaseProgressActivityLitWhereInput>;
  activitieslit_some: Maybe<CaseProgressActivityLitWhereInput>;
  activitieslit_none: Maybe<CaseProgressActivityLitWhereInput>;
  activitiesnonlit_every: Maybe<CaseProgressActivityNonlitWhereInput>;
  activitiesnonlit_some: Maybe<CaseProgressActivityNonlitWhereInput>;
  activitiesnonlit_none: Maybe<CaseProgressActivityNonlitWhereInput>;
};

export type CaseProgressActivityWhereUniqueInput = {
  id: Maybe<number>;
};

export type CaseProgressConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<CaseProgressEdge>>;
  aggregate: AggregateCaseProgress;
};

export type CaseProgressCreateInput = {
  catatan: Maybe<string>;
  createdBy: Maybe<string>;
  jenisPeradilan: Maybe<string>;
  updatedBy: Maybe<string>;
  caseId: CaseCreateOneWithoutProgressesInput;
};

export type CaseProgressCreateManyWithoutCaseIdInput = {
  create: Maybe<Array<CaseProgressCreateWithoutCaseIdInput>>;
  connect: Maybe<Array<CaseProgressWhereUniqueInput>>;
};

export type CaseProgressCreateWithoutCaseIdInput = {
  catatan: Maybe<string>;
  createdBy: Maybe<string>;
  jenisPeradilan: Maybe<string>;
  updatedBy: Maybe<string>;
};

export type CaseProgressEdge = {
  node: CaseProgress;
  cursor: string;
};

export enum CaseProgressOrderByInput {
  Id_Asc = 'id_ASC',
  Id_Desc = 'id_DESC',
  Catatan_Asc = 'catatan_ASC',
  Catatan_Desc = 'catatan_DESC',
  CreatedAt_Asc = 'createdAt_ASC',
  CreatedAt_Desc = 'createdAt_DESC',
  CreatedBy_Asc = 'createdBy_ASC',
  CreatedBy_Desc = 'createdBy_DESC',
  JenisPeradilan_Asc = 'jenisPeradilan_ASC',
  JenisPeradilan_Desc = 'jenisPeradilan_DESC',
  UpdatedAt_Asc = 'updatedAt_ASC',
  UpdatedAt_Desc = 'updatedAt_DESC',
  UpdatedBy_Asc = 'updatedBy_ASC',
  UpdatedBy_Desc = 'updatedBy_DESC',
}

export type CaseProgressPreviousValues = {
  id: number;
  catatan?: Maybe<string>;
  createdAt: Date;
  createdBy?: Maybe<string>;
  jenisPeradilan?: Maybe<string>;
  updatedAt: Date;
  updatedBy?: Maybe<string>;
};

export type CaseProgressScalarWhereInput = {
  AND: Maybe<Array<CaseProgressScalarWhereInput>>;
  OR: Maybe<Array<CaseProgressScalarWhereInput>>;
  NOT: Maybe<Array<CaseProgressScalarWhereInput>>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  catatan: Maybe<string>;
  catatan_not: Maybe<string>;
  catatan_in: Maybe<Array<string>>;
  catatan_not_in: Maybe<Array<string>>;
  catatan_lt: Maybe<string>;
  catatan_lte: Maybe<string>;
  catatan_gt: Maybe<string>;
  catatan_gte: Maybe<string>;
  catatan_contains: Maybe<string>;
  catatan_not_contains: Maybe<string>;
  catatan_starts_with: Maybe<string>;
  catatan_not_starts_with: Maybe<string>;
  catatan_ends_with: Maybe<string>;
  catatan_not_ends_with: Maybe<string>;
  createdAt: Maybe<Date>;
  createdAt_not: Maybe<Date>;
  createdAt_in: Maybe<Array<Date>>;
  createdAt_not_in: Maybe<Array<Date>>;
  createdAt_lt: Maybe<Date>;
  createdAt_lte: Maybe<Date>;
  createdAt_gt: Maybe<Date>;
  createdAt_gte: Maybe<Date>;
  createdBy: Maybe<string>;
  createdBy_not: Maybe<string>;
  createdBy_in: Maybe<Array<string>>;
  createdBy_not_in: Maybe<Array<string>>;
  createdBy_lt: Maybe<string>;
  createdBy_lte: Maybe<string>;
  createdBy_gt: Maybe<string>;
  createdBy_gte: Maybe<string>;
  createdBy_contains: Maybe<string>;
  createdBy_not_contains: Maybe<string>;
  createdBy_starts_with: Maybe<string>;
  createdBy_not_starts_with: Maybe<string>;
  createdBy_ends_with: Maybe<string>;
  createdBy_not_ends_with: Maybe<string>;
  jenisPeradilan: Maybe<string>;
  jenisPeradilan_not: Maybe<string>;
  jenisPeradilan_in: Maybe<Array<string>>;
  jenisPeradilan_not_in: Maybe<Array<string>>;
  jenisPeradilan_lt: Maybe<string>;
  jenisPeradilan_lte: Maybe<string>;
  jenisPeradilan_gt: Maybe<string>;
  jenisPeradilan_gte: Maybe<string>;
  jenisPeradilan_contains: Maybe<string>;
  jenisPeradilan_not_contains: Maybe<string>;
  jenisPeradilan_starts_with: Maybe<string>;
  jenisPeradilan_not_starts_with: Maybe<string>;
  jenisPeradilan_ends_with: Maybe<string>;
  jenisPeradilan_not_ends_with: Maybe<string>;
  updatedAt: Maybe<Date>;
  updatedAt_not: Maybe<Date>;
  updatedAt_in: Maybe<Array<Date>>;
  updatedAt_not_in: Maybe<Array<Date>>;
  updatedAt_lt: Maybe<Date>;
  updatedAt_lte: Maybe<Date>;
  updatedAt_gt: Maybe<Date>;
  updatedAt_gte: Maybe<Date>;
  updatedBy: Maybe<string>;
  updatedBy_not: Maybe<string>;
  updatedBy_in: Maybe<Array<string>>;
  updatedBy_not_in: Maybe<Array<string>>;
  updatedBy_lt: Maybe<string>;
  updatedBy_lte: Maybe<string>;
  updatedBy_gt: Maybe<string>;
  updatedBy_gte: Maybe<string>;
  updatedBy_contains: Maybe<string>;
  updatedBy_not_contains: Maybe<string>;
  updatedBy_starts_with: Maybe<string>;
  updatedBy_not_starts_with: Maybe<string>;
  updatedBy_ends_with: Maybe<string>;
  updatedBy_not_ends_with: Maybe<string>;
};

export type CaseProgressSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<CaseProgress>;
  updatedFields?: Maybe<Array<string>>;
  previousValues?: Maybe<CaseProgressPreviousValues>;
};

export type CaseProgressSubscriptionWhereInput = {
  AND: Maybe<Array<CaseProgressSubscriptionWhereInput>>;
  OR: Maybe<Array<CaseProgressSubscriptionWhereInput>>;
  NOT: Maybe<Array<CaseProgressSubscriptionWhereInput>>;
  mutation_in: Maybe<Array<MutationType>>;
  updatedFields_contains: Maybe<string>;
  updatedFields_contains_every: Maybe<Array<string>>;
  updatedFields_contains_some: Maybe<Array<string>>;
  node: Maybe<CaseProgressWhereInput>;
};

export type CaseProgressUpdateInput = {
  catatan: Maybe<string>;
  createdBy: Maybe<string>;
  jenisPeradilan: Maybe<string>;
  updatedBy: Maybe<string>;
  caseId: Maybe<CaseUpdateOneRequiredWithoutProgressesInput>;
};

export type CaseProgressUpdateManyDataInput = {
  catatan: Maybe<string>;
  createdBy: Maybe<string>;
  jenisPeradilan: Maybe<string>;
  updatedBy: Maybe<string>;
};

export type CaseProgressUpdateManyMutationInput = {
  catatan: Maybe<string>;
  createdBy: Maybe<string>;
  jenisPeradilan: Maybe<string>;
  updatedBy: Maybe<string>;
};

export type CaseProgressUpdateManyWithoutCaseIdInput = {
  create: Maybe<Array<CaseProgressCreateWithoutCaseIdInput>>;
  connect: Maybe<Array<CaseProgressWhereUniqueInput>>;
  set: Maybe<Array<CaseProgressWhereUniqueInput>>;
  disconnect: Maybe<Array<CaseProgressWhereUniqueInput>>;
  delete: Maybe<Array<CaseProgressWhereUniqueInput>>;
  update: Maybe<Array<CaseProgressUpdateWithWhereUniqueWithoutCaseIdInput>>;
  updateMany: Maybe<Array<CaseProgressUpdateManyWithWhereNestedInput>>;
  deleteMany: Maybe<Array<CaseProgressScalarWhereInput>>;
  upsert: Maybe<Array<CaseProgressUpsertWithWhereUniqueWithoutCaseIdInput>>;
};

export type CaseProgressUpdateManyWithWhereNestedInput = {
  where: CaseProgressScalarWhereInput;
  data: CaseProgressUpdateManyDataInput;
};

export type CaseProgressUpdateWithoutCaseIdDataInput = {
  catatan: Maybe<string>;
  createdBy: Maybe<string>;
  jenisPeradilan: Maybe<string>;
  updatedBy: Maybe<string>;
};

export type CaseProgressUpdateWithWhereUniqueWithoutCaseIdInput = {
  where: CaseProgressWhereUniqueInput;
  data: CaseProgressUpdateWithoutCaseIdDataInput;
};

export type CaseProgressUpsertWithWhereUniqueWithoutCaseIdInput = {
  where: CaseProgressWhereUniqueInput;
  update: CaseProgressUpdateWithoutCaseIdDataInput;
  create: CaseProgressCreateWithoutCaseIdInput;
};

export type CaseProgressWhereInput = {
  AND: Maybe<Array<CaseProgressWhereInput>>;
  OR: Maybe<Array<CaseProgressWhereInput>>;
  NOT: Maybe<Array<CaseProgressWhereInput>>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  catatan: Maybe<string>;
  catatan_not: Maybe<string>;
  catatan_in: Maybe<Array<string>>;
  catatan_not_in: Maybe<Array<string>>;
  catatan_lt: Maybe<string>;
  catatan_lte: Maybe<string>;
  catatan_gt: Maybe<string>;
  catatan_gte: Maybe<string>;
  catatan_contains: Maybe<string>;
  catatan_not_contains: Maybe<string>;
  catatan_starts_with: Maybe<string>;
  catatan_not_starts_with: Maybe<string>;
  catatan_ends_with: Maybe<string>;
  catatan_not_ends_with: Maybe<string>;
  createdAt: Maybe<Date>;
  createdAt_not: Maybe<Date>;
  createdAt_in: Maybe<Array<Date>>;
  createdAt_not_in: Maybe<Array<Date>>;
  createdAt_lt: Maybe<Date>;
  createdAt_lte: Maybe<Date>;
  createdAt_gt: Maybe<Date>;
  createdAt_gte: Maybe<Date>;
  createdBy: Maybe<string>;
  createdBy_not: Maybe<string>;
  createdBy_in: Maybe<Array<string>>;
  createdBy_not_in: Maybe<Array<string>>;
  createdBy_lt: Maybe<string>;
  createdBy_lte: Maybe<string>;
  createdBy_gt: Maybe<string>;
  createdBy_gte: Maybe<string>;
  createdBy_contains: Maybe<string>;
  createdBy_not_contains: Maybe<string>;
  createdBy_starts_with: Maybe<string>;
  createdBy_not_starts_with: Maybe<string>;
  createdBy_ends_with: Maybe<string>;
  createdBy_not_ends_with: Maybe<string>;
  jenisPeradilan: Maybe<string>;
  jenisPeradilan_not: Maybe<string>;
  jenisPeradilan_in: Maybe<Array<string>>;
  jenisPeradilan_not_in: Maybe<Array<string>>;
  jenisPeradilan_lt: Maybe<string>;
  jenisPeradilan_lte: Maybe<string>;
  jenisPeradilan_gt: Maybe<string>;
  jenisPeradilan_gte: Maybe<string>;
  jenisPeradilan_contains: Maybe<string>;
  jenisPeradilan_not_contains: Maybe<string>;
  jenisPeradilan_starts_with: Maybe<string>;
  jenisPeradilan_not_starts_with: Maybe<string>;
  jenisPeradilan_ends_with: Maybe<string>;
  jenisPeradilan_not_ends_with: Maybe<string>;
  updatedAt: Maybe<Date>;
  updatedAt_not: Maybe<Date>;
  updatedAt_in: Maybe<Array<Date>>;
  updatedAt_not_in: Maybe<Array<Date>>;
  updatedAt_lt: Maybe<Date>;
  updatedAt_lte: Maybe<Date>;
  updatedAt_gt: Maybe<Date>;
  updatedAt_gte: Maybe<Date>;
  updatedBy: Maybe<string>;
  updatedBy_not: Maybe<string>;
  updatedBy_in: Maybe<Array<string>>;
  updatedBy_not_in: Maybe<Array<string>>;
  updatedBy_lt: Maybe<string>;
  updatedBy_lte: Maybe<string>;
  updatedBy_gt: Maybe<string>;
  updatedBy_gte: Maybe<string>;
  updatedBy_contains: Maybe<string>;
  updatedBy_not_contains: Maybe<string>;
  updatedBy_starts_with: Maybe<string>;
  updatedBy_not_starts_with: Maybe<string>;
  updatedBy_ends_with: Maybe<string>;
  updatedBy_not_ends_with: Maybe<string>;
  caseId: Maybe<CaseWhereInput>;
};

export type CaseProgressWhereUniqueInput = {
  id: Maybe<number>;
};

export type CaseSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<Case>;
  updatedFields?: Maybe<Array<string>>;
  previousValues?: Maybe<CasePreviousValues>;
};

export type CaseSubscriptionWhereInput = {
  AND: Maybe<Array<CaseSubscriptionWhereInput>>;
  OR: Maybe<Array<CaseSubscriptionWhereInput>>;
  NOT: Maybe<Array<CaseSubscriptionWhereInput>>;
  mutation_in: Maybe<Array<MutationType>>;
  updatedFields_contains: Maybe<string>;
  updatedFields_contains_every: Maybe<Array<string>>;
  updatedFields_contains_some: Maybe<Array<string>>;
  node: Maybe<CaseWhereInput>;
};

export type CaseTransferReferral = {
  id: number;
  caseId: Case;
  catatan?: Maybe<string>;
  createdAt: Date;
  createdBy?: Maybe<string>;
  document?: Maybe<string>;
  jenisTransferReferral?: Maybe<string>;
  networkId?: Maybe<number>;
  tglTransferReferral?: Maybe<Date>;
  updatedAt: Date;
  updatedBy?: Maybe<string>;
};

export type CaseTransferReferralConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<CaseTransferReferralEdge>>;
  aggregate: AggregateCaseTransferReferral;
};

export type CaseTransferReferralCreateInput = {
  catatan: Maybe<string>;
  createdBy: Maybe<string>;
  document: Maybe<string>;
  jenisTransferReferral: Maybe<string>;
  networkId: Maybe<number>;
  tglTransferReferral: Maybe<Date>;
  updatedBy: Maybe<string>;
  caseId: CaseCreateOneWithoutTransferreferralsInput;
};

export type CaseTransferReferralCreateManyWithoutCaseIdInput = {
  create: Maybe<Array<CaseTransferReferralCreateWithoutCaseIdInput>>;
  connect: Maybe<Array<CaseTransferReferralWhereUniqueInput>>;
};

export type CaseTransferReferralCreateWithoutCaseIdInput = {
  catatan: Maybe<string>;
  createdBy: Maybe<string>;
  document: Maybe<string>;
  jenisTransferReferral: Maybe<string>;
  networkId: Maybe<number>;
  tglTransferReferral: Maybe<Date>;
  updatedBy: Maybe<string>;
};

export type CaseTransferReferralEdge = {
  node: CaseTransferReferral;
  cursor: string;
};

export enum CaseTransferReferralOrderByInput {
  Id_Asc = 'id_ASC',
  Id_Desc = 'id_DESC',
  Catatan_Asc = 'catatan_ASC',
  Catatan_Desc = 'catatan_DESC',
  CreatedAt_Asc = 'createdAt_ASC',
  CreatedAt_Desc = 'createdAt_DESC',
  CreatedBy_Asc = 'createdBy_ASC',
  CreatedBy_Desc = 'createdBy_DESC',
  Document_Asc = 'document_ASC',
  Document_Desc = 'document_DESC',
  JenisTransferReferral_Asc = 'jenisTransferReferral_ASC',
  JenisTransferReferral_Desc = 'jenisTransferReferral_DESC',
  NetworkId_Asc = 'networkId_ASC',
  NetworkId_Desc = 'networkId_DESC',
  TglTransferReferral_Asc = 'tglTransferReferral_ASC',
  TglTransferReferral_Desc = 'tglTransferReferral_DESC',
  UpdatedAt_Asc = 'updatedAt_ASC',
  UpdatedAt_Desc = 'updatedAt_DESC',
  UpdatedBy_Asc = 'updatedBy_ASC',
  UpdatedBy_Desc = 'updatedBy_DESC',
}

export type CaseTransferReferralPreviousValues = {
  id: number;
  catatan?: Maybe<string>;
  createdAt: Date;
  createdBy?: Maybe<string>;
  document?: Maybe<string>;
  jenisTransferReferral?: Maybe<string>;
  networkId?: Maybe<number>;
  tglTransferReferral?: Maybe<Date>;
  updatedAt: Date;
  updatedBy?: Maybe<string>;
};

export type CaseTransferReferralScalarWhereInput = {
  AND: Maybe<Array<CaseTransferReferralScalarWhereInput>>;
  OR: Maybe<Array<CaseTransferReferralScalarWhereInput>>;
  NOT: Maybe<Array<CaseTransferReferralScalarWhereInput>>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  catatan: Maybe<string>;
  catatan_not: Maybe<string>;
  catatan_in: Maybe<Array<string>>;
  catatan_not_in: Maybe<Array<string>>;
  catatan_lt: Maybe<string>;
  catatan_lte: Maybe<string>;
  catatan_gt: Maybe<string>;
  catatan_gte: Maybe<string>;
  catatan_contains: Maybe<string>;
  catatan_not_contains: Maybe<string>;
  catatan_starts_with: Maybe<string>;
  catatan_not_starts_with: Maybe<string>;
  catatan_ends_with: Maybe<string>;
  catatan_not_ends_with: Maybe<string>;
  createdAt: Maybe<Date>;
  createdAt_not: Maybe<Date>;
  createdAt_in: Maybe<Array<Date>>;
  createdAt_not_in: Maybe<Array<Date>>;
  createdAt_lt: Maybe<Date>;
  createdAt_lte: Maybe<Date>;
  createdAt_gt: Maybe<Date>;
  createdAt_gte: Maybe<Date>;
  createdBy: Maybe<string>;
  createdBy_not: Maybe<string>;
  createdBy_in: Maybe<Array<string>>;
  createdBy_not_in: Maybe<Array<string>>;
  createdBy_lt: Maybe<string>;
  createdBy_lte: Maybe<string>;
  createdBy_gt: Maybe<string>;
  createdBy_gte: Maybe<string>;
  createdBy_contains: Maybe<string>;
  createdBy_not_contains: Maybe<string>;
  createdBy_starts_with: Maybe<string>;
  createdBy_not_starts_with: Maybe<string>;
  createdBy_ends_with: Maybe<string>;
  createdBy_not_ends_with: Maybe<string>;
  document: Maybe<string>;
  document_not: Maybe<string>;
  document_in: Maybe<Array<string>>;
  document_not_in: Maybe<Array<string>>;
  document_lt: Maybe<string>;
  document_lte: Maybe<string>;
  document_gt: Maybe<string>;
  document_gte: Maybe<string>;
  document_contains: Maybe<string>;
  document_not_contains: Maybe<string>;
  document_starts_with: Maybe<string>;
  document_not_starts_with: Maybe<string>;
  document_ends_with: Maybe<string>;
  document_not_ends_with: Maybe<string>;
  jenisTransferReferral: Maybe<string>;
  jenisTransferReferral_not: Maybe<string>;
  jenisTransferReferral_in: Maybe<Array<string>>;
  jenisTransferReferral_not_in: Maybe<Array<string>>;
  jenisTransferReferral_lt: Maybe<string>;
  jenisTransferReferral_lte: Maybe<string>;
  jenisTransferReferral_gt: Maybe<string>;
  jenisTransferReferral_gte: Maybe<string>;
  jenisTransferReferral_contains: Maybe<string>;
  jenisTransferReferral_not_contains: Maybe<string>;
  jenisTransferReferral_starts_with: Maybe<string>;
  jenisTransferReferral_not_starts_with: Maybe<string>;
  jenisTransferReferral_ends_with: Maybe<string>;
  jenisTransferReferral_not_ends_with: Maybe<string>;
  networkId: Maybe<number>;
  networkId_not: Maybe<number>;
  networkId_in: Maybe<Array<number>>;
  networkId_not_in: Maybe<Array<number>>;
  networkId_lt: Maybe<number>;
  networkId_lte: Maybe<number>;
  networkId_gt: Maybe<number>;
  networkId_gte: Maybe<number>;
  tglTransferReferral: Maybe<Date>;
  tglTransferReferral_not: Maybe<Date>;
  tglTransferReferral_in: Maybe<Array<Date>>;
  tglTransferReferral_not_in: Maybe<Array<Date>>;
  tglTransferReferral_lt: Maybe<Date>;
  tglTransferReferral_lte: Maybe<Date>;
  tglTransferReferral_gt: Maybe<Date>;
  tglTransferReferral_gte: Maybe<Date>;
  updatedAt: Maybe<Date>;
  updatedAt_not: Maybe<Date>;
  updatedAt_in: Maybe<Array<Date>>;
  updatedAt_not_in: Maybe<Array<Date>>;
  updatedAt_lt: Maybe<Date>;
  updatedAt_lte: Maybe<Date>;
  updatedAt_gt: Maybe<Date>;
  updatedAt_gte: Maybe<Date>;
  updatedBy: Maybe<string>;
  updatedBy_not: Maybe<string>;
  updatedBy_in: Maybe<Array<string>>;
  updatedBy_not_in: Maybe<Array<string>>;
  updatedBy_lt: Maybe<string>;
  updatedBy_lte: Maybe<string>;
  updatedBy_gt: Maybe<string>;
  updatedBy_gte: Maybe<string>;
  updatedBy_contains: Maybe<string>;
  updatedBy_not_contains: Maybe<string>;
  updatedBy_starts_with: Maybe<string>;
  updatedBy_not_starts_with: Maybe<string>;
  updatedBy_ends_with: Maybe<string>;
  updatedBy_not_ends_with: Maybe<string>;
};

export type CaseTransferReferralSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<CaseTransferReferral>;
  updatedFields?: Maybe<Array<string>>;
  previousValues?: Maybe<CaseTransferReferralPreviousValues>;
};

export type CaseTransferReferralSubscriptionWhereInput = {
  AND: Maybe<Array<CaseTransferReferralSubscriptionWhereInput>>;
  OR: Maybe<Array<CaseTransferReferralSubscriptionWhereInput>>;
  NOT: Maybe<Array<CaseTransferReferralSubscriptionWhereInput>>;
  mutation_in: Maybe<Array<MutationType>>;
  updatedFields_contains: Maybe<string>;
  updatedFields_contains_every: Maybe<Array<string>>;
  updatedFields_contains_some: Maybe<Array<string>>;
  node: Maybe<CaseTransferReferralWhereInput>;
};

export type CaseTransferReferralUpdateInput = {
  catatan: Maybe<string>;
  createdBy: Maybe<string>;
  document: Maybe<string>;
  jenisTransferReferral: Maybe<string>;
  networkId: Maybe<number>;
  tglTransferReferral: Maybe<Date>;
  updatedBy: Maybe<string>;
  caseId: Maybe<CaseUpdateOneRequiredWithoutTransferreferralsInput>;
};

export type CaseTransferReferralUpdateManyDataInput = {
  catatan: Maybe<string>;
  createdBy: Maybe<string>;
  document: Maybe<string>;
  jenisTransferReferral: Maybe<string>;
  networkId: Maybe<number>;
  tglTransferReferral: Maybe<Date>;
  updatedBy: Maybe<string>;
};

export type CaseTransferReferralUpdateManyMutationInput = {
  catatan: Maybe<string>;
  createdBy: Maybe<string>;
  document: Maybe<string>;
  jenisTransferReferral: Maybe<string>;
  networkId: Maybe<number>;
  tglTransferReferral: Maybe<Date>;
  updatedBy: Maybe<string>;
};

export type CaseTransferReferralUpdateManyWithoutCaseIdInput = {
  create: Maybe<Array<CaseTransferReferralCreateWithoutCaseIdInput>>;
  connect: Maybe<Array<CaseTransferReferralWhereUniqueInput>>;
  set: Maybe<Array<CaseTransferReferralWhereUniqueInput>>;
  disconnect: Maybe<Array<CaseTransferReferralWhereUniqueInput>>;
  delete: Maybe<Array<CaseTransferReferralWhereUniqueInput>>;
  update: Maybe<Array<CaseTransferReferralUpdateWithWhereUniqueWithoutCaseIdInput>>;
  updateMany: Maybe<Array<CaseTransferReferralUpdateManyWithWhereNestedInput>>;
  deleteMany: Maybe<Array<CaseTransferReferralScalarWhereInput>>;
  upsert: Maybe<Array<CaseTransferReferralUpsertWithWhereUniqueWithoutCaseIdInput>>;
};

export type CaseTransferReferralUpdateManyWithWhereNestedInput = {
  where: CaseTransferReferralScalarWhereInput;
  data: CaseTransferReferralUpdateManyDataInput;
};

export type CaseTransferReferralUpdateWithoutCaseIdDataInput = {
  catatan: Maybe<string>;
  createdBy: Maybe<string>;
  document: Maybe<string>;
  jenisTransferReferral: Maybe<string>;
  networkId: Maybe<number>;
  tglTransferReferral: Maybe<Date>;
  updatedBy: Maybe<string>;
};

export type CaseTransferReferralUpdateWithWhereUniqueWithoutCaseIdInput = {
  where: CaseTransferReferralWhereUniqueInput;
  data: CaseTransferReferralUpdateWithoutCaseIdDataInput;
};

export type CaseTransferReferralUpsertWithWhereUniqueWithoutCaseIdInput = {
  where: CaseTransferReferralWhereUniqueInput;
  update: CaseTransferReferralUpdateWithoutCaseIdDataInput;
  create: CaseTransferReferralCreateWithoutCaseIdInput;
};

export type CaseTransferReferralWhereInput = {
  AND: Maybe<Array<CaseTransferReferralWhereInput>>;
  OR: Maybe<Array<CaseTransferReferralWhereInput>>;
  NOT: Maybe<Array<CaseTransferReferralWhereInput>>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  catatan: Maybe<string>;
  catatan_not: Maybe<string>;
  catatan_in: Maybe<Array<string>>;
  catatan_not_in: Maybe<Array<string>>;
  catatan_lt: Maybe<string>;
  catatan_lte: Maybe<string>;
  catatan_gt: Maybe<string>;
  catatan_gte: Maybe<string>;
  catatan_contains: Maybe<string>;
  catatan_not_contains: Maybe<string>;
  catatan_starts_with: Maybe<string>;
  catatan_not_starts_with: Maybe<string>;
  catatan_ends_with: Maybe<string>;
  catatan_not_ends_with: Maybe<string>;
  createdAt: Maybe<Date>;
  createdAt_not: Maybe<Date>;
  createdAt_in: Maybe<Array<Date>>;
  createdAt_not_in: Maybe<Array<Date>>;
  createdAt_lt: Maybe<Date>;
  createdAt_lte: Maybe<Date>;
  createdAt_gt: Maybe<Date>;
  createdAt_gte: Maybe<Date>;
  createdBy: Maybe<string>;
  createdBy_not: Maybe<string>;
  createdBy_in: Maybe<Array<string>>;
  createdBy_not_in: Maybe<Array<string>>;
  createdBy_lt: Maybe<string>;
  createdBy_lte: Maybe<string>;
  createdBy_gt: Maybe<string>;
  createdBy_gte: Maybe<string>;
  createdBy_contains: Maybe<string>;
  createdBy_not_contains: Maybe<string>;
  createdBy_starts_with: Maybe<string>;
  createdBy_not_starts_with: Maybe<string>;
  createdBy_ends_with: Maybe<string>;
  createdBy_not_ends_with: Maybe<string>;
  document: Maybe<string>;
  document_not: Maybe<string>;
  document_in: Maybe<Array<string>>;
  document_not_in: Maybe<Array<string>>;
  document_lt: Maybe<string>;
  document_lte: Maybe<string>;
  document_gt: Maybe<string>;
  document_gte: Maybe<string>;
  document_contains: Maybe<string>;
  document_not_contains: Maybe<string>;
  document_starts_with: Maybe<string>;
  document_not_starts_with: Maybe<string>;
  document_ends_with: Maybe<string>;
  document_not_ends_with: Maybe<string>;
  jenisTransferReferral: Maybe<string>;
  jenisTransferReferral_not: Maybe<string>;
  jenisTransferReferral_in: Maybe<Array<string>>;
  jenisTransferReferral_not_in: Maybe<Array<string>>;
  jenisTransferReferral_lt: Maybe<string>;
  jenisTransferReferral_lte: Maybe<string>;
  jenisTransferReferral_gt: Maybe<string>;
  jenisTransferReferral_gte: Maybe<string>;
  jenisTransferReferral_contains: Maybe<string>;
  jenisTransferReferral_not_contains: Maybe<string>;
  jenisTransferReferral_starts_with: Maybe<string>;
  jenisTransferReferral_not_starts_with: Maybe<string>;
  jenisTransferReferral_ends_with: Maybe<string>;
  jenisTransferReferral_not_ends_with: Maybe<string>;
  networkId: Maybe<number>;
  networkId_not: Maybe<number>;
  networkId_in: Maybe<Array<number>>;
  networkId_not_in: Maybe<Array<number>>;
  networkId_lt: Maybe<number>;
  networkId_lte: Maybe<number>;
  networkId_gt: Maybe<number>;
  networkId_gte: Maybe<number>;
  tglTransferReferral: Maybe<Date>;
  tglTransferReferral_not: Maybe<Date>;
  tglTransferReferral_in: Maybe<Array<Date>>;
  tglTransferReferral_not_in: Maybe<Array<Date>>;
  tglTransferReferral_lt: Maybe<Date>;
  tglTransferReferral_lte: Maybe<Date>;
  tglTransferReferral_gt: Maybe<Date>;
  tglTransferReferral_gte: Maybe<Date>;
  updatedAt: Maybe<Date>;
  updatedAt_not: Maybe<Date>;
  updatedAt_in: Maybe<Array<Date>>;
  updatedAt_not_in: Maybe<Array<Date>>;
  updatedAt_lt: Maybe<Date>;
  updatedAt_lte: Maybe<Date>;
  updatedAt_gt: Maybe<Date>;
  updatedAt_gte: Maybe<Date>;
  updatedBy: Maybe<string>;
  updatedBy_not: Maybe<string>;
  updatedBy_in: Maybe<Array<string>>;
  updatedBy_not_in: Maybe<Array<string>>;
  updatedBy_lt: Maybe<string>;
  updatedBy_lte: Maybe<string>;
  updatedBy_gt: Maybe<string>;
  updatedBy_gte: Maybe<string>;
  updatedBy_contains: Maybe<string>;
  updatedBy_not_contains: Maybe<string>;
  updatedBy_starts_with: Maybe<string>;
  updatedBy_not_starts_with: Maybe<string>;
  updatedBy_ends_with: Maybe<string>;
  updatedBy_not_ends_with: Maybe<string>;
  caseId: Maybe<CaseWhereInput>;
};

export type CaseTransferReferralWhereUniqueInput = {
  id: Maybe<number>;
};

export type CaseUpdateInput = {
  applicationId: Maybe<number>;
  caseClosed: Maybe<boolean>;
  caseClosedJenis: Maybe<string>;
  createdBy: Maybe<string>;
  hakTerlanggar: Maybe<string>;
  issue: Maybe<string>;
  judulKasus: Maybe<string>;
  klasifikasiDok: Maybe<string>;
  kronologiKasus: Maybe<string>;
  lockDitolak: Maybe<boolean>;
  statusPendampingan: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  unlockPk: Maybe<boolean>;
  unlockTransfer: Maybe<boolean>;
  updatedBy: Maybe<string>;
  application: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>;
  clients: Maybe<ClientUpdateManyWithoutCaseidInput>;
  classifications: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>;
  consultations: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>;
  documents: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>;
  issues: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>;
  korbans: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>;
  pelakus: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>;
  pks: Maybe<CasePkUpdateManyWithoutCaseIdInput>;
  progresses: Maybe<CaseProgressUpdateManyWithoutCaseIdInput>;
  activities: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>;
  transferreferrals: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>;
  violatedrights: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>;
};

export type CaseUpdateManyMutationInput = {
  applicationId: Maybe<number>;
  caseClosed: Maybe<boolean>;
  caseClosedJenis: Maybe<string>;
  createdBy: Maybe<string>;
  hakTerlanggar: Maybe<string>;
  issue: Maybe<string>;
  judulKasus: Maybe<string>;
  klasifikasiDok: Maybe<string>;
  kronologiKasus: Maybe<string>;
  lockDitolak: Maybe<boolean>;
  statusPendampingan: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  unlockPk: Maybe<boolean>;
  unlockTransfer: Maybe<boolean>;
  updatedBy: Maybe<string>;
};

export type CaseUpdateOneRequiredWithoutActivitiesInput = {
  create: Maybe<CaseCreateWithoutActivitiesInput>;
  connect: Maybe<CaseWhereUniqueInput>;
  update: Maybe<CaseUpdateWithoutActivitiesDataInput>;
  upsert: Maybe<CaseUpsertWithoutActivitiesInput>;
};

export type CaseUpdateOneRequiredWithoutApplicationInput = {
  create: Maybe<CaseCreateWithoutApplicationInput>;
  connect: Maybe<CaseWhereUniqueInput>;
  update: Maybe<CaseUpdateWithoutApplicationDataInput>;
  upsert: Maybe<CaseUpsertWithoutApplicationInput>;
};

export type CaseUpdateOneRequiredWithoutClassificationsInput = {
  create: Maybe<CaseCreateWithoutClassificationsInput>;
  connect: Maybe<CaseWhereUniqueInput>;
  update: Maybe<CaseUpdateWithoutClassificationsDataInput>;
  upsert: Maybe<CaseUpsertWithoutClassificationsInput>;
};

export type CaseUpdateOneRequiredWithoutClientsInput = {
  create: Maybe<CaseCreateWithoutClientsInput>;
  connect: Maybe<CaseWhereUniqueInput>;
  update: Maybe<CaseUpdateWithoutClientsDataInput>;
  upsert: Maybe<CaseUpsertWithoutClientsInput>;
};

export type CaseUpdateOneRequiredWithoutConsultationsInput = {
  create: Maybe<CaseCreateWithoutConsultationsInput>;
  connect: Maybe<CaseWhereUniqueInput>;
  update: Maybe<CaseUpdateWithoutConsultationsDataInput>;
  upsert: Maybe<CaseUpsertWithoutConsultationsInput>;
};

export type CaseUpdateOneRequiredWithoutDocumentsInput = {
  create: Maybe<CaseCreateWithoutDocumentsInput>;
  connect: Maybe<CaseWhereUniqueInput>;
  update: Maybe<CaseUpdateWithoutDocumentsDataInput>;
  upsert: Maybe<CaseUpsertWithoutDocumentsInput>;
};

export type CaseUpdateOneRequiredWithoutIssuesInput = {
  create: Maybe<CaseCreateWithoutIssuesInput>;
  connect: Maybe<CaseWhereUniqueInput>;
  update: Maybe<CaseUpdateWithoutIssuesDataInput>;
  upsert: Maybe<CaseUpsertWithoutIssuesInput>;
};

export type CaseUpdateOneRequiredWithoutKorbansInput = {
  create: Maybe<CaseCreateWithoutKorbansInput>;
  connect: Maybe<CaseWhereUniqueInput>;
  update: Maybe<CaseUpdateWithoutKorbansDataInput>;
  upsert: Maybe<CaseUpsertWithoutKorbansInput>;
};

export type CaseUpdateOneRequiredWithoutPelakusInput = {
  create: Maybe<CaseCreateWithoutPelakusInput>;
  connect: Maybe<CaseWhereUniqueInput>;
  update: Maybe<CaseUpdateWithoutPelakusDataInput>;
  upsert: Maybe<CaseUpsertWithoutPelakusInput>;
};

export type CaseUpdateOneRequiredWithoutPksInput = {
  create: Maybe<CaseCreateWithoutPksInput>;
  connect: Maybe<CaseWhereUniqueInput>;
  update: Maybe<CaseUpdateWithoutPksDataInput>;
  upsert: Maybe<CaseUpsertWithoutPksInput>;
};

export type CaseUpdateOneRequiredWithoutProgressesInput = {
  create: Maybe<CaseCreateWithoutProgressesInput>;
  connect: Maybe<CaseWhereUniqueInput>;
  update: Maybe<CaseUpdateWithoutProgressesDataInput>;
  upsert: Maybe<CaseUpsertWithoutProgressesInput>;
};

export type CaseUpdateOneRequiredWithoutTransferreferralsInput = {
  create: Maybe<CaseCreateWithoutTransferreferralsInput>;
  connect: Maybe<CaseWhereUniqueInput>;
  update: Maybe<CaseUpdateWithoutTransferreferralsDataInput>;
  upsert: Maybe<CaseUpsertWithoutTransferreferralsInput>;
};

export type CaseUpdateOneRequiredWithoutViolatedrightsInput = {
  create: Maybe<CaseCreateWithoutViolatedrightsInput>;
  connect: Maybe<CaseWhereUniqueInput>;
  update: Maybe<CaseUpdateWithoutViolatedrightsDataInput>;
  upsert: Maybe<CaseUpsertWithoutViolatedrightsInput>;
};

export type CaseUpdateWithoutActivitiesDataInput = {
  applicationId: Maybe<number>;
  caseClosed: Maybe<boolean>;
  caseClosedJenis: Maybe<string>;
  createdBy: Maybe<string>;
  hakTerlanggar: Maybe<string>;
  issue: Maybe<string>;
  judulKasus: Maybe<string>;
  klasifikasiDok: Maybe<string>;
  kronologiKasus: Maybe<string>;
  lockDitolak: Maybe<boolean>;
  statusPendampingan: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  unlockPk: Maybe<boolean>;
  unlockTransfer: Maybe<boolean>;
  updatedBy: Maybe<string>;
  application: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>;
  clients: Maybe<ClientUpdateManyWithoutCaseidInput>;
  classifications: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>;
  consultations: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>;
  documents: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>;
  issues: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>;
  korbans: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>;
  pelakus: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>;
  pks: Maybe<CasePkUpdateManyWithoutCaseIdInput>;
  progresses: Maybe<CaseProgressUpdateManyWithoutCaseIdInput>;
  transferreferrals: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>;
  violatedrights: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>;
};

export type CaseUpdateWithoutApplicationDataInput = {
  applicationId: Maybe<number>;
  caseClosed: Maybe<boolean>;
  caseClosedJenis: Maybe<string>;
  createdBy: Maybe<string>;
  hakTerlanggar: Maybe<string>;
  issue: Maybe<string>;
  judulKasus: Maybe<string>;
  klasifikasiDok: Maybe<string>;
  kronologiKasus: Maybe<string>;
  lockDitolak: Maybe<boolean>;
  statusPendampingan: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  unlockPk: Maybe<boolean>;
  unlockTransfer: Maybe<boolean>;
  updatedBy: Maybe<string>;
  clients: Maybe<ClientUpdateManyWithoutCaseidInput>;
  classifications: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>;
  consultations: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>;
  documents: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>;
  issues: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>;
  korbans: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>;
  pelakus: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>;
  pks: Maybe<CasePkUpdateManyWithoutCaseIdInput>;
  progresses: Maybe<CaseProgressUpdateManyWithoutCaseIdInput>;
  activities: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>;
  transferreferrals: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>;
  violatedrights: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>;
};

export type CaseUpdateWithoutClassificationsDataInput = {
  applicationId: Maybe<number>;
  caseClosed: Maybe<boolean>;
  caseClosedJenis: Maybe<string>;
  createdBy: Maybe<string>;
  hakTerlanggar: Maybe<string>;
  issue: Maybe<string>;
  judulKasus: Maybe<string>;
  klasifikasiDok: Maybe<string>;
  kronologiKasus: Maybe<string>;
  lockDitolak: Maybe<boolean>;
  statusPendampingan: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  unlockPk: Maybe<boolean>;
  unlockTransfer: Maybe<boolean>;
  updatedBy: Maybe<string>;
  application: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>;
  clients: Maybe<ClientUpdateManyWithoutCaseidInput>;
  consultations: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>;
  documents: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>;
  issues: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>;
  korbans: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>;
  pelakus: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>;
  pks: Maybe<CasePkUpdateManyWithoutCaseIdInput>;
  progresses: Maybe<CaseProgressUpdateManyWithoutCaseIdInput>;
  activities: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>;
  transferreferrals: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>;
  violatedrights: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>;
};

export type CaseUpdateWithoutClientsDataInput = {
  applicationId: Maybe<number>;
  caseClosed: Maybe<boolean>;
  caseClosedJenis: Maybe<string>;
  createdBy: Maybe<string>;
  hakTerlanggar: Maybe<string>;
  issue: Maybe<string>;
  judulKasus: Maybe<string>;
  klasifikasiDok: Maybe<string>;
  kronologiKasus: Maybe<string>;
  lockDitolak: Maybe<boolean>;
  statusPendampingan: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  unlockPk: Maybe<boolean>;
  unlockTransfer: Maybe<boolean>;
  updatedBy: Maybe<string>;
  application: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>;
  classifications: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>;
  consultations: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>;
  documents: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>;
  issues: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>;
  korbans: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>;
  pelakus: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>;
  pks: Maybe<CasePkUpdateManyWithoutCaseIdInput>;
  progresses: Maybe<CaseProgressUpdateManyWithoutCaseIdInput>;
  activities: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>;
  transferreferrals: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>;
  violatedrights: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>;
};

export type CaseUpdateWithoutConsultationsDataInput = {
  applicationId: Maybe<number>;
  caseClosed: Maybe<boolean>;
  caseClosedJenis: Maybe<string>;
  createdBy: Maybe<string>;
  hakTerlanggar: Maybe<string>;
  issue: Maybe<string>;
  judulKasus: Maybe<string>;
  klasifikasiDok: Maybe<string>;
  kronologiKasus: Maybe<string>;
  lockDitolak: Maybe<boolean>;
  statusPendampingan: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  unlockPk: Maybe<boolean>;
  unlockTransfer: Maybe<boolean>;
  updatedBy: Maybe<string>;
  application: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>;
  clients: Maybe<ClientUpdateManyWithoutCaseidInput>;
  classifications: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>;
  documents: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>;
  issues: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>;
  korbans: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>;
  pelakus: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>;
  pks: Maybe<CasePkUpdateManyWithoutCaseIdInput>;
  progresses: Maybe<CaseProgressUpdateManyWithoutCaseIdInput>;
  activities: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>;
  transferreferrals: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>;
  violatedrights: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>;
};

export type CaseUpdateWithoutDocumentsDataInput = {
  applicationId: Maybe<number>;
  caseClosed: Maybe<boolean>;
  caseClosedJenis: Maybe<string>;
  createdBy: Maybe<string>;
  hakTerlanggar: Maybe<string>;
  issue: Maybe<string>;
  judulKasus: Maybe<string>;
  klasifikasiDok: Maybe<string>;
  kronologiKasus: Maybe<string>;
  lockDitolak: Maybe<boolean>;
  statusPendampingan: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  unlockPk: Maybe<boolean>;
  unlockTransfer: Maybe<boolean>;
  updatedBy: Maybe<string>;
  application: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>;
  clients: Maybe<ClientUpdateManyWithoutCaseidInput>;
  classifications: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>;
  consultations: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>;
  issues: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>;
  korbans: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>;
  pelakus: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>;
  pks: Maybe<CasePkUpdateManyWithoutCaseIdInput>;
  progresses: Maybe<CaseProgressUpdateManyWithoutCaseIdInput>;
  activities: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>;
  transferreferrals: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>;
  violatedrights: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>;
};

export type CaseUpdateWithoutIssuesDataInput = {
  applicationId: Maybe<number>;
  caseClosed: Maybe<boolean>;
  caseClosedJenis: Maybe<string>;
  createdBy: Maybe<string>;
  hakTerlanggar: Maybe<string>;
  issue: Maybe<string>;
  judulKasus: Maybe<string>;
  klasifikasiDok: Maybe<string>;
  kronologiKasus: Maybe<string>;
  lockDitolak: Maybe<boolean>;
  statusPendampingan: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  unlockPk: Maybe<boolean>;
  unlockTransfer: Maybe<boolean>;
  updatedBy: Maybe<string>;
  application: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>;
  clients: Maybe<ClientUpdateManyWithoutCaseidInput>;
  classifications: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>;
  consultations: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>;
  documents: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>;
  korbans: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>;
  pelakus: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>;
  pks: Maybe<CasePkUpdateManyWithoutCaseIdInput>;
  progresses: Maybe<CaseProgressUpdateManyWithoutCaseIdInput>;
  activities: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>;
  transferreferrals: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>;
  violatedrights: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>;
};

export type CaseUpdateWithoutKorbansDataInput = {
  applicationId: Maybe<number>;
  caseClosed: Maybe<boolean>;
  caseClosedJenis: Maybe<string>;
  createdBy: Maybe<string>;
  hakTerlanggar: Maybe<string>;
  issue: Maybe<string>;
  judulKasus: Maybe<string>;
  klasifikasiDok: Maybe<string>;
  kronologiKasus: Maybe<string>;
  lockDitolak: Maybe<boolean>;
  statusPendampingan: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  unlockPk: Maybe<boolean>;
  unlockTransfer: Maybe<boolean>;
  updatedBy: Maybe<string>;
  application: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>;
  clients: Maybe<ClientUpdateManyWithoutCaseidInput>;
  classifications: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>;
  consultations: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>;
  documents: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>;
  issues: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>;
  pelakus: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>;
  pks: Maybe<CasePkUpdateManyWithoutCaseIdInput>;
  progresses: Maybe<CaseProgressUpdateManyWithoutCaseIdInput>;
  activities: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>;
  transferreferrals: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>;
  violatedrights: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>;
};

export type CaseUpdateWithoutPelakusDataInput = {
  applicationId: Maybe<number>;
  caseClosed: Maybe<boolean>;
  caseClosedJenis: Maybe<string>;
  createdBy: Maybe<string>;
  hakTerlanggar: Maybe<string>;
  issue: Maybe<string>;
  judulKasus: Maybe<string>;
  klasifikasiDok: Maybe<string>;
  kronologiKasus: Maybe<string>;
  lockDitolak: Maybe<boolean>;
  statusPendampingan: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  unlockPk: Maybe<boolean>;
  unlockTransfer: Maybe<boolean>;
  updatedBy: Maybe<string>;
  application: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>;
  clients: Maybe<ClientUpdateManyWithoutCaseidInput>;
  classifications: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>;
  consultations: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>;
  documents: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>;
  issues: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>;
  korbans: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>;
  pks: Maybe<CasePkUpdateManyWithoutCaseIdInput>;
  progresses: Maybe<CaseProgressUpdateManyWithoutCaseIdInput>;
  activities: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>;
  transferreferrals: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>;
  violatedrights: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>;
};

export type CaseUpdateWithoutPksDataInput = {
  applicationId: Maybe<number>;
  caseClosed: Maybe<boolean>;
  caseClosedJenis: Maybe<string>;
  createdBy: Maybe<string>;
  hakTerlanggar: Maybe<string>;
  issue: Maybe<string>;
  judulKasus: Maybe<string>;
  klasifikasiDok: Maybe<string>;
  kronologiKasus: Maybe<string>;
  lockDitolak: Maybe<boolean>;
  statusPendampingan: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  unlockPk: Maybe<boolean>;
  unlockTransfer: Maybe<boolean>;
  updatedBy: Maybe<string>;
  application: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>;
  clients: Maybe<ClientUpdateManyWithoutCaseidInput>;
  classifications: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>;
  consultations: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>;
  documents: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>;
  issues: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>;
  korbans: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>;
  pelakus: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>;
  progresses: Maybe<CaseProgressUpdateManyWithoutCaseIdInput>;
  activities: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>;
  transferreferrals: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>;
  violatedrights: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>;
};

export type CaseUpdateWithoutProgressesDataInput = {
  applicationId: Maybe<number>;
  caseClosed: Maybe<boolean>;
  caseClosedJenis: Maybe<string>;
  createdBy: Maybe<string>;
  hakTerlanggar: Maybe<string>;
  issue: Maybe<string>;
  judulKasus: Maybe<string>;
  klasifikasiDok: Maybe<string>;
  kronologiKasus: Maybe<string>;
  lockDitolak: Maybe<boolean>;
  statusPendampingan: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  unlockPk: Maybe<boolean>;
  unlockTransfer: Maybe<boolean>;
  updatedBy: Maybe<string>;
  application: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>;
  clients: Maybe<ClientUpdateManyWithoutCaseidInput>;
  classifications: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>;
  consultations: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>;
  documents: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>;
  issues: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>;
  korbans: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>;
  pelakus: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>;
  pks: Maybe<CasePkUpdateManyWithoutCaseIdInput>;
  activities: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>;
  transferreferrals: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>;
  violatedrights: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>;
};

export type CaseUpdateWithoutTransferreferralsDataInput = {
  applicationId: Maybe<number>;
  caseClosed: Maybe<boolean>;
  caseClosedJenis: Maybe<string>;
  createdBy: Maybe<string>;
  hakTerlanggar: Maybe<string>;
  issue: Maybe<string>;
  judulKasus: Maybe<string>;
  klasifikasiDok: Maybe<string>;
  kronologiKasus: Maybe<string>;
  lockDitolak: Maybe<boolean>;
  statusPendampingan: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  unlockPk: Maybe<boolean>;
  unlockTransfer: Maybe<boolean>;
  updatedBy: Maybe<string>;
  application: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>;
  clients: Maybe<ClientUpdateManyWithoutCaseidInput>;
  classifications: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>;
  consultations: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>;
  documents: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>;
  issues: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>;
  korbans: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>;
  pelakus: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>;
  pks: Maybe<CasePkUpdateManyWithoutCaseIdInput>;
  progresses: Maybe<CaseProgressUpdateManyWithoutCaseIdInput>;
  activities: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>;
  violatedrights: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>;
};

export type CaseUpdateWithoutViolatedrightsDataInput = {
  applicationId: Maybe<number>;
  caseClosed: Maybe<boolean>;
  caseClosedJenis: Maybe<string>;
  createdBy: Maybe<string>;
  hakTerlanggar: Maybe<string>;
  issue: Maybe<string>;
  judulKasus: Maybe<string>;
  klasifikasiDok: Maybe<string>;
  kronologiKasus: Maybe<string>;
  lockDitolak: Maybe<boolean>;
  statusPendampingan: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  unlockPk: Maybe<boolean>;
  unlockTransfer: Maybe<boolean>;
  updatedBy: Maybe<string>;
  application: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>;
  clients: Maybe<ClientUpdateManyWithoutCaseidInput>;
  classifications: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>;
  consultations: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>;
  documents: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>;
  issues: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>;
  korbans: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>;
  pelakus: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>;
  pks: Maybe<CasePkUpdateManyWithoutCaseIdInput>;
  progresses: Maybe<CaseProgressUpdateManyWithoutCaseIdInput>;
  activities: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>;
  transferreferrals: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>;
};

export type CaseUpsertWithoutActivitiesInput = {
  update: CaseUpdateWithoutActivitiesDataInput;
  create: CaseCreateWithoutActivitiesInput;
};

export type CaseUpsertWithoutApplicationInput = {
  update: CaseUpdateWithoutApplicationDataInput;
  create: CaseCreateWithoutApplicationInput;
};

export type CaseUpsertWithoutClassificationsInput = {
  update: CaseUpdateWithoutClassificationsDataInput;
  create: CaseCreateWithoutClassificationsInput;
};

export type CaseUpsertWithoutClientsInput = {
  update: CaseUpdateWithoutClientsDataInput;
  create: CaseCreateWithoutClientsInput;
};

export type CaseUpsertWithoutConsultationsInput = {
  update: CaseUpdateWithoutConsultationsDataInput;
  create: CaseCreateWithoutConsultationsInput;
};

export type CaseUpsertWithoutDocumentsInput = {
  update: CaseUpdateWithoutDocumentsDataInput;
  create: CaseCreateWithoutDocumentsInput;
};

export type CaseUpsertWithoutIssuesInput = {
  update: CaseUpdateWithoutIssuesDataInput;
  create: CaseCreateWithoutIssuesInput;
};

export type CaseUpsertWithoutKorbansInput = {
  update: CaseUpdateWithoutKorbansDataInput;
  create: CaseCreateWithoutKorbansInput;
};

export type CaseUpsertWithoutPelakusInput = {
  update: CaseUpdateWithoutPelakusDataInput;
  create: CaseCreateWithoutPelakusInput;
};

export type CaseUpsertWithoutPksInput = {
  update: CaseUpdateWithoutPksDataInput;
  create: CaseCreateWithoutPksInput;
};

export type CaseUpsertWithoutProgressesInput = {
  update: CaseUpdateWithoutProgressesDataInput;
  create: CaseCreateWithoutProgressesInput;
};

export type CaseUpsertWithoutTransferreferralsInput = {
  update: CaseUpdateWithoutTransferreferralsDataInput;
  create: CaseCreateWithoutTransferreferralsInput;
};

export type CaseUpsertWithoutViolatedrightsInput = {
  update: CaseUpdateWithoutViolatedrightsDataInput;
  create: CaseCreateWithoutViolatedrightsInput;
};

export type CaseViolatedRight = {
  id: number;
  caseId: Case;
  kodeMt?: Maybe<string>;
};

export type CaseViolatedRightConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<CaseViolatedRightEdge>>;
  aggregate: AggregateCaseViolatedRight;
};

export type CaseViolatedRightCreateInput = {
  kodeMt: Maybe<string>;
  caseId: CaseCreateOneWithoutViolatedrightsInput;
};

export type CaseViolatedRightCreateManyWithoutCaseIdInput = {
  create: Maybe<Array<CaseViolatedRightCreateWithoutCaseIdInput>>;
  connect: Maybe<Array<CaseViolatedRightWhereUniqueInput>>;
};

export type CaseViolatedRightCreateWithoutCaseIdInput = {
  kodeMt: Maybe<string>;
};

export type CaseViolatedRightEdge = {
  node: CaseViolatedRight;
  cursor: string;
};

export enum CaseViolatedRightOrderByInput {
  Id_Asc = 'id_ASC',
  Id_Desc = 'id_DESC',
  KodeMt_Asc = 'kodeMt_ASC',
  KodeMt_Desc = 'kodeMt_DESC',
}

export type CaseViolatedRightPreviousValues = {
  id: number;
  kodeMt?: Maybe<string>;
};

export type CaseViolatedRightScalarWhereInput = {
  AND: Maybe<Array<CaseViolatedRightScalarWhereInput>>;
  OR: Maybe<Array<CaseViolatedRightScalarWhereInput>>;
  NOT: Maybe<Array<CaseViolatedRightScalarWhereInput>>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  kodeMt: Maybe<string>;
  kodeMt_not: Maybe<string>;
  kodeMt_in: Maybe<Array<string>>;
  kodeMt_not_in: Maybe<Array<string>>;
  kodeMt_lt: Maybe<string>;
  kodeMt_lte: Maybe<string>;
  kodeMt_gt: Maybe<string>;
  kodeMt_gte: Maybe<string>;
  kodeMt_contains: Maybe<string>;
  kodeMt_not_contains: Maybe<string>;
  kodeMt_starts_with: Maybe<string>;
  kodeMt_not_starts_with: Maybe<string>;
  kodeMt_ends_with: Maybe<string>;
  kodeMt_not_ends_with: Maybe<string>;
};

export type CaseViolatedRightSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<CaseViolatedRight>;
  updatedFields?: Maybe<Array<string>>;
  previousValues?: Maybe<CaseViolatedRightPreviousValues>;
};

export type CaseViolatedRightSubscriptionWhereInput = {
  AND: Maybe<Array<CaseViolatedRightSubscriptionWhereInput>>;
  OR: Maybe<Array<CaseViolatedRightSubscriptionWhereInput>>;
  NOT: Maybe<Array<CaseViolatedRightSubscriptionWhereInput>>;
  mutation_in: Maybe<Array<MutationType>>;
  updatedFields_contains: Maybe<string>;
  updatedFields_contains_every: Maybe<Array<string>>;
  updatedFields_contains_some: Maybe<Array<string>>;
  node: Maybe<CaseViolatedRightWhereInput>;
};

export type CaseViolatedRightUpdateInput = {
  kodeMt: Maybe<string>;
  caseId: Maybe<CaseUpdateOneRequiredWithoutViolatedrightsInput>;
};

export type CaseViolatedRightUpdateManyDataInput = {
  kodeMt: Maybe<string>;
};

export type CaseViolatedRightUpdateManyMutationInput = {
  kodeMt: Maybe<string>;
};

export type CaseViolatedRightUpdateManyWithoutCaseIdInput = {
  create: Maybe<Array<CaseViolatedRightCreateWithoutCaseIdInput>>;
  connect: Maybe<Array<CaseViolatedRightWhereUniqueInput>>;
  set: Maybe<Array<CaseViolatedRightWhereUniqueInput>>;
  disconnect: Maybe<Array<CaseViolatedRightWhereUniqueInput>>;
  delete: Maybe<Array<CaseViolatedRightWhereUniqueInput>>;
  update: Maybe<Array<CaseViolatedRightUpdateWithWhereUniqueWithoutCaseIdInput>>;
  updateMany: Maybe<Array<CaseViolatedRightUpdateManyWithWhereNestedInput>>;
  deleteMany: Maybe<Array<CaseViolatedRightScalarWhereInput>>;
  upsert: Maybe<Array<CaseViolatedRightUpsertWithWhereUniqueWithoutCaseIdInput>>;
};

export type CaseViolatedRightUpdateManyWithWhereNestedInput = {
  where: CaseViolatedRightScalarWhereInput;
  data: CaseViolatedRightUpdateManyDataInput;
};

export type CaseViolatedRightUpdateWithoutCaseIdDataInput = {
  kodeMt: Maybe<string>;
};

export type CaseViolatedRightUpdateWithWhereUniqueWithoutCaseIdInput = {
  where: CaseViolatedRightWhereUniqueInput;
  data: CaseViolatedRightUpdateWithoutCaseIdDataInput;
};

export type CaseViolatedRightUpsertWithWhereUniqueWithoutCaseIdInput = {
  where: CaseViolatedRightWhereUniqueInput;
  update: CaseViolatedRightUpdateWithoutCaseIdDataInput;
  create: CaseViolatedRightCreateWithoutCaseIdInput;
};

export type CaseViolatedRightWhereInput = {
  AND: Maybe<Array<CaseViolatedRightWhereInput>>;
  OR: Maybe<Array<CaseViolatedRightWhereInput>>;
  NOT: Maybe<Array<CaseViolatedRightWhereInput>>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  kodeMt: Maybe<string>;
  kodeMt_not: Maybe<string>;
  kodeMt_in: Maybe<Array<string>>;
  kodeMt_not_in: Maybe<Array<string>>;
  kodeMt_lt: Maybe<string>;
  kodeMt_lte: Maybe<string>;
  kodeMt_gt: Maybe<string>;
  kodeMt_gte: Maybe<string>;
  kodeMt_contains: Maybe<string>;
  kodeMt_not_contains: Maybe<string>;
  kodeMt_starts_with: Maybe<string>;
  kodeMt_not_starts_with: Maybe<string>;
  kodeMt_ends_with: Maybe<string>;
  kodeMt_not_ends_with: Maybe<string>;
  caseId: Maybe<CaseWhereInput>;
};

export type CaseViolatedRightWhereUniqueInput = {
  id: Maybe<number>;
};

export type CaseWhereInput = {
  AND: Maybe<Array<CaseWhereInput>>;
  OR: Maybe<Array<CaseWhereInput>>;
  NOT: Maybe<Array<CaseWhereInput>>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  applicationId: Maybe<number>;
  applicationId_not: Maybe<number>;
  applicationId_in: Maybe<Array<number>>;
  applicationId_not_in: Maybe<Array<number>>;
  applicationId_lt: Maybe<number>;
  applicationId_lte: Maybe<number>;
  applicationId_gt: Maybe<number>;
  applicationId_gte: Maybe<number>;
  caseClosed: Maybe<boolean>;
  caseClosed_not: Maybe<boolean>;
  caseClosedJenis: Maybe<string>;
  caseClosedJenis_not: Maybe<string>;
  caseClosedJenis_in: Maybe<Array<string>>;
  caseClosedJenis_not_in: Maybe<Array<string>>;
  caseClosedJenis_lt: Maybe<string>;
  caseClosedJenis_lte: Maybe<string>;
  caseClosedJenis_gt: Maybe<string>;
  caseClosedJenis_gte: Maybe<string>;
  caseClosedJenis_contains: Maybe<string>;
  caseClosedJenis_not_contains: Maybe<string>;
  caseClosedJenis_starts_with: Maybe<string>;
  caseClosedJenis_not_starts_with: Maybe<string>;
  caseClosedJenis_ends_with: Maybe<string>;
  caseClosedJenis_not_ends_with: Maybe<string>;
  createdAt: Maybe<Date>;
  createdAt_not: Maybe<Date>;
  createdAt_in: Maybe<Array<Date>>;
  createdAt_not_in: Maybe<Array<Date>>;
  createdAt_lt: Maybe<Date>;
  createdAt_lte: Maybe<Date>;
  createdAt_gt: Maybe<Date>;
  createdAt_gte: Maybe<Date>;
  createdBy: Maybe<string>;
  createdBy_not: Maybe<string>;
  createdBy_in: Maybe<Array<string>>;
  createdBy_not_in: Maybe<Array<string>>;
  createdBy_lt: Maybe<string>;
  createdBy_lte: Maybe<string>;
  createdBy_gt: Maybe<string>;
  createdBy_gte: Maybe<string>;
  createdBy_contains: Maybe<string>;
  createdBy_not_contains: Maybe<string>;
  createdBy_starts_with: Maybe<string>;
  createdBy_not_starts_with: Maybe<string>;
  createdBy_ends_with: Maybe<string>;
  createdBy_not_ends_with: Maybe<string>;
  hakTerlanggar: Maybe<string>;
  hakTerlanggar_not: Maybe<string>;
  hakTerlanggar_in: Maybe<Array<string>>;
  hakTerlanggar_not_in: Maybe<Array<string>>;
  hakTerlanggar_lt: Maybe<string>;
  hakTerlanggar_lte: Maybe<string>;
  hakTerlanggar_gt: Maybe<string>;
  hakTerlanggar_gte: Maybe<string>;
  hakTerlanggar_contains: Maybe<string>;
  hakTerlanggar_not_contains: Maybe<string>;
  hakTerlanggar_starts_with: Maybe<string>;
  hakTerlanggar_not_starts_with: Maybe<string>;
  hakTerlanggar_ends_with: Maybe<string>;
  hakTerlanggar_not_ends_with: Maybe<string>;
  issue: Maybe<string>;
  issue_not: Maybe<string>;
  issue_in: Maybe<Array<string>>;
  issue_not_in: Maybe<Array<string>>;
  issue_lt: Maybe<string>;
  issue_lte: Maybe<string>;
  issue_gt: Maybe<string>;
  issue_gte: Maybe<string>;
  issue_contains: Maybe<string>;
  issue_not_contains: Maybe<string>;
  issue_starts_with: Maybe<string>;
  issue_not_starts_with: Maybe<string>;
  issue_ends_with: Maybe<string>;
  issue_not_ends_with: Maybe<string>;
  judulKasus: Maybe<string>;
  judulKasus_not: Maybe<string>;
  judulKasus_in: Maybe<Array<string>>;
  judulKasus_not_in: Maybe<Array<string>>;
  judulKasus_lt: Maybe<string>;
  judulKasus_lte: Maybe<string>;
  judulKasus_gt: Maybe<string>;
  judulKasus_gte: Maybe<string>;
  judulKasus_contains: Maybe<string>;
  judulKasus_not_contains: Maybe<string>;
  judulKasus_starts_with: Maybe<string>;
  judulKasus_not_starts_with: Maybe<string>;
  judulKasus_ends_with: Maybe<string>;
  judulKasus_not_ends_with: Maybe<string>;
  klasifikasiDok: Maybe<string>;
  klasifikasiDok_not: Maybe<string>;
  klasifikasiDok_in: Maybe<Array<string>>;
  klasifikasiDok_not_in: Maybe<Array<string>>;
  klasifikasiDok_lt: Maybe<string>;
  klasifikasiDok_lte: Maybe<string>;
  klasifikasiDok_gt: Maybe<string>;
  klasifikasiDok_gte: Maybe<string>;
  klasifikasiDok_contains: Maybe<string>;
  klasifikasiDok_not_contains: Maybe<string>;
  klasifikasiDok_starts_with: Maybe<string>;
  klasifikasiDok_not_starts_with: Maybe<string>;
  klasifikasiDok_ends_with: Maybe<string>;
  klasifikasiDok_not_ends_with: Maybe<string>;
  kronologiKasus: Maybe<string>;
  kronologiKasus_not: Maybe<string>;
  kronologiKasus_in: Maybe<Array<string>>;
  kronologiKasus_not_in: Maybe<Array<string>>;
  kronologiKasus_lt: Maybe<string>;
  kronologiKasus_lte: Maybe<string>;
  kronologiKasus_gt: Maybe<string>;
  kronologiKasus_gte: Maybe<string>;
  kronologiKasus_contains: Maybe<string>;
  kronologiKasus_not_contains: Maybe<string>;
  kronologiKasus_starts_with: Maybe<string>;
  kronologiKasus_not_starts_with: Maybe<string>;
  kronologiKasus_ends_with: Maybe<string>;
  kronologiKasus_not_ends_with: Maybe<string>;
  lockDitolak: Maybe<boolean>;
  lockDitolak_not: Maybe<boolean>;
  statusPendampingan: Maybe<string>;
  statusPendampingan_not: Maybe<string>;
  statusPendampingan_in: Maybe<Array<string>>;
  statusPendampingan_not_in: Maybe<Array<string>>;
  statusPendampingan_lt: Maybe<string>;
  statusPendampingan_lte: Maybe<string>;
  statusPendampingan_gt: Maybe<string>;
  statusPendampingan_gte: Maybe<string>;
  statusPendampingan_contains: Maybe<string>;
  statusPendampingan_not_contains: Maybe<string>;
  statusPendampingan_starts_with: Maybe<string>;
  statusPendampingan_not_starts_with: Maybe<string>;
  statusPendampingan_ends_with: Maybe<string>;
  statusPendampingan_not_ends_with: Maybe<string>;
  targetAdvokasi: Maybe<string>;
  targetAdvokasi_not: Maybe<string>;
  targetAdvokasi_in: Maybe<Array<string>>;
  targetAdvokasi_not_in: Maybe<Array<string>>;
  targetAdvokasi_lt: Maybe<string>;
  targetAdvokasi_lte: Maybe<string>;
  targetAdvokasi_gt: Maybe<string>;
  targetAdvokasi_gte: Maybe<string>;
  targetAdvokasi_contains: Maybe<string>;
  targetAdvokasi_not_contains: Maybe<string>;
  targetAdvokasi_starts_with: Maybe<string>;
  targetAdvokasi_not_starts_with: Maybe<string>;
  targetAdvokasi_ends_with: Maybe<string>;
  targetAdvokasi_not_ends_with: Maybe<string>;
  unlockPk: Maybe<boolean>;
  unlockPk_not: Maybe<boolean>;
  unlockTransfer: Maybe<boolean>;
  unlockTransfer_not: Maybe<boolean>;
  updatedAt: Maybe<Date>;
  updatedAt_not: Maybe<Date>;
  updatedAt_in: Maybe<Array<Date>>;
  updatedAt_not_in: Maybe<Array<Date>>;
  updatedAt_lt: Maybe<Date>;
  updatedAt_lte: Maybe<Date>;
  updatedAt_gt: Maybe<Date>;
  updatedAt_gte: Maybe<Date>;
  updatedBy: Maybe<string>;
  updatedBy_not: Maybe<string>;
  updatedBy_in: Maybe<Array<string>>;
  updatedBy_not_in: Maybe<Array<string>>;
  updatedBy_lt: Maybe<string>;
  updatedBy_lte: Maybe<string>;
  updatedBy_gt: Maybe<string>;
  updatedBy_gte: Maybe<string>;
  updatedBy_contains: Maybe<string>;
  updatedBy_not_contains: Maybe<string>;
  updatedBy_starts_with: Maybe<string>;
  updatedBy_not_starts_with: Maybe<string>;
  updatedBy_ends_with: Maybe<string>;
  updatedBy_not_ends_with: Maybe<string>;
  application: Maybe<ApplicationWhereInput>;
  clients_every: Maybe<ClientWhereInput>;
  clients_some: Maybe<ClientWhereInput>;
  clients_none: Maybe<ClientWhereInput>;
  classifications_every: Maybe<CaseClassificationWhereInput>;
  classifications_some: Maybe<CaseClassificationWhereInput>;
  classifications_none: Maybe<CaseClassificationWhereInput>;
  consultations_every: Maybe<CaseConsultationWhereInput>;
  consultations_some: Maybe<CaseConsultationWhereInput>;
  consultations_none: Maybe<CaseConsultationWhereInput>;
  documents_every: Maybe<CaseDocumentWhereInput>;
  documents_some: Maybe<CaseDocumentWhereInput>;
  documents_none: Maybe<CaseDocumentWhereInput>;
  issues_every: Maybe<CaseIssueWhereInput>;
  issues_some: Maybe<CaseIssueWhereInput>;
  issues_none: Maybe<CaseIssueWhereInput>;
  korbans_every: Maybe<CaseKorbanWhereInput>;
  korbans_some: Maybe<CaseKorbanWhereInput>;
  korbans_none: Maybe<CaseKorbanWhereInput>;
  pelakus_every: Maybe<CasePelakuWhereInput>;
  pelakus_some: Maybe<CasePelakuWhereInput>;
  pelakus_none: Maybe<CasePelakuWhereInput>;
  pks_every: Maybe<CasePkWhereInput>;
  pks_some: Maybe<CasePkWhereInput>;
  pks_none: Maybe<CasePkWhereInput>;
  progresses_every: Maybe<CaseProgressWhereInput>;
  progresses_some: Maybe<CaseProgressWhereInput>;
  progresses_none: Maybe<CaseProgressWhereInput>;
  activities_every: Maybe<CaseProgressActivityWhereInput>;
  activities_some: Maybe<CaseProgressActivityWhereInput>;
  activities_none: Maybe<CaseProgressActivityWhereInput>;
  transferreferrals_every: Maybe<CaseTransferReferralWhereInput>;
  transferreferrals_some: Maybe<CaseTransferReferralWhereInput>;
  transferreferrals_none: Maybe<CaseTransferReferralWhereInput>;
  violatedrights_every: Maybe<CaseViolatedRightWhereInput>;
  violatedrights_some: Maybe<CaseViolatedRightWhereInput>;
  violatedrights_none: Maybe<CaseViolatedRightWhereInput>;
};

export type CaseWhereUniqueInput = {
  id: Maybe<number>;
};

export type Client = {
  id: number;
  alamatLokasi?: Maybe<string>;
  applicationId: Application;
  asetGedung?: Maybe<string>;
  asetKios?: Maybe<string>;
  asetLahanGarapan?: Maybe<string>;
  asetLapak?: Maybe<string>;
  asetMobil?: Maybe<string>;
  asetMotor?: Maybe<string>;
  asetRumah?: Maybe<string>;
  asetTanah?: Maybe<string>;
  asetToko?: Maybe<string>;
  asetWarung?: Maybe<string>;
  createdAt: Date;
  createdBy?: Maybe<string>;
  pendapatan?: Maybe<string>;
  personId: Person;
  sktm: boolean;
  sktmUpload?: Maybe<string>;
  stmKeterangan?: Maybe<string>;
  tanggunganAnak?: Maybe<number>;
  tanggunganFamili?: Maybe<number>;
  tanggunganLain?: Maybe<number>;
  tanggunganPasangan?: Maybe<number>;
  updatedAt: Date;
  updatedBy?: Maybe<string>;
  usiaSaatKlien?: Maybe<number>;
  caseid: Case;
};

export type ClientConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<ClientEdge>>;
  aggregate: AggregateClient;
};

export type ClientCreateInput = {
  alamatLokasi: Maybe<string>;
  asetGedung: Maybe<string>;
  asetKios: Maybe<string>;
  asetLahanGarapan: Maybe<string>;
  asetLapak: Maybe<string>;
  asetMobil: Maybe<string>;
  asetMotor: Maybe<string>;
  asetRumah: Maybe<string>;
  asetTanah: Maybe<string>;
  asetToko: Maybe<string>;
  asetWarung: Maybe<string>;
  createdBy: Maybe<string>;
  pendapatan: Maybe<string>;
  sktm: boolean;
  sktmUpload: Maybe<string>;
  stmKeterangan: Maybe<string>;
  tanggunganAnak: Maybe<number>;
  tanggunganFamili: Maybe<number>;
  tanggunganLain: Maybe<number>;
  tanggunganPasangan: Maybe<number>;
  updatedBy: Maybe<string>;
  usiaSaatKlien: Maybe<number>;
  applicationId: ApplicationCreateOneWithoutClientsInput;
  personId: PersonCreateOneWithoutClientsInput;
  caseid: CaseCreateOneWithoutClientsInput;
};

export type ClientCreateManyWithoutApplicationIdInput = {
  create: Maybe<Array<ClientCreateWithoutApplicationIdInput>>;
  connect: Maybe<Array<ClientWhereUniqueInput>>;
};

export type ClientCreateManyWithoutCaseidInput = {
  create: Maybe<Array<ClientCreateWithoutCaseidInput>>;
  connect: Maybe<Array<ClientWhereUniqueInput>>;
};

export type ClientCreateManyWithoutPersonIdInput = {
  create: Maybe<Array<ClientCreateWithoutPersonIdInput>>;
  connect: Maybe<Array<ClientWhereUniqueInput>>;
};

export type ClientCreateWithoutApplicationIdInput = {
  alamatLokasi: Maybe<string>;
  asetGedung: Maybe<string>;
  asetKios: Maybe<string>;
  asetLahanGarapan: Maybe<string>;
  asetLapak: Maybe<string>;
  asetMobil: Maybe<string>;
  asetMotor: Maybe<string>;
  asetRumah: Maybe<string>;
  asetTanah: Maybe<string>;
  asetToko: Maybe<string>;
  asetWarung: Maybe<string>;
  createdBy: Maybe<string>;
  pendapatan: Maybe<string>;
  sktm: boolean;
  sktmUpload: Maybe<string>;
  stmKeterangan: Maybe<string>;
  tanggunganAnak: Maybe<number>;
  tanggunganFamili: Maybe<number>;
  tanggunganLain: Maybe<number>;
  tanggunganPasangan: Maybe<number>;
  updatedBy: Maybe<string>;
  usiaSaatKlien: Maybe<number>;
  personId: PersonCreateOneWithoutClientsInput;
  caseid: CaseCreateOneWithoutClientsInput;
};

export type ClientCreateWithoutCaseidInput = {
  alamatLokasi: Maybe<string>;
  asetGedung: Maybe<string>;
  asetKios: Maybe<string>;
  asetLahanGarapan: Maybe<string>;
  asetLapak: Maybe<string>;
  asetMobil: Maybe<string>;
  asetMotor: Maybe<string>;
  asetRumah: Maybe<string>;
  asetTanah: Maybe<string>;
  asetToko: Maybe<string>;
  asetWarung: Maybe<string>;
  createdBy: Maybe<string>;
  pendapatan: Maybe<string>;
  sktm: boolean;
  sktmUpload: Maybe<string>;
  stmKeterangan: Maybe<string>;
  tanggunganAnak: Maybe<number>;
  tanggunganFamili: Maybe<number>;
  tanggunganLain: Maybe<number>;
  tanggunganPasangan: Maybe<number>;
  updatedBy: Maybe<string>;
  usiaSaatKlien: Maybe<number>;
  applicationId: ApplicationCreateOneWithoutClientsInput;
  personId: PersonCreateOneWithoutClientsInput;
};

export type ClientCreateWithoutPersonIdInput = {
  alamatLokasi: Maybe<string>;
  asetGedung: Maybe<string>;
  asetKios: Maybe<string>;
  asetLahanGarapan: Maybe<string>;
  asetLapak: Maybe<string>;
  asetMobil: Maybe<string>;
  asetMotor: Maybe<string>;
  asetRumah: Maybe<string>;
  asetTanah: Maybe<string>;
  asetToko: Maybe<string>;
  asetWarung: Maybe<string>;
  createdBy: Maybe<string>;
  pendapatan: Maybe<string>;
  sktm: boolean;
  sktmUpload: Maybe<string>;
  stmKeterangan: Maybe<string>;
  tanggunganAnak: Maybe<number>;
  tanggunganFamili: Maybe<number>;
  tanggunganLain: Maybe<number>;
  tanggunganPasangan: Maybe<number>;
  updatedBy: Maybe<string>;
  usiaSaatKlien: Maybe<number>;
  applicationId: ApplicationCreateOneWithoutClientsInput;
  caseid: CaseCreateOneWithoutClientsInput;
};

export type ClientEdge = {
  node: Client;
  cursor: string;
};

export enum ClientOrderByInput {
  Id_Asc = 'id_ASC',
  Id_Desc = 'id_DESC',
  AlamatLokasi_Asc = 'alamatLokasi_ASC',
  AlamatLokasi_Desc = 'alamatLokasi_DESC',
  AsetGedung_Asc = 'asetGedung_ASC',
  AsetGedung_Desc = 'asetGedung_DESC',
  AsetKios_Asc = 'asetKios_ASC',
  AsetKios_Desc = 'asetKios_DESC',
  AsetLahanGarapan_Asc = 'asetLahanGarapan_ASC',
  AsetLahanGarapan_Desc = 'asetLahanGarapan_DESC',
  AsetLapak_Asc = 'asetLapak_ASC',
  AsetLapak_Desc = 'asetLapak_DESC',
  AsetMobil_Asc = 'asetMobil_ASC',
  AsetMobil_Desc = 'asetMobil_DESC',
  AsetMotor_Asc = 'asetMotor_ASC',
  AsetMotor_Desc = 'asetMotor_DESC',
  AsetRumah_Asc = 'asetRumah_ASC',
  AsetRumah_Desc = 'asetRumah_DESC',
  AsetTanah_Asc = 'asetTanah_ASC',
  AsetTanah_Desc = 'asetTanah_DESC',
  AsetToko_Asc = 'asetToko_ASC',
  AsetToko_Desc = 'asetToko_DESC',
  AsetWarung_Asc = 'asetWarung_ASC',
  AsetWarung_Desc = 'asetWarung_DESC',
  CreatedAt_Asc = 'createdAt_ASC',
  CreatedAt_Desc = 'createdAt_DESC',
  CreatedBy_Asc = 'createdBy_ASC',
  CreatedBy_Desc = 'createdBy_DESC',
  Pendapatan_Asc = 'pendapatan_ASC',
  Pendapatan_Desc = 'pendapatan_DESC',
  Sktm_Asc = 'sktm_ASC',
  Sktm_Desc = 'sktm_DESC',
  SktmUpload_Asc = 'sktmUpload_ASC',
  SktmUpload_Desc = 'sktmUpload_DESC',
  StmKeterangan_Asc = 'stmKeterangan_ASC',
  StmKeterangan_Desc = 'stmKeterangan_DESC',
  TanggunganAnak_Asc = 'tanggunganAnak_ASC',
  TanggunganAnak_Desc = 'tanggunganAnak_DESC',
  TanggunganFamili_Asc = 'tanggunganFamili_ASC',
  TanggunganFamili_Desc = 'tanggunganFamili_DESC',
  TanggunganLain_Asc = 'tanggunganLain_ASC',
  TanggunganLain_Desc = 'tanggunganLain_DESC',
  TanggunganPasangan_Asc = 'tanggunganPasangan_ASC',
  TanggunganPasangan_Desc = 'tanggunganPasangan_DESC',
  UpdatedAt_Asc = 'updatedAt_ASC',
  UpdatedAt_Desc = 'updatedAt_DESC',
  UpdatedBy_Asc = 'updatedBy_ASC',
  UpdatedBy_Desc = 'updatedBy_DESC',
  UsiaSaatKlien_Asc = 'usiaSaatKlien_ASC',
  UsiaSaatKlien_Desc = 'usiaSaatKlien_DESC',
}

export type ClientPreviousValues = {
  id: number;
  alamatLokasi?: Maybe<string>;
  asetGedung?: Maybe<string>;
  asetKios?: Maybe<string>;
  asetLahanGarapan?: Maybe<string>;
  asetLapak?: Maybe<string>;
  asetMobil?: Maybe<string>;
  asetMotor?: Maybe<string>;
  asetRumah?: Maybe<string>;
  asetTanah?: Maybe<string>;
  asetToko?: Maybe<string>;
  asetWarung?: Maybe<string>;
  createdAt: Date;
  createdBy?: Maybe<string>;
  pendapatan?: Maybe<string>;
  sktm: boolean;
  sktmUpload?: Maybe<string>;
  stmKeterangan?: Maybe<string>;
  tanggunganAnak?: Maybe<number>;
  tanggunganFamili?: Maybe<number>;
  tanggunganLain?: Maybe<number>;
  tanggunganPasangan?: Maybe<number>;
  updatedAt: Date;
  updatedBy?: Maybe<string>;
  usiaSaatKlien?: Maybe<number>;
};

export type ClientScalarWhereInput = {
  AND: Maybe<Array<ClientScalarWhereInput>>;
  OR: Maybe<Array<ClientScalarWhereInput>>;
  NOT: Maybe<Array<ClientScalarWhereInput>>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  alamatLokasi: Maybe<string>;
  alamatLokasi_not: Maybe<string>;
  alamatLokasi_in: Maybe<Array<string>>;
  alamatLokasi_not_in: Maybe<Array<string>>;
  alamatLokasi_lt: Maybe<string>;
  alamatLokasi_lte: Maybe<string>;
  alamatLokasi_gt: Maybe<string>;
  alamatLokasi_gte: Maybe<string>;
  alamatLokasi_contains: Maybe<string>;
  alamatLokasi_not_contains: Maybe<string>;
  alamatLokasi_starts_with: Maybe<string>;
  alamatLokasi_not_starts_with: Maybe<string>;
  alamatLokasi_ends_with: Maybe<string>;
  alamatLokasi_not_ends_with: Maybe<string>;
  asetGedung: Maybe<string>;
  asetGedung_not: Maybe<string>;
  asetGedung_in: Maybe<Array<string>>;
  asetGedung_not_in: Maybe<Array<string>>;
  asetGedung_lt: Maybe<string>;
  asetGedung_lte: Maybe<string>;
  asetGedung_gt: Maybe<string>;
  asetGedung_gte: Maybe<string>;
  asetGedung_contains: Maybe<string>;
  asetGedung_not_contains: Maybe<string>;
  asetGedung_starts_with: Maybe<string>;
  asetGedung_not_starts_with: Maybe<string>;
  asetGedung_ends_with: Maybe<string>;
  asetGedung_not_ends_with: Maybe<string>;
  asetKios: Maybe<string>;
  asetKios_not: Maybe<string>;
  asetKios_in: Maybe<Array<string>>;
  asetKios_not_in: Maybe<Array<string>>;
  asetKios_lt: Maybe<string>;
  asetKios_lte: Maybe<string>;
  asetKios_gt: Maybe<string>;
  asetKios_gte: Maybe<string>;
  asetKios_contains: Maybe<string>;
  asetKios_not_contains: Maybe<string>;
  asetKios_starts_with: Maybe<string>;
  asetKios_not_starts_with: Maybe<string>;
  asetKios_ends_with: Maybe<string>;
  asetKios_not_ends_with: Maybe<string>;
  asetLahanGarapan: Maybe<string>;
  asetLahanGarapan_not: Maybe<string>;
  asetLahanGarapan_in: Maybe<Array<string>>;
  asetLahanGarapan_not_in: Maybe<Array<string>>;
  asetLahanGarapan_lt: Maybe<string>;
  asetLahanGarapan_lte: Maybe<string>;
  asetLahanGarapan_gt: Maybe<string>;
  asetLahanGarapan_gte: Maybe<string>;
  asetLahanGarapan_contains: Maybe<string>;
  asetLahanGarapan_not_contains: Maybe<string>;
  asetLahanGarapan_starts_with: Maybe<string>;
  asetLahanGarapan_not_starts_with: Maybe<string>;
  asetLahanGarapan_ends_with: Maybe<string>;
  asetLahanGarapan_not_ends_with: Maybe<string>;
  asetLapak: Maybe<string>;
  asetLapak_not: Maybe<string>;
  asetLapak_in: Maybe<Array<string>>;
  asetLapak_not_in: Maybe<Array<string>>;
  asetLapak_lt: Maybe<string>;
  asetLapak_lte: Maybe<string>;
  asetLapak_gt: Maybe<string>;
  asetLapak_gte: Maybe<string>;
  asetLapak_contains: Maybe<string>;
  asetLapak_not_contains: Maybe<string>;
  asetLapak_starts_with: Maybe<string>;
  asetLapak_not_starts_with: Maybe<string>;
  asetLapak_ends_with: Maybe<string>;
  asetLapak_not_ends_with: Maybe<string>;
  asetMobil: Maybe<string>;
  asetMobil_not: Maybe<string>;
  asetMobil_in: Maybe<Array<string>>;
  asetMobil_not_in: Maybe<Array<string>>;
  asetMobil_lt: Maybe<string>;
  asetMobil_lte: Maybe<string>;
  asetMobil_gt: Maybe<string>;
  asetMobil_gte: Maybe<string>;
  asetMobil_contains: Maybe<string>;
  asetMobil_not_contains: Maybe<string>;
  asetMobil_starts_with: Maybe<string>;
  asetMobil_not_starts_with: Maybe<string>;
  asetMobil_ends_with: Maybe<string>;
  asetMobil_not_ends_with: Maybe<string>;
  asetMotor: Maybe<string>;
  asetMotor_not: Maybe<string>;
  asetMotor_in: Maybe<Array<string>>;
  asetMotor_not_in: Maybe<Array<string>>;
  asetMotor_lt: Maybe<string>;
  asetMotor_lte: Maybe<string>;
  asetMotor_gt: Maybe<string>;
  asetMotor_gte: Maybe<string>;
  asetMotor_contains: Maybe<string>;
  asetMotor_not_contains: Maybe<string>;
  asetMotor_starts_with: Maybe<string>;
  asetMotor_not_starts_with: Maybe<string>;
  asetMotor_ends_with: Maybe<string>;
  asetMotor_not_ends_with: Maybe<string>;
  asetRumah: Maybe<string>;
  asetRumah_not: Maybe<string>;
  asetRumah_in: Maybe<Array<string>>;
  asetRumah_not_in: Maybe<Array<string>>;
  asetRumah_lt: Maybe<string>;
  asetRumah_lte: Maybe<string>;
  asetRumah_gt: Maybe<string>;
  asetRumah_gte: Maybe<string>;
  asetRumah_contains: Maybe<string>;
  asetRumah_not_contains: Maybe<string>;
  asetRumah_starts_with: Maybe<string>;
  asetRumah_not_starts_with: Maybe<string>;
  asetRumah_ends_with: Maybe<string>;
  asetRumah_not_ends_with: Maybe<string>;
  asetTanah: Maybe<string>;
  asetTanah_not: Maybe<string>;
  asetTanah_in: Maybe<Array<string>>;
  asetTanah_not_in: Maybe<Array<string>>;
  asetTanah_lt: Maybe<string>;
  asetTanah_lte: Maybe<string>;
  asetTanah_gt: Maybe<string>;
  asetTanah_gte: Maybe<string>;
  asetTanah_contains: Maybe<string>;
  asetTanah_not_contains: Maybe<string>;
  asetTanah_starts_with: Maybe<string>;
  asetTanah_not_starts_with: Maybe<string>;
  asetTanah_ends_with: Maybe<string>;
  asetTanah_not_ends_with: Maybe<string>;
  asetToko: Maybe<string>;
  asetToko_not: Maybe<string>;
  asetToko_in: Maybe<Array<string>>;
  asetToko_not_in: Maybe<Array<string>>;
  asetToko_lt: Maybe<string>;
  asetToko_lte: Maybe<string>;
  asetToko_gt: Maybe<string>;
  asetToko_gte: Maybe<string>;
  asetToko_contains: Maybe<string>;
  asetToko_not_contains: Maybe<string>;
  asetToko_starts_with: Maybe<string>;
  asetToko_not_starts_with: Maybe<string>;
  asetToko_ends_with: Maybe<string>;
  asetToko_not_ends_with: Maybe<string>;
  asetWarung: Maybe<string>;
  asetWarung_not: Maybe<string>;
  asetWarung_in: Maybe<Array<string>>;
  asetWarung_not_in: Maybe<Array<string>>;
  asetWarung_lt: Maybe<string>;
  asetWarung_lte: Maybe<string>;
  asetWarung_gt: Maybe<string>;
  asetWarung_gte: Maybe<string>;
  asetWarung_contains: Maybe<string>;
  asetWarung_not_contains: Maybe<string>;
  asetWarung_starts_with: Maybe<string>;
  asetWarung_not_starts_with: Maybe<string>;
  asetWarung_ends_with: Maybe<string>;
  asetWarung_not_ends_with: Maybe<string>;
  createdAt: Maybe<Date>;
  createdAt_not: Maybe<Date>;
  createdAt_in: Maybe<Array<Date>>;
  createdAt_not_in: Maybe<Array<Date>>;
  createdAt_lt: Maybe<Date>;
  createdAt_lte: Maybe<Date>;
  createdAt_gt: Maybe<Date>;
  createdAt_gte: Maybe<Date>;
  createdBy: Maybe<string>;
  createdBy_not: Maybe<string>;
  createdBy_in: Maybe<Array<string>>;
  createdBy_not_in: Maybe<Array<string>>;
  createdBy_lt: Maybe<string>;
  createdBy_lte: Maybe<string>;
  createdBy_gt: Maybe<string>;
  createdBy_gte: Maybe<string>;
  createdBy_contains: Maybe<string>;
  createdBy_not_contains: Maybe<string>;
  createdBy_starts_with: Maybe<string>;
  createdBy_not_starts_with: Maybe<string>;
  createdBy_ends_with: Maybe<string>;
  createdBy_not_ends_with: Maybe<string>;
  pendapatan: Maybe<string>;
  pendapatan_not: Maybe<string>;
  pendapatan_in: Maybe<Array<string>>;
  pendapatan_not_in: Maybe<Array<string>>;
  pendapatan_lt: Maybe<string>;
  pendapatan_lte: Maybe<string>;
  pendapatan_gt: Maybe<string>;
  pendapatan_gte: Maybe<string>;
  pendapatan_contains: Maybe<string>;
  pendapatan_not_contains: Maybe<string>;
  pendapatan_starts_with: Maybe<string>;
  pendapatan_not_starts_with: Maybe<string>;
  pendapatan_ends_with: Maybe<string>;
  pendapatan_not_ends_with: Maybe<string>;
  sktm: Maybe<boolean>;
  sktm_not: Maybe<boolean>;
  sktmUpload: Maybe<string>;
  sktmUpload_not: Maybe<string>;
  sktmUpload_in: Maybe<Array<string>>;
  sktmUpload_not_in: Maybe<Array<string>>;
  sktmUpload_lt: Maybe<string>;
  sktmUpload_lte: Maybe<string>;
  sktmUpload_gt: Maybe<string>;
  sktmUpload_gte: Maybe<string>;
  sktmUpload_contains: Maybe<string>;
  sktmUpload_not_contains: Maybe<string>;
  sktmUpload_starts_with: Maybe<string>;
  sktmUpload_not_starts_with: Maybe<string>;
  sktmUpload_ends_with: Maybe<string>;
  sktmUpload_not_ends_with: Maybe<string>;
  stmKeterangan: Maybe<string>;
  stmKeterangan_not: Maybe<string>;
  stmKeterangan_in: Maybe<Array<string>>;
  stmKeterangan_not_in: Maybe<Array<string>>;
  stmKeterangan_lt: Maybe<string>;
  stmKeterangan_lte: Maybe<string>;
  stmKeterangan_gt: Maybe<string>;
  stmKeterangan_gte: Maybe<string>;
  stmKeterangan_contains: Maybe<string>;
  stmKeterangan_not_contains: Maybe<string>;
  stmKeterangan_starts_with: Maybe<string>;
  stmKeterangan_not_starts_with: Maybe<string>;
  stmKeterangan_ends_with: Maybe<string>;
  stmKeterangan_not_ends_with: Maybe<string>;
  tanggunganAnak: Maybe<number>;
  tanggunganAnak_not: Maybe<number>;
  tanggunganAnak_in: Maybe<Array<number>>;
  tanggunganAnak_not_in: Maybe<Array<number>>;
  tanggunganAnak_lt: Maybe<number>;
  tanggunganAnak_lte: Maybe<number>;
  tanggunganAnak_gt: Maybe<number>;
  tanggunganAnak_gte: Maybe<number>;
  tanggunganFamili: Maybe<number>;
  tanggunganFamili_not: Maybe<number>;
  tanggunganFamili_in: Maybe<Array<number>>;
  tanggunganFamili_not_in: Maybe<Array<number>>;
  tanggunganFamili_lt: Maybe<number>;
  tanggunganFamili_lte: Maybe<number>;
  tanggunganFamili_gt: Maybe<number>;
  tanggunganFamili_gte: Maybe<number>;
  tanggunganLain: Maybe<number>;
  tanggunganLain_not: Maybe<number>;
  tanggunganLain_in: Maybe<Array<number>>;
  tanggunganLain_not_in: Maybe<Array<number>>;
  tanggunganLain_lt: Maybe<number>;
  tanggunganLain_lte: Maybe<number>;
  tanggunganLain_gt: Maybe<number>;
  tanggunganLain_gte: Maybe<number>;
  tanggunganPasangan: Maybe<number>;
  tanggunganPasangan_not: Maybe<number>;
  tanggunganPasangan_in: Maybe<Array<number>>;
  tanggunganPasangan_not_in: Maybe<Array<number>>;
  tanggunganPasangan_lt: Maybe<number>;
  tanggunganPasangan_lte: Maybe<number>;
  tanggunganPasangan_gt: Maybe<number>;
  tanggunganPasangan_gte: Maybe<number>;
  updatedAt: Maybe<Date>;
  updatedAt_not: Maybe<Date>;
  updatedAt_in: Maybe<Array<Date>>;
  updatedAt_not_in: Maybe<Array<Date>>;
  updatedAt_lt: Maybe<Date>;
  updatedAt_lte: Maybe<Date>;
  updatedAt_gt: Maybe<Date>;
  updatedAt_gte: Maybe<Date>;
  updatedBy: Maybe<string>;
  updatedBy_not: Maybe<string>;
  updatedBy_in: Maybe<Array<string>>;
  updatedBy_not_in: Maybe<Array<string>>;
  updatedBy_lt: Maybe<string>;
  updatedBy_lte: Maybe<string>;
  updatedBy_gt: Maybe<string>;
  updatedBy_gte: Maybe<string>;
  updatedBy_contains: Maybe<string>;
  updatedBy_not_contains: Maybe<string>;
  updatedBy_starts_with: Maybe<string>;
  updatedBy_not_starts_with: Maybe<string>;
  updatedBy_ends_with: Maybe<string>;
  updatedBy_not_ends_with: Maybe<string>;
  usiaSaatKlien: Maybe<number>;
  usiaSaatKlien_not: Maybe<number>;
  usiaSaatKlien_in: Maybe<Array<number>>;
  usiaSaatKlien_not_in: Maybe<Array<number>>;
  usiaSaatKlien_lt: Maybe<number>;
  usiaSaatKlien_lte: Maybe<number>;
  usiaSaatKlien_gt: Maybe<number>;
  usiaSaatKlien_gte: Maybe<number>;
};

export type ClientSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<Client>;
  updatedFields?: Maybe<Array<string>>;
  previousValues?: Maybe<ClientPreviousValues>;
};

export type ClientSubscriptionWhereInput = {
  AND: Maybe<Array<ClientSubscriptionWhereInput>>;
  OR: Maybe<Array<ClientSubscriptionWhereInput>>;
  NOT: Maybe<Array<ClientSubscriptionWhereInput>>;
  mutation_in: Maybe<Array<MutationType>>;
  updatedFields_contains: Maybe<string>;
  updatedFields_contains_every: Maybe<Array<string>>;
  updatedFields_contains_some: Maybe<Array<string>>;
  node: Maybe<ClientWhereInput>;
};

export type ClientUpdateInput = {
  alamatLokasi: Maybe<string>;
  asetGedung: Maybe<string>;
  asetKios: Maybe<string>;
  asetLahanGarapan: Maybe<string>;
  asetLapak: Maybe<string>;
  asetMobil: Maybe<string>;
  asetMotor: Maybe<string>;
  asetRumah: Maybe<string>;
  asetTanah: Maybe<string>;
  asetToko: Maybe<string>;
  asetWarung: Maybe<string>;
  createdBy: Maybe<string>;
  pendapatan: Maybe<string>;
  sktm: Maybe<boolean>;
  sktmUpload: Maybe<string>;
  stmKeterangan: Maybe<string>;
  tanggunganAnak: Maybe<number>;
  tanggunganFamili: Maybe<number>;
  tanggunganLain: Maybe<number>;
  tanggunganPasangan: Maybe<number>;
  updatedBy: Maybe<string>;
  usiaSaatKlien: Maybe<number>;
  applicationId: Maybe<ApplicationUpdateOneRequiredWithoutClientsInput>;
  personId: Maybe<PersonUpdateOneRequiredWithoutClientsInput>;
  caseid: Maybe<CaseUpdateOneRequiredWithoutClientsInput>;
};

export type ClientUpdateManyDataInput = {
  alamatLokasi: Maybe<string>;
  asetGedung: Maybe<string>;
  asetKios: Maybe<string>;
  asetLahanGarapan: Maybe<string>;
  asetLapak: Maybe<string>;
  asetMobil: Maybe<string>;
  asetMotor: Maybe<string>;
  asetRumah: Maybe<string>;
  asetTanah: Maybe<string>;
  asetToko: Maybe<string>;
  asetWarung: Maybe<string>;
  createdBy: Maybe<string>;
  pendapatan: Maybe<string>;
  sktm: Maybe<boolean>;
  sktmUpload: Maybe<string>;
  stmKeterangan: Maybe<string>;
  tanggunganAnak: Maybe<number>;
  tanggunganFamili: Maybe<number>;
  tanggunganLain: Maybe<number>;
  tanggunganPasangan: Maybe<number>;
  updatedBy: Maybe<string>;
  usiaSaatKlien: Maybe<number>;
};

export type ClientUpdateManyMutationInput = {
  alamatLokasi: Maybe<string>;
  asetGedung: Maybe<string>;
  asetKios: Maybe<string>;
  asetLahanGarapan: Maybe<string>;
  asetLapak: Maybe<string>;
  asetMobil: Maybe<string>;
  asetMotor: Maybe<string>;
  asetRumah: Maybe<string>;
  asetTanah: Maybe<string>;
  asetToko: Maybe<string>;
  asetWarung: Maybe<string>;
  createdBy: Maybe<string>;
  pendapatan: Maybe<string>;
  sktm: Maybe<boolean>;
  sktmUpload: Maybe<string>;
  stmKeterangan: Maybe<string>;
  tanggunganAnak: Maybe<number>;
  tanggunganFamili: Maybe<number>;
  tanggunganLain: Maybe<number>;
  tanggunganPasangan: Maybe<number>;
  updatedBy: Maybe<string>;
  usiaSaatKlien: Maybe<number>;
};

export type ClientUpdateManyWithoutApplicationIdInput = {
  create: Maybe<Array<ClientCreateWithoutApplicationIdInput>>;
  connect: Maybe<Array<ClientWhereUniqueInput>>;
  set: Maybe<Array<ClientWhereUniqueInput>>;
  disconnect: Maybe<Array<ClientWhereUniqueInput>>;
  delete: Maybe<Array<ClientWhereUniqueInput>>;
  update: Maybe<Array<ClientUpdateWithWhereUniqueWithoutApplicationIdInput>>;
  updateMany: Maybe<Array<ClientUpdateManyWithWhereNestedInput>>;
  deleteMany: Maybe<Array<ClientScalarWhereInput>>;
  upsert: Maybe<Array<ClientUpsertWithWhereUniqueWithoutApplicationIdInput>>;
};

export type ClientUpdateManyWithoutCaseidInput = {
  create: Maybe<Array<ClientCreateWithoutCaseidInput>>;
  connect: Maybe<Array<ClientWhereUniqueInput>>;
  set: Maybe<Array<ClientWhereUniqueInput>>;
  disconnect: Maybe<Array<ClientWhereUniqueInput>>;
  delete: Maybe<Array<ClientWhereUniqueInput>>;
  update: Maybe<Array<ClientUpdateWithWhereUniqueWithoutCaseidInput>>;
  updateMany: Maybe<Array<ClientUpdateManyWithWhereNestedInput>>;
  deleteMany: Maybe<Array<ClientScalarWhereInput>>;
  upsert: Maybe<Array<ClientUpsertWithWhereUniqueWithoutCaseidInput>>;
};

export type ClientUpdateManyWithoutPersonIdInput = {
  create: Maybe<Array<ClientCreateWithoutPersonIdInput>>;
  connect: Maybe<Array<ClientWhereUniqueInput>>;
  set: Maybe<Array<ClientWhereUniqueInput>>;
  disconnect: Maybe<Array<ClientWhereUniqueInput>>;
  delete: Maybe<Array<ClientWhereUniqueInput>>;
  update: Maybe<Array<ClientUpdateWithWhereUniqueWithoutPersonIdInput>>;
  updateMany: Maybe<Array<ClientUpdateManyWithWhereNestedInput>>;
  deleteMany: Maybe<Array<ClientScalarWhereInput>>;
  upsert: Maybe<Array<ClientUpsertWithWhereUniqueWithoutPersonIdInput>>;
};

export type ClientUpdateManyWithWhereNestedInput = {
  where: ClientScalarWhereInput;
  data: ClientUpdateManyDataInput;
};

export type ClientUpdateWithoutApplicationIdDataInput = {
  alamatLokasi: Maybe<string>;
  asetGedung: Maybe<string>;
  asetKios: Maybe<string>;
  asetLahanGarapan: Maybe<string>;
  asetLapak: Maybe<string>;
  asetMobil: Maybe<string>;
  asetMotor: Maybe<string>;
  asetRumah: Maybe<string>;
  asetTanah: Maybe<string>;
  asetToko: Maybe<string>;
  asetWarung: Maybe<string>;
  createdBy: Maybe<string>;
  pendapatan: Maybe<string>;
  sktm: Maybe<boolean>;
  sktmUpload: Maybe<string>;
  stmKeterangan: Maybe<string>;
  tanggunganAnak: Maybe<number>;
  tanggunganFamili: Maybe<number>;
  tanggunganLain: Maybe<number>;
  tanggunganPasangan: Maybe<number>;
  updatedBy: Maybe<string>;
  usiaSaatKlien: Maybe<number>;
  personId: Maybe<PersonUpdateOneRequiredWithoutClientsInput>;
  caseid: Maybe<CaseUpdateOneRequiredWithoutClientsInput>;
};

export type ClientUpdateWithoutCaseidDataInput = {
  alamatLokasi: Maybe<string>;
  asetGedung: Maybe<string>;
  asetKios: Maybe<string>;
  asetLahanGarapan: Maybe<string>;
  asetLapak: Maybe<string>;
  asetMobil: Maybe<string>;
  asetMotor: Maybe<string>;
  asetRumah: Maybe<string>;
  asetTanah: Maybe<string>;
  asetToko: Maybe<string>;
  asetWarung: Maybe<string>;
  createdBy: Maybe<string>;
  pendapatan: Maybe<string>;
  sktm: Maybe<boolean>;
  sktmUpload: Maybe<string>;
  stmKeterangan: Maybe<string>;
  tanggunganAnak: Maybe<number>;
  tanggunganFamili: Maybe<number>;
  tanggunganLain: Maybe<number>;
  tanggunganPasangan: Maybe<number>;
  updatedBy: Maybe<string>;
  usiaSaatKlien: Maybe<number>;
  applicationId: Maybe<ApplicationUpdateOneRequiredWithoutClientsInput>;
  personId: Maybe<PersonUpdateOneRequiredWithoutClientsInput>;
};

export type ClientUpdateWithoutPersonIdDataInput = {
  alamatLokasi: Maybe<string>;
  asetGedung: Maybe<string>;
  asetKios: Maybe<string>;
  asetLahanGarapan: Maybe<string>;
  asetLapak: Maybe<string>;
  asetMobil: Maybe<string>;
  asetMotor: Maybe<string>;
  asetRumah: Maybe<string>;
  asetTanah: Maybe<string>;
  asetToko: Maybe<string>;
  asetWarung: Maybe<string>;
  createdBy: Maybe<string>;
  pendapatan: Maybe<string>;
  sktm: Maybe<boolean>;
  sktmUpload: Maybe<string>;
  stmKeterangan: Maybe<string>;
  tanggunganAnak: Maybe<number>;
  tanggunganFamili: Maybe<number>;
  tanggunganLain: Maybe<number>;
  tanggunganPasangan: Maybe<number>;
  updatedBy: Maybe<string>;
  usiaSaatKlien: Maybe<number>;
  applicationId: Maybe<ApplicationUpdateOneRequiredWithoutClientsInput>;
  caseid: Maybe<CaseUpdateOneRequiredWithoutClientsInput>;
};

export type ClientUpdateWithWhereUniqueWithoutApplicationIdInput = {
  where: ClientWhereUniqueInput;
  data: ClientUpdateWithoutApplicationIdDataInput;
};

export type ClientUpdateWithWhereUniqueWithoutCaseidInput = {
  where: ClientWhereUniqueInput;
  data: ClientUpdateWithoutCaseidDataInput;
};

export type ClientUpdateWithWhereUniqueWithoutPersonIdInput = {
  where: ClientWhereUniqueInput;
  data: ClientUpdateWithoutPersonIdDataInput;
};

export type ClientUpsertWithWhereUniqueWithoutApplicationIdInput = {
  where: ClientWhereUniqueInput;
  update: ClientUpdateWithoutApplicationIdDataInput;
  create: ClientCreateWithoutApplicationIdInput;
};

export type ClientUpsertWithWhereUniqueWithoutCaseidInput = {
  where: ClientWhereUniqueInput;
  update: ClientUpdateWithoutCaseidDataInput;
  create: ClientCreateWithoutCaseidInput;
};

export type ClientUpsertWithWhereUniqueWithoutPersonIdInput = {
  where: ClientWhereUniqueInput;
  update: ClientUpdateWithoutPersonIdDataInput;
  create: ClientCreateWithoutPersonIdInput;
};

export type ClientWhereInput = {
  AND: Maybe<Array<ClientWhereInput>>;
  OR: Maybe<Array<ClientWhereInput>>;
  NOT: Maybe<Array<ClientWhereInput>>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  alamatLokasi: Maybe<string>;
  alamatLokasi_not: Maybe<string>;
  alamatLokasi_in: Maybe<Array<string>>;
  alamatLokasi_not_in: Maybe<Array<string>>;
  alamatLokasi_lt: Maybe<string>;
  alamatLokasi_lte: Maybe<string>;
  alamatLokasi_gt: Maybe<string>;
  alamatLokasi_gte: Maybe<string>;
  alamatLokasi_contains: Maybe<string>;
  alamatLokasi_not_contains: Maybe<string>;
  alamatLokasi_starts_with: Maybe<string>;
  alamatLokasi_not_starts_with: Maybe<string>;
  alamatLokasi_ends_with: Maybe<string>;
  alamatLokasi_not_ends_with: Maybe<string>;
  asetGedung: Maybe<string>;
  asetGedung_not: Maybe<string>;
  asetGedung_in: Maybe<Array<string>>;
  asetGedung_not_in: Maybe<Array<string>>;
  asetGedung_lt: Maybe<string>;
  asetGedung_lte: Maybe<string>;
  asetGedung_gt: Maybe<string>;
  asetGedung_gte: Maybe<string>;
  asetGedung_contains: Maybe<string>;
  asetGedung_not_contains: Maybe<string>;
  asetGedung_starts_with: Maybe<string>;
  asetGedung_not_starts_with: Maybe<string>;
  asetGedung_ends_with: Maybe<string>;
  asetGedung_not_ends_with: Maybe<string>;
  asetKios: Maybe<string>;
  asetKios_not: Maybe<string>;
  asetKios_in: Maybe<Array<string>>;
  asetKios_not_in: Maybe<Array<string>>;
  asetKios_lt: Maybe<string>;
  asetKios_lte: Maybe<string>;
  asetKios_gt: Maybe<string>;
  asetKios_gte: Maybe<string>;
  asetKios_contains: Maybe<string>;
  asetKios_not_contains: Maybe<string>;
  asetKios_starts_with: Maybe<string>;
  asetKios_not_starts_with: Maybe<string>;
  asetKios_ends_with: Maybe<string>;
  asetKios_not_ends_with: Maybe<string>;
  asetLahanGarapan: Maybe<string>;
  asetLahanGarapan_not: Maybe<string>;
  asetLahanGarapan_in: Maybe<Array<string>>;
  asetLahanGarapan_not_in: Maybe<Array<string>>;
  asetLahanGarapan_lt: Maybe<string>;
  asetLahanGarapan_lte: Maybe<string>;
  asetLahanGarapan_gt: Maybe<string>;
  asetLahanGarapan_gte: Maybe<string>;
  asetLahanGarapan_contains: Maybe<string>;
  asetLahanGarapan_not_contains: Maybe<string>;
  asetLahanGarapan_starts_with: Maybe<string>;
  asetLahanGarapan_not_starts_with: Maybe<string>;
  asetLahanGarapan_ends_with: Maybe<string>;
  asetLahanGarapan_not_ends_with: Maybe<string>;
  asetLapak: Maybe<string>;
  asetLapak_not: Maybe<string>;
  asetLapak_in: Maybe<Array<string>>;
  asetLapak_not_in: Maybe<Array<string>>;
  asetLapak_lt: Maybe<string>;
  asetLapak_lte: Maybe<string>;
  asetLapak_gt: Maybe<string>;
  asetLapak_gte: Maybe<string>;
  asetLapak_contains: Maybe<string>;
  asetLapak_not_contains: Maybe<string>;
  asetLapak_starts_with: Maybe<string>;
  asetLapak_not_starts_with: Maybe<string>;
  asetLapak_ends_with: Maybe<string>;
  asetLapak_not_ends_with: Maybe<string>;
  asetMobil: Maybe<string>;
  asetMobil_not: Maybe<string>;
  asetMobil_in: Maybe<Array<string>>;
  asetMobil_not_in: Maybe<Array<string>>;
  asetMobil_lt: Maybe<string>;
  asetMobil_lte: Maybe<string>;
  asetMobil_gt: Maybe<string>;
  asetMobil_gte: Maybe<string>;
  asetMobil_contains: Maybe<string>;
  asetMobil_not_contains: Maybe<string>;
  asetMobil_starts_with: Maybe<string>;
  asetMobil_not_starts_with: Maybe<string>;
  asetMobil_ends_with: Maybe<string>;
  asetMobil_not_ends_with: Maybe<string>;
  asetMotor: Maybe<string>;
  asetMotor_not: Maybe<string>;
  asetMotor_in: Maybe<Array<string>>;
  asetMotor_not_in: Maybe<Array<string>>;
  asetMotor_lt: Maybe<string>;
  asetMotor_lte: Maybe<string>;
  asetMotor_gt: Maybe<string>;
  asetMotor_gte: Maybe<string>;
  asetMotor_contains: Maybe<string>;
  asetMotor_not_contains: Maybe<string>;
  asetMotor_starts_with: Maybe<string>;
  asetMotor_not_starts_with: Maybe<string>;
  asetMotor_ends_with: Maybe<string>;
  asetMotor_not_ends_with: Maybe<string>;
  asetRumah: Maybe<string>;
  asetRumah_not: Maybe<string>;
  asetRumah_in: Maybe<Array<string>>;
  asetRumah_not_in: Maybe<Array<string>>;
  asetRumah_lt: Maybe<string>;
  asetRumah_lte: Maybe<string>;
  asetRumah_gt: Maybe<string>;
  asetRumah_gte: Maybe<string>;
  asetRumah_contains: Maybe<string>;
  asetRumah_not_contains: Maybe<string>;
  asetRumah_starts_with: Maybe<string>;
  asetRumah_not_starts_with: Maybe<string>;
  asetRumah_ends_with: Maybe<string>;
  asetRumah_not_ends_with: Maybe<string>;
  asetTanah: Maybe<string>;
  asetTanah_not: Maybe<string>;
  asetTanah_in: Maybe<Array<string>>;
  asetTanah_not_in: Maybe<Array<string>>;
  asetTanah_lt: Maybe<string>;
  asetTanah_lte: Maybe<string>;
  asetTanah_gt: Maybe<string>;
  asetTanah_gte: Maybe<string>;
  asetTanah_contains: Maybe<string>;
  asetTanah_not_contains: Maybe<string>;
  asetTanah_starts_with: Maybe<string>;
  asetTanah_not_starts_with: Maybe<string>;
  asetTanah_ends_with: Maybe<string>;
  asetTanah_not_ends_with: Maybe<string>;
  asetToko: Maybe<string>;
  asetToko_not: Maybe<string>;
  asetToko_in: Maybe<Array<string>>;
  asetToko_not_in: Maybe<Array<string>>;
  asetToko_lt: Maybe<string>;
  asetToko_lte: Maybe<string>;
  asetToko_gt: Maybe<string>;
  asetToko_gte: Maybe<string>;
  asetToko_contains: Maybe<string>;
  asetToko_not_contains: Maybe<string>;
  asetToko_starts_with: Maybe<string>;
  asetToko_not_starts_with: Maybe<string>;
  asetToko_ends_with: Maybe<string>;
  asetToko_not_ends_with: Maybe<string>;
  asetWarung: Maybe<string>;
  asetWarung_not: Maybe<string>;
  asetWarung_in: Maybe<Array<string>>;
  asetWarung_not_in: Maybe<Array<string>>;
  asetWarung_lt: Maybe<string>;
  asetWarung_lte: Maybe<string>;
  asetWarung_gt: Maybe<string>;
  asetWarung_gte: Maybe<string>;
  asetWarung_contains: Maybe<string>;
  asetWarung_not_contains: Maybe<string>;
  asetWarung_starts_with: Maybe<string>;
  asetWarung_not_starts_with: Maybe<string>;
  asetWarung_ends_with: Maybe<string>;
  asetWarung_not_ends_with: Maybe<string>;
  createdAt: Maybe<Date>;
  createdAt_not: Maybe<Date>;
  createdAt_in: Maybe<Array<Date>>;
  createdAt_not_in: Maybe<Array<Date>>;
  createdAt_lt: Maybe<Date>;
  createdAt_lte: Maybe<Date>;
  createdAt_gt: Maybe<Date>;
  createdAt_gte: Maybe<Date>;
  createdBy: Maybe<string>;
  createdBy_not: Maybe<string>;
  createdBy_in: Maybe<Array<string>>;
  createdBy_not_in: Maybe<Array<string>>;
  createdBy_lt: Maybe<string>;
  createdBy_lte: Maybe<string>;
  createdBy_gt: Maybe<string>;
  createdBy_gte: Maybe<string>;
  createdBy_contains: Maybe<string>;
  createdBy_not_contains: Maybe<string>;
  createdBy_starts_with: Maybe<string>;
  createdBy_not_starts_with: Maybe<string>;
  createdBy_ends_with: Maybe<string>;
  createdBy_not_ends_with: Maybe<string>;
  pendapatan: Maybe<string>;
  pendapatan_not: Maybe<string>;
  pendapatan_in: Maybe<Array<string>>;
  pendapatan_not_in: Maybe<Array<string>>;
  pendapatan_lt: Maybe<string>;
  pendapatan_lte: Maybe<string>;
  pendapatan_gt: Maybe<string>;
  pendapatan_gte: Maybe<string>;
  pendapatan_contains: Maybe<string>;
  pendapatan_not_contains: Maybe<string>;
  pendapatan_starts_with: Maybe<string>;
  pendapatan_not_starts_with: Maybe<string>;
  pendapatan_ends_with: Maybe<string>;
  pendapatan_not_ends_with: Maybe<string>;
  sktm: Maybe<boolean>;
  sktm_not: Maybe<boolean>;
  sktmUpload: Maybe<string>;
  sktmUpload_not: Maybe<string>;
  sktmUpload_in: Maybe<Array<string>>;
  sktmUpload_not_in: Maybe<Array<string>>;
  sktmUpload_lt: Maybe<string>;
  sktmUpload_lte: Maybe<string>;
  sktmUpload_gt: Maybe<string>;
  sktmUpload_gte: Maybe<string>;
  sktmUpload_contains: Maybe<string>;
  sktmUpload_not_contains: Maybe<string>;
  sktmUpload_starts_with: Maybe<string>;
  sktmUpload_not_starts_with: Maybe<string>;
  sktmUpload_ends_with: Maybe<string>;
  sktmUpload_not_ends_with: Maybe<string>;
  stmKeterangan: Maybe<string>;
  stmKeterangan_not: Maybe<string>;
  stmKeterangan_in: Maybe<Array<string>>;
  stmKeterangan_not_in: Maybe<Array<string>>;
  stmKeterangan_lt: Maybe<string>;
  stmKeterangan_lte: Maybe<string>;
  stmKeterangan_gt: Maybe<string>;
  stmKeterangan_gte: Maybe<string>;
  stmKeterangan_contains: Maybe<string>;
  stmKeterangan_not_contains: Maybe<string>;
  stmKeterangan_starts_with: Maybe<string>;
  stmKeterangan_not_starts_with: Maybe<string>;
  stmKeterangan_ends_with: Maybe<string>;
  stmKeterangan_not_ends_with: Maybe<string>;
  tanggunganAnak: Maybe<number>;
  tanggunganAnak_not: Maybe<number>;
  tanggunganAnak_in: Maybe<Array<number>>;
  tanggunganAnak_not_in: Maybe<Array<number>>;
  tanggunganAnak_lt: Maybe<number>;
  tanggunganAnak_lte: Maybe<number>;
  tanggunganAnak_gt: Maybe<number>;
  tanggunganAnak_gte: Maybe<number>;
  tanggunganFamili: Maybe<number>;
  tanggunganFamili_not: Maybe<number>;
  tanggunganFamili_in: Maybe<Array<number>>;
  tanggunganFamili_not_in: Maybe<Array<number>>;
  tanggunganFamili_lt: Maybe<number>;
  tanggunganFamili_lte: Maybe<number>;
  tanggunganFamili_gt: Maybe<number>;
  tanggunganFamili_gte: Maybe<number>;
  tanggunganLain: Maybe<number>;
  tanggunganLain_not: Maybe<number>;
  tanggunganLain_in: Maybe<Array<number>>;
  tanggunganLain_not_in: Maybe<Array<number>>;
  tanggunganLain_lt: Maybe<number>;
  tanggunganLain_lte: Maybe<number>;
  tanggunganLain_gt: Maybe<number>;
  tanggunganLain_gte: Maybe<number>;
  tanggunganPasangan: Maybe<number>;
  tanggunganPasangan_not: Maybe<number>;
  tanggunganPasangan_in: Maybe<Array<number>>;
  tanggunganPasangan_not_in: Maybe<Array<number>>;
  tanggunganPasangan_lt: Maybe<number>;
  tanggunganPasangan_lte: Maybe<number>;
  tanggunganPasangan_gt: Maybe<number>;
  tanggunganPasangan_gte: Maybe<number>;
  updatedAt: Maybe<Date>;
  updatedAt_not: Maybe<Date>;
  updatedAt_in: Maybe<Array<Date>>;
  updatedAt_not_in: Maybe<Array<Date>>;
  updatedAt_lt: Maybe<Date>;
  updatedAt_lte: Maybe<Date>;
  updatedAt_gt: Maybe<Date>;
  updatedAt_gte: Maybe<Date>;
  updatedBy: Maybe<string>;
  updatedBy_not: Maybe<string>;
  updatedBy_in: Maybe<Array<string>>;
  updatedBy_not_in: Maybe<Array<string>>;
  updatedBy_lt: Maybe<string>;
  updatedBy_lte: Maybe<string>;
  updatedBy_gt: Maybe<string>;
  updatedBy_gte: Maybe<string>;
  updatedBy_contains: Maybe<string>;
  updatedBy_not_contains: Maybe<string>;
  updatedBy_starts_with: Maybe<string>;
  updatedBy_not_starts_with: Maybe<string>;
  updatedBy_ends_with: Maybe<string>;
  updatedBy_not_ends_with: Maybe<string>;
  usiaSaatKlien: Maybe<number>;
  usiaSaatKlien_not: Maybe<number>;
  usiaSaatKlien_in: Maybe<Array<number>>;
  usiaSaatKlien_not_in: Maybe<Array<number>>;
  usiaSaatKlien_lt: Maybe<number>;
  usiaSaatKlien_lte: Maybe<number>;
  usiaSaatKlien_gt: Maybe<number>;
  usiaSaatKlien_gte: Maybe<number>;
  applicationId: Maybe<ApplicationWhereInput>;
  personId: Maybe<PersonWhereInput>;
  caseid: Maybe<CaseWhereInput>;
};

export type ClientWhereUniqueInput = {
  id: Maybe<number>;
};

export type DaftarPengacara = {
  ID: number;
  jabatan?: Maybe<string>;
  namaLengkap?: Maybe<string>;
  sembunyikan: boolean;
};

export type DaftarPengacaraConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<DaftarPengacaraEdge>>;
  aggregate: AggregateDaftarPengacara;
};

export type DaftarPengacaraCreateInput = {
  jabatan: Maybe<string>;
  namaLengkap: Maybe<string>;
  sembunyikan: boolean;
};

export type DaftarPengacaraEdge = {
  node: DaftarPengacara;
  cursor: string;
};

export enum DaftarPengacaraOrderByInput {
  Id_Asc = 'ID_ASC',
  Id_Desc = 'ID_DESC',
  Jabatan_Asc = 'jabatan_ASC',
  Jabatan_Desc = 'jabatan_DESC',
  NamaLengkap_Asc = 'namaLengkap_ASC',
  NamaLengkap_Desc = 'namaLengkap_DESC',
  Sembunyikan_Asc = 'sembunyikan_ASC',
  Sembunyikan_Desc = 'sembunyikan_DESC',
}

export type DaftarPengacaraPreviousValues = {
  ID: number;
  jabatan?: Maybe<string>;
  namaLengkap?: Maybe<string>;
  sembunyikan: boolean;
};

export type DaftarPengacaraSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<DaftarPengacara>;
  updatedFields?: Maybe<Array<string>>;
  previousValues?: Maybe<DaftarPengacaraPreviousValues>;
};

export type DaftarPengacaraSubscriptionWhereInput = {
  AND: Maybe<Array<DaftarPengacaraSubscriptionWhereInput>>;
  OR: Maybe<Array<DaftarPengacaraSubscriptionWhereInput>>;
  NOT: Maybe<Array<DaftarPengacaraSubscriptionWhereInput>>;
  mutation_in: Maybe<Array<MutationType>>;
  updatedFields_contains: Maybe<string>;
  updatedFields_contains_every: Maybe<Array<string>>;
  updatedFields_contains_some: Maybe<Array<string>>;
  node: Maybe<DaftarPengacaraWhereInput>;
};

export type DaftarPengacaraUpdateInput = {
  jabatan: Maybe<string>;
  namaLengkap: Maybe<string>;
  sembunyikan: Maybe<boolean>;
};

export type DaftarPengacaraUpdateManyMutationInput = {
  jabatan: Maybe<string>;
  namaLengkap: Maybe<string>;
  sembunyikan: Maybe<boolean>;
};

export type DaftarPengacaraWhereInput = {
  AND: Maybe<Array<DaftarPengacaraWhereInput>>;
  OR: Maybe<Array<DaftarPengacaraWhereInput>>;
  NOT: Maybe<Array<DaftarPengacaraWhereInput>>;
  ID: Maybe<number>;
  ID_not: Maybe<number>;
  ID_in: Maybe<Array<number>>;
  ID_not_in: Maybe<Array<number>>;
  ID_lt: Maybe<number>;
  ID_lte: Maybe<number>;
  ID_gt: Maybe<number>;
  ID_gte: Maybe<number>;
  jabatan: Maybe<string>;
  jabatan_not: Maybe<string>;
  jabatan_in: Maybe<Array<string>>;
  jabatan_not_in: Maybe<Array<string>>;
  jabatan_lt: Maybe<string>;
  jabatan_lte: Maybe<string>;
  jabatan_gt: Maybe<string>;
  jabatan_gte: Maybe<string>;
  jabatan_contains: Maybe<string>;
  jabatan_not_contains: Maybe<string>;
  jabatan_starts_with: Maybe<string>;
  jabatan_not_starts_with: Maybe<string>;
  jabatan_ends_with: Maybe<string>;
  jabatan_not_ends_with: Maybe<string>;
  namaLengkap: Maybe<string>;
  namaLengkap_not: Maybe<string>;
  namaLengkap_in: Maybe<Array<string>>;
  namaLengkap_not_in: Maybe<Array<string>>;
  namaLengkap_lt: Maybe<string>;
  namaLengkap_lte: Maybe<string>;
  namaLengkap_gt: Maybe<string>;
  namaLengkap_gte: Maybe<string>;
  namaLengkap_contains: Maybe<string>;
  namaLengkap_not_contains: Maybe<string>;
  namaLengkap_starts_with: Maybe<string>;
  namaLengkap_not_starts_with: Maybe<string>;
  namaLengkap_ends_with: Maybe<string>;
  namaLengkap_not_ends_with: Maybe<string>;
  sembunyikan: Maybe<boolean>;
  sembunyikan_not: Maybe<boolean>;
};

export type DaftarPengacaraWhereUniqueInput = {
  ID: Maybe<number>;
};

export type DataDict = {
  fieldNumber: string;
  dataType?: Maybe<string>;
  entity?: Maybe<string>;
  fieldName?: Maybe<string>;
  fieldType?: Maybe<string>;
  isRepeat?: Maybe<string>;
  linkField?: Maybe<string>;
  linkTable?: Maybe<string>;
  listCode?: Maybe<string>;
  required?: Maybe<string>;
  validation?: Maybe<string>;
  visibleSelectQuery?: Maybe<string>;
  locals?: Maybe<Array<DataDictLocal>>;
};

export type DataDictLocalsArgs = {
  where?: Maybe<DataDictLocalWhereInput>;
  orderBy?: Maybe<DataDictLocalOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type DataDictConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<DataDictEdge>>;
  aggregate: AggregateDataDict;
};

export type DataDictCreateInput = {
  fieldNumber: Maybe<string>;
  dataType: Maybe<string>;
  entity: Maybe<string>;
  fieldName: Maybe<string>;
  fieldType: Maybe<string>;
  isRepeat: Maybe<string>;
  linkField: Maybe<string>;
  linkTable: Maybe<string>;
  listCode: Maybe<string>;
  required: Maybe<string>;
  validation: Maybe<string>;
  visibleSelectQuery: Maybe<string>;
  locals: Maybe<DataDictLocalCreateManyWithoutFieldNumberInput>;
};

export type DataDictCreateOneWithoutLocalsInput = {
  create: Maybe<DataDictCreateWithoutLocalsInput>;
  connect: Maybe<DataDictWhereUniqueInput>;
};

export type DataDictCreateWithoutLocalsInput = {
  fieldNumber: Maybe<string>;
  dataType: Maybe<string>;
  entity: Maybe<string>;
  fieldName: Maybe<string>;
  fieldType: Maybe<string>;
  isRepeat: Maybe<string>;
  linkField: Maybe<string>;
  linkTable: Maybe<string>;
  listCode: Maybe<string>;
  required: Maybe<string>;
  validation: Maybe<string>;
  visibleSelectQuery: Maybe<string>;
};

export type DataDictEdge = {
  node: DataDict;
  cursor: string;
};

export type DataDictLocal = {
  id: number;
  fieldNumber: DataDict;
  label?: Maybe<string>;
  lang?: Maybe<string>;
};

export type DataDictLocalConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<DataDictLocalEdge>>;
  aggregate: AggregateDataDictLocal;
};

export type DataDictLocalCreateInput = {
  label: Maybe<string>;
  lang: Maybe<string>;
  fieldNumber: DataDictCreateOneWithoutLocalsInput;
};

export type DataDictLocalCreateManyWithoutFieldNumberInput = {
  create: Maybe<Array<DataDictLocalCreateWithoutFieldNumberInput>>;
  connect: Maybe<Array<DataDictLocalWhereUniqueInput>>;
};

export type DataDictLocalCreateWithoutFieldNumberInput = {
  label: Maybe<string>;
  lang: Maybe<string>;
};

export type DataDictLocalEdge = {
  node: DataDictLocal;
  cursor: string;
};

export enum DataDictLocalOrderByInput {
  Id_Asc = 'id_ASC',
  Id_Desc = 'id_DESC',
  Label_Asc = 'label_ASC',
  Label_Desc = 'label_DESC',
  Lang_Asc = 'lang_ASC',
  Lang_Desc = 'lang_DESC',
}

export type DataDictLocalPreviousValues = {
  id: number;
  label?: Maybe<string>;
  lang?: Maybe<string>;
};

export type DataDictLocalScalarWhereInput = {
  AND: Maybe<Array<DataDictLocalScalarWhereInput>>;
  OR: Maybe<Array<DataDictLocalScalarWhereInput>>;
  NOT: Maybe<Array<DataDictLocalScalarWhereInput>>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  label: Maybe<string>;
  label_not: Maybe<string>;
  label_in: Maybe<Array<string>>;
  label_not_in: Maybe<Array<string>>;
  label_lt: Maybe<string>;
  label_lte: Maybe<string>;
  label_gt: Maybe<string>;
  label_gte: Maybe<string>;
  label_contains: Maybe<string>;
  label_not_contains: Maybe<string>;
  label_starts_with: Maybe<string>;
  label_not_starts_with: Maybe<string>;
  label_ends_with: Maybe<string>;
  label_not_ends_with: Maybe<string>;
  lang: Maybe<string>;
  lang_not: Maybe<string>;
  lang_in: Maybe<Array<string>>;
  lang_not_in: Maybe<Array<string>>;
  lang_lt: Maybe<string>;
  lang_lte: Maybe<string>;
  lang_gt: Maybe<string>;
  lang_gte: Maybe<string>;
  lang_contains: Maybe<string>;
  lang_not_contains: Maybe<string>;
  lang_starts_with: Maybe<string>;
  lang_not_starts_with: Maybe<string>;
  lang_ends_with: Maybe<string>;
  lang_not_ends_with: Maybe<string>;
};

export type DataDictLocalSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<DataDictLocal>;
  updatedFields?: Maybe<Array<string>>;
  previousValues?: Maybe<DataDictLocalPreviousValues>;
};

export type DataDictLocalSubscriptionWhereInput = {
  AND: Maybe<Array<DataDictLocalSubscriptionWhereInput>>;
  OR: Maybe<Array<DataDictLocalSubscriptionWhereInput>>;
  NOT: Maybe<Array<DataDictLocalSubscriptionWhereInput>>;
  mutation_in: Maybe<Array<MutationType>>;
  updatedFields_contains: Maybe<string>;
  updatedFields_contains_every: Maybe<Array<string>>;
  updatedFields_contains_some: Maybe<Array<string>>;
  node: Maybe<DataDictLocalWhereInput>;
};

export type DataDictLocalUpdateInput = {
  label: Maybe<string>;
  lang: Maybe<string>;
  fieldNumber: Maybe<DataDictUpdateOneRequiredWithoutLocalsInput>;
};

export type DataDictLocalUpdateManyDataInput = {
  label: Maybe<string>;
  lang: Maybe<string>;
};

export type DataDictLocalUpdateManyMutationInput = {
  label: Maybe<string>;
  lang: Maybe<string>;
};

export type DataDictLocalUpdateManyWithoutFieldNumberInput = {
  create: Maybe<Array<DataDictLocalCreateWithoutFieldNumberInput>>;
  connect: Maybe<Array<DataDictLocalWhereUniqueInput>>;
  set: Maybe<Array<DataDictLocalWhereUniqueInput>>;
  disconnect: Maybe<Array<DataDictLocalWhereUniqueInput>>;
  delete: Maybe<Array<DataDictLocalWhereUniqueInput>>;
  update: Maybe<Array<DataDictLocalUpdateWithWhereUniqueWithoutFieldNumberInput>>;
  updateMany: Maybe<Array<DataDictLocalUpdateManyWithWhereNestedInput>>;
  deleteMany: Maybe<Array<DataDictLocalScalarWhereInput>>;
  upsert: Maybe<Array<DataDictLocalUpsertWithWhereUniqueWithoutFieldNumberInput>>;
};

export type DataDictLocalUpdateManyWithWhereNestedInput = {
  where: DataDictLocalScalarWhereInput;
  data: DataDictLocalUpdateManyDataInput;
};

export type DataDictLocalUpdateWithoutFieldNumberDataInput = {
  label: Maybe<string>;
  lang: Maybe<string>;
};

export type DataDictLocalUpdateWithWhereUniqueWithoutFieldNumberInput = {
  where: DataDictLocalWhereUniqueInput;
  data: DataDictLocalUpdateWithoutFieldNumberDataInput;
};

export type DataDictLocalUpsertWithWhereUniqueWithoutFieldNumberInput = {
  where: DataDictLocalWhereUniqueInput;
  update: DataDictLocalUpdateWithoutFieldNumberDataInput;
  create: DataDictLocalCreateWithoutFieldNumberInput;
};

export type DataDictLocalWhereInput = {
  AND: Maybe<Array<DataDictLocalWhereInput>>;
  OR: Maybe<Array<DataDictLocalWhereInput>>;
  NOT: Maybe<Array<DataDictLocalWhereInput>>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  label: Maybe<string>;
  label_not: Maybe<string>;
  label_in: Maybe<Array<string>>;
  label_not_in: Maybe<Array<string>>;
  label_lt: Maybe<string>;
  label_lte: Maybe<string>;
  label_gt: Maybe<string>;
  label_gte: Maybe<string>;
  label_contains: Maybe<string>;
  label_not_contains: Maybe<string>;
  label_starts_with: Maybe<string>;
  label_not_starts_with: Maybe<string>;
  label_ends_with: Maybe<string>;
  label_not_ends_with: Maybe<string>;
  lang: Maybe<string>;
  lang_not: Maybe<string>;
  lang_in: Maybe<Array<string>>;
  lang_not_in: Maybe<Array<string>>;
  lang_lt: Maybe<string>;
  lang_lte: Maybe<string>;
  lang_gt: Maybe<string>;
  lang_gte: Maybe<string>;
  lang_contains: Maybe<string>;
  lang_not_contains: Maybe<string>;
  lang_starts_with: Maybe<string>;
  lang_not_starts_with: Maybe<string>;
  lang_ends_with: Maybe<string>;
  lang_not_ends_with: Maybe<string>;
  fieldNumber: Maybe<DataDictWhereInput>;
};

export type DataDictLocalWhereUniqueInput = {
  id: Maybe<number>;
};

export enum DataDictOrderByInput {
  FieldNumber_Asc = 'fieldNumber_ASC',
  FieldNumber_Desc = 'fieldNumber_DESC',
  DataType_Asc = 'dataType_ASC',
  DataType_Desc = 'dataType_DESC',
  Entity_Asc = 'entity_ASC',
  Entity_Desc = 'entity_DESC',
  FieldName_Asc = 'fieldName_ASC',
  FieldName_Desc = 'fieldName_DESC',
  FieldType_Asc = 'fieldType_ASC',
  FieldType_Desc = 'fieldType_DESC',
  IsRepeat_Asc = 'isRepeat_ASC',
  IsRepeat_Desc = 'isRepeat_DESC',
  LinkField_Asc = 'linkField_ASC',
  LinkField_Desc = 'linkField_DESC',
  LinkTable_Asc = 'linkTable_ASC',
  LinkTable_Desc = 'linkTable_DESC',
  ListCode_Asc = 'listCode_ASC',
  ListCode_Desc = 'listCode_DESC',
  Required_Asc = 'required_ASC',
  Required_Desc = 'required_DESC',
  Validation_Asc = 'validation_ASC',
  Validation_Desc = 'validation_DESC',
  VisibleSelectQuery_Asc = 'visibleSelectQuery_ASC',
  VisibleSelectQuery_Desc = 'visibleSelectQuery_DESC',
}

export type DataDictPreviousValues = {
  fieldNumber: string;
  dataType?: Maybe<string>;
  entity?: Maybe<string>;
  fieldName?: Maybe<string>;
  fieldType?: Maybe<string>;
  isRepeat?: Maybe<string>;
  linkField?: Maybe<string>;
  linkTable?: Maybe<string>;
  listCode?: Maybe<string>;
  required?: Maybe<string>;
  validation?: Maybe<string>;
  visibleSelectQuery?: Maybe<string>;
};

export type DataDictSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<DataDict>;
  updatedFields?: Maybe<Array<string>>;
  previousValues?: Maybe<DataDictPreviousValues>;
};

export type DataDictSubscriptionWhereInput = {
  AND: Maybe<Array<DataDictSubscriptionWhereInput>>;
  OR: Maybe<Array<DataDictSubscriptionWhereInput>>;
  NOT: Maybe<Array<DataDictSubscriptionWhereInput>>;
  mutation_in: Maybe<Array<MutationType>>;
  updatedFields_contains: Maybe<string>;
  updatedFields_contains_every: Maybe<Array<string>>;
  updatedFields_contains_some: Maybe<Array<string>>;
  node: Maybe<DataDictWhereInput>;
};

export type DataDictUpdateInput = {
  dataType: Maybe<string>;
  entity: Maybe<string>;
  fieldName: Maybe<string>;
  fieldType: Maybe<string>;
  isRepeat: Maybe<string>;
  linkField: Maybe<string>;
  linkTable: Maybe<string>;
  listCode: Maybe<string>;
  required: Maybe<string>;
  validation: Maybe<string>;
  visibleSelectQuery: Maybe<string>;
  locals: Maybe<DataDictLocalUpdateManyWithoutFieldNumberInput>;
};

export type DataDictUpdateManyMutationInput = {
  dataType: Maybe<string>;
  entity: Maybe<string>;
  fieldName: Maybe<string>;
  fieldType: Maybe<string>;
  isRepeat: Maybe<string>;
  linkField: Maybe<string>;
  linkTable: Maybe<string>;
  listCode: Maybe<string>;
  required: Maybe<string>;
  validation: Maybe<string>;
  visibleSelectQuery: Maybe<string>;
};

export type DataDictUpdateOneRequiredWithoutLocalsInput = {
  create: Maybe<DataDictCreateWithoutLocalsInput>;
  connect: Maybe<DataDictWhereUniqueInput>;
  update: Maybe<DataDictUpdateWithoutLocalsDataInput>;
  upsert: Maybe<DataDictUpsertWithoutLocalsInput>;
};

export type DataDictUpdateWithoutLocalsDataInput = {
  dataType: Maybe<string>;
  entity: Maybe<string>;
  fieldName: Maybe<string>;
  fieldType: Maybe<string>;
  isRepeat: Maybe<string>;
  linkField: Maybe<string>;
  linkTable: Maybe<string>;
  listCode: Maybe<string>;
  required: Maybe<string>;
  validation: Maybe<string>;
  visibleSelectQuery: Maybe<string>;
};

export type DataDictUpsertWithoutLocalsInput = {
  update: DataDictUpdateWithoutLocalsDataInput;
  create: DataDictCreateWithoutLocalsInput;
};

export type DataDictWhereInput = {
  AND: Maybe<Array<DataDictWhereInput>>;
  OR: Maybe<Array<DataDictWhereInput>>;
  NOT: Maybe<Array<DataDictWhereInput>>;
  fieldNumber: Maybe<string>;
  fieldNumber_not: Maybe<string>;
  fieldNumber_in: Maybe<Array<string>>;
  fieldNumber_not_in: Maybe<Array<string>>;
  fieldNumber_lt: Maybe<string>;
  fieldNumber_lte: Maybe<string>;
  fieldNumber_gt: Maybe<string>;
  fieldNumber_gte: Maybe<string>;
  fieldNumber_contains: Maybe<string>;
  fieldNumber_not_contains: Maybe<string>;
  fieldNumber_starts_with: Maybe<string>;
  fieldNumber_not_starts_with: Maybe<string>;
  fieldNumber_ends_with: Maybe<string>;
  fieldNumber_not_ends_with: Maybe<string>;
  dataType: Maybe<string>;
  dataType_not: Maybe<string>;
  dataType_in: Maybe<Array<string>>;
  dataType_not_in: Maybe<Array<string>>;
  dataType_lt: Maybe<string>;
  dataType_lte: Maybe<string>;
  dataType_gt: Maybe<string>;
  dataType_gte: Maybe<string>;
  dataType_contains: Maybe<string>;
  dataType_not_contains: Maybe<string>;
  dataType_starts_with: Maybe<string>;
  dataType_not_starts_with: Maybe<string>;
  dataType_ends_with: Maybe<string>;
  dataType_not_ends_with: Maybe<string>;
  entity: Maybe<string>;
  entity_not: Maybe<string>;
  entity_in: Maybe<Array<string>>;
  entity_not_in: Maybe<Array<string>>;
  entity_lt: Maybe<string>;
  entity_lte: Maybe<string>;
  entity_gt: Maybe<string>;
  entity_gte: Maybe<string>;
  entity_contains: Maybe<string>;
  entity_not_contains: Maybe<string>;
  entity_starts_with: Maybe<string>;
  entity_not_starts_with: Maybe<string>;
  entity_ends_with: Maybe<string>;
  entity_not_ends_with: Maybe<string>;
  fieldName: Maybe<string>;
  fieldName_not: Maybe<string>;
  fieldName_in: Maybe<Array<string>>;
  fieldName_not_in: Maybe<Array<string>>;
  fieldName_lt: Maybe<string>;
  fieldName_lte: Maybe<string>;
  fieldName_gt: Maybe<string>;
  fieldName_gte: Maybe<string>;
  fieldName_contains: Maybe<string>;
  fieldName_not_contains: Maybe<string>;
  fieldName_starts_with: Maybe<string>;
  fieldName_not_starts_with: Maybe<string>;
  fieldName_ends_with: Maybe<string>;
  fieldName_not_ends_with: Maybe<string>;
  fieldType: Maybe<string>;
  fieldType_not: Maybe<string>;
  fieldType_in: Maybe<Array<string>>;
  fieldType_not_in: Maybe<Array<string>>;
  fieldType_lt: Maybe<string>;
  fieldType_lte: Maybe<string>;
  fieldType_gt: Maybe<string>;
  fieldType_gte: Maybe<string>;
  fieldType_contains: Maybe<string>;
  fieldType_not_contains: Maybe<string>;
  fieldType_starts_with: Maybe<string>;
  fieldType_not_starts_with: Maybe<string>;
  fieldType_ends_with: Maybe<string>;
  fieldType_not_ends_with: Maybe<string>;
  isRepeat: Maybe<string>;
  isRepeat_not: Maybe<string>;
  isRepeat_in: Maybe<Array<string>>;
  isRepeat_not_in: Maybe<Array<string>>;
  isRepeat_lt: Maybe<string>;
  isRepeat_lte: Maybe<string>;
  isRepeat_gt: Maybe<string>;
  isRepeat_gte: Maybe<string>;
  isRepeat_contains: Maybe<string>;
  isRepeat_not_contains: Maybe<string>;
  isRepeat_starts_with: Maybe<string>;
  isRepeat_not_starts_with: Maybe<string>;
  isRepeat_ends_with: Maybe<string>;
  isRepeat_not_ends_with: Maybe<string>;
  linkField: Maybe<string>;
  linkField_not: Maybe<string>;
  linkField_in: Maybe<Array<string>>;
  linkField_not_in: Maybe<Array<string>>;
  linkField_lt: Maybe<string>;
  linkField_lte: Maybe<string>;
  linkField_gt: Maybe<string>;
  linkField_gte: Maybe<string>;
  linkField_contains: Maybe<string>;
  linkField_not_contains: Maybe<string>;
  linkField_starts_with: Maybe<string>;
  linkField_not_starts_with: Maybe<string>;
  linkField_ends_with: Maybe<string>;
  linkField_not_ends_with: Maybe<string>;
  linkTable: Maybe<string>;
  linkTable_not: Maybe<string>;
  linkTable_in: Maybe<Array<string>>;
  linkTable_not_in: Maybe<Array<string>>;
  linkTable_lt: Maybe<string>;
  linkTable_lte: Maybe<string>;
  linkTable_gt: Maybe<string>;
  linkTable_gte: Maybe<string>;
  linkTable_contains: Maybe<string>;
  linkTable_not_contains: Maybe<string>;
  linkTable_starts_with: Maybe<string>;
  linkTable_not_starts_with: Maybe<string>;
  linkTable_ends_with: Maybe<string>;
  linkTable_not_ends_with: Maybe<string>;
  listCode: Maybe<string>;
  listCode_not: Maybe<string>;
  listCode_in: Maybe<Array<string>>;
  listCode_not_in: Maybe<Array<string>>;
  listCode_lt: Maybe<string>;
  listCode_lte: Maybe<string>;
  listCode_gt: Maybe<string>;
  listCode_gte: Maybe<string>;
  listCode_contains: Maybe<string>;
  listCode_not_contains: Maybe<string>;
  listCode_starts_with: Maybe<string>;
  listCode_not_starts_with: Maybe<string>;
  listCode_ends_with: Maybe<string>;
  listCode_not_ends_with: Maybe<string>;
  required: Maybe<string>;
  required_not: Maybe<string>;
  required_in: Maybe<Array<string>>;
  required_not_in: Maybe<Array<string>>;
  required_lt: Maybe<string>;
  required_lte: Maybe<string>;
  required_gt: Maybe<string>;
  required_gte: Maybe<string>;
  required_contains: Maybe<string>;
  required_not_contains: Maybe<string>;
  required_starts_with: Maybe<string>;
  required_not_starts_with: Maybe<string>;
  required_ends_with: Maybe<string>;
  required_not_ends_with: Maybe<string>;
  validation: Maybe<string>;
  validation_not: Maybe<string>;
  validation_in: Maybe<Array<string>>;
  validation_not_in: Maybe<Array<string>>;
  validation_lt: Maybe<string>;
  validation_lte: Maybe<string>;
  validation_gt: Maybe<string>;
  validation_gte: Maybe<string>;
  validation_contains: Maybe<string>;
  validation_not_contains: Maybe<string>;
  validation_starts_with: Maybe<string>;
  validation_not_starts_with: Maybe<string>;
  validation_ends_with: Maybe<string>;
  validation_not_ends_with: Maybe<string>;
  visibleSelectQuery: Maybe<string>;
  visibleSelectQuery_not: Maybe<string>;
  visibleSelectQuery_in: Maybe<Array<string>>;
  visibleSelectQuery_not_in: Maybe<Array<string>>;
  visibleSelectQuery_lt: Maybe<string>;
  visibleSelectQuery_lte: Maybe<string>;
  visibleSelectQuery_gt: Maybe<string>;
  visibleSelectQuery_gte: Maybe<string>;
  visibleSelectQuery_contains: Maybe<string>;
  visibleSelectQuery_not_contains: Maybe<string>;
  visibleSelectQuery_starts_with: Maybe<string>;
  visibleSelectQuery_not_starts_with: Maybe<string>;
  visibleSelectQuery_ends_with: Maybe<string>;
  visibleSelectQuery_not_ends_with: Maybe<string>;
  locals_every: Maybe<DataDictLocalWhereInput>;
  locals_some: Maybe<DataDictLocalWhereInput>;
  locals_none: Maybe<DataDictLocalWhereInput>;
};

export type DataDictWhereUniqueInput = {
  fieldNumber: Maybe<string>;
};

export type DateTime = Date;

export type LogRequest = {
  ID: number;
  caseId?: Maybe<number>;
  isiRequest?: Maybe<string>;
  jenisRequest?: Maybe<string>;
  networkId?: Maybe<number>;
  personId?: Maybe<number>;
  pp?: Maybe<number>;
  requestBy?: Maybe<number>;
  requestTo?: Maybe<number>;
  tanggapanRequest?: Maybe<string>;
  tglExpired?: Maybe<Date>;
  tglRequest?: Maybe<Date>;
  tglRespon?: Maybe<Date>;
};

export type LogRequestApp = {
  id: number;
  appConsultation?: Maybe<string>;
  logRequestId?: Maybe<number>;
};

export type LogRequestAppConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<LogRequestAppEdge>>;
  aggregate: AggregateLogRequestApp;
};

export type LogRequestAppCreateInput = {
  appConsultation: Maybe<string>;
  logRequestId: Maybe<number>;
};

export type LogRequestAppEdge = {
  node: LogRequestApp;
  cursor: string;
};

export enum LogRequestAppOrderByInput {
  Id_Asc = 'id_ASC',
  Id_Desc = 'id_DESC',
  AppConsultation_Asc = 'appConsultation_ASC',
  AppConsultation_Desc = 'appConsultation_DESC',
  LogRequestId_Asc = 'logRequestId_ASC',
  LogRequestId_Desc = 'logRequestId_DESC',
}

export type LogRequestAppPreviousValues = {
  id: number;
  appConsultation?: Maybe<string>;
  logRequestId?: Maybe<number>;
};

export type LogRequestAppSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<LogRequestApp>;
  updatedFields?: Maybe<Array<string>>;
  previousValues?: Maybe<LogRequestAppPreviousValues>;
};

export type LogRequestAppSubscriptionWhereInput = {
  AND: Maybe<Array<LogRequestAppSubscriptionWhereInput>>;
  OR: Maybe<Array<LogRequestAppSubscriptionWhereInput>>;
  NOT: Maybe<Array<LogRequestAppSubscriptionWhereInput>>;
  mutation_in: Maybe<Array<MutationType>>;
  updatedFields_contains: Maybe<string>;
  updatedFields_contains_every: Maybe<Array<string>>;
  updatedFields_contains_some: Maybe<Array<string>>;
  node: Maybe<LogRequestAppWhereInput>;
};

export type LogRequestAppUpdateInput = {
  appConsultation: Maybe<string>;
  logRequestId: Maybe<number>;
};

export type LogRequestAppUpdateManyMutationInput = {
  appConsultation: Maybe<string>;
  logRequestId: Maybe<number>;
};

export type LogRequestAppWhereInput = {
  AND: Maybe<Array<LogRequestAppWhereInput>>;
  OR: Maybe<Array<LogRequestAppWhereInput>>;
  NOT: Maybe<Array<LogRequestAppWhereInput>>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  appConsultation: Maybe<string>;
  appConsultation_not: Maybe<string>;
  appConsultation_in: Maybe<Array<string>>;
  appConsultation_not_in: Maybe<Array<string>>;
  appConsultation_lt: Maybe<string>;
  appConsultation_lte: Maybe<string>;
  appConsultation_gt: Maybe<string>;
  appConsultation_gte: Maybe<string>;
  appConsultation_contains: Maybe<string>;
  appConsultation_not_contains: Maybe<string>;
  appConsultation_starts_with: Maybe<string>;
  appConsultation_not_starts_with: Maybe<string>;
  appConsultation_ends_with: Maybe<string>;
  appConsultation_not_ends_with: Maybe<string>;
  logRequestId: Maybe<number>;
  logRequestId_not: Maybe<number>;
  logRequestId_in: Maybe<Array<number>>;
  logRequestId_not_in: Maybe<Array<number>>;
  logRequestId_lt: Maybe<number>;
  logRequestId_lte: Maybe<number>;
  logRequestId_gt: Maybe<number>;
  logRequestId_gte: Maybe<number>;
};

export type LogRequestAppWhereUniqueInput = {
  id: Maybe<number>;
};

export type LogRequestConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<LogRequestEdge>>;
  aggregate: AggregateLogRequest;
};

export type LogRequestCreateInput = {
  caseId: Maybe<number>;
  isiRequest: Maybe<string>;
  jenisRequest: Maybe<string>;
  networkId: Maybe<number>;
  personId: Maybe<number>;
  pp: Maybe<number>;
  requestBy: Maybe<number>;
  requestTo: Maybe<number>;
  tanggapanRequest: Maybe<string>;
  tglExpired: Maybe<Date>;
  tglRequest: Maybe<Date>;
  tglRespon: Maybe<Date>;
};

export type LogRequestEdge = {
  node: LogRequest;
  cursor: string;
};

export enum LogRequestOrderByInput {
  Id_Asc = 'ID_ASC',
  Id_Desc = 'ID_DESC',
  CaseId_Asc = 'caseId_ASC',
  CaseId_Desc = 'caseId_DESC',
  IsiRequest_Asc = 'isiRequest_ASC',
  IsiRequest_Desc = 'isiRequest_DESC',
  JenisRequest_Asc = 'jenisRequest_ASC',
  JenisRequest_Desc = 'jenisRequest_DESC',
  NetworkId_Asc = 'networkId_ASC',
  NetworkId_Desc = 'networkId_DESC',
  PersonId_Asc = 'personId_ASC',
  PersonId_Desc = 'personId_DESC',
  Pp_Asc = 'pp_ASC',
  Pp_Desc = 'pp_DESC',
  RequestBy_Asc = 'requestBy_ASC',
  RequestBy_Desc = 'requestBy_DESC',
  RequestTo_Asc = 'requestTo_ASC',
  RequestTo_Desc = 'requestTo_DESC',
  TanggapanRequest_Asc = 'tanggapanRequest_ASC',
  TanggapanRequest_Desc = 'tanggapanRequest_DESC',
  TglExpired_Asc = 'tglExpired_ASC',
  TglExpired_Desc = 'tglExpired_DESC',
  TglRequest_Asc = 'tglRequest_ASC',
  TglRequest_Desc = 'tglRequest_DESC',
  TglRespon_Asc = 'tglRespon_ASC',
  TglRespon_Desc = 'tglRespon_DESC',
}

export type LogRequestPreviousValues = {
  ID: number;
  caseId?: Maybe<number>;
  isiRequest?: Maybe<string>;
  jenisRequest?: Maybe<string>;
  networkId?: Maybe<number>;
  personId?: Maybe<number>;
  pp?: Maybe<number>;
  requestBy?: Maybe<number>;
  requestTo?: Maybe<number>;
  tanggapanRequest?: Maybe<string>;
  tglExpired?: Maybe<Date>;
  tglRequest?: Maybe<Date>;
  tglRespon?: Maybe<Date>;
};

export type LogRequestSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<LogRequest>;
  updatedFields?: Maybe<Array<string>>;
  previousValues?: Maybe<LogRequestPreviousValues>;
};

export type LogRequestSubscriptionWhereInput = {
  AND: Maybe<Array<LogRequestSubscriptionWhereInput>>;
  OR: Maybe<Array<LogRequestSubscriptionWhereInput>>;
  NOT: Maybe<Array<LogRequestSubscriptionWhereInput>>;
  mutation_in: Maybe<Array<MutationType>>;
  updatedFields_contains: Maybe<string>;
  updatedFields_contains_every: Maybe<Array<string>>;
  updatedFields_contains_some: Maybe<Array<string>>;
  node: Maybe<LogRequestWhereInput>;
};

export type LogRequestUpdateInput = {
  caseId: Maybe<number>;
  isiRequest: Maybe<string>;
  jenisRequest: Maybe<string>;
  networkId: Maybe<number>;
  personId: Maybe<number>;
  pp: Maybe<number>;
  requestBy: Maybe<number>;
  requestTo: Maybe<number>;
  tanggapanRequest: Maybe<string>;
  tglExpired: Maybe<Date>;
  tglRequest: Maybe<Date>;
  tglRespon: Maybe<Date>;
};

export type LogRequestUpdateManyMutationInput = {
  caseId: Maybe<number>;
  isiRequest: Maybe<string>;
  jenisRequest: Maybe<string>;
  networkId: Maybe<number>;
  personId: Maybe<number>;
  pp: Maybe<number>;
  requestBy: Maybe<number>;
  requestTo: Maybe<number>;
  tanggapanRequest: Maybe<string>;
  tglExpired: Maybe<Date>;
  tglRequest: Maybe<Date>;
  tglRespon: Maybe<Date>;
};

export type LogRequestWhereInput = {
  AND: Maybe<Array<LogRequestWhereInput>>;
  OR: Maybe<Array<LogRequestWhereInput>>;
  NOT: Maybe<Array<LogRequestWhereInput>>;
  ID: Maybe<number>;
  ID_not: Maybe<number>;
  ID_in: Maybe<Array<number>>;
  ID_not_in: Maybe<Array<number>>;
  ID_lt: Maybe<number>;
  ID_lte: Maybe<number>;
  ID_gt: Maybe<number>;
  ID_gte: Maybe<number>;
  caseId: Maybe<number>;
  caseId_not: Maybe<number>;
  caseId_in: Maybe<Array<number>>;
  caseId_not_in: Maybe<Array<number>>;
  caseId_lt: Maybe<number>;
  caseId_lte: Maybe<number>;
  caseId_gt: Maybe<number>;
  caseId_gte: Maybe<number>;
  isiRequest: Maybe<string>;
  isiRequest_not: Maybe<string>;
  isiRequest_in: Maybe<Array<string>>;
  isiRequest_not_in: Maybe<Array<string>>;
  isiRequest_lt: Maybe<string>;
  isiRequest_lte: Maybe<string>;
  isiRequest_gt: Maybe<string>;
  isiRequest_gte: Maybe<string>;
  isiRequest_contains: Maybe<string>;
  isiRequest_not_contains: Maybe<string>;
  isiRequest_starts_with: Maybe<string>;
  isiRequest_not_starts_with: Maybe<string>;
  isiRequest_ends_with: Maybe<string>;
  isiRequest_not_ends_with: Maybe<string>;
  jenisRequest: Maybe<string>;
  jenisRequest_not: Maybe<string>;
  jenisRequest_in: Maybe<Array<string>>;
  jenisRequest_not_in: Maybe<Array<string>>;
  jenisRequest_lt: Maybe<string>;
  jenisRequest_lte: Maybe<string>;
  jenisRequest_gt: Maybe<string>;
  jenisRequest_gte: Maybe<string>;
  jenisRequest_contains: Maybe<string>;
  jenisRequest_not_contains: Maybe<string>;
  jenisRequest_starts_with: Maybe<string>;
  jenisRequest_not_starts_with: Maybe<string>;
  jenisRequest_ends_with: Maybe<string>;
  jenisRequest_not_ends_with: Maybe<string>;
  networkId: Maybe<number>;
  networkId_not: Maybe<number>;
  networkId_in: Maybe<Array<number>>;
  networkId_not_in: Maybe<Array<number>>;
  networkId_lt: Maybe<number>;
  networkId_lte: Maybe<number>;
  networkId_gt: Maybe<number>;
  networkId_gte: Maybe<number>;
  personId: Maybe<number>;
  personId_not: Maybe<number>;
  personId_in: Maybe<Array<number>>;
  personId_not_in: Maybe<Array<number>>;
  personId_lt: Maybe<number>;
  personId_lte: Maybe<number>;
  personId_gt: Maybe<number>;
  personId_gte: Maybe<number>;
  pp: Maybe<number>;
  pp_not: Maybe<number>;
  pp_in: Maybe<Array<number>>;
  pp_not_in: Maybe<Array<number>>;
  pp_lt: Maybe<number>;
  pp_lte: Maybe<number>;
  pp_gt: Maybe<number>;
  pp_gte: Maybe<number>;
  requestBy: Maybe<number>;
  requestBy_not: Maybe<number>;
  requestBy_in: Maybe<Array<number>>;
  requestBy_not_in: Maybe<Array<number>>;
  requestBy_lt: Maybe<number>;
  requestBy_lte: Maybe<number>;
  requestBy_gt: Maybe<number>;
  requestBy_gte: Maybe<number>;
  requestTo: Maybe<number>;
  requestTo_not: Maybe<number>;
  requestTo_in: Maybe<Array<number>>;
  requestTo_not_in: Maybe<Array<number>>;
  requestTo_lt: Maybe<number>;
  requestTo_lte: Maybe<number>;
  requestTo_gt: Maybe<number>;
  requestTo_gte: Maybe<number>;
  tanggapanRequest: Maybe<string>;
  tanggapanRequest_not: Maybe<string>;
  tanggapanRequest_in: Maybe<Array<string>>;
  tanggapanRequest_not_in: Maybe<Array<string>>;
  tanggapanRequest_lt: Maybe<string>;
  tanggapanRequest_lte: Maybe<string>;
  tanggapanRequest_gt: Maybe<string>;
  tanggapanRequest_gte: Maybe<string>;
  tanggapanRequest_contains: Maybe<string>;
  tanggapanRequest_not_contains: Maybe<string>;
  tanggapanRequest_starts_with: Maybe<string>;
  tanggapanRequest_not_starts_with: Maybe<string>;
  tanggapanRequest_ends_with: Maybe<string>;
  tanggapanRequest_not_ends_with: Maybe<string>;
  tglExpired: Maybe<Date>;
  tglExpired_not: Maybe<Date>;
  tglExpired_in: Maybe<Array<Date>>;
  tglExpired_not_in: Maybe<Array<Date>>;
  tglExpired_lt: Maybe<Date>;
  tglExpired_lte: Maybe<Date>;
  tglExpired_gt: Maybe<Date>;
  tglExpired_gte: Maybe<Date>;
  tglRequest: Maybe<Date>;
  tglRequest_not: Maybe<Date>;
  tglRequest_in: Maybe<Array<Date>>;
  tglRequest_not_in: Maybe<Array<Date>>;
  tglRequest_lt: Maybe<Date>;
  tglRequest_lte: Maybe<Date>;
  tglRequest_gt: Maybe<Date>;
  tglRequest_gte: Maybe<Date>;
  tglRespon: Maybe<Date>;
  tglRespon_not: Maybe<Date>;
  tglRespon_in: Maybe<Array<Date>>;
  tglRespon_not_in: Maybe<Array<Date>>;
  tglRespon_lt: Maybe<Date>;
  tglRespon_lte: Maybe<Date>;
  tglRespon_gt: Maybe<Date>;
  tglRespon_gte: Maybe<Date>;
};

export type LogRequestWhereUniqueInput = {
  ID: Maybe<number>;
};

export type Long = any;

export type MtVocab = {
  KODE: string;
  kode_induk?: Maybe<string>;
  kode_list?: Maybe<MtVocabGroup>;
  level?: Maybe<number>;
  sembunyikan: boolean;
  teks?: Maybe<string>;
  urutan?: Maybe<number>;
};

export type MtVocabConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<MtVocabEdge>>;
  aggregate: AggregateMtVocab;
};

export type MtVocabCreateInput = {
  KODE: Maybe<string>;
  kode_induk: Maybe<string>;
  level: Maybe<number>;
  sembunyikan: boolean;
  teks: Maybe<string>;
  urutan: Maybe<number>;
  kode_list: Maybe<MtVocabGroupCreateOneWithoutMtvocabsInput>;
};

export type MtVocabCreateManyWithoutKode_ListInput = {
  create: Maybe<Array<MtVocabCreateWithoutKode_ListInput>>;
  connect: Maybe<Array<MtVocabWhereUniqueInput>>;
};

export type MtVocabCreateWithoutKode_ListInput = {
  KODE: Maybe<string>;
  kode_induk: Maybe<string>;
  level: Maybe<number>;
  sembunyikan: boolean;
  teks: Maybe<string>;
  urutan: Maybe<number>;
};

export type MtVocabEdge = {
  node: MtVocab;
  cursor: string;
};

export type MtVocabGroup = {
  kode_list: number;
  nama_list?: Maybe<string>;
  mtvocabs?: Maybe<Array<MtVocab>>;
};

export type MtVocabGroupMtvocabsArgs = {
  where?: Maybe<MtVocabWhereInput>;
  orderBy?: Maybe<MtVocabOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type MtVocabGroupConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<MtVocabGroupEdge>>;
  aggregate: AggregateMtVocabGroup;
};

export type MtVocabGroupCreateInput = {
  nama_list: Maybe<string>;
  mtvocabs: Maybe<MtVocabCreateManyWithoutKode_ListInput>;
};

export type MtVocabGroupCreateOneWithoutMtvocabsInput = {
  create: Maybe<MtVocabGroupCreateWithoutMtvocabsInput>;
  connect: Maybe<MtVocabGroupWhereUniqueInput>;
};

export type MtVocabGroupCreateWithoutMtvocabsInput = {
  nama_list: Maybe<string>;
};

export type MtVocabGroupEdge = {
  node: MtVocabGroup;
  cursor: string;
};

export enum MtVocabGroupOrderByInput {
  Kode_List_Asc = 'kode_list_ASC',
  Kode_List_Desc = 'kode_list_DESC',
  Nama_List_Asc = 'nama_list_ASC',
  Nama_List_Desc = 'nama_list_DESC',
}

export type MtVocabGroupPreviousValues = {
  kode_list: number;
  nama_list?: Maybe<string>;
};

export type MtVocabGroupSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<MtVocabGroup>;
  updatedFields?: Maybe<Array<string>>;
  previousValues?: Maybe<MtVocabGroupPreviousValues>;
};

export type MtVocabGroupSubscriptionWhereInput = {
  AND: Maybe<Array<MtVocabGroupSubscriptionWhereInput>>;
  OR: Maybe<Array<MtVocabGroupSubscriptionWhereInput>>;
  NOT: Maybe<Array<MtVocabGroupSubscriptionWhereInput>>;
  mutation_in: Maybe<Array<MutationType>>;
  updatedFields_contains: Maybe<string>;
  updatedFields_contains_every: Maybe<Array<string>>;
  updatedFields_contains_some: Maybe<Array<string>>;
  node: Maybe<MtVocabGroupWhereInput>;
};

export type MtVocabGroupUpdateInput = {
  nama_list: Maybe<string>;
  mtvocabs: Maybe<MtVocabUpdateManyWithoutKode_ListInput>;
};

export type MtVocabGroupUpdateManyMutationInput = {
  nama_list: Maybe<string>;
};

export type MtVocabGroupUpdateOneWithoutMtvocabsInput = {
  create: Maybe<MtVocabGroupCreateWithoutMtvocabsInput>;
  connect: Maybe<MtVocabGroupWhereUniqueInput>;
  disconnect: Maybe<boolean>;
  delete: Maybe<boolean>;
  update: Maybe<MtVocabGroupUpdateWithoutMtvocabsDataInput>;
  upsert: Maybe<MtVocabGroupUpsertWithoutMtvocabsInput>;
};

export type MtVocabGroupUpdateWithoutMtvocabsDataInput = {
  nama_list: Maybe<string>;
};

export type MtVocabGroupUpsertWithoutMtvocabsInput = {
  update: MtVocabGroupUpdateWithoutMtvocabsDataInput;
  create: MtVocabGroupCreateWithoutMtvocabsInput;
};

export type MtVocabGroupWhereInput = {
  AND: Maybe<Array<MtVocabGroupWhereInput>>;
  OR: Maybe<Array<MtVocabGroupWhereInput>>;
  NOT: Maybe<Array<MtVocabGroupWhereInput>>;
  kode_list: Maybe<number>;
  kode_list_not: Maybe<number>;
  kode_list_in: Maybe<Array<number>>;
  kode_list_not_in: Maybe<Array<number>>;
  kode_list_lt: Maybe<number>;
  kode_list_lte: Maybe<number>;
  kode_list_gt: Maybe<number>;
  kode_list_gte: Maybe<number>;
  nama_list: Maybe<string>;
  nama_list_not: Maybe<string>;
  nama_list_in: Maybe<Array<string>>;
  nama_list_not_in: Maybe<Array<string>>;
  nama_list_lt: Maybe<string>;
  nama_list_lte: Maybe<string>;
  nama_list_gt: Maybe<string>;
  nama_list_gte: Maybe<string>;
  nama_list_contains: Maybe<string>;
  nama_list_not_contains: Maybe<string>;
  nama_list_starts_with: Maybe<string>;
  nama_list_not_starts_with: Maybe<string>;
  nama_list_ends_with: Maybe<string>;
  nama_list_not_ends_with: Maybe<string>;
  mtvocabs_every: Maybe<MtVocabWhereInput>;
  mtvocabs_some: Maybe<MtVocabWhereInput>;
  mtvocabs_none: Maybe<MtVocabWhereInput>;
};

export type MtVocabGroupWhereUniqueInput = {
  kode_list: Maybe<number>;
};

export enum MtVocabOrderByInput {
  Kode_Asc = 'KODE_ASC',
  Kode_Desc = 'KODE_DESC',
  Kode_Induk_Asc = 'kode_induk_ASC',
  Kode_Induk_Desc = 'kode_induk_DESC',
  Level_Asc = 'level_ASC',
  Level_Desc = 'level_DESC',
  Sembunyikan_Asc = 'sembunyikan_ASC',
  Sembunyikan_Desc = 'sembunyikan_DESC',
  Teks_Asc = 'teks_ASC',
  Teks_Desc = 'teks_DESC',
  Urutan_Asc = 'urutan_ASC',
  Urutan_Desc = 'urutan_DESC',
}

export type MtVocabPreviousValues = {
  KODE: string;
  kode_induk?: Maybe<string>;
  level?: Maybe<number>;
  sembunyikan: boolean;
  teks?: Maybe<string>;
  urutan?: Maybe<number>;
};

export type MtVocabScalarWhereInput = {
  AND: Maybe<Array<MtVocabScalarWhereInput>>;
  OR: Maybe<Array<MtVocabScalarWhereInput>>;
  NOT: Maybe<Array<MtVocabScalarWhereInput>>;
  KODE: Maybe<string>;
  KODE_not: Maybe<string>;
  KODE_in: Maybe<Array<string>>;
  KODE_not_in: Maybe<Array<string>>;
  KODE_lt: Maybe<string>;
  KODE_lte: Maybe<string>;
  KODE_gt: Maybe<string>;
  KODE_gte: Maybe<string>;
  KODE_contains: Maybe<string>;
  KODE_not_contains: Maybe<string>;
  KODE_starts_with: Maybe<string>;
  KODE_not_starts_with: Maybe<string>;
  KODE_ends_with: Maybe<string>;
  KODE_not_ends_with: Maybe<string>;
  kode_induk: Maybe<string>;
  kode_induk_not: Maybe<string>;
  kode_induk_in: Maybe<Array<string>>;
  kode_induk_not_in: Maybe<Array<string>>;
  kode_induk_lt: Maybe<string>;
  kode_induk_lte: Maybe<string>;
  kode_induk_gt: Maybe<string>;
  kode_induk_gte: Maybe<string>;
  kode_induk_contains: Maybe<string>;
  kode_induk_not_contains: Maybe<string>;
  kode_induk_starts_with: Maybe<string>;
  kode_induk_not_starts_with: Maybe<string>;
  kode_induk_ends_with: Maybe<string>;
  kode_induk_not_ends_with: Maybe<string>;
  level: Maybe<number>;
  level_not: Maybe<number>;
  level_in: Maybe<Array<number>>;
  level_not_in: Maybe<Array<number>>;
  level_lt: Maybe<number>;
  level_lte: Maybe<number>;
  level_gt: Maybe<number>;
  level_gte: Maybe<number>;
  sembunyikan: Maybe<boolean>;
  sembunyikan_not: Maybe<boolean>;
  teks: Maybe<string>;
  teks_not: Maybe<string>;
  teks_in: Maybe<Array<string>>;
  teks_not_in: Maybe<Array<string>>;
  teks_lt: Maybe<string>;
  teks_lte: Maybe<string>;
  teks_gt: Maybe<string>;
  teks_gte: Maybe<string>;
  teks_contains: Maybe<string>;
  teks_not_contains: Maybe<string>;
  teks_starts_with: Maybe<string>;
  teks_not_starts_with: Maybe<string>;
  teks_ends_with: Maybe<string>;
  teks_not_ends_with: Maybe<string>;
  urutan: Maybe<number>;
  urutan_not: Maybe<number>;
  urutan_in: Maybe<Array<number>>;
  urutan_not_in: Maybe<Array<number>>;
  urutan_lt: Maybe<number>;
  urutan_lte: Maybe<number>;
  urutan_gt: Maybe<number>;
  urutan_gte: Maybe<number>;
};

export type MtVocabSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<MtVocab>;
  updatedFields?: Maybe<Array<string>>;
  previousValues?: Maybe<MtVocabPreviousValues>;
};

export type MtVocabSubscriptionWhereInput = {
  AND: Maybe<Array<MtVocabSubscriptionWhereInput>>;
  OR: Maybe<Array<MtVocabSubscriptionWhereInput>>;
  NOT: Maybe<Array<MtVocabSubscriptionWhereInput>>;
  mutation_in: Maybe<Array<MutationType>>;
  updatedFields_contains: Maybe<string>;
  updatedFields_contains_every: Maybe<Array<string>>;
  updatedFields_contains_some: Maybe<Array<string>>;
  node: Maybe<MtVocabWhereInput>;
};

export type MtVocabUpdateInput = {
  kode_induk: Maybe<string>;
  level: Maybe<number>;
  sembunyikan: Maybe<boolean>;
  teks: Maybe<string>;
  urutan: Maybe<number>;
  kode_list: Maybe<MtVocabGroupUpdateOneWithoutMtvocabsInput>;
};

export type MtVocabUpdateManyDataInput = {
  kode_induk: Maybe<string>;
  level: Maybe<number>;
  sembunyikan: Maybe<boolean>;
  teks: Maybe<string>;
  urutan: Maybe<number>;
};

export type MtVocabUpdateManyMutationInput = {
  kode_induk: Maybe<string>;
  level: Maybe<number>;
  sembunyikan: Maybe<boolean>;
  teks: Maybe<string>;
  urutan: Maybe<number>;
};

export type MtVocabUpdateManyWithoutKode_ListInput = {
  create: Maybe<Array<MtVocabCreateWithoutKode_ListInput>>;
  connect: Maybe<Array<MtVocabWhereUniqueInput>>;
  set: Maybe<Array<MtVocabWhereUniqueInput>>;
  disconnect: Maybe<Array<MtVocabWhereUniqueInput>>;
  delete: Maybe<Array<MtVocabWhereUniqueInput>>;
  update: Maybe<Array<MtVocabUpdateWithWhereUniqueWithoutKode_ListInput>>;
  updateMany: Maybe<Array<MtVocabUpdateManyWithWhereNestedInput>>;
  deleteMany: Maybe<Array<MtVocabScalarWhereInput>>;
  upsert: Maybe<Array<MtVocabUpsertWithWhereUniqueWithoutKode_ListInput>>;
};

export type MtVocabUpdateManyWithWhereNestedInput = {
  where: MtVocabScalarWhereInput;
  data: MtVocabUpdateManyDataInput;
};

export type MtVocabUpdateWithoutKode_ListDataInput = {
  kode_induk: Maybe<string>;
  level: Maybe<number>;
  sembunyikan: Maybe<boolean>;
  teks: Maybe<string>;
  urutan: Maybe<number>;
};

export type MtVocabUpdateWithWhereUniqueWithoutKode_ListInput = {
  where: MtVocabWhereUniqueInput;
  data: MtVocabUpdateWithoutKode_ListDataInput;
};

export type MtVocabUpsertWithWhereUniqueWithoutKode_ListInput = {
  where: MtVocabWhereUniqueInput;
  update: MtVocabUpdateWithoutKode_ListDataInput;
  create: MtVocabCreateWithoutKode_ListInput;
};

export type MtVocabWhereInput = {
  AND: Maybe<Array<MtVocabWhereInput>>;
  OR: Maybe<Array<MtVocabWhereInput>>;
  NOT: Maybe<Array<MtVocabWhereInput>>;
  KODE: Maybe<string>;
  KODE_not: Maybe<string>;
  KODE_in: Maybe<Array<string>>;
  KODE_not_in: Maybe<Array<string>>;
  KODE_lt: Maybe<string>;
  KODE_lte: Maybe<string>;
  KODE_gt: Maybe<string>;
  KODE_gte: Maybe<string>;
  KODE_contains: Maybe<string>;
  KODE_not_contains: Maybe<string>;
  KODE_starts_with: Maybe<string>;
  KODE_not_starts_with: Maybe<string>;
  KODE_ends_with: Maybe<string>;
  KODE_not_ends_with: Maybe<string>;
  kode_induk: Maybe<string>;
  kode_induk_not: Maybe<string>;
  kode_induk_in: Maybe<Array<string>>;
  kode_induk_not_in: Maybe<Array<string>>;
  kode_induk_lt: Maybe<string>;
  kode_induk_lte: Maybe<string>;
  kode_induk_gt: Maybe<string>;
  kode_induk_gte: Maybe<string>;
  kode_induk_contains: Maybe<string>;
  kode_induk_not_contains: Maybe<string>;
  kode_induk_starts_with: Maybe<string>;
  kode_induk_not_starts_with: Maybe<string>;
  kode_induk_ends_with: Maybe<string>;
  kode_induk_not_ends_with: Maybe<string>;
  level: Maybe<number>;
  level_not: Maybe<number>;
  level_in: Maybe<Array<number>>;
  level_not_in: Maybe<Array<number>>;
  level_lt: Maybe<number>;
  level_lte: Maybe<number>;
  level_gt: Maybe<number>;
  level_gte: Maybe<number>;
  sembunyikan: Maybe<boolean>;
  sembunyikan_not: Maybe<boolean>;
  teks: Maybe<string>;
  teks_not: Maybe<string>;
  teks_in: Maybe<Array<string>>;
  teks_not_in: Maybe<Array<string>>;
  teks_lt: Maybe<string>;
  teks_lte: Maybe<string>;
  teks_gt: Maybe<string>;
  teks_gte: Maybe<string>;
  teks_contains: Maybe<string>;
  teks_not_contains: Maybe<string>;
  teks_starts_with: Maybe<string>;
  teks_not_starts_with: Maybe<string>;
  teks_ends_with: Maybe<string>;
  teks_not_ends_with: Maybe<string>;
  urutan: Maybe<number>;
  urutan_not: Maybe<number>;
  urutan_in: Maybe<Array<number>>;
  urutan_not_in: Maybe<Array<number>>;
  urutan_lt: Maybe<number>;
  urutan_lte: Maybe<number>;
  urutan_gt: Maybe<number>;
  urutan_gte: Maybe<number>;
  kode_list: Maybe<MtVocabGroupWhereInput>;
};

export type MtVocabWhereUniqueInput = {
  KODE: Maybe<string>;
};

export type Mutation = {
  createApplication: Application;
  createCase: Case;
  createCaseClassification: CaseClassification;
  createCaseConsultation: CaseConsultation;
  createCaseConsultationApp: CaseConsultationApp;
  createCaseDocument: CaseDocument;
  createCaseIssue: CaseIssue;
  createCaseKorban: CaseKorban;
  createCasePelaku: CasePelaku;
  createCasePk: CasePk;
  createCaseProgress: CaseProgress;
  createCaseProgressActivity: CaseProgressActivity;
  createCaseProgressActivityLit: CaseProgressActivityLit;
  createCaseProgressActivityNonlit: CaseProgressActivityNonlit;
  createCaseTransferReferral: CaseTransferReferral;
  createCaseViolatedRight: CaseViolatedRight;
  createClient: Client;
  createDaftarPengacara: DaftarPengacara;
  createDataDict: DataDict;
  createDataDictLocal: DataDictLocal;
  createLogRequest: LogRequest;
  createLogRequestApp: LogRequestApp;
  createMtVocab: MtVocab;
  createMtVocabGroup: MtVocabGroup;
  createNetwork: Network;
  createPerson: Person;
  createPersonDocument: PersonDocument;
  createRole: Role;
  createUser: User;
  createUserProfile: UserProfile;
  updateApplication?: Maybe<Application>;
  updateCase?: Maybe<Case>;
  updateCaseClassification?: Maybe<CaseClassification>;
  updateCaseConsultation?: Maybe<CaseConsultation>;
  updateCaseConsultationApp?: Maybe<CaseConsultationApp>;
  updateCaseDocument?: Maybe<CaseDocument>;
  updateCaseIssue?: Maybe<CaseIssue>;
  updateCaseKorban?: Maybe<CaseKorban>;
  updateCasePelaku?: Maybe<CasePelaku>;
  updateCasePk?: Maybe<CasePk>;
  updateCaseProgress?: Maybe<CaseProgress>;
  updateCaseProgressActivity?: Maybe<CaseProgressActivity>;
  updateCaseProgressActivityLit?: Maybe<CaseProgressActivityLit>;
  updateCaseProgressActivityNonlit?: Maybe<CaseProgressActivityNonlit>;
  updateCaseTransferReferral?: Maybe<CaseTransferReferral>;
  updateCaseViolatedRight?: Maybe<CaseViolatedRight>;
  updateClient?: Maybe<Client>;
  updateDaftarPengacara?: Maybe<DaftarPengacara>;
  updateDataDict?: Maybe<DataDict>;
  updateDataDictLocal?: Maybe<DataDictLocal>;
  updateLogRequest?: Maybe<LogRequest>;
  updateLogRequestApp?: Maybe<LogRequestApp>;
  updateMtVocab?: Maybe<MtVocab>;
  updateMtVocabGroup?: Maybe<MtVocabGroup>;
  updateNetwork?: Maybe<Network>;
  updatePerson?: Maybe<Person>;
  updatePersonDocument?: Maybe<PersonDocument>;
  updateRole?: Maybe<Role>;
  updateUser?: Maybe<User>;
  updateUserProfile?: Maybe<UserProfile>;
  deleteApplication?: Maybe<Application>;
  deleteCase?: Maybe<Case>;
  deleteCaseClassification?: Maybe<CaseClassification>;
  deleteCaseConsultation?: Maybe<CaseConsultation>;
  deleteCaseConsultationApp?: Maybe<CaseConsultationApp>;
  deleteCaseDocument?: Maybe<CaseDocument>;
  deleteCaseIssue?: Maybe<CaseIssue>;
  deleteCaseKorban?: Maybe<CaseKorban>;
  deleteCasePelaku?: Maybe<CasePelaku>;
  deleteCasePk?: Maybe<CasePk>;
  deleteCaseProgress?: Maybe<CaseProgress>;
  deleteCaseProgressActivity?: Maybe<CaseProgressActivity>;
  deleteCaseProgressActivityLit?: Maybe<CaseProgressActivityLit>;
  deleteCaseProgressActivityNonlit?: Maybe<CaseProgressActivityNonlit>;
  deleteCaseTransferReferral?: Maybe<CaseTransferReferral>;
  deleteCaseViolatedRight?: Maybe<CaseViolatedRight>;
  deleteClient?: Maybe<Client>;
  deleteDaftarPengacara?: Maybe<DaftarPengacara>;
  deleteDataDict?: Maybe<DataDict>;
  deleteDataDictLocal?: Maybe<DataDictLocal>;
  deleteLogRequest?: Maybe<LogRequest>;
  deleteLogRequestApp?: Maybe<LogRequestApp>;
  deleteMtVocab?: Maybe<MtVocab>;
  deleteMtVocabGroup?: Maybe<MtVocabGroup>;
  deleteNetwork?: Maybe<Network>;
  deletePerson?: Maybe<Person>;
  deletePersonDocument?: Maybe<PersonDocument>;
  deleteRole?: Maybe<Role>;
  deleteUser?: Maybe<User>;
  deleteUserProfile?: Maybe<UserProfile>;
  upsertApplication: Application;
  upsertCase: Case;
  upsertCaseClassification: CaseClassification;
  upsertCaseConsultation: CaseConsultation;
  upsertCaseConsultationApp: CaseConsultationApp;
  upsertCaseDocument: CaseDocument;
  upsertCaseIssue: CaseIssue;
  upsertCaseKorban: CaseKorban;
  upsertCasePelaku: CasePelaku;
  upsertCasePk: CasePk;
  upsertCaseProgress: CaseProgress;
  upsertCaseProgressActivity: CaseProgressActivity;
  upsertCaseProgressActivityLit: CaseProgressActivityLit;
  upsertCaseProgressActivityNonlit: CaseProgressActivityNonlit;
  upsertCaseTransferReferral: CaseTransferReferral;
  upsertCaseViolatedRight: CaseViolatedRight;
  upsertClient: Client;
  upsertDaftarPengacara: DaftarPengacara;
  upsertDataDict: DataDict;
  upsertDataDictLocal: DataDictLocal;
  upsertLogRequest: LogRequest;
  upsertLogRequestApp: LogRequestApp;
  upsertMtVocab: MtVocab;
  upsertMtVocabGroup: MtVocabGroup;
  upsertNetwork: Network;
  upsertPerson: Person;
  upsertPersonDocument: PersonDocument;
  upsertRole: Role;
  upsertUser: User;
  upsertUserProfile: UserProfile;
  updateManyApplications: BatchPayload;
  updateManyCases: BatchPayload;
  updateManyCaseClassifications: BatchPayload;
  updateManyCaseConsultations: BatchPayload;
  updateManyCaseConsultationApps: BatchPayload;
  updateManyCaseDocuments: BatchPayload;
  updateManyCaseIssues: BatchPayload;
  updateManyCasePks: BatchPayload;
  updateManyCaseProgresses: BatchPayload;
  updateManyCaseProgressActivities: BatchPayload;
  updateManyCaseProgressActivityLits: BatchPayload;
  updateManyCaseProgressActivityNonlits: BatchPayload;
  updateManyCaseTransferReferrals: BatchPayload;
  updateManyCaseViolatedRights: BatchPayload;
  updateManyClients: BatchPayload;
  updateManyDaftarPengacaras: BatchPayload;
  updateManyDataDicts: BatchPayload;
  updateManyDataDictLocals: BatchPayload;
  updateManyLogRequests: BatchPayload;
  updateManyLogRequestApps: BatchPayload;
  updateManyMtVocabs: BatchPayload;
  updateManyMtVocabGroups: BatchPayload;
  updateManyNetworks: BatchPayload;
  updateManyPersons: BatchPayload;
  updateManyPersonDocuments: BatchPayload;
  updateManyRoles: BatchPayload;
  updateManyUsers: BatchPayload;
  updateManyUserProfiles: BatchPayload;
  deleteManyApplications: BatchPayload;
  deleteManyCases: BatchPayload;
  deleteManyCaseClassifications: BatchPayload;
  deleteManyCaseConsultations: BatchPayload;
  deleteManyCaseConsultationApps: BatchPayload;
  deleteManyCaseDocuments: BatchPayload;
  deleteManyCaseIssues: BatchPayload;
  deleteManyCaseKorbans: BatchPayload;
  deleteManyCasePelakus: BatchPayload;
  deleteManyCasePks: BatchPayload;
  deleteManyCaseProgresses: BatchPayload;
  deleteManyCaseProgressActivities: BatchPayload;
  deleteManyCaseProgressActivityLits: BatchPayload;
  deleteManyCaseProgressActivityNonlits: BatchPayload;
  deleteManyCaseTransferReferrals: BatchPayload;
  deleteManyCaseViolatedRights: BatchPayload;
  deleteManyClients: BatchPayload;
  deleteManyDaftarPengacaras: BatchPayload;
  deleteManyDataDicts: BatchPayload;
  deleteManyDataDictLocals: BatchPayload;
  deleteManyLogRequests: BatchPayload;
  deleteManyLogRequestApps: BatchPayload;
  deleteManyMtVocabs: BatchPayload;
  deleteManyMtVocabGroups: BatchPayload;
  deleteManyNetworks: BatchPayload;
  deleteManyPersons: BatchPayload;
  deleteManyPersonDocuments: BatchPayload;
  deleteManyRoles: BatchPayload;
  deleteManyUsers: BatchPayload;
  deleteManyUserProfiles: BatchPayload;
};

export type MutationCreateApplicationArgs = {
  data: ApplicationCreateInput;
};

export type MutationCreateCaseArgs = {
  data: CaseCreateInput;
};

export type MutationCreateCaseClassificationArgs = {
  data: CaseClassificationCreateInput;
};

export type MutationCreateCaseConsultationArgs = {
  data: CaseConsultationCreateInput;
};

export type MutationCreateCaseConsultationAppArgs = {
  data: CaseConsultationAppCreateInput;
};

export type MutationCreateCaseDocumentArgs = {
  data: CaseDocumentCreateInput;
};

export type MutationCreateCaseIssueArgs = {
  data: CaseIssueCreateInput;
};

export type MutationCreateCaseKorbanArgs = {
  data: CaseKorbanCreateInput;
};

export type MutationCreateCasePelakuArgs = {
  data: CasePelakuCreateInput;
};

export type MutationCreateCasePkArgs = {
  data: CasePkCreateInput;
};

export type MutationCreateCaseProgressArgs = {
  data: CaseProgressCreateInput;
};

export type MutationCreateCaseProgressActivityArgs = {
  data: CaseProgressActivityCreateInput;
};

export type MutationCreateCaseProgressActivityLitArgs = {
  data: CaseProgressActivityLitCreateInput;
};

export type MutationCreateCaseProgressActivityNonlitArgs = {
  data: CaseProgressActivityNonlitCreateInput;
};

export type MutationCreateCaseTransferReferralArgs = {
  data: CaseTransferReferralCreateInput;
};

export type MutationCreateCaseViolatedRightArgs = {
  data: CaseViolatedRightCreateInput;
};

export type MutationCreateClientArgs = {
  data: ClientCreateInput;
};

export type MutationCreateDaftarPengacaraArgs = {
  data: DaftarPengacaraCreateInput;
};

export type MutationCreateDataDictArgs = {
  data: DataDictCreateInput;
};

export type MutationCreateDataDictLocalArgs = {
  data: DataDictLocalCreateInput;
};

export type MutationCreateLogRequestArgs = {
  data: LogRequestCreateInput;
};

export type MutationCreateLogRequestAppArgs = {
  data: LogRequestAppCreateInput;
};

export type MutationCreateMtVocabArgs = {
  data: MtVocabCreateInput;
};

export type MutationCreateMtVocabGroupArgs = {
  data: MtVocabGroupCreateInput;
};

export type MutationCreateNetworkArgs = {
  data: NetworkCreateInput;
};

export type MutationCreatePersonArgs = {
  data: PersonCreateInput;
};

export type MutationCreatePersonDocumentArgs = {
  data: PersonDocumentCreateInput;
};

export type MutationCreateRoleArgs = {
  data: RoleCreateInput;
};

export type MutationCreateUserArgs = {
  data: UserCreateInput;
};

export type MutationCreateUserProfileArgs = {
  data: UserProfileCreateInput;
};

export type MutationUpdateApplicationArgs = {
  data: ApplicationUpdateInput;
  where: ApplicationWhereUniqueInput;
};

export type MutationUpdateCaseArgs = {
  data: CaseUpdateInput;
  where: CaseWhereUniqueInput;
};

export type MutationUpdateCaseClassificationArgs = {
  data: CaseClassificationUpdateInput;
  where: CaseClassificationWhereUniqueInput;
};

export type MutationUpdateCaseConsultationArgs = {
  data: CaseConsultationUpdateInput;
  where: CaseConsultationWhereUniqueInput;
};

export type MutationUpdateCaseConsultationAppArgs = {
  data: CaseConsultationAppUpdateInput;
  where: CaseConsultationAppWhereUniqueInput;
};

export type MutationUpdateCaseDocumentArgs = {
  data: CaseDocumentUpdateInput;
  where: CaseDocumentWhereUniqueInput;
};

export type MutationUpdateCaseIssueArgs = {
  data: CaseIssueUpdateInput;
  where: CaseIssueWhereUniqueInput;
};

export type MutationUpdateCaseKorbanArgs = {
  data: CaseKorbanUpdateInput;
  where: CaseKorbanWhereUniqueInput;
};

export type MutationUpdateCasePelakuArgs = {
  data: CasePelakuUpdateInput;
  where: CasePelakuWhereUniqueInput;
};

export type MutationUpdateCasePkArgs = {
  data: CasePkUpdateInput;
  where: CasePkWhereUniqueInput;
};

export type MutationUpdateCaseProgressArgs = {
  data: CaseProgressUpdateInput;
  where: CaseProgressWhereUniqueInput;
};

export type MutationUpdateCaseProgressActivityArgs = {
  data: CaseProgressActivityUpdateInput;
  where: CaseProgressActivityWhereUniqueInput;
};

export type MutationUpdateCaseProgressActivityLitArgs = {
  data: CaseProgressActivityLitUpdateInput;
  where: CaseProgressActivityLitWhereUniqueInput;
};

export type MutationUpdateCaseProgressActivityNonlitArgs = {
  data: CaseProgressActivityNonlitUpdateInput;
  where: CaseProgressActivityNonlitWhereUniqueInput;
};

export type MutationUpdateCaseTransferReferralArgs = {
  data: CaseTransferReferralUpdateInput;
  where: CaseTransferReferralWhereUniqueInput;
};

export type MutationUpdateCaseViolatedRightArgs = {
  data: CaseViolatedRightUpdateInput;
  where: CaseViolatedRightWhereUniqueInput;
};

export type MutationUpdateClientArgs = {
  data: ClientUpdateInput;
  where: ClientWhereUniqueInput;
};

export type MutationUpdateDaftarPengacaraArgs = {
  data: DaftarPengacaraUpdateInput;
  where: DaftarPengacaraWhereUniqueInput;
};

export type MutationUpdateDataDictArgs = {
  data: DataDictUpdateInput;
  where: DataDictWhereUniqueInput;
};

export type MutationUpdateDataDictLocalArgs = {
  data: DataDictLocalUpdateInput;
  where: DataDictLocalWhereUniqueInput;
};

export type MutationUpdateLogRequestArgs = {
  data: LogRequestUpdateInput;
  where: LogRequestWhereUniqueInput;
};

export type MutationUpdateLogRequestAppArgs = {
  data: LogRequestAppUpdateInput;
  where: LogRequestAppWhereUniqueInput;
};

export type MutationUpdateMtVocabArgs = {
  data: MtVocabUpdateInput;
  where: MtVocabWhereUniqueInput;
};

export type MutationUpdateMtVocabGroupArgs = {
  data: MtVocabGroupUpdateInput;
  where: MtVocabGroupWhereUniqueInput;
};

export type MutationUpdateNetworkArgs = {
  data: NetworkUpdateInput;
  where: NetworkWhereUniqueInput;
};

export type MutationUpdatePersonArgs = {
  data: PersonUpdateInput;
  where: PersonWhereUniqueInput;
};

export type MutationUpdatePersonDocumentArgs = {
  data: PersonDocumentUpdateInput;
  where: PersonDocumentWhereUniqueInput;
};

export type MutationUpdateRoleArgs = {
  data: RoleUpdateInput;
  where: RoleWhereUniqueInput;
};

export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type MutationUpdateUserProfileArgs = {
  data: UserProfileUpdateInput;
  where: UserProfileWhereUniqueInput;
};

export type MutationDeleteApplicationArgs = {
  where: ApplicationWhereUniqueInput;
};

export type MutationDeleteCaseArgs = {
  where: CaseWhereUniqueInput;
};

export type MutationDeleteCaseClassificationArgs = {
  where: CaseClassificationWhereUniqueInput;
};

export type MutationDeleteCaseConsultationArgs = {
  where: CaseConsultationWhereUniqueInput;
};

export type MutationDeleteCaseConsultationAppArgs = {
  where: CaseConsultationAppWhereUniqueInput;
};

export type MutationDeleteCaseDocumentArgs = {
  where: CaseDocumentWhereUniqueInput;
};

export type MutationDeleteCaseIssueArgs = {
  where: CaseIssueWhereUniqueInput;
};

export type MutationDeleteCaseKorbanArgs = {
  where: CaseKorbanWhereUniqueInput;
};

export type MutationDeleteCasePelakuArgs = {
  where: CasePelakuWhereUniqueInput;
};

export type MutationDeleteCasePkArgs = {
  where: CasePkWhereUniqueInput;
};

export type MutationDeleteCaseProgressArgs = {
  where: CaseProgressWhereUniqueInput;
};

export type MutationDeleteCaseProgressActivityArgs = {
  where: CaseProgressActivityWhereUniqueInput;
};

export type MutationDeleteCaseProgressActivityLitArgs = {
  where: CaseProgressActivityLitWhereUniqueInput;
};

export type MutationDeleteCaseProgressActivityNonlitArgs = {
  where: CaseProgressActivityNonlitWhereUniqueInput;
};

export type MutationDeleteCaseTransferReferralArgs = {
  where: CaseTransferReferralWhereUniqueInput;
};

export type MutationDeleteCaseViolatedRightArgs = {
  where: CaseViolatedRightWhereUniqueInput;
};

export type MutationDeleteClientArgs = {
  where: ClientWhereUniqueInput;
};

export type MutationDeleteDaftarPengacaraArgs = {
  where: DaftarPengacaraWhereUniqueInput;
};

export type MutationDeleteDataDictArgs = {
  where: DataDictWhereUniqueInput;
};

export type MutationDeleteDataDictLocalArgs = {
  where: DataDictLocalWhereUniqueInput;
};

export type MutationDeleteLogRequestArgs = {
  where: LogRequestWhereUniqueInput;
};

export type MutationDeleteLogRequestAppArgs = {
  where: LogRequestAppWhereUniqueInput;
};

export type MutationDeleteMtVocabArgs = {
  where: MtVocabWhereUniqueInput;
};

export type MutationDeleteMtVocabGroupArgs = {
  where: MtVocabGroupWhereUniqueInput;
};

export type MutationDeleteNetworkArgs = {
  where: NetworkWhereUniqueInput;
};

export type MutationDeletePersonArgs = {
  where: PersonWhereUniqueInput;
};

export type MutationDeletePersonDocumentArgs = {
  where: PersonDocumentWhereUniqueInput;
};

export type MutationDeleteRoleArgs = {
  where: RoleWhereUniqueInput;
};

export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};

export type MutationDeleteUserProfileArgs = {
  where: UserProfileWhereUniqueInput;
};

export type MutationUpsertApplicationArgs = {
  where: ApplicationWhereUniqueInput;
  create: ApplicationCreateInput;
  update: ApplicationUpdateInput;
};

export type MutationUpsertCaseArgs = {
  where: CaseWhereUniqueInput;
  create: CaseCreateInput;
  update: CaseUpdateInput;
};

export type MutationUpsertCaseClassificationArgs = {
  where: CaseClassificationWhereUniqueInput;
  create: CaseClassificationCreateInput;
  update: CaseClassificationUpdateInput;
};

export type MutationUpsertCaseConsultationArgs = {
  where: CaseConsultationWhereUniqueInput;
  create: CaseConsultationCreateInput;
  update: CaseConsultationUpdateInput;
};

export type MutationUpsertCaseConsultationAppArgs = {
  where: CaseConsultationAppWhereUniqueInput;
  create: CaseConsultationAppCreateInput;
  update: CaseConsultationAppUpdateInput;
};

export type MutationUpsertCaseDocumentArgs = {
  where: CaseDocumentWhereUniqueInput;
  create: CaseDocumentCreateInput;
  update: CaseDocumentUpdateInput;
};

export type MutationUpsertCaseIssueArgs = {
  where: CaseIssueWhereUniqueInput;
  create: CaseIssueCreateInput;
  update: CaseIssueUpdateInput;
};

export type MutationUpsertCaseKorbanArgs = {
  where: CaseKorbanWhereUniqueInput;
  create: CaseKorbanCreateInput;
  update: CaseKorbanUpdateInput;
};

export type MutationUpsertCasePelakuArgs = {
  where: CasePelakuWhereUniqueInput;
  create: CasePelakuCreateInput;
  update: CasePelakuUpdateInput;
};

export type MutationUpsertCasePkArgs = {
  where: CasePkWhereUniqueInput;
  create: CasePkCreateInput;
  update: CasePkUpdateInput;
};

export type MutationUpsertCaseProgressArgs = {
  where: CaseProgressWhereUniqueInput;
  create: CaseProgressCreateInput;
  update: CaseProgressUpdateInput;
};

export type MutationUpsertCaseProgressActivityArgs = {
  where: CaseProgressActivityWhereUniqueInput;
  create: CaseProgressActivityCreateInput;
  update: CaseProgressActivityUpdateInput;
};

export type MutationUpsertCaseProgressActivityLitArgs = {
  where: CaseProgressActivityLitWhereUniqueInput;
  create: CaseProgressActivityLitCreateInput;
  update: CaseProgressActivityLitUpdateInput;
};

export type MutationUpsertCaseProgressActivityNonlitArgs = {
  where: CaseProgressActivityNonlitWhereUniqueInput;
  create: CaseProgressActivityNonlitCreateInput;
  update: CaseProgressActivityNonlitUpdateInput;
};

export type MutationUpsertCaseTransferReferralArgs = {
  where: CaseTransferReferralWhereUniqueInput;
  create: CaseTransferReferralCreateInput;
  update: CaseTransferReferralUpdateInput;
};

export type MutationUpsertCaseViolatedRightArgs = {
  where: CaseViolatedRightWhereUniqueInput;
  create: CaseViolatedRightCreateInput;
  update: CaseViolatedRightUpdateInput;
};

export type MutationUpsertClientArgs = {
  where: ClientWhereUniqueInput;
  create: ClientCreateInput;
  update: ClientUpdateInput;
};

export type MutationUpsertDaftarPengacaraArgs = {
  where: DaftarPengacaraWhereUniqueInput;
  create: DaftarPengacaraCreateInput;
  update: DaftarPengacaraUpdateInput;
};

export type MutationUpsertDataDictArgs = {
  where: DataDictWhereUniqueInput;
  create: DataDictCreateInput;
  update: DataDictUpdateInput;
};

export type MutationUpsertDataDictLocalArgs = {
  where: DataDictLocalWhereUniqueInput;
  create: DataDictLocalCreateInput;
  update: DataDictLocalUpdateInput;
};

export type MutationUpsertLogRequestArgs = {
  where: LogRequestWhereUniqueInput;
  create: LogRequestCreateInput;
  update: LogRequestUpdateInput;
};

export type MutationUpsertLogRequestAppArgs = {
  where: LogRequestAppWhereUniqueInput;
  create: LogRequestAppCreateInput;
  update: LogRequestAppUpdateInput;
};

export type MutationUpsertMtVocabArgs = {
  where: MtVocabWhereUniqueInput;
  create: MtVocabCreateInput;
  update: MtVocabUpdateInput;
};

export type MutationUpsertMtVocabGroupArgs = {
  where: MtVocabGroupWhereUniqueInput;
  create: MtVocabGroupCreateInput;
  update: MtVocabGroupUpdateInput;
};

export type MutationUpsertNetworkArgs = {
  where: NetworkWhereUniqueInput;
  create: NetworkCreateInput;
  update: NetworkUpdateInput;
};

export type MutationUpsertPersonArgs = {
  where: PersonWhereUniqueInput;
  create: PersonCreateInput;
  update: PersonUpdateInput;
};

export type MutationUpsertPersonDocumentArgs = {
  where: PersonDocumentWhereUniqueInput;
  create: PersonDocumentCreateInput;
  update: PersonDocumentUpdateInput;
};

export type MutationUpsertRoleArgs = {
  where: RoleWhereUniqueInput;
  create: RoleCreateInput;
  update: RoleUpdateInput;
};

export type MutationUpsertUserArgs = {
  where: UserWhereUniqueInput;
  create: UserCreateInput;
  update: UserUpdateInput;
};

export type MutationUpsertUserProfileArgs = {
  where: UserProfileWhereUniqueInput;
  create: UserProfileCreateInput;
  update: UserProfileUpdateInput;
};

export type MutationUpdateManyApplicationsArgs = {
  data: ApplicationUpdateManyMutationInput;
  where?: Maybe<ApplicationWhereInput>;
};

export type MutationUpdateManyCasesArgs = {
  data: CaseUpdateManyMutationInput;
  where?: Maybe<CaseWhereInput>;
};

export type MutationUpdateManyCaseClassificationsArgs = {
  data: CaseClassificationUpdateManyMutationInput;
  where?: Maybe<CaseClassificationWhereInput>;
};

export type MutationUpdateManyCaseConsultationsArgs = {
  data: CaseConsultationUpdateManyMutationInput;
  where?: Maybe<CaseConsultationWhereInput>;
};

export type MutationUpdateManyCaseConsultationAppsArgs = {
  data: CaseConsultationAppUpdateManyMutationInput;
  where?: Maybe<CaseConsultationAppWhereInput>;
};

export type MutationUpdateManyCaseDocumentsArgs = {
  data: CaseDocumentUpdateManyMutationInput;
  where?: Maybe<CaseDocumentWhereInput>;
};

export type MutationUpdateManyCaseIssuesArgs = {
  data: CaseIssueUpdateManyMutationInput;
  where?: Maybe<CaseIssueWhereInput>;
};

export type MutationUpdateManyCasePksArgs = {
  data: CasePkUpdateManyMutationInput;
  where?: Maybe<CasePkWhereInput>;
};

export type MutationUpdateManyCaseProgressesArgs = {
  data: CaseProgressUpdateManyMutationInput;
  where?: Maybe<CaseProgressWhereInput>;
};

export type MutationUpdateManyCaseProgressActivitiesArgs = {
  data: CaseProgressActivityUpdateManyMutationInput;
  where?: Maybe<CaseProgressActivityWhereInput>;
};

export type MutationUpdateManyCaseProgressActivityLitsArgs = {
  data: CaseProgressActivityLitUpdateManyMutationInput;
  where?: Maybe<CaseProgressActivityLitWhereInput>;
};

export type MutationUpdateManyCaseProgressActivityNonlitsArgs = {
  data: CaseProgressActivityNonlitUpdateManyMutationInput;
  where?: Maybe<CaseProgressActivityNonlitWhereInput>;
};

export type MutationUpdateManyCaseTransferReferralsArgs = {
  data: CaseTransferReferralUpdateManyMutationInput;
  where?: Maybe<CaseTransferReferralWhereInput>;
};

export type MutationUpdateManyCaseViolatedRightsArgs = {
  data: CaseViolatedRightUpdateManyMutationInput;
  where?: Maybe<CaseViolatedRightWhereInput>;
};

export type MutationUpdateManyClientsArgs = {
  data: ClientUpdateManyMutationInput;
  where?: Maybe<ClientWhereInput>;
};

export type MutationUpdateManyDaftarPengacarasArgs = {
  data: DaftarPengacaraUpdateManyMutationInput;
  where?: Maybe<DaftarPengacaraWhereInput>;
};

export type MutationUpdateManyDataDictsArgs = {
  data: DataDictUpdateManyMutationInput;
  where?: Maybe<DataDictWhereInput>;
};

export type MutationUpdateManyDataDictLocalsArgs = {
  data: DataDictLocalUpdateManyMutationInput;
  where?: Maybe<DataDictLocalWhereInput>;
};

export type MutationUpdateManyLogRequestsArgs = {
  data: LogRequestUpdateManyMutationInput;
  where?: Maybe<LogRequestWhereInput>;
};

export type MutationUpdateManyLogRequestAppsArgs = {
  data: LogRequestAppUpdateManyMutationInput;
  where?: Maybe<LogRequestAppWhereInput>;
};

export type MutationUpdateManyMtVocabsArgs = {
  data: MtVocabUpdateManyMutationInput;
  where?: Maybe<MtVocabWhereInput>;
};

export type MutationUpdateManyMtVocabGroupsArgs = {
  data: MtVocabGroupUpdateManyMutationInput;
  where?: Maybe<MtVocabGroupWhereInput>;
};

export type MutationUpdateManyNetworksArgs = {
  data: NetworkUpdateManyMutationInput;
  where?: Maybe<NetworkWhereInput>;
};

export type MutationUpdateManyPersonsArgs = {
  data: PersonUpdateManyMutationInput;
  where?: Maybe<PersonWhereInput>;
};

export type MutationUpdateManyPersonDocumentsArgs = {
  data: PersonDocumentUpdateManyMutationInput;
  where?: Maybe<PersonDocumentWhereInput>;
};

export type MutationUpdateManyRolesArgs = {
  data: RoleUpdateManyMutationInput;
  where?: Maybe<RoleWhereInput>;
};

export type MutationUpdateManyUsersArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};

export type MutationUpdateManyUserProfilesArgs = {
  data: UserProfileUpdateManyMutationInput;
  where?: Maybe<UserProfileWhereInput>;
};

export type MutationDeleteManyApplicationsArgs = {
  where?: Maybe<ApplicationWhereInput>;
};

export type MutationDeleteManyCasesArgs = {
  where?: Maybe<CaseWhereInput>;
};

export type MutationDeleteManyCaseClassificationsArgs = {
  where?: Maybe<CaseClassificationWhereInput>;
};

export type MutationDeleteManyCaseConsultationsArgs = {
  where?: Maybe<CaseConsultationWhereInput>;
};

export type MutationDeleteManyCaseConsultationAppsArgs = {
  where?: Maybe<CaseConsultationAppWhereInput>;
};

export type MutationDeleteManyCaseDocumentsArgs = {
  where?: Maybe<CaseDocumentWhereInput>;
};

export type MutationDeleteManyCaseIssuesArgs = {
  where?: Maybe<CaseIssueWhereInput>;
};

export type MutationDeleteManyCaseKorbansArgs = {
  where?: Maybe<CaseKorbanWhereInput>;
};

export type MutationDeleteManyCasePelakusArgs = {
  where?: Maybe<CasePelakuWhereInput>;
};

export type MutationDeleteManyCasePksArgs = {
  where?: Maybe<CasePkWhereInput>;
};

export type MutationDeleteManyCaseProgressesArgs = {
  where?: Maybe<CaseProgressWhereInput>;
};

export type MutationDeleteManyCaseProgressActivitiesArgs = {
  where?: Maybe<CaseProgressActivityWhereInput>;
};

export type MutationDeleteManyCaseProgressActivityLitsArgs = {
  where?: Maybe<CaseProgressActivityLitWhereInput>;
};

export type MutationDeleteManyCaseProgressActivityNonlitsArgs = {
  where?: Maybe<CaseProgressActivityNonlitWhereInput>;
};

export type MutationDeleteManyCaseTransferReferralsArgs = {
  where?: Maybe<CaseTransferReferralWhereInput>;
};

export type MutationDeleteManyCaseViolatedRightsArgs = {
  where?: Maybe<CaseViolatedRightWhereInput>;
};

export type MutationDeleteManyClientsArgs = {
  where?: Maybe<ClientWhereInput>;
};

export type MutationDeleteManyDaftarPengacarasArgs = {
  where?: Maybe<DaftarPengacaraWhereInput>;
};

export type MutationDeleteManyDataDictsArgs = {
  where?: Maybe<DataDictWhereInput>;
};

export type MutationDeleteManyDataDictLocalsArgs = {
  where?: Maybe<DataDictLocalWhereInput>;
};

export type MutationDeleteManyLogRequestsArgs = {
  where?: Maybe<LogRequestWhereInput>;
};

export type MutationDeleteManyLogRequestAppsArgs = {
  where?: Maybe<LogRequestAppWhereInput>;
};

export type MutationDeleteManyMtVocabsArgs = {
  where?: Maybe<MtVocabWhereInput>;
};

export type MutationDeleteManyMtVocabGroupsArgs = {
  where?: Maybe<MtVocabGroupWhereInput>;
};

export type MutationDeleteManyNetworksArgs = {
  where?: Maybe<NetworkWhereInput>;
};

export type MutationDeleteManyPersonsArgs = {
  where?: Maybe<PersonWhereInput>;
};

export type MutationDeleteManyPersonDocumentsArgs = {
  where?: Maybe<PersonDocumentWhereInput>;
};

export type MutationDeleteManyRolesArgs = {
  where?: Maybe<RoleWhereInput>;
};

export type MutationDeleteManyUsersArgs = {
  where?: Maybe<UserWhereInput>;
};

export type MutationDeleteManyUserProfilesArgs = {
  where?: Maybe<UserProfileWhereInput>;
};

export enum MutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED',
}

export type Network = {
  address?: Maybe<string>;
  contactPerson?: Maybe<string>;
  createdAt: Date;
  email?: Maybe<string>;
  id: number;
  name?: Maybe<string>;
  noContact?: Maybe<string>;
  provinceId?: Maybe<number>;
  regencyId?: Maybe<number>;
  type?: Maybe<string>;
  updatedAt: Date;
};

export type NetworkConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<NetworkEdge>>;
  aggregate: AggregateNetwork;
};

export type NetworkCreateInput = {
  address: Maybe<string>;
  contactPerson: Maybe<string>;
  email: Maybe<string>;
  name: Maybe<string>;
  noContact: Maybe<string>;
  provinceId: Maybe<number>;
  regencyId: Maybe<number>;
  type: Maybe<string>;
};

export type NetworkEdge = {
  node: Network;
  cursor: string;
};

export enum NetworkOrderByInput {
  Address_Asc = 'address_ASC',
  Address_Desc = 'address_DESC',
  ContactPerson_Asc = 'contactPerson_ASC',
  ContactPerson_Desc = 'contactPerson_DESC',
  CreatedAt_Asc = 'createdAt_ASC',
  CreatedAt_Desc = 'createdAt_DESC',
  Email_Asc = 'email_ASC',
  Email_Desc = 'email_DESC',
  Id_Asc = 'id_ASC',
  Id_Desc = 'id_DESC',
  Name_Asc = 'name_ASC',
  Name_Desc = 'name_DESC',
  NoContact_Asc = 'noContact_ASC',
  NoContact_Desc = 'noContact_DESC',
  ProvinceId_Asc = 'provinceId_ASC',
  ProvinceId_Desc = 'provinceId_DESC',
  RegencyId_Asc = 'regencyId_ASC',
  RegencyId_Desc = 'regencyId_DESC',
  Type_Asc = 'type_ASC',
  Type_Desc = 'type_DESC',
  UpdatedAt_Asc = 'updatedAt_ASC',
  UpdatedAt_Desc = 'updatedAt_DESC',
}

export type NetworkPreviousValues = {
  address?: Maybe<string>;
  contactPerson?: Maybe<string>;
  createdAt: Date;
  email?: Maybe<string>;
  id: number;
  name?: Maybe<string>;
  noContact?: Maybe<string>;
  provinceId?: Maybe<number>;
  regencyId?: Maybe<number>;
  type?: Maybe<string>;
  updatedAt: Date;
};

export type NetworkSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<Network>;
  updatedFields?: Maybe<Array<string>>;
  previousValues?: Maybe<NetworkPreviousValues>;
};

export type NetworkSubscriptionWhereInput = {
  AND: Maybe<Array<NetworkSubscriptionWhereInput>>;
  OR: Maybe<Array<NetworkSubscriptionWhereInput>>;
  NOT: Maybe<Array<NetworkSubscriptionWhereInput>>;
  mutation_in: Maybe<Array<MutationType>>;
  updatedFields_contains: Maybe<string>;
  updatedFields_contains_every: Maybe<Array<string>>;
  updatedFields_contains_some: Maybe<Array<string>>;
  node: Maybe<NetworkWhereInput>;
};

export type NetworkUpdateInput = {
  address: Maybe<string>;
  contactPerson: Maybe<string>;
  email: Maybe<string>;
  name: Maybe<string>;
  noContact: Maybe<string>;
  provinceId: Maybe<number>;
  regencyId: Maybe<number>;
  type: Maybe<string>;
};

export type NetworkUpdateManyMutationInput = {
  address: Maybe<string>;
  contactPerson: Maybe<string>;
  email: Maybe<string>;
  name: Maybe<string>;
  noContact: Maybe<string>;
  provinceId: Maybe<number>;
  regencyId: Maybe<number>;
  type: Maybe<string>;
};

export type NetworkWhereInput = {
  AND: Maybe<Array<NetworkWhereInput>>;
  OR: Maybe<Array<NetworkWhereInput>>;
  NOT: Maybe<Array<NetworkWhereInput>>;
  address: Maybe<string>;
  address_not: Maybe<string>;
  address_in: Maybe<Array<string>>;
  address_not_in: Maybe<Array<string>>;
  address_lt: Maybe<string>;
  address_lte: Maybe<string>;
  address_gt: Maybe<string>;
  address_gte: Maybe<string>;
  address_contains: Maybe<string>;
  address_not_contains: Maybe<string>;
  address_starts_with: Maybe<string>;
  address_not_starts_with: Maybe<string>;
  address_ends_with: Maybe<string>;
  address_not_ends_with: Maybe<string>;
  contactPerson: Maybe<string>;
  contactPerson_not: Maybe<string>;
  contactPerson_in: Maybe<Array<string>>;
  contactPerson_not_in: Maybe<Array<string>>;
  contactPerson_lt: Maybe<string>;
  contactPerson_lte: Maybe<string>;
  contactPerson_gt: Maybe<string>;
  contactPerson_gte: Maybe<string>;
  contactPerson_contains: Maybe<string>;
  contactPerson_not_contains: Maybe<string>;
  contactPerson_starts_with: Maybe<string>;
  contactPerson_not_starts_with: Maybe<string>;
  contactPerson_ends_with: Maybe<string>;
  contactPerson_not_ends_with: Maybe<string>;
  createdAt: Maybe<Date>;
  createdAt_not: Maybe<Date>;
  createdAt_in: Maybe<Array<Date>>;
  createdAt_not_in: Maybe<Array<Date>>;
  createdAt_lt: Maybe<Date>;
  createdAt_lte: Maybe<Date>;
  createdAt_gt: Maybe<Date>;
  createdAt_gte: Maybe<Date>;
  email: Maybe<string>;
  email_not: Maybe<string>;
  email_in: Maybe<Array<string>>;
  email_not_in: Maybe<Array<string>>;
  email_lt: Maybe<string>;
  email_lte: Maybe<string>;
  email_gt: Maybe<string>;
  email_gte: Maybe<string>;
  email_contains: Maybe<string>;
  email_not_contains: Maybe<string>;
  email_starts_with: Maybe<string>;
  email_not_starts_with: Maybe<string>;
  email_ends_with: Maybe<string>;
  email_not_ends_with: Maybe<string>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  name: Maybe<string>;
  name_not: Maybe<string>;
  name_in: Maybe<Array<string>>;
  name_not_in: Maybe<Array<string>>;
  name_lt: Maybe<string>;
  name_lte: Maybe<string>;
  name_gt: Maybe<string>;
  name_gte: Maybe<string>;
  name_contains: Maybe<string>;
  name_not_contains: Maybe<string>;
  name_starts_with: Maybe<string>;
  name_not_starts_with: Maybe<string>;
  name_ends_with: Maybe<string>;
  name_not_ends_with: Maybe<string>;
  noContact: Maybe<string>;
  noContact_not: Maybe<string>;
  noContact_in: Maybe<Array<string>>;
  noContact_not_in: Maybe<Array<string>>;
  noContact_lt: Maybe<string>;
  noContact_lte: Maybe<string>;
  noContact_gt: Maybe<string>;
  noContact_gte: Maybe<string>;
  noContact_contains: Maybe<string>;
  noContact_not_contains: Maybe<string>;
  noContact_starts_with: Maybe<string>;
  noContact_not_starts_with: Maybe<string>;
  noContact_ends_with: Maybe<string>;
  noContact_not_ends_with: Maybe<string>;
  provinceId: Maybe<number>;
  provinceId_not: Maybe<number>;
  provinceId_in: Maybe<Array<number>>;
  provinceId_not_in: Maybe<Array<number>>;
  provinceId_lt: Maybe<number>;
  provinceId_lte: Maybe<number>;
  provinceId_gt: Maybe<number>;
  provinceId_gte: Maybe<number>;
  regencyId: Maybe<number>;
  regencyId_not: Maybe<number>;
  regencyId_in: Maybe<Array<number>>;
  regencyId_not_in: Maybe<Array<number>>;
  regencyId_lt: Maybe<number>;
  regencyId_lte: Maybe<number>;
  regencyId_gt: Maybe<number>;
  regencyId_gte: Maybe<number>;
  type: Maybe<string>;
  type_not: Maybe<string>;
  type_in: Maybe<Array<string>>;
  type_not_in: Maybe<Array<string>>;
  type_lt: Maybe<string>;
  type_lte: Maybe<string>;
  type_gt: Maybe<string>;
  type_gte: Maybe<string>;
  type_contains: Maybe<string>;
  type_not_contains: Maybe<string>;
  type_starts_with: Maybe<string>;
  type_not_starts_with: Maybe<string>;
  type_ends_with: Maybe<string>;
  type_not_ends_with: Maybe<string>;
  updatedAt: Maybe<Date>;
  updatedAt_not: Maybe<Date>;
  updatedAt_in: Maybe<Array<Date>>;
  updatedAt_not_in: Maybe<Array<Date>>;
  updatedAt_lt: Maybe<Date>;
  updatedAt_lte: Maybe<Date>;
  updatedAt_gt: Maybe<Date>;
  updatedAt_gte: Maybe<Date>;
};

export type NetworkWhereUniqueInput = {
  id: Maybe<number>;
};

export type Node = {
  id: string;
};

export type PageInfo = {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor?: Maybe<string>;
  endCursor?: Maybe<string>;
};

export type Person = {
  id: number;
  agama?: Maybe<string>;
  alamatDomisili?: Maybe<string>;
  alamatId?: Maybe<string>;
  alatBantu?: Maybe<string>;
  alias?: Maybe<string>;
  createdAt: Date;
  createdBy?: Maybe<string>;
  disabilitas: boolean;
  distrikDomisili?: Maybe<string>;
  distrikId?: Maybe<string>;
  domisiliSama: boolean;
  email?: Maybe<string>;
  golDarah?: Maybe<string>;
  jenisDisabilitas?: Maybe<string>;
  jenisDomisili?: Maybe<string>;
  jenisId?: Maybe<string>;
  jenisKelamin?: Maybe<string>;
  jmlAnggota?: Maybe<number>;
  namaLengkap?: Maybe<string>;
  nomorId?: Maybe<string>;
  pekerjaan?: Maybe<string>;
  pendidikan?: Maybe<string>;
  statusPernikahan?: Maybe<string>;
  telepon?: Maybe<string>;
  tglLahir?: Maybe<Date>;
  tmpLahir?: Maybe<string>;
  unitSatuan?: Maybe<string>;
  updatedAt: Date;
  updatedBy?: Maybe<string>;
  wargaNegara?: Maybe<string>;
  applications?: Maybe<Array<Application>>;
  casekorbans?: Maybe<Array<CaseKorban>>;
  casepelakus?: Maybe<Array<CasePelaku>>;
  clients?: Maybe<Array<Client>>;
  documents?: Maybe<Array<PersonDocument>>;
};

export type PersonApplicationsArgs = {
  where?: Maybe<ApplicationWhereInput>;
  orderBy?: Maybe<ApplicationOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type PersonCasekorbansArgs = {
  where?: Maybe<CaseKorbanWhereInput>;
  orderBy?: Maybe<CaseKorbanOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type PersonCasepelakusArgs = {
  where?: Maybe<CasePelakuWhereInput>;
  orderBy?: Maybe<CasePelakuOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type PersonClientsArgs = {
  where?: Maybe<ClientWhereInput>;
  orderBy?: Maybe<ClientOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type PersonDocumentsArgs = {
  where?: Maybe<PersonDocumentWhereInput>;
  orderBy?: Maybe<PersonDocumentOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type PersonConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<PersonEdge>>;
  aggregate: AggregatePerson;
};

export type PersonCreateInput = {
  agama: Maybe<string>;
  alamatDomisili: Maybe<string>;
  alamatId: Maybe<string>;
  alatBantu: Maybe<string>;
  alias: Maybe<string>;
  createdBy: Maybe<string>;
  disabilitas: boolean;
  distrikDomisili: Maybe<string>;
  distrikId: Maybe<string>;
  domisiliSama: boolean;
  email: Maybe<string>;
  golDarah: Maybe<string>;
  jenisDisabilitas: Maybe<string>;
  jenisDomisili: Maybe<string>;
  jenisId: Maybe<string>;
  jenisKelamin: Maybe<string>;
  jmlAnggota: Maybe<number>;
  namaLengkap: Maybe<string>;
  nomorId: Maybe<string>;
  pekerjaan: Maybe<string>;
  pendidikan: Maybe<string>;
  statusPernikahan: Maybe<string>;
  telepon: Maybe<string>;
  tglLahir: Maybe<Date>;
  tmpLahir: Maybe<string>;
  unitSatuan: Maybe<string>;
  updatedBy: Maybe<string>;
  wargaNegara: Maybe<string>;
  applications: Maybe<ApplicationCreateManyWithoutWakilIdInput>;
  casekorbans: Maybe<CaseKorbanCreateManyWithoutPersonIdInput>;
  casepelakus: Maybe<CasePelakuCreateManyWithoutPersonIdInput>;
  clients: Maybe<ClientCreateManyWithoutPersonIdInput>;
  documents: Maybe<PersonDocumentCreateManyWithoutPersonIdInput>;
};

export type PersonCreateOneWithoutApplicationsInput = {
  create: Maybe<PersonCreateWithoutApplicationsInput>;
  connect: Maybe<PersonWhereUniqueInput>;
};

export type PersonCreateOneWithoutCasekorbansInput = {
  create: Maybe<PersonCreateWithoutCasekorbansInput>;
  connect: Maybe<PersonWhereUniqueInput>;
};

export type PersonCreateOneWithoutCasepelakusInput = {
  create: Maybe<PersonCreateWithoutCasepelakusInput>;
  connect: Maybe<PersonWhereUniqueInput>;
};

export type PersonCreateOneWithoutClientsInput = {
  create: Maybe<PersonCreateWithoutClientsInput>;
  connect: Maybe<PersonWhereUniqueInput>;
};

export type PersonCreateOneWithoutDocumentsInput = {
  create: Maybe<PersonCreateWithoutDocumentsInput>;
  connect: Maybe<PersonWhereUniqueInput>;
};

export type PersonCreateWithoutApplicationsInput = {
  agama: Maybe<string>;
  alamatDomisili: Maybe<string>;
  alamatId: Maybe<string>;
  alatBantu: Maybe<string>;
  alias: Maybe<string>;
  createdBy: Maybe<string>;
  disabilitas: boolean;
  distrikDomisili: Maybe<string>;
  distrikId: Maybe<string>;
  domisiliSama: boolean;
  email: Maybe<string>;
  golDarah: Maybe<string>;
  jenisDisabilitas: Maybe<string>;
  jenisDomisili: Maybe<string>;
  jenisId: Maybe<string>;
  jenisKelamin: Maybe<string>;
  jmlAnggota: Maybe<number>;
  namaLengkap: Maybe<string>;
  nomorId: Maybe<string>;
  pekerjaan: Maybe<string>;
  pendidikan: Maybe<string>;
  statusPernikahan: Maybe<string>;
  telepon: Maybe<string>;
  tglLahir: Maybe<Date>;
  tmpLahir: Maybe<string>;
  unitSatuan: Maybe<string>;
  updatedBy: Maybe<string>;
  wargaNegara: Maybe<string>;
  casekorbans: Maybe<CaseKorbanCreateManyWithoutPersonIdInput>;
  casepelakus: Maybe<CasePelakuCreateManyWithoutPersonIdInput>;
  clients: Maybe<ClientCreateManyWithoutPersonIdInput>;
  documents: Maybe<PersonDocumentCreateManyWithoutPersonIdInput>;
};

export type PersonCreateWithoutCasekorbansInput = {
  agama: Maybe<string>;
  alamatDomisili: Maybe<string>;
  alamatId: Maybe<string>;
  alatBantu: Maybe<string>;
  alias: Maybe<string>;
  createdBy: Maybe<string>;
  disabilitas: boolean;
  distrikDomisili: Maybe<string>;
  distrikId: Maybe<string>;
  domisiliSama: boolean;
  email: Maybe<string>;
  golDarah: Maybe<string>;
  jenisDisabilitas: Maybe<string>;
  jenisDomisili: Maybe<string>;
  jenisId: Maybe<string>;
  jenisKelamin: Maybe<string>;
  jmlAnggota: Maybe<number>;
  namaLengkap: Maybe<string>;
  nomorId: Maybe<string>;
  pekerjaan: Maybe<string>;
  pendidikan: Maybe<string>;
  statusPernikahan: Maybe<string>;
  telepon: Maybe<string>;
  tglLahir: Maybe<Date>;
  tmpLahir: Maybe<string>;
  unitSatuan: Maybe<string>;
  updatedBy: Maybe<string>;
  wargaNegara: Maybe<string>;
  applications: Maybe<ApplicationCreateManyWithoutWakilIdInput>;
  casepelakus: Maybe<CasePelakuCreateManyWithoutPersonIdInput>;
  clients: Maybe<ClientCreateManyWithoutPersonIdInput>;
  documents: Maybe<PersonDocumentCreateManyWithoutPersonIdInput>;
};

export type PersonCreateWithoutCasepelakusInput = {
  agama: Maybe<string>;
  alamatDomisili: Maybe<string>;
  alamatId: Maybe<string>;
  alatBantu: Maybe<string>;
  alias: Maybe<string>;
  createdBy: Maybe<string>;
  disabilitas: boolean;
  distrikDomisili: Maybe<string>;
  distrikId: Maybe<string>;
  domisiliSama: boolean;
  email: Maybe<string>;
  golDarah: Maybe<string>;
  jenisDisabilitas: Maybe<string>;
  jenisDomisili: Maybe<string>;
  jenisId: Maybe<string>;
  jenisKelamin: Maybe<string>;
  jmlAnggota: Maybe<number>;
  namaLengkap: Maybe<string>;
  nomorId: Maybe<string>;
  pekerjaan: Maybe<string>;
  pendidikan: Maybe<string>;
  statusPernikahan: Maybe<string>;
  telepon: Maybe<string>;
  tglLahir: Maybe<Date>;
  tmpLahir: Maybe<string>;
  unitSatuan: Maybe<string>;
  updatedBy: Maybe<string>;
  wargaNegara: Maybe<string>;
  applications: Maybe<ApplicationCreateManyWithoutWakilIdInput>;
  casekorbans: Maybe<CaseKorbanCreateManyWithoutPersonIdInput>;
  clients: Maybe<ClientCreateManyWithoutPersonIdInput>;
  documents: Maybe<PersonDocumentCreateManyWithoutPersonIdInput>;
};

export type PersonCreateWithoutClientsInput = {
  agama: Maybe<string>;
  alamatDomisili: Maybe<string>;
  alamatId: Maybe<string>;
  alatBantu: Maybe<string>;
  alias: Maybe<string>;
  createdBy: Maybe<string>;
  disabilitas: boolean;
  distrikDomisili: Maybe<string>;
  distrikId: Maybe<string>;
  domisiliSama: boolean;
  email: Maybe<string>;
  golDarah: Maybe<string>;
  jenisDisabilitas: Maybe<string>;
  jenisDomisili: Maybe<string>;
  jenisId: Maybe<string>;
  jenisKelamin: Maybe<string>;
  jmlAnggota: Maybe<number>;
  namaLengkap: Maybe<string>;
  nomorId: Maybe<string>;
  pekerjaan: Maybe<string>;
  pendidikan: Maybe<string>;
  statusPernikahan: Maybe<string>;
  telepon: Maybe<string>;
  tglLahir: Maybe<Date>;
  tmpLahir: Maybe<string>;
  unitSatuan: Maybe<string>;
  updatedBy: Maybe<string>;
  wargaNegara: Maybe<string>;
  applications: Maybe<ApplicationCreateManyWithoutWakilIdInput>;
  casekorbans: Maybe<CaseKorbanCreateManyWithoutPersonIdInput>;
  casepelakus: Maybe<CasePelakuCreateManyWithoutPersonIdInput>;
  documents: Maybe<PersonDocumentCreateManyWithoutPersonIdInput>;
};

export type PersonCreateWithoutDocumentsInput = {
  agama: Maybe<string>;
  alamatDomisili: Maybe<string>;
  alamatId: Maybe<string>;
  alatBantu: Maybe<string>;
  alias: Maybe<string>;
  createdBy: Maybe<string>;
  disabilitas: boolean;
  distrikDomisili: Maybe<string>;
  distrikId: Maybe<string>;
  domisiliSama: boolean;
  email: Maybe<string>;
  golDarah: Maybe<string>;
  jenisDisabilitas: Maybe<string>;
  jenisDomisili: Maybe<string>;
  jenisId: Maybe<string>;
  jenisKelamin: Maybe<string>;
  jmlAnggota: Maybe<number>;
  namaLengkap: Maybe<string>;
  nomorId: Maybe<string>;
  pekerjaan: Maybe<string>;
  pendidikan: Maybe<string>;
  statusPernikahan: Maybe<string>;
  telepon: Maybe<string>;
  tglLahir: Maybe<Date>;
  tmpLahir: Maybe<string>;
  unitSatuan: Maybe<string>;
  updatedBy: Maybe<string>;
  wargaNegara: Maybe<string>;
  applications: Maybe<ApplicationCreateManyWithoutWakilIdInput>;
  casekorbans: Maybe<CaseKorbanCreateManyWithoutPersonIdInput>;
  casepelakus: Maybe<CasePelakuCreateManyWithoutPersonIdInput>;
  clients: Maybe<ClientCreateManyWithoutPersonIdInput>;
};

export type PersonDocument = {
  createdAt: Date;
  deletedAt?: Maybe<Date>;
  file?: Maybe<number>;
  id: number;
  personId: Person;
  title?: Maybe<number>;
  updatedAt: Date;
};

export type PersonDocumentConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<PersonDocumentEdge>>;
  aggregate: AggregatePersonDocument;
};

export type PersonDocumentCreateInput = {
  deletedAt: Maybe<Date>;
  file: Maybe<number>;
  title: Maybe<number>;
  personId: PersonCreateOneWithoutDocumentsInput;
};

export type PersonDocumentCreateManyWithoutPersonIdInput = {
  create: Maybe<Array<PersonDocumentCreateWithoutPersonIdInput>>;
  connect: Maybe<Array<PersonDocumentWhereUniqueInput>>;
};

export type PersonDocumentCreateWithoutPersonIdInput = {
  deletedAt: Maybe<Date>;
  file: Maybe<number>;
  title: Maybe<number>;
};

export type PersonDocumentEdge = {
  node: PersonDocument;
  cursor: string;
};

export enum PersonDocumentOrderByInput {
  CreatedAt_Asc = 'createdAt_ASC',
  CreatedAt_Desc = 'createdAt_DESC',
  DeletedAt_Asc = 'deletedAt_ASC',
  DeletedAt_Desc = 'deletedAt_DESC',
  File_Asc = 'file_ASC',
  File_Desc = 'file_DESC',
  Id_Asc = 'id_ASC',
  Id_Desc = 'id_DESC',
  Title_Asc = 'title_ASC',
  Title_Desc = 'title_DESC',
  UpdatedAt_Asc = 'updatedAt_ASC',
  UpdatedAt_Desc = 'updatedAt_DESC',
}

export type PersonDocumentPreviousValues = {
  createdAt: Date;
  deletedAt?: Maybe<Date>;
  file?: Maybe<number>;
  id: number;
  title?: Maybe<number>;
  updatedAt: Date;
};

export type PersonDocumentScalarWhereInput = {
  AND: Maybe<Array<PersonDocumentScalarWhereInput>>;
  OR: Maybe<Array<PersonDocumentScalarWhereInput>>;
  NOT: Maybe<Array<PersonDocumentScalarWhereInput>>;
  createdAt: Maybe<Date>;
  createdAt_not: Maybe<Date>;
  createdAt_in: Maybe<Array<Date>>;
  createdAt_not_in: Maybe<Array<Date>>;
  createdAt_lt: Maybe<Date>;
  createdAt_lte: Maybe<Date>;
  createdAt_gt: Maybe<Date>;
  createdAt_gte: Maybe<Date>;
  deletedAt: Maybe<Date>;
  deletedAt_not: Maybe<Date>;
  deletedAt_in: Maybe<Array<Date>>;
  deletedAt_not_in: Maybe<Array<Date>>;
  deletedAt_lt: Maybe<Date>;
  deletedAt_lte: Maybe<Date>;
  deletedAt_gt: Maybe<Date>;
  deletedAt_gte: Maybe<Date>;
  file: Maybe<number>;
  file_not: Maybe<number>;
  file_in: Maybe<Array<number>>;
  file_not_in: Maybe<Array<number>>;
  file_lt: Maybe<number>;
  file_lte: Maybe<number>;
  file_gt: Maybe<number>;
  file_gte: Maybe<number>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  title: Maybe<number>;
  title_not: Maybe<number>;
  title_in: Maybe<Array<number>>;
  title_not_in: Maybe<Array<number>>;
  title_lt: Maybe<number>;
  title_lte: Maybe<number>;
  title_gt: Maybe<number>;
  title_gte: Maybe<number>;
  updatedAt: Maybe<Date>;
  updatedAt_not: Maybe<Date>;
  updatedAt_in: Maybe<Array<Date>>;
  updatedAt_not_in: Maybe<Array<Date>>;
  updatedAt_lt: Maybe<Date>;
  updatedAt_lte: Maybe<Date>;
  updatedAt_gt: Maybe<Date>;
  updatedAt_gte: Maybe<Date>;
};

export type PersonDocumentSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<PersonDocument>;
  updatedFields?: Maybe<Array<string>>;
  previousValues?: Maybe<PersonDocumentPreviousValues>;
};

export type PersonDocumentSubscriptionWhereInput = {
  AND: Maybe<Array<PersonDocumentSubscriptionWhereInput>>;
  OR: Maybe<Array<PersonDocumentSubscriptionWhereInput>>;
  NOT: Maybe<Array<PersonDocumentSubscriptionWhereInput>>;
  mutation_in: Maybe<Array<MutationType>>;
  updatedFields_contains: Maybe<string>;
  updatedFields_contains_every: Maybe<Array<string>>;
  updatedFields_contains_some: Maybe<Array<string>>;
  node: Maybe<PersonDocumentWhereInput>;
};

export type PersonDocumentUpdateInput = {
  deletedAt: Maybe<Date>;
  file: Maybe<number>;
  title: Maybe<number>;
  personId: Maybe<PersonUpdateOneRequiredWithoutDocumentsInput>;
};

export type PersonDocumentUpdateManyDataInput = {
  deletedAt: Maybe<Date>;
  file: Maybe<number>;
  title: Maybe<number>;
};

export type PersonDocumentUpdateManyMutationInput = {
  deletedAt: Maybe<Date>;
  file: Maybe<number>;
  title: Maybe<number>;
};

export type PersonDocumentUpdateManyWithoutPersonIdInput = {
  create: Maybe<Array<PersonDocumentCreateWithoutPersonIdInput>>;
  connect: Maybe<Array<PersonDocumentWhereUniqueInput>>;
  set: Maybe<Array<PersonDocumentWhereUniqueInput>>;
  disconnect: Maybe<Array<PersonDocumentWhereUniqueInput>>;
  delete: Maybe<Array<PersonDocumentWhereUniqueInput>>;
  update: Maybe<Array<PersonDocumentUpdateWithWhereUniqueWithoutPersonIdInput>>;
  updateMany: Maybe<Array<PersonDocumentUpdateManyWithWhereNestedInput>>;
  deleteMany: Maybe<Array<PersonDocumentScalarWhereInput>>;
  upsert: Maybe<Array<PersonDocumentUpsertWithWhereUniqueWithoutPersonIdInput>>;
};

export type PersonDocumentUpdateManyWithWhereNestedInput = {
  where: PersonDocumentScalarWhereInput;
  data: PersonDocumentUpdateManyDataInput;
};

export type PersonDocumentUpdateWithoutPersonIdDataInput = {
  deletedAt: Maybe<Date>;
  file: Maybe<number>;
  title: Maybe<number>;
};

export type PersonDocumentUpdateWithWhereUniqueWithoutPersonIdInput = {
  where: PersonDocumentWhereUniqueInput;
  data: PersonDocumentUpdateWithoutPersonIdDataInput;
};

export type PersonDocumentUpsertWithWhereUniqueWithoutPersonIdInput = {
  where: PersonDocumentWhereUniqueInput;
  update: PersonDocumentUpdateWithoutPersonIdDataInput;
  create: PersonDocumentCreateWithoutPersonIdInput;
};

export type PersonDocumentWhereInput = {
  AND: Maybe<Array<PersonDocumentWhereInput>>;
  OR: Maybe<Array<PersonDocumentWhereInput>>;
  NOT: Maybe<Array<PersonDocumentWhereInput>>;
  createdAt: Maybe<Date>;
  createdAt_not: Maybe<Date>;
  createdAt_in: Maybe<Array<Date>>;
  createdAt_not_in: Maybe<Array<Date>>;
  createdAt_lt: Maybe<Date>;
  createdAt_lte: Maybe<Date>;
  createdAt_gt: Maybe<Date>;
  createdAt_gte: Maybe<Date>;
  deletedAt: Maybe<Date>;
  deletedAt_not: Maybe<Date>;
  deletedAt_in: Maybe<Array<Date>>;
  deletedAt_not_in: Maybe<Array<Date>>;
  deletedAt_lt: Maybe<Date>;
  deletedAt_lte: Maybe<Date>;
  deletedAt_gt: Maybe<Date>;
  deletedAt_gte: Maybe<Date>;
  file: Maybe<number>;
  file_not: Maybe<number>;
  file_in: Maybe<Array<number>>;
  file_not_in: Maybe<Array<number>>;
  file_lt: Maybe<number>;
  file_lte: Maybe<number>;
  file_gt: Maybe<number>;
  file_gte: Maybe<number>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  title: Maybe<number>;
  title_not: Maybe<number>;
  title_in: Maybe<Array<number>>;
  title_not_in: Maybe<Array<number>>;
  title_lt: Maybe<number>;
  title_lte: Maybe<number>;
  title_gt: Maybe<number>;
  title_gte: Maybe<number>;
  updatedAt: Maybe<Date>;
  updatedAt_not: Maybe<Date>;
  updatedAt_in: Maybe<Array<Date>>;
  updatedAt_not_in: Maybe<Array<Date>>;
  updatedAt_lt: Maybe<Date>;
  updatedAt_lte: Maybe<Date>;
  updatedAt_gt: Maybe<Date>;
  updatedAt_gte: Maybe<Date>;
  personId: Maybe<PersonWhereInput>;
};

export type PersonDocumentWhereUniqueInput = {
  id: Maybe<number>;
};

export type PersonEdge = {
  node: Person;
  cursor: string;
};

export enum PersonOrderByInput {
  Id_Asc = 'id_ASC',
  Id_Desc = 'id_DESC',
  Agama_Asc = 'agama_ASC',
  Agama_Desc = 'agama_DESC',
  AlamatDomisili_Asc = 'alamatDomisili_ASC',
  AlamatDomisili_Desc = 'alamatDomisili_DESC',
  AlamatId_Asc = 'alamatId_ASC',
  AlamatId_Desc = 'alamatId_DESC',
  AlatBantu_Asc = 'alatBantu_ASC',
  AlatBantu_Desc = 'alatBantu_DESC',
  Alias_Asc = 'alias_ASC',
  Alias_Desc = 'alias_DESC',
  CreatedAt_Asc = 'createdAt_ASC',
  CreatedAt_Desc = 'createdAt_DESC',
  CreatedBy_Asc = 'createdBy_ASC',
  CreatedBy_Desc = 'createdBy_DESC',
  Disabilitas_Asc = 'disabilitas_ASC',
  Disabilitas_Desc = 'disabilitas_DESC',
  DistrikDomisili_Asc = 'distrikDomisili_ASC',
  DistrikDomisili_Desc = 'distrikDomisili_DESC',
  DistrikId_Asc = 'distrikId_ASC',
  DistrikId_Desc = 'distrikId_DESC',
  DomisiliSama_Asc = 'domisiliSama_ASC',
  DomisiliSama_Desc = 'domisiliSama_DESC',
  Email_Asc = 'email_ASC',
  Email_Desc = 'email_DESC',
  GolDarah_Asc = 'golDarah_ASC',
  GolDarah_Desc = 'golDarah_DESC',
  JenisDisabilitas_Asc = 'jenisDisabilitas_ASC',
  JenisDisabilitas_Desc = 'jenisDisabilitas_DESC',
  JenisDomisili_Asc = 'jenisDomisili_ASC',
  JenisDomisili_Desc = 'jenisDomisili_DESC',
  JenisId_Asc = 'jenisId_ASC',
  JenisId_Desc = 'jenisId_DESC',
  JenisKelamin_Asc = 'jenisKelamin_ASC',
  JenisKelamin_Desc = 'jenisKelamin_DESC',
  JmlAnggota_Asc = 'jmlAnggota_ASC',
  JmlAnggota_Desc = 'jmlAnggota_DESC',
  NamaLengkap_Asc = 'namaLengkap_ASC',
  NamaLengkap_Desc = 'namaLengkap_DESC',
  NomorId_Asc = 'nomorId_ASC',
  NomorId_Desc = 'nomorId_DESC',
  Pekerjaan_Asc = 'pekerjaan_ASC',
  Pekerjaan_Desc = 'pekerjaan_DESC',
  Pendidikan_Asc = 'pendidikan_ASC',
  Pendidikan_Desc = 'pendidikan_DESC',
  StatusPernikahan_Asc = 'statusPernikahan_ASC',
  StatusPernikahan_Desc = 'statusPernikahan_DESC',
  Telepon_Asc = 'telepon_ASC',
  Telepon_Desc = 'telepon_DESC',
  TglLahir_Asc = 'tglLahir_ASC',
  TglLahir_Desc = 'tglLahir_DESC',
  TmpLahir_Asc = 'tmpLahir_ASC',
  TmpLahir_Desc = 'tmpLahir_DESC',
  UnitSatuan_Asc = 'unitSatuan_ASC',
  UnitSatuan_Desc = 'unitSatuan_DESC',
  UpdatedAt_Asc = 'updatedAt_ASC',
  UpdatedAt_Desc = 'updatedAt_DESC',
  UpdatedBy_Asc = 'updatedBy_ASC',
  UpdatedBy_Desc = 'updatedBy_DESC',
  WargaNegara_Asc = 'wargaNegara_ASC',
  WargaNegara_Desc = 'wargaNegara_DESC',
}

export type PersonPreviousValues = {
  id: number;
  agama?: Maybe<string>;
  alamatDomisili?: Maybe<string>;
  alamatId?: Maybe<string>;
  alatBantu?: Maybe<string>;
  alias?: Maybe<string>;
  createdAt: Date;
  createdBy?: Maybe<string>;
  disabilitas: boolean;
  distrikDomisili?: Maybe<string>;
  distrikId?: Maybe<string>;
  domisiliSama: boolean;
  email?: Maybe<string>;
  golDarah?: Maybe<string>;
  jenisDisabilitas?: Maybe<string>;
  jenisDomisili?: Maybe<string>;
  jenisId?: Maybe<string>;
  jenisKelamin?: Maybe<string>;
  jmlAnggota?: Maybe<number>;
  namaLengkap?: Maybe<string>;
  nomorId?: Maybe<string>;
  pekerjaan?: Maybe<string>;
  pendidikan?: Maybe<string>;
  statusPernikahan?: Maybe<string>;
  telepon?: Maybe<string>;
  tglLahir?: Maybe<Date>;
  tmpLahir?: Maybe<string>;
  unitSatuan?: Maybe<string>;
  updatedAt: Date;
  updatedBy?: Maybe<string>;
  wargaNegara?: Maybe<string>;
};

export type PersonSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<Person>;
  updatedFields?: Maybe<Array<string>>;
  previousValues?: Maybe<PersonPreviousValues>;
};

export type PersonSubscriptionWhereInput = {
  AND: Maybe<Array<PersonSubscriptionWhereInput>>;
  OR: Maybe<Array<PersonSubscriptionWhereInput>>;
  NOT: Maybe<Array<PersonSubscriptionWhereInput>>;
  mutation_in: Maybe<Array<MutationType>>;
  updatedFields_contains: Maybe<string>;
  updatedFields_contains_every: Maybe<Array<string>>;
  updatedFields_contains_some: Maybe<Array<string>>;
  node: Maybe<PersonWhereInput>;
};

export type PersonUpdateInput = {
  agama: Maybe<string>;
  alamatDomisili: Maybe<string>;
  alamatId: Maybe<string>;
  alatBantu: Maybe<string>;
  alias: Maybe<string>;
  createdBy: Maybe<string>;
  disabilitas: Maybe<boolean>;
  distrikDomisili: Maybe<string>;
  distrikId: Maybe<string>;
  domisiliSama: Maybe<boolean>;
  email: Maybe<string>;
  golDarah: Maybe<string>;
  jenisDisabilitas: Maybe<string>;
  jenisDomisili: Maybe<string>;
  jenisId: Maybe<string>;
  jenisKelamin: Maybe<string>;
  jmlAnggota: Maybe<number>;
  namaLengkap: Maybe<string>;
  nomorId: Maybe<string>;
  pekerjaan: Maybe<string>;
  pendidikan: Maybe<string>;
  statusPernikahan: Maybe<string>;
  telepon: Maybe<string>;
  tglLahir: Maybe<Date>;
  tmpLahir: Maybe<string>;
  unitSatuan: Maybe<string>;
  updatedBy: Maybe<string>;
  wargaNegara: Maybe<string>;
  applications: Maybe<ApplicationUpdateManyWithoutWakilIdInput>;
  casekorbans: Maybe<CaseKorbanUpdateManyWithoutPersonIdInput>;
  casepelakus: Maybe<CasePelakuUpdateManyWithoutPersonIdInput>;
  clients: Maybe<ClientUpdateManyWithoutPersonIdInput>;
  documents: Maybe<PersonDocumentUpdateManyWithoutPersonIdInput>;
};

export type PersonUpdateManyMutationInput = {
  agama: Maybe<string>;
  alamatDomisili: Maybe<string>;
  alamatId: Maybe<string>;
  alatBantu: Maybe<string>;
  alias: Maybe<string>;
  createdBy: Maybe<string>;
  disabilitas: Maybe<boolean>;
  distrikDomisili: Maybe<string>;
  distrikId: Maybe<string>;
  domisiliSama: Maybe<boolean>;
  email: Maybe<string>;
  golDarah: Maybe<string>;
  jenisDisabilitas: Maybe<string>;
  jenisDomisili: Maybe<string>;
  jenisId: Maybe<string>;
  jenisKelamin: Maybe<string>;
  jmlAnggota: Maybe<number>;
  namaLengkap: Maybe<string>;
  nomorId: Maybe<string>;
  pekerjaan: Maybe<string>;
  pendidikan: Maybe<string>;
  statusPernikahan: Maybe<string>;
  telepon: Maybe<string>;
  tglLahir: Maybe<Date>;
  tmpLahir: Maybe<string>;
  unitSatuan: Maybe<string>;
  updatedBy: Maybe<string>;
  wargaNegara: Maybe<string>;
};

export type PersonUpdateOneRequiredWithoutApplicationsInput = {
  create: Maybe<PersonCreateWithoutApplicationsInput>;
  connect: Maybe<PersonWhereUniqueInput>;
  update: Maybe<PersonUpdateWithoutApplicationsDataInput>;
  upsert: Maybe<PersonUpsertWithoutApplicationsInput>;
};

export type PersonUpdateOneRequiredWithoutClientsInput = {
  create: Maybe<PersonCreateWithoutClientsInput>;
  connect: Maybe<PersonWhereUniqueInput>;
  update: Maybe<PersonUpdateWithoutClientsDataInput>;
  upsert: Maybe<PersonUpsertWithoutClientsInput>;
};

export type PersonUpdateOneRequiredWithoutDocumentsInput = {
  create: Maybe<PersonCreateWithoutDocumentsInput>;
  connect: Maybe<PersonWhereUniqueInput>;
  update: Maybe<PersonUpdateWithoutDocumentsDataInput>;
  upsert: Maybe<PersonUpsertWithoutDocumentsInput>;
};

export type PersonUpdateOneWithoutCasekorbansInput = {
  create: Maybe<PersonCreateWithoutCasekorbansInput>;
  connect: Maybe<PersonWhereUniqueInput>;
  disconnect: Maybe<boolean>;
  delete: Maybe<boolean>;
  update: Maybe<PersonUpdateWithoutCasekorbansDataInput>;
  upsert: Maybe<PersonUpsertWithoutCasekorbansInput>;
};

export type PersonUpdateOneWithoutCasepelakusInput = {
  create: Maybe<PersonCreateWithoutCasepelakusInput>;
  connect: Maybe<PersonWhereUniqueInput>;
  disconnect: Maybe<boolean>;
  delete: Maybe<boolean>;
  update: Maybe<PersonUpdateWithoutCasepelakusDataInput>;
  upsert: Maybe<PersonUpsertWithoutCasepelakusInput>;
};

export type PersonUpdateWithoutApplicationsDataInput = {
  agama: Maybe<string>;
  alamatDomisili: Maybe<string>;
  alamatId: Maybe<string>;
  alatBantu: Maybe<string>;
  alias: Maybe<string>;
  createdBy: Maybe<string>;
  disabilitas: Maybe<boolean>;
  distrikDomisili: Maybe<string>;
  distrikId: Maybe<string>;
  domisiliSama: Maybe<boolean>;
  email: Maybe<string>;
  golDarah: Maybe<string>;
  jenisDisabilitas: Maybe<string>;
  jenisDomisili: Maybe<string>;
  jenisId: Maybe<string>;
  jenisKelamin: Maybe<string>;
  jmlAnggota: Maybe<number>;
  namaLengkap: Maybe<string>;
  nomorId: Maybe<string>;
  pekerjaan: Maybe<string>;
  pendidikan: Maybe<string>;
  statusPernikahan: Maybe<string>;
  telepon: Maybe<string>;
  tglLahir: Maybe<Date>;
  tmpLahir: Maybe<string>;
  unitSatuan: Maybe<string>;
  updatedBy: Maybe<string>;
  wargaNegara: Maybe<string>;
  casekorbans: Maybe<CaseKorbanUpdateManyWithoutPersonIdInput>;
  casepelakus: Maybe<CasePelakuUpdateManyWithoutPersonIdInput>;
  clients: Maybe<ClientUpdateManyWithoutPersonIdInput>;
  documents: Maybe<PersonDocumentUpdateManyWithoutPersonIdInput>;
};

export type PersonUpdateWithoutCasekorbansDataInput = {
  agama: Maybe<string>;
  alamatDomisili: Maybe<string>;
  alamatId: Maybe<string>;
  alatBantu: Maybe<string>;
  alias: Maybe<string>;
  createdBy: Maybe<string>;
  disabilitas: Maybe<boolean>;
  distrikDomisili: Maybe<string>;
  distrikId: Maybe<string>;
  domisiliSama: Maybe<boolean>;
  email: Maybe<string>;
  golDarah: Maybe<string>;
  jenisDisabilitas: Maybe<string>;
  jenisDomisili: Maybe<string>;
  jenisId: Maybe<string>;
  jenisKelamin: Maybe<string>;
  jmlAnggota: Maybe<number>;
  namaLengkap: Maybe<string>;
  nomorId: Maybe<string>;
  pekerjaan: Maybe<string>;
  pendidikan: Maybe<string>;
  statusPernikahan: Maybe<string>;
  telepon: Maybe<string>;
  tglLahir: Maybe<Date>;
  tmpLahir: Maybe<string>;
  unitSatuan: Maybe<string>;
  updatedBy: Maybe<string>;
  wargaNegara: Maybe<string>;
  applications: Maybe<ApplicationUpdateManyWithoutWakilIdInput>;
  casepelakus: Maybe<CasePelakuUpdateManyWithoutPersonIdInput>;
  clients: Maybe<ClientUpdateManyWithoutPersonIdInput>;
  documents: Maybe<PersonDocumentUpdateManyWithoutPersonIdInput>;
};

export type PersonUpdateWithoutCasepelakusDataInput = {
  agama: Maybe<string>;
  alamatDomisili: Maybe<string>;
  alamatId: Maybe<string>;
  alatBantu: Maybe<string>;
  alias: Maybe<string>;
  createdBy: Maybe<string>;
  disabilitas: Maybe<boolean>;
  distrikDomisili: Maybe<string>;
  distrikId: Maybe<string>;
  domisiliSama: Maybe<boolean>;
  email: Maybe<string>;
  golDarah: Maybe<string>;
  jenisDisabilitas: Maybe<string>;
  jenisDomisili: Maybe<string>;
  jenisId: Maybe<string>;
  jenisKelamin: Maybe<string>;
  jmlAnggota: Maybe<number>;
  namaLengkap: Maybe<string>;
  nomorId: Maybe<string>;
  pekerjaan: Maybe<string>;
  pendidikan: Maybe<string>;
  statusPernikahan: Maybe<string>;
  telepon: Maybe<string>;
  tglLahir: Maybe<Date>;
  tmpLahir: Maybe<string>;
  unitSatuan: Maybe<string>;
  updatedBy: Maybe<string>;
  wargaNegara: Maybe<string>;
  applications: Maybe<ApplicationUpdateManyWithoutWakilIdInput>;
  casekorbans: Maybe<CaseKorbanUpdateManyWithoutPersonIdInput>;
  clients: Maybe<ClientUpdateManyWithoutPersonIdInput>;
  documents: Maybe<PersonDocumentUpdateManyWithoutPersonIdInput>;
};

export type PersonUpdateWithoutClientsDataInput = {
  agama: Maybe<string>;
  alamatDomisili: Maybe<string>;
  alamatId: Maybe<string>;
  alatBantu: Maybe<string>;
  alias: Maybe<string>;
  createdBy: Maybe<string>;
  disabilitas: Maybe<boolean>;
  distrikDomisili: Maybe<string>;
  distrikId: Maybe<string>;
  domisiliSama: Maybe<boolean>;
  email: Maybe<string>;
  golDarah: Maybe<string>;
  jenisDisabilitas: Maybe<string>;
  jenisDomisili: Maybe<string>;
  jenisId: Maybe<string>;
  jenisKelamin: Maybe<string>;
  jmlAnggota: Maybe<number>;
  namaLengkap: Maybe<string>;
  nomorId: Maybe<string>;
  pekerjaan: Maybe<string>;
  pendidikan: Maybe<string>;
  statusPernikahan: Maybe<string>;
  telepon: Maybe<string>;
  tglLahir: Maybe<Date>;
  tmpLahir: Maybe<string>;
  unitSatuan: Maybe<string>;
  updatedBy: Maybe<string>;
  wargaNegara: Maybe<string>;
  applications: Maybe<ApplicationUpdateManyWithoutWakilIdInput>;
  casekorbans: Maybe<CaseKorbanUpdateManyWithoutPersonIdInput>;
  casepelakus: Maybe<CasePelakuUpdateManyWithoutPersonIdInput>;
  documents: Maybe<PersonDocumentUpdateManyWithoutPersonIdInput>;
};

export type PersonUpdateWithoutDocumentsDataInput = {
  agama: Maybe<string>;
  alamatDomisili: Maybe<string>;
  alamatId: Maybe<string>;
  alatBantu: Maybe<string>;
  alias: Maybe<string>;
  createdBy: Maybe<string>;
  disabilitas: Maybe<boolean>;
  distrikDomisili: Maybe<string>;
  distrikId: Maybe<string>;
  domisiliSama: Maybe<boolean>;
  email: Maybe<string>;
  golDarah: Maybe<string>;
  jenisDisabilitas: Maybe<string>;
  jenisDomisili: Maybe<string>;
  jenisId: Maybe<string>;
  jenisKelamin: Maybe<string>;
  jmlAnggota: Maybe<number>;
  namaLengkap: Maybe<string>;
  nomorId: Maybe<string>;
  pekerjaan: Maybe<string>;
  pendidikan: Maybe<string>;
  statusPernikahan: Maybe<string>;
  telepon: Maybe<string>;
  tglLahir: Maybe<Date>;
  tmpLahir: Maybe<string>;
  unitSatuan: Maybe<string>;
  updatedBy: Maybe<string>;
  wargaNegara: Maybe<string>;
  applications: Maybe<ApplicationUpdateManyWithoutWakilIdInput>;
  casekorbans: Maybe<CaseKorbanUpdateManyWithoutPersonIdInput>;
  casepelakus: Maybe<CasePelakuUpdateManyWithoutPersonIdInput>;
  clients: Maybe<ClientUpdateManyWithoutPersonIdInput>;
};

export type PersonUpsertWithoutApplicationsInput = {
  update: PersonUpdateWithoutApplicationsDataInput;
  create: PersonCreateWithoutApplicationsInput;
};

export type PersonUpsertWithoutCasekorbansInput = {
  update: PersonUpdateWithoutCasekorbansDataInput;
  create: PersonCreateWithoutCasekorbansInput;
};

export type PersonUpsertWithoutCasepelakusInput = {
  update: PersonUpdateWithoutCasepelakusDataInput;
  create: PersonCreateWithoutCasepelakusInput;
};

export type PersonUpsertWithoutClientsInput = {
  update: PersonUpdateWithoutClientsDataInput;
  create: PersonCreateWithoutClientsInput;
};

export type PersonUpsertWithoutDocumentsInput = {
  update: PersonUpdateWithoutDocumentsDataInput;
  create: PersonCreateWithoutDocumentsInput;
};

export type PersonWhereInput = {
  AND: Maybe<Array<PersonWhereInput>>;
  OR: Maybe<Array<PersonWhereInput>>;
  NOT: Maybe<Array<PersonWhereInput>>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  agama: Maybe<string>;
  agama_not: Maybe<string>;
  agama_in: Maybe<Array<string>>;
  agama_not_in: Maybe<Array<string>>;
  agama_lt: Maybe<string>;
  agama_lte: Maybe<string>;
  agama_gt: Maybe<string>;
  agama_gte: Maybe<string>;
  agama_contains: Maybe<string>;
  agama_not_contains: Maybe<string>;
  agama_starts_with: Maybe<string>;
  agama_not_starts_with: Maybe<string>;
  agama_ends_with: Maybe<string>;
  agama_not_ends_with: Maybe<string>;
  alamatDomisili: Maybe<string>;
  alamatDomisili_not: Maybe<string>;
  alamatDomisili_in: Maybe<Array<string>>;
  alamatDomisili_not_in: Maybe<Array<string>>;
  alamatDomisili_lt: Maybe<string>;
  alamatDomisili_lte: Maybe<string>;
  alamatDomisili_gt: Maybe<string>;
  alamatDomisili_gte: Maybe<string>;
  alamatDomisili_contains: Maybe<string>;
  alamatDomisili_not_contains: Maybe<string>;
  alamatDomisili_starts_with: Maybe<string>;
  alamatDomisili_not_starts_with: Maybe<string>;
  alamatDomisili_ends_with: Maybe<string>;
  alamatDomisili_not_ends_with: Maybe<string>;
  alamatId: Maybe<string>;
  alamatId_not: Maybe<string>;
  alamatId_in: Maybe<Array<string>>;
  alamatId_not_in: Maybe<Array<string>>;
  alamatId_lt: Maybe<string>;
  alamatId_lte: Maybe<string>;
  alamatId_gt: Maybe<string>;
  alamatId_gte: Maybe<string>;
  alamatId_contains: Maybe<string>;
  alamatId_not_contains: Maybe<string>;
  alamatId_starts_with: Maybe<string>;
  alamatId_not_starts_with: Maybe<string>;
  alamatId_ends_with: Maybe<string>;
  alamatId_not_ends_with: Maybe<string>;
  alatBantu: Maybe<string>;
  alatBantu_not: Maybe<string>;
  alatBantu_in: Maybe<Array<string>>;
  alatBantu_not_in: Maybe<Array<string>>;
  alatBantu_lt: Maybe<string>;
  alatBantu_lte: Maybe<string>;
  alatBantu_gt: Maybe<string>;
  alatBantu_gte: Maybe<string>;
  alatBantu_contains: Maybe<string>;
  alatBantu_not_contains: Maybe<string>;
  alatBantu_starts_with: Maybe<string>;
  alatBantu_not_starts_with: Maybe<string>;
  alatBantu_ends_with: Maybe<string>;
  alatBantu_not_ends_with: Maybe<string>;
  alias: Maybe<string>;
  alias_not: Maybe<string>;
  alias_in: Maybe<Array<string>>;
  alias_not_in: Maybe<Array<string>>;
  alias_lt: Maybe<string>;
  alias_lte: Maybe<string>;
  alias_gt: Maybe<string>;
  alias_gte: Maybe<string>;
  alias_contains: Maybe<string>;
  alias_not_contains: Maybe<string>;
  alias_starts_with: Maybe<string>;
  alias_not_starts_with: Maybe<string>;
  alias_ends_with: Maybe<string>;
  alias_not_ends_with: Maybe<string>;
  createdAt: Maybe<Date>;
  createdAt_not: Maybe<Date>;
  createdAt_in: Maybe<Array<Date>>;
  createdAt_not_in: Maybe<Array<Date>>;
  createdAt_lt: Maybe<Date>;
  createdAt_lte: Maybe<Date>;
  createdAt_gt: Maybe<Date>;
  createdAt_gte: Maybe<Date>;
  createdBy: Maybe<string>;
  createdBy_not: Maybe<string>;
  createdBy_in: Maybe<Array<string>>;
  createdBy_not_in: Maybe<Array<string>>;
  createdBy_lt: Maybe<string>;
  createdBy_lte: Maybe<string>;
  createdBy_gt: Maybe<string>;
  createdBy_gte: Maybe<string>;
  createdBy_contains: Maybe<string>;
  createdBy_not_contains: Maybe<string>;
  createdBy_starts_with: Maybe<string>;
  createdBy_not_starts_with: Maybe<string>;
  createdBy_ends_with: Maybe<string>;
  createdBy_not_ends_with: Maybe<string>;
  disabilitas: Maybe<boolean>;
  disabilitas_not: Maybe<boolean>;
  distrikDomisili: Maybe<string>;
  distrikDomisili_not: Maybe<string>;
  distrikDomisili_in: Maybe<Array<string>>;
  distrikDomisili_not_in: Maybe<Array<string>>;
  distrikDomisili_lt: Maybe<string>;
  distrikDomisili_lte: Maybe<string>;
  distrikDomisili_gt: Maybe<string>;
  distrikDomisili_gte: Maybe<string>;
  distrikDomisili_contains: Maybe<string>;
  distrikDomisili_not_contains: Maybe<string>;
  distrikDomisili_starts_with: Maybe<string>;
  distrikDomisili_not_starts_with: Maybe<string>;
  distrikDomisili_ends_with: Maybe<string>;
  distrikDomisili_not_ends_with: Maybe<string>;
  distrikId: Maybe<string>;
  distrikId_not: Maybe<string>;
  distrikId_in: Maybe<Array<string>>;
  distrikId_not_in: Maybe<Array<string>>;
  distrikId_lt: Maybe<string>;
  distrikId_lte: Maybe<string>;
  distrikId_gt: Maybe<string>;
  distrikId_gte: Maybe<string>;
  distrikId_contains: Maybe<string>;
  distrikId_not_contains: Maybe<string>;
  distrikId_starts_with: Maybe<string>;
  distrikId_not_starts_with: Maybe<string>;
  distrikId_ends_with: Maybe<string>;
  distrikId_not_ends_with: Maybe<string>;
  domisiliSama: Maybe<boolean>;
  domisiliSama_not: Maybe<boolean>;
  email: Maybe<string>;
  email_not: Maybe<string>;
  email_in: Maybe<Array<string>>;
  email_not_in: Maybe<Array<string>>;
  email_lt: Maybe<string>;
  email_lte: Maybe<string>;
  email_gt: Maybe<string>;
  email_gte: Maybe<string>;
  email_contains: Maybe<string>;
  email_not_contains: Maybe<string>;
  email_starts_with: Maybe<string>;
  email_not_starts_with: Maybe<string>;
  email_ends_with: Maybe<string>;
  email_not_ends_with: Maybe<string>;
  golDarah: Maybe<string>;
  golDarah_not: Maybe<string>;
  golDarah_in: Maybe<Array<string>>;
  golDarah_not_in: Maybe<Array<string>>;
  golDarah_lt: Maybe<string>;
  golDarah_lte: Maybe<string>;
  golDarah_gt: Maybe<string>;
  golDarah_gte: Maybe<string>;
  golDarah_contains: Maybe<string>;
  golDarah_not_contains: Maybe<string>;
  golDarah_starts_with: Maybe<string>;
  golDarah_not_starts_with: Maybe<string>;
  golDarah_ends_with: Maybe<string>;
  golDarah_not_ends_with: Maybe<string>;
  jenisDisabilitas: Maybe<string>;
  jenisDisabilitas_not: Maybe<string>;
  jenisDisabilitas_in: Maybe<Array<string>>;
  jenisDisabilitas_not_in: Maybe<Array<string>>;
  jenisDisabilitas_lt: Maybe<string>;
  jenisDisabilitas_lte: Maybe<string>;
  jenisDisabilitas_gt: Maybe<string>;
  jenisDisabilitas_gte: Maybe<string>;
  jenisDisabilitas_contains: Maybe<string>;
  jenisDisabilitas_not_contains: Maybe<string>;
  jenisDisabilitas_starts_with: Maybe<string>;
  jenisDisabilitas_not_starts_with: Maybe<string>;
  jenisDisabilitas_ends_with: Maybe<string>;
  jenisDisabilitas_not_ends_with: Maybe<string>;
  jenisDomisili: Maybe<string>;
  jenisDomisili_not: Maybe<string>;
  jenisDomisili_in: Maybe<Array<string>>;
  jenisDomisili_not_in: Maybe<Array<string>>;
  jenisDomisili_lt: Maybe<string>;
  jenisDomisili_lte: Maybe<string>;
  jenisDomisili_gt: Maybe<string>;
  jenisDomisili_gte: Maybe<string>;
  jenisDomisili_contains: Maybe<string>;
  jenisDomisili_not_contains: Maybe<string>;
  jenisDomisili_starts_with: Maybe<string>;
  jenisDomisili_not_starts_with: Maybe<string>;
  jenisDomisili_ends_with: Maybe<string>;
  jenisDomisili_not_ends_with: Maybe<string>;
  jenisId: Maybe<string>;
  jenisId_not: Maybe<string>;
  jenisId_in: Maybe<Array<string>>;
  jenisId_not_in: Maybe<Array<string>>;
  jenisId_lt: Maybe<string>;
  jenisId_lte: Maybe<string>;
  jenisId_gt: Maybe<string>;
  jenisId_gte: Maybe<string>;
  jenisId_contains: Maybe<string>;
  jenisId_not_contains: Maybe<string>;
  jenisId_starts_with: Maybe<string>;
  jenisId_not_starts_with: Maybe<string>;
  jenisId_ends_with: Maybe<string>;
  jenisId_not_ends_with: Maybe<string>;
  jenisKelamin: Maybe<string>;
  jenisKelamin_not: Maybe<string>;
  jenisKelamin_in: Maybe<Array<string>>;
  jenisKelamin_not_in: Maybe<Array<string>>;
  jenisKelamin_lt: Maybe<string>;
  jenisKelamin_lte: Maybe<string>;
  jenisKelamin_gt: Maybe<string>;
  jenisKelamin_gte: Maybe<string>;
  jenisKelamin_contains: Maybe<string>;
  jenisKelamin_not_contains: Maybe<string>;
  jenisKelamin_starts_with: Maybe<string>;
  jenisKelamin_not_starts_with: Maybe<string>;
  jenisKelamin_ends_with: Maybe<string>;
  jenisKelamin_not_ends_with: Maybe<string>;
  jmlAnggota: Maybe<number>;
  jmlAnggota_not: Maybe<number>;
  jmlAnggota_in: Maybe<Array<number>>;
  jmlAnggota_not_in: Maybe<Array<number>>;
  jmlAnggota_lt: Maybe<number>;
  jmlAnggota_lte: Maybe<number>;
  jmlAnggota_gt: Maybe<number>;
  jmlAnggota_gte: Maybe<number>;
  namaLengkap: Maybe<string>;
  namaLengkap_not: Maybe<string>;
  namaLengkap_in: Maybe<Array<string>>;
  namaLengkap_not_in: Maybe<Array<string>>;
  namaLengkap_lt: Maybe<string>;
  namaLengkap_lte: Maybe<string>;
  namaLengkap_gt: Maybe<string>;
  namaLengkap_gte: Maybe<string>;
  namaLengkap_contains: Maybe<string>;
  namaLengkap_not_contains: Maybe<string>;
  namaLengkap_starts_with: Maybe<string>;
  namaLengkap_not_starts_with: Maybe<string>;
  namaLengkap_ends_with: Maybe<string>;
  namaLengkap_not_ends_with: Maybe<string>;
  nomorId: Maybe<string>;
  nomorId_not: Maybe<string>;
  nomorId_in: Maybe<Array<string>>;
  nomorId_not_in: Maybe<Array<string>>;
  nomorId_lt: Maybe<string>;
  nomorId_lte: Maybe<string>;
  nomorId_gt: Maybe<string>;
  nomorId_gte: Maybe<string>;
  nomorId_contains: Maybe<string>;
  nomorId_not_contains: Maybe<string>;
  nomorId_starts_with: Maybe<string>;
  nomorId_not_starts_with: Maybe<string>;
  nomorId_ends_with: Maybe<string>;
  nomorId_not_ends_with: Maybe<string>;
  pekerjaan: Maybe<string>;
  pekerjaan_not: Maybe<string>;
  pekerjaan_in: Maybe<Array<string>>;
  pekerjaan_not_in: Maybe<Array<string>>;
  pekerjaan_lt: Maybe<string>;
  pekerjaan_lte: Maybe<string>;
  pekerjaan_gt: Maybe<string>;
  pekerjaan_gte: Maybe<string>;
  pekerjaan_contains: Maybe<string>;
  pekerjaan_not_contains: Maybe<string>;
  pekerjaan_starts_with: Maybe<string>;
  pekerjaan_not_starts_with: Maybe<string>;
  pekerjaan_ends_with: Maybe<string>;
  pekerjaan_not_ends_with: Maybe<string>;
  pendidikan: Maybe<string>;
  pendidikan_not: Maybe<string>;
  pendidikan_in: Maybe<Array<string>>;
  pendidikan_not_in: Maybe<Array<string>>;
  pendidikan_lt: Maybe<string>;
  pendidikan_lte: Maybe<string>;
  pendidikan_gt: Maybe<string>;
  pendidikan_gte: Maybe<string>;
  pendidikan_contains: Maybe<string>;
  pendidikan_not_contains: Maybe<string>;
  pendidikan_starts_with: Maybe<string>;
  pendidikan_not_starts_with: Maybe<string>;
  pendidikan_ends_with: Maybe<string>;
  pendidikan_not_ends_with: Maybe<string>;
  statusPernikahan: Maybe<string>;
  statusPernikahan_not: Maybe<string>;
  statusPernikahan_in: Maybe<Array<string>>;
  statusPernikahan_not_in: Maybe<Array<string>>;
  statusPernikahan_lt: Maybe<string>;
  statusPernikahan_lte: Maybe<string>;
  statusPernikahan_gt: Maybe<string>;
  statusPernikahan_gte: Maybe<string>;
  statusPernikahan_contains: Maybe<string>;
  statusPernikahan_not_contains: Maybe<string>;
  statusPernikahan_starts_with: Maybe<string>;
  statusPernikahan_not_starts_with: Maybe<string>;
  statusPernikahan_ends_with: Maybe<string>;
  statusPernikahan_not_ends_with: Maybe<string>;
  telepon: Maybe<string>;
  telepon_not: Maybe<string>;
  telepon_in: Maybe<Array<string>>;
  telepon_not_in: Maybe<Array<string>>;
  telepon_lt: Maybe<string>;
  telepon_lte: Maybe<string>;
  telepon_gt: Maybe<string>;
  telepon_gte: Maybe<string>;
  telepon_contains: Maybe<string>;
  telepon_not_contains: Maybe<string>;
  telepon_starts_with: Maybe<string>;
  telepon_not_starts_with: Maybe<string>;
  telepon_ends_with: Maybe<string>;
  telepon_not_ends_with: Maybe<string>;
  tglLahir: Maybe<Date>;
  tglLahir_not: Maybe<Date>;
  tglLahir_in: Maybe<Array<Date>>;
  tglLahir_not_in: Maybe<Array<Date>>;
  tglLahir_lt: Maybe<Date>;
  tglLahir_lte: Maybe<Date>;
  tglLahir_gt: Maybe<Date>;
  tglLahir_gte: Maybe<Date>;
  tmpLahir: Maybe<string>;
  tmpLahir_not: Maybe<string>;
  tmpLahir_in: Maybe<Array<string>>;
  tmpLahir_not_in: Maybe<Array<string>>;
  tmpLahir_lt: Maybe<string>;
  tmpLahir_lte: Maybe<string>;
  tmpLahir_gt: Maybe<string>;
  tmpLahir_gte: Maybe<string>;
  tmpLahir_contains: Maybe<string>;
  tmpLahir_not_contains: Maybe<string>;
  tmpLahir_starts_with: Maybe<string>;
  tmpLahir_not_starts_with: Maybe<string>;
  tmpLahir_ends_with: Maybe<string>;
  tmpLahir_not_ends_with: Maybe<string>;
  unitSatuan: Maybe<string>;
  unitSatuan_not: Maybe<string>;
  unitSatuan_in: Maybe<Array<string>>;
  unitSatuan_not_in: Maybe<Array<string>>;
  unitSatuan_lt: Maybe<string>;
  unitSatuan_lte: Maybe<string>;
  unitSatuan_gt: Maybe<string>;
  unitSatuan_gte: Maybe<string>;
  unitSatuan_contains: Maybe<string>;
  unitSatuan_not_contains: Maybe<string>;
  unitSatuan_starts_with: Maybe<string>;
  unitSatuan_not_starts_with: Maybe<string>;
  unitSatuan_ends_with: Maybe<string>;
  unitSatuan_not_ends_with: Maybe<string>;
  updatedAt: Maybe<Date>;
  updatedAt_not: Maybe<Date>;
  updatedAt_in: Maybe<Array<Date>>;
  updatedAt_not_in: Maybe<Array<Date>>;
  updatedAt_lt: Maybe<Date>;
  updatedAt_lte: Maybe<Date>;
  updatedAt_gt: Maybe<Date>;
  updatedAt_gte: Maybe<Date>;
  updatedBy: Maybe<string>;
  updatedBy_not: Maybe<string>;
  updatedBy_in: Maybe<Array<string>>;
  updatedBy_not_in: Maybe<Array<string>>;
  updatedBy_lt: Maybe<string>;
  updatedBy_lte: Maybe<string>;
  updatedBy_gt: Maybe<string>;
  updatedBy_gte: Maybe<string>;
  updatedBy_contains: Maybe<string>;
  updatedBy_not_contains: Maybe<string>;
  updatedBy_starts_with: Maybe<string>;
  updatedBy_not_starts_with: Maybe<string>;
  updatedBy_ends_with: Maybe<string>;
  updatedBy_not_ends_with: Maybe<string>;
  wargaNegara: Maybe<string>;
  wargaNegara_not: Maybe<string>;
  wargaNegara_in: Maybe<Array<string>>;
  wargaNegara_not_in: Maybe<Array<string>>;
  wargaNegara_lt: Maybe<string>;
  wargaNegara_lte: Maybe<string>;
  wargaNegara_gt: Maybe<string>;
  wargaNegara_gte: Maybe<string>;
  wargaNegara_contains: Maybe<string>;
  wargaNegara_not_contains: Maybe<string>;
  wargaNegara_starts_with: Maybe<string>;
  wargaNegara_not_starts_with: Maybe<string>;
  wargaNegara_ends_with: Maybe<string>;
  wargaNegara_not_ends_with: Maybe<string>;
  applications_every: Maybe<ApplicationWhereInput>;
  applications_some: Maybe<ApplicationWhereInput>;
  applications_none: Maybe<ApplicationWhereInput>;
  casekorbans_every: Maybe<CaseKorbanWhereInput>;
  casekorbans_some: Maybe<CaseKorbanWhereInput>;
  casekorbans_none: Maybe<CaseKorbanWhereInput>;
  casepelakus_every: Maybe<CasePelakuWhereInput>;
  casepelakus_some: Maybe<CasePelakuWhereInput>;
  casepelakus_none: Maybe<CasePelakuWhereInput>;
  clients_every: Maybe<ClientWhereInput>;
  clients_some: Maybe<ClientWhereInput>;
  clients_none: Maybe<ClientWhereInput>;
  documents_every: Maybe<PersonDocumentWhereInput>;
  documents_some: Maybe<PersonDocumentWhereInput>;
  documents_none: Maybe<PersonDocumentWhereInput>;
};

export type PersonWhereUniqueInput = {
  id: Maybe<number>;
};

export type Query = {
  applications: Array<Maybe<Application>>;
  cases: Array<Maybe<Case>>;
  caseClassifications: Array<Maybe<CaseClassification>>;
  caseConsultations: Array<Maybe<CaseConsultation>>;
  caseConsultationApps: Array<Maybe<CaseConsultationApp>>;
  caseDocuments: Array<Maybe<CaseDocument>>;
  caseIssues: Array<Maybe<CaseIssue>>;
  caseKorbans: Array<Maybe<CaseKorban>>;
  casePelakus: Array<Maybe<CasePelaku>>;
  casePks: Array<Maybe<CasePk>>;
  caseProgresses: Array<Maybe<CaseProgress>>;
  caseProgressActivities: Array<Maybe<CaseProgressActivity>>;
  caseProgressActivityLits: Array<Maybe<CaseProgressActivityLit>>;
  caseProgressActivityNonlits: Array<Maybe<CaseProgressActivityNonlit>>;
  caseTransferReferrals: Array<Maybe<CaseTransferReferral>>;
  caseViolatedRights: Array<Maybe<CaseViolatedRight>>;
  clients: Array<Maybe<Client>>;
  daftarPengacaras: Array<Maybe<DaftarPengacara>>;
  dataDicts: Array<Maybe<DataDict>>;
  dataDictLocals: Array<Maybe<DataDictLocal>>;
  logRequests: Array<Maybe<LogRequest>>;
  logRequestApps: Array<Maybe<LogRequestApp>>;
  mtVocabs: Array<Maybe<MtVocab>>;
  mtVocabGroups: Array<Maybe<MtVocabGroup>>;
  networks: Array<Maybe<Network>>;
  persons: Array<Maybe<Person>>;
  personDocuments: Array<Maybe<PersonDocument>>;
  roles: Array<Maybe<Role>>;
  users: Array<Maybe<User>>;
  userProfiles: Array<Maybe<UserProfile>>;
  application?: Maybe<Application>;
  case?: Maybe<Case>;
  caseClassification?: Maybe<CaseClassification>;
  caseConsultation?: Maybe<CaseConsultation>;
  caseConsultationApp?: Maybe<CaseConsultationApp>;
  caseDocument?: Maybe<CaseDocument>;
  caseIssue?: Maybe<CaseIssue>;
  caseKorban?: Maybe<CaseKorban>;
  casePelaku?: Maybe<CasePelaku>;
  casePk?: Maybe<CasePk>;
  caseProgress?: Maybe<CaseProgress>;
  caseProgressActivity?: Maybe<CaseProgressActivity>;
  caseProgressActivityLit?: Maybe<CaseProgressActivityLit>;
  caseProgressActivityNonlit?: Maybe<CaseProgressActivityNonlit>;
  caseTransferReferral?: Maybe<CaseTransferReferral>;
  caseViolatedRight?: Maybe<CaseViolatedRight>;
  client?: Maybe<Client>;
  daftarPengacara?: Maybe<DaftarPengacara>;
  dataDict?: Maybe<DataDict>;
  dataDictLocal?: Maybe<DataDictLocal>;
  logRequest?: Maybe<LogRequest>;
  logRequestApp?: Maybe<LogRequestApp>;
  mtVocab?: Maybe<MtVocab>;
  mtVocabGroup?: Maybe<MtVocabGroup>;
  network?: Maybe<Network>;
  person?: Maybe<Person>;
  personDocument?: Maybe<PersonDocument>;
  role?: Maybe<Role>;
  user?: Maybe<User>;
  userProfile?: Maybe<UserProfile>;
  applicationsConnection: ApplicationConnection;
  casesConnection: CaseConnection;
  caseClassificationsConnection: CaseClassificationConnection;
  caseConsultationsConnection: CaseConsultationConnection;
  caseConsultationAppsConnection: CaseConsultationAppConnection;
  caseDocumentsConnection: CaseDocumentConnection;
  caseIssuesConnection: CaseIssueConnection;
  caseKorbansConnection: CaseKorbanConnection;
  casePelakusConnection: CasePelakuConnection;
  casePksConnection: CasePkConnection;
  caseProgressesConnection: CaseProgressConnection;
  caseProgressActivitiesConnection: CaseProgressActivityConnection;
  caseProgressActivityLitsConnection: CaseProgressActivityLitConnection;
  caseProgressActivityNonlitsConnection: CaseProgressActivityNonlitConnection;
  caseTransferReferralsConnection: CaseTransferReferralConnection;
  caseViolatedRightsConnection: CaseViolatedRightConnection;
  clientsConnection: ClientConnection;
  daftarPengacarasConnection: DaftarPengacaraConnection;
  dataDictsConnection: DataDictConnection;
  dataDictLocalsConnection: DataDictLocalConnection;
  logRequestsConnection: LogRequestConnection;
  logRequestAppsConnection: LogRequestAppConnection;
  mtVocabsConnection: MtVocabConnection;
  mtVocabGroupsConnection: MtVocabGroupConnection;
  networksConnection: NetworkConnection;
  personsConnection: PersonConnection;
  personDocumentsConnection: PersonDocumentConnection;
  rolesConnection: RoleConnection;
  usersConnection: UserConnection;
  userProfilesConnection: UserProfileConnection;
  node?: Maybe<Node>;
};

export type QueryApplicationsArgs = {
  where?: Maybe<ApplicationWhereInput>;
  orderBy?: Maybe<ApplicationOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryCasesArgs = {
  where?: Maybe<CaseWhereInput>;
  orderBy?: Maybe<CaseOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryCaseClassificationsArgs = {
  where?: Maybe<CaseClassificationWhereInput>;
  orderBy?: Maybe<CaseClassificationOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryCaseConsultationsArgs = {
  where?: Maybe<CaseConsultationWhereInput>;
  orderBy?: Maybe<CaseConsultationOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryCaseConsultationAppsArgs = {
  where?: Maybe<CaseConsultationAppWhereInput>;
  orderBy?: Maybe<CaseConsultationAppOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryCaseDocumentsArgs = {
  where?: Maybe<CaseDocumentWhereInput>;
  orderBy?: Maybe<CaseDocumentOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryCaseIssuesArgs = {
  where?: Maybe<CaseIssueWhereInput>;
  orderBy?: Maybe<CaseIssueOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryCaseKorbansArgs = {
  where?: Maybe<CaseKorbanWhereInput>;
  orderBy?: Maybe<CaseKorbanOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryCasePelakusArgs = {
  where?: Maybe<CasePelakuWhereInput>;
  orderBy?: Maybe<CasePelakuOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryCasePksArgs = {
  where?: Maybe<CasePkWhereInput>;
  orderBy?: Maybe<CasePkOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryCaseProgressesArgs = {
  where?: Maybe<CaseProgressWhereInput>;
  orderBy?: Maybe<CaseProgressOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryCaseProgressActivitiesArgs = {
  where?: Maybe<CaseProgressActivityWhereInput>;
  orderBy?: Maybe<CaseProgressActivityOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryCaseProgressActivityLitsArgs = {
  where?: Maybe<CaseProgressActivityLitWhereInput>;
  orderBy?: Maybe<CaseProgressActivityLitOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryCaseProgressActivityNonlitsArgs = {
  where?: Maybe<CaseProgressActivityNonlitWhereInput>;
  orderBy?: Maybe<CaseProgressActivityNonlitOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryCaseTransferReferralsArgs = {
  where?: Maybe<CaseTransferReferralWhereInput>;
  orderBy?: Maybe<CaseTransferReferralOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryCaseViolatedRightsArgs = {
  where?: Maybe<CaseViolatedRightWhereInput>;
  orderBy?: Maybe<CaseViolatedRightOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryClientsArgs = {
  where?: Maybe<ClientWhereInput>;
  orderBy?: Maybe<ClientOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryDaftarPengacarasArgs = {
  where?: Maybe<DaftarPengacaraWhereInput>;
  orderBy?: Maybe<DaftarPengacaraOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryDataDictsArgs = {
  where?: Maybe<DataDictWhereInput>;
  orderBy?: Maybe<DataDictOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryDataDictLocalsArgs = {
  where?: Maybe<DataDictLocalWhereInput>;
  orderBy?: Maybe<DataDictLocalOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryLogRequestsArgs = {
  where?: Maybe<LogRequestWhereInput>;
  orderBy?: Maybe<LogRequestOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryLogRequestAppsArgs = {
  where?: Maybe<LogRequestAppWhereInput>;
  orderBy?: Maybe<LogRequestAppOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryMtVocabsArgs = {
  where?: Maybe<MtVocabWhereInput>;
  orderBy?: Maybe<MtVocabOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryMtVocabGroupsArgs = {
  where?: Maybe<MtVocabGroupWhereInput>;
  orderBy?: Maybe<MtVocabGroupOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryNetworksArgs = {
  where?: Maybe<NetworkWhereInput>;
  orderBy?: Maybe<NetworkOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryPersonsArgs = {
  where?: Maybe<PersonWhereInput>;
  orderBy?: Maybe<PersonOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryPersonDocumentsArgs = {
  where?: Maybe<PersonDocumentWhereInput>;
  orderBy?: Maybe<PersonDocumentOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryRolesArgs = {
  where?: Maybe<RoleWhereInput>;
  orderBy?: Maybe<RoleOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryUserProfilesArgs = {
  where?: Maybe<UserProfileWhereInput>;
  orderBy?: Maybe<UserProfileOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryApplicationArgs = {
  where: ApplicationWhereUniqueInput;
};

export type QueryCaseArgs = {
  where: CaseWhereUniqueInput;
};

export type QueryCaseClassificationArgs = {
  where: CaseClassificationWhereUniqueInput;
};

export type QueryCaseConsultationArgs = {
  where: CaseConsultationWhereUniqueInput;
};

export type QueryCaseConsultationAppArgs = {
  where: CaseConsultationAppWhereUniqueInput;
};

export type QueryCaseDocumentArgs = {
  where: CaseDocumentWhereUniqueInput;
};

export type QueryCaseIssueArgs = {
  where: CaseIssueWhereUniqueInput;
};

export type QueryCaseKorbanArgs = {
  where: CaseKorbanWhereUniqueInput;
};

export type QueryCasePelakuArgs = {
  where: CasePelakuWhereUniqueInput;
};

export type QueryCasePkArgs = {
  where: CasePkWhereUniqueInput;
};

export type QueryCaseProgressArgs = {
  where: CaseProgressWhereUniqueInput;
};

export type QueryCaseProgressActivityArgs = {
  where: CaseProgressActivityWhereUniqueInput;
};

export type QueryCaseProgressActivityLitArgs = {
  where: CaseProgressActivityLitWhereUniqueInput;
};

export type QueryCaseProgressActivityNonlitArgs = {
  where: CaseProgressActivityNonlitWhereUniqueInput;
};

export type QueryCaseTransferReferralArgs = {
  where: CaseTransferReferralWhereUniqueInput;
};

export type QueryCaseViolatedRightArgs = {
  where: CaseViolatedRightWhereUniqueInput;
};

export type QueryClientArgs = {
  where: ClientWhereUniqueInput;
};

export type QueryDaftarPengacaraArgs = {
  where: DaftarPengacaraWhereUniqueInput;
};

export type QueryDataDictArgs = {
  where: DataDictWhereUniqueInput;
};

export type QueryDataDictLocalArgs = {
  where: DataDictLocalWhereUniqueInput;
};

export type QueryLogRequestArgs = {
  where: LogRequestWhereUniqueInput;
};

export type QueryLogRequestAppArgs = {
  where: LogRequestAppWhereUniqueInput;
};

export type QueryMtVocabArgs = {
  where: MtVocabWhereUniqueInput;
};

export type QueryMtVocabGroupArgs = {
  where: MtVocabGroupWhereUniqueInput;
};

export type QueryNetworkArgs = {
  where: NetworkWhereUniqueInput;
};

export type QueryPersonArgs = {
  where: PersonWhereUniqueInput;
};

export type QueryPersonDocumentArgs = {
  where: PersonDocumentWhereUniqueInput;
};

export type QueryRoleArgs = {
  where: RoleWhereUniqueInput;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type QueryUserProfileArgs = {
  where: UserProfileWhereUniqueInput;
};

export type QueryApplicationsConnectionArgs = {
  where?: Maybe<ApplicationWhereInput>;
  orderBy?: Maybe<ApplicationOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryCasesConnectionArgs = {
  where?: Maybe<CaseWhereInput>;
  orderBy?: Maybe<CaseOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryCaseClassificationsConnectionArgs = {
  where?: Maybe<CaseClassificationWhereInput>;
  orderBy?: Maybe<CaseClassificationOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryCaseConsultationsConnectionArgs = {
  where?: Maybe<CaseConsultationWhereInput>;
  orderBy?: Maybe<CaseConsultationOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryCaseConsultationAppsConnectionArgs = {
  where?: Maybe<CaseConsultationAppWhereInput>;
  orderBy?: Maybe<CaseConsultationAppOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryCaseDocumentsConnectionArgs = {
  where?: Maybe<CaseDocumentWhereInput>;
  orderBy?: Maybe<CaseDocumentOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryCaseIssuesConnectionArgs = {
  where?: Maybe<CaseIssueWhereInput>;
  orderBy?: Maybe<CaseIssueOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryCaseKorbansConnectionArgs = {
  where?: Maybe<CaseKorbanWhereInput>;
  orderBy?: Maybe<CaseKorbanOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryCasePelakusConnectionArgs = {
  where?: Maybe<CasePelakuWhereInput>;
  orderBy?: Maybe<CasePelakuOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryCasePksConnectionArgs = {
  where?: Maybe<CasePkWhereInput>;
  orderBy?: Maybe<CasePkOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryCaseProgressesConnectionArgs = {
  where?: Maybe<CaseProgressWhereInput>;
  orderBy?: Maybe<CaseProgressOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryCaseProgressActivitiesConnectionArgs = {
  where?: Maybe<CaseProgressActivityWhereInput>;
  orderBy?: Maybe<CaseProgressActivityOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryCaseProgressActivityLitsConnectionArgs = {
  where?: Maybe<CaseProgressActivityLitWhereInput>;
  orderBy?: Maybe<CaseProgressActivityLitOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryCaseProgressActivityNonlitsConnectionArgs = {
  where?: Maybe<CaseProgressActivityNonlitWhereInput>;
  orderBy?: Maybe<CaseProgressActivityNonlitOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryCaseTransferReferralsConnectionArgs = {
  where?: Maybe<CaseTransferReferralWhereInput>;
  orderBy?: Maybe<CaseTransferReferralOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryCaseViolatedRightsConnectionArgs = {
  where?: Maybe<CaseViolatedRightWhereInput>;
  orderBy?: Maybe<CaseViolatedRightOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryClientsConnectionArgs = {
  where?: Maybe<ClientWhereInput>;
  orderBy?: Maybe<ClientOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryDaftarPengacarasConnectionArgs = {
  where?: Maybe<DaftarPengacaraWhereInput>;
  orderBy?: Maybe<DaftarPengacaraOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryDataDictsConnectionArgs = {
  where?: Maybe<DataDictWhereInput>;
  orderBy?: Maybe<DataDictOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryDataDictLocalsConnectionArgs = {
  where?: Maybe<DataDictLocalWhereInput>;
  orderBy?: Maybe<DataDictLocalOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryLogRequestsConnectionArgs = {
  where?: Maybe<LogRequestWhereInput>;
  orderBy?: Maybe<LogRequestOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryLogRequestAppsConnectionArgs = {
  where?: Maybe<LogRequestAppWhereInput>;
  orderBy?: Maybe<LogRequestAppOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryMtVocabsConnectionArgs = {
  where?: Maybe<MtVocabWhereInput>;
  orderBy?: Maybe<MtVocabOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryMtVocabGroupsConnectionArgs = {
  where?: Maybe<MtVocabGroupWhereInput>;
  orderBy?: Maybe<MtVocabGroupOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryNetworksConnectionArgs = {
  where?: Maybe<NetworkWhereInput>;
  orderBy?: Maybe<NetworkOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryPersonsConnectionArgs = {
  where?: Maybe<PersonWhereInput>;
  orderBy?: Maybe<PersonOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryPersonDocumentsConnectionArgs = {
  where?: Maybe<PersonDocumentWhereInput>;
  orderBy?: Maybe<PersonDocumentOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryRolesConnectionArgs = {
  where?: Maybe<RoleWhereInput>;
  orderBy?: Maybe<RoleOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryUserProfilesConnectionArgs = {
  where?: Maybe<UserProfileWhereInput>;
  orderBy?: Maybe<UserProfileOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type QueryNodeArgs = {
  id: string;
};

export type Role = {
  id: number;
  type?: Maybe<number>;
  userId?: Maybe<number>;
};

export type RoleConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<RoleEdge>>;
  aggregate: AggregateRole;
};

export type RoleCreateInput = {
  type: Maybe<number>;
  userId: Maybe<number>;
};

export type RoleEdge = {
  node: Role;
  cursor: string;
};

export enum RoleOrderByInput {
  Id_Asc = 'id_ASC',
  Id_Desc = 'id_DESC',
  Type_Asc = 'type_ASC',
  Type_Desc = 'type_DESC',
  UserId_Asc = 'userId_ASC',
  UserId_Desc = 'userId_DESC',
}

export type RolePreviousValues = {
  id: number;
  type?: Maybe<number>;
  userId?: Maybe<number>;
};

export type RoleSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<Role>;
  updatedFields?: Maybe<Array<string>>;
  previousValues?: Maybe<RolePreviousValues>;
};

export type RoleSubscriptionWhereInput = {
  AND: Maybe<Array<RoleSubscriptionWhereInput>>;
  OR: Maybe<Array<RoleSubscriptionWhereInput>>;
  NOT: Maybe<Array<RoleSubscriptionWhereInput>>;
  mutation_in: Maybe<Array<MutationType>>;
  updatedFields_contains: Maybe<string>;
  updatedFields_contains_every: Maybe<Array<string>>;
  updatedFields_contains_some: Maybe<Array<string>>;
  node: Maybe<RoleWhereInput>;
};

export type RoleUpdateInput = {
  type: Maybe<number>;
  userId: Maybe<number>;
};

export type RoleUpdateManyMutationInput = {
  type: Maybe<number>;
  userId: Maybe<number>;
};

export type RoleWhereInput = {
  AND: Maybe<Array<RoleWhereInput>>;
  OR: Maybe<Array<RoleWhereInput>>;
  NOT: Maybe<Array<RoleWhereInput>>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  type: Maybe<number>;
  type_not: Maybe<number>;
  type_in: Maybe<Array<number>>;
  type_not_in: Maybe<Array<number>>;
  type_lt: Maybe<number>;
  type_lte: Maybe<number>;
  type_gt: Maybe<number>;
  type_gte: Maybe<number>;
  userId: Maybe<number>;
  userId_not: Maybe<number>;
  userId_in: Maybe<Array<number>>;
  userId_not_in: Maybe<Array<number>>;
  userId_lt: Maybe<number>;
  userId_lte: Maybe<number>;
  userId_gt: Maybe<number>;
  userId_gte: Maybe<number>;
};

export type RoleWhereUniqueInput = {
  id: Maybe<number>;
};

export type Subscription = {
  application?: Maybe<ApplicationSubscriptionPayload>;
  case?: Maybe<CaseSubscriptionPayload>;
  caseClassification?: Maybe<CaseClassificationSubscriptionPayload>;
  caseConsultation?: Maybe<CaseConsultationSubscriptionPayload>;
  caseConsultationApp?: Maybe<CaseConsultationAppSubscriptionPayload>;
  caseDocument?: Maybe<CaseDocumentSubscriptionPayload>;
  caseIssue?: Maybe<CaseIssueSubscriptionPayload>;
  caseKorban?: Maybe<CaseKorbanSubscriptionPayload>;
  casePelaku?: Maybe<CasePelakuSubscriptionPayload>;
  casePk?: Maybe<CasePkSubscriptionPayload>;
  caseProgress?: Maybe<CaseProgressSubscriptionPayload>;
  caseProgressActivity?: Maybe<CaseProgressActivitySubscriptionPayload>;
  caseProgressActivityLit?: Maybe<CaseProgressActivityLitSubscriptionPayload>;
  caseProgressActivityNonlit?: Maybe<CaseProgressActivityNonlitSubscriptionPayload>;
  caseTransferReferral?: Maybe<CaseTransferReferralSubscriptionPayload>;
  caseViolatedRight?: Maybe<CaseViolatedRightSubscriptionPayload>;
  client?: Maybe<ClientSubscriptionPayload>;
  daftarPengacara?: Maybe<DaftarPengacaraSubscriptionPayload>;
  dataDict?: Maybe<DataDictSubscriptionPayload>;
  dataDictLocal?: Maybe<DataDictLocalSubscriptionPayload>;
  logRequest?: Maybe<LogRequestSubscriptionPayload>;
  logRequestApp?: Maybe<LogRequestAppSubscriptionPayload>;
  mtVocab?: Maybe<MtVocabSubscriptionPayload>;
  mtVocabGroup?: Maybe<MtVocabGroupSubscriptionPayload>;
  network?: Maybe<NetworkSubscriptionPayload>;
  person?: Maybe<PersonSubscriptionPayload>;
  personDocument?: Maybe<PersonDocumentSubscriptionPayload>;
  role?: Maybe<RoleSubscriptionPayload>;
  user?: Maybe<UserSubscriptionPayload>;
  userProfile?: Maybe<UserProfileSubscriptionPayload>;
};

export type SubscriptionApplicationArgs = {
  where?: Maybe<ApplicationSubscriptionWhereInput>;
};

export type SubscriptionCaseArgs = {
  where?: Maybe<CaseSubscriptionWhereInput>;
};

export type SubscriptionCaseClassificationArgs = {
  where?: Maybe<CaseClassificationSubscriptionWhereInput>;
};

export type SubscriptionCaseConsultationArgs = {
  where?: Maybe<CaseConsultationSubscriptionWhereInput>;
};

export type SubscriptionCaseConsultationAppArgs = {
  where?: Maybe<CaseConsultationAppSubscriptionWhereInput>;
};

export type SubscriptionCaseDocumentArgs = {
  where?: Maybe<CaseDocumentSubscriptionWhereInput>;
};

export type SubscriptionCaseIssueArgs = {
  where?: Maybe<CaseIssueSubscriptionWhereInput>;
};

export type SubscriptionCaseKorbanArgs = {
  where?: Maybe<CaseKorbanSubscriptionWhereInput>;
};

export type SubscriptionCasePelakuArgs = {
  where?: Maybe<CasePelakuSubscriptionWhereInput>;
};

export type SubscriptionCasePkArgs = {
  where?: Maybe<CasePkSubscriptionWhereInput>;
};

export type SubscriptionCaseProgressArgs = {
  where?: Maybe<CaseProgressSubscriptionWhereInput>;
};

export type SubscriptionCaseProgressActivityArgs = {
  where?: Maybe<CaseProgressActivitySubscriptionWhereInput>;
};

export type SubscriptionCaseProgressActivityLitArgs = {
  where?: Maybe<CaseProgressActivityLitSubscriptionWhereInput>;
};

export type SubscriptionCaseProgressActivityNonlitArgs = {
  where?: Maybe<CaseProgressActivityNonlitSubscriptionWhereInput>;
};

export type SubscriptionCaseTransferReferralArgs = {
  where?: Maybe<CaseTransferReferralSubscriptionWhereInput>;
};

export type SubscriptionCaseViolatedRightArgs = {
  where?: Maybe<CaseViolatedRightSubscriptionWhereInput>;
};

export type SubscriptionClientArgs = {
  where?: Maybe<ClientSubscriptionWhereInput>;
};

export type SubscriptionDaftarPengacaraArgs = {
  where?: Maybe<DaftarPengacaraSubscriptionWhereInput>;
};

export type SubscriptionDataDictArgs = {
  where?: Maybe<DataDictSubscriptionWhereInput>;
};

export type SubscriptionDataDictLocalArgs = {
  where?: Maybe<DataDictLocalSubscriptionWhereInput>;
};

export type SubscriptionLogRequestArgs = {
  where?: Maybe<LogRequestSubscriptionWhereInput>;
};

export type SubscriptionLogRequestAppArgs = {
  where?: Maybe<LogRequestAppSubscriptionWhereInput>;
};

export type SubscriptionMtVocabArgs = {
  where?: Maybe<MtVocabSubscriptionWhereInput>;
};

export type SubscriptionMtVocabGroupArgs = {
  where?: Maybe<MtVocabGroupSubscriptionWhereInput>;
};

export type SubscriptionNetworkArgs = {
  where?: Maybe<NetworkSubscriptionWhereInput>;
};

export type SubscriptionPersonArgs = {
  where?: Maybe<PersonSubscriptionWhereInput>;
};

export type SubscriptionPersonDocumentArgs = {
  where?: Maybe<PersonDocumentSubscriptionWhereInput>;
};

export type SubscriptionRoleArgs = {
  where?: Maybe<RoleSubscriptionWhereInput>;
};

export type SubscriptionUserArgs = {
  where?: Maybe<UserSubscriptionWhereInput>;
};

export type SubscriptionUserProfileArgs = {
  where?: Maybe<UserProfileSubscriptionWhereInput>;
};

export type User = {
  address?: Maybe<string>;
  avatar?: Maybe<string>;
  createdAt: Date;
  deletedAt?: Maybe<Date>;
  email?: Maybe<string>;
  id: number;
  name?: Maybe<string>;
  password?: Maybe<string>;
  phone?: Maybe<string>;
  position?: Maybe<string>;
  rememberToken?: Maybe<string>;
  roles?: Maybe<string>;
  status?: Maybe<string>;
  updatedAt: Date;
  username?: Maybe<string>;
  profile: UserProfile;
};

export type UserConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<UserEdge>>;
  aggregate: AggregateUser;
};

export type UserCreateInput = {
  address: Maybe<string>;
  avatar: Maybe<string>;
  deletedAt: Maybe<Date>;
  email: Maybe<string>;
  name: Maybe<string>;
  password: Maybe<string>;
  phone: Maybe<string>;
  position: Maybe<string>;
  rememberToken: Maybe<string>;
  roles: Maybe<string>;
  status: Maybe<string>;
  username: Maybe<string>;
  profile: UserProfileCreateOneWithoutUserIdInput;
};

export type UserCreateOneWithoutProfileInput = {
  create: Maybe<UserCreateWithoutProfileInput>;
  connect: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutProfileInput = {
  address: Maybe<string>;
  avatar: Maybe<string>;
  deletedAt: Maybe<Date>;
  email: Maybe<string>;
  name: Maybe<string>;
  password: Maybe<string>;
  phone: Maybe<string>;
  position: Maybe<string>;
  rememberToken: Maybe<string>;
  roles: Maybe<string>;
  status: Maybe<string>;
  username: Maybe<string>;
};

export type UserEdge = {
  node: User;
  cursor: string;
};

export enum UserOrderByInput {
  Address_Asc = 'address_ASC',
  Address_Desc = 'address_DESC',
  Avatar_Asc = 'avatar_ASC',
  Avatar_Desc = 'avatar_DESC',
  CreatedAt_Asc = 'createdAt_ASC',
  CreatedAt_Desc = 'createdAt_DESC',
  DeletedAt_Asc = 'deletedAt_ASC',
  DeletedAt_Desc = 'deletedAt_DESC',
  Email_Asc = 'email_ASC',
  Email_Desc = 'email_DESC',
  Id_Asc = 'id_ASC',
  Id_Desc = 'id_DESC',
  Name_Asc = 'name_ASC',
  Name_Desc = 'name_DESC',
  Password_Asc = 'password_ASC',
  Password_Desc = 'password_DESC',
  Phone_Asc = 'phone_ASC',
  Phone_Desc = 'phone_DESC',
  Position_Asc = 'position_ASC',
  Position_Desc = 'position_DESC',
  RememberToken_Asc = 'rememberToken_ASC',
  RememberToken_Desc = 'rememberToken_DESC',
  Roles_Asc = 'roles_ASC',
  Roles_Desc = 'roles_DESC',
  Status_Asc = 'status_ASC',
  Status_Desc = 'status_DESC',
  UpdatedAt_Asc = 'updatedAt_ASC',
  UpdatedAt_Desc = 'updatedAt_DESC',
  Username_Asc = 'username_ASC',
  Username_Desc = 'username_DESC',
}

export type UserPreviousValues = {
  address?: Maybe<string>;
  avatar?: Maybe<string>;
  createdAt: Date;
  deletedAt?: Maybe<Date>;
  email?: Maybe<string>;
  id: number;
  name?: Maybe<string>;
  password?: Maybe<string>;
  phone?: Maybe<string>;
  position?: Maybe<string>;
  rememberToken?: Maybe<string>;
  roles?: Maybe<string>;
  status?: Maybe<string>;
  updatedAt: Date;
  username?: Maybe<string>;
};

export type UserProfile = {
  createdAt: Date;
  id: number;
  noContact?: Maybe<string>;
  occupation?: Maybe<string>;
  photo?: Maybe<string>;
  updatedAt: Date;
  userId: User;
};

export type UserProfileConnection = {
  pageInfo: PageInfo;
  edges: Array<Maybe<UserProfileEdge>>;
  aggregate: AggregateUserProfile;
};

export type UserProfileCreateInput = {
  noContact: Maybe<string>;
  occupation: Maybe<string>;
  photo: Maybe<string>;
  userId: UserCreateOneWithoutProfileInput;
};

export type UserProfileCreateOneWithoutUserIdInput = {
  create: Maybe<UserProfileCreateWithoutUserIdInput>;
  connect: Maybe<UserProfileWhereUniqueInput>;
};

export type UserProfileCreateWithoutUserIdInput = {
  noContact: Maybe<string>;
  occupation: Maybe<string>;
  photo: Maybe<string>;
};

export type UserProfileEdge = {
  node: UserProfile;
  cursor: string;
};

export enum UserProfileOrderByInput {
  CreatedAt_Asc = 'createdAt_ASC',
  CreatedAt_Desc = 'createdAt_DESC',
  Id_Asc = 'id_ASC',
  Id_Desc = 'id_DESC',
  NoContact_Asc = 'noContact_ASC',
  NoContact_Desc = 'noContact_DESC',
  Occupation_Asc = 'occupation_ASC',
  Occupation_Desc = 'occupation_DESC',
  Photo_Asc = 'photo_ASC',
  Photo_Desc = 'photo_DESC',
  UpdatedAt_Asc = 'updatedAt_ASC',
  UpdatedAt_Desc = 'updatedAt_DESC',
}

export type UserProfilePreviousValues = {
  createdAt: Date;
  id: number;
  noContact?: Maybe<string>;
  occupation?: Maybe<string>;
  photo?: Maybe<string>;
  updatedAt: Date;
};

export type UserProfileSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<UserProfile>;
  updatedFields?: Maybe<Array<string>>;
  previousValues?: Maybe<UserProfilePreviousValues>;
};

export type UserProfileSubscriptionWhereInput = {
  AND: Maybe<Array<UserProfileSubscriptionWhereInput>>;
  OR: Maybe<Array<UserProfileSubscriptionWhereInput>>;
  NOT: Maybe<Array<UserProfileSubscriptionWhereInput>>;
  mutation_in: Maybe<Array<MutationType>>;
  updatedFields_contains: Maybe<string>;
  updatedFields_contains_every: Maybe<Array<string>>;
  updatedFields_contains_some: Maybe<Array<string>>;
  node: Maybe<UserProfileWhereInput>;
};

export type UserProfileUpdateInput = {
  noContact: Maybe<string>;
  occupation: Maybe<string>;
  photo: Maybe<string>;
  userId: Maybe<UserUpdateOneRequiredWithoutProfileInput>;
};

export type UserProfileUpdateManyMutationInput = {
  noContact: Maybe<string>;
  occupation: Maybe<string>;
  photo: Maybe<string>;
};

export type UserProfileUpdateOneRequiredWithoutUserIdInput = {
  create: Maybe<UserProfileCreateWithoutUserIdInput>;
  connect: Maybe<UserProfileWhereUniqueInput>;
  update: Maybe<UserProfileUpdateWithoutUserIdDataInput>;
  upsert: Maybe<UserProfileUpsertWithoutUserIdInput>;
};

export type UserProfileUpdateWithoutUserIdDataInput = {
  noContact: Maybe<string>;
  occupation: Maybe<string>;
  photo: Maybe<string>;
};

export type UserProfileUpsertWithoutUserIdInput = {
  update: UserProfileUpdateWithoutUserIdDataInput;
  create: UserProfileCreateWithoutUserIdInput;
};

export type UserProfileWhereInput = {
  AND: Maybe<Array<UserProfileWhereInput>>;
  OR: Maybe<Array<UserProfileWhereInput>>;
  NOT: Maybe<Array<UserProfileWhereInput>>;
  createdAt: Maybe<Date>;
  createdAt_not: Maybe<Date>;
  createdAt_in: Maybe<Array<Date>>;
  createdAt_not_in: Maybe<Array<Date>>;
  createdAt_lt: Maybe<Date>;
  createdAt_lte: Maybe<Date>;
  createdAt_gt: Maybe<Date>;
  createdAt_gte: Maybe<Date>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  noContact: Maybe<string>;
  noContact_not: Maybe<string>;
  noContact_in: Maybe<Array<string>>;
  noContact_not_in: Maybe<Array<string>>;
  noContact_lt: Maybe<string>;
  noContact_lte: Maybe<string>;
  noContact_gt: Maybe<string>;
  noContact_gte: Maybe<string>;
  noContact_contains: Maybe<string>;
  noContact_not_contains: Maybe<string>;
  noContact_starts_with: Maybe<string>;
  noContact_not_starts_with: Maybe<string>;
  noContact_ends_with: Maybe<string>;
  noContact_not_ends_with: Maybe<string>;
  occupation: Maybe<string>;
  occupation_not: Maybe<string>;
  occupation_in: Maybe<Array<string>>;
  occupation_not_in: Maybe<Array<string>>;
  occupation_lt: Maybe<string>;
  occupation_lte: Maybe<string>;
  occupation_gt: Maybe<string>;
  occupation_gte: Maybe<string>;
  occupation_contains: Maybe<string>;
  occupation_not_contains: Maybe<string>;
  occupation_starts_with: Maybe<string>;
  occupation_not_starts_with: Maybe<string>;
  occupation_ends_with: Maybe<string>;
  occupation_not_ends_with: Maybe<string>;
  photo: Maybe<string>;
  photo_not: Maybe<string>;
  photo_in: Maybe<Array<string>>;
  photo_not_in: Maybe<Array<string>>;
  photo_lt: Maybe<string>;
  photo_lte: Maybe<string>;
  photo_gt: Maybe<string>;
  photo_gte: Maybe<string>;
  photo_contains: Maybe<string>;
  photo_not_contains: Maybe<string>;
  photo_starts_with: Maybe<string>;
  photo_not_starts_with: Maybe<string>;
  photo_ends_with: Maybe<string>;
  photo_not_ends_with: Maybe<string>;
  updatedAt: Maybe<Date>;
  updatedAt_not: Maybe<Date>;
  updatedAt_in: Maybe<Array<Date>>;
  updatedAt_not_in: Maybe<Array<Date>>;
  updatedAt_lt: Maybe<Date>;
  updatedAt_lte: Maybe<Date>;
  updatedAt_gt: Maybe<Date>;
  updatedAt_gte: Maybe<Date>;
  userId: Maybe<UserWhereInput>;
};

export type UserProfileWhereUniqueInput = {
  id: Maybe<number>;
};

export type UserSubscriptionPayload = {
  mutation: MutationType;
  node?: Maybe<User>;
  updatedFields?: Maybe<Array<string>>;
  previousValues?: Maybe<UserPreviousValues>;
};

export type UserSubscriptionWhereInput = {
  AND: Maybe<Array<UserSubscriptionWhereInput>>;
  OR: Maybe<Array<UserSubscriptionWhereInput>>;
  NOT: Maybe<Array<UserSubscriptionWhereInput>>;
  mutation_in: Maybe<Array<MutationType>>;
  updatedFields_contains: Maybe<string>;
  updatedFields_contains_every: Maybe<Array<string>>;
  updatedFields_contains_some: Maybe<Array<string>>;
  node: Maybe<UserWhereInput>;
};

export type UserUpdateInput = {
  address: Maybe<string>;
  avatar: Maybe<string>;
  deletedAt: Maybe<Date>;
  email: Maybe<string>;
  name: Maybe<string>;
  password: Maybe<string>;
  phone: Maybe<string>;
  position: Maybe<string>;
  rememberToken: Maybe<string>;
  roles: Maybe<string>;
  status: Maybe<string>;
  username: Maybe<string>;
  profile: Maybe<UserProfileUpdateOneRequiredWithoutUserIdInput>;
};

export type UserUpdateManyMutationInput = {
  address: Maybe<string>;
  avatar: Maybe<string>;
  deletedAt: Maybe<Date>;
  email: Maybe<string>;
  name: Maybe<string>;
  password: Maybe<string>;
  phone: Maybe<string>;
  position: Maybe<string>;
  rememberToken: Maybe<string>;
  roles: Maybe<string>;
  status: Maybe<string>;
  username: Maybe<string>;
};

export type UserUpdateOneRequiredWithoutProfileInput = {
  create: Maybe<UserCreateWithoutProfileInput>;
  connect: Maybe<UserWhereUniqueInput>;
  update: Maybe<UserUpdateWithoutProfileDataInput>;
  upsert: Maybe<UserUpsertWithoutProfileInput>;
};

export type UserUpdateWithoutProfileDataInput = {
  address: Maybe<string>;
  avatar: Maybe<string>;
  deletedAt: Maybe<Date>;
  email: Maybe<string>;
  name: Maybe<string>;
  password: Maybe<string>;
  phone: Maybe<string>;
  position: Maybe<string>;
  rememberToken: Maybe<string>;
  roles: Maybe<string>;
  status: Maybe<string>;
  username: Maybe<string>;
};

export type UserUpsertWithoutProfileInput = {
  update: UserUpdateWithoutProfileDataInput;
  create: UserCreateWithoutProfileInput;
};

export type UserWhereInput = {
  AND: Maybe<Array<UserWhereInput>>;
  OR: Maybe<Array<UserWhereInput>>;
  NOT: Maybe<Array<UserWhereInput>>;
  address: Maybe<string>;
  address_not: Maybe<string>;
  address_in: Maybe<Array<string>>;
  address_not_in: Maybe<Array<string>>;
  address_lt: Maybe<string>;
  address_lte: Maybe<string>;
  address_gt: Maybe<string>;
  address_gte: Maybe<string>;
  address_contains: Maybe<string>;
  address_not_contains: Maybe<string>;
  address_starts_with: Maybe<string>;
  address_not_starts_with: Maybe<string>;
  address_ends_with: Maybe<string>;
  address_not_ends_with: Maybe<string>;
  avatar: Maybe<string>;
  avatar_not: Maybe<string>;
  avatar_in: Maybe<Array<string>>;
  avatar_not_in: Maybe<Array<string>>;
  avatar_lt: Maybe<string>;
  avatar_lte: Maybe<string>;
  avatar_gt: Maybe<string>;
  avatar_gte: Maybe<string>;
  avatar_contains: Maybe<string>;
  avatar_not_contains: Maybe<string>;
  avatar_starts_with: Maybe<string>;
  avatar_not_starts_with: Maybe<string>;
  avatar_ends_with: Maybe<string>;
  avatar_not_ends_with: Maybe<string>;
  createdAt: Maybe<Date>;
  createdAt_not: Maybe<Date>;
  createdAt_in: Maybe<Array<Date>>;
  createdAt_not_in: Maybe<Array<Date>>;
  createdAt_lt: Maybe<Date>;
  createdAt_lte: Maybe<Date>;
  createdAt_gt: Maybe<Date>;
  createdAt_gte: Maybe<Date>;
  deletedAt: Maybe<Date>;
  deletedAt_not: Maybe<Date>;
  deletedAt_in: Maybe<Array<Date>>;
  deletedAt_not_in: Maybe<Array<Date>>;
  deletedAt_lt: Maybe<Date>;
  deletedAt_lte: Maybe<Date>;
  deletedAt_gt: Maybe<Date>;
  deletedAt_gte: Maybe<Date>;
  email: Maybe<string>;
  email_not: Maybe<string>;
  email_in: Maybe<Array<string>>;
  email_not_in: Maybe<Array<string>>;
  email_lt: Maybe<string>;
  email_lte: Maybe<string>;
  email_gt: Maybe<string>;
  email_gte: Maybe<string>;
  email_contains: Maybe<string>;
  email_not_contains: Maybe<string>;
  email_starts_with: Maybe<string>;
  email_not_starts_with: Maybe<string>;
  email_ends_with: Maybe<string>;
  email_not_ends_with: Maybe<string>;
  id: Maybe<number>;
  id_not: Maybe<number>;
  id_in: Maybe<Array<number>>;
  id_not_in: Maybe<Array<number>>;
  id_lt: Maybe<number>;
  id_lte: Maybe<number>;
  id_gt: Maybe<number>;
  id_gte: Maybe<number>;
  name: Maybe<string>;
  name_not: Maybe<string>;
  name_in: Maybe<Array<string>>;
  name_not_in: Maybe<Array<string>>;
  name_lt: Maybe<string>;
  name_lte: Maybe<string>;
  name_gt: Maybe<string>;
  name_gte: Maybe<string>;
  name_contains: Maybe<string>;
  name_not_contains: Maybe<string>;
  name_starts_with: Maybe<string>;
  name_not_starts_with: Maybe<string>;
  name_ends_with: Maybe<string>;
  name_not_ends_with: Maybe<string>;
  password: Maybe<string>;
  password_not: Maybe<string>;
  password_in: Maybe<Array<string>>;
  password_not_in: Maybe<Array<string>>;
  password_lt: Maybe<string>;
  password_lte: Maybe<string>;
  password_gt: Maybe<string>;
  password_gte: Maybe<string>;
  password_contains: Maybe<string>;
  password_not_contains: Maybe<string>;
  password_starts_with: Maybe<string>;
  password_not_starts_with: Maybe<string>;
  password_ends_with: Maybe<string>;
  password_not_ends_with: Maybe<string>;
  phone: Maybe<string>;
  phone_not: Maybe<string>;
  phone_in: Maybe<Array<string>>;
  phone_not_in: Maybe<Array<string>>;
  phone_lt: Maybe<string>;
  phone_lte: Maybe<string>;
  phone_gt: Maybe<string>;
  phone_gte: Maybe<string>;
  phone_contains: Maybe<string>;
  phone_not_contains: Maybe<string>;
  phone_starts_with: Maybe<string>;
  phone_not_starts_with: Maybe<string>;
  phone_ends_with: Maybe<string>;
  phone_not_ends_with: Maybe<string>;
  position: Maybe<string>;
  position_not: Maybe<string>;
  position_in: Maybe<Array<string>>;
  position_not_in: Maybe<Array<string>>;
  position_lt: Maybe<string>;
  position_lte: Maybe<string>;
  position_gt: Maybe<string>;
  position_gte: Maybe<string>;
  position_contains: Maybe<string>;
  position_not_contains: Maybe<string>;
  position_starts_with: Maybe<string>;
  position_not_starts_with: Maybe<string>;
  position_ends_with: Maybe<string>;
  position_not_ends_with: Maybe<string>;
  rememberToken: Maybe<string>;
  rememberToken_not: Maybe<string>;
  rememberToken_in: Maybe<Array<string>>;
  rememberToken_not_in: Maybe<Array<string>>;
  rememberToken_lt: Maybe<string>;
  rememberToken_lte: Maybe<string>;
  rememberToken_gt: Maybe<string>;
  rememberToken_gte: Maybe<string>;
  rememberToken_contains: Maybe<string>;
  rememberToken_not_contains: Maybe<string>;
  rememberToken_starts_with: Maybe<string>;
  rememberToken_not_starts_with: Maybe<string>;
  rememberToken_ends_with: Maybe<string>;
  rememberToken_not_ends_with: Maybe<string>;
  roles: Maybe<string>;
  roles_not: Maybe<string>;
  roles_in: Maybe<Array<string>>;
  roles_not_in: Maybe<Array<string>>;
  roles_lt: Maybe<string>;
  roles_lte: Maybe<string>;
  roles_gt: Maybe<string>;
  roles_gte: Maybe<string>;
  roles_contains: Maybe<string>;
  roles_not_contains: Maybe<string>;
  roles_starts_with: Maybe<string>;
  roles_not_starts_with: Maybe<string>;
  roles_ends_with: Maybe<string>;
  roles_not_ends_with: Maybe<string>;
  status: Maybe<string>;
  status_not: Maybe<string>;
  status_in: Maybe<Array<string>>;
  status_not_in: Maybe<Array<string>>;
  status_lt: Maybe<string>;
  status_lte: Maybe<string>;
  status_gt: Maybe<string>;
  status_gte: Maybe<string>;
  status_contains: Maybe<string>;
  status_not_contains: Maybe<string>;
  status_starts_with: Maybe<string>;
  status_not_starts_with: Maybe<string>;
  status_ends_with: Maybe<string>;
  status_not_ends_with: Maybe<string>;
  updatedAt: Maybe<Date>;
  updatedAt_not: Maybe<Date>;
  updatedAt_in: Maybe<Array<Date>>;
  updatedAt_not_in: Maybe<Array<Date>>;
  updatedAt_lt: Maybe<Date>;
  updatedAt_lte: Maybe<Date>;
  updatedAt_gt: Maybe<Date>;
  updatedAt_gte: Maybe<Date>;
  username: Maybe<string>;
  username_not: Maybe<string>;
  username_in: Maybe<Array<string>>;
  username_not_in: Maybe<Array<string>>;
  username_lt: Maybe<string>;
  username_lte: Maybe<string>;
  username_gt: Maybe<string>;
  username_gte: Maybe<string>;
  username_contains: Maybe<string>;
  username_not_contains: Maybe<string>;
  username_starts_with: Maybe<string>;
  username_not_starts_with: Maybe<string>;
  username_ends_with: Maybe<string>;
  username_not_ends_with: Maybe<string>;
  profile: Maybe<UserProfileWhereInput>;
};

export type UserWhereUniqueInput = {
  id: Maybe<number>;
};
export type CreateClientMutationVariables = {
  data: ClientCreateInput;
};

export type CreateClientMutation = {
  createClient: Pick<
    Client,
    | 'id'
    | 'alamatLokasi'
    | 'asetGedung'
    | 'asetKios'
    | 'asetLahanGarapan'
    | 'asetLapak'
    | 'asetMobil'
    | 'asetMotor'
    | 'asetRumah'
    | 'asetTanah'
    | 'asetToko'
    | 'asetWarung'
    | 'createdAt'
    | 'createdBy'
    | 'pendapatan'
    | 'sktm'
    | 'sktmUpload'
    | 'stmKeterangan'
    | 'tanggunganAnak'
    | 'tanggunganFamili'
    | 'tanggunganLain'
    | 'tanggunganPasangan'
    | 'updatedAt'
    | 'updatedBy'
    | 'usiaSaatKlien'
  > & { applicationId: Pick<Application, 'id'>; personId: Pick<Person, 'id'>; caseid: Pick<Case, 'id'> };
};

export type CreateApplicationMutationVariables = {
  data: ApplicationCreateInput;
};

export type CreateApplicationMutation = {
  createApplication: Pick<
    Application,
    | 'id'
    | 'createdAt'
    | 'createdBy'
    | 'dudukPerara'
    | 'infoLbh'
    | 'jumlahPenerimaManfaat'
    | 'konfirmasiData'
    | 'noReg'
    | 'pernahKlien'
    | 'pernahPpLain'
    | 'ppLain'
    | 'regDate'
    | 'relasiWakilClient'
    | 'setujuAdvokasi'
    | 'statusPerwakilan'
    | 'updatedAt'
    | 'updatedBy'
    | 'waktuPernahKlien'
    | 'whyLbh'
  > & {
    wakilId: Pick<Person, 'id' | 'namaLengkap'>;
    case: Pick<Case, 'id'>;
    clients: Maybe<
      Array<
        Pick<
          Client,
          | 'id'
          | 'alamatLokasi'
          | 'asetGedung'
          | 'asetKios'
          | 'asetLahanGarapan'
          | 'asetLapak'
          | 'asetMobil'
          | 'asetMotor'
          | 'asetRumah'
          | 'asetTanah'
          | 'asetToko'
          | 'asetWarung'
          | 'createdAt'
          | 'createdBy'
          | 'pendapatan'
          | 'sktm'
          | 'sktmUpload'
          | 'stmKeterangan'
          | 'tanggunganAnak'
          | 'tanggunganFamili'
          | 'tanggunganLain'
          | 'tanggunganPasangan'
          | 'updatedAt'
          | 'updatedBy'
          | 'usiaSaatKlien'
        > & { personId: Pick<Person, 'id' | 'namaLengkap'>; caseid: Pick<Case, 'id'> }
      >
    >;
  };
};

export type UpdatePersonMutationVariables = {
  data: PersonUpdateInput;
  where: PersonWhereUniqueInput;
};

export type UpdatePersonMutation = {
  updatePerson: Maybe<
    Pick<
      Person,
      | 'id'
      | 'agama'
      | 'alamatDomisili'
      | 'alamatId'
      | 'alatBantu'
      | 'alias'
      | 'createdAt'
      | 'createdBy'
      | 'disabilitas'
      | 'distrikDomisili'
      | 'distrikId'
      | 'domisiliSama'
      | 'email'
      | 'golDarah'
      | 'jenisDisabilitas'
      | 'jenisDomisili'
      | 'jenisId'
      | 'jenisKelamin'
      | 'jmlAnggota'
      | 'namaLengkap'
      | 'nomorId'
      | 'pekerjaan'
      | 'pendidikan'
      | 'statusPernikahan'
      | 'telepon'
      | 'tglLahir'
      | 'tmpLahir'
      | 'unitSatuan'
      | 'updatedAt'
      | 'updatedBy'
      | 'wargaNegara'
    > & {
      applications: Maybe<Array<Pick<Application, 'id' | 'noReg' | 'createdAt'>>>;
      clients: Maybe<Array<Pick<Client, 'id'> & { applicationId: Pick<Application, 'id' | 'noReg' | 'createdAt'> }>>;
      documents: Maybe<Array<Pick<PersonDocument, 'id' | 'title' | 'file'>>>;
    }
  >;
};

export type CreatePersonMutationVariables = {
  data: PersonCreateInput;
};

export type CreatePersonMutation = {
  createPerson: Pick<
    Person,
    | 'id'
    | 'agama'
    | 'alamatDomisili'
    | 'alamatId'
    | 'alatBantu'
    | 'alias'
    | 'createdAt'
    | 'createdBy'
    | 'disabilitas'
    | 'distrikDomisili'
    | 'distrikId'
    | 'domisiliSama'
    | 'email'
    | 'golDarah'
    | 'jenisDisabilitas'
    | 'jenisDomisili'
    | 'jenisId'
    | 'jenisKelamin'
    | 'jmlAnggota'
    | 'namaLengkap'
    | 'nomorId'
    | 'pekerjaan'
    | 'pendidikan'
    | 'statusPernikahan'
    | 'telepon'
    | 'tglLahir'
    | 'tmpLahir'
    | 'unitSatuan'
    | 'updatedAt'
    | 'updatedBy'
    | 'wargaNegara'
  > & {
    applications: Maybe<Array<Pick<Application, 'id' | 'noReg' | 'createdAt'>>>;
    clients: Maybe<Array<Pick<Client, 'id'> & { applicationId: Pick<Application, 'id' | 'noReg' | 'createdAt'> }>>;
    documents: Maybe<Array<Pick<PersonDocument, 'id' | 'title' | 'file'>>>;
  };
};

export type GetClientQueryVariables = {
  where?: Maybe<ClientWhereInput>;
  orderBy?: Maybe<ClientOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type GetClientQuery = {
  clients: Array<
    Maybe<
      Pick<
        Client,
        | 'id'
        | 'alamatLokasi'
        | 'asetGedung'
        | 'asetKios'
        | 'asetLahanGarapan'
        | 'asetLapak'
        | 'asetMobil'
        | 'asetMotor'
        | 'asetRumah'
        | 'asetTanah'
        | 'asetToko'
        | 'asetWarung'
        | 'createdAt'
        | 'createdBy'
        | 'pendapatan'
        | 'sktm'
        | 'sktmUpload'
        | 'stmKeterangan'
        | 'tanggunganAnak'
        | 'tanggunganFamili'
        | 'tanggunganLain'
        | 'tanggunganPasangan'
        | 'updatedAt'
        | 'updatedBy'
        | 'usiaSaatKlien'
      > & { applicationId: Pick<Application, 'id'>; personId: Pick<Person, 'id'>; caseid: Pick<Case, 'id'> }
    >
  >;
};

export type GetApplicationsQueryVariables = {
  where?: Maybe<ApplicationWhereInput>;
  orderBy?: Maybe<ApplicationOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type GetApplicationsQuery = {
  applications: Array<
    Maybe<
      Pick<
        Application,
        | 'id'
        | 'createdAt'
        | 'createdBy'
        | 'dudukPerara'
        | 'infoLbh'
        | 'jumlahPenerimaManfaat'
        | 'konfirmasiData'
        | 'noReg'
        | 'pernahKlien'
        | 'pernahPpLain'
        | 'ppLain'
        | 'regDate'
        | 'relasiWakilClient'
        | 'setujuAdvokasi'
        | 'statusPerwakilan'
        | 'updatedAt'
        | 'updatedBy'
        | 'waktuPernahKlien'
        | 'whyLbh'
      > & {
        wakilId: Pick<Person, 'id' | 'namaLengkap'>;
        case: Pick<Case, 'id'>;
        clients: Maybe<
          Array<
            Pick<
              Client,
              | 'id'
              | 'alamatLokasi'
              | 'asetGedung'
              | 'asetKios'
              | 'asetLahanGarapan'
              | 'asetLapak'
              | 'asetMobil'
              | 'asetMotor'
              | 'asetRumah'
              | 'asetTanah'
              | 'asetToko'
              | 'asetWarung'
              | 'createdAt'
              | 'createdBy'
              | 'pendapatan'
              | 'sktm'
              | 'sktmUpload'
              | 'stmKeterangan'
              | 'tanggunganAnak'
              | 'tanggunganFamili'
              | 'tanggunganLain'
              | 'tanggunganPasangan'
              | 'updatedAt'
              | 'updatedBy'
              | 'usiaSaatKlien'
            > & { personId: Pick<Person, 'id' | 'namaLengkap'>; caseid: Pick<Case, 'id'> }
          >
        >;
      }
    >
  >;
};

export type GetMtVocabsQueryVariables = {
  where?: Maybe<MtVocabWhereInput>;
  orderBy?: Maybe<MtVocabOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type GetMtVocabsQuery = {
  mtVocabs: Array<Maybe<Pick<MtVocab, 'KODE' | 'kode_induk' | 'level' | 'sembunyikan' | 'teks' | 'urutan'>>>;
};

export type AllPersonQueryVariables = {
  where?: Maybe<PersonWhereInput>;
  orderBy?: Maybe<PersonOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type AllPersonQuery = {
  persons: Array<
    Maybe<
      Pick<
        Person,
        | 'id'
        | 'agama'
        | 'alamatDomisili'
        | 'alamatId'
        | 'alatBantu'
        | 'alias'
        | 'createdAt'
        | 'createdBy'
        | 'disabilitas'
        | 'distrikDomisili'
        | 'distrikId'
        | 'domisiliSama'
        | 'email'
        | 'golDarah'
        | 'jenisDisabilitas'
        | 'jenisDomisili'
        | 'jenisId'
        | 'jenisKelamin'
        | 'jmlAnggota'
        | 'namaLengkap'
        | 'nomorId'
        | 'pekerjaan'
        | 'pendidikan'
        | 'statusPernikahan'
        | 'telepon'
        | 'tglLahir'
        | 'tmpLahir'
        | 'unitSatuan'
        | 'updatedAt'
        | 'updatedBy'
        | 'wargaNegara'
      > & {
        applications: Maybe<Array<Pick<Application, 'id' | 'noReg' | 'createdAt'>>>;
        clients: Maybe<Array<Pick<Client, 'id'> & { applicationId: Pick<Application, 'id' | 'noReg' | 'createdAt'> }>>;
        documents: Maybe<Array<Pick<PersonDocument, 'id' | 'title' | 'file'>>>;
      }
    >
  >;
};

// ====================================================
// Documents
// ====================================================

export namespace CreateClient {
  export type Variables = {
    data: ClientCreateInput;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    createClient: CreateClient;
  };

  export type CreateClient = {
    __typename?: 'Client';

    id: number;

    alamatLokasi: Maybe<string>;

    applicationId: ApplicationId;

    asetGedung: Maybe<string>;

    asetKios: Maybe<string>;

    asetLahanGarapan: Maybe<string>;

    asetLapak: Maybe<string>;

    asetMobil: Maybe<string>;

    asetMotor: Maybe<string>;

    asetRumah: Maybe<string>;

    asetTanah: Maybe<string>;

    asetToko: Maybe<string>;

    asetWarung: Maybe<string>;

    createdAt: Date;

    createdBy: Maybe<string>;

    pendapatan: Maybe<string>;

    personId: PersonId;

    sktm: boolean;

    sktmUpload: Maybe<string>;

    stmKeterangan: Maybe<string>;

    tanggunganAnak: Maybe<number>;

    tanggunganFamili: Maybe<number>;

    tanggunganLain: Maybe<number>;

    tanggunganPasangan: Maybe<number>;

    updatedAt: Date;

    updatedBy: Maybe<string>;

    usiaSaatKlien: Maybe<number>;

    caseid: Caseid;
  };

  export type ApplicationId = {
    __typename?: 'Application';

    id: number;
  };

  export type PersonId = {
    __typename?: 'Person';

    id: number;
  };

  export type Caseid = {
    __typename?: 'Case';

    id: number;
  };
}

export namespace CreateApplication {
  export type Variables = {
    data: ApplicationCreateInput;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    createApplication: CreateApplication;
  };

  export type CreateApplication = {
    __typename?: 'Application';

    id: number;

    createdAt: Date;

    createdBy: Maybe<string>;

    dudukPerara: Maybe<string>;

    infoLbh: Maybe<string>;

    jumlahPenerimaManfaat: Maybe<number>;

    konfirmasiData: boolean;

    noReg: Maybe<string>;

    pernahKlien: Maybe<string>;

    pernahPpLain: Maybe<string>;

    ppLain: Maybe<string>;

    regDate: Maybe<Date>;

    relasiWakilClient: Maybe<string>;

    setujuAdvokasi: boolean;

    statusPerwakilan: Maybe<string>;

    updatedAt: Date;

    updatedBy: Maybe<string>;

    wakilId: WakilId;

    waktuPernahKlien: Maybe<string>;

    whyLbh: Maybe<string>;

    case: Case;

    clients: Maybe<Clients[]>;
  };

  export type WakilId = {
    __typename?: 'Person';

    id: number;

    namaLengkap: Maybe<string>;
  };

  export type Case = {
    __typename?: 'Case';

    id: number;
  };

  export type Clients = {
    __typename?: 'Client';

    id: number;

    alamatLokasi: Maybe<string>;

    asetGedung: Maybe<string>;

    asetKios: Maybe<string>;

    asetLahanGarapan: Maybe<string>;

    asetLapak: Maybe<string>;

    asetMobil: Maybe<string>;

    asetMotor: Maybe<string>;

    asetRumah: Maybe<string>;

    asetTanah: Maybe<string>;

    asetToko: Maybe<string>;

    asetWarung: Maybe<string>;

    createdAt: Date;

    createdBy: Maybe<string>;

    pendapatan: Maybe<string>;

    personId: PersonId;

    sktm: boolean;

    sktmUpload: Maybe<string>;

    stmKeterangan: Maybe<string>;

    tanggunganAnak: Maybe<number>;

    tanggunganFamili: Maybe<number>;

    tanggunganLain: Maybe<number>;

    tanggunganPasangan: Maybe<number>;

    updatedAt: Date;

    updatedBy: Maybe<string>;

    usiaSaatKlien: Maybe<number>;

    caseid: Caseid;
  };

  export type PersonId = {
    __typename?: 'Person';

    id: number;

    namaLengkap: Maybe<string>;
  };

  export type Caseid = {
    __typename?: 'Case';

    id: number;
  };
}

export namespace UpdatePerson {
  export type Variables = {
    data: PersonUpdateInput;
    where: PersonWhereUniqueInput;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    updatePerson: Maybe<UpdatePerson>;
  };

  export type UpdatePerson = {
    __typename?: 'Person';

    id: number;

    agama: Maybe<string>;

    alamatDomisili: Maybe<string>;

    alamatId: Maybe<string>;

    alatBantu: Maybe<string>;

    alias: Maybe<string>;

    createdAt: Date;

    createdBy: Maybe<string>;

    disabilitas: boolean;

    distrikDomisili: Maybe<string>;

    distrikId: Maybe<string>;

    domisiliSama: boolean;

    email: Maybe<string>;

    golDarah: Maybe<string>;

    jenisDisabilitas: Maybe<string>;

    jenisDomisili: Maybe<string>;

    jenisId: Maybe<string>;

    jenisKelamin: Maybe<string>;

    jmlAnggota: Maybe<number>;

    namaLengkap: Maybe<string>;

    nomorId: Maybe<string>;

    pekerjaan: Maybe<string>;

    pendidikan: Maybe<string>;

    statusPernikahan: Maybe<string>;

    telepon: Maybe<string>;

    tglLahir: Maybe<Date>;

    tmpLahir: Maybe<string>;

    unitSatuan: Maybe<string>;

    updatedAt: Date;

    updatedBy: Maybe<string>;

    wargaNegara: Maybe<string>;

    applications: Maybe<Applications[]>;

    clients: Maybe<Clients[]>;

    documents: Maybe<Documents[]>;
  };

  export type Applications = {
    __typename?: 'Application';

    id: number;

    noReg: Maybe<string>;

    createdAt: Date;
  };

  export type Clients = {
    __typename?: 'Client';

    id: number;

    applicationId: ApplicationId;
  };

  export type ApplicationId = {
    __typename?: 'Application';

    id: number;

    noReg: Maybe<string>;

    createdAt: Date;
  };

  export type Documents = {
    __typename?: 'PersonDocument';

    id: number;

    title: Maybe<number>;

    file: Maybe<number>;
  };
}

export namespace CreatePerson {
  export type Variables = {
    data: PersonCreateInput;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    createPerson: CreatePerson;
  };

  export type CreatePerson = {
    __typename?: 'Person';

    id: number;

    agama: Maybe<string>;

    alamatDomisili: Maybe<string>;

    alamatId: Maybe<string>;

    alatBantu: Maybe<string>;

    alias: Maybe<string>;

    createdAt: Date;

    createdBy: Maybe<string>;

    disabilitas: boolean;

    distrikDomisili: Maybe<string>;

    distrikId: Maybe<string>;

    domisiliSama: boolean;

    email: Maybe<string>;

    golDarah: Maybe<string>;

    jenisDisabilitas: Maybe<string>;

    jenisDomisili: Maybe<string>;

    jenisId: Maybe<string>;

    jenisKelamin: Maybe<string>;

    jmlAnggota: Maybe<number>;

    namaLengkap: Maybe<string>;

    nomorId: Maybe<string>;

    pekerjaan: Maybe<string>;

    pendidikan: Maybe<string>;

    statusPernikahan: Maybe<string>;

    telepon: Maybe<string>;

    tglLahir: Maybe<Date>;

    tmpLahir: Maybe<string>;

    unitSatuan: Maybe<string>;

    updatedAt: Date;

    updatedBy: Maybe<string>;

    wargaNegara: Maybe<string>;

    applications: Maybe<Applications[]>;

    clients: Maybe<Clients[]>;

    documents: Maybe<Documents[]>;
  };

  export type Applications = {
    __typename?: 'Application';

    id: number;

    noReg: Maybe<string>;

    createdAt: Date;
  };

  export type Clients = {
    __typename?: 'Client';

    id: number;

    applicationId: ApplicationId;
  };

  export type ApplicationId = {
    __typename?: 'Application';

    id: number;

    noReg: Maybe<string>;

    createdAt: Date;
  };

  export type Documents = {
    __typename?: 'PersonDocument';

    id: number;

    title: Maybe<number>;

    file: Maybe<number>;
  };
}

export namespace GetClient {
  export type Variables = {
    where?: Maybe<ClientWhereInput>;
    orderBy?: Maybe<ClientOrderByInput>;
    skip?: Maybe<number>;
    after?: Maybe<string>;
    before?: Maybe<string>;
    first?: Maybe<number>;
    last?: Maybe<number>;
  };

  export type Query = {
    __typename?: 'Query';

    clients: (Maybe<Clients>)[];
  };

  export type Clients = {
    __typename?: 'Client';

    id: number;

    alamatLokasi: Maybe<string>;

    applicationId: ApplicationId;

    asetGedung: Maybe<string>;

    asetKios: Maybe<string>;

    asetLahanGarapan: Maybe<string>;

    asetLapak: Maybe<string>;

    asetMobil: Maybe<string>;

    asetMotor: Maybe<string>;

    asetRumah: Maybe<string>;

    asetTanah: Maybe<string>;

    asetToko: Maybe<string>;

    asetWarung: Maybe<string>;

    createdAt: Date;

    createdBy: Maybe<string>;

    pendapatan: Maybe<string>;

    personId: PersonId;

    sktm: boolean;

    sktmUpload: Maybe<string>;

    stmKeterangan: Maybe<string>;

    tanggunganAnak: Maybe<number>;

    tanggunganFamili: Maybe<number>;

    tanggunganLain: Maybe<number>;

    tanggunganPasangan: Maybe<number>;

    updatedAt: Date;

    updatedBy: Maybe<string>;

    usiaSaatKlien: Maybe<number>;

    caseid: Caseid;
  };

  export type ApplicationId = {
    __typename?: 'Application';

    id: number;
  };

  export type PersonId = {
    __typename?: 'Person';

    id: number;
  };

  export type Caseid = {
    __typename?: 'Case';

    id: number;
  };
}

export namespace GetApplications {
  export type Variables = {
    where?: Maybe<ApplicationWhereInput>;
    orderBy?: Maybe<ApplicationOrderByInput>;
    skip?: Maybe<number>;
    after?: Maybe<string>;
    before?: Maybe<string>;
    first?: Maybe<number>;
    last?: Maybe<number>;
  };

  export type Query = {
    __typename?: 'Query';

    applications: (Maybe<Applications>)[];
  };

  export type Applications = {
    __typename?: 'Application';

    id: number;

    createdAt: Date;

    createdBy: Maybe<string>;

    dudukPerara: Maybe<string>;

    infoLbh: Maybe<string>;

    jumlahPenerimaManfaat: Maybe<number>;

    konfirmasiData: boolean;

    noReg: Maybe<string>;

    pernahKlien: Maybe<string>;

    pernahPpLain: Maybe<string>;

    ppLain: Maybe<string>;

    regDate: Maybe<Date>;

    relasiWakilClient: Maybe<string>;

    setujuAdvokasi: boolean;

    statusPerwakilan: Maybe<string>;

    updatedAt: Date;

    updatedBy: Maybe<string>;

    wakilId: WakilId;

    waktuPernahKlien: Maybe<string>;

    whyLbh: Maybe<string>;

    case: Case;

    clients: Maybe<Clients[]>;
  };

  export type WakilId = {
    __typename?: 'Person';

    id: number;

    namaLengkap: Maybe<string>;
  };

  export type Case = {
    __typename?: 'Case';

    id: number;
  };

  export type Clients = {
    __typename?: 'Client';

    id: number;

    alamatLokasi: Maybe<string>;

    asetGedung: Maybe<string>;

    asetKios: Maybe<string>;

    asetLahanGarapan: Maybe<string>;

    asetLapak: Maybe<string>;

    asetMobil: Maybe<string>;

    asetMotor: Maybe<string>;

    asetRumah: Maybe<string>;

    asetTanah: Maybe<string>;

    asetToko: Maybe<string>;

    asetWarung: Maybe<string>;

    createdAt: Date;

    createdBy: Maybe<string>;

    pendapatan: Maybe<string>;

    personId: PersonId;

    sktm: boolean;

    sktmUpload: Maybe<string>;

    stmKeterangan: Maybe<string>;

    tanggunganAnak: Maybe<number>;

    tanggunganFamili: Maybe<number>;

    tanggunganLain: Maybe<number>;

    tanggunganPasangan: Maybe<number>;

    updatedAt: Date;

    updatedBy: Maybe<string>;

    usiaSaatKlien: Maybe<number>;

    caseid: Caseid;
  };

  export type PersonId = {
    __typename?: 'Person';

    id: number;

    namaLengkap: Maybe<string>;
  };

  export type Caseid = {
    __typename?: 'Case';

    id: number;
  };
}

export namespace GetMtVocabs {
  export type Variables = {
    where?: Maybe<MtVocabWhereInput>;
    orderBy?: Maybe<MtVocabOrderByInput>;
    skip?: Maybe<number>;
    after?: Maybe<string>;
    before?: Maybe<string>;
    first?: Maybe<number>;
    last?: Maybe<number>;
  };

  export type Query = {
    __typename?: 'Query';

    mtVocabs: (Maybe<MtVocabs>)[];
  };

  export type MtVocabs = {
    __typename?: 'MtVocab';

    KODE: string;

    kode_induk: Maybe<string>;

    level: Maybe<number>;

    sembunyikan: boolean;

    teks: Maybe<string>;

    urutan: Maybe<number>;
  };
}

export namespace AllPerson {
  export type Variables = {
    where?: Maybe<PersonWhereInput>;
    orderBy?: Maybe<PersonOrderByInput>;
    skip?: Maybe<number>;
    after?: Maybe<string>;
    before?: Maybe<string>;
    first?: Maybe<number>;
    last?: Maybe<number>;
  };

  export type Query = {
    __typename?: 'Query';

    persons: (Maybe<Persons>)[];
  };

  export type Persons = {
    __typename?: 'Person';

    id: number;

    agama: Maybe<string>;

    alamatDomisili: Maybe<string>;

    alamatId: Maybe<string>;

    alatBantu: Maybe<string>;

    alias: Maybe<string>;

    createdAt: Date;

    createdBy: Maybe<string>;

    disabilitas: boolean;

    distrikDomisili: Maybe<string>;

    distrikId: Maybe<string>;

    domisiliSama: boolean;

    email: Maybe<string>;

    golDarah: Maybe<string>;

    jenisDisabilitas: Maybe<string>;

    jenisDomisili: Maybe<string>;

    jenisId: Maybe<string>;

    jenisKelamin: Maybe<string>;

    jmlAnggota: Maybe<number>;

    namaLengkap: Maybe<string>;

    nomorId: Maybe<string>;

    pekerjaan: Maybe<string>;

    pendidikan: Maybe<string>;

    statusPernikahan: Maybe<string>;

    telepon: Maybe<string>;

    tglLahir: Maybe<Date>;

    tmpLahir: Maybe<string>;

    unitSatuan: Maybe<string>;

    updatedAt: Date;

    updatedBy: Maybe<string>;

    wargaNegara: Maybe<string>;

    applications: Maybe<Applications[]>;

    clients: Maybe<Clients[]>;

    documents: Maybe<Documents[]>;
  };

  export type Applications = {
    __typename?: 'Application';

    id: number;

    noReg: Maybe<string>;

    createdAt: Date;
  };

  export type Clients = {
    __typename?: 'Client';

    id: number;

    applicationId: ApplicationId;
  };

  export type ApplicationId = {
    __typename?: 'Application';

    id: number;

    noReg: Maybe<string>;

    createdAt: Date;
  };

  export type Documents = {
    __typename?: 'PersonDocument';

    id: number;

    title: Maybe<number>;

    file: Maybe<number>;
  };
}

// ====================================================
// START: Apollo Angular template
// ====================================================

import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

import gql from 'graphql-tag';

// ====================================================
// Apollo Services
// ====================================================

@Injectable({
  providedIn: 'root',
})
export class CreateClientGQL extends Apollo.Mutation<CreateClient.Mutation, CreateClient.Variables> {
  document: any = gql`
    mutation createClient($data: ClientCreateInput!) {
      createClient(data: $data) {
        id
        alamatLokasi
        applicationId {
          id
        }
        asetGedung
        asetKios
        asetLahanGarapan
        asetLapak
        asetMobil
        asetMotor
        asetRumah
        asetTanah
        asetToko
        asetWarung
        createdAt
        createdBy
        pendapatan
        personId {
          id
        }
        sktm
        sktmUpload
        stmKeterangan
        tanggunganAnak
        tanggunganFamili
        tanggunganLain
        tanggunganPasangan
        updatedAt
        updatedBy
        usiaSaatKlien
        caseid {
          id
        }
      }
    }
  `;
}
@Injectable({
  providedIn: 'root',
})
export class CreateApplicationGQL extends Apollo.Mutation<CreateApplication.Mutation, CreateApplication.Variables> {
  document: any = gql`
    mutation createApplication($data: ApplicationCreateInput!) {
      createApplication(data: $data) {
        id
        createdAt
        createdBy
        dudukPerara
        infoLbh
        jumlahPenerimaManfaat
        konfirmasiData
        noReg
        pernahKlien
        pernahPpLain
        ppLain
        regDate
        relasiWakilClient
        setujuAdvokasi
        statusPerwakilan
        updatedAt
        updatedBy
        wakilId {
          id
          namaLengkap
        }
        waktuPernahKlien
        whyLbh
        case {
          id
        }
        clients {
          id
          alamatLokasi
          asetGedung
          asetKios
          asetLahanGarapan
          asetLapak
          asetMobil
          asetMotor
          asetRumah
          asetTanah
          asetToko
          asetWarung
          createdAt
          createdBy
          pendapatan
          personId {
            id
            namaLengkap
          }
          sktm
          sktmUpload
          stmKeterangan
          tanggunganAnak
          tanggunganFamili
          tanggunganLain
          tanggunganPasangan
          updatedAt
          updatedBy
          usiaSaatKlien
          caseid {
            id
          }
        }
      }
    }
  `;
}
@Injectable({
  providedIn: 'root',
})
export class UpdatePersonGQL extends Apollo.Mutation<UpdatePerson.Mutation, UpdatePerson.Variables> {
  document: any = gql`
    mutation updatePerson($data: PersonUpdateInput!, $where: PersonWhereUniqueInput!) {
      updatePerson(data: $data, where: $where) {
        id
        agama
        alamatDomisili
        alamatId
        alatBantu
        alias
        createdAt
        createdBy
        disabilitas
        distrikDomisili
        distrikId
        domisiliSama
        email
        golDarah
        jenisDisabilitas
        jenisDomisili
        jenisId
        jenisKelamin
        jmlAnggota
        namaLengkap
        nomorId
        pekerjaan
        pendidikan
        statusPernikahan
        telepon
        tglLahir
        tmpLahir
        unitSatuan
        updatedAt
        updatedBy
        wargaNegara
        applications {
          id
          noReg
          createdAt
        }
        clients {
          id
          applicationId {
            id
            noReg
            createdAt
          }
        }
        documents {
          id
          title
          file
        }
      }
    }
  `;
}
@Injectable({
  providedIn: 'root',
})
export class CreatePersonGQL extends Apollo.Mutation<CreatePerson.Mutation, CreatePerson.Variables> {
  document: any = gql`
    mutation createPerson($data: PersonCreateInput!) {
      createPerson(data: $data) {
        id
        agama
        alamatDomisili
        alamatId
        alatBantu
        alias
        createdAt
        createdBy
        disabilitas
        distrikDomisili
        distrikId
        domisiliSama
        email
        golDarah
        jenisDisabilitas
        jenisDomisili
        jenisId
        jenisKelamin
        jmlAnggota
        namaLengkap
        nomorId
        pekerjaan
        pendidikan
        statusPernikahan
        telepon
        tglLahir
        tmpLahir
        unitSatuan
        updatedAt
        updatedBy
        wargaNegara
        applications {
          id
          noReg
          createdAt
        }
        clients {
          id
          applicationId {
            id
            noReg
            createdAt
          }
        }
        documents {
          id
          title
          file
        }
      }
    }
  `;
}
@Injectable({
  providedIn: 'root',
})
export class GetClientGQL extends Apollo.Query<GetClient.Query, GetClient.Variables> {
  document: any = gql`
    query getClient(
      $where: ClientWhereInput
      $orderBy: ClientOrderByInput
      $skip: Int
      $after: String
      $before: String
      $first: Int
      $last: Int
    ) {
      clients {
        id
        alamatLokasi
        applicationId {
          id
        }
        asetGedung
        asetKios
        asetLahanGarapan
        asetLapak
        asetMobil
        asetMotor
        asetRumah
        asetTanah
        asetToko
        asetWarung
        createdAt
        createdBy
        pendapatan
        personId {
          id
        }
        sktm
        sktmUpload
        stmKeterangan
        tanggunganAnak
        tanggunganFamili
        tanggunganLain
        tanggunganPasangan
        updatedAt
        updatedBy
        usiaSaatKlien
        caseid {
          id
        }
      }
    }
  `;
}
@Injectable({
  providedIn: 'root',
})
export class GetApplicationsGQL extends Apollo.Query<GetApplications.Query, GetApplications.Variables> {
  document: any = gql`
    query getApplications(
      $where: ApplicationWhereInput
      $orderBy: ApplicationOrderByInput
      $skip: Int
      $after: String
      $before: String
      $first: Int
      $last: Int
    ) {
      applications(
        where: $where
        orderBy: $orderBy
        skip: $skip
        after: $after
        before: $before
        first: $first
        last: $last
      ) {
        id
        createdAt
        createdBy
        dudukPerara
        infoLbh
        jumlahPenerimaManfaat
        konfirmasiData
        noReg
        pernahKlien
        pernahPpLain
        ppLain
        regDate
        relasiWakilClient
        setujuAdvokasi
        statusPerwakilan
        updatedAt
        updatedBy
        wakilId {
          id
          namaLengkap
        }
        waktuPernahKlien
        whyLbh
        case {
          id
        }
        clients {
          id
          alamatLokasi
          asetGedung
          asetKios
          asetLahanGarapan
          asetLapak
          asetMobil
          asetMotor
          asetRumah
          asetTanah
          asetToko
          asetWarung
          createdAt
          createdBy
          pendapatan
          personId {
            id
            namaLengkap
          }
          sktm
          sktmUpload
          stmKeterangan
          tanggunganAnak
          tanggunganFamili
          tanggunganLain
          tanggunganPasangan
          updatedAt
          updatedBy
          usiaSaatKlien
          caseid {
            id
          }
        }
      }
    }
  `;
}
@Injectable({
  providedIn: 'root',
})
export class GetMtVocabsGQL extends Apollo.Query<GetMtVocabs.Query, GetMtVocabs.Variables> {
  document: any = gql`
    query getMtVocabs(
      $where: MtVocabWhereInput
      $orderBy: MtVocabOrderByInput
      $skip: Int
      $after: String
      $before: String
      $first: Int
      $last: Int
    ) {
      mtVocabs(
        where: $where
        orderBy: $orderBy
        skip: $skip
        after: $after
        before: $before
        first: $first
        last: $last
      ) {
        KODE
        kode_induk
        level
        sembunyikan
        teks
        urutan
      }
    }
  `;
}
@Injectable({
  providedIn: 'root',
})
export class AllPersonGQL extends Apollo.Query<AllPerson.Query, AllPerson.Variables> {
  document: any = gql`
    query allPerson(
      $where: PersonWhereInput
      $orderBy: PersonOrderByInput
      $skip: Int
      $after: String
      $before: String
      $first: Int
      $last: Int
    ) {
      persons(
        where: $where
        orderBy: $orderBy
        skip: $skip
        after: $after
        before: $before
        first: $first
        last: $last
      ) {
        id
        agama
        alamatDomisili
        alamatId
        alatBantu
        alias
        createdAt
        createdBy
        disabilitas
        distrikDomisili
        distrikId
        domisiliSama
        email
        golDarah
        jenisDisabilitas
        jenisDomisili
        jenisId
        jenisKelamin
        jmlAnggota
        namaLengkap
        nomorId
        pekerjaan
        pendidikan
        statusPernikahan
        telepon
        tglLahir
        tmpLahir
        unitSatuan
        updatedAt
        updatedBy
        wargaNegara
        applications {
          id
          noReg
          createdAt
        }
        clients {
          id
          applicationId {
            id
            noReg
            createdAt
          }
        }
        documents {
          id
          title
          file
        }
      }
    }
  `;
}

// ====================================================
// END: Apollo Angular template
// ====================================================
