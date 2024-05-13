import { Component, EventEmitter, Input, Output, SimpleChange } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonInnerTrendingCardComponent } from '../common-inner-trending-card/common-inner-trending-card.component';
import { GridCommonCardComponent } from '../grid-common-card/grid-common-card.component';
import { CommonCarouselComponent } from '../common-carousel/common-carousel.component';
import { ZCarousel3dComponent } from '../z-carousel-3d/z-carousel-3d.component';
import { PendingInvitesCardComponent } from '../pending-invites-card/pending-invites-card.component';
import { ZFormCreationService } from '../../services/z-form-creation/z-form-creation.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { dropdown } from '../../utils/dropdown';
import { DynamicFieldDirective } from '../../directives/dynamic-field/dynamic-field.directive';
import { ZDonutChartComponent } from '../charts/z-donut-chart/z-donut-chart.component';
import { ZPieChartComponent } from '../charts/z-pie-chart/z-pie-chart.component';

@Component({
    selector: 'z-outer-card',
    standalone: true,
    templateUrl: './outer-card.component.html',
    styleUrl: './outer-card.component.scss',
    imports: [CommonModule, CommonInnerTrendingCardComponent, GridCommonCardComponent, CommonCarouselComponent, ZCarousel3dComponent, PendingInvitesCardComponent, 
      DynamicFieldDirective, ReactiveFormsModule, ZDonutChartComponent, ZPieChartComponent]
})
export class OuterCardComponent {
  @Input() config!: any;
  @Output() changed = new EventEmitter();
  form!: FormGroup;
  configs: any = dropdown;
  isValid: boolean = false;
  seekerGrid:any;
  
  constructor( private formCreator: ZFormCreationService){
    this.form = this.formCreator.getFormGroup(this.configs);
}
valueChanged(event: any) {
  this.isValid = event.value.checked;
}
}
