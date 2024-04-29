import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";

export interface DynamicFieldType {
    group: FormGroup,
    config: any,
    markAsDirty: boolean,
    changed: EventEmitter<any>
  }