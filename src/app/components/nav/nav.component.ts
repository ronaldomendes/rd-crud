import { Component, OnInit } from '@angular/core';

interface iItem {
  label: string;
  route: string;
  ativo: boolean;
}


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    
  itens: iItem[] = [
    {
      ativo: false, label: "Home", route: "/home"
    },
    {
      ativo: false, label: "Sobre", route: "/sobre"
    },
    {
      ativo: false, label: "Contato", route: "/contato"
    },
    {
      ativo: false, label: "Cadastrar Produto", route: "/novo-produto"
    }
  ]
  constructor() { }

  marcarItem(item: iItem) {
    // console.log(item)

    // tornando todos os itens inativos
    this.itens.forEach(item => item.ativo = false)

    // ativando o item selecionado
    item.ativo = true
  }

  ngOnInit(): void {
  }

}
