import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvertisseurDeviseComponent } from './convertisseur-devise/convertisseur-devise.component';
import { HomeComponent } from './home/home.component';
import { IMCComponent } from './imc/imc.component';
import { InscriptionComponent } from './inscription/inscription.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'imc', component: IMCComponent },
  { path: 'convertirDevises', component: ConvertisseurDeviseComponent },
  { path: 'inscription', component: InscriptionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
