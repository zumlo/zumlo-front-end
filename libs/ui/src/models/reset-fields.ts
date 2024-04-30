import { reg } from "../utils/regex";

export const resetFields: any = [
    {
        name: 'Password',
        key: 'oldPassword',
        type: 'password',
        fieldRequired: 'Password is required.',
        placeholder: 'Enter your password',
        patternMessage: 'Valid :- 8+ chars, mix: upper, lower, num, special.',
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
        icons: 'lock',
        validations: { required: true, noWhiteSpace: true, maxlength: 100}
    },
]