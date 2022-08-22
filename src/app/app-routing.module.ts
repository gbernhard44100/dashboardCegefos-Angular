import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvertisseurDeviseComponent } from './convertisseur-devise/convertisseur-devise.component';
import { HomeComponent } from './home/home.component';
import { IMCComponent } from './imc/imc.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'imc', component: IMCComponent },
  { path: 'convertirDevises', component: ConvertisseurDeviseComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'nouveauPost', component: NewPostComponent },
  { path: 'posts', component: PostListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
