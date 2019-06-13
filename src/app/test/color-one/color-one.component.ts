import { Component, OnInit, Input, Output } from '@angular/core';
import {CommunicateService} from '../communicate.service';

@Component({
  selector: 'app-color-one',
  templateUrl: './color-one.component.html',
  styleUrls: ['./color-one.component.css']
})
export class ColorOneComponent implements OnInit {
color = 'white';
  constructor(private clr: CommunicateService) { }



  ngOnInit() {
    this.clr.currentColor.subscribe(color => this.color = color);
  }
clickBtn() {
  this.color = 'blue';
  return this.clr.changeColor(this.color);
}

}

