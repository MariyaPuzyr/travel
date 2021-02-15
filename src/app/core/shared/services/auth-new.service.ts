import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common';
import {map} from 'rxjs/operators';
import {User} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthNewService {
 // authUrl = 'https://swapi.dev/api/planets/';

  constructor(private  http: HttpClient) {
  }

  register() {
  }

  login(user: User) {
    this.http.post()
  }
  // login(model: any) {
  //   return this.http.post(this.authUrl + 'login', model).pipe(
  //     map((response: any){
  //       const user = response;
  //   })
  //   )
  // }
}
