import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControlName, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formCadastro = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    data: new FormControl(''),
    senha: new FormControl(''),
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {


  }


  cadastratar() {

    console.log(this.formCadastro, "meu formulario")
  }



}