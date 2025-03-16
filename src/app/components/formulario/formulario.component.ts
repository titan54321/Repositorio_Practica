import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  template: `
    <form (submit)="enviarDatos()">
      <input type="text" [(ngModel)]="nombre" placeholder="Escribe tu nombre" required>
      <button type="submit">Enviar</button>
    </form>
    <p *ngIf="mensaje">{{ mensaje }}</p>
  `,
  styles: ['input { margin-right: 10px; }'],
  imports: [FormsModule, NgIf] // Agrega FormsModule aquí
})
export class FormularioComponent {
  nombre: string = '';
  mensaje: string = '';

  enviarDatos() {
    this.mensaje = `Hola, ${this.nombre}!`;
  }
}
