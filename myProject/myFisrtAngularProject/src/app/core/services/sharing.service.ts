import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';


export interface Contact{
  name: string,
  age: boolean,
  rrss: string,
  username: string
}
@Injectable({
  providedIn: 'root'
})
export class SharingService {

  private sharingObservablePrivate: BehaviorSubject<Contact> = new BehaviorSubject<Contact>({
    name: '',
    age: true,
    rrss: '',
    username: ''
  });

  get sharingObservable(){
    return this.sharingObservablePrivate.asObservable();
  }

  set sharingObservableData(data: Contact){
    this.sharingObservablePrivate.next(data);
  }
}
