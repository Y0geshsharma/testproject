import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AgmCoreModule} from '@agm/core';
import {MyAppComponent} from './my-app/app.component';
import { ColorOneComponent } from './test/color-one/color-one.component';
import { ColorTwoComponent } from './test/color-two/color-two.component';
import { ColorThreeComponent } from './test/color-three/color-three.component';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AddEmpComponent,
    MyAppComponent,
    ColorOneComponent,
    ColorTwoComponent,
    ColorThreeComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, ReactiveFormsModule, RouterModule.forRoot( [
      {path: '', component: TestComponent},
      {path: 'addemployee', component: AddEmpComponent }
    ]), FormsModule, AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDehXtElZDzfX8criYopnKjQO5WHkQMo1w',
      libraries: ['places']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
