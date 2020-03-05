import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Grupo } from 'src/app/models/Grupo';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {

  public grupos: Grupo[] = [];
  // evento criado para selecionar o grupo criado
  @Output() grupoClicado = new EventEmitter()

  // adicionando o httpService para a comunicação do serviço
  constructor(private http: HttpService) {
    
    this.http.getGrupos().subscribe(
      data => {
        // console.log(data)
        // data.forEach((d) => console.log(d.descricao))
        data.forEach((d) => this.grupos.push(new Grupo(d.codigo, d.descricao)))
      }
    )    

    // this.grupos.push(new Grupo(1, "Informática"))
    // this.grupos.push(new Grupo(2, "Música"))
    // this.grupos.push(new Grupo(3, "Celulares"))
  }

  ngOnInit(): void {
  }

}
