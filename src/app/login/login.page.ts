import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;
  isLoading = false; // Indicateur pour le spinner
  errorMessage = '';

  constructor(private fb: FormBuilder, private router: Router) {
    // Créer le formulaire avec des validations
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Email valide requis
      password: ['', Validators.required], 
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.errorMessage = ''; // Réinitialise les erreurs

      // Simule un appel au backend
      setTimeout(() => {
        this.isLoading = false;

        const { email, password } = this.loginForm.value;

        // Simule une validation côté backend
        if (email === 'user@test.com' && password === 'Azerty1$') {
          this.router.navigate(['/home']); // Redirige vers Home
        } else {
          this.errorMessage = 'Email ou mot de passe incorrect.';
        }
      }, 2000);
    }
  }

  // Accesseur pratique pour les champs du formulaire
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
