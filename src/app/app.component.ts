import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FanyComponent } from './components/fany/fany.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [FanyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Practica1';
}
