import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProfissionaisService {

  url = 'http://192.168.0.49:8000/crea/profissionais/'

  constructor(private htpp: HttpClient) { }

  profissionais(): Observable <any>{
    return this.htpp.get(this.url).pipe();
  }
}
