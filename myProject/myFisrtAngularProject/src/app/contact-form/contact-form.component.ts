import { Component, OnInit } from '@angular/core';
interface contactFrom
{
  "name": string,
  "age": boolean,
  "rrss": string,
  "username": string
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  model = {
    nombre: "",
    checkAge: true,
    rrss: "",
    username: ""
  }
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(values: any):void{
    console.log('Resultados Formulario', values);
  }
}
