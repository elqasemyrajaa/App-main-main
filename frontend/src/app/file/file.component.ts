import { Component, NgModule } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { Employee } from '../employee';
import { Post } from '../post';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-file',
  standalone: true,
  imports: [
    MatIcon,
    NgIf,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatButton,
    FormsModule,
    FormsModule,
  ],
  templateUrl: './file.component.html',
  styleUrl: './file.component.css'
})
export class FileComponent {
  employee:any={id_employee:0,nom_complet:"",date_embauche:null,id_post:""};
  file:any={mois:"",annee:"",id_employee:"",id_post:""};
  post:any={id_post:0,nom_post:"",montant:0,prime_variable:0,salaire_base:0,transport:500,panier:500};
  constructor(private http:HttpClient,private service:ServiceService,private route:ActivatedRoute,private router:Router) {
  }
  id_emp:any;
  id_post:any;
  post_prime:Post={
    id_post: 1,
    nom_post: '',
    prime_variable: 0,
    salaire_base: 0
  };

  post_oj:any;
  search(id:number){
    this.service.getEmployee(id).subscribe(data=>{
      this.employee=data;
      this.employee.id_post=this.employee.id_post;
      this.service.getPoST(this.employee.id_post).subscribe(data => {
              this.post_oj = data;
              console.log(this.post_oj);
              this.post.nom_post=this.post_oj.nom_post;
              this.post.salaire_base=this.post_oj.salaire_base;
              this.post.prime_variable=this.post_oj.prime_variable;
               // This will log the data after it is received
            });
    })
  }
  ngOnInit() {
    
  }
  
    submit(){
      this.file.id_employee=this.employee.id_employee;
      this.file.id_post=this.employee.id_post;
        this.service.savefile(this.file).
        subscribe(data=>this.file=data);
        alert('Operation bien faite');
        this.router.navigate(["filed/",this.file.id_employee,this.file.id_post,this.post.montant,this.post.salaire_base,this.post.prime_variable]);
    }
    calculer(){
      this.post.montant=this.post.transport+this.post.panier+this.post.salaire_base+this.post.prime_variable;
    }
}