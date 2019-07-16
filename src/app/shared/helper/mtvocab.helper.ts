import { Injectable } from '@angular/core';
import { GetMtVocabsGQL, GetMtVocabs, MtVocabWhereInput, MtVocabGroupWhereInput, MtVocabOrderByInput } from '@shared';
import { map, tap, zip, take } from 'rxjs/operators';
import { doWhileStatement } from 'babel-types';
import { SFSchemaEnumType } from '@delon/form';
import { GetRolesTypeGQL, GetUser, UserWhereInput, GetUserGQL, RoleWhereInput } from '@shared/graphql';
import { valid } from 'mockjs';
@Injectable({
  providedIn: 'root',
})
export class MtVocabHelper {
  // return array for cascade in cascader from mtvocab

  constructor(
    private getMtVocabsGQL: GetMtVocabsGQL,
    private getRolesTypeGQL: GetRolesTypeGQL,
    private getUserGQL: GetUserGQL,
  ) {}

  async findParent(kode: string) {
    const arrMtvocabs: GetMtVocabs.MtVocabs[] = [];
    let initialData = await this.getData(kode);
    arrMtvocabs.push(initialData[0]);

    do {
      initialData = await this.getData(initialData[0].kode_induk);
      arrMtvocabs.push(initialData[0]);
    } while (arrMtvocabs.slice(-1)[0].level !== 1);
    return arrMtvocabs.map(mtVocabs => mtVocabs.KODE);
  }

  async findParentPekerjaan(kode: string) {
    const arrMtvocabs: GetMtVocabs.MtVocabs[] = [];
    let initialData = await this.getData(kode);
    arrMtvocabs.push(initialData[0]);

    do {
      initialData = await this.getData(initialData[0].kode_induk);
      arrMtvocabs.push(initialData[0]);
    } while (arrMtvocabs.slice(-1)[0].level !== 0);
    return arrMtvocabs.map(mtVocabs => mtVocabs.KODE);
  }

  private getData(kode) {
    return this.getMtVocabsGQL
      .watch(this.searchGenerator(kode))
      .valueChanges.pipe(map(result => result.data.mtVocabs))
      .pipe(take(1))
      .toPromise();
  }

  private searchGenerator(kode): GetMtVocabs.Variables {
    return <GetMtVocabs.Variables>{
      where: <MtVocabWhereInput>{
        KODE: kode,
      },
    };
  }

  getMtVocabEnum(kode_list: number, type: string) {
    return this.getMtVocabsGQL
      .watch(this.searchGeneratorEnum(kode_list))
      .valueChanges.pipe(
        map(
          result =>
            result.data.mtVocabs.map(res => {
              const obj: any = {};
              obj.value = type === 'kode' ? res.KODE : res.teks;
              obj.label = res.teks;
              return obj;
            }) as SFSchemaEnumType[],
        ),
      )
      .pipe(take(1));
  }

  getRolesType() {
    return this.getRolesTypeGQL
      .watch()
      .valueChanges.pipe(
        map(
          result =>
            result.data.rolesTypes.map(res => {
              const obj: any = {};
              obj.value = res.id;
              obj.label = res.description;
              return obj;
            }) as SFSchemaEnumType[],
        ),
      )
      .pipe(take(1));
  }

  getUsers(roles: String[]) {
    const rolesNumber = roles.map(val => Number(val));
    return this.getUserGQL
      .watch(<GetUser.Variables>{
        where: <UserWhereInput>{ roles_type_some: <RoleWhereInput>{ type: { id_in: rolesNumber } } },
      })
      .valueChanges.pipe(
        map(
          result =>
            result.data.users.map(res => {
              const obj: any = {};
              obj.value = res.id;
              obj.label = res.name;
              return obj;
            }) as SFSchemaEnumType[],
        ),
      )
      .pipe(take(1));
  }

  private searchGeneratorEnum(kode_list: number): GetMtVocabs.Variables {
    return <GetMtVocabs.Variables>{
      where: <MtVocabWhereInput>{
        AND: <MtVocabWhereInput[]>[{ kode_list: <MtVocabGroupWhereInput>{ kode_list: kode_list } }],
      },
      orderBy: MtVocabOrderByInput.TeksAsc,
    };
  }

  public isThereAChild(kode) {
    return this.getMtVocabsGQL
      .watch(<GetMtVocabs.Variables>{
        where: <MtVocabWhereInput>{
          kode_induk: kode,
        },
      })
      .valueChanges.pipe(map(result => result.data.mtVocabs))
      .pipe(take(1))
      .toPromise();
  }
}
