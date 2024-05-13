export interface DatesConfig {
    type: string;
    name?: string;
    value?: any;
    placeholder?: string;
    fieldRequired: string;
    max?: boolean;
    class?: string;
    validations?: {
        required?: boolean;
        noWhiteSpace?: boolean;
        maxlength?: number;
    };
    min?: boolean;
    key?: string;
    label?: string;
}