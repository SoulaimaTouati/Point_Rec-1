import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import { AdminPlateforme } from './admin-plateforme.model';
import { AdminPointrelais } from './admin-pointrelais.model';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
})
export class FeaturesComponent implements OnInit {
 
  admins: AdminPlateforme[] = [];
  adminsp: AdminPointrelais[] = [];

  constructor(private authentificationService: AuthentificationService) {}

  ngOnInit(): void {
    this.getAllAdminPlateforme();
  }

  getAllAdminPlateforme(): void {
    this.authentificationService.getAllAdminPlateforme().subscribe({
      next: (admins) => {
        this.admins = admins;
      },
      error: (error) => {
        console.error('Error fetching admins:', error);
      },
    });
  }
  getAllAdminPointrelais(): void {
    this.authentificationService.getAllAdminPointrelais().subscribe({
      next: (adminsp) => {
        this.adminsp = adminsp;
      },
      error: (error) => {
        console.error('Error fetching admins:', error);
      },
    });
  }
}
