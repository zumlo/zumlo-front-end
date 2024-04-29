import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { UiModule } from '../../modules/ui/ui.module';

interface SimpleButtonConfig {
  disabled?: boolean;
  class?: string;
  tooltip?: string;
}

@Component({
  selector: 'z-simple-button',
  standalone: true,
  imports: [UiModule],
  templateUrl: './z-simple-button.component.html',
  styleUrl: './z-simple-button.component.scss',
})
export class ZSimpleButtonComponent implements OnInit, OnChanges {

  @Input() config: SimpleButtonConfig = {};
  @Output() buttonClick: EventEmitter<any> = new EventEmitter();

  // emit the value from children to parent.
  onClick(event: Event) {
    this.buttonClick.emit({ event: event });
  }

  ngOnInit(): void {}

  ngOnChanges() {
    
  }
  
}
