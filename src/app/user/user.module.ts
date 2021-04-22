import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserRouterModule } from './user.router.module';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRouterModule
  ]
})
export class UserModule {
  constructor() {
    console.log('[LOADED USER MODULE]');
  }
}
