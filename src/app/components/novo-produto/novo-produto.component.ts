import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Produto } from 'src/app/models/Produto';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})
export class NovoProdutoComponent implements OnInit {
  // referenciando o formulário
  formProduto: FormGroup

  constructor(private http: HttpService) { 
    this.formProduto = this.createForm(new Produto(null, '', null, true, 10));
  }

  // criando um método para instanciar um produto, mesmo que seja vazio
  private createForm(produto: Produto): FormGroup {
    return new FormGroup({
      codigo: new FormControl(produto.codigo),
      descricao: new FormControl(produto.desc),
      regAnvisa: new FormControl(produto.reg_anvisa),
      controlado: new FormControl(produto.controlado),
      codGrupo: new FormControl(produto.cod_grupo)
    })
  }

  ngOnInit(): void { }

  enviarProduto() {
    // console.log(this.formProduto)
    this.http.addProduto(this.formProduto.value).subscribe(
      data => console.log(data)
    )
  }

}
