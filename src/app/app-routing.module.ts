import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IMCComponent } from './imc/imc.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'imc', component: IMCComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
