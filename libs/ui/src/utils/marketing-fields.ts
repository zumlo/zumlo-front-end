import { FieldConfig } from "../models/fieldConfig";
import { reg } from "./regex";
import { usStatesAndTerritories } from "./us-states";
import { users } from "./users";
// Contact-us required fields

export const marketingFields: FieldConfig[] = [
    {
        name: 'First Name',
        key: 'firstName',
        type: 'text',
        fieldRequired: 'First name is required.',
        placeholder: 'Name',
        patternMessage: 'Please enter a valid first name.',
        validations: { required: true, noWhiteSpace: true, maxlength: 100, pattern: reg.name }
    },
    {
        name: 'Last Name',
        key: 'lastName',
        type: 'text',
        fieldRequired: 'Last name is required.',
        placeholder: 'Last Name',
        patternMessage: 'Please enter a valid last name.',
        validations: { required: true, noWhiteSpace: true, maxlength: 100, pattern: reg.name }
    },
    {
        name: 'Email',
        key: 'email',
        type: 'email',
        fieldRequired: 'Email is required.',
        patternMessage: 'Please enter a valid email Address.',
        placeholder: 'Email',
        validations: {
            required: true, noWhiteSpace: true, pattern: reg.email,
            maxlength: 100
        },
    },
    {
        name: 'Phone number',
        key: 'phoneNumber',
        type: 'tel',
        fieldRequired: 'Phone number is required.',
        maxMessage: 'Phone number must be of 10 characters.',
        placeholder: 'Phone number',
        mask: '(000) 000-0000',
        validations: { required: true, noWhiteSpace: true, maxlength: 10, minlength: 10 },
    },
    {
        name: 'Country',
        key: 'country',
        type: 'text',
        value: 'USA',
        readonly: true,
        placeholder: 'Country Name',
    },
    {
        name: 'State',
        key: 'state',
        type: 'dropdown',
        fieldRequired: 'State is required.',
        placeholder: 'State',
        options: usStatesAndTerritories,
        validations: { required: true }
    },
    {
        name: 'User Type',
        key: 'userType',
        type: 'dropdown',
        fieldRequired: 'User type is required.',
        placeholder: 'User Tpye',
        options: users,
        validations: { required: true }
    },

    {
        name: 'Message',
        key: 'message',
        type: 'textArea',
        fieldRequired: 'Message is required.',
        maxMessage: '',
        patternMessage: 'Please enter a valid message.',
        placeholder: 'Message',
        validations: { required: true, noWhiteSpace: true, minlength: 10, maxlength: 2000 },
    },
    {
        name: 'I accept the Terms and Conditions',
        key: 'Term',
        type: 'checkbox',
        value: false,
        fieldRequired: 'Checkbox is required.',
    },
];