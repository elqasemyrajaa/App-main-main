import { Component, NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import {Employee} from '../employee';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { HomeComponent } from '../home/home.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';


@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [
    NgFor,
    MatIcon,
    MatIcon,
    MatTableModule,
    MatCardModule,
    MatButton,
    CommonModule,
    HomeComponent,
    RouterLink,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {
  constructor(private service:ServiceService,private router:Router,){}
  contacts: Employee[] = [];
  employee:any={id_employee:0,nom_complet:"",date_embauche:null,situation_famililal:"",date_naissance:null,compte_bancaire:"",adress:"",email:"",id_post:0};
  ngOnInit(){
    this.service.getAllEmployees().subscribe(data=>this.contacts=data);
  }
  
  
  addEmp(){
    this.service.saveEmployee(this.employee).subscribe(data=>this.employee=data);
    alert('Operation bien faite');
  }
  deleteEmployee(id3:any){
    console.log('shhhj');
     this.service.deleteEmployee(id3).subscribe(data=>{this.ngOnInit();});
     alert("operation bien faite");
  }
  
}
