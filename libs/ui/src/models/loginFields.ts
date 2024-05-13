export interface LoginFieldsConfig {
    name?: string;
    key?: string;
    type?: string;
    fieldRequired?: string;
    placeholder?: string;
    patternMessage?: string;
    icons?: string;
    value?: string;
    validations?: {
        required?: boolean;
        noWhiteSpace?: boolean;
        maxlength?: number;
        pattern?: RegExp;
    }
}