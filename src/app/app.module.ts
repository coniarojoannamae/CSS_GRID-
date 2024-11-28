import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from "./app.component";
import {ProductLayoutComponent } from './components/product-layout/product-layout.component';
import { EmployeeCardsComponent } from './components/employee-cards/employee-cards.component';

const routes: Routes = [
    { path: 'product-layout', component: ProductLayoutComponent},
    { path: 'employee-cards', component: EmployeeCardsComponent},
    
];

@NgModule({
    imports: [
      CommonModule,
      BrowserModule,
      BrowserAnimationsModule,
      RouterModule.forRoot(routes, {enableTracing: true}),
      FormsModule,
    ],

    declarations: [
        AppComponent,
        ProductLayoutComponent,
        EmployeeCardsComponent,
      
    ],
  
    bootstrap: [
      AppComponent
    ]
    })
  export class AppModule { }