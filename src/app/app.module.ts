import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IMCComponent } from './imc/imc.component';
import { NgbCollapse, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConvertisseurDeviseComponent } from './convertisseur-devise/convertisseur-devise.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { NewPostComponent } from './new-post/new-post.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { PostListComponent } from './post-list/post-list.component';
import { postReducer } from './states/post/post.reducer';
import { PostComponent } from './post/post.component';
import { LoginComponent } from './login/login.component';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IMCComponent,
    ConvertisseurDeviseComponent,
    InscriptionComponent,
    NewPostComponent,
    PostComponent,
    PostListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(
      {
        postList: postReducer
      } 
    ),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([])
  ],
  providers: [NgbCollapse],
  bootstrap: [AppComponent]
})
export class AppModule { }
