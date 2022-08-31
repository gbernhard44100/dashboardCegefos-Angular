export interface SubscriptionType {
    lastname: string,
    firstname: string,
    email: string,
    password: string,
    confirmedPassword: string,
    birthDate: string,
    address: string,
    postalCode: string,
    city: string,
  };
  
  export function instanceOfSubscriptionType(object: any): object is SubscriptionType {
    return true;
  }