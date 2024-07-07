import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-file-doc',
  standalone: true,
  imports: [
    MatButton,
    MatCardModule,
    MatIcon
  ],
  templateUrl: './file-doc.component.html',
  styleUrl: './file-doc.component.css'
})
export class FileDocComponent {
    printTable() {
      const printContents = document.getElementById('print-section')?.innerHTML;
      const originalContents = document.body.innerHTML;
  
      if (printContents) {
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
      }
    }
  
  constructor(private http:HttpClient,private service:ServiceService,private route:ActivatedRoute,private router:Router){}
  file:any={id_emp:'',id_post:'',baseSalary:0,primeSalary:0,montant:0,}
  ngOnInit() {
    this.file.id_emp=this.route.snapshot.params['id']; 
    this.file.id_post=this.route.snapshot.params['id2']; 
    this.file.baseSalary=this.route.snapshot.params['bas']; 
    this.file.primeSalary=this.route.snapshot.params['var']; 
    this.file.montant=this.route.snapshot.params['mon']; 
    
  }
  generatePDF() {
    const doc = new jsPDF();
    doc.text('User Information', 10, 10);
    doc.text(`Matricule : ${this.file.id_emp}`, 10, 20);
    doc.text(`Post : ${this.file.id_post}`, 10, 30);
    doc.text(`Base Salary : ${this.file.baseSalary}`, 10, 40);
    doc.text(`Variable prime : ${this.file.primeSalary}`, 10, 50);
    doc.text(`Montant  : ${this.file.montant}`, 10, 60);
    doc.save('user-information.pdf');
  }
}
