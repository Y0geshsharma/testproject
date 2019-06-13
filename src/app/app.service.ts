import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap, catchError} from 'rxjs/operators';


export interface Employee {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
}

@Injectable({
  providedIn: 'root'
})

export class AppService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:8080/employees';

  getEmployees() {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  createUser(employee: Employee) {
    return this.http.post(this.baseUrl, employee);
  }
  getEmployeeById(id: number) {
    return this.http.get<Employee[]>(this.baseUrl  + id);
  }
  updateEmployee(employee: Employee) {
    return this.http.put(this.baseUrl  + employee.id, employee.employee_name);
  }
}
