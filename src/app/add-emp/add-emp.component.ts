import { Component, OnInit, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  Validators,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms';
import {
  FormGroup,
  FormControl,
  FormArray
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
  newEmployee: FormGroup;
  departmentList = [
    { name: 'Service' },
    { name: 'supply Chain' },
    { name: 'Production and Quality Assurance' },
    { name: 'Finance' }
  ];
  statusList = [
    { name: 'pending' },
    { name: 'confirm' },
    { name: 'active' },
    { name: 'Left' }
  ];
  address: object;
  establishmentAddress: object;

  formattedAddress: string;
  formattedEstablishmentAddress: string;
  isAdded = false;

  phone: string;
  constructor(
    private http: HttpClient,
    private fBuilder: FormBuilder,
    private router: Router,
    public zone: NgZone
  ) {}
  getAddress(place: object) {
    this.address = place["formatted_address"];
    this.formattedAddress = place["formatted_address"];
    this.zone.run(() => this.formattedAddress = place[ "formatted_address" ]);
  }

  addEmp() {
    this.http
      .post('http://localhost:8080/employees', this.newEmployee.value)
      .subscribe();
    this.isAdded = true;
    if (this.isAdded) {
      this.router.navigate(['/']);
    }
  }
  ngOnInit() {
    this.newEmployee = this.fBuilder.group({
      id: [Number],
      employee_name: ['', Validators.required],
      employee_age: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(3)
        ])
      ],
      employee_salary: ['', [Validators.required]],
      department: this.fBuilder.array([], Validators.required),
      statusNow: [Validators.required],
      address: this.fBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zip: ['' , Validators.required]
      })
    });
    this.newEmployee.setValidators(this.salval());
    this.newEmployee.valueChanges.subscribe(console.log);
  }

  public salval(): ValidatorFn {
    return (group: FormGroup): ValidationErrors => {
      const age = group.controls["employee_age"];
      const sal = group.controls["employee_salary"];
      if (+age.value <= 15 && +sal.value <= 5000 && Validators.min(0)) {
        sal.setErrors(null);
      } else if (
        +age.value > 15 &&
        +age.value <= 25 &&
        (+sal.value >= 5000 && +sal.value <= 10000)
      ) {
        sal.setErrors(null);
      } else if (
        +age.value > 25 &&
        (+sal.value >= 20000 && +sal.value <= 30000)
      ) {
        sal.setErrors(null);
      } else {
        sal.setErrors({ issue: 'Not correct' });
      }
      return;
    };
  }

  onChange(selectedDept: string, isChecked: boolean) {
    const departmantFormArray = this.newEmployee.controls
      .department as FormArray;

    if (isChecked) {
      departmantFormArray.push(
        new FormControl({
          dept: selectedDept,
          selected: isChecked
        })
      );
    } else {
      const index = departmantFormArray.controls.findIndex(
        x => x.value === selectedDept
      );
      departmantFormArray.removeAt(index);
    }
  }




  getAddrComponent(place, componentTemplate: any) {
    let result: any;

    for (const i of place.address) {
      const addressType = place.address_components[i].types[0];
      if (componentTemplate[addressType]) {
        result = place.address_components[i][componentTemplate[addressType]];
        return result;
      }
    }
    return;
  }


  getStreet(place) {
    const COMPONENT_TEMPLATE = { route: 'long_name' },
    street = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return street;
  }

  getCity(place) {
    const COMPONENT_TEMPLATE = { locality: 'long_name' },
      city = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return city;
  }

  getState(place) {
    const COMPONENT_TEMPLATE = { administrative_area_level_1: 'short_name' },
      state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return state;
  }

  getDistrict(place) {
    const COMPONENT_TEMPLATE = { administrative_area_level_2: 'short_name' },
      state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return state;
  }

  getCountryShort(place) {
    const COMPONENT_TEMPLATE = { country: 'short_name' },
      countryShort = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return countryShort;
  }

  getCountry(place) {
    const COMPONENT_TEMPLATE = { country: 'long_name' },
      country = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return country;
  }

  getPostCode(place) {
    const COMPONENT_TEMPLATE = { postal_code: 'long_name' },
      postCode = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return postCode;
  }

 


}
