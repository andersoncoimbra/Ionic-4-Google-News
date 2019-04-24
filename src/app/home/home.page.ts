import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfissionaisService } from '../services/profissionais.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  ngOnInit(){}

  results: Observable<any>;

  constructor(private profissionais: ProfissionaisService){}

    buscarProfissionais(){
      this.results = this.profissionais.profissionais();
    }

}
