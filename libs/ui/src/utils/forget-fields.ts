import { FieldConfig } from "../models/fieldConfig";
import { ForgotFieldsConfig } from "../models/forgetFields";
import { reg } from "./regex";

export const forgetFields:FieldConfig[] = [
    {
        name: 'Email',
        key: 'email',
        type: 'text',
        fieldRequired: 'Email is required.',
        placeholder: 'Email',
        patternMessage: 'Please enter a valid email.',
        icons: 'mail_outline',
        validations: { required: true, noWhiteSpace: true, maxlength: 100, pattern: reg.email }
    },
]