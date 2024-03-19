import { Component } from '@angular/core';
import { AuthentificationService } from '../../services/authentification.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  credentials: { username: string, password: string } = { username: '', password: '' };
  selectedRole: string = ''; // Ajout de la propriété selectedRole  

  //constructor(private authentificationService: AuthentificationService, private router: Router,FormsModule:FormsModule) {}

  /*onSubmit() {
    const { username, password } = this.credentials;
    // Utilisez username et password dans votre logique de connexion
    this.authentificationService.login(username, password).subscribe(
      (response) => {
        if (response && response.success) {
          // Redirection vers la page appropriée en fonction du rôle
          switch (response.role) {
            case 'Adminplateforme':
              this.router.navigate(['/features']);
              break;
            case 'Adminpointrelais':
              this.router.navigate(['/features']);
              break;
            default:
              this.router.navigate(['/features']);
              break;
          }
        } else {
          alert('Identifiants incorrects. Veuillez réessayer.');
        }
      },
      (error) => {
        console.error('Erreur lors de l\'authentification :', error);
        alert('Une erreur s\'est produite lors de l\'authentification.');
      }
    );
  }*/
}
