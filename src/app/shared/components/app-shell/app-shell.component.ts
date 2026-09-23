import { Component, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.css'
})
export class AppShellComponent {
  @Input() title = 'Panel general';
  constructor(private router: Router) {}
  logout() {
    localStorage.removeItem('bullying_session');
    this.router.navigate(['/login']);
  }
}
