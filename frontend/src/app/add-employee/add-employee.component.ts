import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  constructor(private http:HttpClient,private location: Location,private service:ServiceService){
    
  }
  employee:any={id_employee:0,nom_complet:"",date_embauche:null,situation_famililal:"",date_naissance:null,compte_bancaire:"",adress:"",email:"",id_post:0};
}
