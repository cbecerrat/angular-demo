import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomerQueryOperationLibraryComponent } from './pages/customer-query-operation-library.component';
import { ReleaseSessionLibraryRouterModule } from './release-session-library.router.module';
import { CustomerNameComponent } from './shared/atoms/customer-name/customer-name.component';
import { DropdownComponent } from './shared/atoms/dropdown/dropdown.component';
import { HeadlineComponent } from './shared/atoms/headline/headline.component';
import { CustomerOperationDataComponent } from './shared/molecules/customer-operation-data/customer-operation-data.component';
import { CustomerQueryComponent } from './shared/molecules/customer-query/customer-query.component';
import { CustomerSessionComponent } from './shared/molecules/customer-session/customer-session.component';
import { ReleaseSessionTemplateComponent } from './shared/templates/release-session/release-session.template.component';


@NgModule({
  declarations: [
    CustomerNameComponent,
    HeadlineComponent,
    CustomerQueryComponent,
    CustomerQueryOperationLibraryComponent,
    CustomerOperationDataComponent,
    DropdownComponent,
    CustomerSessionComponent,
    ReleaseSessionTemplateComponent],
  imports: [
    CommonModule,
    ReleaseSessionLibraryRouterModule],
  exports: []
})
export class ReleaseSessionLibraryModule {

}
