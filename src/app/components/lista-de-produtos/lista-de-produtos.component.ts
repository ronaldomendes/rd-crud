import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Produto } from 'src/app/models/Produto';

@Component({
  selector: 'app-lista-de-produtos',
  templateUrl: './lista-de-produtos.component.html',
  styleUrls: ['./lista-de-produtos.component.css']
})
export class ListaDeProdutosComponent implements OnInit {

  public produtos: Produto[] = []
  public produtosExibidos: Produto[] = []

  constructor(private http: HttpService) {
    this.http.getProdutos().subscribe(
      data => {
        // console.log(data)
        // data.forEach(d => console.log(d.desc))
        data.forEach(d => this.produtos.push(new Produto(d.codigo, d.desc, d.reg_anvisa, d.controlado, d.cod_grupo)))
        this.produtosExibidos = data
      }
    )
  }

  listaDoGrupo(id: number) {
    // console.log(id)
    // criando uma condição para retornar todos os itens ou listar por categoria
    return id !== 0 ? this.produtosExibidos = this.produtos.filter(produto => produto.cod_grupo == id) : this.produtosExibidos = this.produtos
    // this.produtosExibidos = this.produtos.filter(produto => produto.cod_grupo == id || id == 0)
    // if (id !== 0) {
    //   this.produtosExibidos = this.produtos.filter(produto => produto.cod_grupo == id)
    // } else {
    //   this.produtosExibidos = this.produtos
    // }
   }

  ngOnInit(): void {
  }

}
