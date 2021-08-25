import { Component, EventEmitter, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-interactive',
  templateUrl: './interactive.component.html',
  styleUrls: ['./interactive.component.css']
})
export class InteractiveComponent implements OnInit {
  @Output() handleclick=new EventEmitter();
  handledclick(){
    alert('Hi im clicked ');
  }
  constructor() { }

  ngOnInit() {
   

  }

}