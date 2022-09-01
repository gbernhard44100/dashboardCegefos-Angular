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
import { SubscriptionComponent } from './subscription/subscription.component';
import { NewPostComponent } from './new-post/new-post.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { PostListComponent } from './post-list/post-list.component';
import { postReducer } from './states/post/post.reducer';
import { PostComponent } from './post/post.component';
import { LoginComponent } from './login/login.component';
import { EffectsModule } from '@ngrx/effects';
import { loginReducer } from './states/login/login.reducer';
import { LoginEffects } from './states/login/login.effects';
import { LogoutComponent } from './logout/logout.component';
import { HistoryCalculIMCComponent } from './history-calcul-imc/history-calcul-imc.component';
import { historyCalculIMCReducer } from './states/historyCalculIMC/historyCalculIMC.reducer';
import { HistoryCalculIMCEffects } from './states/historyCalculIMC/historyCalculIMC.effects';
import { HistoryExchangeRateComponent } from './history-exchange-rate/history-exchange-rate.component';
import { historyExchangeRateReducer } from './states/historyExchangeRate/historyExchangeRate.reducer';
import { HistoryExchangeRateEffects } from './states/historyExchangeRate/historyExchangeRate.effects';
import { PostEffects } from './states/post/post.effects';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IMCComponent,
    ConvertisseurDeviseComponent,
    SubscriptionComponent,
    NewPostComponent,
    PostComponent,
    PostListComponent,
    LoginComponent,
    LogoutComponent,
    HistoryCalculIMCComponent,
    HistoryExchangeRateComponent
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
        postList: postReducer,
        loginStatus: loginReducer,
        historyCalculIMC: historyCalculIMCReducer,
        historyExchangeRate: historyExchangeRateReducer
      } 
    ),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([
      LoginEffects,
      HistoryCalculIMCEffects,
      HistoryExchangeRateEffects,
      PostEffects
    ])
  ],
  providers: [NgbCollapse],
  bootstrap: [AppComponent]
})
export class AppModule { }
