import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NoticiasService } from '../services/noticias.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  ngOnInit(){}

  results: Observable<any>;

  constructor(private news: NoticiasService){}

    buscarNewsBrasil(){
      this.results = this.news.noticiasBrasil();
    }
}
