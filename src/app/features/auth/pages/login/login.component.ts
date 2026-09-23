import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector:'app-login', standalone:true, imports:[FormsModule],
  templateUrl:'./login.component.html', styleUrl:'./login.component.css'
})
export class LoginComponent {
  email='viviana.cubas@institucion.edu.pe'; password='123456'; role='Convivencia escolar';
  constructor(private router:Router){}
  notify(message: string) { window.alert(message); }
  login(){
    if(!this.email || !this.password){ this.notify('Completa tu correo y contraseña.'); return; }
    localStorage.setItem('bullying_session','1');
    localStorage.setItem('bullying_user',this.email);
    this.router.navigate(['/home']);
  }
}
