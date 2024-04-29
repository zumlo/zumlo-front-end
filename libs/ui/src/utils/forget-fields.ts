import { reg } from "./regex";

export const forgetFields: any = [
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