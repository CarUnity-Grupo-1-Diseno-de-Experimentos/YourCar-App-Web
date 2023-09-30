import { Component } from '@angular/core';

@Component({
  selector: 'app-login-tenant',
  templateUrl: './login-tenant.component.html',
  styleUrls: ['./login-tenant.component.css']
})
export class LoginTenantComponent {
  email: string = '';
  password: string = '';
  isEmailValid: boolean = true;
  isPasswordValid: boolean = true;
  isPasswordNotEmpty: boolean = true;
  isEmailNotEmpty: boolean = true;
  isLoginFormValid: boolean = false; // Propiedad para rastrear si el formulario es válido

  // Función de validación personalizada para el correo electrónico
  validateEmail() {
    this.isEmailValid = /\b@gmail\.com$/.test(this.email);
    this.isEmailNotEmpty = this.email.trim() !== '';
    this.updateFormValidity();
  }

  // Función de validación personalizada para la contraseña
  validatePassword() {
    this.isPasswordValid = this.password.length >= 6;
    this.isPasswordNotEmpty = this.password.trim() !== '';
    this.updateFormValidity();
  }

  // Función para actualizar la validez del formulario
  updateFormValidity() {
    this.isLoginFormValid = this.isEmailValid && this.isPasswordValid && this.isEmailNotEmpty && this.isPasswordNotEmpty;
  }




}
