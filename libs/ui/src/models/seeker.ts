import { buttonsConfig } from "./buttons";

export interface SeekerConfigItem {
    name?: string,
    type?: string,
    heading?: string,
    stats?: number[],
    description?: string,
    statisticsType?: string[],
    buttons?: Array<buttonsConfig>
  }

