import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { mainModule } from 'node:process';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterOutlet, RouterLink, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practica1';
}
