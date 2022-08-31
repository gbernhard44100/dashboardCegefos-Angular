import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SubscriptionType } from 'src/app/types/subscription/SubscriptionType';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor() { }

  handleSubscription(subscription: SubscriptionType) {
    try {
      this.validSubscription(subscription);

      this.addUser(subscription);
    } catch (error) {
      console.log(error);
    }
  }

  addUser(subscription: SubscriptionType) {
    let userListStoredLocally = localStorage.getItem('users')|| '[]';
    let users = JSON.parse(userListStoredLocally);
    users.push(subscription);
    localStorage.setItem('users', JSON.stringify(users));
    console.log(localStorage.getItem('users'));
  }

  validSubscription(subscription: SubscriptionType) {
    if (!this.isEmailValid(subscription.email)) {
      throw('Inscription refusée: l\'adresse email est invalide.');
    }
    
    if (!this.isPasswordValid(subscription.password)) {
      throw('Inscription refusée: le mot de passe est invalide.');
    }

    if (subscription.confirmedPassword !== subscription.password) {
      throw('Inscription refusée: les mots de passe ne correspondent pas.');
    }

    if(!this.isDateValid(subscription.birthDate)) {
      throw('Inscription refusée: la date de naissance est invalide.');
    }

    if (!this.isPostalCodeValid(subscription.postalCode)) {
      throw('Inscription refusée: le code postal est invalid.');
    }
  }

  isEmailValid(emailAddress: string) {
    // RFC5321 and 5322 valid email format acccording to
    // https://stackoverflow.com/questions/13992403/regex-validation-of-email-addresses-according-to-rfc5321-rfc5322
    const regexEmailFormat = /([!#-'*+\/-9=?A-Z^-~-]+(\.[!#-'*+\/-9=?A-Z^-~-]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([!#-'*+\/-9=?A-Z^-~-]+(\.[!#-'*+\/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])/;
    
    let match = emailAddress.match(regexEmailFormat);
    return (match && match.index === 0) ? true : false;
  }

  isPasswordValid(emailAddress: string) {
    // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
    // https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
    const regexPasswordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\]\[])[A-Za-z\d@$!%*?\]\[&]{8,}$/;
    
    let match = emailAddress.match(regexPasswordFormat);
    return (match && match.index === 0) ? true : false;
  }

  isDateValid(dateString: string) {
    const regexDateFormat = /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;
  
    if (dateString.match(regexDateFormat) === null) {
      return false;
    }
  
    const date = new Date(dateString);
  
    const timestamp = date.getTime();
  
    if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) {
      return false;
    }
  
    return date.toISOString().startsWith(dateString);
  }

  isPostalCodeValid(postalCode: string) {
    const regexCodePostalFormat = /^[0-9]{5,5}$/;
    
    let match = postalCode.match(regexCodePostalFormat);
    return (match && match.index === 0) ? true : false;
  }
}
