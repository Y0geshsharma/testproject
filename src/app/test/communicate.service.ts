import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicateService {
private colorSourse = new BehaviorSubject('white');
currentColor = this.colorSourse.asObservable();
  constructor() { }
  
  changeColor(color: string ){
    this.colorSourse.next(color);
  }
}
