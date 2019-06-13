import { Injectable } from '@angular/core';
import { GetMtVocabsGQL, GetMtVocabs, MtVocabWhereInput } from '@shared';
import { map, tap, zip, take } from 'rxjs/operators';
import { doWhileStatement } from 'babel-types';
@Injectable({
  providedIn: 'root',
})
export class MtVocabHelper {
  // return array for cascade in cascader from mtvocab

  constructor(private getMtVocabsGQL: GetMtVocabsGQL) {}

  async findParent(kode: string) {
    const arrMtvocabs: GetMtVocabs.MtVocabs[] = [];
    let initialData = await this.getData(kode);
    console.log(initialData);
    arrMtvocabs.push(initialData[0]);

    do {
      initialData = await this.getData(initialData[0].kode_induk);
      arrMtvocabs.push(initialData[0]);
    } while (arrMtvocabs.slice(-1)[0].level !== 0);
    return arrMtvocabs.map(mtVocabs => mtVocabs.KODE);
  }

  private getData(kode) {
    console.log(this.searchGenerator(kode));
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
}
