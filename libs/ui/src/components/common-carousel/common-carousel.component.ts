import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { carouselConfigs } from '../../models/carousel';
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

  constructor(
  ) { }

}
