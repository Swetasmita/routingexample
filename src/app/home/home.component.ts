import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
   styleUrls: ['./home.component.css']   
 })
export class HomeComponent implements OnInit {
  //Two way data binding
  username: string = "This is my name";
  
 //Interpolation
  name = 'John';

  product ={
    title:'Samsung Mobile',
    price: 18000
  }
  //Property Binding
 myColor = '#3399ff';
  imgURL = 'https://scx1.b-cdn.net/csz/news/800a/2018/flower.jpg';
  myFunc(){
    alert("show Msg!");
  this.myColor= '#33cc33';
  }
  disabledBox = true
  enableMe(){
    this.disabledBox =false;
  }
  //Event Binding for Increment Value
 value = 0;
  incrementCount(){
    this.value +=1;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
