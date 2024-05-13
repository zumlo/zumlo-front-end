import { reg } from "./regex";

export const resetFields: any = [
    {
        name: 'Password',
        key: 'oldPassword',
        type: 'password',
        fieldRequired: 'Password is required.',
        placeholder: 'Enter your password',
        patternMessageTwo: {
            uppercase: 'Uppercase character is required.',
            lowercase: 'Lowercase character is required.',
            number: 'Number is required.',
            specialCharacter: 'Special character is required.',
            Min: 'min 8+ characters'
        },
        value: '',
        icons: 'lock',
        validations: { required: true, noWhiteSpace: true, maxlength: 100, pattern: reg.password }
    },
    {
        name: 'rePassword',
        key: 'newPassword',
        type: 'password',
        fieldRequired: 'Confirm password is required.',
        placeholder: 'Re-Enter your password',
        notMatch: 'Passwords do not match.',
        value: '',
        icons: 'lock',
        validations: { required: true, noWhiteSpace: true, maxlength: 100}
    },
]