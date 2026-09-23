import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AppShellComponent } from '../../../../shared/components/app-shell/app-shell.component';

@Component({selector:'app-case-detail',standalone:true,imports:[CommonModule,FormsModule,AppShellComponent],templateUrl:'./case-detail.component.html',styleUrl:'./case-detail.component.css'})
export class FutDetailComponent {
  code='CB-0141'; status='En evaluación'; action='';
  constructor(route:ActivatedRoute){route.params.subscribe(p=>this.code=p['id']||'CB-0141')}
  save(){if(!this.action.trim()){alert('Escribe la acción realizada.');return}alert('Seguimiento guardado correctamente.');this.action=''}
}
