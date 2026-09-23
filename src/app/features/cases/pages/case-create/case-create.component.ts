import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppShellComponent } from '../../../../shared/components/app-shell/app-shell.component';

@Component({selector:'app-case-create',standalone:true,imports:[FormsModule,AppShellComponent],templateUrl:'./case-create.component.html',styleUrl:'./case-create.component.css'})
export class FutCreateComponent {
  date=''; place=''; type='Agresión física'; responsible='Milagros Rojas'; description=''; students=''; observations='';
  constructor(private router:Router){}
  cancel(){ this.router.navigate(['/cases']); }
  save(){
    if(!this.place.trim()||!this.description.trim()){alert('Completa el lugar y la descripción de la situación.');return}
    alert('Caso registrado correctamente con estado “Reportado”.');
    this.router.navigate(['/cases']);
  }
}
