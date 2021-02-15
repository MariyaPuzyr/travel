import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';


@Injectable()
export class AuthService {

  public login(data) {
    return new Observable((observer) => {

      const account = {
        id: 1,
        name: 'Admin',
        login: '123456789',
        password: '123456'
      };

      if (
        data &&
        data.login === account.login &&
        data.password === account.password
      ) {
        observer.next(account);
        observer.complete();
        return;
      }

      observer.error();
      observer.complete();
    });
  }
}
