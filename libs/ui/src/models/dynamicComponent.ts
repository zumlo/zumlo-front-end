import { EventEmitter } from "@angular/core";

export interface DynamicComponent {
    config: any,
    changed: EventEmitter<any>
  }
  