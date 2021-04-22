import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggedAs: string;

  constructor(private permissionsService: NgxPermissionsService,
    private router: Router) {
  }

  getLoggedAs(): string {
    return this.loggedAs;
  }

  loginAsAdmin(): string {
    this.loggedAs = 'ADMIN';
    this.loadPermissions(['ADMIN']);

    return this.loggedAs;
  }

  loginAsManager(): string {
    this.loggedAs = 'MANAGER';
    this.loadPermissions(['MANAGER']);

    return this.loggedAs;
  }

  loginAsUser(): string {
    this.loggedAs = 'USER';
    this.loadPermissions(['USER']);

    return this.loggedAs;
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
