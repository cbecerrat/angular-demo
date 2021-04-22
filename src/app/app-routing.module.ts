import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

const routes: Routes = [
  {
    path: 'release-session',
    loadChildren: () => import('../../operations/release-session-library/src/lib/release-session-library.module').then(m => m.ReleaseSessionLibraryModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [NgxPermissionsGuard],
    canLoad: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: ['ADMIN']
      }
    }
  },
  {
    path: 'manager',
    loadChildren: () => import('./manager/manager.module').then(m => m.ManagerModule),
    canActivate: [NgxPermissionsGuard],
    canLoad: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: ['ADMIN', 'MANAGER']
      }
    }
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    canActivate: [NgxPermissionsGuard],
    canLoad: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: ['ADMIN', 'MANAGER', 'USER']
      }
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
