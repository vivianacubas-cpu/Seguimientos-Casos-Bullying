import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShellComponent } from '../../../../shared/components/app-shell/app-shell.component';

@Component({selector:'app-user-list',standalone:true,imports:[CommonModule,AppShellComponent],templateUrl:'./user-list.component.html',styleUrl:'./user-list.component.css'})
export class UserListComponent {
 users=[
  ['VC','Viviana Cubas','Administrador','viviana.cubas@institucion.edu.pe','Activo'],
  ['EM','Eloy Matos','Responsable de convivencia','eloy.matos@institucion.edu.pe','Activo'],
  ['JP','Jorge Paredes','Responsable de convivencia','jorge.paredes@institucion.edu.pe','Activo'],
  ['LT','Lucía Torres','Docente / tutor','lucia.torres@institucion.edu.pe','Activo'],
  ['RA','Renzo Alva','Docente / tutor','renzo.alva@institucion.edu.pe','Inactivo']
 ];
}
