import { DropdownConfig } from "../models/dropdown";
import { FieldConfig } from "../models/fieldConfig";

export const dropdown: FieldConfig = {
    name: 'Conditions',
    key: 'conditions',
    type: 'dropdown',   
    placeholder: 'Conditions',
    options: [
        {key: 'All', value: 'All'},
        {key: 'Anxiety', value: 'Anxiety'},
        {key: 'Depression', value: 'Depression'},
        {key: 'Paranoia', value: 'Paranoia'},
        {key: 'Psychosis', value: 'Psychosis'},
        {key: 'Schizophrenia', value: 'Schizophrenia'},
    ],
    multiple: true
}

