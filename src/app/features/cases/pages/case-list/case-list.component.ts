import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AppShellComponent } from '../../../../shared/components/app-shell/app-shell.component';

@Component({selector:'app-case-list',standalone:true,imports:[CommonModule,FormsModule,RouterLink,AppShellComponent],templateUrl:'./case-list.component.html',styleUrl:'./case-list.component.css'})
export class FutListComponent {
  search=''; status='';
  rows=[
    {code:'CB-0142',student:'J. Ramírez Soto',type:'Exclusión social',place:'Patio',date:'21 ago 2026',status:'Reportado',responsible:'M. Rojas'},
    {code:'CB-0141',student:'D. Chávez Lino',type:'Agresión verbal',place:'Aula 3.° B',date:'20 ago 2026',status:'En evaluación',responsible:'M. Rojas'},
    {code:'CB-0139',student:'A. Torres Vega',type:'Ciberbullying',place:'Entorno digital',date:'16 ago 2026',status:'En seguimiento',responsible:'J. Paredes'},
    {code:'CB-0137',student:'L. Quispe Mora',type:'Agresión física',place:'Patio',date:'10 ago 2026',status:'En seguimiento',responsible:'M. Rojas'},
    {code:'CB-0133',student:'P. Salas Díaz',type:'Burlas reiteradas',place:'Aula 2.° A',date:'05 ago 2026',status:'En seguimiento',responsible:'J. Paredes'},
    {code:'CB-0132',student:'S. Huamán Ríos',type:'Amenazas',place:'Actividad escolar',date:'28 jul 2026',status:'Cerrado',responsible:'J. Paredes'},
    {code:'CB-0129',student:'R. Fernández Ato',type:'Exclusión social',place:'Aula 1.° C',date:'15 jul 2026',status:'Cerrado',responsible:'M. Rojas'}
  ];
  get filtered(){const q=this.search.toLowerCase().trim();return this.rows.filter(r=>(!q||[r.code,r.student,r.type].join(' ').toLowerCase().includes(q))&&(!this.status||r.status===this.status))}
  cls(s:string){return s==='Reportado'?'badge-red':s==='En evaluación'?'badge-gold':s==='En seguimiento'?'badge-green':'badge-dark'}
}
