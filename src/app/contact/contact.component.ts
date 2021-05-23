import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { BackendApiService } from '../backend-api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 users : any;
 
 constructor(private api: BackendApiService) //Inject backend api service
   {
     this.users = this.api.getUsers(); //call the getUsers function through this service
   }
 
  ngOnInit(): void {
  }

}
