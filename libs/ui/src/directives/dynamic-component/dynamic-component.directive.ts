import { ComponentRef, Directive, EventEmitter, Input, OnChanges, Output, Type, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from '../../models/dynamicComponent';
import { StatisticsComponent } from '../../components/statistics/statistics.component';
import { CommonCardComponent } from '../../components/common-card/common-card.component';
import { ZAreaChartComponent } from '../../components/charts/z-area-chart/z-area-chart.component';
import { OuterCardComponent } from '../../components/outer-card/outer-card.component';
import { CommonInnerTrendingCardComponent } from '../../components/common-inner-trending-card/common-inner-trending-card.component';
import { GridCommonCardComponent } from '../../components/grid-common-card/grid-common-card.component';
import { MatMenuComponent } from '../../components/mat-menu/mat-menu.component';
import { ReminderComponent } from '../../components/reminder/reminder.component';
import { OrganizationCardComponent } from '../../components/organization-card/organization-card.component';
import { SeekersCardComponent } from '../../components/seekers-card/seekers-card.component';
import { CommonCarouselComponent } from '../../components/common-carousel/common-carousel.component';
import { ZDonutChartComponent } from '../../components/charts/z-donut-chart/z-donut-chart.component';
import { ZPieChartComponent } from '../../components/charts/z-pie-chart/z-pie-chart.component';
import { ZCarousel3dComponent } from '../../components/z-carousel-3d/z-carousel-3d.component';
import { PendingInvitesCardComponent } from '../../components/pending-invites-card/pending-invites-card.component';
import { AddWidgetsComponent } from '../../components/add-widgets/add-widgets.component';

// interface DynamicComponent {
//   config: any,
//   changed: EventEmitter<any>
// }

// dynamically ocmponents as according to key.
const DYNAMIC_COMPONENTS: { [type: string]: Type<DynamicComponent> } = {
  'statistics':StatisticsComponent,
  'viewSeeker':CommonCardComponent,
  'wellnessPlan':CommonCardComponent,
  'assessment':CommonCardComponent,
  'areaChart':ZAreaChartComponent,
  'outerCard':OuterCardComponent,
  'commonInnerCard':CommonInnerTrendingCardComponent,
  'outerCardAnxiety':OuterCardComponent,
  'outerCardDepression':OuterCardComponent,
  'outerCardAll':OuterCardComponent,
  'gridCommonCard':GridCommonCardComponent,
  'matMenu':MatMenuComponent,
  'reminder':ReminderComponent,
  'organizations':OrganizationCardComponent,
  'trendingAssessment':OuterCardComponent,
  'commonCarousel':CommonCarouselComponent,
  'onboardOrganization':CommonCardComponent,
  'add':AddWidgetsComponent,
  'conditions':OuterCardComponent,
  'donutChart':ZDonutChartComponent,
  'seekers':SeekersCardComponent,
  'wellnesPlans':OuterCardComponent,
  'carousel': ZCarousel3dComponent,
  'clinicianSpecialities':OuterCardComponent,
  'pieChart':ZPieChartComponent,
  'pendinginvitesOuter':OuterCardComponent,
  'pendinginvites':PendingInvitesCardComponent
}

@Directive({
  selector: '[zDynamicComponent]',
  standalone: true,
})
export class DynamicComponentDirective implements OnChanges{
  @Input() config!: any;
  @Output() update: EventEmitter<any> = new EventEmitter();
  
  component!: ComponentRef<DynamicComponent>;

  constructor(private componentCreator: ViewContainerRef) { }

  ngOnChanges(): void {
    if (this.component) {
      this._initializeComponent();
      return;
    }
    this._createComponent();
  }

  // create component dynamically.
  private _createComponent(): void {
    this.component = this.componentCreator.createComponent(DYNAMIC_COMPONENTS[this.config.type]);
    this.component.location.nativeElement.classList.add(this.config.class ? this.config.class : 'z-component');
    this._initializeComponent();
  }

  private _initializeComponent() {
    this.component.instance.config = this.config;
    this.component.instance.changed.subscribe((event: any) => {
      this.update.emit(event);
    });
  }
}