import { Component } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-cadastrousuarios',
  templateUrl: './cadastrousuarios.component.html',
  styleUrls: ['./cadastrousuarios.component.css']
})
export class CadastrousuariosComponent {

  title: string = 'Cadastro de Usuários';
  form: FormGroup = new FormGroup({
      nome: new FormControl(''),
      email: new FormControl(''),
      senha: new FormControl(''),
      repeteSenha: new FormControl('')
  })

  submit(){
    console.log(this.form.value)
  }
  
}
