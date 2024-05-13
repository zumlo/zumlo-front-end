import { NgModule } from '@angular/core';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeatureWrapperComponent } from './feature-wrapper.component';
import { SuperAdminDashboardComponent } from './components/z-super-admin-dashboard/super-admin-dashboard.component';
import { ClinicianDashboardComponent } from './components/z-clinician-dashboard/clinician-dashboard.component';
import { UiModule } from 'libs/ui/src/modules/ui/ui.module';
import {
  CommonCarouselComponent,
  DynamicComponentDirective,
  DynamicFieldDirective,
  ZAreaChartComponent,
  ZBarChartComponent,
  ZCarousel3dComponent,
  ZDonutChartComponent,
  ZLineChartComponent,
  ZPieChartComponent,
} from '@zumlo/ui';
import { MainLayoutModule } from '../main-layout/main-layout.module';
import { SeekerDashboardComponent } from './components/z-seeker-dashboard/seeker-dashboard.component';
import { BottomMenuComponent } from "./components/bottom-menu/bottom-menu.component";
import { SideMenuComponent } from './components/side-bottom-menu/side-menu.component';

@NgModule({
    declarations: [
        FeatureWrapperComponent,
        SuperAdminDashboardComponent,
        ClinicianDashboardComponent,
        SeekerDashboardComponent,
    ],
    imports: [
        FeaturesRoutingModule,
        UiModule,
        MainLayoutModule,
        CommonCarouselComponent,
        ZLineChartComponent,
        ZPieChartComponent,
        ZDonutChartComponent,
        ZBarChartComponent,
        ZAreaChartComponent,
        ZCarousel3dComponent,
        DynamicComponentDirective,
        DynamicFieldDirective,
        BottomMenuComponent,
        SideMenuComponent
    ]
})
export class FeaturesModule {}
