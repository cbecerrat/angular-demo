import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerQueryOperationLibraryComponent } from './pages/customer-query-operation-library.component'

const routes: Routes = [
  {
    path: '', component: CustomerQueryOperationLibraryComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReleaseSessionLibraryRouterModule { }
