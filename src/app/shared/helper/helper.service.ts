import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequest, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(public http: HttpClient) {}

  downloadFile(id: string): Observable<Blob> {
    return this.http.get('http://192.168.1.12:3000/files/' + id, { responseType: 'blob' });
  }
}
