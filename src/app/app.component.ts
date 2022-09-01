import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, of } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { LoginService } from './service/loginService/login.service';
import { LoginState } from './states/login/login.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DashboardCegefos';

  isMenuCollapsed = true;
  activePath = 'Accueil';

  isLoggedIn: boolean = false;

  constructor(private store: Store<{ loginStatus: LoginState }>, private loginService: LoginService) {
    this.loginService.isLoggedIn$.subscribe(x => this.isLoggedIn = x.loggedIn)
  }

}
