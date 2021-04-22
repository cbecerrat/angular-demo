import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'release-session',
    loadChildren: () => import('../../operations/release-session-library/src/lib/release-session-library.module').then(m => m.ReleaseSessionLibraryModule),
    data: {
      state: {
        headerText: 'HeaderText',
        customerName: 'CustomerName'
      }
    }
  },
  {
    path: '', redirectTo: 'release-session', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'release-session'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
