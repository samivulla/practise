import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DepatListComponent } from './depat-list/depat-list.component';
import { ServiceListComponent } from './service-list/service-list.component';
const routes: Routes = [
  { path: 'department', component: DepatListComponent },
  { path: 'employee', component: ServiceListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepatListComponent, ServiceListComponent];
