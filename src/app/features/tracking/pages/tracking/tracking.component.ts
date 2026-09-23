import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShellComponent } from '../../../../shared/components/app-shell/app-shell.component';

@Component({selector:'app-tracking',standalone:true,imports:[CommonModule,AppShellComponent],templateUrl:'./tracking.component.html',styleUrl:'./tracking.component.css'})
export class TrackingComponent {
  alerts=[
    ['CB-0139','A. Torres Vega','Seguimiento vencido','Última acción registrada hace 8 días. Responsable: J. Paredes','Venció 18 ago'],
    ['CB-0135','P. Salas Díaz','Seguimiento vencido','Última acción registrada hace 6 días. Responsable: J. Paredes','Venció 20 ago'],
    ['CB-0142','J. Ramírez Soto','Evaluación pendiente','Caso reportado hace 2 días, aún sin evaluar. Responsable: M. Rojas','Venció 22 ago'],
    ['CB-0141','D. Chávez Lino','Próximo seguimiento','Revisar avance del caso. Responsable: M. Rojas','Vence 27 ago'],
    ['CB-0140','M. López Díaz','Próximo seguimiento','Confirmar que continúa la situación. Responsable: M. Rojas','Vence 29 ago']
  ];
}
