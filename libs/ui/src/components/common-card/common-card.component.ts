import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonConfig } from '../../models/widegetEmit';

@Component({
  selector: 'z-common-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './common-card.component.html',
  styleUrl: './common-card.component.scss',
})
export class CommonCardComponent implements AfterViewInit{
  @Input() config!: any;
  @Output() changed = new EventEmitter();
  @Output() emitButton = new EventEmitter();
  buttonsConfig!: ButtonConfig

  onButtonClick() {
    this.changed.emit(this.buttonsConfig)
  }

  ngAfterViewInit() {
    this.buttonsConfig = {
      action: 'click',
      widgetKey: this.config?.type,
      widgetButton: this.config.buttons[0].icon
    }
  }
}
