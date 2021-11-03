import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email:any;
  public senha:any;

  constructor() { }

  ngOnInit(): void {
  }

  fazerLogin(){

    console.log("meu login")
    console.log(this.email, "email login")
    console.log(this.senha, "senha login") 
  }

}
