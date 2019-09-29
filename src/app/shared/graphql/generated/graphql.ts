import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: Date,
  /** The `Long` scalar type represents non-fractional signed whole numeric values.
   * Long can represent values between -(2^63) and 2^63 - 1.
 */
  Long: any,
};



export type AggregateApplication = {
  count: Scalars['Int'],
};

export type AggregateCase = {
  count: Scalars['Int'],
};

export type AggregateCaseClassification = {
  count: Scalars['Int'],
};

export type AggregateCaseConsultation = {
  count: Scalars['Int'],
};

export type AggregateCaseConsultationApp = {
  count: Scalars['Int'],
};

export type AggregateCaseDocument = {
  count: Scalars['Int'],
};

export type AggregateCaseIssue = {
  count: Scalars['Int'],
};

export type AggregateCaseKorban = {
  count: Scalars['Int'],
};

export type AggregateCasePelaku = {
  count: Scalars['Int'],
};

export type AggregateCasePk = {
  count: Scalars['Int'],
};

export type AggregateCaseProgress = {
  count: Scalars['Int'],
};

export type AggregateCaseProgressActivity = {
  count: Scalars['Int'],
};

export type AggregateCaseProgressActivityLit = {
  count: Scalars['Int'],
};

export type AggregateCaseProgressActivityNonlit = {
  count: Scalars['Int'],
};

export type AggregateCaseReferral = {
  count: Scalars['Int'],
};

export type AggregateCaseTransfer = {
  count: Scalars['Int'],
};

export type AggregateCaseTransferReferral = {
  count: Scalars['Int'],
};

export type AggregateCaseViolatedRight = {
  count: Scalars['Int'],
};

export type AggregateClient = {
  count: Scalars['Int'],
};

export type AggregateDaftarPengacara = {
  count: Scalars['Int'],
};

export type AggregateDataDict = {
  count: Scalars['Int'],
};

export type AggregateDataDictLocal = {
  count: Scalars['Int'],
};

export type AggregateLogRequest = {
  count: Scalars['Int'],
};

export type AggregateLogRequestApp = {
  count: Scalars['Int'],
};

export type AggregateMtVocab = {
  count: Scalars['Int'],
};

export type AggregateMtVocabGroup = {
  count: Scalars['Int'],
};

export type AggregateNetwork = {
  count: Scalars['Int'],
};

export type AggregatePerson = {
  count: Scalars['Int'],
};

export type AggregatePersonDocument = {
  count: Scalars['Int'],
};

export type AggregateRole = {
  count: Scalars['Int'],
};

export type AggregateRolesType = {
  count: Scalars['Int'],
};

export type AggregateUser = {
  count: Scalars['Int'],
};

export type AggregateUserProfile = {
  count: Scalars['Int'],
};

export type Application = {
  id: Scalars['Int'],
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  dudukPerara?: Maybe<Scalars['String']>,
  infoLbh?: Maybe<Scalars['String']>,
  jumlahPenerimaManfaat?: Maybe<Scalars['Int']>,
  konfirmasiData: Scalars['Boolean'],
  noReg?: Maybe<Scalars['String']>,
  pernahKlien?: Maybe<Scalars['String']>,
  pernahPpLain?: Maybe<Scalars['String']>,
  ppLain?: Maybe<Scalars['String']>,
  regDate?: Maybe<Scalars['DateTime']>,
  relasiWakilClient?: Maybe<Scalars['String']>,
  setujuAdvokasi: Scalars['Boolean'],
  statusPerwakilan?: Maybe<Scalars['String']>,
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
  wakilId?: Maybe<Person>,
  waktuPernahKlien?: Maybe<Scalars['String']>,
  whyLbh?: Maybe<Scalars['String']>,
  case?: Maybe<Case>,
  clients?: Maybe<Array<Client>>,
  tahap?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
};


export type ApplicationClientsArgs = {
  where?: Maybe<ClientWhereInput>,
  orderBy?: Maybe<ClientOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

/** A connection to a list of items. */
export type ApplicationConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<ApplicationEdge>>,
  aggregate: AggregateApplication,
};

export type ApplicationCreateInput = {
  createdBy?: Maybe<Scalars['String']>,
  dudukPerara?: Maybe<Scalars['String']>,
  infoLbh?: Maybe<Scalars['String']>,
  jumlahPenerimaManfaat?: Maybe<Scalars['Int']>,
  konfirmasiData: Scalars['Boolean'],
  noReg?: Maybe<Scalars['String']>,
  pernahKlien?: Maybe<Scalars['String']>,
  pernahPpLain?: Maybe<Scalars['String']>,
  ppLain?: Maybe<Scalars['String']>,
  regDate?: Maybe<Scalars['DateTime']>,
  relasiWakilClient?: Maybe<Scalars['String']>,
  setujuAdvokasi: Scalars['Boolean'],
  statusPerwakilan?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  waktuPernahKlien?: Maybe<Scalars['String']>,
  whyLbh?: Maybe<Scalars['String']>,
  tahap?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  wakilId?: Maybe<PersonCreateOneWithoutApplicationsInput>,
  case?: Maybe<CaseCreateOneWithoutApplicationInput>,
  clients?: Maybe<ClientCreateManyWithoutApplicationIdInput>,
};

export type ApplicationCreateManyWithoutWakilIdInput = {
  create?: Maybe<Array<ApplicationCreateWithoutWakilIdInput>>,
  connect?: Maybe<Array<ApplicationWhereUniqueInput>>,
};

export type ApplicationCreateOneInput = {
  create?: Maybe<ApplicationCreateInput>,
  connect?: Maybe<ApplicationWhereUniqueInput>,
};

export type ApplicationCreateOneWithoutCaseInput = {
  create?: Maybe<ApplicationCreateWithoutCaseInput>,
  connect?: Maybe<ApplicationWhereUniqueInput>,
};

export type ApplicationCreateOneWithoutClientsInput = {
  create?: Maybe<ApplicationCreateWithoutClientsInput>,
  connect?: Maybe<ApplicationWhereUniqueInput>,
};

export type ApplicationCreateWithoutCaseInput = {
  createdBy?: Maybe<Scalars['String']>,
  dudukPerara?: Maybe<Scalars['String']>,
  infoLbh?: Maybe<Scalars['String']>,
  jumlahPenerimaManfaat?: Maybe<Scalars['Int']>,
  konfirmasiData: Scalars['Boolean'],
  noReg?: Maybe<Scalars['String']>,
  pernahKlien?: Maybe<Scalars['String']>,
  pernahPpLain?: Maybe<Scalars['String']>,
  ppLain?: Maybe<Scalars['String']>,
  regDate?: Maybe<Scalars['DateTime']>,
  relasiWakilClient?: Maybe<Scalars['String']>,
  setujuAdvokasi: Scalars['Boolean'],
  statusPerwakilan?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  waktuPernahKlien?: Maybe<Scalars['String']>,
  whyLbh?: Maybe<Scalars['String']>,
  tahap?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  wakilId?: Maybe<PersonCreateOneWithoutApplicationsInput>,
  clients?: Maybe<ClientCreateManyWithoutApplicationIdInput>,
};

export type ApplicationCreateWithoutClientsInput = {
  createdBy?: Maybe<Scalars['String']>,
  dudukPerara?: Maybe<Scalars['String']>,
  infoLbh?: Maybe<Scalars['String']>,
  jumlahPenerimaManfaat?: Maybe<Scalars['Int']>,
  konfirmasiData: Scalars['Boolean'],
  noReg?: Maybe<Scalars['String']>,
  pernahKlien?: Maybe<Scalars['String']>,
  pernahPpLain?: Maybe<Scalars['String']>,
  ppLain?: Maybe<Scalars['String']>,
  regDate?: Maybe<Scalars['DateTime']>,
  relasiWakilClient?: Maybe<Scalars['String']>,
  setujuAdvokasi: Scalars['Boolean'],
  statusPerwakilan?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  waktuPernahKlien?: Maybe<Scalars['String']>,
  whyLbh?: Maybe<Scalars['String']>,
  tahap?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  wakilId?: Maybe<PersonCreateOneWithoutApplicationsInput>,
  case?: Maybe<CaseCreateOneWithoutApplicationInput>,
};

export type ApplicationCreateWithoutWakilIdInput = {
  createdBy?: Maybe<Scalars['String']>,
  dudukPerara?: Maybe<Scalars['String']>,
  infoLbh?: Maybe<Scalars['String']>,
  jumlahPenerimaManfaat?: Maybe<Scalars['Int']>,
  konfirmasiData: Scalars['Boolean'],
  noReg?: Maybe<Scalars['String']>,
  pernahKlien?: Maybe<Scalars['String']>,
  pernahPpLain?: Maybe<Scalars['String']>,
  ppLain?: Maybe<Scalars['String']>,
  regDate?: Maybe<Scalars['DateTime']>,
  relasiWakilClient?: Maybe<Scalars['String']>,
  setujuAdvokasi: Scalars['Boolean'],
  statusPerwakilan?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  waktuPernahKlien?: Maybe<Scalars['String']>,
  whyLbh?: Maybe<Scalars['String']>,
  tahap?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  case?: Maybe<CaseCreateOneWithoutApplicationInput>,
  clients?: Maybe<ClientCreateManyWithoutApplicationIdInput>,
};

/** An edge in a connection. */
export type ApplicationEdge = {
  /** The item at the end of the edge. */
  node: Application,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum ApplicationOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  DudukPeraraAsc = 'dudukPerara_ASC',
  DudukPeraraDesc = 'dudukPerara_DESC',
  InfoLbhAsc = 'infoLbh_ASC',
  InfoLbhDesc = 'infoLbh_DESC',
  JumlahPenerimaManfaatAsc = 'jumlahPenerimaManfaat_ASC',
  JumlahPenerimaManfaatDesc = 'jumlahPenerimaManfaat_DESC',
  KonfirmasiDataAsc = 'konfirmasiData_ASC',
  KonfirmasiDataDesc = 'konfirmasiData_DESC',
  NoRegAsc = 'noReg_ASC',
  NoRegDesc = 'noReg_DESC',
  PernahKlienAsc = 'pernahKlien_ASC',
  PernahKlienDesc = 'pernahKlien_DESC',
  PernahPpLainAsc = 'pernahPpLain_ASC',
  PernahPpLainDesc = 'pernahPpLain_DESC',
  PpLainAsc = 'ppLain_ASC',
  PpLainDesc = 'ppLain_DESC',
  RegDateAsc = 'regDate_ASC',
  RegDateDesc = 'regDate_DESC',
  RelasiWakilClientAsc = 'relasiWakilClient_ASC',
  RelasiWakilClientDesc = 'relasiWakilClient_DESC',
  SetujuAdvokasiAsc = 'setujuAdvokasi_ASC',
  SetujuAdvokasiDesc = 'setujuAdvokasi_DESC',
  StatusPerwakilanAsc = 'statusPerwakilan_ASC',
  StatusPerwakilanDesc = 'statusPerwakilan_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC',
  WaktuPernahKlienAsc = 'waktuPernahKlien_ASC',
  WaktuPernahKlienDesc = 'waktuPernahKlien_DESC',
  WhyLbhAsc = 'whyLbh_ASC',
  WhyLbhDesc = 'whyLbh_DESC',
  TahapAsc = 'tahap_ASC',
  TahapDesc = 'tahap_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC'
}

export type ApplicationPreviousValues = {
  id: Scalars['Int'],
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  dudukPerara?: Maybe<Scalars['String']>,
  infoLbh?: Maybe<Scalars['String']>,
  jumlahPenerimaManfaat?: Maybe<Scalars['Int']>,
  konfirmasiData: Scalars['Boolean'],
  noReg?: Maybe<Scalars['String']>,
  pernahKlien?: Maybe<Scalars['String']>,
  pernahPpLain?: Maybe<Scalars['String']>,
  ppLain?: Maybe<Scalars['String']>,
  regDate?: Maybe<Scalars['DateTime']>,
  relasiWakilClient?: Maybe<Scalars['String']>,
  setujuAdvokasi: Scalars['Boolean'],
  statusPerwakilan?: Maybe<Scalars['String']>,
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
  waktuPernahKlien?: Maybe<Scalars['String']>,
  whyLbh?: Maybe<Scalars['String']>,
  tahap?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
};

export type ApplicationScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ApplicationScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ApplicationScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ApplicationScalarWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  createdBy_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  createdBy_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  createdBy_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  createdBy_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  createdBy_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  createdBy_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  createdBy_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  createdBy_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  createdBy_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  createdBy_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  createdBy_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  createdBy_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  createdBy_not_ends_with?: Maybe<Scalars['String']>,
  dudukPerara?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  dudukPerara_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  dudukPerara_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  dudukPerara_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  dudukPerara_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  dudukPerara_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  dudukPerara_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  dudukPerara_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  dudukPerara_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  dudukPerara_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  dudukPerara_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  dudukPerara_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  dudukPerara_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  dudukPerara_not_ends_with?: Maybe<Scalars['String']>,
  infoLbh?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  infoLbh_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  infoLbh_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  infoLbh_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  infoLbh_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  infoLbh_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  infoLbh_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  infoLbh_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  infoLbh_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  infoLbh_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  infoLbh_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  infoLbh_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  infoLbh_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  infoLbh_not_ends_with?: Maybe<Scalars['String']>,
  jumlahPenerimaManfaat?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  jumlahPenerimaManfaat_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  jumlahPenerimaManfaat_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  jumlahPenerimaManfaat_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  jumlahPenerimaManfaat_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  jumlahPenerimaManfaat_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  jumlahPenerimaManfaat_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  jumlahPenerimaManfaat_gte?: Maybe<Scalars['Int']>,
  konfirmasiData?: Maybe<Scalars['Boolean']>,
  /** All values that are not equal to given value. */
  konfirmasiData_not?: Maybe<Scalars['Boolean']>,
  noReg?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  noReg_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  noReg_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  noReg_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  noReg_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  noReg_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  noReg_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  noReg_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  noReg_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  noReg_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  noReg_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  noReg_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  noReg_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  noReg_not_ends_with?: Maybe<Scalars['String']>,
  pernahKlien?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  pernahKlien_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  pernahKlien_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  pernahKlien_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  pernahKlien_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  pernahKlien_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  pernahKlien_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  pernahKlien_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  pernahKlien_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  pernahKlien_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  pernahKlien_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  pernahKlien_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  pernahKlien_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  pernahKlien_not_ends_with?: Maybe<Scalars['String']>,
  pernahPpLain?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  pernahPpLain_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  pernahPpLain_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  pernahPpLain_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  pernahPpLain_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  pernahPpLain_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  pernahPpLain_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  pernahPpLain_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  pernahPpLain_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  pernahPpLain_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  pernahPpLain_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  pernahPpLain_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  pernahPpLain_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  pernahPpLain_not_ends_with?: Maybe<Scalars['String']>,
  ppLain?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  ppLain_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  ppLain_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  ppLain_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  ppLain_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  ppLain_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  ppLain_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  ppLain_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  ppLain_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  ppLain_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  ppLain_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  ppLain_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  ppLain_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  ppLain_not_ends_with?: Maybe<Scalars['String']>,
  regDate?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  regDate_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  regDate_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  regDate_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  regDate_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  regDate_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  regDate_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  regDate_gte?: Maybe<Scalars['DateTime']>,
  relasiWakilClient?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  relasiWakilClient_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  relasiWakilClient_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  relasiWakilClient_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  relasiWakilClient_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  relasiWakilClient_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  relasiWakilClient_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  relasiWakilClient_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  relasiWakilClient_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  relasiWakilClient_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  relasiWakilClient_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  relasiWakilClient_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  relasiWakilClient_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  relasiWakilClient_not_ends_with?: Maybe<Scalars['String']>,
  setujuAdvokasi?: Maybe<Scalars['Boolean']>,
  /** All values that are not equal to given value. */
  setujuAdvokasi_not?: Maybe<Scalars['Boolean']>,
  statusPerwakilan?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  statusPerwakilan_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  statusPerwakilan_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  statusPerwakilan_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  statusPerwakilan_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  statusPerwakilan_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  statusPerwakilan_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  statusPerwakilan_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  statusPerwakilan_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  statusPerwakilan_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  statusPerwakilan_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  statusPerwakilan_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  statusPerwakilan_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  statusPerwakilan_not_ends_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  updatedBy_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  updatedBy_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  updatedBy_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  updatedBy_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  updatedBy_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  updatedBy_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  updatedBy_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  updatedBy_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  updatedBy_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  updatedBy_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  updatedBy_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  updatedBy_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  updatedBy_not_ends_with?: Maybe<Scalars['String']>,
  waktuPernahKlien?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  waktuPernahKlien_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  waktuPernahKlien_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  waktuPernahKlien_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  waktuPernahKlien_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  waktuPernahKlien_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  waktuPernahKlien_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  waktuPernahKlien_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  waktuPernahKlien_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  waktuPernahKlien_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  waktuPernahKlien_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  waktuPernahKlien_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  waktuPernahKlien_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  waktuPernahKlien_not_ends_with?: Maybe<Scalars['String']>,
  whyLbh?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  whyLbh_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  whyLbh_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  whyLbh_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  whyLbh_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  whyLbh_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  whyLbh_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  whyLbh_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  whyLbh_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  whyLbh_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  whyLbh_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  whyLbh_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  whyLbh_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  whyLbh_not_ends_with?: Maybe<Scalars['String']>,
  tahap?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  tahap_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  tahap_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  tahap_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  tahap_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  tahap_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  tahap_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  tahap_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  tahap_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  tahap_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  tahap_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  tahap_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  tahap_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  tahap_not_ends_with?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>,
};

export type ApplicationSubscriptionPayload = {
  mutation: MutationType,
  node?: Maybe<Application>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<ApplicationPreviousValues>,
};

export type ApplicationSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ApplicationSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ApplicationSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ApplicationSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<ApplicationWhereInput>,
};

export type ApplicationUpdateDataInput = {
  createdBy?: Maybe<Scalars['String']>,
  dudukPerara?: Maybe<Scalars['String']>,
  infoLbh?: Maybe<Scalars['String']>,
  jumlahPenerimaManfaat?: Maybe<Scalars['Int']>,
  konfirmasiData?: Maybe<Scalars['Boolean']>,
  noReg?: Maybe<Scalars['String']>,
  pernahKlien?: Maybe<Scalars['String']>,
  pernahPpLain?: Maybe<Scalars['String']>,
  ppLain?: Maybe<Scalars['String']>,
  regDate?: Maybe<Scalars['DateTime']>,
  relasiWakilClient?: Maybe<Scalars['String']>,
  setujuAdvokasi?: Maybe<Scalars['Boolean']>,
  statusPerwakilan?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  waktuPernahKlien?: Maybe<Scalars['String']>,
  whyLbh?: Maybe<Scalars['String']>,
  tahap?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  wakilId?: Maybe<PersonUpdateOneWithoutApplicationsInput>,
  case?: Maybe<CaseUpdateOneWithoutApplicationInput>,
  clients?: Maybe<ClientUpdateManyWithoutApplicationIdInput>,
};

export type ApplicationUpdateInput = {
  createdBy?: Maybe<Scalars['String']>,
  dudukPerara?: Maybe<Scalars['String']>,
  infoLbh?: Maybe<Scalars['String']>,
  jumlahPenerimaManfaat?: Maybe<Scalars['Int']>,
  konfirmasiData?: Maybe<Scalars['Boolean']>,
  noReg?: Maybe<Scalars['String']>,
  pernahKlien?: Maybe<Scalars['String']>,
  pernahPpLain?: Maybe<Scalars['String']>,
  ppLain?: Maybe<Scalars['String']>,
  regDate?: Maybe<Scalars['DateTime']>,
  relasiWakilClient?: Maybe<Scalars['String']>,
  setujuAdvokasi?: Maybe<Scalars['Boolean']>,
  statusPerwakilan?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  waktuPernahKlien?: Maybe<Scalars['String']>,
  whyLbh?: Maybe<Scalars['String']>,
  tahap?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  wakilId?: Maybe<PersonUpdateOneWithoutApplicationsInput>,
  case?: Maybe<CaseUpdateOneWithoutApplicationInput>,
  clients?: Maybe<ClientUpdateManyWithoutApplicationIdInput>,
};

export type ApplicationUpdateManyDataInput = {
  createdBy?: Maybe<Scalars['String']>,
  dudukPerara?: Maybe<Scalars['String']>,
  infoLbh?: Maybe<Scalars['String']>,
  jumlahPenerimaManfaat?: Maybe<Scalars['Int']>,
  konfirmasiData?: Maybe<Scalars['Boolean']>,
  noReg?: Maybe<Scalars['String']>,
  pernahKlien?: Maybe<Scalars['String']>,
  pernahPpLain?: Maybe<Scalars['String']>,
  ppLain?: Maybe<Scalars['String']>,
  regDate?: Maybe<Scalars['DateTime']>,
  relasiWakilClient?: Maybe<Scalars['String']>,
  setujuAdvokasi?: Maybe<Scalars['Boolean']>,
  statusPerwakilan?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  waktuPernahKlien?: Maybe<Scalars['String']>,
  whyLbh?: Maybe<Scalars['String']>,
  tahap?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
};

export type ApplicationUpdateManyMutationInput = {
  createdBy?: Maybe<Scalars['String']>,
  dudukPerara?: Maybe<Scalars['String']>,
  infoLbh?: Maybe<Scalars['String']>,
  jumlahPenerimaManfaat?: Maybe<Scalars['Int']>,
  konfirmasiData?: Maybe<Scalars['Boolean']>,
  noReg?: Maybe<Scalars['String']>,
  pernahKlien?: Maybe<Scalars['String']>,
  pernahPpLain?: Maybe<Scalars['String']>,
  ppLain?: Maybe<Scalars['String']>,
  regDate?: Maybe<Scalars['DateTime']>,
  relasiWakilClient?: Maybe<Scalars['String']>,
  setujuAdvokasi?: Maybe<Scalars['Boolean']>,
  statusPerwakilan?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  waktuPernahKlien?: Maybe<Scalars['String']>,
  whyLbh?: Maybe<Scalars['String']>,
  tahap?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
};

export type ApplicationUpdateManyWithoutWakilIdInput = {
  create?: Maybe<Array<ApplicationCreateWithoutWakilIdInput>>,
  connect?: Maybe<Array<ApplicationWhereUniqueInput>>,
  set?: Maybe<Array<ApplicationWhereUniqueInput>>,
  disconnect?: Maybe<Array<ApplicationWhereUniqueInput>>,
  delete?: Maybe<Array<ApplicationWhereUniqueInput>>,
  update?: Maybe<Array<ApplicationUpdateWithWhereUniqueWithoutWakilIdInput>>,
  updateMany?: Maybe<Array<ApplicationUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<ApplicationScalarWhereInput>>,
  upsert?: Maybe<Array<ApplicationUpsertWithWhereUniqueWithoutWakilIdInput>>,
};

export type ApplicationUpdateManyWithWhereNestedInput = {
  where: ApplicationScalarWhereInput,
  data: ApplicationUpdateManyDataInput,
};

export type ApplicationUpdateOneInput = {
  create?: Maybe<ApplicationCreateInput>,
  connect?: Maybe<ApplicationWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<ApplicationUpdateDataInput>,
  upsert?: Maybe<ApplicationUpsertNestedInput>,
};

export type ApplicationUpdateOneRequiredWithoutCaseInput = {
  create?: Maybe<ApplicationCreateWithoutCaseInput>,
  connect?: Maybe<ApplicationWhereUniqueInput>,
  update?: Maybe<ApplicationUpdateWithoutCaseDataInput>,
  upsert?: Maybe<ApplicationUpsertWithoutCaseInput>,
};

export type ApplicationUpdateOneRequiredWithoutClientsInput = {
  create?: Maybe<ApplicationCreateWithoutClientsInput>,
  connect?: Maybe<ApplicationWhereUniqueInput>,
  update?: Maybe<ApplicationUpdateWithoutClientsDataInput>,
  upsert?: Maybe<ApplicationUpsertWithoutClientsInput>,
};

export type ApplicationUpdateWithoutCaseDataInput = {
  createdBy?: Maybe<Scalars['String']>,
  dudukPerara?: Maybe<Scalars['String']>,
  infoLbh?: Maybe<Scalars['String']>,
  jumlahPenerimaManfaat?: Maybe<Scalars['Int']>,
  konfirmasiData?: Maybe<Scalars['Boolean']>,
  noReg?: Maybe<Scalars['String']>,
  pernahKlien?: Maybe<Scalars['String']>,
  pernahPpLain?: Maybe<Scalars['String']>,
  ppLain?: Maybe<Scalars['String']>,
  regDate?: Maybe<Scalars['DateTime']>,
  relasiWakilClient?: Maybe<Scalars['String']>,
  setujuAdvokasi?: Maybe<Scalars['Boolean']>,
  statusPerwakilan?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  waktuPernahKlien?: Maybe<Scalars['String']>,
  whyLbh?: Maybe<Scalars['String']>,
  tahap?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  wakilId?: Maybe<PersonUpdateOneWithoutApplicationsInput>,
  clients?: Maybe<ClientUpdateManyWithoutApplicationIdInput>,
};

export type ApplicationUpdateWithoutClientsDataInput = {
  createdBy?: Maybe<Scalars['String']>,
  dudukPerara?: Maybe<Scalars['String']>,
  infoLbh?: Maybe<Scalars['String']>,
  jumlahPenerimaManfaat?: Maybe<Scalars['Int']>,
  konfirmasiData?: Maybe<Scalars['Boolean']>,
  noReg?: Maybe<Scalars['String']>,
  pernahKlien?: Maybe<Scalars['String']>,
  pernahPpLain?: Maybe<Scalars['String']>,
  ppLain?: Maybe<Scalars['String']>,
  regDate?: Maybe<Scalars['DateTime']>,
  relasiWakilClient?: Maybe<Scalars['String']>,
  setujuAdvokasi?: Maybe<Scalars['Boolean']>,
  statusPerwakilan?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  waktuPernahKlien?: Maybe<Scalars['String']>,
  whyLbh?: Maybe<Scalars['String']>,
  tahap?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  wakilId?: Maybe<PersonUpdateOneWithoutApplicationsInput>,
  case?: Maybe<CaseUpdateOneWithoutApplicationInput>,
};

export type ApplicationUpdateWithoutWakilIdDataInput = {
  createdBy?: Maybe<Scalars['String']>,
  dudukPerara?: Maybe<Scalars['String']>,
  infoLbh?: Maybe<Scalars['String']>,
  jumlahPenerimaManfaat?: Maybe<Scalars['Int']>,
  konfirmasiData?: Maybe<Scalars['Boolean']>,
  noReg?: Maybe<Scalars['String']>,
  pernahKlien?: Maybe<Scalars['String']>,
  pernahPpLain?: Maybe<Scalars['String']>,
  ppLain?: Maybe<Scalars['String']>,
  regDate?: Maybe<Scalars['DateTime']>,
  relasiWakilClient?: Maybe<Scalars['String']>,
  setujuAdvokasi?: Maybe<Scalars['Boolean']>,
  statusPerwakilan?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  waktuPernahKlien?: Maybe<Scalars['String']>,
  whyLbh?: Maybe<Scalars['String']>,
  tahap?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  case?: Maybe<CaseUpdateOneWithoutApplicationInput>,
  clients?: Maybe<ClientUpdateManyWithoutApplicationIdInput>,
};

export type ApplicationUpdateWithWhereUniqueWithoutWakilIdInput = {
  where: ApplicationWhereUniqueInput,
  data: ApplicationUpdateWithoutWakilIdDataInput,
};

export type ApplicationUpsertNestedInput = {
  update: ApplicationUpdateDataInput,
  create: ApplicationCreateInput,
};

export type ApplicationUpsertWithoutCaseInput = {
  update: ApplicationUpdateWithoutCaseDataInput,
  create: ApplicationCreateWithoutCaseInput,
};

export type ApplicationUpsertWithoutClientsInput = {
  update: ApplicationUpdateWithoutClientsDataInput,
  create: ApplicationCreateWithoutClientsInput,
};

export type ApplicationUpsertWithWhereUniqueWithoutWakilIdInput = {
  where: ApplicationWhereUniqueInput,
  update: ApplicationUpdateWithoutWakilIdDataInput,
  create: ApplicationCreateWithoutWakilIdInput,
};

export type ApplicationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ApplicationWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ApplicationWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ApplicationWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  createdBy_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  createdBy_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  createdBy_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  createdBy_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  createdBy_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  createdBy_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  createdBy_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  createdBy_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  createdBy_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  createdBy_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  createdBy_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  createdBy_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  createdBy_not_ends_with?: Maybe<Scalars['String']>,
  dudukPerara?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  dudukPerara_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  dudukPerara_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  dudukPerara_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  dudukPerara_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  dudukPerara_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  dudukPerara_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  dudukPerara_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  dudukPerara_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  dudukPerara_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  dudukPerara_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  dudukPerara_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  dudukPerara_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  dudukPerara_not_ends_with?: Maybe<Scalars['String']>,
  infoLbh?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  infoLbh_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  infoLbh_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  infoLbh_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  infoLbh_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  infoLbh_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  infoLbh_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  infoLbh_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  infoLbh_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  infoLbh_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  infoLbh_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  infoLbh_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  infoLbh_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  infoLbh_not_ends_with?: Maybe<Scalars['String']>,
  jumlahPenerimaManfaat?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  jumlahPenerimaManfaat_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  jumlahPenerimaManfaat_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  jumlahPenerimaManfaat_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  jumlahPenerimaManfaat_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  jumlahPenerimaManfaat_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  jumlahPenerimaManfaat_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  jumlahPenerimaManfaat_gte?: Maybe<Scalars['Int']>,
  konfirmasiData?: Maybe<Scalars['Boolean']>,
  /** All values that are not equal to given value. */
  konfirmasiData_not?: Maybe<Scalars['Boolean']>,
  noReg?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  noReg_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  noReg_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  noReg_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  noReg_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  noReg_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  noReg_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  noReg_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  noReg_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  noReg_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  noReg_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  noReg_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  noReg_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  noReg_not_ends_with?: Maybe<Scalars['String']>,
  pernahKlien?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  pernahKlien_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  pernahKlien_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  pernahKlien_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  pernahKlien_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  pernahKlien_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  pernahKlien_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  pernahKlien_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  pernahKlien_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  pernahKlien_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  pernahKlien_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  pernahKlien_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  pernahKlien_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  pernahKlien_not_ends_with?: Maybe<Scalars['String']>,
  pernahPpLain?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  pernahPpLain_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  pernahPpLain_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  pernahPpLain_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  pernahPpLain_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  pernahPpLain_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  pernahPpLain_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  pernahPpLain_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  pernahPpLain_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  pernahPpLain_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  pernahPpLain_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  pernahPpLain_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  pernahPpLain_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  pernahPpLain_not_ends_with?: Maybe<Scalars['String']>,
  ppLain?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  ppLain_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  ppLain_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  ppLain_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  ppLain_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  ppLain_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  ppLain_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  ppLain_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  ppLain_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  ppLain_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  ppLain_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  ppLain_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  ppLain_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  ppLain_not_ends_with?: Maybe<Scalars['String']>,
  regDate?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  regDate_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  regDate_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  regDate_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  regDate_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  regDate_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  regDate_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  regDate_gte?: Maybe<Scalars['DateTime']>,
  relasiWakilClient?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  relasiWakilClient_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  relasiWakilClient_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  relasiWakilClient_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  relasiWakilClient_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  relasiWakilClient_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  relasiWakilClient_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  relasiWakilClient_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  relasiWakilClient_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  relasiWakilClient_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  relasiWakilClient_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  relasiWakilClient_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  relasiWakilClient_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  relasiWakilClient_not_ends_with?: Maybe<Scalars['String']>,
  setujuAdvokasi?: Maybe<Scalars['Boolean']>,
  /** All values that are not equal to given value. */
  setujuAdvokasi_not?: Maybe<Scalars['Boolean']>,
  statusPerwakilan?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  statusPerwakilan_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  statusPerwakilan_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  statusPerwakilan_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  statusPerwakilan_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  statusPerwakilan_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  statusPerwakilan_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  statusPerwakilan_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  statusPerwakilan_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  statusPerwakilan_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  statusPerwakilan_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  statusPerwakilan_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  statusPerwakilan_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  statusPerwakilan_not_ends_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  updatedBy_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  updatedBy_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  updatedBy_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  updatedBy_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  updatedBy_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  updatedBy_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  updatedBy_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  updatedBy_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  updatedBy_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  updatedBy_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  updatedBy_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  updatedBy_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  updatedBy_not_ends_with?: Maybe<Scalars['String']>,
  waktuPernahKlien?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  waktuPernahKlien_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  waktuPernahKlien_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  waktuPernahKlien_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  waktuPernahKlien_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  waktuPernahKlien_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  waktuPernahKlien_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  waktuPernahKlien_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  waktuPernahKlien_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  waktuPernahKlien_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  waktuPernahKlien_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  waktuPernahKlien_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  waktuPernahKlien_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  waktuPernahKlien_not_ends_with?: Maybe<Scalars['String']>,
  whyLbh?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  whyLbh_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  whyLbh_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  whyLbh_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  whyLbh_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  whyLbh_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  whyLbh_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  whyLbh_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  whyLbh_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  whyLbh_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  whyLbh_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  whyLbh_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  whyLbh_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  whyLbh_not_ends_with?: Maybe<Scalars['String']>,
  tahap?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  tahap_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  tahap_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  tahap_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  tahap_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  tahap_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  tahap_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  tahap_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  tahap_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  tahap_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  tahap_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  tahap_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  tahap_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  tahap_not_ends_with?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>,
  wakilId?: Maybe<PersonWhereInput>,
  case?: Maybe<CaseWhereInput>,
  clients_every?: Maybe<ClientWhereInput>,
  clients_some?: Maybe<ClientWhereInput>,
  clients_none?: Maybe<ClientWhereInput>,
};

export type ApplicationWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type BatchPayload = {
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'],
};

export type Case = {
  id: Scalars['Int'],
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed: Scalars['Boolean'],
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak: Scalars['Boolean'],
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk: Scalars['Boolean'],
  unlockTransfer: Scalars['Boolean'],
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
  application: Application,
  classifications?: Maybe<Array<CaseClassification>>,
  consultations?: Maybe<Array<CaseConsultation>>,
  documents?: Maybe<Array<CaseDocument>>,
  issues?: Maybe<Array<CaseIssue>>,
  korbans?: Maybe<Array<CaseKorban>>,
  pelakus?: Maybe<Array<CasePelaku>>,
  pk?: Maybe<CasePk>,
  progresses?: Maybe<CaseProgress>,
  activities?: Maybe<Array<CaseProgressActivity>>,
  transferreferrals?: Maybe<Array<CaseTransferReferral>>,
  violatedrights?: Maybe<Array<CaseViolatedRight>>,
  logRequests?: Maybe<Array<LogRequest>>,
  transfer?: Maybe<CaseTransfer>,
  referrals?: Maybe<Array<CaseReferral>>,
};


export type CaseClassificationsArgs = {
  where?: Maybe<CaseClassificationWhereInput>,
  orderBy?: Maybe<CaseClassificationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type CaseConsultationsArgs = {
  where?: Maybe<CaseConsultationWhereInput>,
  orderBy?: Maybe<CaseConsultationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type CaseDocumentsArgs = {
  where?: Maybe<CaseDocumentWhereInput>,
  orderBy?: Maybe<CaseDocumentOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type CaseIssuesArgs = {
  where?: Maybe<CaseIssueWhereInput>,
  orderBy?: Maybe<CaseIssueOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type CaseKorbansArgs = {
  where?: Maybe<CaseKorbanWhereInput>,
  orderBy?: Maybe<CaseKorbanOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type CasePelakusArgs = {
  where?: Maybe<CasePelakuWhereInput>,
  orderBy?: Maybe<CasePelakuOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type CaseActivitiesArgs = {
  where?: Maybe<CaseProgressActivityWhereInput>,
  orderBy?: Maybe<CaseProgressActivityOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type CaseTransferreferralsArgs = {
  where?: Maybe<CaseTransferReferralWhereInput>,
  orderBy?: Maybe<CaseTransferReferralOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type CaseViolatedrightsArgs = {
  where?: Maybe<CaseViolatedRightWhereInput>,
  orderBy?: Maybe<CaseViolatedRightOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type CaseLogRequestsArgs = {
  where?: Maybe<LogRequestWhereInput>,
  orderBy?: Maybe<LogRequestOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type CaseReferralsArgs = {
  where?: Maybe<CaseReferralWhereInput>,
  orderBy?: Maybe<CaseReferralOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type CaseClassification = {
  id: Scalars['Int'],
  caseId: Case,
  kodeMt?: Maybe<Scalars['String']>,
};

/** A connection to a list of items. */
export type CaseClassificationConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<CaseClassificationEdge>>,
  aggregate: AggregateCaseClassification,
};

export type CaseClassificationCreateInput = {
  kodeMt?: Maybe<Scalars['String']>,
  caseId: CaseCreateOneWithoutClassificationsInput,
};

export type CaseClassificationCreateManyWithoutCaseIdInput = {
  create?: Maybe<Array<CaseClassificationCreateWithoutCaseIdInput>>,
  connect?: Maybe<Array<CaseClassificationWhereUniqueInput>>,
};

export type CaseClassificationCreateWithoutCaseIdInput = {
  kodeMt?: Maybe<Scalars['String']>,
};

/** An edge in a connection. */
export type CaseClassificationEdge = {
  /** The item at the end of the edge. */
  node: CaseClassification,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum CaseClassificationOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  KodeMtAsc = 'kodeMt_ASC',
  KodeMtDesc = 'kodeMt_DESC'
}

export type CaseClassificationPreviousValues = {
  id: Scalars['Int'],
  kodeMt?: Maybe<Scalars['String']>,
};

export type CaseClassificationScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseClassificationScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseClassificationScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseClassificationScalarWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  kodeMt?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  kodeMt_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  kodeMt_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  kodeMt_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  kodeMt_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  kodeMt_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  kodeMt_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  kodeMt_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  kodeMt_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  kodeMt_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  kodeMt_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  kodeMt_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  kodeMt_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  kodeMt_not_ends_with?: Maybe<Scalars['String']>,
};

export type CaseClassificationSubscriptionPayload = {
  mutation: MutationType,
  node?: Maybe<CaseClassification>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<CaseClassificationPreviousValues>,
};

export type CaseClassificationSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseClassificationSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseClassificationSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseClassificationSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<CaseClassificationWhereInput>,
};

export type CaseClassificationUpdateInput = {
  kodeMt?: Maybe<Scalars['String']>,
  caseId?: Maybe<CaseUpdateOneRequiredWithoutClassificationsInput>,
};

export type CaseClassificationUpdateManyDataInput = {
  kodeMt?: Maybe<Scalars['String']>,
};

export type CaseClassificationUpdateManyMutationInput = {
  kodeMt?: Maybe<Scalars['String']>,
};

export type CaseClassificationUpdateManyWithoutCaseIdInput = {
  create?: Maybe<Array<CaseClassificationCreateWithoutCaseIdInput>>,
  connect?: Maybe<Array<CaseClassificationWhereUniqueInput>>,
  set?: Maybe<Array<CaseClassificationWhereUniqueInput>>,
  disconnect?: Maybe<Array<CaseClassificationWhereUniqueInput>>,
  delete?: Maybe<Array<CaseClassificationWhereUniqueInput>>,
  update?: Maybe<Array<CaseClassificationUpdateWithWhereUniqueWithoutCaseIdInput>>,
  updateMany?: Maybe<Array<CaseClassificationUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<CaseClassificationScalarWhereInput>>,
  upsert?: Maybe<Array<CaseClassificationUpsertWithWhereUniqueWithoutCaseIdInput>>,
};

export type CaseClassificationUpdateManyWithWhereNestedInput = {
  where: CaseClassificationScalarWhereInput,
  data: CaseClassificationUpdateManyDataInput,
};

export type CaseClassificationUpdateWithoutCaseIdDataInput = {
  kodeMt?: Maybe<Scalars['String']>,
};

export type CaseClassificationUpdateWithWhereUniqueWithoutCaseIdInput = {
  where: CaseClassificationWhereUniqueInput,
  data: CaseClassificationUpdateWithoutCaseIdDataInput,
};

export type CaseClassificationUpsertWithWhereUniqueWithoutCaseIdInput = {
  where: CaseClassificationWhereUniqueInput,
  update: CaseClassificationUpdateWithoutCaseIdDataInput,
  create: CaseClassificationCreateWithoutCaseIdInput,
};

export type CaseClassificationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseClassificationWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseClassificationWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseClassificationWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  kodeMt?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  kodeMt_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  kodeMt_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  kodeMt_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  kodeMt_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  kodeMt_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  kodeMt_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  kodeMt_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  kodeMt_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  kodeMt_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  kodeMt_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  kodeMt_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  kodeMt_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  kodeMt_not_ends_with?: Maybe<Scalars['String']>,
  caseId?: Maybe<CaseWhereInput>,
};

export type CaseClassificationWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

/** A connection to a list of items. */
export type CaseConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<CaseEdge>>,
  aggregate: AggregateCase,
};

export type CaseConsultation = {
  id: Scalars['Int'],
  appKonsul?: Maybe<Scalars['String']>,
  caseId: Case,
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  isiKonsul?: Maybe<Scalars['String']>,
  harapan?: Maybe<Scalars['String']>,
  saranHukum?: Maybe<Scalars['String']>,
  rencanaTindakLanjut?: Maybe<Scalars['String']>,
  judulAktifitas?: Maybe<Scalars['String']>,
  ppKonsul?: Maybe<Scalars['String']>,
  tglKonsul?: Maybe<Scalars['DateTime']>,
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
  apps?: Maybe<Array<CaseConsultationApp>>,
};


export type CaseConsultationAppsArgs = {
  where?: Maybe<CaseConsultationAppWhereInput>,
  orderBy?: Maybe<CaseConsultationAppOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type CaseConsultationApp = {
  id: Scalars['Int'],
  appConsultation?: Maybe<User>,
  caseConsultationId: CaseConsultation,
};

/** A connection to a list of items. */
export type CaseConsultationAppConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<CaseConsultationAppEdge>>,
  aggregate: AggregateCaseConsultationApp,
};

export type CaseConsultationAppCreateInput = {
  appConsultation?: Maybe<UserCreateOneInput>,
  caseConsultationId: CaseConsultationCreateOneWithoutAppsInput,
};

export type CaseConsultationAppCreateManyWithoutCaseConsultationIdInput = {
  create?: Maybe<Array<CaseConsultationAppCreateWithoutCaseConsultationIdInput>>,
  connect?: Maybe<Array<CaseConsultationAppWhereUniqueInput>>,
};

export type CaseConsultationAppCreateWithoutCaseConsultationIdInput = {
  appConsultation?: Maybe<UserCreateOneInput>,
};

/** An edge in a connection. */
export type CaseConsultationAppEdge = {
  /** The item at the end of the edge. */
  node: CaseConsultationApp,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum CaseConsultationAppOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type CaseConsultationAppPreviousValues = {
  id: Scalars['Int'],
};

export type CaseConsultationAppScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseConsultationAppScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseConsultationAppScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseConsultationAppScalarWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
};

export type CaseConsultationAppSubscriptionPayload = {
  mutation: MutationType,
  node?: Maybe<CaseConsultationApp>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<CaseConsultationAppPreviousValues>,
};

export type CaseConsultationAppSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseConsultationAppSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseConsultationAppSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseConsultationAppSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<CaseConsultationAppWhereInput>,
};

export type CaseConsultationAppUpdateInput = {
  appConsultation?: Maybe<UserUpdateOneInput>,
  caseConsultationId?: Maybe<CaseConsultationUpdateOneRequiredWithoutAppsInput>,
};

export type CaseConsultationAppUpdateManyWithoutCaseConsultationIdInput = {
  create?: Maybe<Array<CaseConsultationAppCreateWithoutCaseConsultationIdInput>>,
  connect?: Maybe<Array<CaseConsultationAppWhereUniqueInput>>,
  set?: Maybe<Array<CaseConsultationAppWhereUniqueInput>>,
  disconnect?: Maybe<Array<CaseConsultationAppWhereUniqueInput>>,
  delete?: Maybe<Array<CaseConsultationAppWhereUniqueInput>>,
  update?: Maybe<Array<CaseConsultationAppUpdateWithWhereUniqueWithoutCaseConsultationIdInput>>,
  deleteMany?: Maybe<Array<CaseConsultationAppScalarWhereInput>>,
  upsert?: Maybe<Array<CaseConsultationAppUpsertWithWhereUniqueWithoutCaseConsultationIdInput>>,
};

export type CaseConsultationAppUpdateWithoutCaseConsultationIdDataInput = {
  appConsultation?: Maybe<UserUpdateOneInput>,
};

export type CaseConsultationAppUpdateWithWhereUniqueWithoutCaseConsultationIdInput = {
  where: CaseConsultationAppWhereUniqueInput,
  data: CaseConsultationAppUpdateWithoutCaseConsultationIdDataInput,
};

export type CaseConsultationAppUpsertWithWhereUniqueWithoutCaseConsultationIdInput = {
  where: CaseConsultationAppWhereUniqueInput,
  update: CaseConsultationAppUpdateWithoutCaseConsultationIdDataInput,
  create: CaseConsultationAppCreateWithoutCaseConsultationIdInput,
};

export type CaseConsultationAppWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseConsultationAppWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseConsultationAppWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseConsultationAppWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  appConsultation?: Maybe<UserWhereInput>,
  caseConsultationId?: Maybe<CaseConsultationWhereInput>,
};

export type CaseConsultationAppWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

/** A connection to a list of items. */
export type CaseConsultationConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<CaseConsultationEdge>>,
  aggregate: AggregateCaseConsultation,
};

export type CaseConsultationCreateInput = {
  appKonsul?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  isiKonsul?: Maybe<Scalars['String']>,
  harapan?: Maybe<Scalars['String']>,
  saranHukum?: Maybe<Scalars['String']>,
  rencanaTindakLanjut?: Maybe<Scalars['String']>,
  judulAktifitas?: Maybe<Scalars['String']>,
  ppKonsul?: Maybe<Scalars['String']>,
  tglKonsul?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  caseId: CaseCreateOneWithoutConsultationsInput,
  apps?: Maybe<CaseConsultationAppCreateManyWithoutCaseConsultationIdInput>,
};

export type CaseConsultationCreateManyWithoutCaseIdInput = {
  create?: Maybe<Array<CaseConsultationCreateWithoutCaseIdInput>>,
  connect?: Maybe<Array<CaseConsultationWhereUniqueInput>>,
};

export type CaseConsultationCreateOneWithoutAppsInput = {
  create?: Maybe<CaseConsultationCreateWithoutAppsInput>,
  connect?: Maybe<CaseConsultationWhereUniqueInput>,
};

export type CaseConsultationCreateWithoutAppsInput = {
  appKonsul?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  isiKonsul?: Maybe<Scalars['String']>,
  harapan?: Maybe<Scalars['String']>,
  saranHukum?: Maybe<Scalars['String']>,
  rencanaTindakLanjut?: Maybe<Scalars['String']>,
  judulAktifitas?: Maybe<Scalars['String']>,
  ppKonsul?: Maybe<Scalars['String']>,
  tglKonsul?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  caseId: CaseCreateOneWithoutConsultationsInput,
};

export type CaseConsultationCreateWithoutCaseIdInput = {
  appKonsul?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  isiKonsul?: Maybe<Scalars['String']>,
  harapan?: Maybe<Scalars['String']>,
  saranHukum?: Maybe<Scalars['String']>,
  rencanaTindakLanjut?: Maybe<Scalars['String']>,
  judulAktifitas?: Maybe<Scalars['String']>,
  ppKonsul?: Maybe<Scalars['String']>,
  tglKonsul?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  apps?: Maybe<CaseConsultationAppCreateManyWithoutCaseConsultationIdInput>,
};

/** An edge in a connection. */
export type CaseConsultationEdge = {
  /** The item at the end of the edge. */
  node: CaseConsultation,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum CaseConsultationOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  AppKonsulAsc = 'appKonsul_ASC',
  AppKonsulDesc = 'appKonsul_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  IsiKonsulAsc = 'isiKonsul_ASC',
  IsiKonsulDesc = 'isiKonsul_DESC',
  HarapanAsc = 'harapan_ASC',
  HarapanDesc = 'harapan_DESC',
  SaranHukumAsc = 'saranHukum_ASC',
  SaranHukumDesc = 'saranHukum_DESC',
  RencanaTindakLanjutAsc = 'rencanaTindakLanjut_ASC',
  RencanaTindakLanjutDesc = 'rencanaTindakLanjut_DESC',
  JudulAktifitasAsc = 'judulAktifitas_ASC',
  JudulAktifitasDesc = 'judulAktifitas_DESC',
  PpKonsulAsc = 'ppKonsul_ASC',
  PpKonsulDesc = 'ppKonsul_DESC',
  TglKonsulAsc = 'tglKonsul_ASC',
  TglKonsulDesc = 'tglKonsul_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC'
}

export type CaseConsultationPreviousValues = {
  id: Scalars['Int'],
  appKonsul?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  isiKonsul?: Maybe<Scalars['String']>,
  harapan?: Maybe<Scalars['String']>,
  saranHukum?: Maybe<Scalars['String']>,
  rencanaTindakLanjut?: Maybe<Scalars['String']>,
  judulAktifitas?: Maybe<Scalars['String']>,
  ppKonsul?: Maybe<Scalars['String']>,
  tglKonsul?: Maybe<Scalars['DateTime']>,
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
};

export type CaseConsultationScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseConsultationScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseConsultationScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseConsultationScalarWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  appKonsul?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  appKonsul_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  appKonsul_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  appKonsul_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  appKonsul_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  appKonsul_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  appKonsul_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  appKonsul_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  appKonsul_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  appKonsul_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  appKonsul_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  appKonsul_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  appKonsul_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  appKonsul_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  createdBy_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  createdBy_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  createdBy_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  createdBy_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  createdBy_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  createdBy_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  createdBy_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  createdBy_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  createdBy_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  createdBy_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  createdBy_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  createdBy_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  createdBy_not_ends_with?: Maybe<Scalars['String']>,
  isiKonsul?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  isiKonsul_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  isiKonsul_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  isiKonsul_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  isiKonsul_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  isiKonsul_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  isiKonsul_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  isiKonsul_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  isiKonsul_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  isiKonsul_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  isiKonsul_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  isiKonsul_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  isiKonsul_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  isiKonsul_not_ends_with?: Maybe<Scalars['String']>,
  harapan?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  harapan_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  harapan_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  harapan_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  harapan_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  harapan_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  harapan_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  harapan_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  harapan_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  harapan_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  harapan_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  harapan_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  harapan_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  harapan_not_ends_with?: Maybe<Scalars['String']>,
  saranHukum?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  saranHukum_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  saranHukum_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  saranHukum_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  saranHukum_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  saranHukum_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  saranHukum_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  saranHukum_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  saranHukum_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  saranHukum_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  saranHukum_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  saranHukum_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  saranHukum_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  saranHukum_not_ends_with?: Maybe<Scalars['String']>,
  rencanaTindakLanjut?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  rencanaTindakLanjut_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  rencanaTindakLanjut_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  rencanaTindakLanjut_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  rencanaTindakLanjut_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  rencanaTindakLanjut_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  rencanaTindakLanjut_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  rencanaTindakLanjut_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  rencanaTindakLanjut_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  rencanaTindakLanjut_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  rencanaTindakLanjut_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  rencanaTindakLanjut_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  rencanaTindakLanjut_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  rencanaTindakLanjut_not_ends_with?: Maybe<Scalars['String']>,
  judulAktifitas?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  judulAktifitas_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  judulAktifitas_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  judulAktifitas_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  judulAktifitas_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  judulAktifitas_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  judulAktifitas_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  judulAktifitas_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  judulAktifitas_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  judulAktifitas_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  judulAktifitas_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  judulAktifitas_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  judulAktifitas_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  judulAktifitas_not_ends_with?: Maybe<Scalars['String']>,
  ppKonsul?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  ppKonsul_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  ppKonsul_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  ppKonsul_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  ppKonsul_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  ppKonsul_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  ppKonsul_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  ppKonsul_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  ppKonsul_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  ppKonsul_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  ppKonsul_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  ppKonsul_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  ppKonsul_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  ppKonsul_not_ends_with?: Maybe<Scalars['String']>,
  tglKonsul?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  tglKonsul_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  tglKonsul_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  tglKonsul_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  tglKonsul_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  tglKonsul_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  tglKonsul_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  tglKonsul_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  updatedBy_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  updatedBy_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  updatedBy_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  updatedBy_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  updatedBy_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  updatedBy_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  updatedBy_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  updatedBy_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  updatedBy_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  updatedBy_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  updatedBy_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  updatedBy_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  updatedBy_not_ends_with?: Maybe<Scalars['String']>,
};

export type CaseConsultationSubscriptionPayload = {
  mutation: MutationType,
  node?: Maybe<CaseConsultation>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<CaseConsultationPreviousValues>,
};

export type CaseConsultationSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseConsultationSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseConsultationSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseConsultationSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<CaseConsultationWhereInput>,
};

export type CaseConsultationUpdateInput = {
  appKonsul?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  isiKonsul?: Maybe<Scalars['String']>,
  harapan?: Maybe<Scalars['String']>,
  saranHukum?: Maybe<Scalars['String']>,
  rencanaTindakLanjut?: Maybe<Scalars['String']>,
  judulAktifitas?: Maybe<Scalars['String']>,
  ppKonsul?: Maybe<Scalars['String']>,
  tglKonsul?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  caseId?: Maybe<CaseUpdateOneRequiredWithoutConsultationsInput>,
  apps?: Maybe<CaseConsultationAppUpdateManyWithoutCaseConsultationIdInput>,
};

export type CaseConsultationUpdateManyDataInput = {
  appKonsul?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  isiKonsul?: Maybe<Scalars['String']>,
  harapan?: Maybe<Scalars['String']>,
  saranHukum?: Maybe<Scalars['String']>,
  rencanaTindakLanjut?: Maybe<Scalars['String']>,
  judulAktifitas?: Maybe<Scalars['String']>,
  ppKonsul?: Maybe<Scalars['String']>,
  tglKonsul?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
};

export type CaseConsultationUpdateManyMutationInput = {
  appKonsul?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  isiKonsul?: Maybe<Scalars['String']>,
  harapan?: Maybe<Scalars['String']>,
  saranHukum?: Maybe<Scalars['String']>,
  rencanaTindakLanjut?: Maybe<Scalars['String']>,
  judulAktifitas?: Maybe<Scalars['String']>,
  ppKonsul?: Maybe<Scalars['String']>,
  tglKonsul?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
};

export type CaseConsultationUpdateManyWithoutCaseIdInput = {
  create?: Maybe<Array<CaseConsultationCreateWithoutCaseIdInput>>,
  connect?: Maybe<Array<CaseConsultationWhereUniqueInput>>,
  set?: Maybe<Array<CaseConsultationWhereUniqueInput>>,
  disconnect?: Maybe<Array<CaseConsultationWhereUniqueInput>>,
  delete?: Maybe<Array<CaseConsultationWhereUniqueInput>>,
  update?: Maybe<Array<CaseConsultationUpdateWithWhereUniqueWithoutCaseIdInput>>,
  updateMany?: Maybe<Array<CaseConsultationUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<CaseConsultationScalarWhereInput>>,
  upsert?: Maybe<Array<CaseConsultationUpsertWithWhereUniqueWithoutCaseIdInput>>,
};

export type CaseConsultationUpdateManyWithWhereNestedInput = {
  where: CaseConsultationScalarWhereInput,
  data: CaseConsultationUpdateManyDataInput,
};

export type CaseConsultationUpdateOneRequiredWithoutAppsInput = {
  create?: Maybe<CaseConsultationCreateWithoutAppsInput>,
  connect?: Maybe<CaseConsultationWhereUniqueInput>,
  update?: Maybe<CaseConsultationUpdateWithoutAppsDataInput>,
  upsert?: Maybe<CaseConsultationUpsertWithoutAppsInput>,
};

export type CaseConsultationUpdateWithoutAppsDataInput = {
  appKonsul?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  isiKonsul?: Maybe<Scalars['String']>,
  harapan?: Maybe<Scalars['String']>,
  saranHukum?: Maybe<Scalars['String']>,
  rencanaTindakLanjut?: Maybe<Scalars['String']>,
  judulAktifitas?: Maybe<Scalars['String']>,
  ppKonsul?: Maybe<Scalars['String']>,
  tglKonsul?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  caseId?: Maybe<CaseUpdateOneRequiredWithoutConsultationsInput>,
};

export type CaseConsultationUpdateWithoutCaseIdDataInput = {
  appKonsul?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  isiKonsul?: Maybe<Scalars['String']>,
  harapan?: Maybe<Scalars['String']>,
  saranHukum?: Maybe<Scalars['String']>,
  rencanaTindakLanjut?: Maybe<Scalars['String']>,
  judulAktifitas?: Maybe<Scalars['String']>,
  ppKonsul?: Maybe<Scalars['String']>,
  tglKonsul?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  apps?: Maybe<CaseConsultationAppUpdateManyWithoutCaseConsultationIdInput>,
};

export type CaseConsultationUpdateWithWhereUniqueWithoutCaseIdInput = {
  where: CaseConsultationWhereUniqueInput,
  data: CaseConsultationUpdateWithoutCaseIdDataInput,
};

export type CaseConsultationUpsertWithoutAppsInput = {
  update: CaseConsultationUpdateWithoutAppsDataInput,
  create: CaseConsultationCreateWithoutAppsInput,
};

export type CaseConsultationUpsertWithWhereUniqueWithoutCaseIdInput = {
  where: CaseConsultationWhereUniqueInput,
  update: CaseConsultationUpdateWithoutCaseIdDataInput,
  create: CaseConsultationCreateWithoutCaseIdInput,
};

export type CaseConsultationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseConsultationWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseConsultationWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseConsultationWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  appKonsul?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  appKonsul_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  appKonsul_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  appKonsul_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  appKonsul_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  appKonsul_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  appKonsul_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  appKonsul_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  appKonsul_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  appKonsul_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  appKonsul_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  appKonsul_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  appKonsul_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  appKonsul_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  createdBy_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  createdBy_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  createdBy_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  createdBy_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  createdBy_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  createdBy_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  createdBy_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  createdBy_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  createdBy_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  createdBy_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  createdBy_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  createdBy_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  createdBy_not_ends_with?: Maybe<Scalars['String']>,
  isiKonsul?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  isiKonsul_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  isiKonsul_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  isiKonsul_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  isiKonsul_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  isiKonsul_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  isiKonsul_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  isiKonsul_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  isiKonsul_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  isiKonsul_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  isiKonsul_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  isiKonsul_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  isiKonsul_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  isiKonsul_not_ends_with?: Maybe<Scalars['String']>,
  harapan?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  harapan_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  harapan_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  harapan_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  harapan_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  harapan_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  harapan_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  harapan_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  harapan_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  harapan_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  harapan_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  harapan_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  harapan_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  harapan_not_ends_with?: Maybe<Scalars['String']>,
  saranHukum?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  saranHukum_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  saranHukum_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  saranHukum_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  saranHukum_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  saranHukum_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  saranHukum_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  saranHukum_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  saranHukum_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  saranHukum_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  saranHukum_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  saranHukum_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  saranHukum_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  saranHukum_not_ends_with?: Maybe<Scalars['String']>,
  rencanaTindakLanjut?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  rencanaTindakLanjut_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  rencanaTindakLanjut_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  rencanaTindakLanjut_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  rencanaTindakLanjut_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  rencanaTindakLanjut_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  rencanaTindakLanjut_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  rencanaTindakLanjut_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  rencanaTindakLanjut_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  rencanaTindakLanjut_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  rencanaTindakLanjut_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  rencanaTindakLanjut_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  rencanaTindakLanjut_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  rencanaTindakLanjut_not_ends_with?: Maybe<Scalars['String']>,
  judulAktifitas?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  judulAktifitas_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  judulAktifitas_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  judulAktifitas_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  judulAktifitas_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  judulAktifitas_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  judulAktifitas_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  judulAktifitas_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  judulAktifitas_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  judulAktifitas_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  judulAktifitas_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  judulAktifitas_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  judulAktifitas_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  judulAktifitas_not_ends_with?: Maybe<Scalars['String']>,
  ppKonsul?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  ppKonsul_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  ppKonsul_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  ppKonsul_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  ppKonsul_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  ppKonsul_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  ppKonsul_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  ppKonsul_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  ppKonsul_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  ppKonsul_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  ppKonsul_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  ppKonsul_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  ppKonsul_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  ppKonsul_not_ends_with?: Maybe<Scalars['String']>,
  tglKonsul?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  tglKonsul_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  tglKonsul_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  tglKonsul_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  tglKonsul_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  tglKonsul_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  tglKonsul_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  tglKonsul_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  updatedBy_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  updatedBy_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  updatedBy_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  updatedBy_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  updatedBy_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  updatedBy_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  updatedBy_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  updatedBy_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  updatedBy_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  updatedBy_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  updatedBy_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  updatedBy_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  updatedBy_not_ends_with?: Maybe<Scalars['String']>,
  caseId?: Maybe<CaseWhereInput>,
  apps_every?: Maybe<CaseConsultationAppWhereInput>,
  apps_some?: Maybe<CaseConsultationAppWhereInput>,
  apps_none?: Maybe<CaseConsultationAppWhereInput>,
};

export type CaseConsultationWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type CaseCreateInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed: Scalars['Boolean'],
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak: Scalars['Boolean'],
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk: Scalars['Boolean'],
  unlockTransfer: Scalars['Boolean'],
  updatedBy?: Maybe<Scalars['String']>,
  application: ApplicationCreateOneWithoutCaseInput,
  classifications?: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>,
  issues?: Maybe<CaseIssueCreateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuCreateManyWithoutCaseIdInput>,
  pk?: Maybe<CasePkCreateOneWithoutCaseIdInput>,
  progresses?: Maybe<CaseProgressCreateOneWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestCreateManyWithoutCaseIdInput>,
  transfer?: Maybe<CaseTransferCreateOneWithoutCaseIdInput>,
  referrals?: Maybe<CaseReferralCreateManyWithoutCaseIdInput>,
};

export type CaseCreateOneWithoutActivitiesInput = {
  create?: Maybe<CaseCreateWithoutActivitiesInput>,
  connect?: Maybe<CaseWhereUniqueInput>,
};

export type CaseCreateOneWithoutApplicationInput = {
  create?: Maybe<CaseCreateWithoutApplicationInput>,
  connect?: Maybe<CaseWhereUniqueInput>,
};

export type CaseCreateOneWithoutClassificationsInput = {
  create?: Maybe<CaseCreateWithoutClassificationsInput>,
  connect?: Maybe<CaseWhereUniqueInput>,
};

export type CaseCreateOneWithoutConsultationsInput = {
  create?: Maybe<CaseCreateWithoutConsultationsInput>,
  connect?: Maybe<CaseWhereUniqueInput>,
};

export type CaseCreateOneWithoutDocumentsInput = {
  create?: Maybe<CaseCreateWithoutDocumentsInput>,
  connect?: Maybe<CaseWhereUniqueInput>,
};

export type CaseCreateOneWithoutIssuesInput = {
  create?: Maybe<CaseCreateWithoutIssuesInput>,
  connect?: Maybe<CaseWhereUniqueInput>,
};

export type CaseCreateOneWithoutKorbansInput = {
  create?: Maybe<CaseCreateWithoutKorbansInput>,
  connect?: Maybe<CaseWhereUniqueInput>,
};

export type CaseCreateOneWithoutLogRequestsInput = {
  create?: Maybe<CaseCreateWithoutLogRequestsInput>,
  connect?: Maybe<CaseWhereUniqueInput>,
};

export type CaseCreateOneWithoutPelakusInput = {
  create?: Maybe<CaseCreateWithoutPelakusInput>,
  connect?: Maybe<CaseWhereUniqueInput>,
};

export type CaseCreateOneWithoutPkInput = {
  create?: Maybe<CaseCreateWithoutPkInput>,
  connect?: Maybe<CaseWhereUniqueInput>,
};

export type CaseCreateOneWithoutProgressesInput = {
  create?: Maybe<CaseCreateWithoutProgressesInput>,
  connect?: Maybe<CaseWhereUniqueInput>,
};

export type CaseCreateOneWithoutReferralsInput = {
  create?: Maybe<CaseCreateWithoutReferralsInput>,
  connect?: Maybe<CaseWhereUniqueInput>,
};

export type CaseCreateOneWithoutTransferInput = {
  create?: Maybe<CaseCreateWithoutTransferInput>,
  connect?: Maybe<CaseWhereUniqueInput>,
};

export type CaseCreateOneWithoutTransferreferralsInput = {
  create?: Maybe<CaseCreateWithoutTransferreferralsInput>,
  connect?: Maybe<CaseWhereUniqueInput>,
};

export type CaseCreateOneWithoutViolatedrightsInput = {
  create?: Maybe<CaseCreateWithoutViolatedrightsInput>,
  connect?: Maybe<CaseWhereUniqueInput>,
};

export type CaseCreateWithoutActivitiesInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed: Scalars['Boolean'],
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak: Scalars['Boolean'],
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk: Scalars['Boolean'],
  unlockTransfer: Scalars['Boolean'],
  updatedBy?: Maybe<Scalars['String']>,
  application: ApplicationCreateOneWithoutCaseInput,
  classifications?: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>,
  issues?: Maybe<CaseIssueCreateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuCreateManyWithoutCaseIdInput>,
  pk?: Maybe<CasePkCreateOneWithoutCaseIdInput>,
  progresses?: Maybe<CaseProgressCreateOneWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestCreateManyWithoutCaseIdInput>,
  transfer?: Maybe<CaseTransferCreateOneWithoutCaseIdInput>,
  referrals?: Maybe<CaseReferralCreateManyWithoutCaseIdInput>,
};

export type CaseCreateWithoutApplicationInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed: Scalars['Boolean'],
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak: Scalars['Boolean'],
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk: Scalars['Boolean'],
  unlockTransfer: Scalars['Boolean'],
  updatedBy?: Maybe<Scalars['String']>,
  classifications?: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>,
  issues?: Maybe<CaseIssueCreateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuCreateManyWithoutCaseIdInput>,
  pk?: Maybe<CasePkCreateOneWithoutCaseIdInput>,
  progresses?: Maybe<CaseProgressCreateOneWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestCreateManyWithoutCaseIdInput>,
  transfer?: Maybe<CaseTransferCreateOneWithoutCaseIdInput>,
  referrals?: Maybe<CaseReferralCreateManyWithoutCaseIdInput>,
};

export type CaseCreateWithoutClassificationsInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed: Scalars['Boolean'],
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak: Scalars['Boolean'],
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk: Scalars['Boolean'],
  unlockTransfer: Scalars['Boolean'],
  updatedBy?: Maybe<Scalars['String']>,
  application: ApplicationCreateOneWithoutCaseInput,
  consultations?: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>,
  issues?: Maybe<CaseIssueCreateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuCreateManyWithoutCaseIdInput>,
  pk?: Maybe<CasePkCreateOneWithoutCaseIdInput>,
  progresses?: Maybe<CaseProgressCreateOneWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestCreateManyWithoutCaseIdInput>,
  transfer?: Maybe<CaseTransferCreateOneWithoutCaseIdInput>,
  referrals?: Maybe<CaseReferralCreateManyWithoutCaseIdInput>,
};

export type CaseCreateWithoutConsultationsInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed: Scalars['Boolean'],
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak: Scalars['Boolean'],
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk: Scalars['Boolean'],
  unlockTransfer: Scalars['Boolean'],
  updatedBy?: Maybe<Scalars['String']>,
  application: ApplicationCreateOneWithoutCaseInput,
  classifications?: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>,
  issues?: Maybe<CaseIssueCreateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuCreateManyWithoutCaseIdInput>,
  pk?: Maybe<CasePkCreateOneWithoutCaseIdInput>,
  progresses?: Maybe<CaseProgressCreateOneWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestCreateManyWithoutCaseIdInput>,
  transfer?: Maybe<CaseTransferCreateOneWithoutCaseIdInput>,
  referrals?: Maybe<CaseReferralCreateManyWithoutCaseIdInput>,
};

export type CaseCreateWithoutDocumentsInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed: Scalars['Boolean'],
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak: Scalars['Boolean'],
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk: Scalars['Boolean'],
  unlockTransfer: Scalars['Boolean'],
  updatedBy?: Maybe<Scalars['String']>,
  application: ApplicationCreateOneWithoutCaseInput,
  classifications?: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>,
  issues?: Maybe<CaseIssueCreateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuCreateManyWithoutCaseIdInput>,
  pk?: Maybe<CasePkCreateOneWithoutCaseIdInput>,
  progresses?: Maybe<CaseProgressCreateOneWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestCreateManyWithoutCaseIdInput>,
  transfer?: Maybe<CaseTransferCreateOneWithoutCaseIdInput>,
  referrals?: Maybe<CaseReferralCreateManyWithoutCaseIdInput>,
};

export type CaseCreateWithoutIssuesInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed: Scalars['Boolean'],
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak: Scalars['Boolean'],
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk: Scalars['Boolean'],
  unlockTransfer: Scalars['Boolean'],
  updatedBy?: Maybe<Scalars['String']>,
  application: ApplicationCreateOneWithoutCaseInput,
  classifications?: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuCreateManyWithoutCaseIdInput>,
  pk?: Maybe<CasePkCreateOneWithoutCaseIdInput>,
  progresses?: Maybe<CaseProgressCreateOneWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestCreateManyWithoutCaseIdInput>,
  transfer?: Maybe<CaseTransferCreateOneWithoutCaseIdInput>,
  referrals?: Maybe<CaseReferralCreateManyWithoutCaseIdInput>,
};

export type CaseCreateWithoutKorbansInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed: Scalars['Boolean'],
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak: Scalars['Boolean'],
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk: Scalars['Boolean'],
  unlockTransfer: Scalars['Boolean'],
  updatedBy?: Maybe<Scalars['String']>,
  application: ApplicationCreateOneWithoutCaseInput,
  classifications?: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>,
  issues?: Maybe<CaseIssueCreateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuCreateManyWithoutCaseIdInput>,
  pk?: Maybe<CasePkCreateOneWithoutCaseIdInput>,
  progresses?: Maybe<CaseProgressCreateOneWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestCreateManyWithoutCaseIdInput>,
  transfer?: Maybe<CaseTransferCreateOneWithoutCaseIdInput>,
  referrals?: Maybe<CaseReferralCreateManyWithoutCaseIdInput>,
};

export type CaseCreateWithoutLogRequestsInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed: Scalars['Boolean'],
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak: Scalars['Boolean'],
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk: Scalars['Boolean'],
  unlockTransfer: Scalars['Boolean'],
  updatedBy?: Maybe<Scalars['String']>,
  application: ApplicationCreateOneWithoutCaseInput,
  classifications?: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>,
  issues?: Maybe<CaseIssueCreateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuCreateManyWithoutCaseIdInput>,
  pk?: Maybe<CasePkCreateOneWithoutCaseIdInput>,
  progresses?: Maybe<CaseProgressCreateOneWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>,
  transfer?: Maybe<CaseTransferCreateOneWithoutCaseIdInput>,
  referrals?: Maybe<CaseReferralCreateManyWithoutCaseIdInput>,
};

export type CaseCreateWithoutPelakusInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed: Scalars['Boolean'],
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak: Scalars['Boolean'],
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk: Scalars['Boolean'],
  unlockTransfer: Scalars['Boolean'],
  updatedBy?: Maybe<Scalars['String']>,
  application: ApplicationCreateOneWithoutCaseInput,
  classifications?: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>,
  issues?: Maybe<CaseIssueCreateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>,
  pk?: Maybe<CasePkCreateOneWithoutCaseIdInput>,
  progresses?: Maybe<CaseProgressCreateOneWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestCreateManyWithoutCaseIdInput>,
  transfer?: Maybe<CaseTransferCreateOneWithoutCaseIdInput>,
  referrals?: Maybe<CaseReferralCreateManyWithoutCaseIdInput>,
};

export type CaseCreateWithoutPkInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed: Scalars['Boolean'],
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak: Scalars['Boolean'],
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk: Scalars['Boolean'],
  unlockTransfer: Scalars['Boolean'],
  updatedBy?: Maybe<Scalars['String']>,
  application: ApplicationCreateOneWithoutCaseInput,
  classifications?: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>,
  issues?: Maybe<CaseIssueCreateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuCreateManyWithoutCaseIdInput>,
  progresses?: Maybe<CaseProgressCreateOneWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestCreateManyWithoutCaseIdInput>,
  transfer?: Maybe<CaseTransferCreateOneWithoutCaseIdInput>,
  referrals?: Maybe<CaseReferralCreateManyWithoutCaseIdInput>,
};

export type CaseCreateWithoutProgressesInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed: Scalars['Boolean'],
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak: Scalars['Boolean'],
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk: Scalars['Boolean'],
  unlockTransfer: Scalars['Boolean'],
  updatedBy?: Maybe<Scalars['String']>,
  application: ApplicationCreateOneWithoutCaseInput,
  classifications?: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>,
  issues?: Maybe<CaseIssueCreateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuCreateManyWithoutCaseIdInput>,
  pk?: Maybe<CasePkCreateOneWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestCreateManyWithoutCaseIdInput>,
  transfer?: Maybe<CaseTransferCreateOneWithoutCaseIdInput>,
  referrals?: Maybe<CaseReferralCreateManyWithoutCaseIdInput>,
};

export type CaseCreateWithoutReferralsInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed: Scalars['Boolean'],
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak: Scalars['Boolean'],
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk: Scalars['Boolean'],
  unlockTransfer: Scalars['Boolean'],
  updatedBy?: Maybe<Scalars['String']>,
  application: ApplicationCreateOneWithoutCaseInput,
  classifications?: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>,
  issues?: Maybe<CaseIssueCreateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuCreateManyWithoutCaseIdInput>,
  pk?: Maybe<CasePkCreateOneWithoutCaseIdInput>,
  progresses?: Maybe<CaseProgressCreateOneWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestCreateManyWithoutCaseIdInput>,
  transfer?: Maybe<CaseTransferCreateOneWithoutCaseIdInput>,
};

export type CaseCreateWithoutTransferInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed: Scalars['Boolean'],
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak: Scalars['Boolean'],
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk: Scalars['Boolean'],
  unlockTransfer: Scalars['Boolean'],
  updatedBy?: Maybe<Scalars['String']>,
  application: ApplicationCreateOneWithoutCaseInput,
  classifications?: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>,
  issues?: Maybe<CaseIssueCreateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuCreateManyWithoutCaseIdInput>,
  pk?: Maybe<CasePkCreateOneWithoutCaseIdInput>,
  progresses?: Maybe<CaseProgressCreateOneWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestCreateManyWithoutCaseIdInput>,
  referrals?: Maybe<CaseReferralCreateManyWithoutCaseIdInput>,
};

export type CaseCreateWithoutTransferreferralsInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed: Scalars['Boolean'],
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak: Scalars['Boolean'],
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk: Scalars['Boolean'],
  unlockTransfer: Scalars['Boolean'],
  updatedBy?: Maybe<Scalars['String']>,
  application: ApplicationCreateOneWithoutCaseInput,
  classifications?: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>,
  issues?: Maybe<CaseIssueCreateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuCreateManyWithoutCaseIdInput>,
  pk?: Maybe<CasePkCreateOneWithoutCaseIdInput>,
  progresses?: Maybe<CaseProgressCreateOneWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestCreateManyWithoutCaseIdInput>,
  transfer?: Maybe<CaseTransferCreateOneWithoutCaseIdInput>,
  referrals?: Maybe<CaseReferralCreateManyWithoutCaseIdInput>,
};

export type CaseCreateWithoutViolatedrightsInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed: Scalars['Boolean'],
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak: Scalars['Boolean'],
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk: Scalars['Boolean'],
  unlockTransfer: Scalars['Boolean'],
  updatedBy?: Maybe<Scalars['String']>,
  application: ApplicationCreateOneWithoutCaseInput,
  classifications?: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>,
  issues?: Maybe<CaseIssueCreateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuCreateManyWithoutCaseIdInput>,
  pk?: Maybe<CasePkCreateOneWithoutCaseIdInput>,
  progresses?: Maybe<CaseProgressCreateOneWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestCreateManyWithoutCaseIdInput>,
  transfer?: Maybe<CaseTransferCreateOneWithoutCaseIdInput>,
  referrals?: Maybe<CaseReferralCreateManyWithoutCaseIdInput>,
};

export type CaseDocument = {
  id: Scalars['Int'],
  caseId: Case,
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  jenisDokumen?: Maybe<Scalars['String']>,
  judulDokumen?: Maybe<Scalars['String']>,
  keterangan?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['String']>,
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
};

/** A connection to a list of items. */
export type CaseDocumentConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<CaseDocumentEdge>>,
  aggregate: AggregateCaseDocument,
};

export type CaseDocumentCreateInput = {
  createdBy?: Maybe<Scalars['String']>,
  jenisDokumen?: Maybe<Scalars['String']>,
  judulDokumen?: Maybe<Scalars['String']>,
  keterangan?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  caseId: CaseCreateOneWithoutDocumentsInput,
};

export type CaseDocumentCreateManyWithoutCaseIdInput = {
  create?: Maybe<Array<CaseDocumentCreateWithoutCaseIdInput>>,
  connect?: Maybe<Array<CaseDocumentWhereUniqueInput>>,
};

export type CaseDocumentCreateWithoutCaseIdInput = {
  createdBy?: Maybe<Scalars['String']>,
  jenisDokumen?: Maybe<Scalars['String']>,
  judulDokumen?: Maybe<Scalars['String']>,
  keterangan?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
};

/** An edge in a connection. */
export type CaseDocumentEdge = {
  /** The item at the end of the edge. */
  node: CaseDocument,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum CaseDocumentOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  JenisDokumenAsc = 'jenisDokumen_ASC',
  JenisDokumenDesc = 'jenisDokumen_DESC',
  JudulDokumenAsc = 'judulDokumen_ASC',
  JudulDokumenDesc = 'judulDokumen_DESC',
  KeteranganAsc = 'keterangan_ASC',
  KeteranganDesc = 'keterangan_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC'
}

export type CaseDocumentPreviousValues = {
  id: Scalars['Int'],
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  jenisDokumen?: Maybe<Scalars['String']>,
  judulDokumen?: Maybe<Scalars['String']>,
  keterangan?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['String']>,
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
};

export type CaseDocumentScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseDocumentScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseDocumentScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseDocumentScalarWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  createdBy_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  createdBy_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  createdBy_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  createdBy_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  createdBy_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  createdBy_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  createdBy_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  createdBy_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  createdBy_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  createdBy_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  createdBy_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  createdBy_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  createdBy_not_ends_with?: Maybe<Scalars['String']>,
  jenisDokumen?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  jenisDokumen_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  jenisDokumen_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  jenisDokumen_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  jenisDokumen_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  jenisDokumen_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  jenisDokumen_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  jenisDokumen_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  jenisDokumen_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  jenisDokumen_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  jenisDokumen_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  jenisDokumen_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  jenisDokumen_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  jenisDokumen_not_ends_with?: Maybe<Scalars['String']>,
  judulDokumen?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  judulDokumen_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  judulDokumen_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  judulDokumen_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  judulDokumen_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  judulDokumen_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  judulDokumen_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  judulDokumen_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  judulDokumen_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  judulDokumen_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  judulDokumen_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  judulDokumen_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  judulDokumen_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  judulDokumen_not_ends_with?: Maybe<Scalars['String']>,
  keterangan?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  keterangan_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  keterangan_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  keterangan_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  keterangan_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  keterangan_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  keterangan_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  keterangan_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  keterangan_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  keterangan_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  keterangan_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  keterangan_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  keterangan_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  keterangan_not_ends_with?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  link_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  link_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  link_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  link_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  link_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  link_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  link_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  link_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  link_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  link_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  link_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  link_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  link_not_ends_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  updatedBy_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  updatedBy_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  updatedBy_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  updatedBy_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  updatedBy_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  updatedBy_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  updatedBy_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  updatedBy_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  updatedBy_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  updatedBy_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  updatedBy_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  updatedBy_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  updatedBy_not_ends_with?: Maybe<Scalars['String']>,
};

export type CaseDocumentSubscriptionPayload = {
  mutation: MutationType,
  node?: Maybe<CaseDocument>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<CaseDocumentPreviousValues>,
};

export type CaseDocumentSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseDocumentSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseDocumentSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseDocumentSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<CaseDocumentWhereInput>,
};

export type CaseDocumentUpdateInput = {
  createdBy?: Maybe<Scalars['String']>,
  jenisDokumen?: Maybe<Scalars['String']>,
  judulDokumen?: Maybe<Scalars['String']>,
  keterangan?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  caseId?: Maybe<CaseUpdateOneRequiredWithoutDocumentsInput>,
};

export type CaseDocumentUpdateManyDataInput = {
  createdBy?: Maybe<Scalars['String']>,
  jenisDokumen?: Maybe<Scalars['String']>,
  judulDokumen?: Maybe<Scalars['String']>,
  keterangan?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
};

export type CaseDocumentUpdateManyMutationInput = {
  createdBy?: Maybe<Scalars['String']>,
  jenisDokumen?: Maybe<Scalars['String']>,
  judulDokumen?: Maybe<Scalars['String']>,
  keterangan?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
};

export type CaseDocumentUpdateManyWithoutCaseIdInput = {
  create?: Maybe<Array<CaseDocumentCreateWithoutCaseIdInput>>,
  connect?: Maybe<Array<CaseDocumentWhereUniqueInput>>,
  set?: Maybe<Array<CaseDocumentWhereUniqueInput>>,
  disconnect?: Maybe<Array<CaseDocumentWhereUniqueInput>>,
  delete?: Maybe<Array<CaseDocumentWhereUniqueInput>>,
  update?: Maybe<Array<CaseDocumentUpdateWithWhereUniqueWithoutCaseIdInput>>,
  updateMany?: Maybe<Array<CaseDocumentUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<CaseDocumentScalarWhereInput>>,
  upsert?: Maybe<Array<CaseDocumentUpsertWithWhereUniqueWithoutCaseIdInput>>,
};

export type CaseDocumentUpdateManyWithWhereNestedInput = {
  where: CaseDocumentScalarWhereInput,
  data: CaseDocumentUpdateManyDataInput,
};

export type CaseDocumentUpdateWithoutCaseIdDataInput = {
  createdBy?: Maybe<Scalars['String']>,
  jenisDokumen?: Maybe<Scalars['String']>,
  judulDokumen?: Maybe<Scalars['String']>,
  keterangan?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
};

export type CaseDocumentUpdateWithWhereUniqueWithoutCaseIdInput = {
  where: CaseDocumentWhereUniqueInput,
  data: CaseDocumentUpdateWithoutCaseIdDataInput,
};

export type CaseDocumentUpsertWithWhereUniqueWithoutCaseIdInput = {
  where: CaseDocumentWhereUniqueInput,
  update: CaseDocumentUpdateWithoutCaseIdDataInput,
  create: CaseDocumentCreateWithoutCaseIdInput,
};

export type CaseDocumentWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseDocumentWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseDocumentWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseDocumentWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  createdBy_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  createdBy_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  createdBy_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  createdBy_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  createdBy_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  createdBy_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  createdBy_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  createdBy_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  createdBy_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  createdBy_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  createdBy_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  createdBy_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  createdBy_not_ends_with?: Maybe<Scalars['String']>,
  jenisDokumen?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  jenisDokumen_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  jenisDokumen_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  jenisDokumen_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  jenisDokumen_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  jenisDokumen_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  jenisDokumen_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  jenisDokumen_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  jenisDokumen_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  jenisDokumen_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  jenisDokumen_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  jenisDokumen_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  jenisDokumen_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  jenisDokumen_not_ends_with?: Maybe<Scalars['String']>,
  judulDokumen?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  judulDokumen_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  judulDokumen_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  judulDokumen_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  judulDokumen_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  judulDokumen_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  judulDokumen_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  judulDokumen_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  judulDokumen_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  judulDokumen_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  judulDokumen_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  judulDokumen_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  judulDokumen_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  judulDokumen_not_ends_with?: Maybe<Scalars['String']>,
  keterangan?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  keterangan_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  keterangan_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  keterangan_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  keterangan_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  keterangan_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  keterangan_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  keterangan_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  keterangan_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  keterangan_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  keterangan_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  keterangan_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  keterangan_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  keterangan_not_ends_with?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  link_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  link_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  link_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  link_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  link_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  link_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  link_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  link_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  link_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  link_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  link_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  link_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  link_not_ends_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  updatedBy_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  updatedBy_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  updatedBy_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  updatedBy_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  updatedBy_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  updatedBy_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  updatedBy_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  updatedBy_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  updatedBy_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  updatedBy_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  updatedBy_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  updatedBy_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  updatedBy_not_ends_with?: Maybe<Scalars['String']>,
  caseId?: Maybe<CaseWhereInput>,
};

export type CaseDocumentWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

/** An edge in a connection. */
export type CaseEdge = {
  /** The item at the end of the edge. */
  node: Case,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export type CaseIssue = {
  id: Scalars['Int'],
  caseId: Case,
  kodeMt?: Maybe<Scalars['String']>,
};

/** A connection to a list of items. */
export type CaseIssueConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<CaseIssueEdge>>,
  aggregate: AggregateCaseIssue,
};

export type CaseIssueCreateInput = {
  kodeMt?: Maybe<Scalars['String']>,
  caseId: CaseCreateOneWithoutIssuesInput,
};

export type CaseIssueCreateManyWithoutCaseIdInput = {
  create?: Maybe<Array<CaseIssueCreateWithoutCaseIdInput>>,
  connect?: Maybe<Array<CaseIssueWhereUniqueInput>>,
};

export type CaseIssueCreateWithoutCaseIdInput = {
  kodeMt?: Maybe<Scalars['String']>,
};

/** An edge in a connection. */
export type CaseIssueEdge = {
  /** The item at the end of the edge. */
  node: CaseIssue,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum CaseIssueOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  KodeMtAsc = 'kodeMt_ASC',
  KodeMtDesc = 'kodeMt_DESC'
}

export type CaseIssuePreviousValues = {
  id: Scalars['Int'],
  kodeMt?: Maybe<Scalars['String']>,
};

export type CaseIssueScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseIssueScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseIssueScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseIssueScalarWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  kodeMt?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  kodeMt_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  kodeMt_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  kodeMt_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  kodeMt_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  kodeMt_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  kodeMt_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  kodeMt_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  kodeMt_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  kodeMt_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  kodeMt_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  kodeMt_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  kodeMt_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  kodeMt_not_ends_with?: Maybe<Scalars['String']>,
};

export type CaseIssueSubscriptionPayload = {
  mutation: MutationType,
  node?: Maybe<CaseIssue>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<CaseIssuePreviousValues>,
};

export type CaseIssueSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseIssueSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseIssueSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseIssueSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<CaseIssueWhereInput>,
};

export type CaseIssueUpdateInput = {
  kodeMt?: Maybe<Scalars['String']>,
  caseId?: Maybe<CaseUpdateOneRequiredWithoutIssuesInput>,
};

export type CaseIssueUpdateManyDataInput = {
  kodeMt?: Maybe<Scalars['String']>,
};

export type CaseIssueUpdateManyMutationInput = {
  kodeMt?: Maybe<Scalars['String']>,
};

export type CaseIssueUpdateManyWithoutCaseIdInput = {
  create?: Maybe<Array<CaseIssueCreateWithoutCaseIdInput>>,
  connect?: Maybe<Array<CaseIssueWhereUniqueInput>>,
  set?: Maybe<Array<CaseIssueWhereUniqueInput>>,
  disconnect?: Maybe<Array<CaseIssueWhereUniqueInput>>,
  delete?: Maybe<Array<CaseIssueWhereUniqueInput>>,
  update?: Maybe<Array<CaseIssueUpdateWithWhereUniqueWithoutCaseIdInput>>,
  updateMany?: Maybe<Array<CaseIssueUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<CaseIssueScalarWhereInput>>,
  upsert?: Maybe<Array<CaseIssueUpsertWithWhereUniqueWithoutCaseIdInput>>,
};

export type CaseIssueUpdateManyWithWhereNestedInput = {
  where: CaseIssueScalarWhereInput,
  data: CaseIssueUpdateManyDataInput,
};

export type CaseIssueUpdateWithoutCaseIdDataInput = {
  kodeMt?: Maybe<Scalars['String']>,
};

export type CaseIssueUpdateWithWhereUniqueWithoutCaseIdInput = {
  where: CaseIssueWhereUniqueInput,
  data: CaseIssueUpdateWithoutCaseIdDataInput,
};

export type CaseIssueUpsertWithWhereUniqueWithoutCaseIdInput = {
  where: CaseIssueWhereUniqueInput,
  update: CaseIssueUpdateWithoutCaseIdDataInput,
  create: CaseIssueCreateWithoutCaseIdInput,
};

export type CaseIssueWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseIssueWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseIssueWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseIssueWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  kodeMt?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  kodeMt_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  kodeMt_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  kodeMt_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  kodeMt_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  kodeMt_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  kodeMt_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  kodeMt_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  kodeMt_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  kodeMt_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  kodeMt_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  kodeMt_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  kodeMt_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  kodeMt_not_ends_with?: Maybe<Scalars['String']>,
  caseId?: Maybe<CaseWhereInput>,
};

export type CaseIssueWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type CaseKorban = {
  id: Scalars['Int'],
  caseId: Case,
  personId?: Maybe<Person>,
};

/** A connection to a list of items. */
export type CaseKorbanConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<CaseKorbanEdge>>,
  aggregate: AggregateCaseKorban,
};

export type CaseKorbanCreateInput = {
  caseId: CaseCreateOneWithoutKorbansInput,
  personId?: Maybe<PersonCreateOneWithoutCasekorbansInput>,
};

export type CaseKorbanCreateManyWithoutCaseIdInput = {
  create?: Maybe<Array<CaseKorbanCreateWithoutCaseIdInput>>,
  connect?: Maybe<Array<CaseKorbanWhereUniqueInput>>,
};

export type CaseKorbanCreateManyWithoutPersonIdInput = {
  create?: Maybe<Array<CaseKorbanCreateWithoutPersonIdInput>>,
  connect?: Maybe<Array<CaseKorbanWhereUniqueInput>>,
};

export type CaseKorbanCreateWithoutCaseIdInput = {
  personId?: Maybe<PersonCreateOneWithoutCasekorbansInput>,
};

export type CaseKorbanCreateWithoutPersonIdInput = {
  caseId: CaseCreateOneWithoutKorbansInput,
};

/** An edge in a connection. */
export type CaseKorbanEdge = {
  /** The item at the end of the edge. */
  node: CaseKorban,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum CaseKorbanOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type CaseKorbanPreviousValues = {
  id: Scalars['Int'],
};

export type CaseKorbanScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseKorbanScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseKorbanScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseKorbanScalarWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
};

export type CaseKorbanSubscriptionPayload = {
  mutation: MutationType,
  node?: Maybe<CaseKorban>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<CaseKorbanPreviousValues>,
};

export type CaseKorbanSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseKorbanSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseKorbanSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseKorbanSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<CaseKorbanWhereInput>,
};

export type CaseKorbanUpdateInput = {
  caseId?: Maybe<CaseUpdateOneRequiredWithoutKorbansInput>,
  personId?: Maybe<PersonUpdateOneWithoutCasekorbansInput>,
};

export type CaseKorbanUpdateManyWithoutCaseIdInput = {
  create?: Maybe<Array<CaseKorbanCreateWithoutCaseIdInput>>,
  connect?: Maybe<Array<CaseKorbanWhereUniqueInput>>,
  set?: Maybe<Array<CaseKorbanWhereUniqueInput>>,
  disconnect?: Maybe<Array<CaseKorbanWhereUniqueInput>>,
  delete?: Maybe<Array<CaseKorbanWhereUniqueInput>>,
  update?: Maybe<Array<CaseKorbanUpdateWithWhereUniqueWithoutCaseIdInput>>,
  deleteMany?: Maybe<Array<CaseKorbanScalarWhereInput>>,
  upsert?: Maybe<Array<CaseKorbanUpsertWithWhereUniqueWithoutCaseIdInput>>,
};

export type CaseKorbanUpdateManyWithoutPersonIdInput = {
  create?: Maybe<Array<CaseKorbanCreateWithoutPersonIdInput>>,
  connect?: Maybe<Array<CaseKorbanWhereUniqueInput>>,
  set?: Maybe<Array<CaseKorbanWhereUniqueInput>>,
  disconnect?: Maybe<Array<CaseKorbanWhereUniqueInput>>,
  delete?: Maybe<Array<CaseKorbanWhereUniqueInput>>,
  update?: Maybe<Array<CaseKorbanUpdateWithWhereUniqueWithoutPersonIdInput>>,
  deleteMany?: Maybe<Array<CaseKorbanScalarWhereInput>>,
  upsert?: Maybe<Array<CaseKorbanUpsertWithWhereUniqueWithoutPersonIdInput>>,
};

export type CaseKorbanUpdateWithoutCaseIdDataInput = {
  personId?: Maybe<PersonUpdateOneWithoutCasekorbansInput>,
};

export type CaseKorbanUpdateWithoutPersonIdDataInput = {
  caseId?: Maybe<CaseUpdateOneRequiredWithoutKorbansInput>,
};

export type CaseKorbanUpdateWithWhereUniqueWithoutCaseIdInput = {
  where: CaseKorbanWhereUniqueInput,
  data: CaseKorbanUpdateWithoutCaseIdDataInput,
};

export type CaseKorbanUpdateWithWhereUniqueWithoutPersonIdInput = {
  where: CaseKorbanWhereUniqueInput,
  data: CaseKorbanUpdateWithoutPersonIdDataInput,
};

export type CaseKorbanUpsertWithWhereUniqueWithoutCaseIdInput = {
  where: CaseKorbanWhereUniqueInput,
  update: CaseKorbanUpdateWithoutCaseIdDataInput,
  create: CaseKorbanCreateWithoutCaseIdInput,
};

export type CaseKorbanUpsertWithWhereUniqueWithoutPersonIdInput = {
  where: CaseKorbanWhereUniqueInput,
  update: CaseKorbanUpdateWithoutPersonIdDataInput,
  create: CaseKorbanCreateWithoutPersonIdInput,
};

export type CaseKorbanWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseKorbanWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseKorbanWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseKorbanWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  caseId?: Maybe<CaseWhereInput>,
  personId?: Maybe<PersonWhereInput>,
};

export type CaseKorbanWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export enum CaseOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ApplicationIdAsc = 'applicationId_ASC',
  ApplicationIdDesc = 'applicationId_DESC',
  CaseClosedAsc = 'caseClosed_ASC',
  CaseClosedDesc = 'caseClosed_DESC',
  CaseClosedJenisAsc = 'caseClosedJenis_ASC',
  CaseClosedJenisDesc = 'caseClosedJenis_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  HakTerlanggarAsc = 'hakTerlanggar_ASC',
  HakTerlanggarDesc = 'hakTerlanggar_DESC',
  IssueAsc = 'issue_ASC',
  IssueDesc = 'issue_DESC',
  JudulKasusAsc = 'judulKasus_ASC',
  JudulKasusDesc = 'judulKasus_DESC',
  KlasifikasiDokAsc = 'klasifikasiDok_ASC',
  KlasifikasiDokDesc = 'klasifikasiDok_DESC',
  KronologiKasusAsc = 'kronologiKasus_ASC',
  KronologiKasusDesc = 'kronologiKasus_DESC',
  LockDitolakAsc = 'lockDitolak_ASC',
  LockDitolakDesc = 'lockDitolak_DESC',
  StatusPendampinganAsc = 'statusPendampingan_ASC',
  StatusPendampinganDesc = 'statusPendampingan_DESC',
  TargetAdvokasiAsc = 'targetAdvokasi_ASC',
  TargetAdvokasiDesc = 'targetAdvokasi_DESC',
  UnlockPkAsc = 'unlockPk_ASC',
  UnlockPkDesc = 'unlockPk_DESC',
  UnlockTransferAsc = 'unlockTransfer_ASC',
  UnlockTransferDesc = 'unlockTransfer_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC'
}

export type CasePelaku = {
  id: Scalars['Int'],
  caseId: Case,
  personId?: Maybe<Person>,
};

/** A connection to a list of items. */
export type CasePelakuConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<CasePelakuEdge>>,
  aggregate: AggregateCasePelaku,
};

export type CasePelakuCreateInput = {
  caseId: CaseCreateOneWithoutPelakusInput,
  personId?: Maybe<PersonCreateOneWithoutCasepelakusInput>,
};

export type CasePelakuCreateManyWithoutCaseIdInput = {
  create?: Maybe<Array<CasePelakuCreateWithoutCaseIdInput>>,
  connect?: Maybe<Array<CasePelakuWhereUniqueInput>>,
};

export type CasePelakuCreateManyWithoutPersonIdInput = {
  create?: Maybe<Array<CasePelakuCreateWithoutPersonIdInput>>,
  connect?: Maybe<Array<CasePelakuWhereUniqueInput>>,
};

export type CasePelakuCreateWithoutCaseIdInput = {
  personId?: Maybe<PersonCreateOneWithoutCasepelakusInput>,
};

export type CasePelakuCreateWithoutPersonIdInput = {
  caseId: CaseCreateOneWithoutPelakusInput,
};

/** An edge in a connection. */
export type CasePelakuEdge = {
  /** The item at the end of the edge. */
  node: CasePelaku,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum CasePelakuOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type CasePelakuPreviousValues = {
  id: Scalars['Int'],
};

export type CasePelakuScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CasePelakuScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CasePelakuScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CasePelakuScalarWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
};

export type CasePelakuSubscriptionPayload = {
  mutation: MutationType,
  node?: Maybe<CasePelaku>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<CasePelakuPreviousValues>,
};

export type CasePelakuSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CasePelakuSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CasePelakuSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CasePelakuSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<CasePelakuWhereInput>,
};

export type CasePelakuUpdateInput = {
  caseId?: Maybe<CaseUpdateOneRequiredWithoutPelakusInput>,
  personId?: Maybe<PersonUpdateOneWithoutCasepelakusInput>,
};

export type CasePelakuUpdateManyWithoutCaseIdInput = {
  create?: Maybe<Array<CasePelakuCreateWithoutCaseIdInput>>,
  connect?: Maybe<Array<CasePelakuWhereUniqueInput>>,
  set?: Maybe<Array<CasePelakuWhereUniqueInput>>,
  disconnect?: Maybe<Array<CasePelakuWhereUniqueInput>>,
  delete?: Maybe<Array<CasePelakuWhereUniqueInput>>,
  update?: Maybe<Array<CasePelakuUpdateWithWhereUniqueWithoutCaseIdInput>>,
  deleteMany?: Maybe<Array<CasePelakuScalarWhereInput>>,
  upsert?: Maybe<Array<CasePelakuUpsertWithWhereUniqueWithoutCaseIdInput>>,
};

export type CasePelakuUpdateManyWithoutPersonIdInput = {
  create?: Maybe<Array<CasePelakuCreateWithoutPersonIdInput>>,
  connect?: Maybe<Array<CasePelakuWhereUniqueInput>>,
  set?: Maybe<Array<CasePelakuWhereUniqueInput>>,
  disconnect?: Maybe<Array<CasePelakuWhereUniqueInput>>,
  delete?: Maybe<Array<CasePelakuWhereUniqueInput>>,
  update?: Maybe<Array<CasePelakuUpdateWithWhereUniqueWithoutPersonIdInput>>,
  deleteMany?: Maybe<Array<CasePelakuScalarWhereInput>>,
  upsert?: Maybe<Array<CasePelakuUpsertWithWhereUniqueWithoutPersonIdInput>>,
};

export type CasePelakuUpdateWithoutCaseIdDataInput = {
  personId?: Maybe<PersonUpdateOneWithoutCasepelakusInput>,
};

export type CasePelakuUpdateWithoutPersonIdDataInput = {
  caseId?: Maybe<CaseUpdateOneRequiredWithoutPelakusInput>,
};

export type CasePelakuUpdateWithWhereUniqueWithoutCaseIdInput = {
  where: CasePelakuWhereUniqueInput,
  data: CasePelakuUpdateWithoutCaseIdDataInput,
};

export type CasePelakuUpdateWithWhereUniqueWithoutPersonIdInput = {
  where: CasePelakuWhereUniqueInput,
  data: CasePelakuUpdateWithoutPersonIdDataInput,
};

export type CasePelakuUpsertWithWhereUniqueWithoutCaseIdInput = {
  where: CasePelakuWhereUniqueInput,
  update: CasePelakuUpdateWithoutCaseIdDataInput,
  create: CasePelakuCreateWithoutCaseIdInput,
};

export type CasePelakuUpsertWithWhereUniqueWithoutPersonIdInput = {
  where: CasePelakuWhereUniqueInput,
  update: CasePelakuUpdateWithoutPersonIdDataInput,
  create: CasePelakuCreateWithoutPersonIdInput,
};

export type CasePelakuWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CasePelakuWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CasePelakuWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CasePelakuWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  caseId?: Maybe<CaseWhereInput>,
  personId?: Maybe<PersonWhereInput>,
};

export type CasePelakuWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type CasePk = {
  id: Scalars['Int'],
  caseId: Case,
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  didampingi?: Maybe<Scalars['String']>,
  legalMemo?: Maybe<Scalars['String']>,
  notulaRapat?: Maybe<Scalars['String']>,
  targetAkhirAdvokasi?: Maybe<Scalars['String']>,
  strategiAdvokasi?: Maybe<Scalars['String']>,
  ppPendamping?: Maybe<User>,
  statusAlasanTdk?: Maybe<Scalars['String']>,
  tglRapat?: Maybe<Scalars['DateTime']>,
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
};

/** A connection to a list of items. */
export type CasePkConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<CasePkEdge>>,
  aggregate: AggregateCasePk,
};

export type CasePkCreateInput = {
  createdBy?: Maybe<Scalars['String']>,
  didampingi?: Maybe<Scalars['String']>,
  legalMemo?: Maybe<Scalars['String']>,
  notulaRapat?: Maybe<Scalars['String']>,
  targetAkhirAdvokasi?: Maybe<Scalars['String']>,
  strategiAdvokasi?: Maybe<Scalars['String']>,
  statusAlasanTdk?: Maybe<Scalars['String']>,
  tglRapat?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  caseId: CaseCreateOneWithoutPkInput,
  ppPendamping?: Maybe<UserCreateOneInput>,
};

export type CasePkCreateOneWithoutCaseIdInput = {
  create?: Maybe<CasePkCreateWithoutCaseIdInput>,
  connect?: Maybe<CasePkWhereUniqueInput>,
};

export type CasePkCreateWithoutCaseIdInput = {
  createdBy?: Maybe<Scalars['String']>,
  didampingi?: Maybe<Scalars['String']>,
  legalMemo?: Maybe<Scalars['String']>,
  notulaRapat?: Maybe<Scalars['String']>,
  targetAkhirAdvokasi?: Maybe<Scalars['String']>,
  strategiAdvokasi?: Maybe<Scalars['String']>,
  statusAlasanTdk?: Maybe<Scalars['String']>,
  tglRapat?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  ppPendamping?: Maybe<UserCreateOneInput>,
};

/** An edge in a connection. */
export type CasePkEdge = {
  /** The item at the end of the edge. */
  node: CasePk,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum CasePkOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  DidampingiAsc = 'didampingi_ASC',
  DidampingiDesc = 'didampingi_DESC',
  LegalMemoAsc = 'legalMemo_ASC',
  LegalMemoDesc = 'legalMemo_DESC',
  NotulaRapatAsc = 'notulaRapat_ASC',
  NotulaRapatDesc = 'notulaRapat_DESC',
  TargetAkhirAdvokasiAsc = 'targetAkhirAdvokasi_ASC',
  TargetAkhirAdvokasiDesc = 'targetAkhirAdvokasi_DESC',
  StrategiAdvokasiAsc = 'strategiAdvokasi_ASC',
  StrategiAdvokasiDesc = 'strategiAdvokasi_DESC',
  StatusAlasanTdkAsc = 'statusAlasanTdk_ASC',
  StatusAlasanTdkDesc = 'statusAlasanTdk_DESC',
  TglRapatAsc = 'tglRapat_ASC',
  TglRapatDesc = 'tglRapat_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC'
}

export type CasePkPreviousValues = {
  id: Scalars['Int'],
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  didampingi?: Maybe<Scalars['String']>,
  legalMemo?: Maybe<Scalars['String']>,
  notulaRapat?: Maybe<Scalars['String']>,
  targetAkhirAdvokasi?: Maybe<Scalars['String']>,
  strategiAdvokasi?: Maybe<Scalars['String']>,
  statusAlasanTdk?: Maybe<Scalars['String']>,
  tglRapat?: Maybe<Scalars['DateTime']>,
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
};

export type CasePkSubscriptionPayload = {
  mutation: MutationType,
  node?: Maybe<CasePk>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<CasePkPreviousValues>,
};

export type CasePkSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CasePkSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CasePkSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CasePkSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<CasePkWhereInput>,
};

export type CasePkUpdateInput = {
  createdBy?: Maybe<Scalars['String']>,
  didampingi?: Maybe<Scalars['String']>,
  legalMemo?: Maybe<Scalars['String']>,
  notulaRapat?: Maybe<Scalars['String']>,
  targetAkhirAdvokasi?: Maybe<Scalars['String']>,
  strategiAdvokasi?: Maybe<Scalars['String']>,
  statusAlasanTdk?: Maybe<Scalars['String']>,
  tglRapat?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  caseId?: Maybe<CaseUpdateOneRequiredWithoutPkInput>,
  ppPendamping?: Maybe<UserUpdateOneInput>,
};

export type CasePkUpdateManyMutationInput = {
  createdBy?: Maybe<Scalars['String']>,
  didampingi?: Maybe<Scalars['String']>,
  legalMemo?: Maybe<Scalars['String']>,
  notulaRapat?: Maybe<Scalars['String']>,
  targetAkhirAdvokasi?: Maybe<Scalars['String']>,
  strategiAdvokasi?: Maybe<Scalars['String']>,
  statusAlasanTdk?: Maybe<Scalars['String']>,
  tglRapat?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
};

export type CasePkUpdateOneWithoutCaseIdInput = {
  create?: Maybe<CasePkCreateWithoutCaseIdInput>,
  connect?: Maybe<CasePkWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<CasePkUpdateWithoutCaseIdDataInput>,
  upsert?: Maybe<CasePkUpsertWithoutCaseIdInput>,
};

export type CasePkUpdateWithoutCaseIdDataInput = {
  createdBy?: Maybe<Scalars['String']>,
  didampingi?: Maybe<Scalars['String']>,
  legalMemo?: Maybe<Scalars['String']>,
  notulaRapat?: Maybe<Scalars['String']>,
  targetAkhirAdvokasi?: Maybe<Scalars['String']>,
  strategiAdvokasi?: Maybe<Scalars['String']>,
  statusAlasanTdk?: Maybe<Scalars['String']>,
  tglRapat?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  ppPendamping?: Maybe<UserUpdateOneInput>,
};

export type CasePkUpsertWithoutCaseIdInput = {
  update: CasePkUpdateWithoutCaseIdDataInput,
  create: CasePkCreateWithoutCaseIdInput,
};

export type CasePkWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CasePkWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CasePkWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CasePkWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  createdBy_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  createdBy_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  createdBy_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  createdBy_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  createdBy_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  createdBy_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  createdBy_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  createdBy_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  createdBy_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  createdBy_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  createdBy_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  createdBy_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  createdBy_not_ends_with?: Maybe<Scalars['String']>,
  didampingi?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  didampingi_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  didampingi_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  didampingi_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  didampingi_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  didampingi_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  didampingi_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  didampingi_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  didampingi_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  didampingi_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  didampingi_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  didampingi_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  didampingi_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  didampingi_not_ends_with?: Maybe<Scalars['String']>,
  legalMemo?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  legalMemo_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  legalMemo_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  legalMemo_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  legalMemo_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  legalMemo_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  legalMemo_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  legalMemo_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  legalMemo_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  legalMemo_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  legalMemo_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  legalMemo_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  legalMemo_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  legalMemo_not_ends_with?: Maybe<Scalars['String']>,
  notulaRapat?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  notulaRapat_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  notulaRapat_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  notulaRapat_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  notulaRapat_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  notulaRapat_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  notulaRapat_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  notulaRapat_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  notulaRapat_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  notulaRapat_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  notulaRapat_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  notulaRapat_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  notulaRapat_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  notulaRapat_not_ends_with?: Maybe<Scalars['String']>,
  targetAkhirAdvokasi?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  targetAkhirAdvokasi_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  targetAkhirAdvokasi_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  targetAkhirAdvokasi_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  targetAkhirAdvokasi_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  targetAkhirAdvokasi_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  targetAkhirAdvokasi_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  targetAkhirAdvokasi_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  targetAkhirAdvokasi_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  targetAkhirAdvokasi_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  targetAkhirAdvokasi_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  targetAkhirAdvokasi_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  targetAkhirAdvokasi_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  targetAkhirAdvokasi_not_ends_with?: Maybe<Scalars['String']>,
  strategiAdvokasi?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  strategiAdvokasi_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  strategiAdvokasi_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  strategiAdvokasi_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  strategiAdvokasi_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  strategiAdvokasi_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  strategiAdvokasi_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  strategiAdvokasi_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  strategiAdvokasi_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  strategiAdvokasi_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  strategiAdvokasi_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  strategiAdvokasi_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  strategiAdvokasi_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  strategiAdvokasi_not_ends_with?: Maybe<Scalars['String']>,
  statusAlasanTdk?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  statusAlasanTdk_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  statusAlasanTdk_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  statusAlasanTdk_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  statusAlasanTdk_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  statusAlasanTdk_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  statusAlasanTdk_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  statusAlasanTdk_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  statusAlasanTdk_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  statusAlasanTdk_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  statusAlasanTdk_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  statusAlasanTdk_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  statusAlasanTdk_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  statusAlasanTdk_not_ends_with?: Maybe<Scalars['String']>,
  tglRapat?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  tglRapat_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  tglRapat_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  tglRapat_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  tglRapat_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  tglRapat_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  tglRapat_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  tglRapat_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  updatedBy_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  updatedBy_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  updatedBy_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  updatedBy_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  updatedBy_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  updatedBy_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  updatedBy_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  updatedBy_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  updatedBy_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  updatedBy_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  updatedBy_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  updatedBy_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  updatedBy_not_ends_with?: Maybe<Scalars['String']>,
  caseId?: Maybe<CaseWhereInput>,
  ppPendamping?: Maybe<UserWhereInput>,
};

export type CasePkWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type CasePreviousValues = {
  id: Scalars['Int'],
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed: Scalars['Boolean'],
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak: Scalars['Boolean'],
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk: Scalars['Boolean'],
  unlockTransfer: Scalars['Boolean'],
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
};

export type CaseProgress = {
  id: Scalars['Int'],
  caseId: Case,
  catatan?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  jenisPeradilan?: Maybe<Scalars['String']>,
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
};

export type CaseProgressActivity = {
  id: Scalars['Int'],
  capaian?: Maybe<Scalars['String']>,
  caseId: Case,
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  hambatan?: Maybe<Scalars['String']>,
  judulAktifitas?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rencanaStrategi?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  tglAktifitas?: Maybe<Scalars['DateTime']>,
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
  activitieslit?: Maybe<Array<CaseProgressActivityLit>>,
  activitiesnonlit?: Maybe<Array<CaseProgressActivityNonlit>>,
};


export type CaseProgressActivityActivitieslitArgs = {
  where?: Maybe<CaseProgressActivityLitWhereInput>,
  orderBy?: Maybe<CaseProgressActivityLitOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type CaseProgressActivityActivitiesnonlitArgs = {
  where?: Maybe<CaseProgressActivityNonlitWhereInput>,
  orderBy?: Maybe<CaseProgressActivityNonlitOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

/** A connection to a list of items. */
export type CaseProgressActivityConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<CaseProgressActivityEdge>>,
  aggregate: AggregateCaseProgressActivity,
};

export type CaseProgressActivityCreateInput = {
  capaian?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hambatan?: Maybe<Scalars['String']>,
  judulAktifitas?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rencanaStrategi?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  tglAktifitas?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  caseId: CaseCreateOneWithoutActivitiesInput,
  activitieslit?: Maybe<CaseProgressActivityLitCreateManyWithoutCaseProgressActivityIdInput>,
  activitiesnonlit?: Maybe<CaseProgressActivityNonlitCreateManyWithoutCaseProgressActivityIdInput>,
};

export type CaseProgressActivityCreateManyWithoutCaseIdInput = {
  create?: Maybe<Array<CaseProgressActivityCreateWithoutCaseIdInput>>,
  connect?: Maybe<Array<CaseProgressActivityWhereUniqueInput>>,
};

export type CaseProgressActivityCreateOneWithoutActivitieslitInput = {
  create?: Maybe<CaseProgressActivityCreateWithoutActivitieslitInput>,
  connect?: Maybe<CaseProgressActivityWhereUniqueInput>,
};

export type CaseProgressActivityCreateOneWithoutActivitiesnonlitInput = {
  create?: Maybe<CaseProgressActivityCreateWithoutActivitiesnonlitInput>,
  connect?: Maybe<CaseProgressActivityWhereUniqueInput>,
};

export type CaseProgressActivityCreateWithoutActivitieslitInput = {
  capaian?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hambatan?: Maybe<Scalars['String']>,
  judulAktifitas?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rencanaStrategi?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  tglAktifitas?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  caseId: CaseCreateOneWithoutActivitiesInput,
  activitiesnonlit?: Maybe<CaseProgressActivityNonlitCreateManyWithoutCaseProgressActivityIdInput>,
};

export type CaseProgressActivityCreateWithoutActivitiesnonlitInput = {
  capaian?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hambatan?: Maybe<Scalars['String']>,
  judulAktifitas?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rencanaStrategi?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  tglAktifitas?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  caseId: CaseCreateOneWithoutActivitiesInput,
  activitieslit?: Maybe<CaseProgressActivityLitCreateManyWithoutCaseProgressActivityIdInput>,
};

export type CaseProgressActivityCreateWithoutCaseIdInput = {
  capaian?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hambatan?: Maybe<Scalars['String']>,
  judulAktifitas?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rencanaStrategi?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  tglAktifitas?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  activitieslit?: Maybe<CaseProgressActivityLitCreateManyWithoutCaseProgressActivityIdInput>,
  activitiesnonlit?: Maybe<CaseProgressActivityNonlitCreateManyWithoutCaseProgressActivityIdInput>,
};

/** An edge in a connection. */
export type CaseProgressActivityEdge = {
  /** The item at the end of the edge. */
  node: CaseProgressActivity,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export type CaseProgressActivityLit = {
  id: Scalars['Int'],
  caseProgressActivityId?: Maybe<CaseProgressActivity>,
  kodeMt?: Maybe<Scalars['String']>,
};

/** A connection to a list of items. */
export type CaseProgressActivityLitConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<CaseProgressActivityLitEdge>>,
  aggregate: AggregateCaseProgressActivityLit,
};

export type CaseProgressActivityLitCreateInput = {
  kodeMt?: Maybe<Scalars['String']>,
  caseProgressActivityId?: Maybe<CaseProgressActivityCreateOneWithoutActivitieslitInput>,
};

export type CaseProgressActivityLitCreateManyWithoutCaseProgressActivityIdInput = {
  create?: Maybe<Array<CaseProgressActivityLitCreateWithoutCaseProgressActivityIdInput>>,
  connect?: Maybe<Array<CaseProgressActivityLitWhereUniqueInput>>,
};

export type CaseProgressActivityLitCreateWithoutCaseProgressActivityIdInput = {
  kodeMt?: Maybe<Scalars['String']>,
};

/** An edge in a connection. */
export type CaseProgressActivityLitEdge = {
  /** The item at the end of the edge. */
  node: CaseProgressActivityLit,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum CaseProgressActivityLitOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  KodeMtAsc = 'kodeMt_ASC',
  KodeMtDesc = 'kodeMt_DESC'
}

export type CaseProgressActivityLitPreviousValues = {
  id: Scalars['Int'],
  kodeMt?: Maybe<Scalars['String']>,
};

export type CaseProgressActivityLitScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseProgressActivityLitScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseProgressActivityLitScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseProgressActivityLitScalarWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  kodeMt?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  kodeMt_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  kodeMt_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  kodeMt_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  kodeMt_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  kodeMt_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  kodeMt_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  kodeMt_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  kodeMt_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  kodeMt_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  kodeMt_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  kodeMt_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  kodeMt_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  kodeMt_not_ends_with?: Maybe<Scalars['String']>,
};

export type CaseProgressActivityLitSubscriptionPayload = {
  mutation: MutationType,
  node?: Maybe<CaseProgressActivityLit>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<CaseProgressActivityLitPreviousValues>,
};

export type CaseProgressActivityLitSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseProgressActivityLitSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseProgressActivityLitSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseProgressActivityLitSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<CaseProgressActivityLitWhereInput>,
};

export type CaseProgressActivityLitUpdateInput = {
  kodeMt?: Maybe<Scalars['String']>,
  caseProgressActivityId?: Maybe<CaseProgressActivityUpdateOneWithoutActivitieslitInput>,
};

export type CaseProgressActivityLitUpdateManyDataInput = {
  kodeMt?: Maybe<Scalars['String']>,
};

export type CaseProgressActivityLitUpdateManyMutationInput = {
  kodeMt?: Maybe<Scalars['String']>,
};

export type CaseProgressActivityLitUpdateManyWithoutCaseProgressActivityIdInput = {
  create?: Maybe<Array<CaseProgressActivityLitCreateWithoutCaseProgressActivityIdInput>>,
  connect?: Maybe<Array<CaseProgressActivityLitWhereUniqueInput>>,
  set?: Maybe<Array<CaseProgressActivityLitWhereUniqueInput>>,
  disconnect?: Maybe<Array<CaseProgressActivityLitWhereUniqueInput>>,
  delete?: Maybe<Array<CaseProgressActivityLitWhereUniqueInput>>,
  update?: Maybe<Array<CaseProgressActivityLitUpdateWithWhereUniqueWithoutCaseProgressActivityIdInput>>,
  updateMany?: Maybe<Array<CaseProgressActivityLitUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<CaseProgressActivityLitScalarWhereInput>>,
  upsert?: Maybe<Array<CaseProgressActivityLitUpsertWithWhereUniqueWithoutCaseProgressActivityIdInput>>,
};

export type CaseProgressActivityLitUpdateManyWithWhereNestedInput = {
  where: CaseProgressActivityLitScalarWhereInput,
  data: CaseProgressActivityLitUpdateManyDataInput,
};

export type CaseProgressActivityLitUpdateWithoutCaseProgressActivityIdDataInput = {
  kodeMt?: Maybe<Scalars['String']>,
};

export type CaseProgressActivityLitUpdateWithWhereUniqueWithoutCaseProgressActivityIdInput = {
  where: CaseProgressActivityLitWhereUniqueInput,
  data: CaseProgressActivityLitUpdateWithoutCaseProgressActivityIdDataInput,
};

export type CaseProgressActivityLitUpsertWithWhereUniqueWithoutCaseProgressActivityIdInput = {
  where: CaseProgressActivityLitWhereUniqueInput,
  update: CaseProgressActivityLitUpdateWithoutCaseProgressActivityIdDataInput,
  create: CaseProgressActivityLitCreateWithoutCaseProgressActivityIdInput,
};

export type CaseProgressActivityLitWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseProgressActivityLitWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseProgressActivityLitWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseProgressActivityLitWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  kodeMt?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  kodeMt_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  kodeMt_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  kodeMt_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  kodeMt_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  kodeMt_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  kodeMt_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  kodeMt_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  kodeMt_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  kodeMt_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  kodeMt_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  kodeMt_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  kodeMt_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  kodeMt_not_ends_with?: Maybe<Scalars['String']>,
  caseProgressActivityId?: Maybe<CaseProgressActivityWhereInput>,
};

export type CaseProgressActivityLitWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type CaseProgressActivityNonlit = {
  id: Scalars['Int'],
  caseProgressActivityId?: Maybe<CaseProgressActivity>,
  kodeMt?: Maybe<Scalars['String']>,
};

/** A connection to a list of items. */
export type CaseProgressActivityNonlitConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<CaseProgressActivityNonlitEdge>>,
  aggregate: AggregateCaseProgressActivityNonlit,
};

export type CaseProgressActivityNonlitCreateInput = {
  kodeMt?: Maybe<Scalars['String']>,
  caseProgressActivityId?: Maybe<CaseProgressActivityCreateOneWithoutActivitiesnonlitInput>,
};

export type CaseProgressActivityNonlitCreateManyWithoutCaseProgressActivityIdInput = {
  create?: Maybe<Array<CaseProgressActivityNonlitCreateWithoutCaseProgressActivityIdInput>>,
  connect?: Maybe<Array<CaseProgressActivityNonlitWhereUniqueInput>>,
};

export type CaseProgressActivityNonlitCreateWithoutCaseProgressActivityIdInput = {
  kodeMt?: Maybe<Scalars['String']>,
};

/** An edge in a connection. */
export type CaseProgressActivityNonlitEdge = {
  /** The item at the end of the edge. */
  node: CaseProgressActivityNonlit,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum CaseProgressActivityNonlitOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  KodeMtAsc = 'kodeMt_ASC',
  KodeMtDesc = 'kodeMt_DESC'
}

export type CaseProgressActivityNonlitPreviousValues = {
  id: Scalars['Int'],
  kodeMt?: Maybe<Scalars['String']>,
};

export type CaseProgressActivityNonlitScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseProgressActivityNonlitScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseProgressActivityNonlitScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseProgressActivityNonlitScalarWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  kodeMt?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  kodeMt_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  kodeMt_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  kodeMt_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  kodeMt_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  kodeMt_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  kodeMt_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  kodeMt_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  kodeMt_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  kodeMt_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  kodeMt_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  kodeMt_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  kodeMt_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  kodeMt_not_ends_with?: Maybe<Scalars['String']>,
};

export type CaseProgressActivityNonlitSubscriptionPayload = {
  mutation: MutationType,
  node?: Maybe<CaseProgressActivityNonlit>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<CaseProgressActivityNonlitPreviousValues>,
};

export type CaseProgressActivityNonlitSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseProgressActivityNonlitSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseProgressActivityNonlitSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseProgressActivityNonlitSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<CaseProgressActivityNonlitWhereInput>,
};

export type CaseProgressActivityNonlitUpdateInput = {
  kodeMt?: Maybe<Scalars['String']>,
  caseProgressActivityId?: Maybe<CaseProgressActivityUpdateOneWithoutActivitiesnonlitInput>,
};

export type CaseProgressActivityNonlitUpdateManyDataInput = {
  kodeMt?: Maybe<Scalars['String']>,
};

export type CaseProgressActivityNonlitUpdateManyMutationInput = {
  kodeMt?: Maybe<Scalars['String']>,
};

export type CaseProgressActivityNonlitUpdateManyWithoutCaseProgressActivityIdInput = {
  create?: Maybe<Array<CaseProgressActivityNonlitCreateWithoutCaseProgressActivityIdInput>>,
  connect?: Maybe<Array<CaseProgressActivityNonlitWhereUniqueInput>>,
  set?: Maybe<Array<CaseProgressActivityNonlitWhereUniqueInput>>,
  disconnect?: Maybe<Array<CaseProgressActivityNonlitWhereUniqueInput>>,
  delete?: Maybe<Array<CaseProgressActivityNonlitWhereUniqueInput>>,
  update?: Maybe<Array<CaseProgressActivityNonlitUpdateWithWhereUniqueWithoutCaseProgressActivityIdInput>>,
  updateMany?: Maybe<Array<CaseProgressActivityNonlitUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<CaseProgressActivityNonlitScalarWhereInput>>,
  upsert?: Maybe<Array<CaseProgressActivityNonlitUpsertWithWhereUniqueWithoutCaseProgressActivityIdInput>>,
};

export type CaseProgressActivityNonlitUpdateManyWithWhereNestedInput = {
  where: CaseProgressActivityNonlitScalarWhereInput,
  data: CaseProgressActivityNonlitUpdateManyDataInput,
};

export type CaseProgressActivityNonlitUpdateWithoutCaseProgressActivityIdDataInput = {
  kodeMt?: Maybe<Scalars['String']>,
};

export type CaseProgressActivityNonlitUpdateWithWhereUniqueWithoutCaseProgressActivityIdInput = {
  where: CaseProgressActivityNonlitWhereUniqueInput,
  data: CaseProgressActivityNonlitUpdateWithoutCaseProgressActivityIdDataInput,
};

export type CaseProgressActivityNonlitUpsertWithWhereUniqueWithoutCaseProgressActivityIdInput = {
  where: CaseProgressActivityNonlitWhereUniqueInput,
  update: CaseProgressActivityNonlitUpdateWithoutCaseProgressActivityIdDataInput,
  create: CaseProgressActivityNonlitCreateWithoutCaseProgressActivityIdInput,
};

export type CaseProgressActivityNonlitWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseProgressActivityNonlitWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseProgressActivityNonlitWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseProgressActivityNonlitWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  kodeMt?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  kodeMt_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  kodeMt_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  kodeMt_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  kodeMt_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  kodeMt_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  kodeMt_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  kodeMt_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  kodeMt_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  kodeMt_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  kodeMt_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  kodeMt_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  kodeMt_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  kodeMt_not_ends_with?: Maybe<Scalars['String']>,
  caseProgressActivityId?: Maybe<CaseProgressActivityWhereInput>,
};

export type CaseProgressActivityNonlitWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export enum CaseProgressActivityOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CapaianAsc = 'capaian_ASC',
  CapaianDesc = 'capaian_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  HambatanAsc = 'hambatan_ASC',
  HambatanDesc = 'hambatan_DESC',
  JudulAktifitasAsc = 'judulAktifitas_ASC',
  JudulAktifitasDesc = 'judulAktifitas_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  RencanaStrategiAsc = 'rencanaStrategi_ASC',
  RencanaStrategiDesc = 'rencanaStrategi_DESC',
  TargetAdvokasiAsc = 'targetAdvokasi_ASC',
  TargetAdvokasiDesc = 'targetAdvokasi_DESC',
  TglAktifitasAsc = 'tglAktifitas_ASC',
  TglAktifitasDesc = 'tglAktifitas_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC'
}

export type CaseProgressActivityPreviousValues = {
  id: Scalars['Int'],
  capaian?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  hambatan?: Maybe<Scalars['String']>,
  judulAktifitas?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rencanaStrategi?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  tglAktifitas?: Maybe<Scalars['DateTime']>,
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
};

export type CaseProgressActivityScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseProgressActivityScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseProgressActivityScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseProgressActivityScalarWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  capaian?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  capaian_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  capaian_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  capaian_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  capaian_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  capaian_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  capaian_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  capaian_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  capaian_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  capaian_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  capaian_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  capaian_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  capaian_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  capaian_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  createdBy_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  createdBy_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  createdBy_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  createdBy_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  createdBy_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  createdBy_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  createdBy_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  createdBy_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  createdBy_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  createdBy_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  createdBy_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  createdBy_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  createdBy_not_ends_with?: Maybe<Scalars['String']>,
  hambatan?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  hambatan_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  hambatan_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  hambatan_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  hambatan_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  hambatan_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  hambatan_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  hambatan_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  hambatan_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  hambatan_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  hambatan_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  hambatan_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  hambatan_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  hambatan_not_ends_with?: Maybe<Scalars['String']>,
  judulAktifitas?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  judulAktifitas_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  judulAktifitas_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  judulAktifitas_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  judulAktifitas_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  judulAktifitas_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  judulAktifitas_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  judulAktifitas_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  judulAktifitas_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  judulAktifitas_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  judulAktifitas_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  judulAktifitas_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  judulAktifitas_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  judulAktifitas_not_ends_with?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  position_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  position_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  position_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  position_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  position_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  position_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  position_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  position_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  position_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  position_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  position_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  position_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  position_not_ends_with?: Maybe<Scalars['String']>,
  rencanaStrategi?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  rencanaStrategi_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  rencanaStrategi_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  rencanaStrategi_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  rencanaStrategi_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  rencanaStrategi_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  rencanaStrategi_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  rencanaStrategi_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  rencanaStrategi_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  rencanaStrategi_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  rencanaStrategi_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  rencanaStrategi_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  rencanaStrategi_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  rencanaStrategi_not_ends_with?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  targetAdvokasi_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  targetAdvokasi_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  targetAdvokasi_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  targetAdvokasi_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  targetAdvokasi_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  targetAdvokasi_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  targetAdvokasi_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  targetAdvokasi_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  targetAdvokasi_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  targetAdvokasi_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  targetAdvokasi_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  targetAdvokasi_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  targetAdvokasi_not_ends_with?: Maybe<Scalars['String']>,
  tglAktifitas?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  tglAktifitas_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  tglAktifitas_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  tglAktifitas_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  tglAktifitas_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  tglAktifitas_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  tglAktifitas_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  tglAktifitas_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  updatedBy_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  updatedBy_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  updatedBy_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  updatedBy_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  updatedBy_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  updatedBy_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  updatedBy_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  updatedBy_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  updatedBy_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  updatedBy_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  updatedBy_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  updatedBy_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  updatedBy_not_ends_with?: Maybe<Scalars['String']>,
};

export type CaseProgressActivitySubscriptionPayload = {
  mutation: MutationType,
  node?: Maybe<CaseProgressActivity>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<CaseProgressActivityPreviousValues>,
};

export type CaseProgressActivitySubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseProgressActivitySubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseProgressActivitySubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseProgressActivitySubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<CaseProgressActivityWhereInput>,
};

export type CaseProgressActivityUpdateInput = {
  capaian?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hambatan?: Maybe<Scalars['String']>,
  judulAktifitas?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rencanaStrategi?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  tglAktifitas?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  caseId?: Maybe<CaseUpdateOneRequiredWithoutActivitiesInput>,
  activitieslit?: Maybe<CaseProgressActivityLitUpdateManyWithoutCaseProgressActivityIdInput>,
  activitiesnonlit?: Maybe<CaseProgressActivityNonlitUpdateManyWithoutCaseProgressActivityIdInput>,
};

export type CaseProgressActivityUpdateManyDataInput = {
  capaian?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hambatan?: Maybe<Scalars['String']>,
  judulAktifitas?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rencanaStrategi?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  tglAktifitas?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
};

export type CaseProgressActivityUpdateManyMutationInput = {
  capaian?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hambatan?: Maybe<Scalars['String']>,
  judulAktifitas?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rencanaStrategi?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  tglAktifitas?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
};

export type CaseProgressActivityUpdateManyWithoutCaseIdInput = {
  create?: Maybe<Array<CaseProgressActivityCreateWithoutCaseIdInput>>,
  connect?: Maybe<Array<CaseProgressActivityWhereUniqueInput>>,
  set?: Maybe<Array<CaseProgressActivityWhereUniqueInput>>,
  disconnect?: Maybe<Array<CaseProgressActivityWhereUniqueInput>>,
  delete?: Maybe<Array<CaseProgressActivityWhereUniqueInput>>,
  update?: Maybe<Array<CaseProgressActivityUpdateWithWhereUniqueWithoutCaseIdInput>>,
  updateMany?: Maybe<Array<CaseProgressActivityUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<CaseProgressActivityScalarWhereInput>>,
  upsert?: Maybe<Array<CaseProgressActivityUpsertWithWhereUniqueWithoutCaseIdInput>>,
};

export type CaseProgressActivityUpdateManyWithWhereNestedInput = {
  where: CaseProgressActivityScalarWhereInput,
  data: CaseProgressActivityUpdateManyDataInput,
};

export type CaseProgressActivityUpdateOneWithoutActivitieslitInput = {
  create?: Maybe<CaseProgressActivityCreateWithoutActivitieslitInput>,
  connect?: Maybe<CaseProgressActivityWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<CaseProgressActivityUpdateWithoutActivitieslitDataInput>,
  upsert?: Maybe<CaseProgressActivityUpsertWithoutActivitieslitInput>,
};

export type CaseProgressActivityUpdateOneWithoutActivitiesnonlitInput = {
  create?: Maybe<CaseProgressActivityCreateWithoutActivitiesnonlitInput>,
  connect?: Maybe<CaseProgressActivityWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<CaseProgressActivityUpdateWithoutActivitiesnonlitDataInput>,
  upsert?: Maybe<CaseProgressActivityUpsertWithoutActivitiesnonlitInput>,
};

export type CaseProgressActivityUpdateWithoutActivitieslitDataInput = {
  capaian?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hambatan?: Maybe<Scalars['String']>,
  judulAktifitas?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rencanaStrategi?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  tglAktifitas?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  caseId?: Maybe<CaseUpdateOneRequiredWithoutActivitiesInput>,
  activitiesnonlit?: Maybe<CaseProgressActivityNonlitUpdateManyWithoutCaseProgressActivityIdInput>,
};

export type CaseProgressActivityUpdateWithoutActivitiesnonlitDataInput = {
  capaian?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hambatan?: Maybe<Scalars['String']>,
  judulAktifitas?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rencanaStrategi?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  tglAktifitas?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  caseId?: Maybe<CaseUpdateOneRequiredWithoutActivitiesInput>,
  activitieslit?: Maybe<CaseProgressActivityLitUpdateManyWithoutCaseProgressActivityIdInput>,
};

export type CaseProgressActivityUpdateWithoutCaseIdDataInput = {
  capaian?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hambatan?: Maybe<Scalars['String']>,
  judulAktifitas?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rencanaStrategi?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  tglAktifitas?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  activitieslit?: Maybe<CaseProgressActivityLitUpdateManyWithoutCaseProgressActivityIdInput>,
  activitiesnonlit?: Maybe<CaseProgressActivityNonlitUpdateManyWithoutCaseProgressActivityIdInput>,
};

export type CaseProgressActivityUpdateWithWhereUniqueWithoutCaseIdInput = {
  where: CaseProgressActivityWhereUniqueInput,
  data: CaseProgressActivityUpdateWithoutCaseIdDataInput,
};

export type CaseProgressActivityUpsertWithoutActivitieslitInput = {
  update: CaseProgressActivityUpdateWithoutActivitieslitDataInput,
  create: CaseProgressActivityCreateWithoutActivitieslitInput,
};

export type CaseProgressActivityUpsertWithoutActivitiesnonlitInput = {
  update: CaseProgressActivityUpdateWithoutActivitiesnonlitDataInput,
  create: CaseProgressActivityCreateWithoutActivitiesnonlitInput,
};

export type CaseProgressActivityUpsertWithWhereUniqueWithoutCaseIdInput = {
  where: CaseProgressActivityWhereUniqueInput,
  update: CaseProgressActivityUpdateWithoutCaseIdDataInput,
  create: CaseProgressActivityCreateWithoutCaseIdInput,
};

export type CaseProgressActivityWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseProgressActivityWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseProgressActivityWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseProgressActivityWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  capaian?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  capaian_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  capaian_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  capaian_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  capaian_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  capaian_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  capaian_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  capaian_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  capaian_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  capaian_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  capaian_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  capaian_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  capaian_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  capaian_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  createdBy_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  createdBy_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  createdBy_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  createdBy_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  createdBy_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  createdBy_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  createdBy_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  createdBy_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  createdBy_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  createdBy_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  createdBy_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  createdBy_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  createdBy_not_ends_with?: Maybe<Scalars['String']>,
  hambatan?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  hambatan_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  hambatan_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  hambatan_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  hambatan_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  hambatan_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  hambatan_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  hambatan_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  hambatan_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  hambatan_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  hambatan_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  hambatan_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  hambatan_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  hambatan_not_ends_with?: Maybe<Scalars['String']>,
  judulAktifitas?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  judulAktifitas_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  judulAktifitas_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  judulAktifitas_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  judulAktifitas_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  judulAktifitas_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  judulAktifitas_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  judulAktifitas_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  judulAktifitas_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  judulAktifitas_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  judulAktifitas_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  judulAktifitas_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  judulAktifitas_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  judulAktifitas_not_ends_with?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  position_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  position_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  position_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  position_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  position_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  position_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  position_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  position_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  position_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  position_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  position_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  position_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  position_not_ends_with?: Maybe<Scalars['String']>,
  rencanaStrategi?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  rencanaStrategi_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  rencanaStrategi_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  rencanaStrategi_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  rencanaStrategi_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  rencanaStrategi_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  rencanaStrategi_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  rencanaStrategi_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  rencanaStrategi_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  rencanaStrategi_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  rencanaStrategi_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  rencanaStrategi_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  rencanaStrategi_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  rencanaStrategi_not_ends_with?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  targetAdvokasi_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  targetAdvokasi_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  targetAdvokasi_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  targetAdvokasi_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  targetAdvokasi_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  targetAdvokasi_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  targetAdvokasi_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  targetAdvokasi_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  targetAdvokasi_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  targetAdvokasi_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  targetAdvokasi_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  targetAdvokasi_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  targetAdvokasi_not_ends_with?: Maybe<Scalars['String']>,
  tglAktifitas?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  tglAktifitas_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  tglAktifitas_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  tglAktifitas_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  tglAktifitas_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  tglAktifitas_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  tglAktifitas_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  tglAktifitas_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  updatedBy_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  updatedBy_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  updatedBy_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  updatedBy_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  updatedBy_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  updatedBy_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  updatedBy_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  updatedBy_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  updatedBy_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  updatedBy_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  updatedBy_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  updatedBy_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  updatedBy_not_ends_with?: Maybe<Scalars['String']>,
  caseId?: Maybe<CaseWhereInput>,
  activitieslit_every?: Maybe<CaseProgressActivityLitWhereInput>,
  activitieslit_some?: Maybe<CaseProgressActivityLitWhereInput>,
  activitieslit_none?: Maybe<CaseProgressActivityLitWhereInput>,
  activitiesnonlit_every?: Maybe<CaseProgressActivityNonlitWhereInput>,
  activitiesnonlit_some?: Maybe<CaseProgressActivityNonlitWhereInput>,
  activitiesnonlit_none?: Maybe<CaseProgressActivityNonlitWhereInput>,
};

export type CaseProgressActivityWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

/** A connection to a list of items. */
export type CaseProgressConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<CaseProgressEdge>>,
  aggregate: AggregateCaseProgress,
};

export type CaseProgressCreateInput = {
  catatan?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  jenisPeradilan?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  caseId: CaseCreateOneWithoutProgressesInput,
};

export type CaseProgressCreateOneWithoutCaseIdInput = {
  create?: Maybe<CaseProgressCreateWithoutCaseIdInput>,
  connect?: Maybe<CaseProgressWhereUniqueInput>,
};

export type CaseProgressCreateWithoutCaseIdInput = {
  catatan?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  jenisPeradilan?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
};

/** An edge in a connection. */
export type CaseProgressEdge = {
  /** The item at the end of the edge. */
  node: CaseProgress,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum CaseProgressOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CatatanAsc = 'catatan_ASC',
  CatatanDesc = 'catatan_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  JenisPeradilanAsc = 'jenisPeradilan_ASC',
  JenisPeradilanDesc = 'jenisPeradilan_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC'
}

export type CaseProgressPreviousValues = {
  id: Scalars['Int'],
  catatan?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  jenisPeradilan?: Maybe<Scalars['String']>,
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
};

export type CaseProgressSubscriptionPayload = {
  mutation: MutationType,
  node?: Maybe<CaseProgress>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<CaseProgressPreviousValues>,
};

export type CaseProgressSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseProgressSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseProgressSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseProgressSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<CaseProgressWhereInput>,
};

export type CaseProgressUpdateInput = {
  catatan?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  jenisPeradilan?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  caseId?: Maybe<CaseUpdateOneRequiredWithoutProgressesInput>,
};

export type CaseProgressUpdateManyMutationInput = {
  catatan?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  jenisPeradilan?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
};

export type CaseProgressUpdateOneWithoutCaseIdInput = {
  create?: Maybe<CaseProgressCreateWithoutCaseIdInput>,
  connect?: Maybe<CaseProgressWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<CaseProgressUpdateWithoutCaseIdDataInput>,
  upsert?: Maybe<CaseProgressUpsertWithoutCaseIdInput>,
};

export type CaseProgressUpdateWithoutCaseIdDataInput = {
  catatan?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  jenisPeradilan?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
};

export type CaseProgressUpsertWithoutCaseIdInput = {
  update: CaseProgressUpdateWithoutCaseIdDataInput,
  create: CaseProgressCreateWithoutCaseIdInput,
};

export type CaseProgressWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseProgressWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseProgressWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseProgressWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  catatan?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  catatan_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  catatan_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  catatan_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  catatan_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  catatan_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  catatan_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  catatan_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  catatan_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  catatan_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  catatan_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  catatan_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  catatan_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  catatan_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  createdBy_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  createdBy_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  createdBy_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  createdBy_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  createdBy_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  createdBy_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  createdBy_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  createdBy_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  createdBy_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  createdBy_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  createdBy_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  createdBy_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  createdBy_not_ends_with?: Maybe<Scalars['String']>,
  jenisPeradilan?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  jenisPeradilan_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  jenisPeradilan_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  jenisPeradilan_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  jenisPeradilan_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  jenisPeradilan_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  jenisPeradilan_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  jenisPeradilan_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  jenisPeradilan_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  jenisPeradilan_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  jenisPeradilan_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  jenisPeradilan_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  jenisPeradilan_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  jenisPeradilan_not_ends_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  updatedBy_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  updatedBy_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  updatedBy_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  updatedBy_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  updatedBy_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  updatedBy_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  updatedBy_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  updatedBy_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  updatedBy_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  updatedBy_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  updatedBy_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  updatedBy_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  updatedBy_not_ends_with?: Maybe<Scalars['String']>,
  caseId?: Maybe<CaseWhereInput>,
};

export type CaseProgressWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type CaseReferral = {
  id: Scalars['Int'],
  caseId: Case,
  client: Person,
  tglTransfer?: Maybe<Scalars['DateTime']>,
  catatan?: Maybe<Scalars['String']>,
  network?: Maybe<Network>,
  createdBy?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
};

/** A connection to a list of items. */
export type CaseReferralConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<CaseReferralEdge>>,
  aggregate: AggregateCaseReferral,
};

export type CaseReferralCreateInput = {
  tglTransfer?: Maybe<Scalars['DateTime']>,
  catatan?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  caseId: CaseCreateOneWithoutReferralsInput,
  client: PersonCreateOneInput,
  network?: Maybe<NetworkCreateOneInput>,
};

export type CaseReferralCreateManyWithoutCaseIdInput = {
  create?: Maybe<Array<CaseReferralCreateWithoutCaseIdInput>>,
  connect?: Maybe<Array<CaseReferralWhereUniqueInput>>,
};

export type CaseReferralCreateWithoutCaseIdInput = {
  tglTransfer?: Maybe<Scalars['DateTime']>,
  catatan?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  client: PersonCreateOneInput,
  network?: Maybe<NetworkCreateOneInput>,
};

/** An edge in a connection. */
export type CaseReferralEdge = {
  /** The item at the end of the edge. */
  node: CaseReferral,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum CaseReferralOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TglTransferAsc = 'tglTransfer_ASC',
  TglTransferDesc = 'tglTransfer_DESC',
  CatatanAsc = 'catatan_ASC',
  CatatanDesc = 'catatan_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC'
}

export type CaseReferralPreviousValues = {
  id: Scalars['Int'],
  tglTransfer?: Maybe<Scalars['DateTime']>,
  catatan?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
};

export type CaseReferralScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseReferralScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseReferralScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseReferralScalarWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  tglTransfer?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  tglTransfer_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  tglTransfer_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  tglTransfer_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  tglTransfer_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  tglTransfer_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  tglTransfer_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  tglTransfer_gte?: Maybe<Scalars['DateTime']>,
  catatan?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  catatan_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  catatan_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  catatan_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  catatan_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  catatan_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  catatan_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  catatan_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  catatan_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  catatan_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  catatan_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  catatan_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  catatan_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  catatan_not_ends_with?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  createdBy_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  createdBy_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  createdBy_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  createdBy_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  createdBy_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  createdBy_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  createdBy_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  createdBy_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  createdBy_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  createdBy_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  createdBy_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  createdBy_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  createdBy_not_ends_with?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  updatedBy_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  updatedBy_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  updatedBy_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  updatedBy_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  updatedBy_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  updatedBy_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  updatedBy_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  updatedBy_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  updatedBy_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  updatedBy_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  updatedBy_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  updatedBy_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  updatedBy_not_ends_with?: Maybe<Scalars['String']>,
};

export type CaseReferralSubscriptionPayload = {
  mutation: MutationType,
  node?: Maybe<CaseReferral>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<CaseReferralPreviousValues>,
};

export type CaseReferralSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseReferralSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseReferralSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseReferralSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<CaseReferralWhereInput>,
};

export type CaseReferralUpdateInput = {
  tglTransfer?: Maybe<Scalars['DateTime']>,
  catatan?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  caseId?: Maybe<CaseUpdateOneRequiredWithoutReferralsInput>,
  client?: Maybe<PersonUpdateOneRequiredInput>,
  network?: Maybe<NetworkUpdateOneInput>,
};

export type CaseReferralUpdateManyDataInput = {
  tglTransfer?: Maybe<Scalars['DateTime']>,
  catatan?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
};

export type CaseReferralUpdateManyMutationInput = {
  tglTransfer?: Maybe<Scalars['DateTime']>,
  catatan?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
};

export type CaseReferralUpdateManyWithoutCaseIdInput = {
  create?: Maybe<Array<CaseReferralCreateWithoutCaseIdInput>>,
  connect?: Maybe<Array<CaseReferralWhereUniqueInput>>,
  set?: Maybe<Array<CaseReferralWhereUniqueInput>>,
  disconnect?: Maybe<Array<CaseReferralWhereUniqueInput>>,
  delete?: Maybe<Array<CaseReferralWhereUniqueInput>>,
  update?: Maybe<Array<CaseReferralUpdateWithWhereUniqueWithoutCaseIdInput>>,
  updateMany?: Maybe<Array<CaseReferralUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<CaseReferralScalarWhereInput>>,
  upsert?: Maybe<Array<CaseReferralUpsertWithWhereUniqueWithoutCaseIdInput>>,
};

export type CaseReferralUpdateManyWithWhereNestedInput = {
  where: CaseReferralScalarWhereInput,
  data: CaseReferralUpdateManyDataInput,
};

export type CaseReferralUpdateWithoutCaseIdDataInput = {
  tglTransfer?: Maybe<Scalars['DateTime']>,
  catatan?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  client?: Maybe<PersonUpdateOneRequiredInput>,
  network?: Maybe<NetworkUpdateOneInput>,
};

export type CaseReferralUpdateWithWhereUniqueWithoutCaseIdInput = {
  where: CaseReferralWhereUniqueInput,
  data: CaseReferralUpdateWithoutCaseIdDataInput,
};

export type CaseReferralUpsertWithWhereUniqueWithoutCaseIdInput = {
  where: CaseReferralWhereUniqueInput,
  update: CaseReferralUpdateWithoutCaseIdDataInput,
  create: CaseReferralCreateWithoutCaseIdInput,
};

export type CaseReferralWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseReferralWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseReferralWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseReferralWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  tglTransfer?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  tglTransfer_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  tglTransfer_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  tglTransfer_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  tglTransfer_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  tglTransfer_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  tglTransfer_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  tglTransfer_gte?: Maybe<Scalars['DateTime']>,
  catatan?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  catatan_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  catatan_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  catatan_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  catatan_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  catatan_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  catatan_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  catatan_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  catatan_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  catatan_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  catatan_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  catatan_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  catatan_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  catatan_not_ends_with?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  createdBy_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  createdBy_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  createdBy_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  createdBy_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  createdBy_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  createdBy_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  createdBy_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  createdBy_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  createdBy_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  createdBy_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  createdBy_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  createdBy_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  createdBy_not_ends_with?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  updatedBy_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  updatedBy_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  updatedBy_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  updatedBy_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  updatedBy_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  updatedBy_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  updatedBy_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  updatedBy_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  updatedBy_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  updatedBy_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  updatedBy_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  updatedBy_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  updatedBy_not_ends_with?: Maybe<Scalars['String']>,
  caseId?: Maybe<CaseWhereInput>,
  client?: Maybe<PersonWhereInput>,
  network?: Maybe<NetworkWhereInput>,
};

export type CaseReferralWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type CaseSubscriptionPayload = {
  mutation: MutationType,
  node?: Maybe<Case>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<CasePreviousValues>,
};

export type CaseSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<CaseWhereInput>,
};

export type CaseTransfer = {
  id: Scalars['Int'],
  caseId: Case,
  tglTransfer?: Maybe<Scalars['DateTime']>,
  catatan?: Maybe<Scalars['String']>,
  network?: Maybe<Network>,
  createdBy?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
};

/** A connection to a list of items. */
export type CaseTransferConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<CaseTransferEdge>>,
  aggregate: AggregateCaseTransfer,
};

export type CaseTransferCreateInput = {
  tglTransfer?: Maybe<Scalars['DateTime']>,
  catatan?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  caseId: CaseCreateOneWithoutTransferInput,
  network?: Maybe<NetworkCreateOneInput>,
};

export type CaseTransferCreateOneWithoutCaseIdInput = {
  create?: Maybe<CaseTransferCreateWithoutCaseIdInput>,
  connect?: Maybe<CaseTransferWhereUniqueInput>,
};

export type CaseTransferCreateWithoutCaseIdInput = {
  tglTransfer?: Maybe<Scalars['DateTime']>,
  catatan?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  network?: Maybe<NetworkCreateOneInput>,
};

/** An edge in a connection. */
export type CaseTransferEdge = {
  /** The item at the end of the edge. */
  node: CaseTransfer,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum CaseTransferOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TglTransferAsc = 'tglTransfer_ASC',
  TglTransferDesc = 'tglTransfer_DESC',
  CatatanAsc = 'catatan_ASC',
  CatatanDesc = 'catatan_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC'
}

export type CaseTransferPreviousValues = {
  id: Scalars['Int'],
  tglTransfer?: Maybe<Scalars['DateTime']>,
  catatan?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
};

export type CaseTransferReferral = {
  id: Scalars['Int'],
  caseId: Case,
  catatan?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  document?: Maybe<Scalars['String']>,
  jenisTransferReferral?: Maybe<Scalars['String']>,
  networkId?: Maybe<Scalars['Int']>,
  tglTransferReferral?: Maybe<Scalars['DateTime']>,
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
};

/** A connection to a list of items. */
export type CaseTransferReferralConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<CaseTransferReferralEdge>>,
  aggregate: AggregateCaseTransferReferral,
};

export type CaseTransferReferralCreateInput = {
  catatan?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  document?: Maybe<Scalars['String']>,
  jenisTransferReferral?: Maybe<Scalars['String']>,
  networkId?: Maybe<Scalars['Int']>,
  tglTransferReferral?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  caseId: CaseCreateOneWithoutTransferreferralsInput,
};

export type CaseTransferReferralCreateManyWithoutCaseIdInput = {
  create?: Maybe<Array<CaseTransferReferralCreateWithoutCaseIdInput>>,
  connect?: Maybe<Array<CaseTransferReferralWhereUniqueInput>>,
};

export type CaseTransferReferralCreateWithoutCaseIdInput = {
  catatan?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  document?: Maybe<Scalars['String']>,
  jenisTransferReferral?: Maybe<Scalars['String']>,
  networkId?: Maybe<Scalars['Int']>,
  tglTransferReferral?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
};

/** An edge in a connection. */
export type CaseTransferReferralEdge = {
  /** The item at the end of the edge. */
  node: CaseTransferReferral,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum CaseTransferReferralOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CatatanAsc = 'catatan_ASC',
  CatatanDesc = 'catatan_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  DocumentAsc = 'document_ASC',
  DocumentDesc = 'document_DESC',
  JenisTransferReferralAsc = 'jenisTransferReferral_ASC',
  JenisTransferReferralDesc = 'jenisTransferReferral_DESC',
  NetworkIdAsc = 'networkId_ASC',
  NetworkIdDesc = 'networkId_DESC',
  TglTransferReferralAsc = 'tglTransferReferral_ASC',
  TglTransferReferralDesc = 'tglTransferReferral_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC'
}

export type CaseTransferReferralPreviousValues = {
  id: Scalars['Int'],
  catatan?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  document?: Maybe<Scalars['String']>,
  jenisTransferReferral?: Maybe<Scalars['String']>,
  networkId?: Maybe<Scalars['Int']>,
  tglTransferReferral?: Maybe<Scalars['DateTime']>,
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
};

export type CaseTransferReferralScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseTransferReferralScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseTransferReferralScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseTransferReferralScalarWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  catatan?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  catatan_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  catatan_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  catatan_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  catatan_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  catatan_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  catatan_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  catatan_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  catatan_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  catatan_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  catatan_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  catatan_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  catatan_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  catatan_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  createdBy_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  createdBy_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  createdBy_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  createdBy_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  createdBy_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  createdBy_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  createdBy_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  createdBy_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  createdBy_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  createdBy_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  createdBy_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  createdBy_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  createdBy_not_ends_with?: Maybe<Scalars['String']>,
  document?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  document_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  document_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  document_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  document_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  document_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  document_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  document_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  document_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  document_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  document_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  document_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  document_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  document_not_ends_with?: Maybe<Scalars['String']>,
  jenisTransferReferral?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  jenisTransferReferral_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  jenisTransferReferral_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  jenisTransferReferral_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  jenisTransferReferral_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  jenisTransferReferral_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  jenisTransferReferral_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  jenisTransferReferral_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  jenisTransferReferral_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  jenisTransferReferral_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  jenisTransferReferral_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  jenisTransferReferral_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  jenisTransferReferral_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  jenisTransferReferral_not_ends_with?: Maybe<Scalars['String']>,
  networkId?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  networkId_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  networkId_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  networkId_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  networkId_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  networkId_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  networkId_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  networkId_gte?: Maybe<Scalars['Int']>,
  tglTransferReferral?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  tglTransferReferral_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  tglTransferReferral_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  tglTransferReferral_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  tglTransferReferral_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  tglTransferReferral_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  tglTransferReferral_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  tglTransferReferral_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  updatedBy_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  updatedBy_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  updatedBy_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  updatedBy_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  updatedBy_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  updatedBy_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  updatedBy_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  updatedBy_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  updatedBy_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  updatedBy_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  updatedBy_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  updatedBy_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  updatedBy_not_ends_with?: Maybe<Scalars['String']>,
};

export type CaseTransferReferralSubscriptionPayload = {
  mutation: MutationType,
  node?: Maybe<CaseTransferReferral>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<CaseTransferReferralPreviousValues>,
};

export type CaseTransferReferralSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseTransferReferralSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseTransferReferralSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseTransferReferralSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<CaseTransferReferralWhereInput>,
};

export type CaseTransferReferralUpdateInput = {
  catatan?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  document?: Maybe<Scalars['String']>,
  jenisTransferReferral?: Maybe<Scalars['String']>,
  networkId?: Maybe<Scalars['Int']>,
  tglTransferReferral?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  caseId?: Maybe<CaseUpdateOneRequiredWithoutTransferreferralsInput>,
};

export type CaseTransferReferralUpdateManyDataInput = {
  catatan?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  document?: Maybe<Scalars['String']>,
  jenisTransferReferral?: Maybe<Scalars['String']>,
  networkId?: Maybe<Scalars['Int']>,
  tglTransferReferral?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
};

export type CaseTransferReferralUpdateManyMutationInput = {
  catatan?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  document?: Maybe<Scalars['String']>,
  jenisTransferReferral?: Maybe<Scalars['String']>,
  networkId?: Maybe<Scalars['Int']>,
  tglTransferReferral?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
};

export type CaseTransferReferralUpdateManyWithoutCaseIdInput = {
  create?: Maybe<Array<CaseTransferReferralCreateWithoutCaseIdInput>>,
  connect?: Maybe<Array<CaseTransferReferralWhereUniqueInput>>,
  set?: Maybe<Array<CaseTransferReferralWhereUniqueInput>>,
  disconnect?: Maybe<Array<CaseTransferReferralWhereUniqueInput>>,
  delete?: Maybe<Array<CaseTransferReferralWhereUniqueInput>>,
  update?: Maybe<Array<CaseTransferReferralUpdateWithWhereUniqueWithoutCaseIdInput>>,
  updateMany?: Maybe<Array<CaseTransferReferralUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<CaseTransferReferralScalarWhereInput>>,
  upsert?: Maybe<Array<CaseTransferReferralUpsertWithWhereUniqueWithoutCaseIdInput>>,
};

export type CaseTransferReferralUpdateManyWithWhereNestedInput = {
  where: CaseTransferReferralScalarWhereInput,
  data: CaseTransferReferralUpdateManyDataInput,
};

export type CaseTransferReferralUpdateWithoutCaseIdDataInput = {
  catatan?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  document?: Maybe<Scalars['String']>,
  jenisTransferReferral?: Maybe<Scalars['String']>,
  networkId?: Maybe<Scalars['Int']>,
  tglTransferReferral?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
};

export type CaseTransferReferralUpdateWithWhereUniqueWithoutCaseIdInput = {
  where: CaseTransferReferralWhereUniqueInput,
  data: CaseTransferReferralUpdateWithoutCaseIdDataInput,
};

export type CaseTransferReferralUpsertWithWhereUniqueWithoutCaseIdInput = {
  where: CaseTransferReferralWhereUniqueInput,
  update: CaseTransferReferralUpdateWithoutCaseIdDataInput,
  create: CaseTransferReferralCreateWithoutCaseIdInput,
};

export type CaseTransferReferralWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseTransferReferralWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseTransferReferralWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseTransferReferralWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  catatan?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  catatan_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  catatan_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  catatan_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  catatan_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  catatan_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  catatan_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  catatan_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  catatan_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  catatan_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  catatan_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  catatan_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  catatan_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  catatan_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  createdBy_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  createdBy_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  createdBy_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  createdBy_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  createdBy_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  createdBy_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  createdBy_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  createdBy_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  createdBy_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  createdBy_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  createdBy_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  createdBy_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  createdBy_not_ends_with?: Maybe<Scalars['String']>,
  document?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  document_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  document_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  document_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  document_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  document_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  document_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  document_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  document_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  document_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  document_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  document_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  document_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  document_not_ends_with?: Maybe<Scalars['String']>,
  jenisTransferReferral?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  jenisTransferReferral_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  jenisTransferReferral_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  jenisTransferReferral_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  jenisTransferReferral_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  jenisTransferReferral_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  jenisTransferReferral_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  jenisTransferReferral_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  jenisTransferReferral_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  jenisTransferReferral_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  jenisTransferReferral_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  jenisTransferReferral_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  jenisTransferReferral_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  jenisTransferReferral_not_ends_with?: Maybe<Scalars['String']>,
  networkId?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  networkId_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  networkId_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  networkId_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  networkId_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  networkId_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  networkId_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  networkId_gte?: Maybe<Scalars['Int']>,
  tglTransferReferral?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  tglTransferReferral_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  tglTransferReferral_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  tglTransferReferral_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  tglTransferReferral_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  tglTransferReferral_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  tglTransferReferral_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  tglTransferReferral_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  updatedBy_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  updatedBy_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  updatedBy_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  updatedBy_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  updatedBy_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  updatedBy_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  updatedBy_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  updatedBy_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  updatedBy_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  updatedBy_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  updatedBy_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  updatedBy_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  updatedBy_not_ends_with?: Maybe<Scalars['String']>,
  caseId?: Maybe<CaseWhereInput>,
};

export type CaseTransferReferralWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type CaseTransferSubscriptionPayload = {
  mutation: MutationType,
  node?: Maybe<CaseTransfer>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<CaseTransferPreviousValues>,
};

export type CaseTransferSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseTransferSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseTransferSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseTransferSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<CaseTransferWhereInput>,
};

export type CaseTransferUpdateInput = {
  tglTransfer?: Maybe<Scalars['DateTime']>,
  catatan?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  caseId?: Maybe<CaseUpdateOneRequiredWithoutTransferInput>,
  network?: Maybe<NetworkUpdateOneInput>,
};

export type CaseTransferUpdateManyMutationInput = {
  tglTransfer?: Maybe<Scalars['DateTime']>,
  catatan?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
};

export type CaseTransferUpdateOneWithoutCaseIdInput = {
  create?: Maybe<CaseTransferCreateWithoutCaseIdInput>,
  connect?: Maybe<CaseTransferWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<CaseTransferUpdateWithoutCaseIdDataInput>,
  upsert?: Maybe<CaseTransferUpsertWithoutCaseIdInput>,
};

export type CaseTransferUpdateWithoutCaseIdDataInput = {
  tglTransfer?: Maybe<Scalars['DateTime']>,
  catatan?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  network?: Maybe<NetworkUpdateOneInput>,
};

export type CaseTransferUpsertWithoutCaseIdInput = {
  update: CaseTransferUpdateWithoutCaseIdDataInput,
  create: CaseTransferCreateWithoutCaseIdInput,
};

export type CaseTransferWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseTransferWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseTransferWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseTransferWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  tglTransfer?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  tglTransfer_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  tglTransfer_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  tglTransfer_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  tglTransfer_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  tglTransfer_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  tglTransfer_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  tglTransfer_gte?: Maybe<Scalars['DateTime']>,
  catatan?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  catatan_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  catatan_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  catatan_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  catatan_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  catatan_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  catatan_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  catatan_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  catatan_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  catatan_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  catatan_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  catatan_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  catatan_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  catatan_not_ends_with?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  createdBy_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  createdBy_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  createdBy_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  createdBy_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  createdBy_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  createdBy_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  createdBy_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  createdBy_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  createdBy_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  createdBy_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  createdBy_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  createdBy_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  createdBy_not_ends_with?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  updatedBy_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  updatedBy_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  updatedBy_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  updatedBy_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  updatedBy_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  updatedBy_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  updatedBy_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  updatedBy_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  updatedBy_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  updatedBy_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  updatedBy_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  updatedBy_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  updatedBy_not_ends_with?: Maybe<Scalars['String']>,
  caseId?: Maybe<CaseWhereInput>,
  network?: Maybe<NetworkWhereInput>,
};

export type CaseTransferWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type CaseUpdateInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed?: Maybe<Scalars['Boolean']>,
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak?: Maybe<Scalars['Boolean']>,
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk?: Maybe<Scalars['Boolean']>,
  unlockTransfer?: Maybe<Scalars['Boolean']>,
  updatedBy?: Maybe<Scalars['String']>,
  application?: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>,
  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>,
  pk?: Maybe<CasePkUpdateOneWithoutCaseIdInput>,
  progresses?: Maybe<CaseProgressUpdateOneWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestUpdateManyWithoutCaseIdInput>,
  transfer?: Maybe<CaseTransferUpdateOneWithoutCaseIdInput>,
  referrals?: Maybe<CaseReferralUpdateManyWithoutCaseIdInput>,
};

export type CaseUpdateManyMutationInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed?: Maybe<Scalars['Boolean']>,
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak?: Maybe<Scalars['Boolean']>,
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk?: Maybe<Scalars['Boolean']>,
  unlockTransfer?: Maybe<Scalars['Boolean']>,
  updatedBy?: Maybe<Scalars['String']>,
};

export type CaseUpdateOneRequiredWithoutActivitiesInput = {
  create?: Maybe<CaseCreateWithoutActivitiesInput>,
  connect?: Maybe<CaseWhereUniqueInput>,
  update?: Maybe<CaseUpdateWithoutActivitiesDataInput>,
  upsert?: Maybe<CaseUpsertWithoutActivitiesInput>,
};

export type CaseUpdateOneRequiredWithoutClassificationsInput = {
  create?: Maybe<CaseCreateWithoutClassificationsInput>,
  connect?: Maybe<CaseWhereUniqueInput>,
  update?: Maybe<CaseUpdateWithoutClassificationsDataInput>,
  upsert?: Maybe<CaseUpsertWithoutClassificationsInput>,
};

export type CaseUpdateOneRequiredWithoutConsultationsInput = {
  create?: Maybe<CaseCreateWithoutConsultationsInput>,
  connect?: Maybe<CaseWhereUniqueInput>,
  update?: Maybe<CaseUpdateWithoutConsultationsDataInput>,
  upsert?: Maybe<CaseUpsertWithoutConsultationsInput>,
};

export type CaseUpdateOneRequiredWithoutDocumentsInput = {
  create?: Maybe<CaseCreateWithoutDocumentsInput>,
  connect?: Maybe<CaseWhereUniqueInput>,
  update?: Maybe<CaseUpdateWithoutDocumentsDataInput>,
  upsert?: Maybe<CaseUpsertWithoutDocumentsInput>,
};

export type CaseUpdateOneRequiredWithoutIssuesInput = {
  create?: Maybe<CaseCreateWithoutIssuesInput>,
  connect?: Maybe<CaseWhereUniqueInput>,
  update?: Maybe<CaseUpdateWithoutIssuesDataInput>,
  upsert?: Maybe<CaseUpsertWithoutIssuesInput>,
};

export type CaseUpdateOneRequiredWithoutKorbansInput = {
  create?: Maybe<CaseCreateWithoutKorbansInput>,
  connect?: Maybe<CaseWhereUniqueInput>,
  update?: Maybe<CaseUpdateWithoutKorbansDataInput>,
  upsert?: Maybe<CaseUpsertWithoutKorbansInput>,
};

export type CaseUpdateOneRequiredWithoutPelakusInput = {
  create?: Maybe<CaseCreateWithoutPelakusInput>,
  connect?: Maybe<CaseWhereUniqueInput>,
  update?: Maybe<CaseUpdateWithoutPelakusDataInput>,
  upsert?: Maybe<CaseUpsertWithoutPelakusInput>,
};

export type CaseUpdateOneRequiredWithoutPkInput = {
  create?: Maybe<CaseCreateWithoutPkInput>,
  connect?: Maybe<CaseWhereUniqueInput>,
  update?: Maybe<CaseUpdateWithoutPkDataInput>,
  upsert?: Maybe<CaseUpsertWithoutPkInput>,
};

export type CaseUpdateOneRequiredWithoutProgressesInput = {
  create?: Maybe<CaseCreateWithoutProgressesInput>,
  connect?: Maybe<CaseWhereUniqueInput>,
  update?: Maybe<CaseUpdateWithoutProgressesDataInput>,
  upsert?: Maybe<CaseUpsertWithoutProgressesInput>,
};

export type CaseUpdateOneRequiredWithoutReferralsInput = {
  create?: Maybe<CaseCreateWithoutReferralsInput>,
  connect?: Maybe<CaseWhereUniqueInput>,
  update?: Maybe<CaseUpdateWithoutReferralsDataInput>,
  upsert?: Maybe<CaseUpsertWithoutReferralsInput>,
};

export type CaseUpdateOneRequiredWithoutTransferInput = {
  create?: Maybe<CaseCreateWithoutTransferInput>,
  connect?: Maybe<CaseWhereUniqueInput>,
  update?: Maybe<CaseUpdateWithoutTransferDataInput>,
  upsert?: Maybe<CaseUpsertWithoutTransferInput>,
};

export type CaseUpdateOneRequiredWithoutTransferreferralsInput = {
  create?: Maybe<CaseCreateWithoutTransferreferralsInput>,
  connect?: Maybe<CaseWhereUniqueInput>,
  update?: Maybe<CaseUpdateWithoutTransferreferralsDataInput>,
  upsert?: Maybe<CaseUpsertWithoutTransferreferralsInput>,
};

export type CaseUpdateOneRequiredWithoutViolatedrightsInput = {
  create?: Maybe<CaseCreateWithoutViolatedrightsInput>,
  connect?: Maybe<CaseWhereUniqueInput>,
  update?: Maybe<CaseUpdateWithoutViolatedrightsDataInput>,
  upsert?: Maybe<CaseUpsertWithoutViolatedrightsInput>,
};

export type CaseUpdateOneWithoutApplicationInput = {
  create?: Maybe<CaseCreateWithoutApplicationInput>,
  connect?: Maybe<CaseWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<CaseUpdateWithoutApplicationDataInput>,
  upsert?: Maybe<CaseUpsertWithoutApplicationInput>,
};

export type CaseUpdateOneWithoutLogRequestsInput = {
  create?: Maybe<CaseCreateWithoutLogRequestsInput>,
  connect?: Maybe<CaseWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<CaseUpdateWithoutLogRequestsDataInput>,
  upsert?: Maybe<CaseUpsertWithoutLogRequestsInput>,
};

export type CaseUpdateWithoutActivitiesDataInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed?: Maybe<Scalars['Boolean']>,
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak?: Maybe<Scalars['Boolean']>,
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk?: Maybe<Scalars['Boolean']>,
  unlockTransfer?: Maybe<Scalars['Boolean']>,
  updatedBy?: Maybe<Scalars['String']>,
  application?: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>,
  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>,
  pk?: Maybe<CasePkUpdateOneWithoutCaseIdInput>,
  progresses?: Maybe<CaseProgressUpdateOneWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestUpdateManyWithoutCaseIdInput>,
  transfer?: Maybe<CaseTransferUpdateOneWithoutCaseIdInput>,
  referrals?: Maybe<CaseReferralUpdateManyWithoutCaseIdInput>,
};

export type CaseUpdateWithoutApplicationDataInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed?: Maybe<Scalars['Boolean']>,
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak?: Maybe<Scalars['Boolean']>,
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk?: Maybe<Scalars['Boolean']>,
  unlockTransfer?: Maybe<Scalars['Boolean']>,
  updatedBy?: Maybe<Scalars['String']>,
  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>,
  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>,
  pk?: Maybe<CasePkUpdateOneWithoutCaseIdInput>,
  progresses?: Maybe<CaseProgressUpdateOneWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestUpdateManyWithoutCaseIdInput>,
  transfer?: Maybe<CaseTransferUpdateOneWithoutCaseIdInput>,
  referrals?: Maybe<CaseReferralUpdateManyWithoutCaseIdInput>,
};

export type CaseUpdateWithoutClassificationsDataInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed?: Maybe<Scalars['Boolean']>,
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak?: Maybe<Scalars['Boolean']>,
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk?: Maybe<Scalars['Boolean']>,
  unlockTransfer?: Maybe<Scalars['Boolean']>,
  updatedBy?: Maybe<Scalars['String']>,
  application?: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>,
  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>,
  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>,
  pk?: Maybe<CasePkUpdateOneWithoutCaseIdInput>,
  progresses?: Maybe<CaseProgressUpdateOneWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestUpdateManyWithoutCaseIdInput>,
  transfer?: Maybe<CaseTransferUpdateOneWithoutCaseIdInput>,
  referrals?: Maybe<CaseReferralUpdateManyWithoutCaseIdInput>,
};

export type CaseUpdateWithoutConsultationsDataInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed?: Maybe<Scalars['Boolean']>,
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak?: Maybe<Scalars['Boolean']>,
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk?: Maybe<Scalars['Boolean']>,
  unlockTransfer?: Maybe<Scalars['Boolean']>,
  updatedBy?: Maybe<Scalars['String']>,
  application?: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>,
  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>,
  pk?: Maybe<CasePkUpdateOneWithoutCaseIdInput>,
  progresses?: Maybe<CaseProgressUpdateOneWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestUpdateManyWithoutCaseIdInput>,
  transfer?: Maybe<CaseTransferUpdateOneWithoutCaseIdInput>,
  referrals?: Maybe<CaseReferralUpdateManyWithoutCaseIdInput>,
};

export type CaseUpdateWithoutDocumentsDataInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed?: Maybe<Scalars['Boolean']>,
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak?: Maybe<Scalars['Boolean']>,
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk?: Maybe<Scalars['Boolean']>,
  unlockTransfer?: Maybe<Scalars['Boolean']>,
  updatedBy?: Maybe<Scalars['String']>,
  application?: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>,
  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>,
  pk?: Maybe<CasePkUpdateOneWithoutCaseIdInput>,
  progresses?: Maybe<CaseProgressUpdateOneWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestUpdateManyWithoutCaseIdInput>,
  transfer?: Maybe<CaseTransferUpdateOneWithoutCaseIdInput>,
  referrals?: Maybe<CaseReferralUpdateManyWithoutCaseIdInput>,
};

export type CaseUpdateWithoutIssuesDataInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed?: Maybe<Scalars['Boolean']>,
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak?: Maybe<Scalars['Boolean']>,
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk?: Maybe<Scalars['Boolean']>,
  unlockTransfer?: Maybe<Scalars['Boolean']>,
  updatedBy?: Maybe<Scalars['String']>,
  application?: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>,
  pk?: Maybe<CasePkUpdateOneWithoutCaseIdInput>,
  progresses?: Maybe<CaseProgressUpdateOneWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestUpdateManyWithoutCaseIdInput>,
  transfer?: Maybe<CaseTransferUpdateOneWithoutCaseIdInput>,
  referrals?: Maybe<CaseReferralUpdateManyWithoutCaseIdInput>,
};

export type CaseUpdateWithoutKorbansDataInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed?: Maybe<Scalars['Boolean']>,
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak?: Maybe<Scalars['Boolean']>,
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk?: Maybe<Scalars['Boolean']>,
  unlockTransfer?: Maybe<Scalars['Boolean']>,
  updatedBy?: Maybe<Scalars['String']>,
  application?: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>,
  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>,
  pk?: Maybe<CasePkUpdateOneWithoutCaseIdInput>,
  progresses?: Maybe<CaseProgressUpdateOneWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestUpdateManyWithoutCaseIdInput>,
  transfer?: Maybe<CaseTransferUpdateOneWithoutCaseIdInput>,
  referrals?: Maybe<CaseReferralUpdateManyWithoutCaseIdInput>,
};

export type CaseUpdateWithoutLogRequestsDataInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed?: Maybe<Scalars['Boolean']>,
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak?: Maybe<Scalars['Boolean']>,
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk?: Maybe<Scalars['Boolean']>,
  unlockTransfer?: Maybe<Scalars['Boolean']>,
  updatedBy?: Maybe<Scalars['String']>,
  application?: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>,
  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>,
  pk?: Maybe<CasePkUpdateOneWithoutCaseIdInput>,
  progresses?: Maybe<CaseProgressUpdateOneWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>,
  transfer?: Maybe<CaseTransferUpdateOneWithoutCaseIdInput>,
  referrals?: Maybe<CaseReferralUpdateManyWithoutCaseIdInput>,
};

export type CaseUpdateWithoutPelakusDataInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed?: Maybe<Scalars['Boolean']>,
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak?: Maybe<Scalars['Boolean']>,
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk?: Maybe<Scalars['Boolean']>,
  unlockTransfer?: Maybe<Scalars['Boolean']>,
  updatedBy?: Maybe<Scalars['String']>,
  application?: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>,
  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>,
  pk?: Maybe<CasePkUpdateOneWithoutCaseIdInput>,
  progresses?: Maybe<CaseProgressUpdateOneWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestUpdateManyWithoutCaseIdInput>,
  transfer?: Maybe<CaseTransferUpdateOneWithoutCaseIdInput>,
  referrals?: Maybe<CaseReferralUpdateManyWithoutCaseIdInput>,
};

export type CaseUpdateWithoutPkDataInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed?: Maybe<Scalars['Boolean']>,
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak?: Maybe<Scalars['Boolean']>,
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk?: Maybe<Scalars['Boolean']>,
  unlockTransfer?: Maybe<Scalars['Boolean']>,
  updatedBy?: Maybe<Scalars['String']>,
  application?: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>,
  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>,
  progresses?: Maybe<CaseProgressUpdateOneWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestUpdateManyWithoutCaseIdInput>,
  transfer?: Maybe<CaseTransferUpdateOneWithoutCaseIdInput>,
  referrals?: Maybe<CaseReferralUpdateManyWithoutCaseIdInput>,
};

export type CaseUpdateWithoutProgressesDataInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed?: Maybe<Scalars['Boolean']>,
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak?: Maybe<Scalars['Boolean']>,
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk?: Maybe<Scalars['Boolean']>,
  unlockTransfer?: Maybe<Scalars['Boolean']>,
  updatedBy?: Maybe<Scalars['String']>,
  application?: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>,
  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>,
  pk?: Maybe<CasePkUpdateOneWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestUpdateManyWithoutCaseIdInput>,
  transfer?: Maybe<CaseTransferUpdateOneWithoutCaseIdInput>,
  referrals?: Maybe<CaseReferralUpdateManyWithoutCaseIdInput>,
};

export type CaseUpdateWithoutReferralsDataInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed?: Maybe<Scalars['Boolean']>,
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak?: Maybe<Scalars['Boolean']>,
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk?: Maybe<Scalars['Boolean']>,
  unlockTransfer?: Maybe<Scalars['Boolean']>,
  updatedBy?: Maybe<Scalars['String']>,
  application?: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>,
  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>,
  pk?: Maybe<CasePkUpdateOneWithoutCaseIdInput>,
  progresses?: Maybe<CaseProgressUpdateOneWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestUpdateManyWithoutCaseIdInput>,
  transfer?: Maybe<CaseTransferUpdateOneWithoutCaseIdInput>,
};

export type CaseUpdateWithoutTransferDataInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed?: Maybe<Scalars['Boolean']>,
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak?: Maybe<Scalars['Boolean']>,
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk?: Maybe<Scalars['Boolean']>,
  unlockTransfer?: Maybe<Scalars['Boolean']>,
  updatedBy?: Maybe<Scalars['String']>,
  application?: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>,
  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>,
  pk?: Maybe<CasePkUpdateOneWithoutCaseIdInput>,
  progresses?: Maybe<CaseProgressUpdateOneWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestUpdateManyWithoutCaseIdInput>,
  referrals?: Maybe<CaseReferralUpdateManyWithoutCaseIdInput>,
};

export type CaseUpdateWithoutTransferreferralsDataInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed?: Maybe<Scalars['Boolean']>,
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak?: Maybe<Scalars['Boolean']>,
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk?: Maybe<Scalars['Boolean']>,
  unlockTransfer?: Maybe<Scalars['Boolean']>,
  updatedBy?: Maybe<Scalars['String']>,
  application?: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>,
  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>,
  pk?: Maybe<CasePkUpdateOneWithoutCaseIdInput>,
  progresses?: Maybe<CaseProgressUpdateOneWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestUpdateManyWithoutCaseIdInput>,
  transfer?: Maybe<CaseTransferUpdateOneWithoutCaseIdInput>,
  referrals?: Maybe<CaseReferralUpdateManyWithoutCaseIdInput>,
};

export type CaseUpdateWithoutViolatedrightsDataInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed?: Maybe<Scalars['Boolean']>,
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak?: Maybe<Scalars['Boolean']>,
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk?: Maybe<Scalars['Boolean']>,
  unlockTransfer?: Maybe<Scalars['Boolean']>,
  updatedBy?: Maybe<Scalars['String']>,
  application?: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>,
  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>,
  pk?: Maybe<CasePkUpdateOneWithoutCaseIdInput>,
  progresses?: Maybe<CaseProgressUpdateOneWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestUpdateManyWithoutCaseIdInput>,
  transfer?: Maybe<CaseTransferUpdateOneWithoutCaseIdInput>,
  referrals?: Maybe<CaseReferralUpdateManyWithoutCaseIdInput>,
};

export type CaseUpsertWithoutActivitiesInput = {
  update: CaseUpdateWithoutActivitiesDataInput,
  create: CaseCreateWithoutActivitiesInput,
};

export type CaseUpsertWithoutApplicationInput = {
  update: CaseUpdateWithoutApplicationDataInput,
  create: CaseCreateWithoutApplicationInput,
};

export type CaseUpsertWithoutClassificationsInput = {
  update: CaseUpdateWithoutClassificationsDataInput,
  create: CaseCreateWithoutClassificationsInput,
};

export type CaseUpsertWithoutConsultationsInput = {
  update: CaseUpdateWithoutConsultationsDataInput,
  create: CaseCreateWithoutConsultationsInput,
};

export type CaseUpsertWithoutDocumentsInput = {
  update: CaseUpdateWithoutDocumentsDataInput,
  create: CaseCreateWithoutDocumentsInput,
};

export type CaseUpsertWithoutIssuesInput = {
  update: CaseUpdateWithoutIssuesDataInput,
  create: CaseCreateWithoutIssuesInput,
};

export type CaseUpsertWithoutKorbansInput = {
  update: CaseUpdateWithoutKorbansDataInput,
  create: CaseCreateWithoutKorbansInput,
};

export type CaseUpsertWithoutLogRequestsInput = {
  update: CaseUpdateWithoutLogRequestsDataInput,
  create: CaseCreateWithoutLogRequestsInput,
};

export type CaseUpsertWithoutPelakusInput = {
  update: CaseUpdateWithoutPelakusDataInput,
  create: CaseCreateWithoutPelakusInput,
};

export type CaseUpsertWithoutPkInput = {
  update: CaseUpdateWithoutPkDataInput,
  create: CaseCreateWithoutPkInput,
};

export type CaseUpsertWithoutProgressesInput = {
  update: CaseUpdateWithoutProgressesDataInput,
  create: CaseCreateWithoutProgressesInput,
};

export type CaseUpsertWithoutReferralsInput = {
  update: CaseUpdateWithoutReferralsDataInput,
  create: CaseCreateWithoutReferralsInput,
};

export type CaseUpsertWithoutTransferInput = {
  update: CaseUpdateWithoutTransferDataInput,
  create: CaseCreateWithoutTransferInput,
};

export type CaseUpsertWithoutTransferreferralsInput = {
  update: CaseUpdateWithoutTransferreferralsDataInput,
  create: CaseCreateWithoutTransferreferralsInput,
};

export type CaseUpsertWithoutViolatedrightsInput = {
  update: CaseUpdateWithoutViolatedrightsDataInput,
  create: CaseCreateWithoutViolatedrightsInput,
};

export type CaseViolatedRight = {
  id: Scalars['Int'],
  caseId: Case,
  kodeMt?: Maybe<Scalars['String']>,
};

/** A connection to a list of items. */
export type CaseViolatedRightConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<CaseViolatedRightEdge>>,
  aggregate: AggregateCaseViolatedRight,
};

export type CaseViolatedRightCreateInput = {
  kodeMt?: Maybe<Scalars['String']>,
  caseId: CaseCreateOneWithoutViolatedrightsInput,
};

export type CaseViolatedRightCreateManyWithoutCaseIdInput = {
  create?: Maybe<Array<CaseViolatedRightCreateWithoutCaseIdInput>>,
  connect?: Maybe<Array<CaseViolatedRightWhereUniqueInput>>,
};

export type CaseViolatedRightCreateWithoutCaseIdInput = {
  kodeMt?: Maybe<Scalars['String']>,
};

/** An edge in a connection. */
export type CaseViolatedRightEdge = {
  /** The item at the end of the edge. */
  node: CaseViolatedRight,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum CaseViolatedRightOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  KodeMtAsc = 'kodeMt_ASC',
  KodeMtDesc = 'kodeMt_DESC'
}

export type CaseViolatedRightPreviousValues = {
  id: Scalars['Int'],
  kodeMt?: Maybe<Scalars['String']>,
};

export type CaseViolatedRightScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseViolatedRightScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseViolatedRightScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseViolatedRightScalarWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  kodeMt?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  kodeMt_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  kodeMt_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  kodeMt_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  kodeMt_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  kodeMt_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  kodeMt_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  kodeMt_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  kodeMt_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  kodeMt_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  kodeMt_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  kodeMt_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  kodeMt_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  kodeMt_not_ends_with?: Maybe<Scalars['String']>,
};

export type CaseViolatedRightSubscriptionPayload = {
  mutation: MutationType,
  node?: Maybe<CaseViolatedRight>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<CaseViolatedRightPreviousValues>,
};

export type CaseViolatedRightSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseViolatedRightSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseViolatedRightSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseViolatedRightSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<CaseViolatedRightWhereInput>,
};

export type CaseViolatedRightUpdateInput = {
  kodeMt?: Maybe<Scalars['String']>,
  caseId?: Maybe<CaseUpdateOneRequiredWithoutViolatedrightsInput>,
};

export type CaseViolatedRightUpdateManyDataInput = {
  kodeMt?: Maybe<Scalars['String']>,
};

export type CaseViolatedRightUpdateManyMutationInput = {
  kodeMt?: Maybe<Scalars['String']>,
};

export type CaseViolatedRightUpdateManyWithoutCaseIdInput = {
  create?: Maybe<Array<CaseViolatedRightCreateWithoutCaseIdInput>>,
  connect?: Maybe<Array<CaseViolatedRightWhereUniqueInput>>,
  set?: Maybe<Array<CaseViolatedRightWhereUniqueInput>>,
  disconnect?: Maybe<Array<CaseViolatedRightWhereUniqueInput>>,
  delete?: Maybe<Array<CaseViolatedRightWhereUniqueInput>>,
  update?: Maybe<Array<CaseViolatedRightUpdateWithWhereUniqueWithoutCaseIdInput>>,
  updateMany?: Maybe<Array<CaseViolatedRightUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<CaseViolatedRightScalarWhereInput>>,
  upsert?: Maybe<Array<CaseViolatedRightUpsertWithWhereUniqueWithoutCaseIdInput>>,
};

export type CaseViolatedRightUpdateManyWithWhereNestedInput = {
  where: CaseViolatedRightScalarWhereInput,
  data: CaseViolatedRightUpdateManyDataInput,
};

export type CaseViolatedRightUpdateWithoutCaseIdDataInput = {
  kodeMt?: Maybe<Scalars['String']>,
};

export type CaseViolatedRightUpdateWithWhereUniqueWithoutCaseIdInput = {
  where: CaseViolatedRightWhereUniqueInput,
  data: CaseViolatedRightUpdateWithoutCaseIdDataInput,
};

export type CaseViolatedRightUpsertWithWhereUniqueWithoutCaseIdInput = {
  where: CaseViolatedRightWhereUniqueInput,
  update: CaseViolatedRightUpdateWithoutCaseIdDataInput,
  create: CaseViolatedRightCreateWithoutCaseIdInput,
};

export type CaseViolatedRightWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseViolatedRightWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseViolatedRightWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseViolatedRightWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  kodeMt?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  kodeMt_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  kodeMt_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  kodeMt_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  kodeMt_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  kodeMt_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  kodeMt_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  kodeMt_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  kodeMt_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  kodeMt_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  kodeMt_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  kodeMt_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  kodeMt_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  kodeMt_not_ends_with?: Maybe<Scalars['String']>,
  caseId?: Maybe<CaseWhereInput>,
};

export type CaseViolatedRightWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type CaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CaseWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CaseWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CaseWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  applicationId?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  applicationId_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  applicationId_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  applicationId_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  applicationId_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  applicationId_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  applicationId_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  applicationId_gte?: Maybe<Scalars['Int']>,
  caseClosed?: Maybe<Scalars['Boolean']>,
  /** All values that are not equal to given value. */
  caseClosed_not?: Maybe<Scalars['Boolean']>,
  caseClosedJenis?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  caseClosedJenis_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  caseClosedJenis_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  caseClosedJenis_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  caseClosedJenis_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  caseClosedJenis_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  caseClosedJenis_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  caseClosedJenis_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  caseClosedJenis_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  caseClosedJenis_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  caseClosedJenis_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  caseClosedJenis_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  caseClosedJenis_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  caseClosedJenis_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  createdBy_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  createdBy_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  createdBy_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  createdBy_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  createdBy_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  createdBy_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  createdBy_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  createdBy_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  createdBy_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  createdBy_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  createdBy_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  createdBy_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  createdBy_not_ends_with?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  hakTerlanggar_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  hakTerlanggar_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  hakTerlanggar_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  hakTerlanggar_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  hakTerlanggar_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  hakTerlanggar_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  hakTerlanggar_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  hakTerlanggar_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  hakTerlanggar_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  hakTerlanggar_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  hakTerlanggar_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  hakTerlanggar_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  hakTerlanggar_not_ends_with?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  issue_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  issue_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  issue_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  issue_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  issue_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  issue_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  issue_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  issue_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  issue_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  issue_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  issue_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  issue_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  issue_not_ends_with?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  judulKasus_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  judulKasus_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  judulKasus_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  judulKasus_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  judulKasus_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  judulKasus_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  judulKasus_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  judulKasus_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  judulKasus_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  judulKasus_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  judulKasus_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  judulKasus_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  judulKasus_not_ends_with?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  klasifikasiDok_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  klasifikasiDok_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  klasifikasiDok_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  klasifikasiDok_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  klasifikasiDok_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  klasifikasiDok_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  klasifikasiDok_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  klasifikasiDok_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  klasifikasiDok_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  klasifikasiDok_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  klasifikasiDok_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  klasifikasiDok_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  klasifikasiDok_not_ends_with?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  kronologiKasus_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  kronologiKasus_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  kronologiKasus_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  kronologiKasus_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  kronologiKasus_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  kronologiKasus_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  kronologiKasus_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  kronologiKasus_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  kronologiKasus_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  kronologiKasus_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  kronologiKasus_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  kronologiKasus_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  kronologiKasus_not_ends_with?: Maybe<Scalars['String']>,
  lockDitolak?: Maybe<Scalars['Boolean']>,
  /** All values that are not equal to given value. */
  lockDitolak_not?: Maybe<Scalars['Boolean']>,
  statusPendampingan?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  statusPendampingan_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  statusPendampingan_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  statusPendampingan_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  statusPendampingan_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  statusPendampingan_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  statusPendampingan_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  statusPendampingan_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  statusPendampingan_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  statusPendampingan_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  statusPendampingan_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  statusPendampingan_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  statusPendampingan_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  statusPendampingan_not_ends_with?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  targetAdvokasi_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  targetAdvokasi_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  targetAdvokasi_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  targetAdvokasi_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  targetAdvokasi_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  targetAdvokasi_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  targetAdvokasi_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  targetAdvokasi_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  targetAdvokasi_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  targetAdvokasi_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  targetAdvokasi_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  targetAdvokasi_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  targetAdvokasi_not_ends_with?: Maybe<Scalars['String']>,
  unlockPk?: Maybe<Scalars['Boolean']>,
  /** All values that are not equal to given value. */
  unlockPk_not?: Maybe<Scalars['Boolean']>,
  unlockTransfer?: Maybe<Scalars['Boolean']>,
  /** All values that are not equal to given value. */
  unlockTransfer_not?: Maybe<Scalars['Boolean']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  updatedBy_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  updatedBy_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  updatedBy_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  updatedBy_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  updatedBy_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  updatedBy_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  updatedBy_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  updatedBy_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  updatedBy_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  updatedBy_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  updatedBy_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  updatedBy_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  updatedBy_not_ends_with?: Maybe<Scalars['String']>,
  application?: Maybe<ApplicationWhereInput>,
  classifications_every?: Maybe<CaseClassificationWhereInput>,
  classifications_some?: Maybe<CaseClassificationWhereInput>,
  classifications_none?: Maybe<CaseClassificationWhereInput>,
  consultations_every?: Maybe<CaseConsultationWhereInput>,
  consultations_some?: Maybe<CaseConsultationWhereInput>,
  consultations_none?: Maybe<CaseConsultationWhereInput>,
  documents_every?: Maybe<CaseDocumentWhereInput>,
  documents_some?: Maybe<CaseDocumentWhereInput>,
  documents_none?: Maybe<CaseDocumentWhereInput>,
  issues_every?: Maybe<CaseIssueWhereInput>,
  issues_some?: Maybe<CaseIssueWhereInput>,
  issues_none?: Maybe<CaseIssueWhereInput>,
  korbans_every?: Maybe<CaseKorbanWhereInput>,
  korbans_some?: Maybe<CaseKorbanWhereInput>,
  korbans_none?: Maybe<CaseKorbanWhereInput>,
  pelakus_every?: Maybe<CasePelakuWhereInput>,
  pelakus_some?: Maybe<CasePelakuWhereInput>,
  pelakus_none?: Maybe<CasePelakuWhereInput>,
  pk?: Maybe<CasePkWhereInput>,
  progresses?: Maybe<CaseProgressWhereInput>,
  activities_every?: Maybe<CaseProgressActivityWhereInput>,
  activities_some?: Maybe<CaseProgressActivityWhereInput>,
  activities_none?: Maybe<CaseProgressActivityWhereInput>,
  transferreferrals_every?: Maybe<CaseTransferReferralWhereInput>,
  transferreferrals_some?: Maybe<CaseTransferReferralWhereInput>,
  transferreferrals_none?: Maybe<CaseTransferReferralWhereInput>,
  violatedrights_every?: Maybe<CaseViolatedRightWhereInput>,
  violatedrights_some?: Maybe<CaseViolatedRightWhereInput>,
  violatedrights_none?: Maybe<CaseViolatedRightWhereInput>,
  logRequests_every?: Maybe<LogRequestWhereInput>,
  logRequests_some?: Maybe<LogRequestWhereInput>,
  logRequests_none?: Maybe<LogRequestWhereInput>,
  transfer?: Maybe<CaseTransferWhereInput>,
  referrals_every?: Maybe<CaseReferralWhereInput>,
  referrals_some?: Maybe<CaseReferralWhereInput>,
  referrals_none?: Maybe<CaseReferralWhereInput>,
};

export type CaseWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type Client = {
  id: Scalars['Int'],
  alamatLokasi?: Maybe<Scalars['String']>,
  applicationId: Application,
  asetGedung?: Maybe<Scalars['String']>,
  asetKios?: Maybe<Scalars['String']>,
  asetLahanGarapan?: Maybe<Scalars['String']>,
  asetLapak?: Maybe<Scalars['String']>,
  asetMobil?: Maybe<Scalars['String']>,
  asetMotor?: Maybe<Scalars['String']>,
  asetRumah?: Maybe<Scalars['String']>,
  asetTanah?: Maybe<Scalars['String']>,
  asetToko?: Maybe<Scalars['String']>,
  asetWarung?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  pendapatan?: Maybe<Scalars['String']>,
  personId: Person,
  sktm: Scalars['Boolean'],
  sktmUpload?: Maybe<Scalars['String']>,
  stmKeterangan?: Maybe<Scalars['String']>,
  tanggunganAnak?: Maybe<Scalars['Int']>,
  tanggunganFamili?: Maybe<Scalars['Int']>,
  tanggunganLain?: Maybe<Scalars['Int']>,
  tanggunganPasangan?: Maybe<Scalars['Int']>,
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
  usiaSaatKlien?: Maybe<Scalars['Int']>,
  logRequests?: Maybe<Array<LogRequest>>,
};


export type ClientLogRequestsArgs = {
  where?: Maybe<LogRequestWhereInput>,
  orderBy?: Maybe<LogRequestOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

/** A connection to a list of items. */
export type ClientConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<ClientEdge>>,
  aggregate: AggregateClient,
};

export type ClientCreateInput = {
  alamatLokasi?: Maybe<Scalars['String']>,
  asetGedung?: Maybe<Scalars['String']>,
  asetKios?: Maybe<Scalars['String']>,
  asetLahanGarapan?: Maybe<Scalars['String']>,
  asetLapak?: Maybe<Scalars['String']>,
  asetMobil?: Maybe<Scalars['String']>,
  asetMotor?: Maybe<Scalars['String']>,
  asetRumah?: Maybe<Scalars['String']>,
  asetTanah?: Maybe<Scalars['String']>,
  asetToko?: Maybe<Scalars['String']>,
  asetWarung?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  pendapatan?: Maybe<Scalars['String']>,
  sktm: Scalars['Boolean'],
  sktmUpload?: Maybe<Scalars['String']>,
  stmKeterangan?: Maybe<Scalars['String']>,
  tanggunganAnak?: Maybe<Scalars['Int']>,
  tanggunganFamili?: Maybe<Scalars['Int']>,
  tanggunganLain?: Maybe<Scalars['Int']>,
  tanggunganPasangan?: Maybe<Scalars['Int']>,
  updatedBy?: Maybe<Scalars['String']>,
  usiaSaatKlien?: Maybe<Scalars['Int']>,
  applicationId: ApplicationCreateOneWithoutClientsInput,
  personId: PersonCreateOneWithoutClientsInput,
  logRequests?: Maybe<LogRequestCreateManyInput>,
};

export type ClientCreateManyWithoutApplicationIdInput = {
  create?: Maybe<Array<ClientCreateWithoutApplicationIdInput>>,
  connect?: Maybe<Array<ClientWhereUniqueInput>>,
};

export type ClientCreateManyWithoutPersonIdInput = {
  create?: Maybe<Array<ClientCreateWithoutPersonIdInput>>,
  connect?: Maybe<Array<ClientWhereUniqueInput>>,
};

export type ClientCreateWithoutApplicationIdInput = {
  alamatLokasi?: Maybe<Scalars['String']>,
  asetGedung?: Maybe<Scalars['String']>,
  asetKios?: Maybe<Scalars['String']>,
  asetLahanGarapan?: Maybe<Scalars['String']>,
  asetLapak?: Maybe<Scalars['String']>,
  asetMobil?: Maybe<Scalars['String']>,
  asetMotor?: Maybe<Scalars['String']>,
  asetRumah?: Maybe<Scalars['String']>,
  asetTanah?: Maybe<Scalars['String']>,
  asetToko?: Maybe<Scalars['String']>,
  asetWarung?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  pendapatan?: Maybe<Scalars['String']>,
  sktm: Scalars['Boolean'],
  sktmUpload?: Maybe<Scalars['String']>,
  stmKeterangan?: Maybe<Scalars['String']>,
  tanggunganAnak?: Maybe<Scalars['Int']>,
  tanggunganFamili?: Maybe<Scalars['Int']>,
  tanggunganLain?: Maybe<Scalars['Int']>,
  tanggunganPasangan?: Maybe<Scalars['Int']>,
  updatedBy?: Maybe<Scalars['String']>,
  usiaSaatKlien?: Maybe<Scalars['Int']>,
  personId: PersonCreateOneWithoutClientsInput,
  logRequests?: Maybe<LogRequestCreateManyInput>,
};

export type ClientCreateWithoutPersonIdInput = {
  alamatLokasi?: Maybe<Scalars['String']>,
  asetGedung?: Maybe<Scalars['String']>,
  asetKios?: Maybe<Scalars['String']>,
  asetLahanGarapan?: Maybe<Scalars['String']>,
  asetLapak?: Maybe<Scalars['String']>,
  asetMobil?: Maybe<Scalars['String']>,
  asetMotor?: Maybe<Scalars['String']>,
  asetRumah?: Maybe<Scalars['String']>,
  asetTanah?: Maybe<Scalars['String']>,
  asetToko?: Maybe<Scalars['String']>,
  asetWarung?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  pendapatan?: Maybe<Scalars['String']>,
  sktm: Scalars['Boolean'],
  sktmUpload?: Maybe<Scalars['String']>,
  stmKeterangan?: Maybe<Scalars['String']>,
  tanggunganAnak?: Maybe<Scalars['Int']>,
  tanggunganFamili?: Maybe<Scalars['Int']>,
  tanggunganLain?: Maybe<Scalars['Int']>,
  tanggunganPasangan?: Maybe<Scalars['Int']>,
  updatedBy?: Maybe<Scalars['String']>,
  usiaSaatKlien?: Maybe<Scalars['Int']>,
  applicationId: ApplicationCreateOneWithoutClientsInput,
  logRequests?: Maybe<LogRequestCreateManyInput>,
};

/** An edge in a connection. */
export type ClientEdge = {
  /** The item at the end of the edge. */
  node: Client,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum ClientOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  AlamatLokasiAsc = 'alamatLokasi_ASC',
  AlamatLokasiDesc = 'alamatLokasi_DESC',
  AsetGedungAsc = 'asetGedung_ASC',
  AsetGedungDesc = 'asetGedung_DESC',
  AsetKiosAsc = 'asetKios_ASC',
  AsetKiosDesc = 'asetKios_DESC',
  AsetLahanGarapanAsc = 'asetLahanGarapan_ASC',
  AsetLahanGarapanDesc = 'asetLahanGarapan_DESC',
  AsetLapakAsc = 'asetLapak_ASC',
  AsetLapakDesc = 'asetLapak_DESC',
  AsetMobilAsc = 'asetMobil_ASC',
  AsetMobilDesc = 'asetMobil_DESC',
  AsetMotorAsc = 'asetMotor_ASC',
  AsetMotorDesc = 'asetMotor_DESC',
  AsetRumahAsc = 'asetRumah_ASC',
  AsetRumahDesc = 'asetRumah_DESC',
  AsetTanahAsc = 'asetTanah_ASC',
  AsetTanahDesc = 'asetTanah_DESC',
  AsetTokoAsc = 'asetToko_ASC',
  AsetTokoDesc = 'asetToko_DESC',
  AsetWarungAsc = 'asetWarung_ASC',
  AsetWarungDesc = 'asetWarung_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  PendapatanAsc = 'pendapatan_ASC',
  PendapatanDesc = 'pendapatan_DESC',
  SktmAsc = 'sktm_ASC',
  SktmDesc = 'sktm_DESC',
  SktmUploadAsc = 'sktmUpload_ASC',
  SktmUploadDesc = 'sktmUpload_DESC',
  StmKeteranganAsc = 'stmKeterangan_ASC',
  StmKeteranganDesc = 'stmKeterangan_DESC',
  TanggunganAnakAsc = 'tanggunganAnak_ASC',
  TanggunganAnakDesc = 'tanggunganAnak_DESC',
  TanggunganFamiliAsc = 'tanggunganFamili_ASC',
  TanggunganFamiliDesc = 'tanggunganFamili_DESC',
  TanggunganLainAsc = 'tanggunganLain_ASC',
  TanggunganLainDesc = 'tanggunganLain_DESC',
  TanggunganPasanganAsc = 'tanggunganPasangan_ASC',
  TanggunganPasanganDesc = 'tanggunganPasangan_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC',
  UsiaSaatKlienAsc = 'usiaSaatKlien_ASC',
  UsiaSaatKlienDesc = 'usiaSaatKlien_DESC'
}

export type ClientPreviousValues = {
  id: Scalars['Int'],
  alamatLokasi?: Maybe<Scalars['String']>,
  asetGedung?: Maybe<Scalars['String']>,
  asetKios?: Maybe<Scalars['String']>,
  asetLahanGarapan?: Maybe<Scalars['String']>,
  asetLapak?: Maybe<Scalars['String']>,
  asetMobil?: Maybe<Scalars['String']>,
  asetMotor?: Maybe<Scalars['String']>,
  asetRumah?: Maybe<Scalars['String']>,
  asetTanah?: Maybe<Scalars['String']>,
  asetToko?: Maybe<Scalars['String']>,
  asetWarung?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  pendapatan?: Maybe<Scalars['String']>,
  sktm: Scalars['Boolean'],
  sktmUpload?: Maybe<Scalars['String']>,
  stmKeterangan?: Maybe<Scalars['String']>,
  tanggunganAnak?: Maybe<Scalars['Int']>,
  tanggunganFamili?: Maybe<Scalars['Int']>,
  tanggunganLain?: Maybe<Scalars['Int']>,
  tanggunganPasangan?: Maybe<Scalars['Int']>,
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
  usiaSaatKlien?: Maybe<Scalars['Int']>,
};

export type ClientScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ClientScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ClientScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ClientScalarWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  alamatLokasi?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  alamatLokasi_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  alamatLokasi_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  alamatLokasi_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  alamatLokasi_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  alamatLokasi_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  alamatLokasi_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  alamatLokasi_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  alamatLokasi_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  alamatLokasi_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  alamatLokasi_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  alamatLokasi_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  alamatLokasi_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  alamatLokasi_not_ends_with?: Maybe<Scalars['String']>,
  asetGedung?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  asetGedung_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  asetGedung_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  asetGedung_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  asetGedung_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  asetGedung_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  asetGedung_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  asetGedung_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  asetGedung_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  asetGedung_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  asetGedung_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  asetGedung_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  asetGedung_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  asetGedung_not_ends_with?: Maybe<Scalars['String']>,
  asetKios?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  asetKios_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  asetKios_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  asetKios_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  asetKios_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  asetKios_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  asetKios_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  asetKios_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  asetKios_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  asetKios_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  asetKios_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  asetKios_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  asetKios_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  asetKios_not_ends_with?: Maybe<Scalars['String']>,
  asetLahanGarapan?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  asetLahanGarapan_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  asetLahanGarapan_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  asetLahanGarapan_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  asetLahanGarapan_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  asetLahanGarapan_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  asetLahanGarapan_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  asetLahanGarapan_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  asetLahanGarapan_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  asetLahanGarapan_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  asetLahanGarapan_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  asetLahanGarapan_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  asetLahanGarapan_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  asetLahanGarapan_not_ends_with?: Maybe<Scalars['String']>,
  asetLapak?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  asetLapak_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  asetLapak_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  asetLapak_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  asetLapak_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  asetLapak_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  asetLapak_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  asetLapak_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  asetLapak_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  asetLapak_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  asetLapak_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  asetLapak_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  asetLapak_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  asetLapak_not_ends_with?: Maybe<Scalars['String']>,
  asetMobil?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  asetMobil_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  asetMobil_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  asetMobil_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  asetMobil_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  asetMobil_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  asetMobil_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  asetMobil_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  asetMobil_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  asetMobil_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  asetMobil_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  asetMobil_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  asetMobil_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  asetMobil_not_ends_with?: Maybe<Scalars['String']>,
  asetMotor?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  asetMotor_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  asetMotor_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  asetMotor_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  asetMotor_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  asetMotor_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  asetMotor_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  asetMotor_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  asetMotor_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  asetMotor_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  asetMotor_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  asetMotor_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  asetMotor_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  asetMotor_not_ends_with?: Maybe<Scalars['String']>,
  asetRumah?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  asetRumah_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  asetRumah_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  asetRumah_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  asetRumah_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  asetRumah_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  asetRumah_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  asetRumah_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  asetRumah_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  asetRumah_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  asetRumah_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  asetRumah_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  asetRumah_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  asetRumah_not_ends_with?: Maybe<Scalars['String']>,
  asetTanah?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  asetTanah_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  asetTanah_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  asetTanah_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  asetTanah_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  asetTanah_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  asetTanah_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  asetTanah_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  asetTanah_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  asetTanah_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  asetTanah_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  asetTanah_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  asetTanah_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  asetTanah_not_ends_with?: Maybe<Scalars['String']>,
  asetToko?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  asetToko_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  asetToko_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  asetToko_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  asetToko_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  asetToko_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  asetToko_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  asetToko_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  asetToko_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  asetToko_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  asetToko_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  asetToko_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  asetToko_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  asetToko_not_ends_with?: Maybe<Scalars['String']>,
  asetWarung?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  asetWarung_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  asetWarung_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  asetWarung_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  asetWarung_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  asetWarung_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  asetWarung_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  asetWarung_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  asetWarung_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  asetWarung_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  asetWarung_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  asetWarung_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  asetWarung_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  asetWarung_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  createdBy_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  createdBy_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  createdBy_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  createdBy_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  createdBy_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  createdBy_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  createdBy_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  createdBy_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  createdBy_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  createdBy_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  createdBy_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  createdBy_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  createdBy_not_ends_with?: Maybe<Scalars['String']>,
  pendapatan?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  pendapatan_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  pendapatan_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  pendapatan_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  pendapatan_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  pendapatan_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  pendapatan_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  pendapatan_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  pendapatan_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  pendapatan_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  pendapatan_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  pendapatan_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  pendapatan_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  pendapatan_not_ends_with?: Maybe<Scalars['String']>,
  sktm?: Maybe<Scalars['Boolean']>,
  /** All values that are not equal to given value. */
  sktm_not?: Maybe<Scalars['Boolean']>,
  sktmUpload?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  sktmUpload_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  sktmUpload_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  sktmUpload_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  sktmUpload_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  sktmUpload_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  sktmUpload_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  sktmUpload_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  sktmUpload_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  sktmUpload_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  sktmUpload_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  sktmUpload_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  sktmUpload_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  sktmUpload_not_ends_with?: Maybe<Scalars['String']>,
  stmKeterangan?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  stmKeterangan_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  stmKeterangan_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  stmKeterangan_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  stmKeterangan_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  stmKeterangan_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  stmKeterangan_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  stmKeterangan_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  stmKeterangan_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  stmKeterangan_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  stmKeterangan_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  stmKeterangan_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  stmKeterangan_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  stmKeterangan_not_ends_with?: Maybe<Scalars['String']>,
  tanggunganAnak?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  tanggunganAnak_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  tanggunganAnak_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  tanggunganAnak_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  tanggunganAnak_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  tanggunganAnak_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  tanggunganAnak_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  tanggunganAnak_gte?: Maybe<Scalars['Int']>,
  tanggunganFamili?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  tanggunganFamili_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  tanggunganFamili_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  tanggunganFamili_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  tanggunganFamili_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  tanggunganFamili_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  tanggunganFamili_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  tanggunganFamili_gte?: Maybe<Scalars['Int']>,
  tanggunganLain?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  tanggunganLain_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  tanggunganLain_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  tanggunganLain_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  tanggunganLain_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  tanggunganLain_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  tanggunganLain_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  tanggunganLain_gte?: Maybe<Scalars['Int']>,
  tanggunganPasangan?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  tanggunganPasangan_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  tanggunganPasangan_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  tanggunganPasangan_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  tanggunganPasangan_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  tanggunganPasangan_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  tanggunganPasangan_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  tanggunganPasangan_gte?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  updatedBy_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  updatedBy_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  updatedBy_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  updatedBy_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  updatedBy_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  updatedBy_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  updatedBy_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  updatedBy_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  updatedBy_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  updatedBy_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  updatedBy_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  updatedBy_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  updatedBy_not_ends_with?: Maybe<Scalars['String']>,
  usiaSaatKlien?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  usiaSaatKlien_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  usiaSaatKlien_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  usiaSaatKlien_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  usiaSaatKlien_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  usiaSaatKlien_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  usiaSaatKlien_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  usiaSaatKlien_gte?: Maybe<Scalars['Int']>,
};

export type ClientSubscriptionPayload = {
  mutation: MutationType,
  node?: Maybe<Client>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<ClientPreviousValues>,
};

export type ClientSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ClientSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ClientSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ClientSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<ClientWhereInput>,
};

export type ClientUpdateInput = {
  alamatLokasi?: Maybe<Scalars['String']>,
  asetGedung?: Maybe<Scalars['String']>,
  asetKios?: Maybe<Scalars['String']>,
  asetLahanGarapan?: Maybe<Scalars['String']>,
  asetLapak?: Maybe<Scalars['String']>,
  asetMobil?: Maybe<Scalars['String']>,
  asetMotor?: Maybe<Scalars['String']>,
  asetRumah?: Maybe<Scalars['String']>,
  asetTanah?: Maybe<Scalars['String']>,
  asetToko?: Maybe<Scalars['String']>,
  asetWarung?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  pendapatan?: Maybe<Scalars['String']>,
  sktm?: Maybe<Scalars['Boolean']>,
  sktmUpload?: Maybe<Scalars['String']>,
  stmKeterangan?: Maybe<Scalars['String']>,
  tanggunganAnak?: Maybe<Scalars['Int']>,
  tanggunganFamili?: Maybe<Scalars['Int']>,
  tanggunganLain?: Maybe<Scalars['Int']>,
  tanggunganPasangan?: Maybe<Scalars['Int']>,
  updatedBy?: Maybe<Scalars['String']>,
  usiaSaatKlien?: Maybe<Scalars['Int']>,
  applicationId?: Maybe<ApplicationUpdateOneRequiredWithoutClientsInput>,
  personId?: Maybe<PersonUpdateOneRequiredWithoutClientsInput>,
  logRequests?: Maybe<LogRequestUpdateManyInput>,
};

export type ClientUpdateManyDataInput = {
  alamatLokasi?: Maybe<Scalars['String']>,
  asetGedung?: Maybe<Scalars['String']>,
  asetKios?: Maybe<Scalars['String']>,
  asetLahanGarapan?: Maybe<Scalars['String']>,
  asetLapak?: Maybe<Scalars['String']>,
  asetMobil?: Maybe<Scalars['String']>,
  asetMotor?: Maybe<Scalars['String']>,
  asetRumah?: Maybe<Scalars['String']>,
  asetTanah?: Maybe<Scalars['String']>,
  asetToko?: Maybe<Scalars['String']>,
  asetWarung?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  pendapatan?: Maybe<Scalars['String']>,
  sktm?: Maybe<Scalars['Boolean']>,
  sktmUpload?: Maybe<Scalars['String']>,
  stmKeterangan?: Maybe<Scalars['String']>,
  tanggunganAnak?: Maybe<Scalars['Int']>,
  tanggunganFamili?: Maybe<Scalars['Int']>,
  tanggunganLain?: Maybe<Scalars['Int']>,
  tanggunganPasangan?: Maybe<Scalars['Int']>,
  updatedBy?: Maybe<Scalars['String']>,
  usiaSaatKlien?: Maybe<Scalars['Int']>,
};

export type ClientUpdateManyMutationInput = {
  alamatLokasi?: Maybe<Scalars['String']>,
  asetGedung?: Maybe<Scalars['String']>,
  asetKios?: Maybe<Scalars['String']>,
  asetLahanGarapan?: Maybe<Scalars['String']>,
  asetLapak?: Maybe<Scalars['String']>,
  asetMobil?: Maybe<Scalars['String']>,
  asetMotor?: Maybe<Scalars['String']>,
  asetRumah?: Maybe<Scalars['String']>,
  asetTanah?: Maybe<Scalars['String']>,
  asetToko?: Maybe<Scalars['String']>,
  asetWarung?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  pendapatan?: Maybe<Scalars['String']>,
  sktm?: Maybe<Scalars['Boolean']>,
  sktmUpload?: Maybe<Scalars['String']>,
  stmKeterangan?: Maybe<Scalars['String']>,
  tanggunganAnak?: Maybe<Scalars['Int']>,
  tanggunganFamili?: Maybe<Scalars['Int']>,
  tanggunganLain?: Maybe<Scalars['Int']>,
  tanggunganPasangan?: Maybe<Scalars['Int']>,
  updatedBy?: Maybe<Scalars['String']>,
  usiaSaatKlien?: Maybe<Scalars['Int']>,
};

export type ClientUpdateManyWithoutApplicationIdInput = {
  create?: Maybe<Array<ClientCreateWithoutApplicationIdInput>>,
  connect?: Maybe<Array<ClientWhereUniqueInput>>,
  set?: Maybe<Array<ClientWhereUniqueInput>>,
  disconnect?: Maybe<Array<ClientWhereUniqueInput>>,
  delete?: Maybe<Array<ClientWhereUniqueInput>>,
  update?: Maybe<Array<ClientUpdateWithWhereUniqueWithoutApplicationIdInput>>,
  updateMany?: Maybe<Array<ClientUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<ClientScalarWhereInput>>,
  upsert?: Maybe<Array<ClientUpsertWithWhereUniqueWithoutApplicationIdInput>>,
};

export type ClientUpdateManyWithoutPersonIdInput = {
  create?: Maybe<Array<ClientCreateWithoutPersonIdInput>>,
  connect?: Maybe<Array<ClientWhereUniqueInput>>,
  set?: Maybe<Array<ClientWhereUniqueInput>>,
  disconnect?: Maybe<Array<ClientWhereUniqueInput>>,
  delete?: Maybe<Array<ClientWhereUniqueInput>>,
  update?: Maybe<Array<ClientUpdateWithWhereUniqueWithoutPersonIdInput>>,
  updateMany?: Maybe<Array<ClientUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<ClientScalarWhereInput>>,
  upsert?: Maybe<Array<ClientUpsertWithWhereUniqueWithoutPersonIdInput>>,
};

export type ClientUpdateManyWithWhereNestedInput = {
  where: ClientScalarWhereInput,
  data: ClientUpdateManyDataInput,
};

export type ClientUpdateWithoutApplicationIdDataInput = {
  alamatLokasi?: Maybe<Scalars['String']>,
  asetGedung?: Maybe<Scalars['String']>,
  asetKios?: Maybe<Scalars['String']>,
  asetLahanGarapan?: Maybe<Scalars['String']>,
  asetLapak?: Maybe<Scalars['String']>,
  asetMobil?: Maybe<Scalars['String']>,
  asetMotor?: Maybe<Scalars['String']>,
  asetRumah?: Maybe<Scalars['String']>,
  asetTanah?: Maybe<Scalars['String']>,
  asetToko?: Maybe<Scalars['String']>,
  asetWarung?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  pendapatan?: Maybe<Scalars['String']>,
  sktm?: Maybe<Scalars['Boolean']>,
  sktmUpload?: Maybe<Scalars['String']>,
  stmKeterangan?: Maybe<Scalars['String']>,
  tanggunganAnak?: Maybe<Scalars['Int']>,
  tanggunganFamili?: Maybe<Scalars['Int']>,
  tanggunganLain?: Maybe<Scalars['Int']>,
  tanggunganPasangan?: Maybe<Scalars['Int']>,
  updatedBy?: Maybe<Scalars['String']>,
  usiaSaatKlien?: Maybe<Scalars['Int']>,
  personId?: Maybe<PersonUpdateOneRequiredWithoutClientsInput>,
  logRequests?: Maybe<LogRequestUpdateManyInput>,
};

export type ClientUpdateWithoutPersonIdDataInput = {
  alamatLokasi?: Maybe<Scalars['String']>,
  asetGedung?: Maybe<Scalars['String']>,
  asetKios?: Maybe<Scalars['String']>,
  asetLahanGarapan?: Maybe<Scalars['String']>,
  asetLapak?: Maybe<Scalars['String']>,
  asetMobil?: Maybe<Scalars['String']>,
  asetMotor?: Maybe<Scalars['String']>,
  asetRumah?: Maybe<Scalars['String']>,
  asetTanah?: Maybe<Scalars['String']>,
  asetToko?: Maybe<Scalars['String']>,
  asetWarung?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  pendapatan?: Maybe<Scalars['String']>,
  sktm?: Maybe<Scalars['Boolean']>,
  sktmUpload?: Maybe<Scalars['String']>,
  stmKeterangan?: Maybe<Scalars['String']>,
  tanggunganAnak?: Maybe<Scalars['Int']>,
  tanggunganFamili?: Maybe<Scalars['Int']>,
  tanggunganLain?: Maybe<Scalars['Int']>,
  tanggunganPasangan?: Maybe<Scalars['Int']>,
  updatedBy?: Maybe<Scalars['String']>,
  usiaSaatKlien?: Maybe<Scalars['Int']>,
  applicationId?: Maybe<ApplicationUpdateOneRequiredWithoutClientsInput>,
  logRequests?: Maybe<LogRequestUpdateManyInput>,
};

export type ClientUpdateWithWhereUniqueWithoutApplicationIdInput = {
  where: ClientWhereUniqueInput,
  data: ClientUpdateWithoutApplicationIdDataInput,
};

export type ClientUpdateWithWhereUniqueWithoutPersonIdInput = {
  where: ClientWhereUniqueInput,
  data: ClientUpdateWithoutPersonIdDataInput,
};

export type ClientUpsertWithWhereUniqueWithoutApplicationIdInput = {
  where: ClientWhereUniqueInput,
  update: ClientUpdateWithoutApplicationIdDataInput,
  create: ClientCreateWithoutApplicationIdInput,
};

export type ClientUpsertWithWhereUniqueWithoutPersonIdInput = {
  where: ClientWhereUniqueInput,
  update: ClientUpdateWithoutPersonIdDataInput,
  create: ClientCreateWithoutPersonIdInput,
};

export type ClientWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ClientWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ClientWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ClientWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  alamatLokasi?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  alamatLokasi_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  alamatLokasi_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  alamatLokasi_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  alamatLokasi_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  alamatLokasi_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  alamatLokasi_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  alamatLokasi_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  alamatLokasi_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  alamatLokasi_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  alamatLokasi_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  alamatLokasi_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  alamatLokasi_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  alamatLokasi_not_ends_with?: Maybe<Scalars['String']>,
  asetGedung?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  asetGedung_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  asetGedung_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  asetGedung_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  asetGedung_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  asetGedung_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  asetGedung_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  asetGedung_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  asetGedung_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  asetGedung_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  asetGedung_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  asetGedung_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  asetGedung_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  asetGedung_not_ends_with?: Maybe<Scalars['String']>,
  asetKios?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  asetKios_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  asetKios_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  asetKios_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  asetKios_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  asetKios_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  asetKios_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  asetKios_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  asetKios_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  asetKios_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  asetKios_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  asetKios_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  asetKios_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  asetKios_not_ends_with?: Maybe<Scalars['String']>,
  asetLahanGarapan?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  asetLahanGarapan_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  asetLahanGarapan_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  asetLahanGarapan_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  asetLahanGarapan_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  asetLahanGarapan_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  asetLahanGarapan_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  asetLahanGarapan_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  asetLahanGarapan_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  asetLahanGarapan_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  asetLahanGarapan_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  asetLahanGarapan_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  asetLahanGarapan_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  asetLahanGarapan_not_ends_with?: Maybe<Scalars['String']>,
  asetLapak?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  asetLapak_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  asetLapak_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  asetLapak_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  asetLapak_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  asetLapak_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  asetLapak_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  asetLapak_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  asetLapak_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  asetLapak_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  asetLapak_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  asetLapak_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  asetLapak_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  asetLapak_not_ends_with?: Maybe<Scalars['String']>,
  asetMobil?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  asetMobil_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  asetMobil_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  asetMobil_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  asetMobil_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  asetMobil_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  asetMobil_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  asetMobil_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  asetMobil_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  asetMobil_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  asetMobil_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  asetMobil_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  asetMobil_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  asetMobil_not_ends_with?: Maybe<Scalars['String']>,
  asetMotor?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  asetMotor_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  asetMotor_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  asetMotor_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  asetMotor_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  asetMotor_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  asetMotor_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  asetMotor_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  asetMotor_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  asetMotor_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  asetMotor_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  asetMotor_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  asetMotor_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  asetMotor_not_ends_with?: Maybe<Scalars['String']>,
  asetRumah?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  asetRumah_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  asetRumah_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  asetRumah_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  asetRumah_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  asetRumah_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  asetRumah_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  asetRumah_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  asetRumah_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  asetRumah_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  asetRumah_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  asetRumah_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  asetRumah_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  asetRumah_not_ends_with?: Maybe<Scalars['String']>,
  asetTanah?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  asetTanah_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  asetTanah_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  asetTanah_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  asetTanah_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  asetTanah_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  asetTanah_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  asetTanah_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  asetTanah_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  asetTanah_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  asetTanah_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  asetTanah_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  asetTanah_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  asetTanah_not_ends_with?: Maybe<Scalars['String']>,
  asetToko?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  asetToko_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  asetToko_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  asetToko_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  asetToko_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  asetToko_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  asetToko_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  asetToko_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  asetToko_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  asetToko_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  asetToko_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  asetToko_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  asetToko_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  asetToko_not_ends_with?: Maybe<Scalars['String']>,
  asetWarung?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  asetWarung_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  asetWarung_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  asetWarung_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  asetWarung_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  asetWarung_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  asetWarung_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  asetWarung_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  asetWarung_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  asetWarung_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  asetWarung_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  asetWarung_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  asetWarung_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  asetWarung_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  createdBy_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  createdBy_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  createdBy_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  createdBy_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  createdBy_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  createdBy_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  createdBy_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  createdBy_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  createdBy_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  createdBy_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  createdBy_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  createdBy_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  createdBy_not_ends_with?: Maybe<Scalars['String']>,
  pendapatan?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  pendapatan_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  pendapatan_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  pendapatan_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  pendapatan_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  pendapatan_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  pendapatan_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  pendapatan_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  pendapatan_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  pendapatan_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  pendapatan_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  pendapatan_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  pendapatan_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  pendapatan_not_ends_with?: Maybe<Scalars['String']>,
  sktm?: Maybe<Scalars['Boolean']>,
  /** All values that are not equal to given value. */
  sktm_not?: Maybe<Scalars['Boolean']>,
  sktmUpload?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  sktmUpload_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  sktmUpload_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  sktmUpload_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  sktmUpload_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  sktmUpload_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  sktmUpload_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  sktmUpload_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  sktmUpload_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  sktmUpload_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  sktmUpload_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  sktmUpload_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  sktmUpload_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  sktmUpload_not_ends_with?: Maybe<Scalars['String']>,
  stmKeterangan?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  stmKeterangan_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  stmKeterangan_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  stmKeterangan_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  stmKeterangan_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  stmKeterangan_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  stmKeterangan_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  stmKeterangan_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  stmKeterangan_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  stmKeterangan_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  stmKeterangan_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  stmKeterangan_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  stmKeterangan_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  stmKeterangan_not_ends_with?: Maybe<Scalars['String']>,
  tanggunganAnak?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  tanggunganAnak_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  tanggunganAnak_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  tanggunganAnak_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  tanggunganAnak_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  tanggunganAnak_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  tanggunganAnak_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  tanggunganAnak_gte?: Maybe<Scalars['Int']>,
  tanggunganFamili?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  tanggunganFamili_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  tanggunganFamili_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  tanggunganFamili_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  tanggunganFamili_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  tanggunganFamili_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  tanggunganFamili_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  tanggunganFamili_gte?: Maybe<Scalars['Int']>,
  tanggunganLain?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  tanggunganLain_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  tanggunganLain_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  tanggunganLain_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  tanggunganLain_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  tanggunganLain_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  tanggunganLain_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  tanggunganLain_gte?: Maybe<Scalars['Int']>,
  tanggunganPasangan?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  tanggunganPasangan_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  tanggunganPasangan_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  tanggunganPasangan_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  tanggunganPasangan_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  tanggunganPasangan_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  tanggunganPasangan_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  tanggunganPasangan_gte?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  updatedBy_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  updatedBy_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  updatedBy_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  updatedBy_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  updatedBy_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  updatedBy_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  updatedBy_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  updatedBy_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  updatedBy_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  updatedBy_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  updatedBy_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  updatedBy_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  updatedBy_not_ends_with?: Maybe<Scalars['String']>,
  usiaSaatKlien?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  usiaSaatKlien_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  usiaSaatKlien_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  usiaSaatKlien_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  usiaSaatKlien_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  usiaSaatKlien_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  usiaSaatKlien_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  usiaSaatKlien_gte?: Maybe<Scalars['Int']>,
  applicationId?: Maybe<ApplicationWhereInput>,
  personId?: Maybe<PersonWhereInput>,
  logRequests_every?: Maybe<LogRequestWhereInput>,
  logRequests_some?: Maybe<LogRequestWhereInput>,
  logRequests_none?: Maybe<LogRequestWhereInput>,
};

export type ClientWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type DaftarPengacara = {
  ID: Scalars['Int'],
  jabatan?: Maybe<Scalars['String']>,
  namaLengkap?: Maybe<Scalars['String']>,
  sembunyikan: Scalars['Boolean'],
};

/** A connection to a list of items. */
export type DaftarPengacaraConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<DaftarPengacaraEdge>>,
  aggregate: AggregateDaftarPengacara,
};

export type DaftarPengacaraCreateInput = {
  jabatan?: Maybe<Scalars['String']>,
  namaLengkap?: Maybe<Scalars['String']>,
  sembunyikan: Scalars['Boolean'],
};

/** An edge in a connection. */
export type DaftarPengacaraEdge = {
  /** The item at the end of the edge. */
  node: DaftarPengacara,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum DaftarPengacaraOrderByInput {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  JabatanAsc = 'jabatan_ASC',
  JabatanDesc = 'jabatan_DESC',
  NamaLengkapAsc = 'namaLengkap_ASC',
  NamaLengkapDesc = 'namaLengkap_DESC',
  SembunyikanAsc = 'sembunyikan_ASC',
  SembunyikanDesc = 'sembunyikan_DESC'
}

export type DaftarPengacaraPreviousValues = {
  ID: Scalars['Int'],
  jabatan?: Maybe<Scalars['String']>,
  namaLengkap?: Maybe<Scalars['String']>,
  sembunyikan: Scalars['Boolean'],
};

export type DaftarPengacaraSubscriptionPayload = {
  mutation: MutationType,
  node?: Maybe<DaftarPengacara>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<DaftarPengacaraPreviousValues>,
};

export type DaftarPengacaraSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<DaftarPengacaraSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<DaftarPengacaraSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<DaftarPengacaraSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<DaftarPengacaraWhereInput>,
};

export type DaftarPengacaraUpdateInput = {
  jabatan?: Maybe<Scalars['String']>,
  namaLengkap?: Maybe<Scalars['String']>,
  sembunyikan?: Maybe<Scalars['Boolean']>,
};

export type DaftarPengacaraUpdateManyMutationInput = {
  jabatan?: Maybe<Scalars['String']>,
  namaLengkap?: Maybe<Scalars['String']>,
  sembunyikan?: Maybe<Scalars['Boolean']>,
};

export type DaftarPengacaraWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<DaftarPengacaraWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<DaftarPengacaraWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<DaftarPengacaraWhereInput>>,
  ID?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  ID_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  ID_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  ID_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  ID_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  ID_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  ID_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  ID_gte?: Maybe<Scalars['Int']>,
  jabatan?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  jabatan_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  jabatan_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  jabatan_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  jabatan_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  jabatan_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  jabatan_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  jabatan_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  jabatan_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  jabatan_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  jabatan_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  jabatan_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  jabatan_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  jabatan_not_ends_with?: Maybe<Scalars['String']>,
  namaLengkap?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  namaLengkap_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  namaLengkap_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  namaLengkap_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  namaLengkap_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  namaLengkap_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  namaLengkap_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  namaLengkap_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  namaLengkap_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  namaLengkap_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  namaLengkap_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  namaLengkap_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  namaLengkap_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  namaLengkap_not_ends_with?: Maybe<Scalars['String']>,
  sembunyikan?: Maybe<Scalars['Boolean']>,
  /** All values that are not equal to given value. */
  sembunyikan_not?: Maybe<Scalars['Boolean']>,
};

export type DaftarPengacaraWhereUniqueInput = {
  ID?: Maybe<Scalars['Int']>,
};

export type DataDict = {
  fieldNumber: Scalars['ID'],
  dataType?: Maybe<Scalars['String']>,
  entity?: Maybe<Scalars['String']>,
  fieldName?: Maybe<Scalars['String']>,
  fieldType?: Maybe<Scalars['String']>,
  isRepeat?: Maybe<Scalars['String']>,
  linkField?: Maybe<Scalars['String']>,
  linkTable?: Maybe<Scalars['String']>,
  listCode?: Maybe<Scalars['String']>,
  required?: Maybe<Scalars['String']>,
  validation?: Maybe<Scalars['String']>,
  visibleSelectQuery?: Maybe<Scalars['String']>,
  locals?: Maybe<Array<DataDictLocal>>,
};


export type DataDictLocalsArgs = {
  where?: Maybe<DataDictLocalWhereInput>,
  orderBy?: Maybe<DataDictLocalOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

/** A connection to a list of items. */
export type DataDictConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<DataDictEdge>>,
  aggregate: AggregateDataDict,
};

export type DataDictCreateInput = {
  fieldNumber?: Maybe<Scalars['ID']>,
  dataType?: Maybe<Scalars['String']>,
  entity?: Maybe<Scalars['String']>,
  fieldName?: Maybe<Scalars['String']>,
  fieldType?: Maybe<Scalars['String']>,
  isRepeat?: Maybe<Scalars['String']>,
  linkField?: Maybe<Scalars['String']>,
  linkTable?: Maybe<Scalars['String']>,
  listCode?: Maybe<Scalars['String']>,
  required?: Maybe<Scalars['String']>,
  validation?: Maybe<Scalars['String']>,
  visibleSelectQuery?: Maybe<Scalars['String']>,
  locals?: Maybe<DataDictLocalCreateManyWithoutFieldNumberInput>,
};

export type DataDictCreateOneWithoutLocalsInput = {
  create?: Maybe<DataDictCreateWithoutLocalsInput>,
  connect?: Maybe<DataDictWhereUniqueInput>,
};

export type DataDictCreateWithoutLocalsInput = {
  fieldNumber?: Maybe<Scalars['ID']>,
  dataType?: Maybe<Scalars['String']>,
  entity?: Maybe<Scalars['String']>,
  fieldName?: Maybe<Scalars['String']>,
  fieldType?: Maybe<Scalars['String']>,
  isRepeat?: Maybe<Scalars['String']>,
  linkField?: Maybe<Scalars['String']>,
  linkTable?: Maybe<Scalars['String']>,
  listCode?: Maybe<Scalars['String']>,
  required?: Maybe<Scalars['String']>,
  validation?: Maybe<Scalars['String']>,
  visibleSelectQuery?: Maybe<Scalars['String']>,
};

/** An edge in a connection. */
export type DataDictEdge = {
  /** The item at the end of the edge. */
  node: DataDict,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export type DataDictLocal = {
  id: Scalars['Int'],
  fieldNumber: DataDict,
  label?: Maybe<Scalars['String']>,
  lang?: Maybe<Scalars['String']>,
};

/** A connection to a list of items. */
export type DataDictLocalConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<DataDictLocalEdge>>,
  aggregate: AggregateDataDictLocal,
};

export type DataDictLocalCreateInput = {
  label?: Maybe<Scalars['String']>,
  lang?: Maybe<Scalars['String']>,
  fieldNumber: DataDictCreateOneWithoutLocalsInput,
};

export type DataDictLocalCreateManyWithoutFieldNumberInput = {
  create?: Maybe<Array<DataDictLocalCreateWithoutFieldNumberInput>>,
  connect?: Maybe<Array<DataDictLocalWhereUniqueInput>>,
};

export type DataDictLocalCreateWithoutFieldNumberInput = {
  label?: Maybe<Scalars['String']>,
  lang?: Maybe<Scalars['String']>,
};

/** An edge in a connection. */
export type DataDictLocalEdge = {
  /** The item at the end of the edge. */
  node: DataDictLocal,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum DataDictLocalOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  LangAsc = 'lang_ASC',
  LangDesc = 'lang_DESC'
}

export type DataDictLocalPreviousValues = {
  id: Scalars['Int'],
  label?: Maybe<Scalars['String']>,
  lang?: Maybe<Scalars['String']>,
};

export type DataDictLocalScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<DataDictLocalScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<DataDictLocalScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<DataDictLocalScalarWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  label?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  label_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  label_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  label_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  label_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  label_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  label_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  label_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  label_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  label_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  label_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  label_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  label_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  label_not_ends_with?: Maybe<Scalars['String']>,
  lang?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  lang_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  lang_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  lang_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  lang_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  lang_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  lang_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  lang_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  lang_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  lang_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  lang_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  lang_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  lang_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  lang_not_ends_with?: Maybe<Scalars['String']>,
};

export type DataDictLocalSubscriptionPayload = {
  mutation: MutationType,
  node?: Maybe<DataDictLocal>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<DataDictLocalPreviousValues>,
};

export type DataDictLocalSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<DataDictLocalSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<DataDictLocalSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<DataDictLocalSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<DataDictLocalWhereInput>,
};

export type DataDictLocalUpdateInput = {
  label?: Maybe<Scalars['String']>,
  lang?: Maybe<Scalars['String']>,
  fieldNumber?: Maybe<DataDictUpdateOneRequiredWithoutLocalsInput>,
};

export type DataDictLocalUpdateManyDataInput = {
  label?: Maybe<Scalars['String']>,
  lang?: Maybe<Scalars['String']>,
};

export type DataDictLocalUpdateManyMutationInput = {
  label?: Maybe<Scalars['String']>,
  lang?: Maybe<Scalars['String']>,
};

export type DataDictLocalUpdateManyWithoutFieldNumberInput = {
  create?: Maybe<Array<DataDictLocalCreateWithoutFieldNumberInput>>,
  connect?: Maybe<Array<DataDictLocalWhereUniqueInput>>,
  set?: Maybe<Array<DataDictLocalWhereUniqueInput>>,
  disconnect?: Maybe<Array<DataDictLocalWhereUniqueInput>>,
  delete?: Maybe<Array<DataDictLocalWhereUniqueInput>>,
  update?: Maybe<Array<DataDictLocalUpdateWithWhereUniqueWithoutFieldNumberInput>>,
  updateMany?: Maybe<Array<DataDictLocalUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<DataDictLocalScalarWhereInput>>,
  upsert?: Maybe<Array<DataDictLocalUpsertWithWhereUniqueWithoutFieldNumberInput>>,
};

export type DataDictLocalUpdateManyWithWhereNestedInput = {
  where: DataDictLocalScalarWhereInput,
  data: DataDictLocalUpdateManyDataInput,
};

export type DataDictLocalUpdateWithoutFieldNumberDataInput = {
  label?: Maybe<Scalars['String']>,
  lang?: Maybe<Scalars['String']>,
};

export type DataDictLocalUpdateWithWhereUniqueWithoutFieldNumberInput = {
  where: DataDictLocalWhereUniqueInput,
  data: DataDictLocalUpdateWithoutFieldNumberDataInput,
};

export type DataDictLocalUpsertWithWhereUniqueWithoutFieldNumberInput = {
  where: DataDictLocalWhereUniqueInput,
  update: DataDictLocalUpdateWithoutFieldNumberDataInput,
  create: DataDictLocalCreateWithoutFieldNumberInput,
};

export type DataDictLocalWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<DataDictLocalWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<DataDictLocalWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<DataDictLocalWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  label?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  label_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  label_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  label_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  label_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  label_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  label_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  label_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  label_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  label_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  label_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  label_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  label_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  label_not_ends_with?: Maybe<Scalars['String']>,
  lang?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  lang_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  lang_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  lang_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  lang_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  lang_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  lang_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  lang_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  lang_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  lang_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  lang_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  lang_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  lang_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  lang_not_ends_with?: Maybe<Scalars['String']>,
  fieldNumber?: Maybe<DataDictWhereInput>,
};

export type DataDictLocalWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export enum DataDictOrderByInput {
  FieldNumberAsc = 'fieldNumber_ASC',
  FieldNumberDesc = 'fieldNumber_DESC',
  DataTypeAsc = 'dataType_ASC',
  DataTypeDesc = 'dataType_DESC',
  EntityAsc = 'entity_ASC',
  EntityDesc = 'entity_DESC',
  FieldNameAsc = 'fieldName_ASC',
  FieldNameDesc = 'fieldName_DESC',
  FieldTypeAsc = 'fieldType_ASC',
  FieldTypeDesc = 'fieldType_DESC',
  IsRepeatAsc = 'isRepeat_ASC',
  IsRepeatDesc = 'isRepeat_DESC',
  LinkFieldAsc = 'linkField_ASC',
  LinkFieldDesc = 'linkField_DESC',
  LinkTableAsc = 'linkTable_ASC',
  LinkTableDesc = 'linkTable_DESC',
  ListCodeAsc = 'listCode_ASC',
  ListCodeDesc = 'listCode_DESC',
  RequiredAsc = 'required_ASC',
  RequiredDesc = 'required_DESC',
  ValidationAsc = 'validation_ASC',
  ValidationDesc = 'validation_DESC',
  VisibleSelectQueryAsc = 'visibleSelectQuery_ASC',
  VisibleSelectQueryDesc = 'visibleSelectQuery_DESC'
}

export type DataDictPreviousValues = {
  fieldNumber: Scalars['ID'],
  dataType?: Maybe<Scalars['String']>,
  entity?: Maybe<Scalars['String']>,
  fieldName?: Maybe<Scalars['String']>,
  fieldType?: Maybe<Scalars['String']>,
  isRepeat?: Maybe<Scalars['String']>,
  linkField?: Maybe<Scalars['String']>,
  linkTable?: Maybe<Scalars['String']>,
  listCode?: Maybe<Scalars['String']>,
  required?: Maybe<Scalars['String']>,
  validation?: Maybe<Scalars['String']>,
  visibleSelectQuery?: Maybe<Scalars['String']>,
};

export type DataDictSubscriptionPayload = {
  mutation: MutationType,
  node?: Maybe<DataDict>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<DataDictPreviousValues>,
};

export type DataDictSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<DataDictSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<DataDictSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<DataDictSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<DataDictWhereInput>,
};

export type DataDictUpdateInput = {
  dataType?: Maybe<Scalars['String']>,
  entity?: Maybe<Scalars['String']>,
  fieldName?: Maybe<Scalars['String']>,
  fieldType?: Maybe<Scalars['String']>,
  isRepeat?: Maybe<Scalars['String']>,
  linkField?: Maybe<Scalars['String']>,
  linkTable?: Maybe<Scalars['String']>,
  listCode?: Maybe<Scalars['String']>,
  required?: Maybe<Scalars['String']>,
  validation?: Maybe<Scalars['String']>,
  visibleSelectQuery?: Maybe<Scalars['String']>,
  locals?: Maybe<DataDictLocalUpdateManyWithoutFieldNumberInput>,
};

export type DataDictUpdateManyMutationInput = {
  dataType?: Maybe<Scalars['String']>,
  entity?: Maybe<Scalars['String']>,
  fieldName?: Maybe<Scalars['String']>,
  fieldType?: Maybe<Scalars['String']>,
  isRepeat?: Maybe<Scalars['String']>,
  linkField?: Maybe<Scalars['String']>,
  linkTable?: Maybe<Scalars['String']>,
  listCode?: Maybe<Scalars['String']>,
  required?: Maybe<Scalars['String']>,
  validation?: Maybe<Scalars['String']>,
  visibleSelectQuery?: Maybe<Scalars['String']>,
};

export type DataDictUpdateOneRequiredWithoutLocalsInput = {
  create?: Maybe<DataDictCreateWithoutLocalsInput>,
  connect?: Maybe<DataDictWhereUniqueInput>,
  update?: Maybe<DataDictUpdateWithoutLocalsDataInput>,
  upsert?: Maybe<DataDictUpsertWithoutLocalsInput>,
};

export type DataDictUpdateWithoutLocalsDataInput = {
  dataType?: Maybe<Scalars['String']>,
  entity?: Maybe<Scalars['String']>,
  fieldName?: Maybe<Scalars['String']>,
  fieldType?: Maybe<Scalars['String']>,
  isRepeat?: Maybe<Scalars['String']>,
  linkField?: Maybe<Scalars['String']>,
  linkTable?: Maybe<Scalars['String']>,
  listCode?: Maybe<Scalars['String']>,
  required?: Maybe<Scalars['String']>,
  validation?: Maybe<Scalars['String']>,
  visibleSelectQuery?: Maybe<Scalars['String']>,
};

export type DataDictUpsertWithoutLocalsInput = {
  update: DataDictUpdateWithoutLocalsDataInput,
  create: DataDictCreateWithoutLocalsInput,
};

export type DataDictWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<DataDictWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<DataDictWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<DataDictWhereInput>>,
  fieldNumber?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  fieldNumber_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  fieldNumber_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  fieldNumber_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  fieldNumber_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  fieldNumber_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  fieldNumber_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  fieldNumber_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  fieldNumber_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  fieldNumber_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  fieldNumber_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  fieldNumber_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  fieldNumber_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  fieldNumber_not_ends_with?: Maybe<Scalars['ID']>,
  dataType?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  dataType_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  dataType_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  dataType_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  dataType_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  dataType_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  dataType_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  dataType_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  dataType_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  dataType_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  dataType_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  dataType_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  dataType_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  dataType_not_ends_with?: Maybe<Scalars['String']>,
  entity?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  entity_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  entity_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  entity_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  entity_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  entity_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  entity_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  entity_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  entity_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  entity_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  entity_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  entity_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  entity_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  entity_not_ends_with?: Maybe<Scalars['String']>,
  fieldName?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  fieldName_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  fieldName_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  fieldName_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  fieldName_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  fieldName_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  fieldName_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  fieldName_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  fieldName_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  fieldName_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  fieldName_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  fieldName_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  fieldName_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  fieldName_not_ends_with?: Maybe<Scalars['String']>,
  fieldType?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  fieldType_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  fieldType_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  fieldType_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  fieldType_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  fieldType_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  fieldType_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  fieldType_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  fieldType_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  fieldType_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  fieldType_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  fieldType_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  fieldType_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  fieldType_not_ends_with?: Maybe<Scalars['String']>,
  isRepeat?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  isRepeat_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  isRepeat_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  isRepeat_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  isRepeat_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  isRepeat_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  isRepeat_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  isRepeat_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  isRepeat_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  isRepeat_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  isRepeat_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  isRepeat_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  isRepeat_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  isRepeat_not_ends_with?: Maybe<Scalars['String']>,
  linkField?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  linkField_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  linkField_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  linkField_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  linkField_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  linkField_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  linkField_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  linkField_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  linkField_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  linkField_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  linkField_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  linkField_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  linkField_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  linkField_not_ends_with?: Maybe<Scalars['String']>,
  linkTable?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  linkTable_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  linkTable_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  linkTable_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  linkTable_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  linkTable_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  linkTable_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  linkTable_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  linkTable_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  linkTable_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  linkTable_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  linkTable_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  linkTable_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  linkTable_not_ends_with?: Maybe<Scalars['String']>,
  listCode?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  listCode_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  listCode_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  listCode_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  listCode_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  listCode_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  listCode_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  listCode_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  listCode_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  listCode_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  listCode_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  listCode_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  listCode_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  listCode_not_ends_with?: Maybe<Scalars['String']>,
  required?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  required_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  required_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  required_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  required_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  required_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  required_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  required_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  required_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  required_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  required_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  required_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  required_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  required_not_ends_with?: Maybe<Scalars['String']>,
  validation?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  validation_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  validation_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  validation_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  validation_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  validation_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  validation_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  validation_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  validation_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  validation_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  validation_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  validation_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  validation_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  validation_not_ends_with?: Maybe<Scalars['String']>,
  visibleSelectQuery?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  visibleSelectQuery_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  visibleSelectQuery_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  visibleSelectQuery_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  visibleSelectQuery_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  visibleSelectQuery_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  visibleSelectQuery_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  visibleSelectQuery_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  visibleSelectQuery_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  visibleSelectQuery_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  visibleSelectQuery_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  visibleSelectQuery_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  visibleSelectQuery_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  visibleSelectQuery_not_ends_with?: Maybe<Scalars['String']>,
  locals_every?: Maybe<DataDictLocalWhereInput>,
  locals_some?: Maybe<DataDictLocalWhereInput>,
  locals_none?: Maybe<DataDictLocalWhereInput>,
};

export type DataDictWhereUniqueInput = {
  fieldNumber?: Maybe<Scalars['ID']>,
};


export type LogRequest = {
  ID: Scalars['Int'],
  caseId?: Maybe<Case>,
  isiRequest?: Maybe<Scalars['String']>,
  applicationId?: Maybe<Application>,
  jenisRequest?: Maybe<Scalars['String']>,
  networkId?: Maybe<Network>,
  personId?: Maybe<Person>,
  pp?: Maybe<Array<LogRequestApp>>,
  statusRequest?: Maybe<Scalars['String']>,
  requestBy?: Maybe<User>,
  requestTo?: Maybe<User>,
  tanggapanRequest?: Maybe<Scalars['String']>,
  tanggapanRequestIsi?: Maybe<Scalars['String']>,
  tglExpired?: Maybe<Scalars['DateTime']>,
  tglRequest?: Maybe<Scalars['DateTime']>,
  tglRespon?: Maybe<Scalars['DateTime']>,
};


export type LogRequestPpArgs = {
  where?: Maybe<LogRequestAppWhereInput>,
  orderBy?: Maybe<LogRequestAppOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type LogRequestApp = {
  id: Scalars['Int'],
  appConsultation: User,
  logRequestId?: Maybe<LogRequest>,
};

/** A connection to a list of items. */
export type LogRequestAppConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<LogRequestAppEdge>>,
  aggregate: AggregateLogRequestApp,
};

export type LogRequestAppCreateInput = {
  appConsultation: UserCreateOneWithoutAppConsultationInput,
  logRequestId?: Maybe<LogRequestCreateOneWithoutPpInput>,
};

export type LogRequestAppCreateManyWithoutAppConsultationInput = {
  create?: Maybe<Array<LogRequestAppCreateWithoutAppConsultationInput>>,
  connect?: Maybe<Array<LogRequestAppWhereUniqueInput>>,
};

export type LogRequestAppCreateManyWithoutLogRequestIdInput = {
  create?: Maybe<Array<LogRequestAppCreateWithoutLogRequestIdInput>>,
  connect?: Maybe<Array<LogRequestAppWhereUniqueInput>>,
};

export type LogRequestAppCreateWithoutAppConsultationInput = {
  logRequestId?: Maybe<LogRequestCreateOneWithoutPpInput>,
};

export type LogRequestAppCreateWithoutLogRequestIdInput = {
  appConsultation: UserCreateOneWithoutAppConsultationInput,
};

/** An edge in a connection. */
export type LogRequestAppEdge = {
  /** The item at the end of the edge. */
  node: LogRequestApp,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum LogRequestAppOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type LogRequestAppPreviousValues = {
  id: Scalars['Int'],
};

export type LogRequestAppScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<LogRequestAppScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<LogRequestAppScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<LogRequestAppScalarWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
};

export type LogRequestAppSubscriptionPayload = {
  mutation: MutationType,
  node?: Maybe<LogRequestApp>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<LogRequestAppPreviousValues>,
};

export type LogRequestAppSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<LogRequestAppSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<LogRequestAppSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<LogRequestAppSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<LogRequestAppWhereInput>,
};

export type LogRequestAppUpdateInput = {
  appConsultation?: Maybe<UserUpdateOneRequiredWithoutAppConsultationInput>,
  logRequestId?: Maybe<LogRequestUpdateOneWithoutPpInput>,
};

export type LogRequestAppUpdateManyWithoutAppConsultationInput = {
  create?: Maybe<Array<LogRequestAppCreateWithoutAppConsultationInput>>,
  connect?: Maybe<Array<LogRequestAppWhereUniqueInput>>,
  set?: Maybe<Array<LogRequestAppWhereUniqueInput>>,
  disconnect?: Maybe<Array<LogRequestAppWhereUniqueInput>>,
  delete?: Maybe<Array<LogRequestAppWhereUniqueInput>>,
  update?: Maybe<Array<LogRequestAppUpdateWithWhereUniqueWithoutAppConsultationInput>>,
  deleteMany?: Maybe<Array<LogRequestAppScalarWhereInput>>,
  upsert?: Maybe<Array<LogRequestAppUpsertWithWhereUniqueWithoutAppConsultationInput>>,
};

export type LogRequestAppUpdateManyWithoutLogRequestIdInput = {
  create?: Maybe<Array<LogRequestAppCreateWithoutLogRequestIdInput>>,
  connect?: Maybe<Array<LogRequestAppWhereUniqueInput>>,
  set?: Maybe<Array<LogRequestAppWhereUniqueInput>>,
  disconnect?: Maybe<Array<LogRequestAppWhereUniqueInput>>,
  delete?: Maybe<Array<LogRequestAppWhereUniqueInput>>,
  update?: Maybe<Array<LogRequestAppUpdateWithWhereUniqueWithoutLogRequestIdInput>>,
  deleteMany?: Maybe<Array<LogRequestAppScalarWhereInput>>,
  upsert?: Maybe<Array<LogRequestAppUpsertWithWhereUniqueWithoutLogRequestIdInput>>,
};

export type LogRequestAppUpdateWithoutAppConsultationDataInput = {
  logRequestId?: Maybe<LogRequestUpdateOneWithoutPpInput>,
};

export type LogRequestAppUpdateWithoutLogRequestIdDataInput = {
  appConsultation?: Maybe<UserUpdateOneRequiredWithoutAppConsultationInput>,
};

export type LogRequestAppUpdateWithWhereUniqueWithoutAppConsultationInput = {
  where: LogRequestAppWhereUniqueInput,
  data: LogRequestAppUpdateWithoutAppConsultationDataInput,
};

export type LogRequestAppUpdateWithWhereUniqueWithoutLogRequestIdInput = {
  where: LogRequestAppWhereUniqueInput,
  data: LogRequestAppUpdateWithoutLogRequestIdDataInput,
};

export type LogRequestAppUpsertWithWhereUniqueWithoutAppConsultationInput = {
  where: LogRequestAppWhereUniqueInput,
  update: LogRequestAppUpdateWithoutAppConsultationDataInput,
  create: LogRequestAppCreateWithoutAppConsultationInput,
};

export type LogRequestAppUpsertWithWhereUniqueWithoutLogRequestIdInput = {
  where: LogRequestAppWhereUniqueInput,
  update: LogRequestAppUpdateWithoutLogRequestIdDataInput,
  create: LogRequestAppCreateWithoutLogRequestIdInput,
};

export type LogRequestAppWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<LogRequestAppWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<LogRequestAppWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<LogRequestAppWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  appConsultation?: Maybe<UserWhereInput>,
  logRequestId?: Maybe<LogRequestWhereInput>,
};

export type LogRequestAppWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

/** A connection to a list of items. */
export type LogRequestConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<LogRequestEdge>>,
  aggregate: AggregateLogRequest,
};

export type LogRequestCreateInput = {
  isiRequest?: Maybe<Scalars['String']>,
  jenisRequest?: Maybe<Scalars['String']>,
  statusRequest?: Maybe<Scalars['String']>,
  tanggapanRequest?: Maybe<Scalars['String']>,
  tanggapanRequestIsi?: Maybe<Scalars['String']>,
  tglExpired?: Maybe<Scalars['DateTime']>,
  tglRequest?: Maybe<Scalars['DateTime']>,
  tglRespon?: Maybe<Scalars['DateTime']>,
  caseId?: Maybe<CaseCreateOneWithoutLogRequestsInput>,
  applicationId?: Maybe<ApplicationCreateOneInput>,
  networkId?: Maybe<NetworkCreateOneWithoutLogRequestsInput>,
  personId?: Maybe<PersonCreateOneWithoutLogRequestsInput>,
  pp?: Maybe<LogRequestAppCreateManyWithoutLogRequestIdInput>,
  requestBy?: Maybe<UserCreateOneWithoutLogRequestByInput>,
  requestTo?: Maybe<UserCreateOneWithoutLogRequestToInput>,
};

export type LogRequestCreateManyInput = {
  create?: Maybe<Array<LogRequestCreateInput>>,
  connect?: Maybe<Array<LogRequestWhereUniqueInput>>,
};

export type LogRequestCreateManyWithoutCaseIdInput = {
  create?: Maybe<Array<LogRequestCreateWithoutCaseIdInput>>,
  connect?: Maybe<Array<LogRequestWhereUniqueInput>>,
};

export type LogRequestCreateManyWithoutNetworkIdInput = {
  create?: Maybe<Array<LogRequestCreateWithoutNetworkIdInput>>,
  connect?: Maybe<Array<LogRequestWhereUniqueInput>>,
};

export type LogRequestCreateManyWithoutPersonIdInput = {
  create?: Maybe<Array<LogRequestCreateWithoutPersonIdInput>>,
  connect?: Maybe<Array<LogRequestWhereUniqueInput>>,
};

export type LogRequestCreateManyWithoutRequestByInput = {
  create?: Maybe<Array<LogRequestCreateWithoutRequestByInput>>,
  connect?: Maybe<Array<LogRequestWhereUniqueInput>>,
};

export type LogRequestCreateManyWithoutRequestToInput = {
  create?: Maybe<Array<LogRequestCreateWithoutRequestToInput>>,
  connect?: Maybe<Array<LogRequestWhereUniqueInput>>,
};

export type LogRequestCreateOneWithoutPpInput = {
  create?: Maybe<LogRequestCreateWithoutPpInput>,
  connect?: Maybe<LogRequestWhereUniqueInput>,
};

export type LogRequestCreateWithoutCaseIdInput = {
  isiRequest?: Maybe<Scalars['String']>,
  jenisRequest?: Maybe<Scalars['String']>,
  statusRequest?: Maybe<Scalars['String']>,
  tanggapanRequest?: Maybe<Scalars['String']>,
  tanggapanRequestIsi?: Maybe<Scalars['String']>,
  tglExpired?: Maybe<Scalars['DateTime']>,
  tglRequest?: Maybe<Scalars['DateTime']>,
  tglRespon?: Maybe<Scalars['DateTime']>,
  applicationId?: Maybe<ApplicationCreateOneInput>,
  networkId?: Maybe<NetworkCreateOneWithoutLogRequestsInput>,
  personId?: Maybe<PersonCreateOneWithoutLogRequestsInput>,
  pp?: Maybe<LogRequestAppCreateManyWithoutLogRequestIdInput>,
  requestBy?: Maybe<UserCreateOneWithoutLogRequestByInput>,
  requestTo?: Maybe<UserCreateOneWithoutLogRequestToInput>,
};

export type LogRequestCreateWithoutNetworkIdInput = {
  isiRequest?: Maybe<Scalars['String']>,
  jenisRequest?: Maybe<Scalars['String']>,
  statusRequest?: Maybe<Scalars['String']>,
  tanggapanRequest?: Maybe<Scalars['String']>,
  tanggapanRequestIsi?: Maybe<Scalars['String']>,
  tglExpired?: Maybe<Scalars['DateTime']>,
  tglRequest?: Maybe<Scalars['DateTime']>,
  tglRespon?: Maybe<Scalars['DateTime']>,
  caseId?: Maybe<CaseCreateOneWithoutLogRequestsInput>,
  applicationId?: Maybe<ApplicationCreateOneInput>,
  personId?: Maybe<PersonCreateOneWithoutLogRequestsInput>,
  pp?: Maybe<LogRequestAppCreateManyWithoutLogRequestIdInput>,
  requestBy?: Maybe<UserCreateOneWithoutLogRequestByInput>,
  requestTo?: Maybe<UserCreateOneWithoutLogRequestToInput>,
};

export type LogRequestCreateWithoutPersonIdInput = {
  isiRequest?: Maybe<Scalars['String']>,
  jenisRequest?: Maybe<Scalars['String']>,
  statusRequest?: Maybe<Scalars['String']>,
  tanggapanRequest?: Maybe<Scalars['String']>,
  tanggapanRequestIsi?: Maybe<Scalars['String']>,
  tglExpired?: Maybe<Scalars['DateTime']>,
  tglRequest?: Maybe<Scalars['DateTime']>,
  tglRespon?: Maybe<Scalars['DateTime']>,
  caseId?: Maybe<CaseCreateOneWithoutLogRequestsInput>,
  applicationId?: Maybe<ApplicationCreateOneInput>,
  networkId?: Maybe<NetworkCreateOneWithoutLogRequestsInput>,
  pp?: Maybe<LogRequestAppCreateManyWithoutLogRequestIdInput>,
  requestBy?: Maybe<UserCreateOneWithoutLogRequestByInput>,
  requestTo?: Maybe<UserCreateOneWithoutLogRequestToInput>,
};

export type LogRequestCreateWithoutPpInput = {
  isiRequest?: Maybe<Scalars['String']>,
  jenisRequest?: Maybe<Scalars['String']>,
  statusRequest?: Maybe<Scalars['String']>,
  tanggapanRequest?: Maybe<Scalars['String']>,
  tanggapanRequestIsi?: Maybe<Scalars['String']>,
  tglExpired?: Maybe<Scalars['DateTime']>,
  tglRequest?: Maybe<Scalars['DateTime']>,
  tglRespon?: Maybe<Scalars['DateTime']>,
  caseId?: Maybe<CaseCreateOneWithoutLogRequestsInput>,
  applicationId?: Maybe<ApplicationCreateOneInput>,
  networkId?: Maybe<NetworkCreateOneWithoutLogRequestsInput>,
  personId?: Maybe<PersonCreateOneWithoutLogRequestsInput>,
  requestBy?: Maybe<UserCreateOneWithoutLogRequestByInput>,
  requestTo?: Maybe<UserCreateOneWithoutLogRequestToInput>,
};

export type LogRequestCreateWithoutRequestByInput = {
  isiRequest?: Maybe<Scalars['String']>,
  jenisRequest?: Maybe<Scalars['String']>,
  statusRequest?: Maybe<Scalars['String']>,
  tanggapanRequest?: Maybe<Scalars['String']>,
  tanggapanRequestIsi?: Maybe<Scalars['String']>,
  tglExpired?: Maybe<Scalars['DateTime']>,
  tglRequest?: Maybe<Scalars['DateTime']>,
  tglRespon?: Maybe<Scalars['DateTime']>,
  caseId?: Maybe<CaseCreateOneWithoutLogRequestsInput>,
  applicationId?: Maybe<ApplicationCreateOneInput>,
  networkId?: Maybe<NetworkCreateOneWithoutLogRequestsInput>,
  personId?: Maybe<PersonCreateOneWithoutLogRequestsInput>,
  pp?: Maybe<LogRequestAppCreateManyWithoutLogRequestIdInput>,
  requestTo?: Maybe<UserCreateOneWithoutLogRequestToInput>,
};

export type LogRequestCreateWithoutRequestToInput = {
  isiRequest?: Maybe<Scalars['String']>,
  jenisRequest?: Maybe<Scalars['String']>,
  statusRequest?: Maybe<Scalars['String']>,
  tanggapanRequest?: Maybe<Scalars['String']>,
  tanggapanRequestIsi?: Maybe<Scalars['String']>,
  tglExpired?: Maybe<Scalars['DateTime']>,
  tglRequest?: Maybe<Scalars['DateTime']>,
  tglRespon?: Maybe<Scalars['DateTime']>,
  caseId?: Maybe<CaseCreateOneWithoutLogRequestsInput>,
  applicationId?: Maybe<ApplicationCreateOneInput>,
  networkId?: Maybe<NetworkCreateOneWithoutLogRequestsInput>,
  personId?: Maybe<PersonCreateOneWithoutLogRequestsInput>,
  pp?: Maybe<LogRequestAppCreateManyWithoutLogRequestIdInput>,
  requestBy?: Maybe<UserCreateOneWithoutLogRequestByInput>,
};

/** An edge in a connection. */
export type LogRequestEdge = {
  /** The item at the end of the edge. */
  node: LogRequest,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum LogRequestOrderByInput {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  IsiRequestAsc = 'isiRequest_ASC',
  IsiRequestDesc = 'isiRequest_DESC',
  JenisRequestAsc = 'jenisRequest_ASC',
  JenisRequestDesc = 'jenisRequest_DESC',
  StatusRequestAsc = 'statusRequest_ASC',
  StatusRequestDesc = 'statusRequest_DESC',
  TanggapanRequestAsc = 'tanggapanRequest_ASC',
  TanggapanRequestDesc = 'tanggapanRequest_DESC',
  TanggapanRequestIsiAsc = 'tanggapanRequestIsi_ASC',
  TanggapanRequestIsiDesc = 'tanggapanRequestIsi_DESC',
  TglExpiredAsc = 'tglExpired_ASC',
  TglExpiredDesc = 'tglExpired_DESC',
  TglRequestAsc = 'tglRequest_ASC',
  TglRequestDesc = 'tglRequest_DESC',
  TglResponAsc = 'tglRespon_ASC',
  TglResponDesc = 'tglRespon_DESC'
}

export type LogRequestPreviousValues = {
  ID: Scalars['Int'],
  isiRequest?: Maybe<Scalars['String']>,
  jenisRequest?: Maybe<Scalars['String']>,
  statusRequest?: Maybe<Scalars['String']>,
  tanggapanRequest?: Maybe<Scalars['String']>,
  tanggapanRequestIsi?: Maybe<Scalars['String']>,
  tglExpired?: Maybe<Scalars['DateTime']>,
  tglRequest?: Maybe<Scalars['DateTime']>,
  tglRespon?: Maybe<Scalars['DateTime']>,
};

export type LogRequestScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<LogRequestScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<LogRequestScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<LogRequestScalarWhereInput>>,
  ID?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  ID_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  ID_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  ID_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  ID_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  ID_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  ID_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  ID_gte?: Maybe<Scalars['Int']>,
  isiRequest?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  isiRequest_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  isiRequest_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  isiRequest_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  isiRequest_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  isiRequest_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  isiRequest_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  isiRequest_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  isiRequest_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  isiRequest_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  isiRequest_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  isiRequest_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  isiRequest_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  isiRequest_not_ends_with?: Maybe<Scalars['String']>,
  jenisRequest?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  jenisRequest_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  jenisRequest_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  jenisRequest_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  jenisRequest_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  jenisRequest_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  jenisRequest_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  jenisRequest_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  jenisRequest_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  jenisRequest_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  jenisRequest_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  jenisRequest_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  jenisRequest_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  jenisRequest_not_ends_with?: Maybe<Scalars['String']>,
  statusRequest?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  statusRequest_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  statusRequest_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  statusRequest_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  statusRequest_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  statusRequest_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  statusRequest_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  statusRequest_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  statusRequest_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  statusRequest_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  statusRequest_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  statusRequest_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  statusRequest_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  statusRequest_not_ends_with?: Maybe<Scalars['String']>,
  tanggapanRequest?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  tanggapanRequest_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  tanggapanRequest_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  tanggapanRequest_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  tanggapanRequest_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  tanggapanRequest_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  tanggapanRequest_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  tanggapanRequest_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  tanggapanRequest_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  tanggapanRequest_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  tanggapanRequest_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  tanggapanRequest_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  tanggapanRequest_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  tanggapanRequest_not_ends_with?: Maybe<Scalars['String']>,
  tanggapanRequestIsi?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  tanggapanRequestIsi_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  tanggapanRequestIsi_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  tanggapanRequestIsi_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  tanggapanRequestIsi_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  tanggapanRequestIsi_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  tanggapanRequestIsi_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  tanggapanRequestIsi_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  tanggapanRequestIsi_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  tanggapanRequestIsi_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  tanggapanRequestIsi_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  tanggapanRequestIsi_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  tanggapanRequestIsi_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  tanggapanRequestIsi_not_ends_with?: Maybe<Scalars['String']>,
  tglExpired?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  tglExpired_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  tglExpired_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  tglExpired_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  tglExpired_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  tglExpired_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  tglExpired_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  tglExpired_gte?: Maybe<Scalars['DateTime']>,
  tglRequest?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  tglRequest_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  tglRequest_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  tglRequest_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  tglRequest_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  tglRequest_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  tglRequest_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  tglRequest_gte?: Maybe<Scalars['DateTime']>,
  tglRespon?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  tglRespon_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  tglRespon_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  tglRespon_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  tglRespon_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  tglRespon_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  tglRespon_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  tglRespon_gte?: Maybe<Scalars['DateTime']>,
};

export type LogRequestSubscriptionPayload = {
  mutation: MutationType,
  node?: Maybe<LogRequest>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<LogRequestPreviousValues>,
};

export type LogRequestSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<LogRequestSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<LogRequestSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<LogRequestSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<LogRequestWhereInput>,
};

export type LogRequestUpdateDataInput = {
  isiRequest?: Maybe<Scalars['String']>,
  jenisRequest?: Maybe<Scalars['String']>,
  statusRequest?: Maybe<Scalars['String']>,
  tanggapanRequest?: Maybe<Scalars['String']>,
  tanggapanRequestIsi?: Maybe<Scalars['String']>,
  tglExpired?: Maybe<Scalars['DateTime']>,
  tglRequest?: Maybe<Scalars['DateTime']>,
  tglRespon?: Maybe<Scalars['DateTime']>,
  caseId?: Maybe<CaseUpdateOneWithoutLogRequestsInput>,
  applicationId?: Maybe<ApplicationUpdateOneInput>,
  networkId?: Maybe<NetworkUpdateOneWithoutLogRequestsInput>,
  personId?: Maybe<PersonUpdateOneWithoutLogRequestsInput>,
  pp?: Maybe<LogRequestAppUpdateManyWithoutLogRequestIdInput>,
  requestBy?: Maybe<UserUpdateOneWithoutLogRequestByInput>,
  requestTo?: Maybe<UserUpdateOneWithoutLogRequestToInput>,
};

export type LogRequestUpdateInput = {
  isiRequest?: Maybe<Scalars['String']>,
  jenisRequest?: Maybe<Scalars['String']>,
  statusRequest?: Maybe<Scalars['String']>,
  tanggapanRequest?: Maybe<Scalars['String']>,
  tanggapanRequestIsi?: Maybe<Scalars['String']>,
  tglExpired?: Maybe<Scalars['DateTime']>,
  tglRequest?: Maybe<Scalars['DateTime']>,
  tglRespon?: Maybe<Scalars['DateTime']>,
  caseId?: Maybe<CaseUpdateOneWithoutLogRequestsInput>,
  applicationId?: Maybe<ApplicationUpdateOneInput>,
  networkId?: Maybe<NetworkUpdateOneWithoutLogRequestsInput>,
  personId?: Maybe<PersonUpdateOneWithoutLogRequestsInput>,
  pp?: Maybe<LogRequestAppUpdateManyWithoutLogRequestIdInput>,
  requestBy?: Maybe<UserUpdateOneWithoutLogRequestByInput>,
  requestTo?: Maybe<UserUpdateOneWithoutLogRequestToInput>,
};

export type LogRequestUpdateManyDataInput = {
  isiRequest?: Maybe<Scalars['String']>,
  jenisRequest?: Maybe<Scalars['String']>,
  statusRequest?: Maybe<Scalars['String']>,
  tanggapanRequest?: Maybe<Scalars['String']>,
  tanggapanRequestIsi?: Maybe<Scalars['String']>,
  tglExpired?: Maybe<Scalars['DateTime']>,
  tglRequest?: Maybe<Scalars['DateTime']>,
  tglRespon?: Maybe<Scalars['DateTime']>,
};

export type LogRequestUpdateManyInput = {
  create?: Maybe<Array<LogRequestCreateInput>>,
  connect?: Maybe<Array<LogRequestWhereUniqueInput>>,
  set?: Maybe<Array<LogRequestWhereUniqueInput>>,
  disconnect?: Maybe<Array<LogRequestWhereUniqueInput>>,
  delete?: Maybe<Array<LogRequestWhereUniqueInput>>,
  update?: Maybe<Array<LogRequestUpdateWithWhereUniqueNestedInput>>,
  updateMany?: Maybe<Array<LogRequestUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<LogRequestScalarWhereInput>>,
  upsert?: Maybe<Array<LogRequestUpsertWithWhereUniqueNestedInput>>,
};

export type LogRequestUpdateManyMutationInput = {
  isiRequest?: Maybe<Scalars['String']>,
  jenisRequest?: Maybe<Scalars['String']>,
  statusRequest?: Maybe<Scalars['String']>,
  tanggapanRequest?: Maybe<Scalars['String']>,
  tanggapanRequestIsi?: Maybe<Scalars['String']>,
  tglExpired?: Maybe<Scalars['DateTime']>,
  tglRequest?: Maybe<Scalars['DateTime']>,
  tglRespon?: Maybe<Scalars['DateTime']>,
};

export type LogRequestUpdateManyWithoutCaseIdInput = {
  create?: Maybe<Array<LogRequestCreateWithoutCaseIdInput>>,
  connect?: Maybe<Array<LogRequestWhereUniqueInput>>,
  set?: Maybe<Array<LogRequestWhereUniqueInput>>,
  disconnect?: Maybe<Array<LogRequestWhereUniqueInput>>,
  delete?: Maybe<Array<LogRequestWhereUniqueInput>>,
  update?: Maybe<Array<LogRequestUpdateWithWhereUniqueWithoutCaseIdInput>>,
  updateMany?: Maybe<Array<LogRequestUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<LogRequestScalarWhereInput>>,
  upsert?: Maybe<Array<LogRequestUpsertWithWhereUniqueWithoutCaseIdInput>>,
};

export type LogRequestUpdateManyWithoutNetworkIdInput = {
  create?: Maybe<Array<LogRequestCreateWithoutNetworkIdInput>>,
  connect?: Maybe<Array<LogRequestWhereUniqueInput>>,
  set?: Maybe<Array<LogRequestWhereUniqueInput>>,
  disconnect?: Maybe<Array<LogRequestWhereUniqueInput>>,
  delete?: Maybe<Array<LogRequestWhereUniqueInput>>,
  update?: Maybe<Array<LogRequestUpdateWithWhereUniqueWithoutNetworkIdInput>>,
  updateMany?: Maybe<Array<LogRequestUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<LogRequestScalarWhereInput>>,
  upsert?: Maybe<Array<LogRequestUpsertWithWhereUniqueWithoutNetworkIdInput>>,
};

export type LogRequestUpdateManyWithoutPersonIdInput = {
  create?: Maybe<Array<LogRequestCreateWithoutPersonIdInput>>,
  connect?: Maybe<Array<LogRequestWhereUniqueInput>>,
  set?: Maybe<Array<LogRequestWhereUniqueInput>>,
  disconnect?: Maybe<Array<LogRequestWhereUniqueInput>>,
  delete?: Maybe<Array<LogRequestWhereUniqueInput>>,
  update?: Maybe<Array<LogRequestUpdateWithWhereUniqueWithoutPersonIdInput>>,
  updateMany?: Maybe<Array<LogRequestUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<LogRequestScalarWhereInput>>,
  upsert?: Maybe<Array<LogRequestUpsertWithWhereUniqueWithoutPersonIdInput>>,
};

export type LogRequestUpdateManyWithoutRequestByInput = {
  create?: Maybe<Array<LogRequestCreateWithoutRequestByInput>>,
  connect?: Maybe<Array<LogRequestWhereUniqueInput>>,
  set?: Maybe<Array<LogRequestWhereUniqueInput>>,
  disconnect?: Maybe<Array<LogRequestWhereUniqueInput>>,
  delete?: Maybe<Array<LogRequestWhereUniqueInput>>,
  update?: Maybe<Array<LogRequestUpdateWithWhereUniqueWithoutRequestByInput>>,
  updateMany?: Maybe<Array<LogRequestUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<LogRequestScalarWhereInput>>,
  upsert?: Maybe<Array<LogRequestUpsertWithWhereUniqueWithoutRequestByInput>>,
};

export type LogRequestUpdateManyWithoutRequestToInput = {
  create?: Maybe<Array<LogRequestCreateWithoutRequestToInput>>,
  connect?: Maybe<Array<LogRequestWhereUniqueInput>>,
  set?: Maybe<Array<LogRequestWhereUniqueInput>>,
  disconnect?: Maybe<Array<LogRequestWhereUniqueInput>>,
  delete?: Maybe<Array<LogRequestWhereUniqueInput>>,
  update?: Maybe<Array<LogRequestUpdateWithWhereUniqueWithoutRequestToInput>>,
  updateMany?: Maybe<Array<LogRequestUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<LogRequestScalarWhereInput>>,
  upsert?: Maybe<Array<LogRequestUpsertWithWhereUniqueWithoutRequestToInput>>,
};

export type LogRequestUpdateManyWithWhereNestedInput = {
  where: LogRequestScalarWhereInput,
  data: LogRequestUpdateManyDataInput,
};

export type LogRequestUpdateOneWithoutPpInput = {
  create?: Maybe<LogRequestCreateWithoutPpInput>,
  connect?: Maybe<LogRequestWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<LogRequestUpdateWithoutPpDataInput>,
  upsert?: Maybe<LogRequestUpsertWithoutPpInput>,
};

export type LogRequestUpdateWithoutCaseIdDataInput = {
  isiRequest?: Maybe<Scalars['String']>,
  jenisRequest?: Maybe<Scalars['String']>,
  statusRequest?: Maybe<Scalars['String']>,
  tanggapanRequest?: Maybe<Scalars['String']>,
  tanggapanRequestIsi?: Maybe<Scalars['String']>,
  tglExpired?: Maybe<Scalars['DateTime']>,
  tglRequest?: Maybe<Scalars['DateTime']>,
  tglRespon?: Maybe<Scalars['DateTime']>,
  applicationId?: Maybe<ApplicationUpdateOneInput>,
  networkId?: Maybe<NetworkUpdateOneWithoutLogRequestsInput>,
  personId?: Maybe<PersonUpdateOneWithoutLogRequestsInput>,
  pp?: Maybe<LogRequestAppUpdateManyWithoutLogRequestIdInput>,
  requestBy?: Maybe<UserUpdateOneWithoutLogRequestByInput>,
  requestTo?: Maybe<UserUpdateOneWithoutLogRequestToInput>,
};

export type LogRequestUpdateWithoutNetworkIdDataInput = {
  isiRequest?: Maybe<Scalars['String']>,
  jenisRequest?: Maybe<Scalars['String']>,
  statusRequest?: Maybe<Scalars['String']>,
  tanggapanRequest?: Maybe<Scalars['String']>,
  tanggapanRequestIsi?: Maybe<Scalars['String']>,
  tglExpired?: Maybe<Scalars['DateTime']>,
  tglRequest?: Maybe<Scalars['DateTime']>,
  tglRespon?: Maybe<Scalars['DateTime']>,
  caseId?: Maybe<CaseUpdateOneWithoutLogRequestsInput>,
  applicationId?: Maybe<ApplicationUpdateOneInput>,
  personId?: Maybe<PersonUpdateOneWithoutLogRequestsInput>,
  pp?: Maybe<LogRequestAppUpdateManyWithoutLogRequestIdInput>,
  requestBy?: Maybe<UserUpdateOneWithoutLogRequestByInput>,
  requestTo?: Maybe<UserUpdateOneWithoutLogRequestToInput>,
};

export type LogRequestUpdateWithoutPersonIdDataInput = {
  isiRequest?: Maybe<Scalars['String']>,
  jenisRequest?: Maybe<Scalars['String']>,
  statusRequest?: Maybe<Scalars['String']>,
  tanggapanRequest?: Maybe<Scalars['String']>,
  tanggapanRequestIsi?: Maybe<Scalars['String']>,
  tglExpired?: Maybe<Scalars['DateTime']>,
  tglRequest?: Maybe<Scalars['DateTime']>,
  tglRespon?: Maybe<Scalars['DateTime']>,
  caseId?: Maybe<CaseUpdateOneWithoutLogRequestsInput>,
  applicationId?: Maybe<ApplicationUpdateOneInput>,
  networkId?: Maybe<NetworkUpdateOneWithoutLogRequestsInput>,
  pp?: Maybe<LogRequestAppUpdateManyWithoutLogRequestIdInput>,
  requestBy?: Maybe<UserUpdateOneWithoutLogRequestByInput>,
  requestTo?: Maybe<UserUpdateOneWithoutLogRequestToInput>,
};

export type LogRequestUpdateWithoutPpDataInput = {
  isiRequest?: Maybe<Scalars['String']>,
  jenisRequest?: Maybe<Scalars['String']>,
  statusRequest?: Maybe<Scalars['String']>,
  tanggapanRequest?: Maybe<Scalars['String']>,
  tanggapanRequestIsi?: Maybe<Scalars['String']>,
  tglExpired?: Maybe<Scalars['DateTime']>,
  tglRequest?: Maybe<Scalars['DateTime']>,
  tglRespon?: Maybe<Scalars['DateTime']>,
  caseId?: Maybe<CaseUpdateOneWithoutLogRequestsInput>,
  applicationId?: Maybe<ApplicationUpdateOneInput>,
  networkId?: Maybe<NetworkUpdateOneWithoutLogRequestsInput>,
  personId?: Maybe<PersonUpdateOneWithoutLogRequestsInput>,
  requestBy?: Maybe<UserUpdateOneWithoutLogRequestByInput>,
  requestTo?: Maybe<UserUpdateOneWithoutLogRequestToInput>,
};

export type LogRequestUpdateWithoutRequestByDataInput = {
  isiRequest?: Maybe<Scalars['String']>,
  jenisRequest?: Maybe<Scalars['String']>,
  statusRequest?: Maybe<Scalars['String']>,
  tanggapanRequest?: Maybe<Scalars['String']>,
  tanggapanRequestIsi?: Maybe<Scalars['String']>,
  tglExpired?: Maybe<Scalars['DateTime']>,
  tglRequest?: Maybe<Scalars['DateTime']>,
  tglRespon?: Maybe<Scalars['DateTime']>,
  caseId?: Maybe<CaseUpdateOneWithoutLogRequestsInput>,
  applicationId?: Maybe<ApplicationUpdateOneInput>,
  networkId?: Maybe<NetworkUpdateOneWithoutLogRequestsInput>,
  personId?: Maybe<PersonUpdateOneWithoutLogRequestsInput>,
  pp?: Maybe<LogRequestAppUpdateManyWithoutLogRequestIdInput>,
  requestTo?: Maybe<UserUpdateOneWithoutLogRequestToInput>,
};

export type LogRequestUpdateWithoutRequestToDataInput = {
  isiRequest?: Maybe<Scalars['String']>,
  jenisRequest?: Maybe<Scalars['String']>,
  statusRequest?: Maybe<Scalars['String']>,
  tanggapanRequest?: Maybe<Scalars['String']>,
  tanggapanRequestIsi?: Maybe<Scalars['String']>,
  tglExpired?: Maybe<Scalars['DateTime']>,
  tglRequest?: Maybe<Scalars['DateTime']>,
  tglRespon?: Maybe<Scalars['DateTime']>,
  caseId?: Maybe<CaseUpdateOneWithoutLogRequestsInput>,
  applicationId?: Maybe<ApplicationUpdateOneInput>,
  networkId?: Maybe<NetworkUpdateOneWithoutLogRequestsInput>,
  personId?: Maybe<PersonUpdateOneWithoutLogRequestsInput>,
  pp?: Maybe<LogRequestAppUpdateManyWithoutLogRequestIdInput>,
  requestBy?: Maybe<UserUpdateOneWithoutLogRequestByInput>,
};

export type LogRequestUpdateWithWhereUniqueNestedInput = {
  where: LogRequestWhereUniqueInput,
  data: LogRequestUpdateDataInput,
};

export type LogRequestUpdateWithWhereUniqueWithoutCaseIdInput = {
  where: LogRequestWhereUniqueInput,
  data: LogRequestUpdateWithoutCaseIdDataInput,
};

export type LogRequestUpdateWithWhereUniqueWithoutNetworkIdInput = {
  where: LogRequestWhereUniqueInput,
  data: LogRequestUpdateWithoutNetworkIdDataInput,
};

export type LogRequestUpdateWithWhereUniqueWithoutPersonIdInput = {
  where: LogRequestWhereUniqueInput,
  data: LogRequestUpdateWithoutPersonIdDataInput,
};

export type LogRequestUpdateWithWhereUniqueWithoutRequestByInput = {
  where: LogRequestWhereUniqueInput,
  data: LogRequestUpdateWithoutRequestByDataInput,
};

export type LogRequestUpdateWithWhereUniqueWithoutRequestToInput = {
  where: LogRequestWhereUniqueInput,
  data: LogRequestUpdateWithoutRequestToDataInput,
};

export type LogRequestUpsertWithoutPpInput = {
  update: LogRequestUpdateWithoutPpDataInput,
  create: LogRequestCreateWithoutPpInput,
};

export type LogRequestUpsertWithWhereUniqueNestedInput = {
  where: LogRequestWhereUniqueInput,
  update: LogRequestUpdateDataInput,
  create: LogRequestCreateInput,
};

export type LogRequestUpsertWithWhereUniqueWithoutCaseIdInput = {
  where: LogRequestWhereUniqueInput,
  update: LogRequestUpdateWithoutCaseIdDataInput,
  create: LogRequestCreateWithoutCaseIdInput,
};

export type LogRequestUpsertWithWhereUniqueWithoutNetworkIdInput = {
  where: LogRequestWhereUniqueInput,
  update: LogRequestUpdateWithoutNetworkIdDataInput,
  create: LogRequestCreateWithoutNetworkIdInput,
};

export type LogRequestUpsertWithWhereUniqueWithoutPersonIdInput = {
  where: LogRequestWhereUniqueInput,
  update: LogRequestUpdateWithoutPersonIdDataInput,
  create: LogRequestCreateWithoutPersonIdInput,
};

export type LogRequestUpsertWithWhereUniqueWithoutRequestByInput = {
  where: LogRequestWhereUniqueInput,
  update: LogRequestUpdateWithoutRequestByDataInput,
  create: LogRequestCreateWithoutRequestByInput,
};

export type LogRequestUpsertWithWhereUniqueWithoutRequestToInput = {
  where: LogRequestWhereUniqueInput,
  update: LogRequestUpdateWithoutRequestToDataInput,
  create: LogRequestCreateWithoutRequestToInput,
};

export type LogRequestWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<LogRequestWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<LogRequestWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<LogRequestWhereInput>>,
  ID?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  ID_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  ID_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  ID_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  ID_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  ID_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  ID_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  ID_gte?: Maybe<Scalars['Int']>,
  isiRequest?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  isiRequest_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  isiRequest_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  isiRequest_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  isiRequest_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  isiRequest_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  isiRequest_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  isiRequest_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  isiRequest_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  isiRequest_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  isiRequest_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  isiRequest_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  isiRequest_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  isiRequest_not_ends_with?: Maybe<Scalars['String']>,
  jenisRequest?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  jenisRequest_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  jenisRequest_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  jenisRequest_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  jenisRequest_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  jenisRequest_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  jenisRequest_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  jenisRequest_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  jenisRequest_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  jenisRequest_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  jenisRequest_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  jenisRequest_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  jenisRequest_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  jenisRequest_not_ends_with?: Maybe<Scalars['String']>,
  statusRequest?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  statusRequest_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  statusRequest_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  statusRequest_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  statusRequest_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  statusRequest_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  statusRequest_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  statusRequest_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  statusRequest_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  statusRequest_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  statusRequest_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  statusRequest_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  statusRequest_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  statusRequest_not_ends_with?: Maybe<Scalars['String']>,
  tanggapanRequest?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  tanggapanRequest_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  tanggapanRequest_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  tanggapanRequest_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  tanggapanRequest_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  tanggapanRequest_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  tanggapanRequest_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  tanggapanRequest_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  tanggapanRequest_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  tanggapanRequest_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  tanggapanRequest_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  tanggapanRequest_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  tanggapanRequest_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  tanggapanRequest_not_ends_with?: Maybe<Scalars['String']>,
  tanggapanRequestIsi?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  tanggapanRequestIsi_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  tanggapanRequestIsi_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  tanggapanRequestIsi_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  tanggapanRequestIsi_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  tanggapanRequestIsi_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  tanggapanRequestIsi_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  tanggapanRequestIsi_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  tanggapanRequestIsi_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  tanggapanRequestIsi_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  tanggapanRequestIsi_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  tanggapanRequestIsi_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  tanggapanRequestIsi_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  tanggapanRequestIsi_not_ends_with?: Maybe<Scalars['String']>,
  tglExpired?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  tglExpired_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  tglExpired_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  tglExpired_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  tglExpired_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  tglExpired_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  tglExpired_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  tglExpired_gte?: Maybe<Scalars['DateTime']>,
  tglRequest?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  tglRequest_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  tglRequest_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  tglRequest_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  tglRequest_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  tglRequest_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  tglRequest_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  tglRequest_gte?: Maybe<Scalars['DateTime']>,
  tglRespon?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  tglRespon_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  tglRespon_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  tglRespon_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  tglRespon_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  tglRespon_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  tglRespon_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  tglRespon_gte?: Maybe<Scalars['DateTime']>,
  caseId?: Maybe<CaseWhereInput>,
  applicationId?: Maybe<ApplicationWhereInput>,
  networkId?: Maybe<NetworkWhereInput>,
  personId?: Maybe<PersonWhereInput>,
  pp_every?: Maybe<LogRequestAppWhereInput>,
  pp_some?: Maybe<LogRequestAppWhereInput>,
  pp_none?: Maybe<LogRequestAppWhereInput>,
  requestBy?: Maybe<UserWhereInput>,
  requestTo?: Maybe<UserWhereInput>,
};

export type LogRequestWhereUniqueInput = {
  ID?: Maybe<Scalars['Int']>,
};


export type MtVocab = {
  KODE: Scalars['ID'],
  kode_induk?: Maybe<Scalars['String']>,
  kode_list?: Maybe<MtVocabGroup>,
  level?: Maybe<Scalars['Int']>,
  sembunyikan: Scalars['Boolean'],
  teks?: Maybe<Scalars['String']>,
  urutan?: Maybe<Scalars['Int']>,
};

/** A connection to a list of items. */
export type MtVocabConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<MtVocabEdge>>,
  aggregate: AggregateMtVocab,
};

export type MtVocabCreateInput = {
  KODE?: Maybe<Scalars['ID']>,
  kode_induk?: Maybe<Scalars['String']>,
  level?: Maybe<Scalars['Int']>,
  sembunyikan: Scalars['Boolean'],
  teks?: Maybe<Scalars['String']>,
  urutan?: Maybe<Scalars['Int']>,
  kode_list?: Maybe<MtVocabGroupCreateOneWithoutMtvocabsInput>,
};

export type MtVocabCreateManyWithoutKode_ListInput = {
  create?: Maybe<Array<MtVocabCreateWithoutKode_ListInput>>,
  connect?: Maybe<Array<MtVocabWhereUniqueInput>>,
};

export type MtVocabCreateWithoutKode_ListInput = {
  KODE?: Maybe<Scalars['ID']>,
  kode_induk?: Maybe<Scalars['String']>,
  level?: Maybe<Scalars['Int']>,
  sembunyikan: Scalars['Boolean'],
  teks?: Maybe<Scalars['String']>,
  urutan?: Maybe<Scalars['Int']>,
};

/** An edge in a connection. */
export type MtVocabEdge = {
  /** The item at the end of the edge. */
  node: MtVocab,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export type MtVocabGroup = {
  kode_list: Scalars['Int'],
  nama_list?: Maybe<Scalars['String']>,
  mtvocabs?: Maybe<Array<MtVocab>>,
};


export type MtVocabGroupMtvocabsArgs = {
  where?: Maybe<MtVocabWhereInput>,
  orderBy?: Maybe<MtVocabOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

/** A connection to a list of items. */
export type MtVocabGroupConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<MtVocabGroupEdge>>,
  aggregate: AggregateMtVocabGroup,
};

export type MtVocabGroupCreateInput = {
  nama_list?: Maybe<Scalars['String']>,
  mtvocabs?: Maybe<MtVocabCreateManyWithoutKode_ListInput>,
};

export type MtVocabGroupCreateOneWithoutMtvocabsInput = {
  create?: Maybe<MtVocabGroupCreateWithoutMtvocabsInput>,
  connect?: Maybe<MtVocabGroupWhereUniqueInput>,
};

export type MtVocabGroupCreateWithoutMtvocabsInput = {
  nama_list?: Maybe<Scalars['String']>,
};

/** An edge in a connection. */
export type MtVocabGroupEdge = {
  /** The item at the end of the edge. */
  node: MtVocabGroup,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum MtVocabGroupOrderByInput {
  KodeListAsc = 'kode_list_ASC',
  KodeListDesc = 'kode_list_DESC',
  NamaListAsc = 'nama_list_ASC',
  NamaListDesc = 'nama_list_DESC'
}

export type MtVocabGroupPreviousValues = {
  kode_list: Scalars['Int'],
  nama_list?: Maybe<Scalars['String']>,
};

export type MtVocabGroupSubscriptionPayload = {
  mutation: MutationType,
  node?: Maybe<MtVocabGroup>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<MtVocabGroupPreviousValues>,
};

export type MtVocabGroupSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MtVocabGroupSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MtVocabGroupSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MtVocabGroupSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<MtVocabGroupWhereInput>,
};

export type MtVocabGroupUpdateInput = {
  nama_list?: Maybe<Scalars['String']>,
  mtvocabs?: Maybe<MtVocabUpdateManyWithoutKode_ListInput>,
};

export type MtVocabGroupUpdateManyMutationInput = {
  nama_list?: Maybe<Scalars['String']>,
};

export type MtVocabGroupUpdateOneWithoutMtvocabsInput = {
  create?: Maybe<MtVocabGroupCreateWithoutMtvocabsInput>,
  connect?: Maybe<MtVocabGroupWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<MtVocabGroupUpdateWithoutMtvocabsDataInput>,
  upsert?: Maybe<MtVocabGroupUpsertWithoutMtvocabsInput>,
};

export type MtVocabGroupUpdateWithoutMtvocabsDataInput = {
  nama_list?: Maybe<Scalars['String']>,
};

export type MtVocabGroupUpsertWithoutMtvocabsInput = {
  update: MtVocabGroupUpdateWithoutMtvocabsDataInput,
  create: MtVocabGroupCreateWithoutMtvocabsInput,
};

export type MtVocabGroupWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MtVocabGroupWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MtVocabGroupWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MtVocabGroupWhereInput>>,
  kode_list?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  kode_list_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  kode_list_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  kode_list_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  kode_list_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  kode_list_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  kode_list_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  kode_list_gte?: Maybe<Scalars['Int']>,
  nama_list?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  nama_list_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  nama_list_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  nama_list_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  nama_list_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  nama_list_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  nama_list_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  nama_list_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  nama_list_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  nama_list_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  nama_list_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  nama_list_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  nama_list_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  nama_list_not_ends_with?: Maybe<Scalars['String']>,
  mtvocabs_every?: Maybe<MtVocabWhereInput>,
  mtvocabs_some?: Maybe<MtVocabWhereInput>,
  mtvocabs_none?: Maybe<MtVocabWhereInput>,
};

export type MtVocabGroupWhereUniqueInput = {
  kode_list?: Maybe<Scalars['Int']>,
};

export enum MtVocabOrderByInput {
  KodeAsc = 'KODE_ASC',
  KodeDesc = 'KODE_DESC',
  KodeIndukAsc = 'kode_induk_ASC',
  KodeIndukDesc = 'kode_induk_DESC',
  LevelAsc = 'level_ASC',
  LevelDesc = 'level_DESC',
  SembunyikanAsc = 'sembunyikan_ASC',
  SembunyikanDesc = 'sembunyikan_DESC',
  TeksAsc = 'teks_ASC',
  TeksDesc = 'teks_DESC',
  UrutanAsc = 'urutan_ASC',
  UrutanDesc = 'urutan_DESC'
}

export type MtVocabPreviousValues = {
  KODE: Scalars['ID'],
  kode_induk?: Maybe<Scalars['String']>,
  level?: Maybe<Scalars['Int']>,
  sembunyikan: Scalars['Boolean'],
  teks?: Maybe<Scalars['String']>,
  urutan?: Maybe<Scalars['Int']>,
};

export type MtVocabScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MtVocabScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MtVocabScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MtVocabScalarWhereInput>>,
  KODE?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  KODE_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  KODE_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  KODE_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  KODE_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  KODE_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  KODE_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  KODE_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  KODE_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  KODE_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  KODE_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  KODE_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  KODE_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  KODE_not_ends_with?: Maybe<Scalars['ID']>,
  kode_induk?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  kode_induk_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  kode_induk_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  kode_induk_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  kode_induk_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  kode_induk_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  kode_induk_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  kode_induk_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  kode_induk_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  kode_induk_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  kode_induk_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  kode_induk_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  kode_induk_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  kode_induk_not_ends_with?: Maybe<Scalars['String']>,
  level?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  level_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  level_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  level_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  level_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  level_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  level_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  level_gte?: Maybe<Scalars['Int']>,
  sembunyikan?: Maybe<Scalars['Boolean']>,
  /** All values that are not equal to given value. */
  sembunyikan_not?: Maybe<Scalars['Boolean']>,
  teks?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  teks_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  teks_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  teks_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  teks_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  teks_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  teks_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  teks_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  teks_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  teks_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  teks_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  teks_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  teks_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  teks_not_ends_with?: Maybe<Scalars['String']>,
  urutan?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  urutan_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  urutan_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  urutan_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  urutan_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  urutan_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  urutan_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  urutan_gte?: Maybe<Scalars['Int']>,
};

export type MtVocabSubscriptionPayload = {
  mutation: MutationType,
  node?: Maybe<MtVocab>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<MtVocabPreviousValues>,
};

export type MtVocabSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MtVocabSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MtVocabSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MtVocabSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<MtVocabWhereInput>,
};

export type MtVocabUpdateInput = {
  kode_induk?: Maybe<Scalars['String']>,
  level?: Maybe<Scalars['Int']>,
  sembunyikan?: Maybe<Scalars['Boolean']>,
  teks?: Maybe<Scalars['String']>,
  urutan?: Maybe<Scalars['Int']>,
  kode_list?: Maybe<MtVocabGroupUpdateOneWithoutMtvocabsInput>,
};

export type MtVocabUpdateManyDataInput = {
  kode_induk?: Maybe<Scalars['String']>,
  level?: Maybe<Scalars['Int']>,
  sembunyikan?: Maybe<Scalars['Boolean']>,
  teks?: Maybe<Scalars['String']>,
  urutan?: Maybe<Scalars['Int']>,
};

export type MtVocabUpdateManyMutationInput = {
  kode_induk?: Maybe<Scalars['String']>,
  level?: Maybe<Scalars['Int']>,
  sembunyikan?: Maybe<Scalars['Boolean']>,
  teks?: Maybe<Scalars['String']>,
  urutan?: Maybe<Scalars['Int']>,
};

export type MtVocabUpdateManyWithoutKode_ListInput = {
  create?: Maybe<Array<MtVocabCreateWithoutKode_ListInput>>,
  connect?: Maybe<Array<MtVocabWhereUniqueInput>>,
  set?: Maybe<Array<MtVocabWhereUniqueInput>>,
  disconnect?: Maybe<Array<MtVocabWhereUniqueInput>>,
  delete?: Maybe<Array<MtVocabWhereUniqueInput>>,
  update?: Maybe<Array<MtVocabUpdateWithWhereUniqueWithoutKode_ListInput>>,
  updateMany?: Maybe<Array<MtVocabUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<MtVocabScalarWhereInput>>,
  upsert?: Maybe<Array<MtVocabUpsertWithWhereUniqueWithoutKode_ListInput>>,
};

export type MtVocabUpdateManyWithWhereNestedInput = {
  where: MtVocabScalarWhereInput,
  data: MtVocabUpdateManyDataInput,
};

export type MtVocabUpdateWithoutKode_ListDataInput = {
  kode_induk?: Maybe<Scalars['String']>,
  level?: Maybe<Scalars['Int']>,
  sembunyikan?: Maybe<Scalars['Boolean']>,
  teks?: Maybe<Scalars['String']>,
  urutan?: Maybe<Scalars['Int']>,
};

export type MtVocabUpdateWithWhereUniqueWithoutKode_ListInput = {
  where: MtVocabWhereUniqueInput,
  data: MtVocabUpdateWithoutKode_ListDataInput,
};

export type MtVocabUpsertWithWhereUniqueWithoutKode_ListInput = {
  where: MtVocabWhereUniqueInput,
  update: MtVocabUpdateWithoutKode_ListDataInput,
  create: MtVocabCreateWithoutKode_ListInput,
};

export type MtVocabWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MtVocabWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MtVocabWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MtVocabWhereInput>>,
  KODE?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  KODE_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  KODE_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  KODE_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  KODE_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  KODE_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  KODE_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  KODE_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  KODE_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  KODE_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  KODE_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  KODE_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  KODE_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  KODE_not_ends_with?: Maybe<Scalars['ID']>,
  kode_induk?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  kode_induk_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  kode_induk_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  kode_induk_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  kode_induk_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  kode_induk_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  kode_induk_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  kode_induk_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  kode_induk_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  kode_induk_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  kode_induk_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  kode_induk_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  kode_induk_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  kode_induk_not_ends_with?: Maybe<Scalars['String']>,
  level?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  level_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  level_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  level_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  level_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  level_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  level_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  level_gte?: Maybe<Scalars['Int']>,
  sembunyikan?: Maybe<Scalars['Boolean']>,
  /** All values that are not equal to given value. */
  sembunyikan_not?: Maybe<Scalars['Boolean']>,
  teks?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  teks_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  teks_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  teks_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  teks_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  teks_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  teks_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  teks_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  teks_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  teks_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  teks_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  teks_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  teks_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  teks_not_ends_with?: Maybe<Scalars['String']>,
  urutan?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  urutan_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  urutan_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  urutan_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  urutan_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  urutan_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  urutan_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  urutan_gte?: Maybe<Scalars['Int']>,
  kode_list?: Maybe<MtVocabGroupWhereInput>,
};

export type MtVocabWhereUniqueInput = {
  KODE?: Maybe<Scalars['ID']>,
};

export type Mutation = {
  createCase: Case,
  createCaseClassification: CaseClassification,
  createCaseConsultation: CaseConsultation,
  createCaseConsultationApp: CaseConsultationApp,
  createCaseDocument: CaseDocument,
  createCaseIssue: CaseIssue,
  createCaseKorban: CaseKorban,
  createCasePelaku: CasePelaku,
  createCasePk: CasePk,
  createCaseProgress: CaseProgress,
  createCaseProgressActivity: CaseProgressActivity,
  createCaseProgressActivityLit: CaseProgressActivityLit,
  createCaseProgressActivityNonlit: CaseProgressActivityNonlit,
  createCaseTransferReferral: CaseTransferReferral,
  createCaseTransfer: CaseTransfer,
  createCaseReferral: CaseReferral,
  createCaseViolatedRight: CaseViolatedRight,
  createClient: Client,
  createDaftarPengacara: DaftarPengacara,
  createDataDict: DataDict,
  createDataDictLocal: DataDictLocal,
  createLogRequestApp: LogRequestApp,
  createMtVocab: MtVocab,
  createMtVocabGroup: MtVocabGroup,
  createPersonDocument: PersonDocument,
  createRole: Role,
  createUserProfile: UserProfile,
  createApplication: Application,
  createLogRequest: LogRequest,
  createRolesType: RolesType,
  createNetwork: Network,
  createUser: User,
  createPerson: Person,
  updateCase?: Maybe<Case>,
  updateCaseClassification?: Maybe<CaseClassification>,
  updateCaseConsultation?: Maybe<CaseConsultation>,
  updateCaseConsultationApp?: Maybe<CaseConsultationApp>,
  updateCaseDocument?: Maybe<CaseDocument>,
  updateCaseIssue?: Maybe<CaseIssue>,
  updateCaseKorban?: Maybe<CaseKorban>,
  updateCasePelaku?: Maybe<CasePelaku>,
  updateCasePk?: Maybe<CasePk>,
  updateCaseProgress?: Maybe<CaseProgress>,
  updateCaseProgressActivity?: Maybe<CaseProgressActivity>,
  updateCaseProgressActivityLit?: Maybe<CaseProgressActivityLit>,
  updateCaseProgressActivityNonlit?: Maybe<CaseProgressActivityNonlit>,
  updateCaseTransferReferral?: Maybe<CaseTransferReferral>,
  updateCaseTransfer?: Maybe<CaseTransfer>,
  updateCaseReferral?: Maybe<CaseReferral>,
  updateCaseViolatedRight?: Maybe<CaseViolatedRight>,
  updateClient?: Maybe<Client>,
  updateDaftarPengacara?: Maybe<DaftarPengacara>,
  updateDataDict?: Maybe<DataDict>,
  updateDataDictLocal?: Maybe<DataDictLocal>,
  updateLogRequestApp?: Maybe<LogRequestApp>,
  updateMtVocab?: Maybe<MtVocab>,
  updateMtVocabGroup?: Maybe<MtVocabGroup>,
  updatePersonDocument?: Maybe<PersonDocument>,
  updateRole?: Maybe<Role>,
  updateUserProfile?: Maybe<UserProfile>,
  updateApplication?: Maybe<Application>,
  updateLogRequest?: Maybe<LogRequest>,
  updateRolesType?: Maybe<RolesType>,
  updateNetwork?: Maybe<Network>,
  updateUser?: Maybe<User>,
  updatePerson?: Maybe<Person>,
  deleteCase?: Maybe<Case>,
  deleteCaseClassification?: Maybe<CaseClassification>,
  deleteCaseConsultation?: Maybe<CaseConsultation>,
  deleteCaseConsultationApp?: Maybe<CaseConsultationApp>,
  deleteCaseDocument?: Maybe<CaseDocument>,
  deleteCaseIssue?: Maybe<CaseIssue>,
  deleteCaseKorban?: Maybe<CaseKorban>,
  deleteCasePelaku?: Maybe<CasePelaku>,
  deleteCasePk?: Maybe<CasePk>,
  deleteCaseProgress?: Maybe<CaseProgress>,
  deleteCaseProgressActivity?: Maybe<CaseProgressActivity>,
  deleteCaseProgressActivityLit?: Maybe<CaseProgressActivityLit>,
  deleteCaseProgressActivityNonlit?: Maybe<CaseProgressActivityNonlit>,
  deleteCaseTransferReferral?: Maybe<CaseTransferReferral>,
  deleteCaseTransfer?: Maybe<CaseTransfer>,
  deleteCaseReferral?: Maybe<CaseReferral>,
  deleteCaseViolatedRight?: Maybe<CaseViolatedRight>,
  deleteClient?: Maybe<Client>,
  deleteDaftarPengacara?: Maybe<DaftarPengacara>,
  deleteDataDict?: Maybe<DataDict>,
  deleteDataDictLocal?: Maybe<DataDictLocal>,
  deleteLogRequestApp?: Maybe<LogRequestApp>,
  deleteMtVocab?: Maybe<MtVocab>,
  deleteMtVocabGroup?: Maybe<MtVocabGroup>,
  deletePersonDocument?: Maybe<PersonDocument>,
  deleteRole?: Maybe<Role>,
  deleteUserProfile?: Maybe<UserProfile>,
  deleteApplication?: Maybe<Application>,
  deleteLogRequest?: Maybe<LogRequest>,
  deleteRolesType?: Maybe<RolesType>,
  deleteNetwork?: Maybe<Network>,
  deleteUser?: Maybe<User>,
  deletePerson?: Maybe<Person>,
  upsertCase: Case,
  upsertCaseClassification: CaseClassification,
  upsertCaseConsultation: CaseConsultation,
  upsertCaseConsultationApp: CaseConsultationApp,
  upsertCaseDocument: CaseDocument,
  upsertCaseIssue: CaseIssue,
  upsertCaseKorban: CaseKorban,
  upsertCasePelaku: CasePelaku,
  upsertCasePk: CasePk,
  upsertCaseProgress: CaseProgress,
  upsertCaseProgressActivity: CaseProgressActivity,
  upsertCaseProgressActivityLit: CaseProgressActivityLit,
  upsertCaseProgressActivityNonlit: CaseProgressActivityNonlit,
  upsertCaseTransferReferral: CaseTransferReferral,
  upsertCaseTransfer: CaseTransfer,
  upsertCaseReferral: CaseReferral,
  upsertCaseViolatedRight: CaseViolatedRight,
  upsertClient: Client,
  upsertDaftarPengacara: DaftarPengacara,
  upsertDataDict: DataDict,
  upsertDataDictLocal: DataDictLocal,
  upsertLogRequestApp: LogRequestApp,
  upsertMtVocab: MtVocab,
  upsertMtVocabGroup: MtVocabGroup,
  upsertPersonDocument: PersonDocument,
  upsertRole: Role,
  upsertUserProfile: UserProfile,
  upsertApplication: Application,
  upsertLogRequest: LogRequest,
  upsertRolesType: RolesType,
  upsertNetwork: Network,
  upsertUser: User,
  upsertPerson: Person,
  updateManyCases: BatchPayload,
  updateManyCaseClassifications: BatchPayload,
  updateManyCaseConsultations: BatchPayload,
  updateManyCaseDocuments: BatchPayload,
  updateManyCaseIssues: BatchPayload,
  updateManyCasePks: BatchPayload,
  updateManyCaseProgresses: BatchPayload,
  updateManyCaseProgressActivities: BatchPayload,
  updateManyCaseProgressActivityLits: BatchPayload,
  updateManyCaseProgressActivityNonlits: BatchPayload,
  updateManyCaseTransferReferrals: BatchPayload,
  updateManyCaseTransfers: BatchPayload,
  updateManyCaseReferrals: BatchPayload,
  updateManyCaseViolatedRights: BatchPayload,
  updateManyClients: BatchPayload,
  updateManyDaftarPengacaras: BatchPayload,
  updateManyDataDicts: BatchPayload,
  updateManyDataDictLocals: BatchPayload,
  updateManyMtVocabs: BatchPayload,
  updateManyMtVocabGroups: BatchPayload,
  updateManyPersonDocuments: BatchPayload,
  updateManyUserProfiles: BatchPayload,
  updateManyApplications: BatchPayload,
  updateManyLogRequests: BatchPayload,
  updateManyRolesTypes: BatchPayload,
  updateManyNetworks: BatchPayload,
  updateManyUsers: BatchPayload,
  updateManyPersons: BatchPayload,
  deleteManyCases: BatchPayload,
  deleteManyCaseClassifications: BatchPayload,
  deleteManyCaseConsultations: BatchPayload,
  deleteManyCaseConsultationApps: BatchPayload,
  deleteManyCaseDocuments: BatchPayload,
  deleteManyCaseIssues: BatchPayload,
  deleteManyCaseKorbans: BatchPayload,
  deleteManyCasePelakus: BatchPayload,
  deleteManyCasePks: BatchPayload,
  deleteManyCaseProgresses: BatchPayload,
  deleteManyCaseProgressActivities: BatchPayload,
  deleteManyCaseProgressActivityLits: BatchPayload,
  deleteManyCaseProgressActivityNonlits: BatchPayload,
  deleteManyCaseTransferReferrals: BatchPayload,
  deleteManyCaseTransfers: BatchPayload,
  deleteManyCaseReferrals: BatchPayload,
  deleteManyCaseViolatedRights: BatchPayload,
  deleteManyClients: BatchPayload,
  deleteManyDaftarPengacaras: BatchPayload,
  deleteManyDataDicts: BatchPayload,
  deleteManyDataDictLocals: BatchPayload,
  deleteManyLogRequestApps: BatchPayload,
  deleteManyMtVocabs: BatchPayload,
  deleteManyMtVocabGroups: BatchPayload,
  deleteManyPersonDocuments: BatchPayload,
  deleteManyRoles: BatchPayload,
  deleteManyUserProfiles: BatchPayload,
  deleteManyApplications: BatchPayload,
  deleteManyLogRequests: BatchPayload,
  deleteManyRolesTypes: BatchPayload,
  deleteManyNetworks: BatchPayload,
  deleteManyUsers: BatchPayload,
  deleteManyPersons: BatchPayload,
};


export type MutationCreateCaseArgs = {
  data: CaseCreateInput
};


export type MutationCreateCaseClassificationArgs = {
  data: CaseClassificationCreateInput
};


export type MutationCreateCaseConsultationArgs = {
  data: CaseConsultationCreateInput
};


export type MutationCreateCaseConsultationAppArgs = {
  data: CaseConsultationAppCreateInput
};


export type MutationCreateCaseDocumentArgs = {
  data: CaseDocumentCreateInput
};


export type MutationCreateCaseIssueArgs = {
  data: CaseIssueCreateInput
};


export type MutationCreateCaseKorbanArgs = {
  data: CaseKorbanCreateInput
};


export type MutationCreateCasePelakuArgs = {
  data: CasePelakuCreateInput
};


export type MutationCreateCasePkArgs = {
  data: CasePkCreateInput
};


export type MutationCreateCaseProgressArgs = {
  data: CaseProgressCreateInput
};


export type MutationCreateCaseProgressActivityArgs = {
  data: CaseProgressActivityCreateInput
};


export type MutationCreateCaseProgressActivityLitArgs = {
  data: CaseProgressActivityLitCreateInput
};


export type MutationCreateCaseProgressActivityNonlitArgs = {
  data: CaseProgressActivityNonlitCreateInput
};


export type MutationCreateCaseTransferReferralArgs = {
  data: CaseTransferReferralCreateInput
};


export type MutationCreateCaseTransferArgs = {
  data: CaseTransferCreateInput
};


export type MutationCreateCaseReferralArgs = {
  data: CaseReferralCreateInput
};


export type MutationCreateCaseViolatedRightArgs = {
  data: CaseViolatedRightCreateInput
};


export type MutationCreateClientArgs = {
  data: ClientCreateInput
};


export type MutationCreateDaftarPengacaraArgs = {
  data: DaftarPengacaraCreateInput
};


export type MutationCreateDataDictArgs = {
  data: DataDictCreateInput
};


export type MutationCreateDataDictLocalArgs = {
  data: DataDictLocalCreateInput
};


export type MutationCreateLogRequestAppArgs = {
  data: LogRequestAppCreateInput
};


export type MutationCreateMtVocabArgs = {
  data: MtVocabCreateInput
};


export type MutationCreateMtVocabGroupArgs = {
  data: MtVocabGroupCreateInput
};


export type MutationCreatePersonDocumentArgs = {
  data: PersonDocumentCreateInput
};


export type MutationCreateRoleArgs = {
  data: RoleCreateInput
};


export type MutationCreateUserProfileArgs = {
  data: UserProfileCreateInput
};


export type MutationCreateApplicationArgs = {
  data: ApplicationCreateInput
};


export type MutationCreateLogRequestArgs = {
  data: LogRequestCreateInput
};


export type MutationCreateRolesTypeArgs = {
  data: RolesTypeCreateInput
};


export type MutationCreateNetworkArgs = {
  data: NetworkCreateInput
};


export type MutationCreateUserArgs = {
  data: UserCreateInput
};


export type MutationCreatePersonArgs = {
  data: PersonCreateInput
};


export type MutationUpdateCaseArgs = {
  data: CaseUpdateInput,
  where: CaseWhereUniqueInput
};


export type MutationUpdateCaseClassificationArgs = {
  data: CaseClassificationUpdateInput,
  where: CaseClassificationWhereUniqueInput
};


export type MutationUpdateCaseConsultationArgs = {
  data: CaseConsultationUpdateInput,
  where: CaseConsultationWhereUniqueInput
};


export type MutationUpdateCaseConsultationAppArgs = {
  data: CaseConsultationAppUpdateInput,
  where: CaseConsultationAppWhereUniqueInput
};


export type MutationUpdateCaseDocumentArgs = {
  data: CaseDocumentUpdateInput,
  where: CaseDocumentWhereUniqueInput
};


export type MutationUpdateCaseIssueArgs = {
  data: CaseIssueUpdateInput,
  where: CaseIssueWhereUniqueInput
};


export type MutationUpdateCaseKorbanArgs = {
  data: CaseKorbanUpdateInput,
  where: CaseKorbanWhereUniqueInput
};


export type MutationUpdateCasePelakuArgs = {
  data: CasePelakuUpdateInput,
  where: CasePelakuWhereUniqueInput
};


export type MutationUpdateCasePkArgs = {
  data: CasePkUpdateInput,
  where: CasePkWhereUniqueInput
};


export type MutationUpdateCaseProgressArgs = {
  data: CaseProgressUpdateInput,
  where: CaseProgressWhereUniqueInput
};


export type MutationUpdateCaseProgressActivityArgs = {
  data: CaseProgressActivityUpdateInput,
  where: CaseProgressActivityWhereUniqueInput
};


export type MutationUpdateCaseProgressActivityLitArgs = {
  data: CaseProgressActivityLitUpdateInput,
  where: CaseProgressActivityLitWhereUniqueInput
};


export type MutationUpdateCaseProgressActivityNonlitArgs = {
  data: CaseProgressActivityNonlitUpdateInput,
  where: CaseProgressActivityNonlitWhereUniqueInput
};


export type MutationUpdateCaseTransferReferralArgs = {
  data: CaseTransferReferralUpdateInput,
  where: CaseTransferReferralWhereUniqueInput
};


export type MutationUpdateCaseTransferArgs = {
  data: CaseTransferUpdateInput,
  where: CaseTransferWhereUniqueInput
};


export type MutationUpdateCaseReferralArgs = {
  data: CaseReferralUpdateInput,
  where: CaseReferralWhereUniqueInput
};


export type MutationUpdateCaseViolatedRightArgs = {
  data: CaseViolatedRightUpdateInput,
  where: CaseViolatedRightWhereUniqueInput
};


export type MutationUpdateClientArgs = {
  data: ClientUpdateInput,
  where: ClientWhereUniqueInput
};


export type MutationUpdateDaftarPengacaraArgs = {
  data: DaftarPengacaraUpdateInput,
  where: DaftarPengacaraWhereUniqueInput
};


export type MutationUpdateDataDictArgs = {
  data: DataDictUpdateInput,
  where: DataDictWhereUniqueInput
};


export type MutationUpdateDataDictLocalArgs = {
  data: DataDictLocalUpdateInput,
  where: DataDictLocalWhereUniqueInput
};


export type MutationUpdateLogRequestAppArgs = {
  data: LogRequestAppUpdateInput,
  where: LogRequestAppWhereUniqueInput
};


export type MutationUpdateMtVocabArgs = {
  data: MtVocabUpdateInput,
  where: MtVocabWhereUniqueInput
};


export type MutationUpdateMtVocabGroupArgs = {
  data: MtVocabGroupUpdateInput,
  where: MtVocabGroupWhereUniqueInput
};


export type MutationUpdatePersonDocumentArgs = {
  data: PersonDocumentUpdateInput,
  where: PersonDocumentWhereUniqueInput
};


export type MutationUpdateRoleArgs = {
  data: RoleUpdateInput,
  where: RoleWhereUniqueInput
};


export type MutationUpdateUserProfileArgs = {
  data: UserProfileUpdateInput,
  where: UserProfileWhereUniqueInput
};


export type MutationUpdateApplicationArgs = {
  data: ApplicationUpdateInput,
  where: ApplicationWhereUniqueInput
};


export type MutationUpdateLogRequestArgs = {
  data: LogRequestUpdateInput,
  where: LogRequestWhereUniqueInput
};


export type MutationUpdateRolesTypeArgs = {
  data: RolesTypeUpdateInput,
  where: RolesTypeWhereUniqueInput
};


export type MutationUpdateNetworkArgs = {
  data: NetworkUpdateInput,
  where: NetworkWhereUniqueInput
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput,
  where: UserWhereUniqueInput
};


export type MutationUpdatePersonArgs = {
  data: PersonUpdateInput,
  where: PersonWhereUniqueInput
};


export type MutationDeleteCaseArgs = {
  where: CaseWhereUniqueInput
};


export type MutationDeleteCaseClassificationArgs = {
  where: CaseClassificationWhereUniqueInput
};


export type MutationDeleteCaseConsultationArgs = {
  where: CaseConsultationWhereUniqueInput
};


export type MutationDeleteCaseConsultationAppArgs = {
  where: CaseConsultationAppWhereUniqueInput
};


export type MutationDeleteCaseDocumentArgs = {
  where: CaseDocumentWhereUniqueInput
};


export type MutationDeleteCaseIssueArgs = {
  where: CaseIssueWhereUniqueInput
};


export type MutationDeleteCaseKorbanArgs = {
  where: CaseKorbanWhereUniqueInput
};


export type MutationDeleteCasePelakuArgs = {
  where: CasePelakuWhereUniqueInput
};


export type MutationDeleteCasePkArgs = {
  where: CasePkWhereUniqueInput
};


export type MutationDeleteCaseProgressArgs = {
  where: CaseProgressWhereUniqueInput
};


export type MutationDeleteCaseProgressActivityArgs = {
  where: CaseProgressActivityWhereUniqueInput
};


export type MutationDeleteCaseProgressActivityLitArgs = {
  where: CaseProgressActivityLitWhereUniqueInput
};


export type MutationDeleteCaseProgressActivityNonlitArgs = {
  where: CaseProgressActivityNonlitWhereUniqueInput
};


export type MutationDeleteCaseTransferReferralArgs = {
  where: CaseTransferReferralWhereUniqueInput
};


export type MutationDeleteCaseTransferArgs = {
  where: CaseTransferWhereUniqueInput
};


export type MutationDeleteCaseReferralArgs = {
  where: CaseReferralWhereUniqueInput
};


export type MutationDeleteCaseViolatedRightArgs = {
  where: CaseViolatedRightWhereUniqueInput
};


export type MutationDeleteClientArgs = {
  where: ClientWhereUniqueInput
};


export type MutationDeleteDaftarPengacaraArgs = {
  where: DaftarPengacaraWhereUniqueInput
};


export type MutationDeleteDataDictArgs = {
  where: DataDictWhereUniqueInput
};


export type MutationDeleteDataDictLocalArgs = {
  where: DataDictLocalWhereUniqueInput
};


export type MutationDeleteLogRequestAppArgs = {
  where: LogRequestAppWhereUniqueInput
};


export type MutationDeleteMtVocabArgs = {
  where: MtVocabWhereUniqueInput
};


export type MutationDeleteMtVocabGroupArgs = {
  where: MtVocabGroupWhereUniqueInput
};


export type MutationDeletePersonDocumentArgs = {
  where: PersonDocumentWhereUniqueInput
};


export type MutationDeleteRoleArgs = {
  where: RoleWhereUniqueInput
};


export type MutationDeleteUserProfileArgs = {
  where: UserProfileWhereUniqueInput
};


export type MutationDeleteApplicationArgs = {
  where: ApplicationWhereUniqueInput
};


export type MutationDeleteLogRequestArgs = {
  where: LogRequestWhereUniqueInput
};


export type MutationDeleteRolesTypeArgs = {
  where: RolesTypeWhereUniqueInput
};


export type MutationDeleteNetworkArgs = {
  where: NetworkWhereUniqueInput
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput
};


export type MutationDeletePersonArgs = {
  where: PersonWhereUniqueInput
};


export type MutationUpsertCaseArgs = {
  where: CaseWhereUniqueInput,
  create: CaseCreateInput,
  update: CaseUpdateInput
};


export type MutationUpsertCaseClassificationArgs = {
  where: CaseClassificationWhereUniqueInput,
  create: CaseClassificationCreateInput,
  update: CaseClassificationUpdateInput
};


export type MutationUpsertCaseConsultationArgs = {
  where: CaseConsultationWhereUniqueInput,
  create: CaseConsultationCreateInput,
  update: CaseConsultationUpdateInput
};


export type MutationUpsertCaseConsultationAppArgs = {
  where: CaseConsultationAppWhereUniqueInput,
  create: CaseConsultationAppCreateInput,
  update: CaseConsultationAppUpdateInput
};


export type MutationUpsertCaseDocumentArgs = {
  where: CaseDocumentWhereUniqueInput,
  create: CaseDocumentCreateInput,
  update: CaseDocumentUpdateInput
};


export type MutationUpsertCaseIssueArgs = {
  where: CaseIssueWhereUniqueInput,
  create: CaseIssueCreateInput,
  update: CaseIssueUpdateInput
};


export type MutationUpsertCaseKorbanArgs = {
  where: CaseKorbanWhereUniqueInput,
  create: CaseKorbanCreateInput,
  update: CaseKorbanUpdateInput
};


export type MutationUpsertCasePelakuArgs = {
  where: CasePelakuWhereUniqueInput,
  create: CasePelakuCreateInput,
  update: CasePelakuUpdateInput
};


export type MutationUpsertCasePkArgs = {
  where: CasePkWhereUniqueInput,
  create: CasePkCreateInput,
  update: CasePkUpdateInput
};


export type MutationUpsertCaseProgressArgs = {
  where: CaseProgressWhereUniqueInput,
  create: CaseProgressCreateInput,
  update: CaseProgressUpdateInput
};


export type MutationUpsertCaseProgressActivityArgs = {
  where: CaseProgressActivityWhereUniqueInput,
  create: CaseProgressActivityCreateInput,
  update: CaseProgressActivityUpdateInput
};


export type MutationUpsertCaseProgressActivityLitArgs = {
  where: CaseProgressActivityLitWhereUniqueInput,
  create: CaseProgressActivityLitCreateInput,
  update: CaseProgressActivityLitUpdateInput
};


export type MutationUpsertCaseProgressActivityNonlitArgs = {
  where: CaseProgressActivityNonlitWhereUniqueInput,
  create: CaseProgressActivityNonlitCreateInput,
  update: CaseProgressActivityNonlitUpdateInput
};


export type MutationUpsertCaseTransferReferralArgs = {
  where: CaseTransferReferralWhereUniqueInput,
  create: CaseTransferReferralCreateInput,
  update: CaseTransferReferralUpdateInput
};


export type MutationUpsertCaseTransferArgs = {
  where: CaseTransferWhereUniqueInput,
  create: CaseTransferCreateInput,
  update: CaseTransferUpdateInput
};


export type MutationUpsertCaseReferralArgs = {
  where: CaseReferralWhereUniqueInput,
  create: CaseReferralCreateInput,
  update: CaseReferralUpdateInput
};


export type MutationUpsertCaseViolatedRightArgs = {
  where: CaseViolatedRightWhereUniqueInput,
  create: CaseViolatedRightCreateInput,
  update: CaseViolatedRightUpdateInput
};


export type MutationUpsertClientArgs = {
  where: ClientWhereUniqueInput,
  create: ClientCreateInput,
  update: ClientUpdateInput
};


export type MutationUpsertDaftarPengacaraArgs = {
  where: DaftarPengacaraWhereUniqueInput,
  create: DaftarPengacaraCreateInput,
  update: DaftarPengacaraUpdateInput
};


export type MutationUpsertDataDictArgs = {
  where: DataDictWhereUniqueInput,
  create: DataDictCreateInput,
  update: DataDictUpdateInput
};


export type MutationUpsertDataDictLocalArgs = {
  where: DataDictLocalWhereUniqueInput,
  create: DataDictLocalCreateInput,
  update: DataDictLocalUpdateInput
};


export type MutationUpsertLogRequestAppArgs = {
  where: LogRequestAppWhereUniqueInput,
  create: LogRequestAppCreateInput,
  update: LogRequestAppUpdateInput
};


export type MutationUpsertMtVocabArgs = {
  where: MtVocabWhereUniqueInput,
  create: MtVocabCreateInput,
  update: MtVocabUpdateInput
};


export type MutationUpsertMtVocabGroupArgs = {
  where: MtVocabGroupWhereUniqueInput,
  create: MtVocabGroupCreateInput,
  update: MtVocabGroupUpdateInput
};


export type MutationUpsertPersonDocumentArgs = {
  where: PersonDocumentWhereUniqueInput,
  create: PersonDocumentCreateInput,
  update: PersonDocumentUpdateInput
};


export type MutationUpsertRoleArgs = {
  where: RoleWhereUniqueInput,
  create: RoleCreateInput,
  update: RoleUpdateInput
};


export type MutationUpsertUserProfileArgs = {
  where: UserProfileWhereUniqueInput,
  create: UserProfileCreateInput,
  update: UserProfileUpdateInput
};


export type MutationUpsertApplicationArgs = {
  where: ApplicationWhereUniqueInput,
  create: ApplicationCreateInput,
  update: ApplicationUpdateInput
};


export type MutationUpsertLogRequestArgs = {
  where: LogRequestWhereUniqueInput,
  create: LogRequestCreateInput,
  update: LogRequestUpdateInput
};


export type MutationUpsertRolesTypeArgs = {
  where: RolesTypeWhereUniqueInput,
  create: RolesTypeCreateInput,
  update: RolesTypeUpdateInput
};


export type MutationUpsertNetworkArgs = {
  where: NetworkWhereUniqueInput,
  create: NetworkCreateInput,
  update: NetworkUpdateInput
};


export type MutationUpsertUserArgs = {
  where: UserWhereUniqueInput,
  create: UserCreateInput,
  update: UserUpdateInput
};


export type MutationUpsertPersonArgs = {
  where: PersonWhereUniqueInput,
  create: PersonCreateInput,
  update: PersonUpdateInput
};


export type MutationUpdateManyCasesArgs = {
  data: CaseUpdateManyMutationInput,
  where?: Maybe<CaseWhereInput>
};


export type MutationUpdateManyCaseClassificationsArgs = {
  data: CaseClassificationUpdateManyMutationInput,
  where?: Maybe<CaseClassificationWhereInput>
};


export type MutationUpdateManyCaseConsultationsArgs = {
  data: CaseConsultationUpdateManyMutationInput,
  where?: Maybe<CaseConsultationWhereInput>
};


export type MutationUpdateManyCaseDocumentsArgs = {
  data: CaseDocumentUpdateManyMutationInput,
  where?: Maybe<CaseDocumentWhereInput>
};


export type MutationUpdateManyCaseIssuesArgs = {
  data: CaseIssueUpdateManyMutationInput,
  where?: Maybe<CaseIssueWhereInput>
};


export type MutationUpdateManyCasePksArgs = {
  data: CasePkUpdateManyMutationInput,
  where?: Maybe<CasePkWhereInput>
};


export type MutationUpdateManyCaseProgressesArgs = {
  data: CaseProgressUpdateManyMutationInput,
  where?: Maybe<CaseProgressWhereInput>
};


export type MutationUpdateManyCaseProgressActivitiesArgs = {
  data: CaseProgressActivityUpdateManyMutationInput,
  where?: Maybe<CaseProgressActivityWhereInput>
};


export type MutationUpdateManyCaseProgressActivityLitsArgs = {
  data: CaseProgressActivityLitUpdateManyMutationInput,
  where?: Maybe<CaseProgressActivityLitWhereInput>
};


export type MutationUpdateManyCaseProgressActivityNonlitsArgs = {
  data: CaseProgressActivityNonlitUpdateManyMutationInput,
  where?: Maybe<CaseProgressActivityNonlitWhereInput>
};


export type MutationUpdateManyCaseTransferReferralsArgs = {
  data: CaseTransferReferralUpdateManyMutationInput,
  where?: Maybe<CaseTransferReferralWhereInput>
};


export type MutationUpdateManyCaseTransfersArgs = {
  data: CaseTransferUpdateManyMutationInput,
  where?: Maybe<CaseTransferWhereInput>
};


export type MutationUpdateManyCaseReferralsArgs = {
  data: CaseReferralUpdateManyMutationInput,
  where?: Maybe<CaseReferralWhereInput>
};


export type MutationUpdateManyCaseViolatedRightsArgs = {
  data: CaseViolatedRightUpdateManyMutationInput,
  where?: Maybe<CaseViolatedRightWhereInput>
};


export type MutationUpdateManyClientsArgs = {
  data: ClientUpdateManyMutationInput,
  where?: Maybe<ClientWhereInput>
};


export type MutationUpdateManyDaftarPengacarasArgs = {
  data: DaftarPengacaraUpdateManyMutationInput,
  where?: Maybe<DaftarPengacaraWhereInput>
};


export type MutationUpdateManyDataDictsArgs = {
  data: DataDictUpdateManyMutationInput,
  where?: Maybe<DataDictWhereInput>
};


export type MutationUpdateManyDataDictLocalsArgs = {
  data: DataDictLocalUpdateManyMutationInput,
  where?: Maybe<DataDictLocalWhereInput>
};


export type MutationUpdateManyMtVocabsArgs = {
  data: MtVocabUpdateManyMutationInput,
  where?: Maybe<MtVocabWhereInput>
};


export type MutationUpdateManyMtVocabGroupsArgs = {
  data: MtVocabGroupUpdateManyMutationInput,
  where?: Maybe<MtVocabGroupWhereInput>
};


export type MutationUpdateManyPersonDocumentsArgs = {
  data: PersonDocumentUpdateManyMutationInput,
  where?: Maybe<PersonDocumentWhereInput>
};


export type MutationUpdateManyUserProfilesArgs = {
  data: UserProfileUpdateManyMutationInput,
  where?: Maybe<UserProfileWhereInput>
};


export type MutationUpdateManyApplicationsArgs = {
  data: ApplicationUpdateManyMutationInput,
  where?: Maybe<ApplicationWhereInput>
};


export type MutationUpdateManyLogRequestsArgs = {
  data: LogRequestUpdateManyMutationInput,
  where?: Maybe<LogRequestWhereInput>
};


export type MutationUpdateManyRolesTypesArgs = {
  data: RolesTypeUpdateManyMutationInput,
  where?: Maybe<RolesTypeWhereInput>
};


export type MutationUpdateManyNetworksArgs = {
  data: NetworkUpdateManyMutationInput,
  where?: Maybe<NetworkWhereInput>
};


export type MutationUpdateManyUsersArgs = {
  data: UserUpdateManyMutationInput,
  where?: Maybe<UserWhereInput>
};


export type MutationUpdateManyPersonsArgs = {
  data: PersonUpdateManyMutationInput,
  where?: Maybe<PersonWhereInput>
};


export type MutationDeleteManyCasesArgs = {
  where?: Maybe<CaseWhereInput>
};


export type MutationDeleteManyCaseClassificationsArgs = {
  where?: Maybe<CaseClassificationWhereInput>
};


export type MutationDeleteManyCaseConsultationsArgs = {
  where?: Maybe<CaseConsultationWhereInput>
};


export type MutationDeleteManyCaseConsultationAppsArgs = {
  where?: Maybe<CaseConsultationAppWhereInput>
};


export type MutationDeleteManyCaseDocumentsArgs = {
  where?: Maybe<CaseDocumentWhereInput>
};


export type MutationDeleteManyCaseIssuesArgs = {
  where?: Maybe<CaseIssueWhereInput>
};


export type MutationDeleteManyCaseKorbansArgs = {
  where?: Maybe<CaseKorbanWhereInput>
};


export type MutationDeleteManyCasePelakusArgs = {
  where?: Maybe<CasePelakuWhereInput>
};


export type MutationDeleteManyCasePksArgs = {
  where?: Maybe<CasePkWhereInput>
};


export type MutationDeleteManyCaseProgressesArgs = {
  where?: Maybe<CaseProgressWhereInput>
};


export type MutationDeleteManyCaseProgressActivitiesArgs = {
  where?: Maybe<CaseProgressActivityWhereInput>
};


export type MutationDeleteManyCaseProgressActivityLitsArgs = {
  where?: Maybe<CaseProgressActivityLitWhereInput>
};


export type MutationDeleteManyCaseProgressActivityNonlitsArgs = {
  where?: Maybe<CaseProgressActivityNonlitWhereInput>
};


export type MutationDeleteManyCaseTransferReferralsArgs = {
  where?: Maybe<CaseTransferReferralWhereInput>
};


export type MutationDeleteManyCaseTransfersArgs = {
  where?: Maybe<CaseTransferWhereInput>
};


export type MutationDeleteManyCaseReferralsArgs = {
  where?: Maybe<CaseReferralWhereInput>
};


export type MutationDeleteManyCaseViolatedRightsArgs = {
  where?: Maybe<CaseViolatedRightWhereInput>
};


export type MutationDeleteManyClientsArgs = {
  where?: Maybe<ClientWhereInput>
};


export type MutationDeleteManyDaftarPengacarasArgs = {
  where?: Maybe<DaftarPengacaraWhereInput>
};


export type MutationDeleteManyDataDictsArgs = {
  where?: Maybe<DataDictWhereInput>
};


export type MutationDeleteManyDataDictLocalsArgs = {
  where?: Maybe<DataDictLocalWhereInput>
};


export type MutationDeleteManyLogRequestAppsArgs = {
  where?: Maybe<LogRequestAppWhereInput>
};


export type MutationDeleteManyMtVocabsArgs = {
  where?: Maybe<MtVocabWhereInput>
};


export type MutationDeleteManyMtVocabGroupsArgs = {
  where?: Maybe<MtVocabGroupWhereInput>
};


export type MutationDeleteManyPersonDocumentsArgs = {
  where?: Maybe<PersonDocumentWhereInput>
};


export type MutationDeleteManyRolesArgs = {
  where?: Maybe<RoleWhereInput>
};


export type MutationDeleteManyUserProfilesArgs = {
  where?: Maybe<UserProfileWhereInput>
};


export type MutationDeleteManyApplicationsArgs = {
  where?: Maybe<ApplicationWhereInput>
};


export type MutationDeleteManyLogRequestsArgs = {
  where?: Maybe<LogRequestWhereInput>
};


export type MutationDeleteManyRolesTypesArgs = {
  where?: Maybe<RolesTypeWhereInput>
};


export type MutationDeleteManyNetworksArgs = {
  where?: Maybe<NetworkWhereInput>
};


export type MutationDeleteManyUsersArgs = {
  where?: Maybe<UserWhereInput>
};


export type MutationDeleteManyPersonsArgs = {
  where?: Maybe<PersonWhereInput>
};

export enum MutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED'
}

export type Network = {
  address?: Maybe<Scalars['String']>,
  contactPerson?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  email?: Maybe<Scalars['String']>,
  id: Scalars['Int'],
  name?: Maybe<Scalars['String']>,
  noContact?: Maybe<Scalars['String']>,
  provinceId?: Maybe<Scalars['Int']>,
  regencyId?: Maybe<Scalars['Int']>,
  type?: Maybe<Scalars['String']>,
  updatedAt: Scalars['DateTime'],
  logRequests?: Maybe<Array<LogRequest>>,
};


export type NetworkLogRequestsArgs = {
  where?: Maybe<LogRequestWhereInput>,
  orderBy?: Maybe<LogRequestOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

/** A connection to a list of items. */
export type NetworkConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<NetworkEdge>>,
  aggregate: AggregateNetwork,
};

export type NetworkCreateInput = {
  address?: Maybe<Scalars['String']>,
  contactPerson?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  noContact?: Maybe<Scalars['String']>,
  provinceId?: Maybe<Scalars['Int']>,
  regencyId?: Maybe<Scalars['Int']>,
  type?: Maybe<Scalars['String']>,
  logRequests?: Maybe<LogRequestCreateManyWithoutNetworkIdInput>,
};

export type NetworkCreateOneInput = {
  create?: Maybe<NetworkCreateInput>,
  connect?: Maybe<NetworkWhereUniqueInput>,
};

export type NetworkCreateOneWithoutLogRequestsInput = {
  create?: Maybe<NetworkCreateWithoutLogRequestsInput>,
  connect?: Maybe<NetworkWhereUniqueInput>,
};

export type NetworkCreateWithoutLogRequestsInput = {
  address?: Maybe<Scalars['String']>,
  contactPerson?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  noContact?: Maybe<Scalars['String']>,
  provinceId?: Maybe<Scalars['Int']>,
  regencyId?: Maybe<Scalars['Int']>,
  type?: Maybe<Scalars['String']>,
};

/** An edge in a connection. */
export type NetworkEdge = {
  /** The item at the end of the edge. */
  node: Network,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum NetworkOrderByInput {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  ContactPersonAsc = 'contactPerson_ASC',
  ContactPersonDesc = 'contactPerson_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  NoContactAsc = 'noContact_ASC',
  NoContactDesc = 'noContact_DESC',
  ProvinceIdAsc = 'provinceId_ASC',
  ProvinceIdDesc = 'provinceId_DESC',
  RegencyIdAsc = 'regencyId_ASC',
  RegencyIdDesc = 'regencyId_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type NetworkPreviousValues = {
  address?: Maybe<Scalars['String']>,
  contactPerson?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  email?: Maybe<Scalars['String']>,
  id: Scalars['Int'],
  name?: Maybe<Scalars['String']>,
  noContact?: Maybe<Scalars['String']>,
  provinceId?: Maybe<Scalars['Int']>,
  regencyId?: Maybe<Scalars['Int']>,
  type?: Maybe<Scalars['String']>,
  updatedAt: Scalars['DateTime'],
};

export type NetworkSubscriptionPayload = {
  mutation: MutationType,
  node?: Maybe<Network>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<NetworkPreviousValues>,
};

export type NetworkSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<NetworkSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<NetworkSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<NetworkSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<NetworkWhereInput>,
};

export type NetworkUpdateDataInput = {
  address?: Maybe<Scalars['String']>,
  contactPerson?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  noContact?: Maybe<Scalars['String']>,
  provinceId?: Maybe<Scalars['Int']>,
  regencyId?: Maybe<Scalars['Int']>,
  type?: Maybe<Scalars['String']>,
  logRequests?: Maybe<LogRequestUpdateManyWithoutNetworkIdInput>,
};

export type NetworkUpdateInput = {
  address?: Maybe<Scalars['String']>,
  contactPerson?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  noContact?: Maybe<Scalars['String']>,
  provinceId?: Maybe<Scalars['Int']>,
  regencyId?: Maybe<Scalars['Int']>,
  type?: Maybe<Scalars['String']>,
  logRequests?: Maybe<LogRequestUpdateManyWithoutNetworkIdInput>,
};

export type NetworkUpdateManyMutationInput = {
  address?: Maybe<Scalars['String']>,
  contactPerson?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  noContact?: Maybe<Scalars['String']>,
  provinceId?: Maybe<Scalars['Int']>,
  regencyId?: Maybe<Scalars['Int']>,
  type?: Maybe<Scalars['String']>,
};

export type NetworkUpdateOneInput = {
  create?: Maybe<NetworkCreateInput>,
  connect?: Maybe<NetworkWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<NetworkUpdateDataInput>,
  upsert?: Maybe<NetworkUpsertNestedInput>,
};

export type NetworkUpdateOneWithoutLogRequestsInput = {
  create?: Maybe<NetworkCreateWithoutLogRequestsInput>,
  connect?: Maybe<NetworkWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<NetworkUpdateWithoutLogRequestsDataInput>,
  upsert?: Maybe<NetworkUpsertWithoutLogRequestsInput>,
};

export type NetworkUpdateWithoutLogRequestsDataInput = {
  address?: Maybe<Scalars['String']>,
  contactPerson?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  noContact?: Maybe<Scalars['String']>,
  provinceId?: Maybe<Scalars['Int']>,
  regencyId?: Maybe<Scalars['Int']>,
  type?: Maybe<Scalars['String']>,
};

export type NetworkUpsertNestedInput = {
  update: NetworkUpdateDataInput,
  create: NetworkCreateInput,
};

export type NetworkUpsertWithoutLogRequestsInput = {
  update: NetworkUpdateWithoutLogRequestsDataInput,
  create: NetworkCreateWithoutLogRequestsInput,
};

export type NetworkWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<NetworkWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<NetworkWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<NetworkWhereInput>>,
  address?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  address_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  address_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  address_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  address_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  address_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  address_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  address_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  address_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  address_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  address_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  address_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  address_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  address_not_ends_with?: Maybe<Scalars['String']>,
  contactPerson?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  contactPerson_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  contactPerson_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  contactPerson_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  contactPerson_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  contactPerson_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  contactPerson_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  contactPerson_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  contactPerson_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  contactPerson_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  contactPerson_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  contactPerson_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  contactPerson_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  contactPerson_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  email_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  email_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  email_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  email_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  email_not_ends_with?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>,
  noContact?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  noContact_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  noContact_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  noContact_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  noContact_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  noContact_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  noContact_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  noContact_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  noContact_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  noContact_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  noContact_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  noContact_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  noContact_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  noContact_not_ends_with?: Maybe<Scalars['String']>,
  provinceId?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  provinceId_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  provinceId_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  provinceId_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  provinceId_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  provinceId_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  provinceId_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  provinceId_gte?: Maybe<Scalars['Int']>,
  regencyId?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  regencyId_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  regencyId_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  regencyId_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  regencyId_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  regencyId_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  regencyId_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  regencyId_gte?: Maybe<Scalars['Int']>,
  type?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  type_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  type_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  type_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  type_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  type_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  type_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  type_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  type_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  type_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  type_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  type_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  type_not_ends_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  logRequests_every?: Maybe<LogRequestWhereInput>,
  logRequests_some?: Maybe<LogRequestWhereInput>,
  logRequests_none?: Maybe<LogRequestWhereInput>,
};

export type NetworkWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'],
};

/** Information about pagination in a connection. */
export type PageInfo = {
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'],
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'],
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>,
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>,
};

export type Person = {
  id: Scalars['Int'],
  agama?: Maybe<Scalars['String']>,
  alamatDomisili?: Maybe<Scalars['String']>,
  alamatId?: Maybe<Scalars['String']>,
  alatBantu?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  disabilitas: Scalars['Boolean'],
  distrikDomisili?: Maybe<Scalars['String']>,
  distrikId?: Maybe<Scalars['String']>,
  domisiliSama: Scalars['Boolean'],
  email?: Maybe<Scalars['String']>,
  golDarah?: Maybe<Scalars['String']>,
  jenisDisabilitas?: Maybe<Scalars['String']>,
  jenisDomisili?: Maybe<Scalars['String']>,
  jenisId?: Maybe<Scalars['String']>,
  jenisKelamin?: Maybe<Scalars['String']>,
  jmlAnggota?: Maybe<Scalars['Int']>,
  namaLengkap?: Maybe<Scalars['String']>,
  nomorId?: Maybe<Scalars['String']>,
  pekerjaan?: Maybe<Scalars['String']>,
  pendidikan?: Maybe<Scalars['String']>,
  statusPernikahan?: Maybe<Scalars['String']>,
  telepon?: Maybe<Scalars['String']>,
  tglLahir?: Maybe<Scalars['DateTime']>,
  tmpLahir?: Maybe<Scalars['String']>,
  unitSatuan?: Maybe<Scalars['String']>,
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
  wargaNegara?: Maybe<Scalars['String']>,
  applications?: Maybe<Array<Application>>,
  casekorbans?: Maybe<Array<CaseKorban>>,
  casepelakus?: Maybe<Array<CasePelaku>>,
  clients?: Maybe<Array<Client>>,
  documents?: Maybe<Array<PersonDocument>>,
  logRequests?: Maybe<Array<LogRequest>>,
};


export type PersonApplicationsArgs = {
  where?: Maybe<ApplicationWhereInput>,
  orderBy?: Maybe<ApplicationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type PersonCasekorbansArgs = {
  where?: Maybe<CaseKorbanWhereInput>,
  orderBy?: Maybe<CaseKorbanOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type PersonCasepelakusArgs = {
  where?: Maybe<CasePelakuWhereInput>,
  orderBy?: Maybe<CasePelakuOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type PersonClientsArgs = {
  where?: Maybe<ClientWhereInput>,
  orderBy?: Maybe<ClientOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type PersonDocumentsArgs = {
  where?: Maybe<PersonDocumentWhereInput>,
  orderBy?: Maybe<PersonDocumentOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type PersonLogRequestsArgs = {
  where?: Maybe<LogRequestWhereInput>,
  orderBy?: Maybe<LogRequestOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

/** A connection to a list of items. */
export type PersonConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<PersonEdge>>,
  aggregate: AggregatePerson,
};

export type PersonCreateInput = {
  agama?: Maybe<Scalars['String']>,
  alamatDomisili?: Maybe<Scalars['String']>,
  alamatId?: Maybe<Scalars['String']>,
  alatBantu?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  disabilitas: Scalars['Boolean'],
  distrikDomisili?: Maybe<Scalars['String']>,
  distrikId?: Maybe<Scalars['String']>,
  domisiliSama: Scalars['Boolean'],
  email?: Maybe<Scalars['String']>,
  golDarah?: Maybe<Scalars['String']>,
  jenisDisabilitas?: Maybe<Scalars['String']>,
  jenisDomisili?: Maybe<Scalars['String']>,
  jenisId?: Maybe<Scalars['String']>,
  jenisKelamin?: Maybe<Scalars['String']>,
  jmlAnggota?: Maybe<Scalars['Int']>,
  namaLengkap?: Maybe<Scalars['String']>,
  nomorId?: Maybe<Scalars['String']>,
  pekerjaan?: Maybe<Scalars['String']>,
  pendidikan?: Maybe<Scalars['String']>,
  statusPernikahan?: Maybe<Scalars['String']>,
  telepon?: Maybe<Scalars['String']>,
  tglLahir?: Maybe<Scalars['DateTime']>,
  tmpLahir?: Maybe<Scalars['String']>,
  unitSatuan?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  wargaNegara?: Maybe<Scalars['String']>,
  applications?: Maybe<ApplicationCreateManyWithoutWakilIdInput>,
  casekorbans?: Maybe<CaseKorbanCreateManyWithoutPersonIdInput>,
  casepelakus?: Maybe<CasePelakuCreateManyWithoutPersonIdInput>,
  clients?: Maybe<ClientCreateManyWithoutPersonIdInput>,
  documents?: Maybe<PersonDocumentCreateManyWithoutPersonIdInput>,
  logRequests?: Maybe<LogRequestCreateManyWithoutPersonIdInput>,
};

export type PersonCreateOneInput = {
  create?: Maybe<PersonCreateInput>,
  connect?: Maybe<PersonWhereUniqueInput>,
};

export type PersonCreateOneWithoutApplicationsInput = {
  create?: Maybe<PersonCreateWithoutApplicationsInput>,
  connect?: Maybe<PersonWhereUniqueInput>,
};

export type PersonCreateOneWithoutCasekorbansInput = {
  create?: Maybe<PersonCreateWithoutCasekorbansInput>,
  connect?: Maybe<PersonWhereUniqueInput>,
};

export type PersonCreateOneWithoutCasepelakusInput = {
  create?: Maybe<PersonCreateWithoutCasepelakusInput>,
  connect?: Maybe<PersonWhereUniqueInput>,
};

export type PersonCreateOneWithoutClientsInput = {
  create?: Maybe<PersonCreateWithoutClientsInput>,
  connect?: Maybe<PersonWhereUniqueInput>,
};

export type PersonCreateOneWithoutDocumentsInput = {
  create?: Maybe<PersonCreateWithoutDocumentsInput>,
  connect?: Maybe<PersonWhereUniqueInput>,
};

export type PersonCreateOneWithoutLogRequestsInput = {
  create?: Maybe<PersonCreateWithoutLogRequestsInput>,
  connect?: Maybe<PersonWhereUniqueInput>,
};

export type PersonCreateWithoutApplicationsInput = {
  agama?: Maybe<Scalars['String']>,
  alamatDomisili?: Maybe<Scalars['String']>,
  alamatId?: Maybe<Scalars['String']>,
  alatBantu?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  disabilitas: Scalars['Boolean'],
  distrikDomisili?: Maybe<Scalars['String']>,
  distrikId?: Maybe<Scalars['String']>,
  domisiliSama: Scalars['Boolean'],
  email?: Maybe<Scalars['String']>,
  golDarah?: Maybe<Scalars['String']>,
  jenisDisabilitas?: Maybe<Scalars['String']>,
  jenisDomisili?: Maybe<Scalars['String']>,
  jenisId?: Maybe<Scalars['String']>,
  jenisKelamin?: Maybe<Scalars['String']>,
  jmlAnggota?: Maybe<Scalars['Int']>,
  namaLengkap?: Maybe<Scalars['String']>,
  nomorId?: Maybe<Scalars['String']>,
  pekerjaan?: Maybe<Scalars['String']>,
  pendidikan?: Maybe<Scalars['String']>,
  statusPernikahan?: Maybe<Scalars['String']>,
  telepon?: Maybe<Scalars['String']>,
  tglLahir?: Maybe<Scalars['DateTime']>,
  tmpLahir?: Maybe<Scalars['String']>,
  unitSatuan?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  wargaNegara?: Maybe<Scalars['String']>,
  casekorbans?: Maybe<CaseKorbanCreateManyWithoutPersonIdInput>,
  casepelakus?: Maybe<CasePelakuCreateManyWithoutPersonIdInput>,
  clients?: Maybe<ClientCreateManyWithoutPersonIdInput>,
  documents?: Maybe<PersonDocumentCreateManyWithoutPersonIdInput>,
  logRequests?: Maybe<LogRequestCreateManyWithoutPersonIdInput>,
};

export type PersonCreateWithoutCasekorbansInput = {
  agama?: Maybe<Scalars['String']>,
  alamatDomisili?: Maybe<Scalars['String']>,
  alamatId?: Maybe<Scalars['String']>,
  alatBantu?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  disabilitas: Scalars['Boolean'],
  distrikDomisili?: Maybe<Scalars['String']>,
  distrikId?: Maybe<Scalars['String']>,
  domisiliSama: Scalars['Boolean'],
  email?: Maybe<Scalars['String']>,
  golDarah?: Maybe<Scalars['String']>,
  jenisDisabilitas?: Maybe<Scalars['String']>,
  jenisDomisili?: Maybe<Scalars['String']>,
  jenisId?: Maybe<Scalars['String']>,
  jenisKelamin?: Maybe<Scalars['String']>,
  jmlAnggota?: Maybe<Scalars['Int']>,
  namaLengkap?: Maybe<Scalars['String']>,
  nomorId?: Maybe<Scalars['String']>,
  pekerjaan?: Maybe<Scalars['String']>,
  pendidikan?: Maybe<Scalars['String']>,
  statusPernikahan?: Maybe<Scalars['String']>,
  telepon?: Maybe<Scalars['String']>,
  tglLahir?: Maybe<Scalars['DateTime']>,
  tmpLahir?: Maybe<Scalars['String']>,
  unitSatuan?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  wargaNegara?: Maybe<Scalars['String']>,
  applications?: Maybe<ApplicationCreateManyWithoutWakilIdInput>,
  casepelakus?: Maybe<CasePelakuCreateManyWithoutPersonIdInput>,
  clients?: Maybe<ClientCreateManyWithoutPersonIdInput>,
  documents?: Maybe<PersonDocumentCreateManyWithoutPersonIdInput>,
  logRequests?: Maybe<LogRequestCreateManyWithoutPersonIdInput>,
};

export type PersonCreateWithoutCasepelakusInput = {
  agama?: Maybe<Scalars['String']>,
  alamatDomisili?: Maybe<Scalars['String']>,
  alamatId?: Maybe<Scalars['String']>,
  alatBantu?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  disabilitas: Scalars['Boolean'],
  distrikDomisili?: Maybe<Scalars['String']>,
  distrikId?: Maybe<Scalars['String']>,
  domisiliSama: Scalars['Boolean'],
  email?: Maybe<Scalars['String']>,
  golDarah?: Maybe<Scalars['String']>,
  jenisDisabilitas?: Maybe<Scalars['String']>,
  jenisDomisili?: Maybe<Scalars['String']>,
  jenisId?: Maybe<Scalars['String']>,
  jenisKelamin?: Maybe<Scalars['String']>,
  jmlAnggota?: Maybe<Scalars['Int']>,
  namaLengkap?: Maybe<Scalars['String']>,
  nomorId?: Maybe<Scalars['String']>,
  pekerjaan?: Maybe<Scalars['String']>,
  pendidikan?: Maybe<Scalars['String']>,
  statusPernikahan?: Maybe<Scalars['String']>,
  telepon?: Maybe<Scalars['String']>,
  tglLahir?: Maybe<Scalars['DateTime']>,
  tmpLahir?: Maybe<Scalars['String']>,
  unitSatuan?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  wargaNegara?: Maybe<Scalars['String']>,
  applications?: Maybe<ApplicationCreateManyWithoutWakilIdInput>,
  casekorbans?: Maybe<CaseKorbanCreateManyWithoutPersonIdInput>,
  clients?: Maybe<ClientCreateManyWithoutPersonIdInput>,
  documents?: Maybe<PersonDocumentCreateManyWithoutPersonIdInput>,
  logRequests?: Maybe<LogRequestCreateManyWithoutPersonIdInput>,
};

export type PersonCreateWithoutClientsInput = {
  agama?: Maybe<Scalars['String']>,
  alamatDomisili?: Maybe<Scalars['String']>,
  alamatId?: Maybe<Scalars['String']>,
  alatBantu?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  disabilitas: Scalars['Boolean'],
  distrikDomisili?: Maybe<Scalars['String']>,
  distrikId?: Maybe<Scalars['String']>,
  domisiliSama: Scalars['Boolean'],
  email?: Maybe<Scalars['String']>,
  golDarah?: Maybe<Scalars['String']>,
  jenisDisabilitas?: Maybe<Scalars['String']>,
  jenisDomisili?: Maybe<Scalars['String']>,
  jenisId?: Maybe<Scalars['String']>,
  jenisKelamin?: Maybe<Scalars['String']>,
  jmlAnggota?: Maybe<Scalars['Int']>,
  namaLengkap?: Maybe<Scalars['String']>,
  nomorId?: Maybe<Scalars['String']>,
  pekerjaan?: Maybe<Scalars['String']>,
  pendidikan?: Maybe<Scalars['String']>,
  statusPernikahan?: Maybe<Scalars['String']>,
  telepon?: Maybe<Scalars['String']>,
  tglLahir?: Maybe<Scalars['DateTime']>,
  tmpLahir?: Maybe<Scalars['String']>,
  unitSatuan?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  wargaNegara?: Maybe<Scalars['String']>,
  applications?: Maybe<ApplicationCreateManyWithoutWakilIdInput>,
  casekorbans?: Maybe<CaseKorbanCreateManyWithoutPersonIdInput>,
  casepelakus?: Maybe<CasePelakuCreateManyWithoutPersonIdInput>,
  documents?: Maybe<PersonDocumentCreateManyWithoutPersonIdInput>,
  logRequests?: Maybe<LogRequestCreateManyWithoutPersonIdInput>,
};

export type PersonCreateWithoutDocumentsInput = {
  agama?: Maybe<Scalars['String']>,
  alamatDomisili?: Maybe<Scalars['String']>,
  alamatId?: Maybe<Scalars['String']>,
  alatBantu?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  disabilitas: Scalars['Boolean'],
  distrikDomisili?: Maybe<Scalars['String']>,
  distrikId?: Maybe<Scalars['String']>,
  domisiliSama: Scalars['Boolean'],
  email?: Maybe<Scalars['String']>,
  golDarah?: Maybe<Scalars['String']>,
  jenisDisabilitas?: Maybe<Scalars['String']>,
  jenisDomisili?: Maybe<Scalars['String']>,
  jenisId?: Maybe<Scalars['String']>,
  jenisKelamin?: Maybe<Scalars['String']>,
  jmlAnggota?: Maybe<Scalars['Int']>,
  namaLengkap?: Maybe<Scalars['String']>,
  nomorId?: Maybe<Scalars['String']>,
  pekerjaan?: Maybe<Scalars['String']>,
  pendidikan?: Maybe<Scalars['String']>,
  statusPernikahan?: Maybe<Scalars['String']>,
  telepon?: Maybe<Scalars['String']>,
  tglLahir?: Maybe<Scalars['DateTime']>,
  tmpLahir?: Maybe<Scalars['String']>,
  unitSatuan?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  wargaNegara?: Maybe<Scalars['String']>,
  applications?: Maybe<ApplicationCreateManyWithoutWakilIdInput>,
  casekorbans?: Maybe<CaseKorbanCreateManyWithoutPersonIdInput>,
  casepelakus?: Maybe<CasePelakuCreateManyWithoutPersonIdInput>,
  clients?: Maybe<ClientCreateManyWithoutPersonIdInput>,
  logRequests?: Maybe<LogRequestCreateManyWithoutPersonIdInput>,
};

export type PersonCreateWithoutLogRequestsInput = {
  agama?: Maybe<Scalars['String']>,
  alamatDomisili?: Maybe<Scalars['String']>,
  alamatId?: Maybe<Scalars['String']>,
  alatBantu?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  disabilitas: Scalars['Boolean'],
  distrikDomisili?: Maybe<Scalars['String']>,
  distrikId?: Maybe<Scalars['String']>,
  domisiliSama: Scalars['Boolean'],
  email?: Maybe<Scalars['String']>,
  golDarah?: Maybe<Scalars['String']>,
  jenisDisabilitas?: Maybe<Scalars['String']>,
  jenisDomisili?: Maybe<Scalars['String']>,
  jenisId?: Maybe<Scalars['String']>,
  jenisKelamin?: Maybe<Scalars['String']>,
  jmlAnggota?: Maybe<Scalars['Int']>,
  namaLengkap?: Maybe<Scalars['String']>,
  nomorId?: Maybe<Scalars['String']>,
  pekerjaan?: Maybe<Scalars['String']>,
  pendidikan?: Maybe<Scalars['String']>,
  statusPernikahan?: Maybe<Scalars['String']>,
  telepon?: Maybe<Scalars['String']>,
  tglLahir?: Maybe<Scalars['DateTime']>,
  tmpLahir?: Maybe<Scalars['String']>,
  unitSatuan?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  wargaNegara?: Maybe<Scalars['String']>,
  applications?: Maybe<ApplicationCreateManyWithoutWakilIdInput>,
  casekorbans?: Maybe<CaseKorbanCreateManyWithoutPersonIdInput>,
  casepelakus?: Maybe<CasePelakuCreateManyWithoutPersonIdInput>,
  clients?: Maybe<ClientCreateManyWithoutPersonIdInput>,
  documents?: Maybe<PersonDocumentCreateManyWithoutPersonIdInput>,
};

export type PersonDocument = {
  createdAt: Scalars['DateTime'],
  deletedAt?: Maybe<Scalars['DateTime']>,
  file?: Maybe<Scalars['Int']>,
  id: Scalars['Int'],
  personId: Person,
  title?: Maybe<Scalars['Int']>,
  updatedAt: Scalars['DateTime'],
};

/** A connection to a list of items. */
export type PersonDocumentConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<PersonDocumentEdge>>,
  aggregate: AggregatePersonDocument,
};

export type PersonDocumentCreateInput = {
  deletedAt?: Maybe<Scalars['DateTime']>,
  file?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['Int']>,
  personId: PersonCreateOneWithoutDocumentsInput,
};

export type PersonDocumentCreateManyWithoutPersonIdInput = {
  create?: Maybe<Array<PersonDocumentCreateWithoutPersonIdInput>>,
  connect?: Maybe<Array<PersonDocumentWhereUniqueInput>>,
};

export type PersonDocumentCreateWithoutPersonIdInput = {
  deletedAt?: Maybe<Scalars['DateTime']>,
  file?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['Int']>,
};

/** An edge in a connection. */
export type PersonDocumentEdge = {
  /** The item at the end of the edge. */
  node: PersonDocument,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum PersonDocumentOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  FileAsc = 'file_ASC',
  FileDesc = 'file_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PersonDocumentPreviousValues = {
  createdAt: Scalars['DateTime'],
  deletedAt?: Maybe<Scalars['DateTime']>,
  file?: Maybe<Scalars['Int']>,
  id: Scalars['Int'],
  title?: Maybe<Scalars['Int']>,
  updatedAt: Scalars['DateTime'],
};

export type PersonDocumentScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PersonDocumentScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PersonDocumentScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PersonDocumentScalarWhereInput>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  deletedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  deletedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  deletedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  deletedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  deletedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  deletedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  deletedAt_gte?: Maybe<Scalars['DateTime']>,
  file?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  file_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  file_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  file_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  file_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  file_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  file_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  file_gte?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  title_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  title_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  title_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
};

export type PersonDocumentSubscriptionPayload = {
  mutation: MutationType,
  node?: Maybe<PersonDocument>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<PersonDocumentPreviousValues>,
};

export type PersonDocumentSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PersonDocumentSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PersonDocumentSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PersonDocumentSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<PersonDocumentWhereInput>,
};

export type PersonDocumentUpdateInput = {
  deletedAt?: Maybe<Scalars['DateTime']>,
  file?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['Int']>,
  personId?: Maybe<PersonUpdateOneRequiredWithoutDocumentsInput>,
};

export type PersonDocumentUpdateManyDataInput = {
  deletedAt?: Maybe<Scalars['DateTime']>,
  file?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['Int']>,
};

export type PersonDocumentUpdateManyMutationInput = {
  deletedAt?: Maybe<Scalars['DateTime']>,
  file?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['Int']>,
};

export type PersonDocumentUpdateManyWithoutPersonIdInput = {
  create?: Maybe<Array<PersonDocumentCreateWithoutPersonIdInput>>,
  connect?: Maybe<Array<PersonDocumentWhereUniqueInput>>,
  set?: Maybe<Array<PersonDocumentWhereUniqueInput>>,
  disconnect?: Maybe<Array<PersonDocumentWhereUniqueInput>>,
  delete?: Maybe<Array<PersonDocumentWhereUniqueInput>>,
  update?: Maybe<Array<PersonDocumentUpdateWithWhereUniqueWithoutPersonIdInput>>,
  updateMany?: Maybe<Array<PersonDocumentUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<PersonDocumentScalarWhereInput>>,
  upsert?: Maybe<Array<PersonDocumentUpsertWithWhereUniqueWithoutPersonIdInput>>,
};

export type PersonDocumentUpdateManyWithWhereNestedInput = {
  where: PersonDocumentScalarWhereInput,
  data: PersonDocumentUpdateManyDataInput,
};

export type PersonDocumentUpdateWithoutPersonIdDataInput = {
  deletedAt?: Maybe<Scalars['DateTime']>,
  file?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['Int']>,
};

export type PersonDocumentUpdateWithWhereUniqueWithoutPersonIdInput = {
  where: PersonDocumentWhereUniqueInput,
  data: PersonDocumentUpdateWithoutPersonIdDataInput,
};

export type PersonDocumentUpsertWithWhereUniqueWithoutPersonIdInput = {
  where: PersonDocumentWhereUniqueInput,
  update: PersonDocumentUpdateWithoutPersonIdDataInput,
  create: PersonDocumentCreateWithoutPersonIdInput,
};

export type PersonDocumentWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PersonDocumentWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PersonDocumentWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PersonDocumentWhereInput>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  deletedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  deletedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  deletedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  deletedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  deletedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  deletedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  deletedAt_gte?: Maybe<Scalars['DateTime']>,
  file?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  file_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  file_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  file_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  file_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  file_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  file_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  file_gte?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  title_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  title_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  title_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  personId?: Maybe<PersonWhereInput>,
};

export type PersonDocumentWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

/** An edge in a connection. */
export type PersonEdge = {
  /** The item at the end of the edge. */
  node: Person,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum PersonOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  AgamaAsc = 'agama_ASC',
  AgamaDesc = 'agama_DESC',
  AlamatDomisiliAsc = 'alamatDomisili_ASC',
  AlamatDomisiliDesc = 'alamatDomisili_DESC',
  AlamatIdAsc = 'alamatId_ASC',
  AlamatIdDesc = 'alamatId_DESC',
  AlatBantuAsc = 'alatBantu_ASC',
  AlatBantuDesc = 'alatBantu_DESC',
  AliasAsc = 'alias_ASC',
  AliasDesc = 'alias_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  DisabilitasAsc = 'disabilitas_ASC',
  DisabilitasDesc = 'disabilitas_DESC',
  DistrikDomisiliAsc = 'distrikDomisili_ASC',
  DistrikDomisiliDesc = 'distrikDomisili_DESC',
  DistrikIdAsc = 'distrikId_ASC',
  DistrikIdDesc = 'distrikId_DESC',
  DomisiliSamaAsc = 'domisiliSama_ASC',
  DomisiliSamaDesc = 'domisiliSama_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  GolDarahAsc = 'golDarah_ASC',
  GolDarahDesc = 'golDarah_DESC',
  JenisDisabilitasAsc = 'jenisDisabilitas_ASC',
  JenisDisabilitasDesc = 'jenisDisabilitas_DESC',
  JenisDomisiliAsc = 'jenisDomisili_ASC',
  JenisDomisiliDesc = 'jenisDomisili_DESC',
  JenisIdAsc = 'jenisId_ASC',
  JenisIdDesc = 'jenisId_DESC',
  JenisKelaminAsc = 'jenisKelamin_ASC',
  JenisKelaminDesc = 'jenisKelamin_DESC',
  JmlAnggotaAsc = 'jmlAnggota_ASC',
  JmlAnggotaDesc = 'jmlAnggota_DESC',
  NamaLengkapAsc = 'namaLengkap_ASC',
  NamaLengkapDesc = 'namaLengkap_DESC',
  NomorIdAsc = 'nomorId_ASC',
  NomorIdDesc = 'nomorId_DESC',
  PekerjaanAsc = 'pekerjaan_ASC',
  PekerjaanDesc = 'pekerjaan_DESC',
  PendidikanAsc = 'pendidikan_ASC',
  PendidikanDesc = 'pendidikan_DESC',
  StatusPernikahanAsc = 'statusPernikahan_ASC',
  StatusPernikahanDesc = 'statusPernikahan_DESC',
  TeleponAsc = 'telepon_ASC',
  TeleponDesc = 'telepon_DESC',
  TglLahirAsc = 'tglLahir_ASC',
  TglLahirDesc = 'tglLahir_DESC',
  TmpLahirAsc = 'tmpLahir_ASC',
  TmpLahirDesc = 'tmpLahir_DESC',
  UnitSatuanAsc = 'unitSatuan_ASC',
  UnitSatuanDesc = 'unitSatuan_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC',
  WargaNegaraAsc = 'wargaNegara_ASC',
  WargaNegaraDesc = 'wargaNegara_DESC'
}

export type PersonPreviousValues = {
  id: Scalars['Int'],
  agama?: Maybe<Scalars['String']>,
  alamatDomisili?: Maybe<Scalars['String']>,
  alamatId?: Maybe<Scalars['String']>,
  alatBantu?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  disabilitas: Scalars['Boolean'],
  distrikDomisili?: Maybe<Scalars['String']>,
  distrikId?: Maybe<Scalars['String']>,
  domisiliSama: Scalars['Boolean'],
  email?: Maybe<Scalars['String']>,
  golDarah?: Maybe<Scalars['String']>,
  jenisDisabilitas?: Maybe<Scalars['String']>,
  jenisDomisili?: Maybe<Scalars['String']>,
  jenisId?: Maybe<Scalars['String']>,
  jenisKelamin?: Maybe<Scalars['String']>,
  jmlAnggota?: Maybe<Scalars['Int']>,
  namaLengkap?: Maybe<Scalars['String']>,
  nomorId?: Maybe<Scalars['String']>,
  pekerjaan?: Maybe<Scalars['String']>,
  pendidikan?: Maybe<Scalars['String']>,
  statusPernikahan?: Maybe<Scalars['String']>,
  telepon?: Maybe<Scalars['String']>,
  tglLahir?: Maybe<Scalars['DateTime']>,
  tmpLahir?: Maybe<Scalars['String']>,
  unitSatuan?: Maybe<Scalars['String']>,
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
  wargaNegara?: Maybe<Scalars['String']>,
};

export type PersonSubscriptionPayload = {
  mutation: MutationType,
  node?: Maybe<Person>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<PersonPreviousValues>,
};

export type PersonSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PersonSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PersonSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PersonSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<PersonWhereInput>,
};

export type PersonUpdateDataInput = {
  agama?: Maybe<Scalars['String']>,
  alamatDomisili?: Maybe<Scalars['String']>,
  alamatId?: Maybe<Scalars['String']>,
  alatBantu?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  disabilitas?: Maybe<Scalars['Boolean']>,
  distrikDomisili?: Maybe<Scalars['String']>,
  distrikId?: Maybe<Scalars['String']>,
  domisiliSama?: Maybe<Scalars['Boolean']>,
  email?: Maybe<Scalars['String']>,
  golDarah?: Maybe<Scalars['String']>,
  jenisDisabilitas?: Maybe<Scalars['String']>,
  jenisDomisili?: Maybe<Scalars['String']>,
  jenisId?: Maybe<Scalars['String']>,
  jenisKelamin?: Maybe<Scalars['String']>,
  jmlAnggota?: Maybe<Scalars['Int']>,
  namaLengkap?: Maybe<Scalars['String']>,
  nomorId?: Maybe<Scalars['String']>,
  pekerjaan?: Maybe<Scalars['String']>,
  pendidikan?: Maybe<Scalars['String']>,
  statusPernikahan?: Maybe<Scalars['String']>,
  telepon?: Maybe<Scalars['String']>,
  tglLahir?: Maybe<Scalars['DateTime']>,
  tmpLahir?: Maybe<Scalars['String']>,
  unitSatuan?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  wargaNegara?: Maybe<Scalars['String']>,
  applications?: Maybe<ApplicationUpdateManyWithoutWakilIdInput>,
  casekorbans?: Maybe<CaseKorbanUpdateManyWithoutPersonIdInput>,
  casepelakus?: Maybe<CasePelakuUpdateManyWithoutPersonIdInput>,
  clients?: Maybe<ClientUpdateManyWithoutPersonIdInput>,
  documents?: Maybe<PersonDocumentUpdateManyWithoutPersonIdInput>,
  logRequests?: Maybe<LogRequestUpdateManyWithoutPersonIdInput>,
};

export type PersonUpdateInput = {
  agama?: Maybe<Scalars['String']>,
  alamatDomisili?: Maybe<Scalars['String']>,
  alamatId?: Maybe<Scalars['String']>,
  alatBantu?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  disabilitas?: Maybe<Scalars['Boolean']>,
  distrikDomisili?: Maybe<Scalars['String']>,
  distrikId?: Maybe<Scalars['String']>,
  domisiliSama?: Maybe<Scalars['Boolean']>,
  email?: Maybe<Scalars['String']>,
  golDarah?: Maybe<Scalars['String']>,
  jenisDisabilitas?: Maybe<Scalars['String']>,
  jenisDomisili?: Maybe<Scalars['String']>,
  jenisId?: Maybe<Scalars['String']>,
  jenisKelamin?: Maybe<Scalars['String']>,
  jmlAnggota?: Maybe<Scalars['Int']>,
  namaLengkap?: Maybe<Scalars['String']>,
  nomorId?: Maybe<Scalars['String']>,
  pekerjaan?: Maybe<Scalars['String']>,
  pendidikan?: Maybe<Scalars['String']>,
  statusPernikahan?: Maybe<Scalars['String']>,
  telepon?: Maybe<Scalars['String']>,
  tglLahir?: Maybe<Scalars['DateTime']>,
  tmpLahir?: Maybe<Scalars['String']>,
  unitSatuan?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  wargaNegara?: Maybe<Scalars['String']>,
  applications?: Maybe<ApplicationUpdateManyWithoutWakilIdInput>,
  casekorbans?: Maybe<CaseKorbanUpdateManyWithoutPersonIdInput>,
  casepelakus?: Maybe<CasePelakuUpdateManyWithoutPersonIdInput>,
  clients?: Maybe<ClientUpdateManyWithoutPersonIdInput>,
  documents?: Maybe<PersonDocumentUpdateManyWithoutPersonIdInput>,
  logRequests?: Maybe<LogRequestUpdateManyWithoutPersonIdInput>,
};

export type PersonUpdateManyMutationInput = {
  agama?: Maybe<Scalars['String']>,
  alamatDomisili?: Maybe<Scalars['String']>,
  alamatId?: Maybe<Scalars['String']>,
  alatBantu?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  disabilitas?: Maybe<Scalars['Boolean']>,
  distrikDomisili?: Maybe<Scalars['String']>,
  distrikId?: Maybe<Scalars['String']>,
  domisiliSama?: Maybe<Scalars['Boolean']>,
  email?: Maybe<Scalars['String']>,
  golDarah?: Maybe<Scalars['String']>,
  jenisDisabilitas?: Maybe<Scalars['String']>,
  jenisDomisili?: Maybe<Scalars['String']>,
  jenisId?: Maybe<Scalars['String']>,
  jenisKelamin?: Maybe<Scalars['String']>,
  jmlAnggota?: Maybe<Scalars['Int']>,
  namaLengkap?: Maybe<Scalars['String']>,
  nomorId?: Maybe<Scalars['String']>,
  pekerjaan?: Maybe<Scalars['String']>,
  pendidikan?: Maybe<Scalars['String']>,
  statusPernikahan?: Maybe<Scalars['String']>,
  telepon?: Maybe<Scalars['String']>,
  tglLahir?: Maybe<Scalars['DateTime']>,
  tmpLahir?: Maybe<Scalars['String']>,
  unitSatuan?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  wargaNegara?: Maybe<Scalars['String']>,
};

export type PersonUpdateOneRequiredInput = {
  create?: Maybe<PersonCreateInput>,
  connect?: Maybe<PersonWhereUniqueInput>,
  update?: Maybe<PersonUpdateDataInput>,
  upsert?: Maybe<PersonUpsertNestedInput>,
};

export type PersonUpdateOneRequiredWithoutClientsInput = {
  create?: Maybe<PersonCreateWithoutClientsInput>,
  connect?: Maybe<PersonWhereUniqueInput>,
  update?: Maybe<PersonUpdateWithoutClientsDataInput>,
  upsert?: Maybe<PersonUpsertWithoutClientsInput>,
};

export type PersonUpdateOneRequiredWithoutDocumentsInput = {
  create?: Maybe<PersonCreateWithoutDocumentsInput>,
  connect?: Maybe<PersonWhereUniqueInput>,
  update?: Maybe<PersonUpdateWithoutDocumentsDataInput>,
  upsert?: Maybe<PersonUpsertWithoutDocumentsInput>,
};

export type PersonUpdateOneWithoutApplicationsInput = {
  create?: Maybe<PersonCreateWithoutApplicationsInput>,
  connect?: Maybe<PersonWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<PersonUpdateWithoutApplicationsDataInput>,
  upsert?: Maybe<PersonUpsertWithoutApplicationsInput>,
};

export type PersonUpdateOneWithoutCasekorbansInput = {
  create?: Maybe<PersonCreateWithoutCasekorbansInput>,
  connect?: Maybe<PersonWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<PersonUpdateWithoutCasekorbansDataInput>,
  upsert?: Maybe<PersonUpsertWithoutCasekorbansInput>,
};

export type PersonUpdateOneWithoutCasepelakusInput = {
  create?: Maybe<PersonCreateWithoutCasepelakusInput>,
  connect?: Maybe<PersonWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<PersonUpdateWithoutCasepelakusDataInput>,
  upsert?: Maybe<PersonUpsertWithoutCasepelakusInput>,
};

export type PersonUpdateOneWithoutLogRequestsInput = {
  create?: Maybe<PersonCreateWithoutLogRequestsInput>,
  connect?: Maybe<PersonWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<PersonUpdateWithoutLogRequestsDataInput>,
  upsert?: Maybe<PersonUpsertWithoutLogRequestsInput>,
};

export type PersonUpdateWithoutApplicationsDataInput = {
  agama?: Maybe<Scalars['String']>,
  alamatDomisili?: Maybe<Scalars['String']>,
  alamatId?: Maybe<Scalars['String']>,
  alatBantu?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  disabilitas?: Maybe<Scalars['Boolean']>,
  distrikDomisili?: Maybe<Scalars['String']>,
  distrikId?: Maybe<Scalars['String']>,
  domisiliSama?: Maybe<Scalars['Boolean']>,
  email?: Maybe<Scalars['String']>,
  golDarah?: Maybe<Scalars['String']>,
  jenisDisabilitas?: Maybe<Scalars['String']>,
  jenisDomisili?: Maybe<Scalars['String']>,
  jenisId?: Maybe<Scalars['String']>,
  jenisKelamin?: Maybe<Scalars['String']>,
  jmlAnggota?: Maybe<Scalars['Int']>,
  namaLengkap?: Maybe<Scalars['String']>,
  nomorId?: Maybe<Scalars['String']>,
  pekerjaan?: Maybe<Scalars['String']>,
  pendidikan?: Maybe<Scalars['String']>,
  statusPernikahan?: Maybe<Scalars['String']>,
  telepon?: Maybe<Scalars['String']>,
  tglLahir?: Maybe<Scalars['DateTime']>,
  tmpLahir?: Maybe<Scalars['String']>,
  unitSatuan?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  wargaNegara?: Maybe<Scalars['String']>,
  casekorbans?: Maybe<CaseKorbanUpdateManyWithoutPersonIdInput>,
  casepelakus?: Maybe<CasePelakuUpdateManyWithoutPersonIdInput>,
  clients?: Maybe<ClientUpdateManyWithoutPersonIdInput>,
  documents?: Maybe<PersonDocumentUpdateManyWithoutPersonIdInput>,
  logRequests?: Maybe<LogRequestUpdateManyWithoutPersonIdInput>,
};

export type PersonUpdateWithoutCasekorbansDataInput = {
  agama?: Maybe<Scalars['String']>,
  alamatDomisili?: Maybe<Scalars['String']>,
  alamatId?: Maybe<Scalars['String']>,
  alatBantu?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  disabilitas?: Maybe<Scalars['Boolean']>,
  distrikDomisili?: Maybe<Scalars['String']>,
  distrikId?: Maybe<Scalars['String']>,
  domisiliSama?: Maybe<Scalars['Boolean']>,
  email?: Maybe<Scalars['String']>,
  golDarah?: Maybe<Scalars['String']>,
  jenisDisabilitas?: Maybe<Scalars['String']>,
  jenisDomisili?: Maybe<Scalars['String']>,
  jenisId?: Maybe<Scalars['String']>,
  jenisKelamin?: Maybe<Scalars['String']>,
  jmlAnggota?: Maybe<Scalars['Int']>,
  namaLengkap?: Maybe<Scalars['String']>,
  nomorId?: Maybe<Scalars['String']>,
  pekerjaan?: Maybe<Scalars['String']>,
  pendidikan?: Maybe<Scalars['String']>,
  statusPernikahan?: Maybe<Scalars['String']>,
  telepon?: Maybe<Scalars['String']>,
  tglLahir?: Maybe<Scalars['DateTime']>,
  tmpLahir?: Maybe<Scalars['String']>,
  unitSatuan?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  wargaNegara?: Maybe<Scalars['String']>,
  applications?: Maybe<ApplicationUpdateManyWithoutWakilIdInput>,
  casepelakus?: Maybe<CasePelakuUpdateManyWithoutPersonIdInput>,
  clients?: Maybe<ClientUpdateManyWithoutPersonIdInput>,
  documents?: Maybe<PersonDocumentUpdateManyWithoutPersonIdInput>,
  logRequests?: Maybe<LogRequestUpdateManyWithoutPersonIdInput>,
};

export type PersonUpdateWithoutCasepelakusDataInput = {
  agama?: Maybe<Scalars['String']>,
  alamatDomisili?: Maybe<Scalars['String']>,
  alamatId?: Maybe<Scalars['String']>,
  alatBantu?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  disabilitas?: Maybe<Scalars['Boolean']>,
  distrikDomisili?: Maybe<Scalars['String']>,
  distrikId?: Maybe<Scalars['String']>,
  domisiliSama?: Maybe<Scalars['Boolean']>,
  email?: Maybe<Scalars['String']>,
  golDarah?: Maybe<Scalars['String']>,
  jenisDisabilitas?: Maybe<Scalars['String']>,
  jenisDomisili?: Maybe<Scalars['String']>,
  jenisId?: Maybe<Scalars['String']>,
  jenisKelamin?: Maybe<Scalars['String']>,
  jmlAnggota?: Maybe<Scalars['Int']>,
  namaLengkap?: Maybe<Scalars['String']>,
  nomorId?: Maybe<Scalars['String']>,
  pekerjaan?: Maybe<Scalars['String']>,
  pendidikan?: Maybe<Scalars['String']>,
  statusPernikahan?: Maybe<Scalars['String']>,
  telepon?: Maybe<Scalars['String']>,
  tglLahir?: Maybe<Scalars['DateTime']>,
  tmpLahir?: Maybe<Scalars['String']>,
  unitSatuan?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  wargaNegara?: Maybe<Scalars['String']>,
  applications?: Maybe<ApplicationUpdateManyWithoutWakilIdInput>,
  casekorbans?: Maybe<CaseKorbanUpdateManyWithoutPersonIdInput>,
  clients?: Maybe<ClientUpdateManyWithoutPersonIdInput>,
  documents?: Maybe<PersonDocumentUpdateManyWithoutPersonIdInput>,
  logRequests?: Maybe<LogRequestUpdateManyWithoutPersonIdInput>,
};

export type PersonUpdateWithoutClientsDataInput = {
  agama?: Maybe<Scalars['String']>,
  alamatDomisili?: Maybe<Scalars['String']>,
  alamatId?: Maybe<Scalars['String']>,
  alatBantu?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  disabilitas?: Maybe<Scalars['Boolean']>,
  distrikDomisili?: Maybe<Scalars['String']>,
  distrikId?: Maybe<Scalars['String']>,
  domisiliSama?: Maybe<Scalars['Boolean']>,
  email?: Maybe<Scalars['String']>,
  golDarah?: Maybe<Scalars['String']>,
  jenisDisabilitas?: Maybe<Scalars['String']>,
  jenisDomisili?: Maybe<Scalars['String']>,
  jenisId?: Maybe<Scalars['String']>,
  jenisKelamin?: Maybe<Scalars['String']>,
  jmlAnggota?: Maybe<Scalars['Int']>,
  namaLengkap?: Maybe<Scalars['String']>,
  nomorId?: Maybe<Scalars['String']>,
  pekerjaan?: Maybe<Scalars['String']>,
  pendidikan?: Maybe<Scalars['String']>,
  statusPernikahan?: Maybe<Scalars['String']>,
  telepon?: Maybe<Scalars['String']>,
  tglLahir?: Maybe<Scalars['DateTime']>,
  tmpLahir?: Maybe<Scalars['String']>,
  unitSatuan?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  wargaNegara?: Maybe<Scalars['String']>,
  applications?: Maybe<ApplicationUpdateManyWithoutWakilIdInput>,
  casekorbans?: Maybe<CaseKorbanUpdateManyWithoutPersonIdInput>,
  casepelakus?: Maybe<CasePelakuUpdateManyWithoutPersonIdInput>,
  documents?: Maybe<PersonDocumentUpdateManyWithoutPersonIdInput>,
  logRequests?: Maybe<LogRequestUpdateManyWithoutPersonIdInput>,
};

export type PersonUpdateWithoutDocumentsDataInput = {
  agama?: Maybe<Scalars['String']>,
  alamatDomisili?: Maybe<Scalars['String']>,
  alamatId?: Maybe<Scalars['String']>,
  alatBantu?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  disabilitas?: Maybe<Scalars['Boolean']>,
  distrikDomisili?: Maybe<Scalars['String']>,
  distrikId?: Maybe<Scalars['String']>,
  domisiliSama?: Maybe<Scalars['Boolean']>,
  email?: Maybe<Scalars['String']>,
  golDarah?: Maybe<Scalars['String']>,
  jenisDisabilitas?: Maybe<Scalars['String']>,
  jenisDomisili?: Maybe<Scalars['String']>,
  jenisId?: Maybe<Scalars['String']>,
  jenisKelamin?: Maybe<Scalars['String']>,
  jmlAnggota?: Maybe<Scalars['Int']>,
  namaLengkap?: Maybe<Scalars['String']>,
  nomorId?: Maybe<Scalars['String']>,
  pekerjaan?: Maybe<Scalars['String']>,
  pendidikan?: Maybe<Scalars['String']>,
  statusPernikahan?: Maybe<Scalars['String']>,
  telepon?: Maybe<Scalars['String']>,
  tglLahir?: Maybe<Scalars['DateTime']>,
  tmpLahir?: Maybe<Scalars['String']>,
  unitSatuan?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  wargaNegara?: Maybe<Scalars['String']>,
  applications?: Maybe<ApplicationUpdateManyWithoutWakilIdInput>,
  casekorbans?: Maybe<CaseKorbanUpdateManyWithoutPersonIdInput>,
  casepelakus?: Maybe<CasePelakuUpdateManyWithoutPersonIdInput>,
  clients?: Maybe<ClientUpdateManyWithoutPersonIdInput>,
  logRequests?: Maybe<LogRequestUpdateManyWithoutPersonIdInput>,
};

export type PersonUpdateWithoutLogRequestsDataInput = {
  agama?: Maybe<Scalars['String']>,
  alamatDomisili?: Maybe<Scalars['String']>,
  alamatId?: Maybe<Scalars['String']>,
  alatBantu?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  disabilitas?: Maybe<Scalars['Boolean']>,
  distrikDomisili?: Maybe<Scalars['String']>,
  distrikId?: Maybe<Scalars['String']>,
  domisiliSama?: Maybe<Scalars['Boolean']>,
  email?: Maybe<Scalars['String']>,
  golDarah?: Maybe<Scalars['String']>,
  jenisDisabilitas?: Maybe<Scalars['String']>,
  jenisDomisili?: Maybe<Scalars['String']>,
  jenisId?: Maybe<Scalars['String']>,
  jenisKelamin?: Maybe<Scalars['String']>,
  jmlAnggota?: Maybe<Scalars['Int']>,
  namaLengkap?: Maybe<Scalars['String']>,
  nomorId?: Maybe<Scalars['String']>,
  pekerjaan?: Maybe<Scalars['String']>,
  pendidikan?: Maybe<Scalars['String']>,
  statusPernikahan?: Maybe<Scalars['String']>,
  telepon?: Maybe<Scalars['String']>,
  tglLahir?: Maybe<Scalars['DateTime']>,
  tmpLahir?: Maybe<Scalars['String']>,
  unitSatuan?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  wargaNegara?: Maybe<Scalars['String']>,
  applications?: Maybe<ApplicationUpdateManyWithoutWakilIdInput>,
  casekorbans?: Maybe<CaseKorbanUpdateManyWithoutPersonIdInput>,
  casepelakus?: Maybe<CasePelakuUpdateManyWithoutPersonIdInput>,
  clients?: Maybe<ClientUpdateManyWithoutPersonIdInput>,
  documents?: Maybe<PersonDocumentUpdateManyWithoutPersonIdInput>,
};

export type PersonUpsertNestedInput = {
  update: PersonUpdateDataInput,
  create: PersonCreateInput,
};

export type PersonUpsertWithoutApplicationsInput = {
  update: PersonUpdateWithoutApplicationsDataInput,
  create: PersonCreateWithoutApplicationsInput,
};

export type PersonUpsertWithoutCasekorbansInput = {
  update: PersonUpdateWithoutCasekorbansDataInput,
  create: PersonCreateWithoutCasekorbansInput,
};

export type PersonUpsertWithoutCasepelakusInput = {
  update: PersonUpdateWithoutCasepelakusDataInput,
  create: PersonCreateWithoutCasepelakusInput,
};

export type PersonUpsertWithoutClientsInput = {
  update: PersonUpdateWithoutClientsDataInput,
  create: PersonCreateWithoutClientsInput,
};

export type PersonUpsertWithoutDocumentsInput = {
  update: PersonUpdateWithoutDocumentsDataInput,
  create: PersonCreateWithoutDocumentsInput,
};

export type PersonUpsertWithoutLogRequestsInput = {
  update: PersonUpdateWithoutLogRequestsDataInput,
  create: PersonCreateWithoutLogRequestsInput,
};

export type PersonWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PersonWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PersonWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PersonWhereInput>>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  agama?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  agama_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  agama_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  agama_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  agama_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  agama_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  agama_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  agama_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  agama_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  agama_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  agama_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  agama_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  agama_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  agama_not_ends_with?: Maybe<Scalars['String']>,
  alamatDomisili?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  alamatDomisili_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  alamatDomisili_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  alamatDomisili_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  alamatDomisili_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  alamatDomisili_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  alamatDomisili_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  alamatDomisili_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  alamatDomisili_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  alamatDomisili_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  alamatDomisili_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  alamatDomisili_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  alamatDomisili_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  alamatDomisili_not_ends_with?: Maybe<Scalars['String']>,
  alamatId?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  alamatId_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  alamatId_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  alamatId_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  alamatId_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  alamatId_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  alamatId_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  alamatId_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  alamatId_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  alamatId_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  alamatId_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  alamatId_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  alamatId_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  alamatId_not_ends_with?: Maybe<Scalars['String']>,
  alatBantu?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  alatBantu_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  alatBantu_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  alatBantu_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  alatBantu_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  alatBantu_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  alatBantu_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  alatBantu_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  alatBantu_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  alatBantu_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  alatBantu_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  alatBantu_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  alatBantu_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  alatBantu_not_ends_with?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  alias_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  alias_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  alias_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  alias_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  alias_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  alias_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  alias_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  alias_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  alias_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  alias_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  alias_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  alias_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  alias_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  createdBy_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  createdBy_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  createdBy_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  createdBy_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  createdBy_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  createdBy_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  createdBy_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  createdBy_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  createdBy_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  createdBy_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  createdBy_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  createdBy_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  createdBy_not_ends_with?: Maybe<Scalars['String']>,
  disabilitas?: Maybe<Scalars['Boolean']>,
  /** All values that are not equal to given value. */
  disabilitas_not?: Maybe<Scalars['Boolean']>,
  distrikDomisili?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  distrikDomisili_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  distrikDomisili_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  distrikDomisili_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  distrikDomisili_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  distrikDomisili_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  distrikDomisili_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  distrikDomisili_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  distrikDomisili_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  distrikDomisili_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  distrikDomisili_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  distrikDomisili_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  distrikDomisili_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  distrikDomisili_not_ends_with?: Maybe<Scalars['String']>,
  distrikId?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  distrikId_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  distrikId_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  distrikId_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  distrikId_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  distrikId_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  distrikId_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  distrikId_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  distrikId_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  distrikId_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  distrikId_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  distrikId_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  distrikId_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  distrikId_not_ends_with?: Maybe<Scalars['String']>,
  domisiliSama?: Maybe<Scalars['Boolean']>,
  /** All values that are not equal to given value. */
  domisiliSama_not?: Maybe<Scalars['Boolean']>,
  email?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  email_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  email_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  email_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  email_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  email_not_ends_with?: Maybe<Scalars['String']>,
  golDarah?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  golDarah_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  golDarah_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  golDarah_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  golDarah_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  golDarah_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  golDarah_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  golDarah_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  golDarah_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  golDarah_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  golDarah_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  golDarah_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  golDarah_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  golDarah_not_ends_with?: Maybe<Scalars['String']>,
  jenisDisabilitas?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  jenisDisabilitas_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  jenisDisabilitas_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  jenisDisabilitas_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  jenisDisabilitas_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  jenisDisabilitas_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  jenisDisabilitas_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  jenisDisabilitas_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  jenisDisabilitas_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  jenisDisabilitas_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  jenisDisabilitas_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  jenisDisabilitas_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  jenisDisabilitas_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  jenisDisabilitas_not_ends_with?: Maybe<Scalars['String']>,
  jenisDomisili?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  jenisDomisili_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  jenisDomisili_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  jenisDomisili_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  jenisDomisili_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  jenisDomisili_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  jenisDomisili_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  jenisDomisili_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  jenisDomisili_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  jenisDomisili_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  jenisDomisili_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  jenisDomisili_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  jenisDomisili_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  jenisDomisili_not_ends_with?: Maybe<Scalars['String']>,
  jenisId?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  jenisId_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  jenisId_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  jenisId_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  jenisId_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  jenisId_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  jenisId_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  jenisId_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  jenisId_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  jenisId_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  jenisId_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  jenisId_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  jenisId_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  jenisId_not_ends_with?: Maybe<Scalars['String']>,
  jenisKelamin?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  jenisKelamin_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  jenisKelamin_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  jenisKelamin_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  jenisKelamin_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  jenisKelamin_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  jenisKelamin_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  jenisKelamin_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  jenisKelamin_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  jenisKelamin_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  jenisKelamin_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  jenisKelamin_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  jenisKelamin_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  jenisKelamin_not_ends_with?: Maybe<Scalars['String']>,
  jmlAnggota?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  jmlAnggota_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  jmlAnggota_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  jmlAnggota_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  jmlAnggota_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  jmlAnggota_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  jmlAnggota_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  jmlAnggota_gte?: Maybe<Scalars['Int']>,
  namaLengkap?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  namaLengkap_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  namaLengkap_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  namaLengkap_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  namaLengkap_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  namaLengkap_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  namaLengkap_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  namaLengkap_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  namaLengkap_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  namaLengkap_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  namaLengkap_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  namaLengkap_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  namaLengkap_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  namaLengkap_not_ends_with?: Maybe<Scalars['String']>,
  nomorId?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  nomorId_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  nomorId_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  nomorId_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  nomorId_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  nomorId_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  nomorId_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  nomorId_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  nomorId_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  nomorId_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  nomorId_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  nomorId_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  nomorId_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  nomorId_not_ends_with?: Maybe<Scalars['String']>,
  pekerjaan?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  pekerjaan_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  pekerjaan_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  pekerjaan_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  pekerjaan_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  pekerjaan_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  pekerjaan_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  pekerjaan_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  pekerjaan_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  pekerjaan_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  pekerjaan_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  pekerjaan_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  pekerjaan_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  pekerjaan_not_ends_with?: Maybe<Scalars['String']>,
  pendidikan?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  pendidikan_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  pendidikan_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  pendidikan_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  pendidikan_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  pendidikan_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  pendidikan_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  pendidikan_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  pendidikan_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  pendidikan_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  pendidikan_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  pendidikan_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  pendidikan_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  pendidikan_not_ends_with?: Maybe<Scalars['String']>,
  statusPernikahan?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  statusPernikahan_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  statusPernikahan_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  statusPernikahan_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  statusPernikahan_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  statusPernikahan_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  statusPernikahan_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  statusPernikahan_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  statusPernikahan_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  statusPernikahan_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  statusPernikahan_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  statusPernikahan_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  statusPernikahan_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  statusPernikahan_not_ends_with?: Maybe<Scalars['String']>,
  telepon?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  telepon_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  telepon_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  telepon_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  telepon_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  telepon_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  telepon_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  telepon_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  telepon_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  telepon_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  telepon_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  telepon_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  telepon_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  telepon_not_ends_with?: Maybe<Scalars['String']>,
  tglLahir?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  tglLahir_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  tglLahir_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  tglLahir_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  tglLahir_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  tglLahir_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  tglLahir_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  tglLahir_gte?: Maybe<Scalars['DateTime']>,
  tmpLahir?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  tmpLahir_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  tmpLahir_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  tmpLahir_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  tmpLahir_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  tmpLahir_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  tmpLahir_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  tmpLahir_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  tmpLahir_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  tmpLahir_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  tmpLahir_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  tmpLahir_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  tmpLahir_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  tmpLahir_not_ends_with?: Maybe<Scalars['String']>,
  unitSatuan?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  unitSatuan_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  unitSatuan_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  unitSatuan_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  unitSatuan_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  unitSatuan_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  unitSatuan_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  unitSatuan_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  unitSatuan_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  unitSatuan_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  unitSatuan_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  unitSatuan_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  unitSatuan_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  unitSatuan_not_ends_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  updatedBy_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  updatedBy_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  updatedBy_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  updatedBy_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  updatedBy_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  updatedBy_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  updatedBy_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  updatedBy_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  updatedBy_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  updatedBy_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  updatedBy_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  updatedBy_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  updatedBy_not_ends_with?: Maybe<Scalars['String']>,
  wargaNegara?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  wargaNegara_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  wargaNegara_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  wargaNegara_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  wargaNegara_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  wargaNegara_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  wargaNegara_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  wargaNegara_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  wargaNegara_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  wargaNegara_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  wargaNegara_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  wargaNegara_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  wargaNegara_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  wargaNegara_not_ends_with?: Maybe<Scalars['String']>,
  applications_every?: Maybe<ApplicationWhereInput>,
  applications_some?: Maybe<ApplicationWhereInput>,
  applications_none?: Maybe<ApplicationWhereInput>,
  casekorbans_every?: Maybe<CaseKorbanWhereInput>,
  casekorbans_some?: Maybe<CaseKorbanWhereInput>,
  casekorbans_none?: Maybe<CaseKorbanWhereInput>,
  casepelakus_every?: Maybe<CasePelakuWhereInput>,
  casepelakus_some?: Maybe<CasePelakuWhereInput>,
  casepelakus_none?: Maybe<CasePelakuWhereInput>,
  clients_every?: Maybe<ClientWhereInput>,
  clients_some?: Maybe<ClientWhereInput>,
  clients_none?: Maybe<ClientWhereInput>,
  documents_every?: Maybe<PersonDocumentWhereInput>,
  documents_some?: Maybe<PersonDocumentWhereInput>,
  documents_none?: Maybe<PersonDocumentWhereInput>,
  logRequests_every?: Maybe<LogRequestWhereInput>,
  logRequests_some?: Maybe<LogRequestWhereInput>,
  logRequests_none?: Maybe<LogRequestWhereInput>,
};

export type PersonWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type Query = {
  cases: Array<Maybe<Case>>,
  caseClassifications: Array<Maybe<CaseClassification>>,
  caseConsultations: Array<Maybe<CaseConsultation>>,
  caseConsultationApps: Array<Maybe<CaseConsultationApp>>,
  caseDocuments: Array<Maybe<CaseDocument>>,
  caseIssues: Array<Maybe<CaseIssue>>,
  caseKorbans: Array<Maybe<CaseKorban>>,
  casePelakus: Array<Maybe<CasePelaku>>,
  casePks: Array<Maybe<CasePk>>,
  caseProgresses: Array<Maybe<CaseProgress>>,
  caseProgressActivities: Array<Maybe<CaseProgressActivity>>,
  caseProgressActivityLits: Array<Maybe<CaseProgressActivityLit>>,
  caseProgressActivityNonlits: Array<Maybe<CaseProgressActivityNonlit>>,
  caseTransferReferrals: Array<Maybe<CaseTransferReferral>>,
  caseTransfers: Array<Maybe<CaseTransfer>>,
  caseReferrals: Array<Maybe<CaseReferral>>,
  caseViolatedRights: Array<Maybe<CaseViolatedRight>>,
  clients: Array<Maybe<Client>>,
  daftarPengacaras: Array<Maybe<DaftarPengacara>>,
  dataDicts: Array<Maybe<DataDict>>,
  dataDictLocals: Array<Maybe<DataDictLocal>>,
  logRequestApps: Array<Maybe<LogRequestApp>>,
  mtVocabs: Array<Maybe<MtVocab>>,
  mtVocabGroups: Array<Maybe<MtVocabGroup>>,
  personDocuments: Array<Maybe<PersonDocument>>,
  roles: Array<Maybe<Role>>,
  userProfiles: Array<Maybe<UserProfile>>,
  applications: Array<Maybe<Application>>,
  logRequests: Array<Maybe<LogRequest>>,
  rolesTypes: Array<Maybe<RolesType>>,
  networks: Array<Maybe<Network>>,
  users: Array<Maybe<User>>,
  persons: Array<Maybe<Person>>,
  case?: Maybe<Case>,
  caseClassification?: Maybe<CaseClassification>,
  caseConsultation?: Maybe<CaseConsultation>,
  caseConsultationApp?: Maybe<CaseConsultationApp>,
  caseDocument?: Maybe<CaseDocument>,
  caseIssue?: Maybe<CaseIssue>,
  caseKorban?: Maybe<CaseKorban>,
  casePelaku?: Maybe<CasePelaku>,
  casePk?: Maybe<CasePk>,
  caseProgress?: Maybe<CaseProgress>,
  caseProgressActivity?: Maybe<CaseProgressActivity>,
  caseProgressActivityLit?: Maybe<CaseProgressActivityLit>,
  caseProgressActivityNonlit?: Maybe<CaseProgressActivityNonlit>,
  caseTransferReferral?: Maybe<CaseTransferReferral>,
  caseTransfer?: Maybe<CaseTransfer>,
  caseReferral?: Maybe<CaseReferral>,
  caseViolatedRight?: Maybe<CaseViolatedRight>,
  client?: Maybe<Client>,
  daftarPengacara?: Maybe<DaftarPengacara>,
  dataDict?: Maybe<DataDict>,
  dataDictLocal?: Maybe<DataDictLocal>,
  logRequestApp?: Maybe<LogRequestApp>,
  mtVocab?: Maybe<MtVocab>,
  mtVocabGroup?: Maybe<MtVocabGroup>,
  personDocument?: Maybe<PersonDocument>,
  role?: Maybe<Role>,
  userProfile?: Maybe<UserProfile>,
  application?: Maybe<Application>,
  logRequest?: Maybe<LogRequest>,
  rolesType?: Maybe<RolesType>,
  network?: Maybe<Network>,
  user?: Maybe<User>,
  person?: Maybe<Person>,
  casesConnection: CaseConnection,
  caseClassificationsConnection: CaseClassificationConnection,
  caseConsultationsConnection: CaseConsultationConnection,
  caseConsultationAppsConnection: CaseConsultationAppConnection,
  caseDocumentsConnection: CaseDocumentConnection,
  caseIssuesConnection: CaseIssueConnection,
  caseKorbansConnection: CaseKorbanConnection,
  casePelakusConnection: CasePelakuConnection,
  casePksConnection: CasePkConnection,
  caseProgressesConnection: CaseProgressConnection,
  caseProgressActivitiesConnection: CaseProgressActivityConnection,
  caseProgressActivityLitsConnection: CaseProgressActivityLitConnection,
  caseProgressActivityNonlitsConnection: CaseProgressActivityNonlitConnection,
  caseTransferReferralsConnection: CaseTransferReferralConnection,
  caseTransfersConnection: CaseTransferConnection,
  caseReferralsConnection: CaseReferralConnection,
  caseViolatedRightsConnection: CaseViolatedRightConnection,
  clientsConnection: ClientConnection,
  daftarPengacarasConnection: DaftarPengacaraConnection,
  dataDictsConnection: DataDictConnection,
  dataDictLocalsConnection: DataDictLocalConnection,
  logRequestAppsConnection: LogRequestAppConnection,
  mtVocabsConnection: MtVocabConnection,
  mtVocabGroupsConnection: MtVocabGroupConnection,
  personDocumentsConnection: PersonDocumentConnection,
  rolesConnection: RoleConnection,
  userProfilesConnection: UserProfileConnection,
  applicationsConnection: ApplicationConnection,
  logRequestsConnection: LogRequestConnection,
  rolesTypesConnection: RolesTypeConnection,
  networksConnection: NetworkConnection,
  usersConnection: UserConnection,
  personsConnection: PersonConnection,
  /** Fetches an object given its ID */
  node?: Maybe<Node>,
};


export type QueryCasesArgs = {
  where?: Maybe<CaseWhereInput>,
  orderBy?: Maybe<CaseOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCaseClassificationsArgs = {
  where?: Maybe<CaseClassificationWhereInput>,
  orderBy?: Maybe<CaseClassificationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCaseConsultationsArgs = {
  where?: Maybe<CaseConsultationWhereInput>,
  orderBy?: Maybe<CaseConsultationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCaseConsultationAppsArgs = {
  where?: Maybe<CaseConsultationAppWhereInput>,
  orderBy?: Maybe<CaseConsultationAppOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCaseDocumentsArgs = {
  where?: Maybe<CaseDocumentWhereInput>,
  orderBy?: Maybe<CaseDocumentOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCaseIssuesArgs = {
  where?: Maybe<CaseIssueWhereInput>,
  orderBy?: Maybe<CaseIssueOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCaseKorbansArgs = {
  where?: Maybe<CaseKorbanWhereInput>,
  orderBy?: Maybe<CaseKorbanOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCasePelakusArgs = {
  where?: Maybe<CasePelakuWhereInput>,
  orderBy?: Maybe<CasePelakuOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCasePksArgs = {
  where?: Maybe<CasePkWhereInput>,
  orderBy?: Maybe<CasePkOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCaseProgressesArgs = {
  where?: Maybe<CaseProgressWhereInput>,
  orderBy?: Maybe<CaseProgressOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCaseProgressActivitiesArgs = {
  where?: Maybe<CaseProgressActivityWhereInput>,
  orderBy?: Maybe<CaseProgressActivityOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCaseProgressActivityLitsArgs = {
  where?: Maybe<CaseProgressActivityLitWhereInput>,
  orderBy?: Maybe<CaseProgressActivityLitOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCaseProgressActivityNonlitsArgs = {
  where?: Maybe<CaseProgressActivityNonlitWhereInput>,
  orderBy?: Maybe<CaseProgressActivityNonlitOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCaseTransferReferralsArgs = {
  where?: Maybe<CaseTransferReferralWhereInput>,
  orderBy?: Maybe<CaseTransferReferralOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCaseTransfersArgs = {
  where?: Maybe<CaseTransferWhereInput>,
  orderBy?: Maybe<CaseTransferOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCaseReferralsArgs = {
  where?: Maybe<CaseReferralWhereInput>,
  orderBy?: Maybe<CaseReferralOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCaseViolatedRightsArgs = {
  where?: Maybe<CaseViolatedRightWhereInput>,
  orderBy?: Maybe<CaseViolatedRightOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryClientsArgs = {
  where?: Maybe<ClientWhereInput>,
  orderBy?: Maybe<ClientOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryDaftarPengacarasArgs = {
  where?: Maybe<DaftarPengacaraWhereInput>,
  orderBy?: Maybe<DaftarPengacaraOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryDataDictsArgs = {
  where?: Maybe<DataDictWhereInput>,
  orderBy?: Maybe<DataDictOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryDataDictLocalsArgs = {
  where?: Maybe<DataDictLocalWhereInput>,
  orderBy?: Maybe<DataDictLocalOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryLogRequestAppsArgs = {
  where?: Maybe<LogRequestAppWhereInput>,
  orderBy?: Maybe<LogRequestAppOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryMtVocabsArgs = {
  where?: Maybe<MtVocabWhereInput>,
  orderBy?: Maybe<MtVocabOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryMtVocabGroupsArgs = {
  where?: Maybe<MtVocabGroupWhereInput>,
  orderBy?: Maybe<MtVocabGroupOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPersonDocumentsArgs = {
  where?: Maybe<PersonDocumentWhereInput>,
  orderBy?: Maybe<PersonDocumentOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryRolesArgs = {
  where?: Maybe<RoleWhereInput>,
  orderBy?: Maybe<RoleOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryUserProfilesArgs = {
  where?: Maybe<UserProfileWhereInput>,
  orderBy?: Maybe<UserProfileOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryApplicationsArgs = {
  where?: Maybe<ApplicationWhereInput>,
  orderBy?: Maybe<ApplicationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryLogRequestsArgs = {
  where?: Maybe<LogRequestWhereInput>,
  orderBy?: Maybe<LogRequestOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryRolesTypesArgs = {
  where?: Maybe<RolesTypeWhereInput>,
  orderBy?: Maybe<RolesTypeOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryNetworksArgs = {
  where?: Maybe<NetworkWhereInput>,
  orderBy?: Maybe<NetworkOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPersonsArgs = {
  where?: Maybe<PersonWhereInput>,
  orderBy?: Maybe<PersonOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCaseArgs = {
  where: CaseWhereUniqueInput
};


export type QueryCaseClassificationArgs = {
  where: CaseClassificationWhereUniqueInput
};


export type QueryCaseConsultationArgs = {
  where: CaseConsultationWhereUniqueInput
};


export type QueryCaseConsultationAppArgs = {
  where: CaseConsultationAppWhereUniqueInput
};


export type QueryCaseDocumentArgs = {
  where: CaseDocumentWhereUniqueInput
};


export type QueryCaseIssueArgs = {
  where: CaseIssueWhereUniqueInput
};


export type QueryCaseKorbanArgs = {
  where: CaseKorbanWhereUniqueInput
};


export type QueryCasePelakuArgs = {
  where: CasePelakuWhereUniqueInput
};


export type QueryCasePkArgs = {
  where: CasePkWhereUniqueInput
};


export type QueryCaseProgressArgs = {
  where: CaseProgressWhereUniqueInput
};


export type QueryCaseProgressActivityArgs = {
  where: CaseProgressActivityWhereUniqueInput
};


export type QueryCaseProgressActivityLitArgs = {
  where: CaseProgressActivityLitWhereUniqueInput
};


export type QueryCaseProgressActivityNonlitArgs = {
  where: CaseProgressActivityNonlitWhereUniqueInput
};


export type QueryCaseTransferReferralArgs = {
  where: CaseTransferReferralWhereUniqueInput
};


export type QueryCaseTransferArgs = {
  where: CaseTransferWhereUniqueInput
};


export type QueryCaseReferralArgs = {
  where: CaseReferralWhereUniqueInput
};


export type QueryCaseViolatedRightArgs = {
  where: CaseViolatedRightWhereUniqueInput
};


export type QueryClientArgs = {
  where: ClientWhereUniqueInput
};


export type QueryDaftarPengacaraArgs = {
  where: DaftarPengacaraWhereUniqueInput
};


export type QueryDataDictArgs = {
  where: DataDictWhereUniqueInput
};


export type QueryDataDictLocalArgs = {
  where: DataDictLocalWhereUniqueInput
};


export type QueryLogRequestAppArgs = {
  where: LogRequestAppWhereUniqueInput
};


export type QueryMtVocabArgs = {
  where: MtVocabWhereUniqueInput
};


export type QueryMtVocabGroupArgs = {
  where: MtVocabGroupWhereUniqueInput
};


export type QueryPersonDocumentArgs = {
  where: PersonDocumentWhereUniqueInput
};


export type QueryRoleArgs = {
  where: RoleWhereUniqueInput
};


export type QueryUserProfileArgs = {
  where: UserProfileWhereUniqueInput
};


export type QueryApplicationArgs = {
  where: ApplicationWhereUniqueInput
};


export type QueryLogRequestArgs = {
  where: LogRequestWhereUniqueInput
};


export type QueryRolesTypeArgs = {
  where: RolesTypeWhereUniqueInput
};


export type QueryNetworkArgs = {
  where: NetworkWhereUniqueInput
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput
};


export type QueryPersonArgs = {
  where: PersonWhereUniqueInput
};


export type QueryCasesConnectionArgs = {
  where?: Maybe<CaseWhereInput>,
  orderBy?: Maybe<CaseOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCaseClassificationsConnectionArgs = {
  where?: Maybe<CaseClassificationWhereInput>,
  orderBy?: Maybe<CaseClassificationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCaseConsultationsConnectionArgs = {
  where?: Maybe<CaseConsultationWhereInput>,
  orderBy?: Maybe<CaseConsultationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCaseConsultationAppsConnectionArgs = {
  where?: Maybe<CaseConsultationAppWhereInput>,
  orderBy?: Maybe<CaseConsultationAppOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCaseDocumentsConnectionArgs = {
  where?: Maybe<CaseDocumentWhereInput>,
  orderBy?: Maybe<CaseDocumentOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCaseIssuesConnectionArgs = {
  where?: Maybe<CaseIssueWhereInput>,
  orderBy?: Maybe<CaseIssueOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCaseKorbansConnectionArgs = {
  where?: Maybe<CaseKorbanWhereInput>,
  orderBy?: Maybe<CaseKorbanOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCasePelakusConnectionArgs = {
  where?: Maybe<CasePelakuWhereInput>,
  orderBy?: Maybe<CasePelakuOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCasePksConnectionArgs = {
  where?: Maybe<CasePkWhereInput>,
  orderBy?: Maybe<CasePkOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCaseProgressesConnectionArgs = {
  where?: Maybe<CaseProgressWhereInput>,
  orderBy?: Maybe<CaseProgressOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCaseProgressActivitiesConnectionArgs = {
  where?: Maybe<CaseProgressActivityWhereInput>,
  orderBy?: Maybe<CaseProgressActivityOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCaseProgressActivityLitsConnectionArgs = {
  where?: Maybe<CaseProgressActivityLitWhereInput>,
  orderBy?: Maybe<CaseProgressActivityLitOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCaseProgressActivityNonlitsConnectionArgs = {
  where?: Maybe<CaseProgressActivityNonlitWhereInput>,
  orderBy?: Maybe<CaseProgressActivityNonlitOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCaseTransferReferralsConnectionArgs = {
  where?: Maybe<CaseTransferReferralWhereInput>,
  orderBy?: Maybe<CaseTransferReferralOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCaseTransfersConnectionArgs = {
  where?: Maybe<CaseTransferWhereInput>,
  orderBy?: Maybe<CaseTransferOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCaseReferralsConnectionArgs = {
  where?: Maybe<CaseReferralWhereInput>,
  orderBy?: Maybe<CaseReferralOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCaseViolatedRightsConnectionArgs = {
  where?: Maybe<CaseViolatedRightWhereInput>,
  orderBy?: Maybe<CaseViolatedRightOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryClientsConnectionArgs = {
  where?: Maybe<ClientWhereInput>,
  orderBy?: Maybe<ClientOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryDaftarPengacarasConnectionArgs = {
  where?: Maybe<DaftarPengacaraWhereInput>,
  orderBy?: Maybe<DaftarPengacaraOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryDataDictsConnectionArgs = {
  where?: Maybe<DataDictWhereInput>,
  orderBy?: Maybe<DataDictOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryDataDictLocalsConnectionArgs = {
  where?: Maybe<DataDictLocalWhereInput>,
  orderBy?: Maybe<DataDictLocalOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryLogRequestAppsConnectionArgs = {
  where?: Maybe<LogRequestAppWhereInput>,
  orderBy?: Maybe<LogRequestAppOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryMtVocabsConnectionArgs = {
  where?: Maybe<MtVocabWhereInput>,
  orderBy?: Maybe<MtVocabOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryMtVocabGroupsConnectionArgs = {
  where?: Maybe<MtVocabGroupWhereInput>,
  orderBy?: Maybe<MtVocabGroupOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPersonDocumentsConnectionArgs = {
  where?: Maybe<PersonDocumentWhereInput>,
  orderBy?: Maybe<PersonDocumentOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryRolesConnectionArgs = {
  where?: Maybe<RoleWhereInput>,
  orderBy?: Maybe<RoleOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryUserProfilesConnectionArgs = {
  where?: Maybe<UserProfileWhereInput>,
  orderBy?: Maybe<UserProfileOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryApplicationsConnectionArgs = {
  where?: Maybe<ApplicationWhereInput>,
  orderBy?: Maybe<ApplicationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryLogRequestsConnectionArgs = {
  where?: Maybe<LogRequestWhereInput>,
  orderBy?: Maybe<LogRequestOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryRolesTypesConnectionArgs = {
  where?: Maybe<RolesTypeWhereInput>,
  orderBy?: Maybe<RolesTypeOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryNetworksConnectionArgs = {
  where?: Maybe<NetworkWhereInput>,
  orderBy?: Maybe<NetworkOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPersonsConnectionArgs = {
  where?: Maybe<PersonWhereInput>,
  orderBy?: Maybe<PersonOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryNodeArgs = {
  id: Scalars['ID']
};

export type Role = {
  createdAt: Scalars['DateTime'],
  id: Scalars['Int'],
  userId?: Maybe<Array<User>>,
  type: RolesType,
};


export type RoleUserIdArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

/** A connection to a list of items. */
export type RoleConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<RoleEdge>>,
  aggregate: AggregateRole,
};

export type RoleCreateInput = {
  userId?: Maybe<UserCreateManyWithoutRoles_TypeInput>,
  type: RolesTypeCreateOneInput,
};

export type RoleCreateManyWithoutUserIdInput = {
  create?: Maybe<Array<RoleCreateWithoutUserIdInput>>,
  connect?: Maybe<Array<RoleWhereUniqueInput>>,
};

export type RoleCreateWithoutUserIdInput = {
  type: RolesTypeCreateOneInput,
};

/** An edge in a connection. */
export type RoleEdge = {
  /** The item at the end of the edge. */
  node: Role,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum RoleOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type RolePreviousValues = {
  createdAt: Scalars['DateTime'],
  id: Scalars['Int'],
};

export type RoleScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<RoleScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<RoleScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<RoleScalarWhereInput>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
};

export type RolesType = {
  createdAt: Scalars['DateTime'],
  id: Scalars['Int'],
  description?: Maybe<Scalars['String']>,
};

/** A connection to a list of items. */
export type RolesTypeConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<RolesTypeEdge>>,
  aggregate: AggregateRolesType,
};

export type RolesTypeCreateInput = {
  description?: Maybe<Scalars['String']>,
};

export type RolesTypeCreateOneInput = {
  create?: Maybe<RolesTypeCreateInput>,
  connect?: Maybe<RolesTypeWhereUniqueInput>,
};

/** An edge in a connection. */
export type RolesTypeEdge = {
  /** The item at the end of the edge. */
  node: RolesType,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum RolesTypeOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC'
}

export type RolesTypePreviousValues = {
  createdAt: Scalars['DateTime'],
  id: Scalars['Int'],
  description?: Maybe<Scalars['String']>,
};

export type RolesTypeSubscriptionPayload = {
  mutation: MutationType,
  node?: Maybe<RolesType>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<RolesTypePreviousValues>,
};

export type RolesTypeSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<RolesTypeSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<RolesTypeSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<RolesTypeSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<RolesTypeWhereInput>,
};

export type RolesTypeUpdateDataInput = {
  description?: Maybe<Scalars['String']>,
};

export type RolesTypeUpdateInput = {
  description?: Maybe<Scalars['String']>,
};

export type RolesTypeUpdateManyMutationInput = {
  description?: Maybe<Scalars['String']>,
};

export type RolesTypeUpdateOneRequiredInput = {
  create?: Maybe<RolesTypeCreateInput>,
  connect?: Maybe<RolesTypeWhereUniqueInput>,
  update?: Maybe<RolesTypeUpdateDataInput>,
  upsert?: Maybe<RolesTypeUpsertNestedInput>,
};

export type RolesTypeUpsertNestedInput = {
  update: RolesTypeUpdateDataInput,
  create: RolesTypeCreateInput,
};

export type RolesTypeWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<RolesTypeWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<RolesTypeWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<RolesTypeWhereInput>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  description_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  description_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  description_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<Scalars['String']>,
};

export type RolesTypeWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type RoleSubscriptionPayload = {
  mutation: MutationType,
  node?: Maybe<Role>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<RolePreviousValues>,
};

export type RoleSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<RoleSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<RoleSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<RoleSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<RoleWhereInput>,
};

export type RoleUpdateInput = {
  userId?: Maybe<UserUpdateManyWithoutRoles_TypeInput>,
  type?: Maybe<RolesTypeUpdateOneRequiredInput>,
};

export type RoleUpdateManyWithoutUserIdInput = {
  create?: Maybe<Array<RoleCreateWithoutUserIdInput>>,
  connect?: Maybe<Array<RoleWhereUniqueInput>>,
  set?: Maybe<Array<RoleWhereUniqueInput>>,
  disconnect?: Maybe<Array<RoleWhereUniqueInput>>,
  delete?: Maybe<Array<RoleWhereUniqueInput>>,
  update?: Maybe<Array<RoleUpdateWithWhereUniqueWithoutUserIdInput>>,
  deleteMany?: Maybe<Array<RoleScalarWhereInput>>,
  upsert?: Maybe<Array<RoleUpsertWithWhereUniqueWithoutUserIdInput>>,
};

export type RoleUpdateWithoutUserIdDataInput = {
  type?: Maybe<RolesTypeUpdateOneRequiredInput>,
};

export type RoleUpdateWithWhereUniqueWithoutUserIdInput = {
  where: RoleWhereUniqueInput,
  data: RoleUpdateWithoutUserIdDataInput,
};

export type RoleUpsertWithWhereUniqueWithoutUserIdInput = {
  where: RoleWhereUniqueInput,
  update: RoleUpdateWithoutUserIdDataInput,
  create: RoleCreateWithoutUserIdInput,
};

export type RoleWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<RoleWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<RoleWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<RoleWhereInput>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  userId_every?: Maybe<UserWhereInput>,
  userId_some?: Maybe<UserWhereInput>,
  userId_none?: Maybe<UserWhereInput>,
  type?: Maybe<RolesTypeWhereInput>,
};

export type RoleWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type Subscription = {
  case?: Maybe<CaseSubscriptionPayload>,
  caseClassification?: Maybe<CaseClassificationSubscriptionPayload>,
  caseConsultation?: Maybe<CaseConsultationSubscriptionPayload>,
  caseConsultationApp?: Maybe<CaseConsultationAppSubscriptionPayload>,
  caseDocument?: Maybe<CaseDocumentSubscriptionPayload>,
  caseIssue?: Maybe<CaseIssueSubscriptionPayload>,
  caseKorban?: Maybe<CaseKorbanSubscriptionPayload>,
  casePelaku?: Maybe<CasePelakuSubscriptionPayload>,
  casePk?: Maybe<CasePkSubscriptionPayload>,
  caseProgress?: Maybe<CaseProgressSubscriptionPayload>,
  caseProgressActivity?: Maybe<CaseProgressActivitySubscriptionPayload>,
  caseProgressActivityLit?: Maybe<CaseProgressActivityLitSubscriptionPayload>,
  caseProgressActivityNonlit?: Maybe<CaseProgressActivityNonlitSubscriptionPayload>,
  caseTransferReferral?: Maybe<CaseTransferReferralSubscriptionPayload>,
  caseTransfer?: Maybe<CaseTransferSubscriptionPayload>,
  caseReferral?: Maybe<CaseReferralSubscriptionPayload>,
  caseViolatedRight?: Maybe<CaseViolatedRightSubscriptionPayload>,
  client?: Maybe<ClientSubscriptionPayload>,
  daftarPengacara?: Maybe<DaftarPengacaraSubscriptionPayload>,
  dataDict?: Maybe<DataDictSubscriptionPayload>,
  dataDictLocal?: Maybe<DataDictLocalSubscriptionPayload>,
  logRequestApp?: Maybe<LogRequestAppSubscriptionPayload>,
  mtVocab?: Maybe<MtVocabSubscriptionPayload>,
  mtVocabGroup?: Maybe<MtVocabGroupSubscriptionPayload>,
  personDocument?: Maybe<PersonDocumentSubscriptionPayload>,
  role?: Maybe<RoleSubscriptionPayload>,
  userProfile?: Maybe<UserProfileSubscriptionPayload>,
  application?: Maybe<ApplicationSubscriptionPayload>,
  logRequest?: Maybe<LogRequestSubscriptionPayload>,
  rolesType?: Maybe<RolesTypeSubscriptionPayload>,
  network?: Maybe<NetworkSubscriptionPayload>,
  user?: Maybe<UserSubscriptionPayload>,
  person?: Maybe<PersonSubscriptionPayload>,
};


export type SubscriptionCaseArgs = {
  where?: Maybe<CaseSubscriptionWhereInput>
};


export type SubscriptionCaseClassificationArgs = {
  where?: Maybe<CaseClassificationSubscriptionWhereInput>
};


export type SubscriptionCaseConsultationArgs = {
  where?: Maybe<CaseConsultationSubscriptionWhereInput>
};


export type SubscriptionCaseConsultationAppArgs = {
  where?: Maybe<CaseConsultationAppSubscriptionWhereInput>
};


export type SubscriptionCaseDocumentArgs = {
  where?: Maybe<CaseDocumentSubscriptionWhereInput>
};


export type SubscriptionCaseIssueArgs = {
  where?: Maybe<CaseIssueSubscriptionWhereInput>
};


export type SubscriptionCaseKorbanArgs = {
  where?: Maybe<CaseKorbanSubscriptionWhereInput>
};


export type SubscriptionCasePelakuArgs = {
  where?: Maybe<CasePelakuSubscriptionWhereInput>
};


export type SubscriptionCasePkArgs = {
  where?: Maybe<CasePkSubscriptionWhereInput>
};


export type SubscriptionCaseProgressArgs = {
  where?: Maybe<CaseProgressSubscriptionWhereInput>
};


export type SubscriptionCaseProgressActivityArgs = {
  where?: Maybe<CaseProgressActivitySubscriptionWhereInput>
};


export type SubscriptionCaseProgressActivityLitArgs = {
  where?: Maybe<CaseProgressActivityLitSubscriptionWhereInput>
};


export type SubscriptionCaseProgressActivityNonlitArgs = {
  where?: Maybe<CaseProgressActivityNonlitSubscriptionWhereInput>
};


export type SubscriptionCaseTransferReferralArgs = {
  where?: Maybe<CaseTransferReferralSubscriptionWhereInput>
};


export type SubscriptionCaseTransferArgs = {
  where?: Maybe<CaseTransferSubscriptionWhereInput>
};


export type SubscriptionCaseReferralArgs = {
  where?: Maybe<CaseReferralSubscriptionWhereInput>
};


export type SubscriptionCaseViolatedRightArgs = {
  where?: Maybe<CaseViolatedRightSubscriptionWhereInput>
};


export type SubscriptionClientArgs = {
  where?: Maybe<ClientSubscriptionWhereInput>
};


export type SubscriptionDaftarPengacaraArgs = {
  where?: Maybe<DaftarPengacaraSubscriptionWhereInput>
};


export type SubscriptionDataDictArgs = {
  where?: Maybe<DataDictSubscriptionWhereInput>
};


export type SubscriptionDataDictLocalArgs = {
  where?: Maybe<DataDictLocalSubscriptionWhereInput>
};


export type SubscriptionLogRequestAppArgs = {
  where?: Maybe<LogRequestAppSubscriptionWhereInput>
};


export type SubscriptionMtVocabArgs = {
  where?: Maybe<MtVocabSubscriptionWhereInput>
};


export type SubscriptionMtVocabGroupArgs = {
  where?: Maybe<MtVocabGroupSubscriptionWhereInput>
};


export type SubscriptionPersonDocumentArgs = {
  where?: Maybe<PersonDocumentSubscriptionWhereInput>
};


export type SubscriptionRoleArgs = {
  where?: Maybe<RoleSubscriptionWhereInput>
};


export type SubscriptionUserProfileArgs = {
  where?: Maybe<UserProfileSubscriptionWhereInput>
};


export type SubscriptionApplicationArgs = {
  where?: Maybe<ApplicationSubscriptionWhereInput>
};


export type SubscriptionLogRequestArgs = {
  where?: Maybe<LogRequestSubscriptionWhereInput>
};


export type SubscriptionRolesTypeArgs = {
  where?: Maybe<RolesTypeSubscriptionWhereInput>
};


export type SubscriptionNetworkArgs = {
  where?: Maybe<NetworkSubscriptionWhereInput>
};


export type SubscriptionUserArgs = {
  where?: Maybe<UserSubscriptionWhereInput>
};


export type SubscriptionPersonArgs = {
  where?: Maybe<PersonSubscriptionWhereInput>
};

export type User = {
  address?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  deletedAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  id: Scalars['Int'],
  name?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rememberToken?: Maybe<Scalars['String']>,
  roles?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  updatedAt: Scalars['DateTime'],
  username?: Maybe<Scalars['String']>,
  profile: UserProfile,
  roles_type?: Maybe<Array<Role>>,
  logRequestBy?: Maybe<Array<LogRequest>>,
  logRequestTo?: Maybe<Array<LogRequest>>,
  appConsultation?: Maybe<Array<LogRequestApp>>,
};


export type UserRoles_TypeArgs = {
  where?: Maybe<RoleWhereInput>,
  orderBy?: Maybe<RoleOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type UserLogRequestByArgs = {
  where?: Maybe<LogRequestWhereInput>,
  orderBy?: Maybe<LogRequestOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type UserLogRequestToArgs = {
  where?: Maybe<LogRequestWhereInput>,
  orderBy?: Maybe<LogRequestOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type UserAppConsultationArgs = {
  where?: Maybe<LogRequestAppWhereInput>,
  orderBy?: Maybe<LogRequestAppOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

/** A connection to a list of items. */
export type UserConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<UserEdge>>,
  aggregate: AggregateUser,
};

export type UserCreateInput = {
  address?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rememberToken?: Maybe<Scalars['String']>,
  roles?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  username?: Maybe<Scalars['String']>,
  profile: UserProfileCreateOneWithoutUserIdInput,
  roles_type?: Maybe<RoleCreateManyWithoutUserIdInput>,
  logRequestBy?: Maybe<LogRequestCreateManyWithoutRequestByInput>,
  logRequestTo?: Maybe<LogRequestCreateManyWithoutRequestToInput>,
  appConsultation?: Maybe<LogRequestAppCreateManyWithoutAppConsultationInput>,
};

export type UserCreateManyWithoutRoles_TypeInput = {
  create?: Maybe<Array<UserCreateWithoutRoles_TypeInput>>,
  connect?: Maybe<Array<UserWhereUniqueInput>>,
};

export type UserCreateOneInput = {
  create?: Maybe<UserCreateInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateOneWithoutAppConsultationInput = {
  create?: Maybe<UserCreateWithoutAppConsultationInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateOneWithoutLogRequestByInput = {
  create?: Maybe<UserCreateWithoutLogRequestByInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateOneWithoutLogRequestToInput = {
  create?: Maybe<UserCreateWithoutLogRequestToInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateOneWithoutProfileInput = {
  create?: Maybe<UserCreateWithoutProfileInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateWithoutAppConsultationInput = {
  address?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rememberToken?: Maybe<Scalars['String']>,
  roles?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  username?: Maybe<Scalars['String']>,
  profile: UserProfileCreateOneWithoutUserIdInput,
  roles_type?: Maybe<RoleCreateManyWithoutUserIdInput>,
  logRequestBy?: Maybe<LogRequestCreateManyWithoutRequestByInput>,
  logRequestTo?: Maybe<LogRequestCreateManyWithoutRequestToInput>,
};

export type UserCreateWithoutLogRequestByInput = {
  address?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rememberToken?: Maybe<Scalars['String']>,
  roles?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  username?: Maybe<Scalars['String']>,
  profile: UserProfileCreateOneWithoutUserIdInput,
  roles_type?: Maybe<RoleCreateManyWithoutUserIdInput>,
  logRequestTo?: Maybe<LogRequestCreateManyWithoutRequestToInput>,
  appConsultation?: Maybe<LogRequestAppCreateManyWithoutAppConsultationInput>,
};

export type UserCreateWithoutLogRequestToInput = {
  address?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rememberToken?: Maybe<Scalars['String']>,
  roles?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  username?: Maybe<Scalars['String']>,
  profile: UserProfileCreateOneWithoutUserIdInput,
  roles_type?: Maybe<RoleCreateManyWithoutUserIdInput>,
  logRequestBy?: Maybe<LogRequestCreateManyWithoutRequestByInput>,
  appConsultation?: Maybe<LogRequestAppCreateManyWithoutAppConsultationInput>,
};

export type UserCreateWithoutProfileInput = {
  address?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rememberToken?: Maybe<Scalars['String']>,
  roles?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  username?: Maybe<Scalars['String']>,
  roles_type?: Maybe<RoleCreateManyWithoutUserIdInput>,
  logRequestBy?: Maybe<LogRequestCreateManyWithoutRequestByInput>,
  logRequestTo?: Maybe<LogRequestCreateManyWithoutRequestToInput>,
  appConsultation?: Maybe<LogRequestAppCreateManyWithoutAppConsultationInput>,
};

export type UserCreateWithoutRoles_TypeInput = {
  address?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rememberToken?: Maybe<Scalars['String']>,
  roles?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  username?: Maybe<Scalars['String']>,
  profile: UserProfileCreateOneWithoutUserIdInput,
  logRequestBy?: Maybe<LogRequestCreateManyWithoutRequestByInput>,
  logRequestTo?: Maybe<LogRequestCreateManyWithoutRequestToInput>,
  appConsultation?: Maybe<LogRequestAppCreateManyWithoutAppConsultationInput>,
};

/** An edge in a connection. */
export type UserEdge = {
  /** The item at the end of the edge. */
  node: User,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum UserOrderByInput {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  AvatarAsc = 'avatar_ASC',
  AvatarDesc = 'avatar_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PasswordAsc = 'password_ASC',
  PasswordDesc = 'password_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  RememberTokenAsc = 'rememberToken_ASC',
  RememberTokenDesc = 'rememberToken_DESC',
  RolesAsc = 'roles_ASC',
  RolesDesc = 'roles_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UsernameAsc = 'username_ASC',
  UsernameDesc = 'username_DESC'
}

export type UserPreviousValues = {
  address?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  deletedAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  id: Scalars['Int'],
  name?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rememberToken?: Maybe<Scalars['String']>,
  roles?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  updatedAt: Scalars['DateTime'],
  username?: Maybe<Scalars['String']>,
};

export type UserProfile = {
  createdAt: Scalars['DateTime'],
  id: Scalars['Int'],
  noContact?: Maybe<Scalars['String']>,
  occupation?: Maybe<Scalars['String']>,
  photo?: Maybe<Scalars['String']>,
  updatedAt: Scalars['DateTime'],
  userId: User,
};

/** A connection to a list of items. */
export type UserProfileConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<UserProfileEdge>>,
  aggregate: AggregateUserProfile,
};

export type UserProfileCreateInput = {
  noContact?: Maybe<Scalars['String']>,
  occupation?: Maybe<Scalars['String']>,
  photo?: Maybe<Scalars['String']>,
  userId: UserCreateOneWithoutProfileInput,
};

export type UserProfileCreateOneWithoutUserIdInput = {
  create?: Maybe<UserProfileCreateWithoutUserIdInput>,
  connect?: Maybe<UserProfileWhereUniqueInput>,
};

export type UserProfileCreateWithoutUserIdInput = {
  noContact?: Maybe<Scalars['String']>,
  occupation?: Maybe<Scalars['String']>,
  photo?: Maybe<Scalars['String']>,
};

/** An edge in a connection. */
export type UserProfileEdge = {
  /** The item at the end of the edge. */
  node: UserProfile,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum UserProfileOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NoContactAsc = 'noContact_ASC',
  NoContactDesc = 'noContact_DESC',
  OccupationAsc = 'occupation_ASC',
  OccupationDesc = 'occupation_DESC',
  PhotoAsc = 'photo_ASC',
  PhotoDesc = 'photo_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserProfilePreviousValues = {
  createdAt: Scalars['DateTime'],
  id: Scalars['Int'],
  noContact?: Maybe<Scalars['String']>,
  occupation?: Maybe<Scalars['String']>,
  photo?: Maybe<Scalars['String']>,
  updatedAt: Scalars['DateTime'],
};

export type UserProfileSubscriptionPayload = {
  mutation: MutationType,
  node?: Maybe<UserProfile>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<UserProfilePreviousValues>,
};

export type UserProfileSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserProfileSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserProfileSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserProfileSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<UserProfileWhereInput>,
};

export type UserProfileUpdateInput = {
  noContact?: Maybe<Scalars['String']>,
  occupation?: Maybe<Scalars['String']>,
  photo?: Maybe<Scalars['String']>,
  userId?: Maybe<UserUpdateOneRequiredWithoutProfileInput>,
};

export type UserProfileUpdateManyMutationInput = {
  noContact?: Maybe<Scalars['String']>,
  occupation?: Maybe<Scalars['String']>,
  photo?: Maybe<Scalars['String']>,
};

export type UserProfileUpdateOneRequiredWithoutUserIdInput = {
  create?: Maybe<UserProfileCreateWithoutUserIdInput>,
  connect?: Maybe<UserProfileWhereUniqueInput>,
  update?: Maybe<UserProfileUpdateWithoutUserIdDataInput>,
  upsert?: Maybe<UserProfileUpsertWithoutUserIdInput>,
};

export type UserProfileUpdateWithoutUserIdDataInput = {
  noContact?: Maybe<Scalars['String']>,
  occupation?: Maybe<Scalars['String']>,
  photo?: Maybe<Scalars['String']>,
};

export type UserProfileUpsertWithoutUserIdInput = {
  update: UserProfileUpdateWithoutUserIdDataInput,
  create: UserProfileCreateWithoutUserIdInput,
};

export type UserProfileWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserProfileWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserProfileWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserProfileWhereInput>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  noContact?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  noContact_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  noContact_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  noContact_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  noContact_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  noContact_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  noContact_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  noContact_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  noContact_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  noContact_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  noContact_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  noContact_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  noContact_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  noContact_not_ends_with?: Maybe<Scalars['String']>,
  occupation?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  occupation_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  occupation_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  occupation_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  occupation_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  occupation_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  occupation_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  occupation_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  occupation_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  occupation_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  occupation_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  occupation_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  occupation_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  occupation_not_ends_with?: Maybe<Scalars['String']>,
  photo?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  photo_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  photo_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  photo_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  photo_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  photo_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  photo_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  photo_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  photo_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  photo_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  photo_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  photo_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  photo_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  photo_not_ends_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  userId?: Maybe<UserWhereInput>,
};

export type UserProfileWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type UserScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserScalarWhereInput>>,
  address?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  address_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  address_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  address_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  address_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  address_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  address_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  address_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  address_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  address_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  address_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  address_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  address_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  address_not_ends_with?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  avatar_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  avatar_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  avatar_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  avatar_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  avatar_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  avatar_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  avatar_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  avatar_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  avatar_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  avatar_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  avatar_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  avatar_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  avatar_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  deletedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  deletedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  deletedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  deletedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  deletedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  deletedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  deletedAt_gte?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  email_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  email_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  email_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  email_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  email_not_ends_with?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  password_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  password_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  password_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  password_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  password_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  password_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  password_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  password_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  password_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  password_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  password_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  password_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  password_not_ends_with?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  phone_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  phone_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  phone_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  phone_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  phone_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  phone_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  phone_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  phone_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  phone_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  phone_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  phone_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  phone_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  phone_not_ends_with?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  position_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  position_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  position_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  position_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  position_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  position_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  position_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  position_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  position_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  position_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  position_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  position_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  position_not_ends_with?: Maybe<Scalars['String']>,
  rememberToken?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  rememberToken_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  rememberToken_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  rememberToken_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  rememberToken_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  rememberToken_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  rememberToken_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  rememberToken_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  rememberToken_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  rememberToken_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  rememberToken_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  rememberToken_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  rememberToken_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  rememberToken_not_ends_with?: Maybe<Scalars['String']>,
  roles?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  roles_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  roles_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  roles_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  roles_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  roles_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  roles_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  roles_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  roles_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  roles_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  roles_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  roles_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  roles_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  roles_not_ends_with?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  username?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  username_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  username_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  username_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  username_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  username_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  username_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  username_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  username_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  username_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  username_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  username_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  username_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  username_not_ends_with?: Maybe<Scalars['String']>,
};

export type UserSubscriptionPayload = {
  mutation: MutationType,
  node?: Maybe<User>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<UserPreviousValues>,
};

export type UserSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<UserWhereInput>,
};

export type UserUpdateDataInput = {
  address?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rememberToken?: Maybe<Scalars['String']>,
  roles?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  username?: Maybe<Scalars['String']>,
  profile?: Maybe<UserProfileUpdateOneRequiredWithoutUserIdInput>,
  roles_type?: Maybe<RoleUpdateManyWithoutUserIdInput>,
  logRequestBy?: Maybe<LogRequestUpdateManyWithoutRequestByInput>,
  logRequestTo?: Maybe<LogRequestUpdateManyWithoutRequestToInput>,
  appConsultation?: Maybe<LogRequestAppUpdateManyWithoutAppConsultationInput>,
};

export type UserUpdateInput = {
  address?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rememberToken?: Maybe<Scalars['String']>,
  roles?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  username?: Maybe<Scalars['String']>,
  profile?: Maybe<UserProfileUpdateOneRequiredWithoutUserIdInput>,
  roles_type?: Maybe<RoleUpdateManyWithoutUserIdInput>,
  logRequestBy?: Maybe<LogRequestUpdateManyWithoutRequestByInput>,
  logRequestTo?: Maybe<LogRequestUpdateManyWithoutRequestToInput>,
  appConsultation?: Maybe<LogRequestAppUpdateManyWithoutAppConsultationInput>,
};

export type UserUpdateManyDataInput = {
  address?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rememberToken?: Maybe<Scalars['String']>,
  roles?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  username?: Maybe<Scalars['String']>,
};

export type UserUpdateManyMutationInput = {
  address?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rememberToken?: Maybe<Scalars['String']>,
  roles?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  username?: Maybe<Scalars['String']>,
};

export type UserUpdateManyWithoutRoles_TypeInput = {
  create?: Maybe<Array<UserCreateWithoutRoles_TypeInput>>,
  connect?: Maybe<Array<UserWhereUniqueInput>>,
  set?: Maybe<Array<UserWhereUniqueInput>>,
  disconnect?: Maybe<Array<UserWhereUniqueInput>>,
  delete?: Maybe<Array<UserWhereUniqueInput>>,
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutRoles_TypeInput>>,
  updateMany?: Maybe<Array<UserUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<UserScalarWhereInput>>,
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutRoles_TypeInput>>,
};

export type UserUpdateManyWithWhereNestedInput = {
  where: UserScalarWhereInput,
  data: UserUpdateManyDataInput,
};

export type UserUpdateOneInput = {
  create?: Maybe<UserCreateInput>,
  connect?: Maybe<UserWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<UserUpdateDataInput>,
  upsert?: Maybe<UserUpsertNestedInput>,
};

export type UserUpdateOneRequiredWithoutAppConsultationInput = {
  create?: Maybe<UserCreateWithoutAppConsultationInput>,
  connect?: Maybe<UserWhereUniqueInput>,
  update?: Maybe<UserUpdateWithoutAppConsultationDataInput>,
  upsert?: Maybe<UserUpsertWithoutAppConsultationInput>,
};

export type UserUpdateOneRequiredWithoutProfileInput = {
  create?: Maybe<UserCreateWithoutProfileInput>,
  connect?: Maybe<UserWhereUniqueInput>,
  update?: Maybe<UserUpdateWithoutProfileDataInput>,
  upsert?: Maybe<UserUpsertWithoutProfileInput>,
};

export type UserUpdateOneWithoutLogRequestByInput = {
  create?: Maybe<UserCreateWithoutLogRequestByInput>,
  connect?: Maybe<UserWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<UserUpdateWithoutLogRequestByDataInput>,
  upsert?: Maybe<UserUpsertWithoutLogRequestByInput>,
};

export type UserUpdateOneWithoutLogRequestToInput = {
  create?: Maybe<UserCreateWithoutLogRequestToInput>,
  connect?: Maybe<UserWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<UserUpdateWithoutLogRequestToDataInput>,
  upsert?: Maybe<UserUpsertWithoutLogRequestToInput>,
};

export type UserUpdateWithoutAppConsultationDataInput = {
  address?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rememberToken?: Maybe<Scalars['String']>,
  roles?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  username?: Maybe<Scalars['String']>,
  profile?: Maybe<UserProfileUpdateOneRequiredWithoutUserIdInput>,
  roles_type?: Maybe<RoleUpdateManyWithoutUserIdInput>,
  logRequestBy?: Maybe<LogRequestUpdateManyWithoutRequestByInput>,
  logRequestTo?: Maybe<LogRequestUpdateManyWithoutRequestToInput>,
};

export type UserUpdateWithoutLogRequestByDataInput = {
  address?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rememberToken?: Maybe<Scalars['String']>,
  roles?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  username?: Maybe<Scalars['String']>,
  profile?: Maybe<UserProfileUpdateOneRequiredWithoutUserIdInput>,
  roles_type?: Maybe<RoleUpdateManyWithoutUserIdInput>,
  logRequestTo?: Maybe<LogRequestUpdateManyWithoutRequestToInput>,
  appConsultation?: Maybe<LogRequestAppUpdateManyWithoutAppConsultationInput>,
};

export type UserUpdateWithoutLogRequestToDataInput = {
  address?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rememberToken?: Maybe<Scalars['String']>,
  roles?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  username?: Maybe<Scalars['String']>,
  profile?: Maybe<UserProfileUpdateOneRequiredWithoutUserIdInput>,
  roles_type?: Maybe<RoleUpdateManyWithoutUserIdInput>,
  logRequestBy?: Maybe<LogRequestUpdateManyWithoutRequestByInput>,
  appConsultation?: Maybe<LogRequestAppUpdateManyWithoutAppConsultationInput>,
};

export type UserUpdateWithoutProfileDataInput = {
  address?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rememberToken?: Maybe<Scalars['String']>,
  roles?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  username?: Maybe<Scalars['String']>,
  roles_type?: Maybe<RoleUpdateManyWithoutUserIdInput>,
  logRequestBy?: Maybe<LogRequestUpdateManyWithoutRequestByInput>,
  logRequestTo?: Maybe<LogRequestUpdateManyWithoutRequestToInput>,
  appConsultation?: Maybe<LogRequestAppUpdateManyWithoutAppConsultationInput>,
};

export type UserUpdateWithoutRoles_TypeDataInput = {
  address?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rememberToken?: Maybe<Scalars['String']>,
  roles?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  username?: Maybe<Scalars['String']>,
  profile?: Maybe<UserProfileUpdateOneRequiredWithoutUserIdInput>,
  logRequestBy?: Maybe<LogRequestUpdateManyWithoutRequestByInput>,
  logRequestTo?: Maybe<LogRequestUpdateManyWithoutRequestToInput>,
  appConsultation?: Maybe<LogRequestAppUpdateManyWithoutAppConsultationInput>,
};

export type UserUpdateWithWhereUniqueWithoutRoles_TypeInput = {
  where: UserWhereUniqueInput,
  data: UserUpdateWithoutRoles_TypeDataInput,
};

export type UserUpsertNestedInput = {
  update: UserUpdateDataInput,
  create: UserCreateInput,
};

export type UserUpsertWithoutAppConsultationInput = {
  update: UserUpdateWithoutAppConsultationDataInput,
  create: UserCreateWithoutAppConsultationInput,
};

export type UserUpsertWithoutLogRequestByInput = {
  update: UserUpdateWithoutLogRequestByDataInput,
  create: UserCreateWithoutLogRequestByInput,
};

export type UserUpsertWithoutLogRequestToInput = {
  update: UserUpdateWithoutLogRequestToDataInput,
  create: UserCreateWithoutLogRequestToInput,
};

export type UserUpsertWithoutProfileInput = {
  update: UserUpdateWithoutProfileDataInput,
  create: UserCreateWithoutProfileInput,
};

export type UserUpsertWithWhereUniqueWithoutRoles_TypeInput = {
  where: UserWhereUniqueInput,
  update: UserUpdateWithoutRoles_TypeDataInput,
  create: UserCreateWithoutRoles_TypeInput,
};

export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>,
  address?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  address_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  address_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  address_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  address_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  address_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  address_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  address_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  address_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  address_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  address_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  address_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  address_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  address_not_ends_with?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  avatar_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  avatar_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  avatar_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  avatar_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  avatar_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  avatar_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  avatar_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  avatar_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  avatar_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  avatar_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  avatar_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  avatar_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  avatar_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  deletedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  deletedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  deletedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  deletedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  deletedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  deletedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  deletedAt_gte?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  email_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  email_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  email_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  email_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  email_not_ends_with?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  password_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  password_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  password_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  password_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  password_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  password_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  password_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  password_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  password_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  password_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  password_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  password_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  password_not_ends_with?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  phone_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  phone_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  phone_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  phone_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  phone_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  phone_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  phone_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  phone_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  phone_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  phone_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  phone_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  phone_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  phone_not_ends_with?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  position_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  position_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  position_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  position_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  position_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  position_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  position_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  position_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  position_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  position_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  position_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  position_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  position_not_ends_with?: Maybe<Scalars['String']>,
  rememberToken?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  rememberToken_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  rememberToken_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  rememberToken_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  rememberToken_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  rememberToken_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  rememberToken_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  rememberToken_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  rememberToken_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  rememberToken_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  rememberToken_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  rememberToken_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  rememberToken_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  rememberToken_not_ends_with?: Maybe<Scalars['String']>,
  roles?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  roles_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  roles_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  roles_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  roles_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  roles_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  roles_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  roles_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  roles_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  roles_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  roles_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  roles_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  roles_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  roles_not_ends_with?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  username?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  username_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  username_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  username_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  username_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  username_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  username_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  username_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  username_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  username_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  username_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  username_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  username_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  username_not_ends_with?: Maybe<Scalars['String']>,
  profile?: Maybe<UserProfileWhereInput>,
  roles_type_every?: Maybe<RoleWhereInput>,
  roles_type_some?: Maybe<RoleWhereInput>,
  roles_type_none?: Maybe<RoleWhereInput>,
  logRequestBy_every?: Maybe<LogRequestWhereInput>,
  logRequestBy_some?: Maybe<LogRequestWhereInput>,
  logRequestBy_none?: Maybe<LogRequestWhereInput>,
  logRequestTo_every?: Maybe<LogRequestWhereInput>,
  logRequestTo_some?: Maybe<LogRequestWhereInput>,
  logRequestTo_none?: Maybe<LogRequestWhereInput>,
  appConsultation_every?: Maybe<LogRequestAppWhereInput>,
  appConsultation_some?: Maybe<LogRequestAppWhereInput>,
  appConsultation_none?: Maybe<LogRequestAppWhereInput>,
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};
export type DestroyRolesMutationVariables = {
  where: RoleWhereInput
};


export type DestroyRolesMutation = { deleteManyRoles: Pick<BatchPayload, 'count'> };

export type DestroyLogMutationVariables = {
  where: LogRequestWhereInput
};


export type DestroyLogMutation = { deleteManyLogRequests: Pick<BatchPayload, 'count'> };

export type DestroyLitMutationVariables = {
  where: CaseProgressActivityLitWhereInput
};


export type DestroyLitMutation = { deleteManyCaseProgressActivityLits: Pick<BatchPayload, 'count'> };

export type DestroyNonlitMutationVariables = {
  where: CaseProgressActivityNonlitWhereInput
};


export type DestroyNonlitMutation = { deleteManyCaseProgressActivityNonlits: Pick<BatchPayload, 'count'> };

export type DestroyKorbanMutationVariables = {
  where: CaseKorbanWhereInput
};


export type DestroyKorbanMutation = { deleteManyCaseKorbans: Pick<BatchPayload, 'count'> };

export type DestroyPelakuMutationVariables = {
  where: CasePelakuWhereInput
};


export type DestroyPelakuMutation = { deleteManyCasePelakus: Pick<BatchPayload, 'count'> };

export type DestroyCaseViolatedRightMutationVariables = {
  where: CaseViolatedRightWhereInput
};


export type DestroyCaseViolatedRightMutation = { deleteManyCaseViolatedRights: Pick<BatchPayload, 'count'> };

export type DestroyCaseClassificationMutationVariables = {
  where: CaseClassificationWhereInput
};


export type DestroyCaseClassificationMutation = { deleteManyCaseClassifications: Pick<BatchPayload, 'count'> };

export type DestroyCaseProgressActivityMutationVariables = {
  where: CaseProgressActivityWhereInput
};


export type DestroyCaseProgressActivityMutation = { deleteManyCaseProgressActivities: Pick<BatchPayload, 'count'> };

export type PostLogRequestMutationVariables = {
  data: LogRequestCreateInput
};


export type PostLogRequestMutation = { createLogRequest: (Pick<LogRequest, 'ID' | 'isiRequest' | 'jenisRequest' | 'tanggapanRequest' | 'tanggapanRequestIsi' | 'tglExpired' | 'tglRequest' | 'tglRespon'> & { caseId: Maybe<Pick<Case, 'id'>>, applicationId: Maybe<Pick<Application, 'id' | 'tahap'>>, networkId: Maybe<Pick<Network, 'id'>>, personId: Maybe<Pick<Person, 'id'>>, pp: Maybe<Array<Pick<LogRequestApp, 'id'>>>, requestBy: Maybe<Pick<User, 'id'>>, requestTo: Maybe<Pick<User, 'id'>> }) };

export type PostUserMutationVariables = {
  data: UserCreateInput
};


export type PostUserMutation = { createUser: (Pick<User, 'address' | 'avatar' | 'createdAt' | 'deletedAt' | 'email' | 'id' | 'name' | 'password' | 'phone' | 'position' | 'rememberToken' | 'roles' | 'status' | 'updatedAt' | 'username'> & { profile: Pick<UserProfile, 'id' | 'noContact'> }) };

export type PostClientMutationVariables = {
  data: ClientCreateInput
};


export type PostClientMutation = { createClient: (Pick<Client, 'id' | 'alamatLokasi' | 'asetGedung' | 'asetKios' | 'asetLahanGarapan' | 'asetLapak' | 'asetMobil' | 'asetMotor' | 'asetRumah' | 'asetTanah' | 'asetToko' | 'asetWarung' | 'createdAt' | 'createdBy' | 'pendapatan' | 'sktm' | 'sktmUpload' | 'stmKeterangan' | 'tanggunganAnak' | 'tanggunganFamili' | 'tanggunganLain' | 'tanggunganPasangan' | 'updatedAt' | 'updatedBy' | 'usiaSaatKlien'> & { applicationId: Pick<Application, 'id'>, personId: Pick<Person, 'id'> }) };

export type PostApplicationMutationVariables = {
  data: ApplicationCreateInput
};


export type PostApplicationMutation = { createApplication: (Pick<Application, 'id' | 'createdAt' | 'createdBy' | 'dudukPerara' | 'infoLbh' | 'jumlahPenerimaManfaat' | 'konfirmasiData' | 'noReg' | 'pernahKlien' | 'pernahPpLain' | 'ppLain' | 'regDate' | 'relasiWakilClient' | 'setujuAdvokasi' | 'statusPerwakilan' | 'updatedAt' | 'updatedBy' | 'waktuPernahKlien' | 'whyLbh'> & { wakilId: Maybe<Pick<Person, 'id' | 'namaLengkap'>>, case: Maybe<Pick<Case, 'id'>>, clients: Maybe<Array<(Pick<Client, 'id' | 'alamatLokasi' | 'asetGedung' | 'asetKios' | 'asetLahanGarapan' | 'asetLapak' | 'asetMobil' | 'asetMotor' | 'asetRumah' | 'asetTanah' | 'asetToko' | 'asetWarung' | 'createdAt' | 'createdBy' | 'pendapatan' | 'sktm' | 'sktmUpload' | 'stmKeterangan' | 'tanggunganAnak' | 'tanggunganFamili' | 'tanggunganLain' | 'tanggunganPasangan' | 'updatedAt' | 'updatedBy' | 'usiaSaatKlien'> & { personId: Pick<Person, 'id' | 'namaLengkap'> })>> }) };

export type PutCaseMutationVariables = {
  data: CaseUpdateInput,
  where: CaseWhereUniqueInput
};


export type PutCaseMutation = { updateCase: Maybe<(Pick<Case, 'id' | 'applicationId' | 'caseClosed' | 'caseClosedJenis' | 'createdAt' | 'createdBy' | 'hakTerlanggar' | 'issue' | 'judulKasus' | 'klasifikasiDok' | 'klasifikasiDok' | 'kronologiKasus' | 'lockDitolak' | 'statusPendampingan' | 'targetAdvokasi' | 'unlockPk' | 'unlockTransfer' | 'updatedAt' | 'updatedBy'> & { application: (Pick<Application, 'id' | 'createdAt' | 'createdBy' | 'dudukPerara' | 'infoLbh' | 'jumlahPenerimaManfaat' | 'konfirmasiData' | 'noReg' | 'pernahKlien' | 'pernahPpLain' | 'ppLain' | 'regDate' | 'relasiWakilClient' | 'setujuAdvokasi' | 'statusPerwakilan' | 'updatedAt' | 'updatedBy' | 'waktuPernahKlien' | 'whyLbh' | 'tahap' | 'status'> & { wakilId: Maybe<Pick<Person, 'id' | 'agama' | 'alamatDomisili' | 'alamatId' | 'alatBantu' | 'alias' | 'createdAt' | 'createdBy' | 'disabilitas' | 'distrikDomisili' | 'distrikId' | 'domisiliSama' | 'email' | 'golDarah' | 'jenisDisabilitas' | 'jenisDomisili' | 'jenisId' | 'jenisKelamin' | 'jmlAnggota' | 'namaLengkap' | 'nomorId' | 'pekerjaan' | 'pendidikan' | 'statusPernikahan' | 'telepon'>>, clients: Maybe<Array<{ personId: Pick<Person, 'namaLengkap'> }>> }), classifications: Maybe<Array<Pick<CaseClassification, 'id' | 'kodeMt'>>>, consultations: Maybe<Array<(Pick<CaseConsultation, 'id' | 'appKonsul' | 'createdAt' | 'createdBy' | 'isiKonsul' | 'judulAktifitas' | 'ppKonsul' | 'harapan' | 'saranHukum' | 'rencanaTindakLanjut' | 'tglKonsul' | 'updatedAt' | 'updatedBy'> & { apps: Maybe<Array<{ appConsultation: Maybe<Pick<User, 'name' | 'id'>> }>> })>>, documents: Maybe<Array<Pick<CaseDocument, 'jenisDokumen' | 'judulDokumen' | 'keterangan' | 'link'>>>, issues: Maybe<Array<Pick<CaseIssue, 'id' | 'kodeMt'>>>, korbans: Maybe<Array<(Pick<CaseKorban, 'id'> & { personId: Maybe<Pick<Person, 'namaLengkap' | 'id'>> })>>, pelakus: Maybe<Array<(Pick<CasePelaku, 'id'> & { personId: Maybe<Pick<Person, 'namaLengkap' | 'id'>> })>>, pk: Maybe<(Pick<CasePk, 'id' | 'createdAt' | 'createdBy' | 'didampingi' | 'legalMemo' | 'notulaRapat' | 'strategiAdvokasi' | 'targetAkhirAdvokasi' | 'statusAlasanTdk' | 'tglRapat'> & { ppPendamping: Maybe<(Pick<User, 'address' | 'avatar' | 'createdAt' | 'deletedAt' | 'email' | 'id' | 'name' | 'password' | 'phone' | 'position' | 'rememberToken' | 'roles' | 'status' | 'updatedAt' | 'username'> & { profile: Pick<UserProfile, 'id' | 'noContact'> })> })>, progresses: Maybe<Pick<CaseProgress, 'id' | 'catatan' | 'jenisPeradilan'>>, activities: Maybe<Array<(Pick<CaseProgressActivity, 'id' | 'capaian' | 'hambatan' | 'judulAktifitas' | 'position' | 'rencanaStrategi' | 'targetAdvokasi'> & { activitieslit: Maybe<Array<Pick<CaseProgressActivityLit, 'id' | 'kodeMt'>>>, activitiesnonlit: Maybe<Array<Pick<CaseProgressActivityNonlit, 'id' | 'kodeMt'>>> })>>, transferreferrals: Maybe<Array<Pick<CaseTransferReferral, 'id' | 'catatan' | 'document' | 'jenisTransferReferral' | 'networkId' | 'updatedAt' | 'updatedBy'>>>, violatedrights: Maybe<Array<Pick<CaseViolatedRight, 'id' | 'kodeMt'>>> })> };

export type PutLogRequestMutationVariables = {
  data: LogRequestUpdateInput,
  where: LogRequestWhereUniqueInput
};


export type PutLogRequestMutation = { updateLogRequest: Maybe<(Pick<LogRequest, 'ID' | 'isiRequest' | 'jenisRequest' | 'tanggapanRequest' | 'tanggapanRequestIsi' | 'tglExpired' | 'tglRequest' | 'tglRespon'> & { caseId: Maybe<Pick<Case, 'id'>>, applicationId: Maybe<Pick<Application, 'id'>>, networkId: Maybe<Pick<Network, 'id'>>, personId: Maybe<Pick<Person, 'id'>>, pp: Maybe<Array<Pick<LogRequestApp, 'id'>>>, requestBy: Maybe<Pick<User, 'id'>>, requestTo: Maybe<Pick<User, 'id'>> })> };

export type PutUserMutationVariables = {
  data: UserUpdateInput,
  where: UserWhereUniqueInput
};


export type PutUserMutation = { updateUser: Maybe<(Pick<User, 'address' | 'avatar' | 'createdAt' | 'deletedAt' | 'email' | 'id' | 'name' | 'password' | 'phone' | 'position' | 'rememberToken' | 'roles' | 'status' | 'updatedAt' | 'username'> & { profile: Pick<UserProfile, 'id' | 'noContact'> })> };

export type PutApplicationMutationVariables = {
  data: ApplicationUpdateInput,
  where: ApplicationWhereUniqueInput
};


export type PutApplicationMutation = { updateApplication: Maybe<(Pick<Application, 'id' | 'createdAt' | 'createdBy' | 'dudukPerara' | 'infoLbh' | 'jumlahPenerimaManfaat' | 'konfirmasiData' | 'noReg' | 'pernahKlien' | 'pernahPpLain' | 'ppLain' | 'regDate' | 'relasiWakilClient' | 'setujuAdvokasi' | 'statusPerwakilan' | 'updatedAt' | 'updatedBy' | 'waktuPernahKlien' | 'whyLbh'> & { wakilId: Maybe<Pick<Person, 'id' | 'namaLengkap'>>, case: Maybe<Pick<Case, 'id'>>, clients: Maybe<Array<(Pick<Client, 'id' | 'alamatLokasi' | 'asetGedung' | 'asetKios' | 'asetLahanGarapan' | 'asetLapak' | 'asetMobil' | 'asetMotor' | 'asetRumah' | 'asetTanah' | 'asetToko' | 'asetWarung' | 'createdAt' | 'createdBy' | 'pendapatan' | 'sktm' | 'sktmUpload' | 'stmKeterangan' | 'tanggunganAnak' | 'tanggunganFamili' | 'tanggunganLain' | 'tanggunganPasangan' | 'updatedAt' | 'updatedBy' | 'usiaSaatKlien'> & { personId: Pick<Person, 'id' | 'namaLengkap'> })>> })> };

export type PutPersonMutationVariables = {
  data: PersonUpdateInput,
  where: PersonWhereUniqueInput
};


export type PutPersonMutation = { updatePerson: Maybe<(Pick<Person, 'id' | 'agama' | 'alamatDomisili' | 'alamatId' | 'alatBantu' | 'alias' | 'createdAt' | 'createdBy' | 'disabilitas' | 'distrikDomisili' | 'distrikId' | 'domisiliSama' | 'email' | 'golDarah' | 'jenisDisabilitas' | 'jenisDomisili' | 'jenisId' | 'jenisKelamin' | 'jmlAnggota' | 'namaLengkap' | 'nomorId' | 'pekerjaan' | 'pendidikan' | 'statusPernikahan' | 'telepon' | 'tglLahir' | 'tmpLahir' | 'unitSatuan' | 'updatedAt' | 'updatedBy' | 'wargaNegara'> & { applications: Maybe<Array<Pick<Application, 'id' | 'noReg' | 'createdAt'>>>, clients: Maybe<Array<(Pick<Client, 'id'> & { applicationId: Pick<Application, 'id' | 'noReg' | 'createdAt'> })>>, documents: Maybe<Array<Pick<PersonDocument, 'id' | 'title' | 'file'>>> })> };

export type PostPersonMutationVariables = {
  data: PersonCreateInput
};


export type PostPersonMutation = { createPerson: (Pick<Person, 'id' | 'agama' | 'alamatDomisili' | 'alamatId' | 'alatBantu' | 'alias' | 'createdAt' | 'createdBy' | 'disabilitas' | 'distrikDomisili' | 'distrikId' | 'domisiliSama' | 'email' | 'golDarah' | 'jenisDisabilitas' | 'jenisDomisili' | 'jenisId' | 'jenisKelamin' | 'jmlAnggota' | 'namaLengkap' | 'nomorId' | 'pekerjaan' | 'pendidikan' | 'statusPernikahan' | 'telepon' | 'tglLahir' | 'tmpLahir' | 'unitSatuan' | 'updatedAt' | 'updatedBy' | 'wargaNegara'> & { applications: Maybe<Array<Pick<Application, 'id' | 'noReg' | 'createdAt'>>>, clients: Maybe<Array<(Pick<Client, 'id'> & { applicationId: Pick<Application, 'id' | 'noReg' | 'createdAt'> })>>, documents: Maybe<Array<Pick<PersonDocument, 'id' | 'title' | 'file'>>> }) };

export type GetLogRequestQueryVariables = {
  where?: Maybe<LogRequestWhereInput>,
  orderBy?: Maybe<LogRequestOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GetLogRequestQuery = { logRequests: Array<Maybe<(Pick<LogRequest, 'ID' | 'isiRequest' | 'tanggapanRequestIsi' | 'jenisRequest' | 'statusRequest' | 'tanggapanRequest' | 'tglExpired' | 'tglRequest' | 'tglRespon'> & { caseId: Maybe<(Pick<Case, 'id' | 'judulKasus' | 'kronologiKasus'> & { transfer: Maybe<(Pick<CaseTransfer, 'id' | 'tglTransfer'> & { network: Maybe<Pick<Network, 'id' | 'name'>> })>, application: (Pick<Application, 'id' | 'noReg'> & { clients: Maybe<Array<(Pick<Client, 'id'> & { personId: Pick<Person, 'id' | 'namaLengkap'> })>> }), pk: Maybe<Pick<CasePk, 'id' | 'didampingi' | 'tglRapat'>> })>, applicationId: Maybe<(Pick<Application, 'id' | 'tahap' | 'noReg' | 'dudukPerara'> & { clients: Maybe<Array<(Pick<Client, 'id'> & { personId: Pick<Person, 'id' | 'namaLengkap'> })>> })>, networkId: Maybe<Pick<Network, 'id' | 'name'>>, personId: Maybe<Pick<Person, 'id' | 'namaLengkap'>>, pp: Maybe<Array<(Pick<LogRequestApp, 'id'> & { appConsultation: Pick<User, 'name' | 'id'> })>>, requestBy: Maybe<Pick<User, 'id' | 'name'>>, requestTo: Maybe<Pick<User, 'id'>> })>> };

export type GetRolesTypeQueryVariables = {
  where?: Maybe<RolesTypeWhereInput>,
  orderBy?: Maybe<RolesTypeOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GetRolesTypeQuery = { rolesTypes: Array<Maybe<Pick<RolesType, 'id' | 'description'>>> };

export type GetNetworksQueryVariables = {
  where?: Maybe<NetworkWhereInput>,
  orderBy?: Maybe<NetworkOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GetNetworksQuery = { networks: Array<Maybe<Pick<Network, 'address' | 'contactPerson' | 'createdAt' | 'email' | 'id' | 'name' | 'noContact' | 'provinceId' | 'regencyId' | 'type' | 'updatedAt'>>> };

export type GetUserQueryVariables = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GetUserQuery = { users: Array<Maybe<(Pick<User, 'address' | 'avatar' | 'createdAt' | 'deletedAt' | 'email' | 'id' | 'name' | 'password' | 'phone' | 'position' | 'rememberToken' | 'roles' | 'status' | 'updatedAt' | 'username'> & { profile: Pick<UserProfile, 'id' | 'noContact'>, roles_type: Maybe<Array<(Pick<Role, 'id'> & { type: Pick<RolesType, 'id' | 'description'> })>> })>> };

export type GetCaseQueryVariables = {
  where?: Maybe<CaseWhereInput>,
  orderBy?: Maybe<CaseOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GetCaseQuery = { cases: Array<Maybe<(Pick<Case, 'id' | 'applicationId' | 'caseClosed' | 'caseClosedJenis' | 'createdAt' | 'createdBy' | 'hakTerlanggar' | 'issue' | 'judulKasus' | 'klasifikasiDok' | 'klasifikasiDok' | 'kronologiKasus' | 'lockDitolak' | 'statusPendampingan' | 'targetAdvokasi' | 'unlockPk' | 'unlockTransfer' | 'updatedAt' | 'updatedBy'> & { transfer: Maybe<(Pick<CaseTransfer, 'id' | 'tglTransfer' | 'catatan' | 'createdBy' | 'updatedBy'> & { network: Maybe<Pick<Network, 'id' | 'name'>> })>, referrals: Maybe<Array<(Pick<CaseReferral, 'id' | 'tglTransfer' | 'catatan' | 'createdBy' | 'updatedBy'> & { client: Pick<Person, 'id' | 'namaLengkap'>, network: Maybe<Pick<Network, 'id' | 'name'>> })>>, application: (Pick<Application, 'id' | 'createdAt' | 'createdBy' | 'dudukPerara' | 'infoLbh' | 'jumlahPenerimaManfaat' | 'konfirmasiData' | 'noReg' | 'pernahKlien' | 'pernahPpLain' | 'ppLain' | 'regDate' | 'relasiWakilClient' | 'setujuAdvokasi' | 'statusPerwakilan' | 'updatedAt' | 'updatedBy' | 'waktuPernahKlien' | 'whyLbh' | 'tahap' | 'status'> & { wakilId: Maybe<Pick<Person, 'id' | 'agama' | 'alamatDomisili' | 'alamatId' | 'alatBantu' | 'alias' | 'createdAt' | 'createdBy' | 'disabilitas' | 'distrikDomisili' | 'distrikId' | 'domisiliSama' | 'email' | 'golDarah' | 'jenisDisabilitas' | 'jenisDomisili' | 'jenisId' | 'jenisKelamin' | 'jmlAnggota' | 'namaLengkap' | 'nomorId' | 'pekerjaan' | 'pendidikan' | 'statusPernikahan' | 'telepon'>>, clients: Maybe<Array<(Pick<Client, 'id'> & { personId: Pick<Person, 'id' | 'namaLengkap'> })>> }), classifications: Maybe<Array<Pick<CaseClassification, 'id' | 'kodeMt'>>>, consultations: Maybe<Array<(Pick<CaseConsultation, 'id' | 'appKonsul' | 'createdAt' | 'createdBy' | 'isiKonsul' | 'judulAktifitas' | 'ppKonsul' | 'tglKonsul' | 'harapan' | 'saranHukum' | 'rencanaTindakLanjut' | 'updatedAt' | 'updatedBy'> & { caseId: (Pick<Case, 'id'> & { application: Pick<Application, 'id' | 'noReg'> }), apps: Maybe<Array<(Pick<CaseConsultationApp, 'id'> & { appConsultation: Maybe<(Pick<User, 'name' | 'id'> & { roles_type: Maybe<Array<(Pick<Role, 'id'> & { type: Pick<RolesType, 'id'> })>> })> })>> })>>, documents: Maybe<Array<Pick<CaseDocument, 'id' | 'jenisDokumen' | 'judulDokumen' | 'keterangan' | 'link' | 'createdAt'>>>, issues: Maybe<Array<Pick<CaseIssue, 'id' | 'kodeMt'>>>, korbans: Maybe<Array<(Pick<CaseKorban, 'id'> & { personId: Maybe<Pick<Person, 'namaLengkap' | 'id'>> })>>, pelakus: Maybe<Array<(Pick<CasePelaku, 'id'> & { personId: Maybe<Pick<Person, 'namaLengkap' | 'id'>> })>>, pk: Maybe<(Pick<CasePk, 'id' | 'createdAt' | 'createdBy' | 'didampingi' | 'legalMemo' | 'notulaRapat' | 'strategiAdvokasi' | 'targetAkhirAdvokasi' | 'statusAlasanTdk' | 'tglRapat'> & { ppPendamping: Maybe<(Pick<User, 'address' | 'avatar' | 'createdAt' | 'deletedAt' | 'email' | 'id' | 'name' | 'password' | 'phone' | 'position' | 'rememberToken' | 'roles' | 'status' | 'updatedAt' | 'username'> & { profile: Pick<UserProfile, 'id' | 'noContact'> })> })>, progresses: Maybe<Pick<CaseProgress, 'id' | 'catatan' | 'jenisPeradilan'>>, activities: Maybe<Array<(Pick<CaseProgressActivity, 'id' | 'capaian' | 'hambatan' | 'tglAktifitas' | 'judulAktifitas' | 'position' | 'rencanaStrategi' | 'targetAdvokasi'> & { activitieslit: Maybe<Array<Pick<CaseProgressActivityLit, 'id' | 'kodeMt'>>>, activitiesnonlit: Maybe<Array<Pick<CaseProgressActivityNonlit, 'id' | 'kodeMt'>>> })>>, transferreferrals: Maybe<Array<Pick<CaseTransferReferral, 'id' | 'catatan' | 'document' | 'jenisTransferReferral' | 'networkId' | 'updatedAt' | 'updatedBy'>>>, violatedrights: Maybe<Array<Pick<CaseViolatedRight, 'id' | 'kodeMt'>>>, logRequests: Maybe<Array<(Pick<LogRequest, 'ID' | 'isiRequest' | 'tanggapanRequestIsi' | 'jenisRequest' | 'statusRequest' | 'tanggapanRequest' | 'tglExpired' | 'tglRequest' | 'tglRespon'> & { caseId: Maybe<Pick<Case, 'id' | 'judulKasus'>>, applicationId: Maybe<(Pick<Application, 'id' | 'tahap' | 'noReg' | 'dudukPerara'> & { clients: Maybe<Array<(Pick<Client, 'id'> & { personId: Pick<Person, 'id' | 'namaLengkap'> })>> })>, networkId: Maybe<Pick<Network, 'id'>>, personId: Maybe<Pick<Person, 'id'>>, pp: Maybe<Array<(Pick<LogRequestApp, 'id'> & { appConsultation: (Pick<User, 'name' | 'id'> & { roles_type: Maybe<Array<(Pick<Role, 'id'> & { type: Pick<RolesType, 'id'> })>> }) })>>, requestBy: Maybe<Pick<User, 'id'>>, requestTo: Maybe<Pick<User, 'id'>> })>> })>> };

export type GetConsultationQueryVariables = {
  where?: Maybe<CaseConsultationWhereInput>,
  orderBy?: Maybe<CaseConsultationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GetConsultationQuery = { caseConsultations: Array<Maybe<Pick<CaseConsultation, 'id'>>> };

export type GetPkQueryVariables = {
  where?: Maybe<CasePkWhereInput>,
  orderBy?: Maybe<CasePkOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GetPkQuery = { casePks: Array<Maybe<Pick<CasePk, 'id'>>> };

export type GetClientQueryVariables = {
  where?: Maybe<ClientWhereInput>,
  orderBy?: Maybe<ClientOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GetClientQuery = { clients: Array<Maybe<(Pick<Client, 'id' | 'alamatLokasi' | 'asetGedung' | 'asetKios' | 'asetLahanGarapan' | 'asetLapak' | 'asetMobil' | 'asetMotor' | 'asetRumah' | 'asetTanah' | 'asetToko' | 'asetWarung' | 'createdAt' | 'createdBy' | 'pendapatan' | 'sktm' | 'sktmUpload' | 'stmKeterangan' | 'tanggunganAnak' | 'tanggunganFamili' | 'tanggunganLain' | 'tanggunganPasangan' | 'updatedAt' | 'updatedBy' | 'usiaSaatKlien'> & { applicationId: Pick<Application, 'id'>, personId: Pick<Person, 'id'> })>> };

export type GetApplicationsQueryVariables = {
  where?: Maybe<ApplicationWhereInput>,
  orderBy?: Maybe<ApplicationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GetApplicationsQuery = { applications: Array<Maybe<(Pick<Application, 'id' | 'createdAt' | 'createdBy' | 'dudukPerara' | 'infoLbh' | 'jumlahPenerimaManfaat' | 'konfirmasiData' | 'noReg' | 'pernahKlien' | 'pernahPpLain' | 'ppLain' | 'regDate' | 'relasiWakilClient' | 'setujuAdvokasi' | 'statusPerwakilan' | 'updatedAt' | 'updatedBy' | 'waktuPernahKlien' | 'whyLbh'> & { wakilId: Maybe<Pick<Person, 'id' | 'namaLengkap'>>, case: Maybe<Pick<Case, 'id'>>, clients: Maybe<Array<(Pick<Client, 'id' | 'alamatLokasi' | 'asetGedung' | 'asetKios' | 'asetLahanGarapan' | 'asetLapak' | 'asetMobil' | 'asetMotor' | 'asetRumah' | 'asetTanah' | 'asetToko' | 'asetWarung' | 'createdAt' | 'createdBy' | 'pendapatan' | 'sktm' | 'sktmUpload' | 'stmKeterangan' | 'tanggunganAnak' | 'tanggunganFamili' | 'tanggunganLain' | 'tanggunganPasangan' | 'updatedAt' | 'updatedBy' | 'usiaSaatKlien'> & { personId: Pick<Person, 'id' | 'namaLengkap'> })>> })>> };

export type GetMtVocabsQueryVariables = {
  where?: Maybe<MtVocabWhereInput>,
  orderBy?: Maybe<MtVocabOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GetMtVocabsQuery = { mtVocabs: Array<Maybe<Pick<MtVocab, 'KODE' | 'kode_induk' | 'level' | 'sembunyikan' | 'teks' | 'urutan'>>> };

export type AllPersonQueryVariables = {
  where?: Maybe<PersonWhereInput>,
  orderBy?: Maybe<PersonOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type AllPersonQuery = { persons: Array<Maybe<(Pick<Person, 'id' | 'agama' | 'alamatDomisili' | 'alamatId' | 'alatBantu' | 'alias' | 'createdAt' | 'createdBy' | 'disabilitas' | 'distrikDomisili' | 'distrikId' | 'domisiliSama' | 'email' | 'golDarah' | 'jenisDisabilitas' | 'jenisDomisili' | 'jenisId' | 'jenisKelamin' | 'jmlAnggota' | 'namaLengkap' | 'nomorId' | 'pekerjaan' | 'pendidikan' | 'statusPernikahan' | 'telepon' | 'tglLahir' | 'tmpLahir' | 'unitSatuan' | 'updatedAt' | 'updatedBy' | 'wargaNegara'> & { applications: Maybe<Array<Pick<Application, 'id' | 'noReg' | 'createdAt'>>>, clients: Maybe<Array<(Pick<Client, 'id'> & { applicationId: Pick<Application, 'id' | 'noReg' | 'createdAt'> })>>, documents: Maybe<Array<Pick<PersonDocument, 'id' | 'title' | 'file'>>> })>> };

export const DestroyRolesDocument = gql`
    mutation destroyRoles($where: RoleWhereInput!) {
  deleteManyRoles(where: $where) {
    count
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DestroyRolesGQL extends Apollo.Mutation<DestroyRolesMutation, DestroyRolesMutationVariables> {
    document = DestroyRolesDocument;
    
  }
export const DestroyLogDocument = gql`
    mutation destroyLog($where: LogRequestWhereInput!) {
  deleteManyLogRequests(where: $where) {
    count
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DestroyLogGQL extends Apollo.Mutation<DestroyLogMutation, DestroyLogMutationVariables> {
    document = DestroyLogDocument;
    
  }
export const DestroyLitDocument = gql`
    mutation destroyLit($where: CaseProgressActivityLitWhereInput!) {
  deleteManyCaseProgressActivityLits(where: $where) {
    count
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DestroyLitGQL extends Apollo.Mutation<DestroyLitMutation, DestroyLitMutationVariables> {
    document = DestroyLitDocument;
    
  }
export const DestroyNonlitDocument = gql`
    mutation destroyNonlit($where: CaseProgressActivityNonlitWhereInput!) {
  deleteManyCaseProgressActivityNonlits(where: $where) {
    count
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DestroyNonlitGQL extends Apollo.Mutation<DestroyNonlitMutation, DestroyNonlitMutationVariables> {
    document = DestroyNonlitDocument;
    
  }
export const DestroyKorbanDocument = gql`
    mutation destroyKorban($where: CaseKorbanWhereInput!) {
  deleteManyCaseKorbans(where: $where) {
    count
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DestroyKorbanGQL extends Apollo.Mutation<DestroyKorbanMutation, DestroyKorbanMutationVariables> {
    document = DestroyKorbanDocument;
    
  }
export const DestroyPelakuDocument = gql`
    mutation destroyPelaku($where: CasePelakuWhereInput!) {
  deleteManyCasePelakus(where: $where) {
    count
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DestroyPelakuGQL extends Apollo.Mutation<DestroyPelakuMutation, DestroyPelakuMutationVariables> {
    document = DestroyPelakuDocument;
    
  }
export const DestroyCaseViolatedRightDocument = gql`
    mutation destroyCaseViolatedRight($where: CaseViolatedRightWhereInput!) {
  deleteManyCaseViolatedRights(where: $where) {
    count
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DestroyCaseViolatedRightGQL extends Apollo.Mutation<DestroyCaseViolatedRightMutation, DestroyCaseViolatedRightMutationVariables> {
    document = DestroyCaseViolatedRightDocument;
    
  }
export const DestroyCaseClassificationDocument = gql`
    mutation destroyCaseClassification($where: CaseClassificationWhereInput!) {
  deleteManyCaseClassifications(where: $where) {
    count
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DestroyCaseClassificationGQL extends Apollo.Mutation<DestroyCaseClassificationMutation, DestroyCaseClassificationMutationVariables> {
    document = DestroyCaseClassificationDocument;
    
  }
export const DestroyCaseProgressActivityDocument = gql`
    mutation destroyCaseProgressActivity($where: CaseProgressActivityWhereInput!) {
  deleteManyCaseProgressActivities(where: $where) {
    count
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DestroyCaseProgressActivityGQL extends Apollo.Mutation<DestroyCaseProgressActivityMutation, DestroyCaseProgressActivityMutationVariables> {
    document = DestroyCaseProgressActivityDocument;
    
  }
export const PostLogRequestDocument = gql`
    mutation postLogRequest($data: LogRequestCreateInput!) {
  createLogRequest(data: $data) {
    ID
    caseId {
      id
    }
    isiRequest
    applicationId {
      id
      tahap
    }
    jenisRequest
    networkId {
      id
    }
    personId {
      id
    }
    pp {
      id
    }
    requestBy {
      id
    }
    requestTo {
      id
    }
    tanggapanRequest
    tanggapanRequestIsi
    tglExpired
    tglRequest
    tglRespon
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PostLogRequestGQL extends Apollo.Mutation<PostLogRequestMutation, PostLogRequestMutationVariables> {
    document = PostLogRequestDocument;
    
  }
export const PostUserDocument = gql`
    mutation postUser($data: UserCreateInput!) {
  createUser(data: $data) {
    address
    avatar
    createdAt
    deletedAt
    email
    id
    name
    password
    phone
    position
    rememberToken
    roles
    status
    updatedAt
    username
    profile {
      id
      noContact
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PostUserGQL extends Apollo.Mutation<PostUserMutation, PostUserMutationVariables> {
    document = PostUserDocument;
    
  }
export const PostClientDocument = gql`
    mutation postClient($data: ClientCreateInput!) {
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
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PostClientGQL extends Apollo.Mutation<PostClientMutation, PostClientMutationVariables> {
    document = PostClientDocument;
    
  }
export const PostApplicationDocument = gql`
    mutation postApplication($data: ApplicationCreateInput!) {
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
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PostApplicationGQL extends Apollo.Mutation<PostApplicationMutation, PostApplicationMutationVariables> {
    document = PostApplicationDocument;
    
  }
export const PutCaseDocument = gql`
    mutation putCase($data: CaseUpdateInput!, $where: CaseWhereUniqueInput!) {
  updateCase(data: $data, where: $where) {
    id
    applicationId
    caseClosed
    caseClosedJenis
    createdAt
    createdBy
    hakTerlanggar
    issue
    judulKasus
    klasifikasiDok
    klasifikasiDok
    kronologiKasus
    lockDitolak
    statusPendampingan
    targetAdvokasi
    unlockPk
    unlockTransfer
    updatedAt
    updatedBy
    application {
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
      }
      waktuPernahKlien
      whyLbh
      clients {
        personId {
          namaLengkap
        }
      }
      tahap
      status
    }
    classifications {
      id
      kodeMt
    }
    consultations {
      id
      appKonsul
      createdAt
      createdBy
      isiKonsul
      judulAktifitas
      ppKonsul
      harapan
      saranHukum
      rencanaTindakLanjut
      tglKonsul
      updatedAt
      updatedBy
      apps {
        appConsultation {
          name
          id
        }
      }
    }
    documents {
      jenisDokumen
      judulDokumen
      keterangan
      link
    }
    issues {
      id
      kodeMt
    }
    korbans {
      id
      personId {
        namaLengkap
        id
      }
    }
    pelakus {
      id
      personId {
        namaLengkap
        id
      }
    }
    pk {
      id
      createdAt
      createdBy
      didampingi
      legalMemo
      notulaRapat
      strategiAdvokasi
      targetAkhirAdvokasi
      ppPendamping {
        address
        avatar
        createdAt
        deletedAt
        email
        id
        name
        password
        phone
        position
        rememberToken
        roles
        status
        updatedAt
        username
        profile {
          id
          noContact
        }
      }
      statusAlasanTdk
      tglRapat
    }
    progresses {
      id
      catatan
      jenisPeradilan
    }
    activities {
      id
      capaian
      hambatan
      judulAktifitas
      position
      rencanaStrategi
      targetAdvokasi
      activitieslit {
        id
        kodeMt
      }
      activitiesnonlit {
        id
        kodeMt
      }
    }
    transferreferrals {
      id
      catatan
      document
      jenisTransferReferral
      networkId
      updatedAt
      updatedBy
    }
    violatedrights {
      id
      kodeMt
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PutCaseGQL extends Apollo.Mutation<PutCaseMutation, PutCaseMutationVariables> {
    document = PutCaseDocument;
    
  }
export const PutLogRequestDocument = gql`
    mutation putLogRequest($data: LogRequestUpdateInput!, $where: LogRequestWhereUniqueInput!) {
  updateLogRequest(data: $data, where: $where) {
    ID
    caseId {
      id
    }
    isiRequest
    applicationId {
      id
    }
    jenisRequest
    networkId {
      id
    }
    personId {
      id
    }
    pp {
      id
    }
    requestBy {
      id
    }
    requestTo {
      id
    }
    tanggapanRequest
    tanggapanRequestIsi
    tglExpired
    tglRequest
    tglRespon
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PutLogRequestGQL extends Apollo.Mutation<PutLogRequestMutation, PutLogRequestMutationVariables> {
    document = PutLogRequestDocument;
    
  }
export const PutUserDocument = gql`
    mutation putUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
  updateUser(data: $data, where: $where) {
    address
    avatar
    createdAt
    deletedAt
    email
    id
    name
    password
    phone
    position
    rememberToken
    roles
    status
    updatedAt
    username
    profile {
      id
      noContact
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PutUserGQL extends Apollo.Mutation<PutUserMutation, PutUserMutationVariables> {
    document = PutUserDocument;
    
  }
export const PutApplicationDocument = gql`
    mutation putApplication($data: ApplicationUpdateInput!, $where: ApplicationWhereUniqueInput!) {
  updateApplication(data: $data, where: $where) {
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
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PutApplicationGQL extends Apollo.Mutation<PutApplicationMutation, PutApplicationMutationVariables> {
    document = PutApplicationDocument;
    
  }
export const PutPersonDocument = gql`
    mutation putPerson($data: PersonUpdateInput!, $where: PersonWhereUniqueInput!) {
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

  @Injectable({
    providedIn: 'root'
  })
  export class PutPersonGQL extends Apollo.Mutation<PutPersonMutation, PutPersonMutationVariables> {
    document = PutPersonDocument;
    
  }
export const PostPersonDocument = gql`
    mutation postPerson($data: PersonCreateInput!) {
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

  @Injectable({
    providedIn: 'root'
  })
  export class PostPersonGQL extends Apollo.Mutation<PostPersonMutation, PostPersonMutationVariables> {
    document = PostPersonDocument;
    
  }
export const GetLogRequestDocument = gql`
    query getLogRequest($where: LogRequestWhereInput, $orderBy: LogRequestOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
  logRequests(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
    ID
    caseId {
      id
      judulKasus
      transfer {
        id
        tglTransfer
        network {
          id
          name
        }
      }
      application {
        id
        noReg
        clients {
          id
          personId {
            id
            namaLengkap
          }
        }
      }
      kronologiKasus
      pk {
        id
        didampingi
        tglRapat
      }
    }
    isiRequest
    tanggapanRequestIsi
    applicationId {
      id
      tahap
      noReg
      dudukPerara
      clients {
        id
        personId {
          id
          namaLengkap
        }
      }
    }
    jenisRequest
    networkId {
      id
      name
    }
    personId {
      id
      namaLengkap
    }
    pp {
      id
      appConsultation {
        name
        id
      }
    }
    requestBy {
      id
      name
    }
    requestTo {
      id
    }
    statusRequest
    tanggapanRequest
    tglExpired
    tglRequest
    tglRespon
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetLogRequestGQL extends Apollo.Query<GetLogRequestQuery, GetLogRequestQueryVariables> {
    document = GetLogRequestDocument;
    
  }
export const GetRolesTypeDocument = gql`
    query getRolesType($where: RolesTypeWhereInput, $orderBy: RolesTypeOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
  rolesTypes(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
    id
    description
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetRolesTypeGQL extends Apollo.Query<GetRolesTypeQuery, GetRolesTypeQueryVariables> {
    document = GetRolesTypeDocument;
    
  }
export const GetNetworksDocument = gql`
    query getNetworks($where: NetworkWhereInput, $orderBy: NetworkOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
  networks(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
    address
    contactPerson
    createdAt
    email
    id
    name
    noContact
    provinceId
    regencyId
    type
    updatedAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetNetworksGQL extends Apollo.Query<GetNetworksQuery, GetNetworksQueryVariables> {
    document = GetNetworksDocument;
    
  }
export const GetUserDocument = gql`
    query getUser($where: UserWhereInput, $orderBy: UserOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
  users(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
    address
    avatar
    createdAt
    deletedAt
    email
    id
    name
    password
    phone
    position
    rememberToken
    roles
    status
    updatedAt
    username
    profile {
      id
      noContact
    }
    roles_type {
      id
      type {
        id
        description
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUserGQL extends Apollo.Query<GetUserQuery, GetUserQueryVariables> {
    document = GetUserDocument;
    
  }
export const GetCaseDocument = gql`
    query getCase($where: CaseWhereInput, $orderBy: CaseOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
  cases(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
    id
    applicationId
    caseClosed
    caseClosedJenis
    createdAt
    createdBy
    hakTerlanggar
    issue
    judulKasus
    klasifikasiDok
    klasifikasiDok
    kronologiKasus
    lockDitolak
    statusPendampingan
    targetAdvokasi
    unlockPk
    unlockTransfer
    updatedAt
    updatedBy
    transfer {
      id
      tglTransfer
      catatan
      network {
        id
        name
      }
      createdBy
      updatedBy
    }
    referrals {
      id
      client {
        id
        namaLengkap
      }
      tglTransfer
      catatan
      network {
        id
        name
      }
      createdBy
      updatedBy
    }
    application {
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
      }
      waktuPernahKlien
      whyLbh
      clients {
        id
        personId {
          id
          namaLengkap
        }
      }
      tahap
      status
    }
    classifications {
      id
      kodeMt
    }
    consultations {
      id
      caseId {
        id
        application {
          id
          noReg
        }
      }
      appKonsul
      createdAt
      createdBy
      isiKonsul
      judulAktifitas
      ppKonsul
      tglKonsul
      harapan
      saranHukum
      rencanaTindakLanjut
      updatedAt
      updatedBy
      apps {
        id
        appConsultation {
          name
          id
          roles_type {
            id
            type {
              id
            }
          }
        }
      }
    }
    documents {
      id
      jenisDokumen
      judulDokumen
      keterangan
      link
      createdAt
    }
    issues {
      id
      kodeMt
    }
    korbans {
      id
      personId {
        namaLengkap
        id
      }
    }
    pelakus {
      id
      personId {
        namaLengkap
        id
      }
    }
    pk {
      id
      createdAt
      createdBy
      didampingi
      legalMemo
      notulaRapat
      strategiAdvokasi
      targetAkhirAdvokasi
      ppPendamping {
        address
        avatar
        createdAt
        deletedAt
        email
        id
        name
        password
        phone
        position
        rememberToken
        roles
        status
        updatedAt
        username
        profile {
          id
          noContact
        }
      }
      statusAlasanTdk
      tglRapat
    }
    progresses {
      id
      catatan
      jenisPeradilan
    }
    activities {
      id
      capaian
      hambatan
      tglAktifitas
      judulAktifitas
      position
      rencanaStrategi
      targetAdvokasi
      activitieslit {
        id
        kodeMt
      }
      activitiesnonlit {
        id
        kodeMt
      }
    }
    transferreferrals {
      id
      catatan
      document
      jenisTransferReferral
      networkId
      updatedAt
      updatedBy
    }
    violatedrights {
      id
      kodeMt
    }
    logRequests {
      ID
      caseId {
        id
        judulKasus
      }
      isiRequest
      tanggapanRequestIsi
      applicationId {
        id
        tahap
        noReg
        dudukPerara
        clients {
          id
          personId {
            id
            namaLengkap
          }
        }
      }
      jenisRequest
      networkId {
        id
      }
      personId {
        id
      }
      pp {
        id
        appConsultation {
          name
          id
          roles_type {
            id
            type {
              id
            }
          }
        }
      }
      requestBy {
        id
      }
      requestTo {
        id
      }
      statusRequest
      tanggapanRequest
      tglExpired
      tglRequest
      tglRespon
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetCaseGQL extends Apollo.Query<GetCaseQuery, GetCaseQueryVariables> {
    document = GetCaseDocument;
    
  }
export const GetConsultationDocument = gql`
    query getConsultation($where: CaseConsultationWhereInput, $orderBy: CaseConsultationOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
  caseConsultations(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetConsultationGQL extends Apollo.Query<GetConsultationQuery, GetConsultationQueryVariables> {
    document = GetConsultationDocument;
    
  }
export const GetPkDocument = gql`
    query getPk($where: CasePkWhereInput, $orderBy: CasePkOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
  casePks(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetPkGQL extends Apollo.Query<GetPkQuery, GetPkQueryVariables> {
    document = GetPkDocument;
    
  }
export const GetClientDocument = gql`
    query getClient($where: ClientWhereInput, $orderBy: ClientOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
  clients(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
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
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetClientGQL extends Apollo.Query<GetClientQuery, GetClientQueryVariables> {
    document = GetClientDocument;
    
  }
export const GetApplicationsDocument = gql`
    query getApplications($where: ApplicationWhereInput, $orderBy: ApplicationOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
  applications(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
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
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetApplicationsGQL extends Apollo.Query<GetApplicationsQuery, GetApplicationsQueryVariables> {
    document = GetApplicationsDocument;
    
  }
export const GetMtVocabsDocument = gql`
    query getMtVocabs($where: MtVocabWhereInput, $orderBy: MtVocabOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
  mtVocabs(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
    KODE
    kode_induk
    level
    sembunyikan
    teks
    urutan
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetMtVocabsGQL extends Apollo.Query<GetMtVocabsQuery, GetMtVocabsQueryVariables> {
    document = GetMtVocabsDocument;
    
  }
export const AllPersonDocument = gql`
    query allPerson($where: PersonWhereInput, $orderBy: PersonOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
  persons(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
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

  @Injectable({
    providedIn: 'root'
  })
  export class AllPersonGQL extends Apollo.Query<AllPersonQuery, AllPersonQueryVariables> {
    document = AllPersonDocument;
    
  }export namespace DestroyRoles {
  export type Variables = DestroyRolesMutationVariables;
  export type Mutation = DestroyRolesMutation;
  export type DeleteManyRoles = DestroyRolesMutation['deleteManyRoles'];
}

export namespace DestroyLog {
  export type Variables = DestroyLogMutationVariables;
  export type Mutation = DestroyLogMutation;
  export type DeleteManyLogRequests = DestroyLogMutation['deleteManyLogRequests'];
}

export namespace DestroyLit {
  export type Variables = DestroyLitMutationVariables;
  export type Mutation = DestroyLitMutation;
  export type DeleteManyCaseProgressActivityLits = DestroyLitMutation['deleteManyCaseProgressActivityLits'];
}

export namespace DestroyNonlit {
  export type Variables = DestroyNonlitMutationVariables;
  export type Mutation = DestroyNonlitMutation;
  export type DeleteManyCaseProgressActivityNonlits = DestroyNonlitMutation['deleteManyCaseProgressActivityNonlits'];
}

export namespace DestroyKorban {
  export type Variables = DestroyKorbanMutationVariables;
  export type Mutation = DestroyKorbanMutation;
  export type DeleteManyCaseKorbans = DestroyKorbanMutation['deleteManyCaseKorbans'];
}

export namespace DestroyPelaku {
  export type Variables = DestroyPelakuMutationVariables;
  export type Mutation = DestroyPelakuMutation;
  export type DeleteManyCasePelakus = DestroyPelakuMutation['deleteManyCasePelakus'];
}

export namespace DestroyCaseViolatedRight {
  export type Variables = DestroyCaseViolatedRightMutationVariables;
  export type Mutation = DestroyCaseViolatedRightMutation;
  export type DeleteManyCaseViolatedRights = DestroyCaseViolatedRightMutation['deleteManyCaseViolatedRights'];
}

export namespace DestroyCaseClassification {
  export type Variables = DestroyCaseClassificationMutationVariables;
  export type Mutation = DestroyCaseClassificationMutation;
  export type DeleteManyCaseClassifications = DestroyCaseClassificationMutation['deleteManyCaseClassifications'];
}

export namespace DestroyCaseProgressActivity {
  export type Variables = DestroyCaseProgressActivityMutationVariables;
  export type Mutation = DestroyCaseProgressActivityMutation;
  export type DeleteManyCaseProgressActivities = DestroyCaseProgressActivityMutation['deleteManyCaseProgressActivities'];
}

export namespace PostLogRequest {
  export type Variables = PostLogRequestMutationVariables;
  export type Mutation = PostLogRequestMutation;
  export type CreateLogRequest = PostLogRequestMutation['createLogRequest'];
  export type CaseId = PostLogRequestMutation['createLogRequest']['caseId'];
  export type ApplicationId = PostLogRequestMutation['createLogRequest']['applicationId'];
  export type NetworkId = PostLogRequestMutation['createLogRequest']['networkId'];
  export type PersonId = PostLogRequestMutation['createLogRequest']['personId'];
  export type Pp = PostLogRequestMutation['createLogRequest']['pp'][0];
  export type RequestBy = PostLogRequestMutation['createLogRequest']['requestBy'];
  export type RequestTo = PostLogRequestMutation['createLogRequest']['requestTo'];
}

export namespace PostUser {
  export type Variables = PostUserMutationVariables;
  export type Mutation = PostUserMutation;
  export type CreateUser = PostUserMutation['createUser'];
  export type Profile = PostUserMutation['createUser']['profile'];
}

export namespace PostClient {
  export type Variables = PostClientMutationVariables;
  export type Mutation = PostClientMutation;
  export type CreateClient = PostClientMutation['createClient'];
  export type ApplicationId = PostClientMutation['createClient']['applicationId'];
  export type PersonId = PostClientMutation['createClient']['personId'];
}

export namespace PostApplication {
  export type Variables = PostApplicationMutationVariables;
  export type Mutation = PostApplicationMutation;
  export type CreateApplication = PostApplicationMutation['createApplication'];
  export type WakilId = PostApplicationMutation['createApplication']['wakilId'];
  export type Case = PostApplicationMutation['createApplication']['case'];
  export type Clients = PostApplicationMutation['createApplication']['clients'][0];
  export type PersonId = PostApplicationMutation['createApplication']['clients'][0]['personId'];
}

export namespace PutCase {
  export type Variables = PutCaseMutationVariables;
  export type Mutation = PutCaseMutation;
  export type UpdateCase = PutCaseMutation['updateCase'];
  export type Application = PutCaseMutation['updateCase']['application'];
  export type WakilId = PutCaseMutation['updateCase']['application']['wakilId'];
  export type Clients = PutCaseMutation['updateCase']['application']['clients'][0];
  export type PersonId = PutCaseMutation['updateCase']['application']['clients'][0]['personId'];
  export type Classifications = PutCaseMutation['updateCase']['classifications'][0];
  export type Consultations = PutCaseMutation['updateCase']['consultations'][0];
  export type Apps = PutCaseMutation['updateCase']['consultations'][0]['apps'][0];
  export type AppConsultation = PutCaseMutation['updateCase']['consultations'][0]['apps'][0]['appConsultation'];
  export type Documents = PutCaseMutation['updateCase']['documents'][0];
  export type Issues = PutCaseMutation['updateCase']['issues'][0];
  export type Korbans = PutCaseMutation['updateCase']['korbans'][0];
  export type _PersonId = PutCaseMutation['updateCase']['korbans'][0]['personId'];
  export type Pelakus = PutCaseMutation['updateCase']['pelakus'][0];
  export type __PersonId = PutCaseMutation['updateCase']['pelakus'][0]['personId'];
  export type Pk = PutCaseMutation['updateCase']['pk'];
  export type PpPendamping = PutCaseMutation['updateCase']['pk']['ppPendamping'];
  export type Profile = PutCaseMutation['updateCase']['pk']['ppPendamping']['profile'];
  export type Progresses = PutCaseMutation['updateCase']['progresses'];
  export type Activities = PutCaseMutation['updateCase']['activities'][0];
  export type Activitieslit = PutCaseMutation['updateCase']['activities'][0]['activitieslit'][0];
  export type Activitiesnonlit = PutCaseMutation['updateCase']['activities'][0]['activitiesnonlit'][0];
  export type Transferreferrals = PutCaseMutation['updateCase']['transferreferrals'][0];
  export type Violatedrights = PutCaseMutation['updateCase']['violatedrights'][0];
}

export namespace PutLogRequest {
  export type Variables = PutLogRequestMutationVariables;
  export type Mutation = PutLogRequestMutation;
  export type UpdateLogRequest = PutLogRequestMutation['updateLogRequest'];
  export type CaseId = PutLogRequestMutation['updateLogRequest']['caseId'];
  export type ApplicationId = PutLogRequestMutation['updateLogRequest']['applicationId'];
  export type NetworkId = PutLogRequestMutation['updateLogRequest']['networkId'];
  export type PersonId = PutLogRequestMutation['updateLogRequest']['personId'];
  export type Pp = PutLogRequestMutation['updateLogRequest']['pp'][0];
  export type RequestBy = PutLogRequestMutation['updateLogRequest']['requestBy'];
  export type RequestTo = PutLogRequestMutation['updateLogRequest']['requestTo'];
}

export namespace PutUser {
  export type Variables = PutUserMutationVariables;
  export type Mutation = PutUserMutation;
  export type UpdateUser = PutUserMutation['updateUser'];
  export type Profile = PutUserMutation['updateUser']['profile'];
}

export namespace PutApplication {
  export type Variables = PutApplicationMutationVariables;
  export type Mutation = PutApplicationMutation;
  export type UpdateApplication = PutApplicationMutation['updateApplication'];
  export type WakilId = PutApplicationMutation['updateApplication']['wakilId'];
  export type Case = PutApplicationMutation['updateApplication']['case'];
  export type Clients = PutApplicationMutation['updateApplication']['clients'][0];
  export type PersonId = PutApplicationMutation['updateApplication']['clients'][0]['personId'];
}

export namespace PutPerson {
  export type Variables = PutPersonMutationVariables;
  export type Mutation = PutPersonMutation;
  export type UpdatePerson = PutPersonMutation['updatePerson'];
  export type Applications = PutPersonMutation['updatePerson']['applications'][0];
  export type Clients = PutPersonMutation['updatePerson']['clients'][0];
  export type ApplicationId = PutPersonMutation['updatePerson']['clients'][0]['applicationId'];
  export type Documents = PutPersonMutation['updatePerson']['documents'][0];
}

export namespace PostPerson {
  export type Variables = PostPersonMutationVariables;
  export type Mutation = PostPersonMutation;
  export type CreatePerson = PostPersonMutation['createPerson'];
  export type Applications = PostPersonMutation['createPerson']['applications'][0];
  export type Clients = PostPersonMutation['createPerson']['clients'][0];
  export type ApplicationId = PostPersonMutation['createPerson']['clients'][0]['applicationId'];
  export type Documents = PostPersonMutation['createPerson']['documents'][0];
}

export namespace GetLogRequest {
  export type Variables = GetLogRequestQueryVariables;
  export type Query = GetLogRequestQuery;
  export type LogRequests = GetLogRequestQuery['logRequests'][0];
  export type CaseId = GetLogRequestQuery['logRequests'][0]['caseId'];
  export type Transfer = GetLogRequestQuery['logRequests'][0]['caseId']['transfer'];
  export type Network = GetLogRequestQuery['logRequests'][0]['caseId']['transfer']['network'];
  export type Application = GetLogRequestQuery['logRequests'][0]['caseId']['application'];
  export type Clients = GetLogRequestQuery['logRequests'][0]['caseId']['application']['clients'][0];
  export type PersonId = GetLogRequestQuery['logRequests'][0]['caseId']['application']['clients'][0]['personId'];
  export type Pk = GetLogRequestQuery['logRequests'][0]['caseId']['pk'];
  export type ApplicationId = GetLogRequestQuery['logRequests'][0]['applicationId'];
  export type _Clients = GetLogRequestQuery['logRequests'][0]['applicationId']['clients'][0];
  export type _PersonId = GetLogRequestQuery['logRequests'][0]['applicationId']['clients'][0]['personId'];
  export type NetworkId = GetLogRequestQuery['logRequests'][0]['networkId'];
  export type __PersonId = GetLogRequestQuery['logRequests'][0]['personId'];
  export type Pp = GetLogRequestQuery['logRequests'][0]['pp'][0];
  export type AppConsultation = GetLogRequestQuery['logRequests'][0]['pp'][0]['appConsultation'];
  export type RequestBy = GetLogRequestQuery['logRequests'][0]['requestBy'];
  export type RequestTo = GetLogRequestQuery['logRequests'][0]['requestTo'];
}

export namespace GetRolesType {
  export type Variables = GetRolesTypeQueryVariables;
  export type Query = GetRolesTypeQuery;
  export type RolesTypes = GetRolesTypeQuery['rolesTypes'][0];
}

export namespace GetNetworks {
  export type Variables = GetNetworksQueryVariables;
  export type Query = GetNetworksQuery;
  export type Networks = GetNetworksQuery['networks'][0];
}

export namespace GetUser {
  export type Variables = GetUserQueryVariables;
  export type Query = GetUserQuery;
  export type Users = GetUserQuery['users'][0];
  export type Profile = GetUserQuery['users'][0]['profile'];
  export type Roles_Type = GetUserQuery['users'][0]['roles_type'][0];
  export type Type = GetUserQuery['users'][0]['roles_type'][0]['type'];
}

export namespace GetCase {
  export type Variables = GetCaseQueryVariables;
  export type Query = GetCaseQuery;
  export type Cases = GetCaseQuery['cases'][0];
  export type Transfer = GetCaseQuery['cases'][0]['transfer'];
  export type Network = GetCaseQuery['cases'][0]['transfer']['network'];
  export type Referrals = GetCaseQuery['cases'][0]['referrals'][0];
  export type Client = GetCaseQuery['cases'][0]['referrals'][0]['client'];
  export type _Network = GetCaseQuery['cases'][0]['referrals'][0]['network'];
  export type Application = GetCaseQuery['cases'][0]['application'];
  export type WakilId = GetCaseQuery['cases'][0]['application']['wakilId'];
  export type Clients = GetCaseQuery['cases'][0]['application']['clients'][0];
  export type PersonId = GetCaseQuery['cases'][0]['application']['clients'][0]['personId'];
  export type Classifications = GetCaseQuery['cases'][0]['classifications'][0];
  export type Consultations = GetCaseQuery['cases'][0]['consultations'][0];
  export type CaseId = GetCaseQuery['cases'][0]['consultations'][0]['caseId'];
  export type _Application = GetCaseQuery['cases'][0]['consultations'][0]['caseId']['application'];
  export type Apps = GetCaseQuery['cases'][0]['consultations'][0]['apps'][0];
  export type AppConsultation = GetCaseQuery['cases'][0]['consultations'][0]['apps'][0]['appConsultation'];
  export type Roles_Type = GetCaseQuery['cases'][0]['consultations'][0]['apps'][0]['appConsultation']['roles_type'][0];
  export type Type = GetCaseQuery['cases'][0]['consultations'][0]['apps'][0]['appConsultation']['roles_type'][0]['type'];
  export type Documents = GetCaseQuery['cases'][0]['documents'][0];
  export type Issues = GetCaseQuery['cases'][0]['issues'][0];
  export type Korbans = GetCaseQuery['cases'][0]['korbans'][0];
  export type _PersonId = GetCaseQuery['cases'][0]['korbans'][0]['personId'];
  export type Pelakus = GetCaseQuery['cases'][0]['pelakus'][0];
  export type __PersonId = GetCaseQuery['cases'][0]['pelakus'][0]['personId'];
  export type Pk = GetCaseQuery['cases'][0]['pk'];
  export type PpPendamping = GetCaseQuery['cases'][0]['pk']['ppPendamping'];
  export type Profile = GetCaseQuery['cases'][0]['pk']['ppPendamping']['profile'];
  export type Progresses = GetCaseQuery['cases'][0]['progresses'];
  export type Activities = GetCaseQuery['cases'][0]['activities'][0];
  export type Activitieslit = GetCaseQuery['cases'][0]['activities'][0]['activitieslit'][0];
  export type Activitiesnonlit = GetCaseQuery['cases'][0]['activities'][0]['activitiesnonlit'][0];
  export type Transferreferrals = GetCaseQuery['cases'][0]['transferreferrals'][0];
  export type Violatedrights = GetCaseQuery['cases'][0]['violatedrights'][0];
  export type LogRequests = GetCaseQuery['cases'][0]['logRequests'][0];
  export type _CaseId = GetCaseQuery['cases'][0]['logRequests'][0]['caseId'];
  export type ApplicationId = GetCaseQuery['cases'][0]['logRequests'][0]['applicationId'];
  export type _Clients = GetCaseQuery['cases'][0]['logRequests'][0]['applicationId']['clients'][0];
  export type ___PersonId = GetCaseQuery['cases'][0]['logRequests'][0]['applicationId']['clients'][0]['personId'];
  export type NetworkId = GetCaseQuery['cases'][0]['logRequests'][0]['networkId'];
  export type ____PersonId = GetCaseQuery['cases'][0]['logRequests'][0]['personId'];
  export type Pp = GetCaseQuery['cases'][0]['logRequests'][0]['pp'][0];
  export type _AppConsultation = GetCaseQuery['cases'][0]['logRequests'][0]['pp'][0]['appConsultation'];
  export type _Roles_Type = GetCaseQuery['cases'][0]['logRequests'][0]['pp'][0]['appConsultation']['roles_type'][0];
  export type _Type = GetCaseQuery['cases'][0]['logRequests'][0]['pp'][0]['appConsultation']['roles_type'][0]['type'];
  export type RequestBy = GetCaseQuery['cases'][0]['logRequests'][0]['requestBy'];
  export type RequestTo = GetCaseQuery['cases'][0]['logRequests'][0]['requestTo'];
}

export namespace GetConsultation {
  export type Variables = GetConsultationQueryVariables;
  export type Query = GetConsultationQuery;
  export type CaseConsultations = GetConsultationQuery['caseConsultations'][0];
}

export namespace GetPk {
  export type Variables = GetPkQueryVariables;
  export type Query = GetPkQuery;
  export type CasePks = GetPkQuery['casePks'][0];
}

export namespace GetClient {
  export type Variables = GetClientQueryVariables;
  export type Query = GetClientQuery;
  export type Clients = GetClientQuery['clients'][0];
  export type ApplicationId = GetClientQuery['clients'][0]['applicationId'];
  export type PersonId = GetClientQuery['clients'][0]['personId'];
}

export namespace GetApplications {
  export type Variables = GetApplicationsQueryVariables;
  export type Query = GetApplicationsQuery;
  export type Applications = GetApplicationsQuery['applications'][0];
  export type WakilId = GetApplicationsQuery['applications'][0]['wakilId'];
  export type Case = GetApplicationsQuery['applications'][0]['case'];
  export type Clients = GetApplicationsQuery['applications'][0]['clients'][0];
  export type PersonId = GetApplicationsQuery['applications'][0]['clients'][0]['personId'];
}

export namespace GetMtVocabs {
  export type Variables = GetMtVocabsQueryVariables;
  export type Query = GetMtVocabsQuery;
  export type MtVocabs = GetMtVocabsQuery['mtVocabs'][0];
}

export namespace AllPerson {
  export type Variables = AllPersonQueryVariables;
  export type Query = AllPersonQuery;
  export type Persons = AllPersonQuery['persons'][0];
  export type Applications = AllPersonQuery['persons'][0]['applications'][0];
  export type Clients = AllPersonQuery['persons'][0]['clients'][0];
  export type ApplicationId = AllPersonQuery['persons'][0]['clients'][0]['applicationId'];
  export type Documents = AllPersonQuery['persons'][0]['documents'][0];
}
