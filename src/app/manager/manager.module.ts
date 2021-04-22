import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ManagerRouterModule } from './manager.router.module';
import { ManagerComponent } from './manager/manager.component';

@NgModule({
  declarations: [
    ManagerComponent
  ],
  imports: [
    CommonModule,
    ManagerRouterModule
  ]
})
export class ManagerModule {
  constructor() {
    console.log('[LOADED MANAGER MODULE]');
  }
}
