import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedAs = new Subject<string>();
  userLogged$ = this.loggedAs.asObservable();

  constructor(private permissionsService: NgxPermissionsService,
    private router: Router) {

  }

  loginAsAdmin(): void {
    const permission = 'ADMIN';
    this.loadPermissions([permission])
    this.loggedAs.next(permission);
  }

  loginAsManager(): void {
    const permission = 'MANAGER';
    this.loadPermissions([permission])
    this.loggedAs.next(permission);
  }

  loginAsUser(): void {
    const permission = 'USER';
    this.loadPermissions([permission])
    this.loggedAs.next(permission);
  }

  loadPermissions(permissions: Array<string>): void {
    this.permissionsService.loadPermissions(permissions);
    this.router.navigate(['/']);
  }

  navigateToAdmin(): void {
    this.router.navigate(['/admin']);
  }

  navigateToManager(): void {
    this.router.navigate(['/manager']);
  }

  navigateToUser(): void {
    this.router.navigate(['/user']);
  }
}
