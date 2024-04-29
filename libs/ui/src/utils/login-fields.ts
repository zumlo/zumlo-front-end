import { reg } from "./regex";

export const loginFields: any = [
    {
        name: 'Email',
        key: 'email',
        type: 'text',
        fieldRequired: 'Email is required.',
        placeholder: 'Email',
        patternMessage: 'Please enter a valid email.',
        icons: 'mail_outline',
        value: '',
        validations: { required: true, noWhiteSpace: true, maxlength: 100, pattern: reg.email }
    },
    {
        name: 'Password',
        key: 'password',
        type: 'password',
        fieldRequired: 'Password is required.',
        placeholder: 'Password',
        patternMessage: 'Please enter a valid Password.',
        icons: 'lock',
        validations: { required: true, noWhiteSpace: true, maxlength: 100,  }
    },
    {
        name: 'Remember Me',
        key: 'remember',
        type: 'checkbox',
    },
]