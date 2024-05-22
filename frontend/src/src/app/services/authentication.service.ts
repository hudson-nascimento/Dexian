import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(public router: Router) { }

  isLoggedIn = false;

  // armazena a URL e entao redireciona apos login
  redirectUrl: string | null = null;

  login(): Observable<boolean> {
    return of(true).pipe(
      tap(() => (
        this.isLoggedIn = true
      ))
    );
  }

  logout() {
    this.isLoggedIn = false;
  }
}
