import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { routes } from '../app.routes';
import {  OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { EmployeesComponent } from "../employees/employees.component";
import { FileComponent } from '../file/file.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        RouterOutlet,
        RouterLink,
        CommonModule,
        EmployeesComponent,
        FileComponent,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
       
    ]
})
export class HomeComponent {
  isScreenSmall: any;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    document.getElementById("menu-toggle")!.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("wrapper")!.classList.toggle("toggled");
    });
  }

}
