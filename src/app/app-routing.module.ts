import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './account/signin/signin.component';
import { SuivreComponent } from './suivis-colis/suivre/suivre.component';
import { FeaturesComponent } from './features/features.component';

const routes: Routes = [
  {path:'espaceAdministratif',component:SigninComponent},
  {path:'suivis-colis',component:SuivreComponent},
  {path:'features',component:FeaturesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
