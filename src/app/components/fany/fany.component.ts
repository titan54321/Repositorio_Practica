import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importamos CommonModule

@Component({
  selector: 'app-fany',
  imports: [CommonModule],  // Declaramos CommonModule en los imports
  templateUrl: './fany.component.html',
  styleUrls: ['./fany.component.css']
})
export class FanyComponent {

  login() {
    const username = (<HTMLInputElement>document.getElementById('username')).value;
    const password = (<HTMLInputElement>document.getElementById('password')).value;

    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

    // Reiniciar los mensajes de error
    if (usernameError) usernameError.style.display = 'none';
    if (passwordError) passwordError.style.display = 'none';

    // Validación de los campos
    if (!username) {
      if (usernameError) usernameError.style.display = 'block';
    }

    if (!password) {
      if (passwordError) passwordError.style.display = 'block';
    }

    if (username && password) {
      // Aquí va la lógica de autenticación
      console.log('Login successful');
    }
  }
}
