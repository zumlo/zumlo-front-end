export interface OtpFieldConfig {
    name: string;
    key: string;
    type: string;
    value: string;
    maxlength: number;
    validations: {
        required: boolean;
        noWhiteSpace: boolean;
    };
}