export interface ForgotFieldsConfig {
    name: string;
    key: string;
    type: string;
    fieldRequired: string;
    placeholder: string;
    patternMessage: string;
    icons: string;
    validations: {
        required: boolean;
        noWhiteSpace: boolean;
        maxlength: number;
        pattern: RegExp;
    }
}