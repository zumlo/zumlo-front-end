import { ComponentRef, Directive, EventEmitter, Input, OnChanges, Output, Type, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from '../../models/dynamicComponent';
import { StatisticsComponent } from '../../components/statistics/statistics.component';
import { CommonCardComponent } from '../../components/common-card/common-card.component';
import { ZAreaChartComponent } from '../../components/charts/z-area-chart/z-area-chart.component';

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
  'areaChart':ZAreaChartComponent
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
    this.component.location.nativeElement.classList.add(`z-component`);
    this._initializeComponent();
  }

  private _initializeComponent() {
    this.component.instance.config = this.config;
    this.component.instance.changed.subscribe((event: any) => {
      this.update.emit(event);
    });
  }
}

// {
//   action: 'click',
//   widgetKey: '',
//   widgetButton: 'delete'
// }