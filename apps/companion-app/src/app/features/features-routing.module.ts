import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureWrapperComponent } from './feature-wrapper.component';
import { SuperAdminDashboardComponent } from './components/z-super-admin-dashboard/super-admin-dashboard.component';
import { ClinicianDashboardComponent } from './components/z-clinician-dashboard/clinician-dashboard.component';
import { authGuard } from '@zumlo/ui';
import { SeekerDashboardComponent } from './components/z-seeker-dashboard/seeker-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureWrapperComponent,
    // canActivate: [authGuard],
    children: [
      {
        path: 'super-admin',
        component: SuperAdminDashboardComponent
      },
      {
        path: 'clinician',
        component: ClinicianDashboardComponent
      },
      {
        path: 'seeker',
        component: SeekerDashboardComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
