import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {SharingService } from '../core/services/sharing.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  model = {
    name: "",
    age: false,
    rrss: "",
    username: ""
  }
  constructor(private sharingService: SharingService) { }

  ngOnInit(): void {
  }

  onSubmit(values: any):void{
    console.log('Resultados Formulario', values);
    console.log(this.model);
    this.sharingService.sharingObservableData = {
      name: this.model.name,
      age: this.model.age,
      rrss: this.model.rrss,
      username: this.model.username};
    console.log(this.sharingService.sharingObservableData);
  }
}
