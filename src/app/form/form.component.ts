import { Component, OnInit } from '@angular/core';
import { ListaToDoService } from '../lista-to-do.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {

  constructor(private lista:ListaToDoService) { }

  zmiennaToDo = "start 1234";

  dodaj()
  {
    this.lista.dodaj({name: this.zmiennaToDo, check:false});
    console.log(this.lista.lista);
  }

  usun(th)
  {
    this.lista.lista = this.lista.lista.filter(e => e != th);
  }

  ngOnInit() {

  }

}
