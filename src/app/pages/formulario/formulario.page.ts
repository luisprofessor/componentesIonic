import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  usuario={
    email :'',
    password:''
  }
  constructor() { }

  ngOnInit() {
  }

  onSubmit(formulario:NgForm){
    console.log(this.usuario);
    console.log(this.usuario);
    console.log(JSON.stringify(this.usuario));
  }

}
