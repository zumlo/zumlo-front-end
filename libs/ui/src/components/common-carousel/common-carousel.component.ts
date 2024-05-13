import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselConfigs } from '../../models/carousel';
import { UiModule } from '../../modules/ui/ui.module';


@Component({
  selector: 'z-common-carousel',
  standalone: true,
  imports: [UiModule],
  templateUrl: './common-carousel.component.html',
  styleUrl: './common-carousel.component.scss',
})
export class CommonCarouselComponent {

  @Input() config!: any;
  @Output() changed = new EventEmitter();

  constructor(
  ) { }

}
