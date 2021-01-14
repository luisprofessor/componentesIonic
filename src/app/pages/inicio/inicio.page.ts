import { Component, OnInit } from '@angular/core';

interface Componente{

  icon:string;
  name:string;
  redirecTo:string
}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes:Componente[]=[

    {
      icon:'american-football-outline',
      name:'Action Sheet',
      redirecTo:'/action-sheet'
    },
    {
      icon:'alert-circle-outline',
      name:'Alert',
      redirecTo:'/alert'
    },
    {
      icon:'alert-circle-outline',
      name:'Lista',
      redirecTo:'/lista'
    },
    {
      icon:'alert-circle-outline',
      name:'Avatar',
      redirecTo:'/avatar'
    },
    {
      icon:'alert-circle-outline',
      name:'Button',
      redirecTo:'/button'
    },
    {
      icon:'card-outline',
      name:'Cards',
      redirecTo:'/card'
    },
    {
      icon:'card-outline',
      name:'Check',
      redirecTo:'/check'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
