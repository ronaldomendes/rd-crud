import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Grupo } from '../models/Grupo';
import { map } from "rxjs/operators";
import { Produto } from '../models/Produto';

// adicionando a url para as requisições
const urlAPI: string = 'https://rdcrud.herokuapp.com'

function AdaptadorDeGrupo(data: any[]) {
  return data.map(
    // pega a linha do array e adiciona a um novo array 
    elem => { return new Grupo(elem.COD_GRUPO, elem.DESC) }
  )
}

function AdaptadorDeProduto(data: any[]) {
  return data.map(
    elem => new Produto(elem.COD_PRODUTO, elem.DESC, elem.REG_ANVISA, elem.FL_CONTROLADO, elem.COD_GRUPO)
  )
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getGrupos() {
    let obs = this.http.get(`${urlAPI}/grupos`)

    return obs.pipe(
      // adicionando a função esternalizada
      map(AdaptadorDeGrupo
        // (data: any[]) => {
        //   return data.map(
        //     // pega a linha do array e adiciona a um novo array 
        //     elem => { return new Grupo(elem.COD_GRUPO, elem.DESC) }
        //   )
        // }
      )
    )
  }

  getProdutos() {
    let prod = this.http.get(`${urlAPI}/produtos`)

    return prod.pipe(
      map(AdaptadorDeProduto
        // (data: any[]) => {
        //   return data.map(elem => {
        //     return new Produto(elem.COD_PRODUTO, elem.DESC, elem.REG_ANVISA, elem.FL_CONTROLADO, 1)
        //   })
        // }
      )
    )
  }
}
