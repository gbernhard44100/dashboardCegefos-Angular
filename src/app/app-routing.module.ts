import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvertisseurDeviseComponent } from './convertisseur-devise/convertisseur-devise.component';
import { HomeComponent } from './home/home.component';
import { IMCComponent } from './imc/imc.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { LoginComponent } from './login/login.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostListComponent } from './post-list/post-list.component';
import { MainGuard } from './guards/main.guard';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'imc', component: IMCComponent, canActivate:[MainGuard] },
  { path: 'convertirDevises', component: ConvertisseurDeviseComponent, canActivate:[MainGuard] },
  { path: 'inscription', component: SubscriptionComponent },
  { path: 'nouveauPost', component: NewPostComponent, canActivate:[MainGuard] },
  { path: 'posts', component: PostListComponent, canActivate:[MainGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [MainGuard]
})
export class AppRoutingModule {}
