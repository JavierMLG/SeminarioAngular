import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact, SharingService } from '../core/services/sharing.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {

   data$: Observable<Contact>;

  constructor(private sharingService: SharingService) { 
    this.data$ = sharingService.sharingObservable;
  }

  ngOnInit(): void {
  }

}
