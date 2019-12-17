import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaToDoService {
 lista = [];

  public dodaj(val){
    this.lista.push(val)
  }
  constructor() { }
}
