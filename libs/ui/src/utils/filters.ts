import { FieldConfig } from "../models/fieldConfig"

export const filters:FieldConfig[] =  [
    {
        type: 'daterange',
        label: 'startDate',
        name : 'startDate',
        key: 'startDate',
        placeholder: 'Start Date',
        fieldRequired: 'startDate is required.',
        max: true,
        class: 'date',
        validations: { noWhiteSpace: true, maxlength: 100 },
        value: false,
    },
      {
        type: 'daterange', 
        label: 'endDate',
        name : 'endDate',
        key: 'endDate',
        placeholder: 'End Date',
        fieldRequired: 'endDate is required.',
        min: true,
        class: 'input',
        validations: { noWhiteSpace: true, maxlength: 100 }
      },
      {
        type: 'chips', 
        label: 'Wellness Plan',
        key: 'wellnessPlan',
        placeholder: 'Type and Enter....',
        fieldRequired: 'Wellness Plan is required.',
        min: true,
        class: 'input',
        validations: { noWhiteSpace: true, maxlength: 100 }
      },
      {
        type: 'chips', 
        label: 'Assessment Plan',
        key: 'assessmentPlan',
        placeholder: 'Type and Enter....',
        fieldRequired: 'Assessment Plan is required.',
        min: true,
        class: 'input',
        validations: { noWhiteSpace: true, maxlength: 100 }
      },
      {
        label: 'Status',
        name: 'Active',
        key: 'active',
        type: 'checkbox',
        value: false,
        fieldRequired: 'Checkbox is required.',
    },
    {
        name: 'Inactive',
        key: 'inactive',
        type: 'checkbox',
        value: false,
        fieldRequired: 'Checkbox is required.',
    },
]