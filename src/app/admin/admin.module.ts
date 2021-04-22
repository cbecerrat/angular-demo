import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminRouterModule } from './admin.router.module';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRouterModule
  ]
})
export class AdminModule {
  constructor() {
    console.log('[LOADED ADMIN MODULE]');
  }
}
