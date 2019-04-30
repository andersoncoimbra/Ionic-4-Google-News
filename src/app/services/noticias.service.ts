import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  // chave c3b1f402fd8241c0b7b39b92c2d7e189
  url = 'https://newsapi.org/v2/top-headlines?country=br&apiKey=c3b1f402fd8241c0b7b39b92c2d7e189'


  constructor(private http: HttpClient) { }

  noticiasBrasil(): Observable <any>{
    return this.http.get(this.url).pipe(
      map(results => results['articles'])
    )
  }

}