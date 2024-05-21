import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, of, delay, tap } from 'rxjs';

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
      delay(1000),
      tap(() => (this.isLoggedIn = true))
    );
  }

  logout() {
    const redirectUrl = '/login';
    this.router.navigate([redirectUrl]);
    this.isLoggedIn = false;
  }
}
