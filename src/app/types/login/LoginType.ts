export interface LoginType {
    email: string,
    password: string
  };
  
  export function instanceOfLoginType(object: any): object is LoginType {
    return true;
  }