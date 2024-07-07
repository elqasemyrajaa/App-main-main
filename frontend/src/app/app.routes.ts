import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { FileComponent } from './file/file.component';
import { HomeComponent } from './home/home.component';
import { FileDocComponent } from './file-doc/file-doc.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: 'home',
        component: HomeComponent,
        children: [
          { path: 'employees', component: EmployeesComponent },
          {path:'employees/file', component: FileComponent },
          
        ]
        
      },
      {path:'filed/:id/:id2/:mon/:bas/:var', component: FileDocComponent }
   
    
    
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
