import { Component, OnInit } from '@angular/core';
import {CommunicateService} from '../communicate.service';

@Component({
  selector: 'app-color-two',
  templateUrl: './color-two.component.html',
  styleUrls: ['./color-two.component.css']
})
export class ColorTwoComponent implements OnInit {
  color = 'red';
constructor(private clr: CommunicateService) { }

  ngOnInit() {
    this.clr.currentColor.subscribe(color => this.color = color);

  }
  clickBtn() {
    this.color = 'red';
    return this.clr.changeColor(this.color);

  }

}
