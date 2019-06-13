import { Component, OnInit } from '@angular/core';
import {CommunicateService} from '../communicate.service';
@Component({
  selector: 'app-color-three',
  templateUrl: './color-three.component.html',
  styleUrls: ['./color-three.component.css']
})
export class ColorThreeComponent implements OnInit {
  color = 'green';
  constructor(private clr: CommunicateService) { }

  ngOnInit() {
    this.clr.currentColor.subscribe(color => this.color = color);

  }
clickBtn() {
  this.color = 'green';
  return this.clr.changeColor(this.color);

}
}
