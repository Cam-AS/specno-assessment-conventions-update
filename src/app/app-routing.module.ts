import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AddOfficeComponent } from './pages/add-office/add-office.component';
import { EditOfficeComponent } from './pages/edit-office/edit-office.component';
import { OfficeViewComponent } from './pages/office-view/office-view.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'office/:officeId',
    component: OfficeViewComponent,
  },
  {
    path: 'add-office',
    component: AddOfficeComponent,
  },
  {
    path: 'edit-office/:officeId',
    component: EditOfficeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
