import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AppShellComponent } from '../../../../shared/components/app-shell/app-shell.component';

@Component({selector:'app-home',standalone:true,imports:[CommonModule,RouterLink,AppShellComponent],templateUrl:'./home.component.html',styleUrl:'./home.component.css'})
export class HomeComponent {
  cases=[
    {code:'CB-0142',student:'J. Ramírez Soto',type:'Exclusión social',status:'Reportado',responsible:'M. Rojas'},
    {code:'CB-0141',student:'D. Chávez Lino',type:'Agresión verbal',status:'En evaluación',responsible:'M. Rojas'},
    {code:'CB-0139',student:'A. Torres Vega',type:'Ciberbullying',status:'En seguimiento',responsible:'J. Paredes'},
    {code:'CB-0137',student:'L. Quispe Mora',type:'Agresión física',status:'En seguimiento',responsible:'M. Rojas'},
    {code:'CB-0133',student:'P. Salas Díaz',type:'Amenazas',status:'Cerrado',responsible:'J. Paredes'}
  ];
  cls(s:string){return s==='Reportado'?'badge-red':s==='En evaluación'?'badge-gold':s==='En seguimiento'?'badge-green':'badge-dark'}
}
