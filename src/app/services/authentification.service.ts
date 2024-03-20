import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminPlateforme } from '../features/admin-plateforme.model';
import { AdminPointrelais } from '../features/admin-pointrelais.model';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {

  private adminplateforme = 'http://localhost:3000/authentification/adminplateforme';  // URL de monAPI
  
  private adminpointrelais = 'http://localhost:3000/authentification/adminpointrelais'; // URL de monAPI

  

  constructor(private http: HttpClient) {}

  getAllAdminPlateforme(): Observable<AdminPlateforme[]> {
    return this.http.get<AdminPlateforme[]>(this.adminplateforme);
  }
  getAllAdminPointrelais(): Observable<AdminPointrelais[]>{
    return this.http.get<AdminPointrelais[]>(this.adminpointrelais);

  }


}







  //private apiUrl = 'http://localhost:3000'; // Mettez l'URL de votre API Nest.js

 /* constructor(private http: HttpClient) {}
  getAllAdmins(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/authentification/all`);
  }

  login(username: string, password: string) {
    // Appel à votre API back-end pour vérifier l'authentification
    return this.http.post<any>('http://localhost:3000/auth/login', { username, password });
  }



  register(userData: any) {
    return this.http.post<any>('http://localhost:3000/authentification/register', userData);
  }*/

