import { Component, OnInit , Input} from '@angular/core';
import { AppService, Employee } from '../app.service';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public clickOne = false;
  public clickTwo = false;
  public clickThree = false;

  Employee: Employee[] = [];
  constructor(private appService: AppService, private http: HttpClient) { }
  id: number;
  private headers = new Headers().set('content-Type', 'application/json');

  deleteEmployee(id) {
  if (confirm('Are you sure?')) {
    const url = `http://localhost:8080/employees/${id}`;
    return this.http.delete(url).subscribe(() => {
      this.loaddata();
    });
  }
}
loaddata(){
  this.appService.getEmployees().subscribe(data => {
    this.Employee =  data; });

}
  ngOnInit() {
    this.loaddata();
    this.check();
  }
  check(){
    if (this.clickOne) {
      return !this.clickOne;
    } else if (this.clickTwo) {
      return !this.clickTwo;
    } else if (this.clickThree) {
  return !this.clickThree;
    } else {return false; }
  }
  }

