import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importez FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule ,provideHttpClient } from '@angular/common/http';
import { FeaturesComponent } from './features/features.component';
import { EspaceadminplateformeComponent } from './espaceadminplateforme/espaceadminplateforme.component';

@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
          NavbarComponent,
          FeaturesComponent,
          EspaceadminplateformeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
