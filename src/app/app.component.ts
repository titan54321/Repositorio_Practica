import { Component } from '@angular/core';
import { RouterLink} from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FanyComponent } from "./components/fany/fany.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [HeaderComponent, FanyComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practica1';
}
