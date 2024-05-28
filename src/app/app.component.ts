import { Component } from '@angular/core';
import { Dictionary } from './models/dictionary.interface';
import { DynamicFormGroupComponent } from './components/dynamic-form-group/dynamic-form-group.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DynamicFormGroupComponent],
  template: `
    <app-dynamic-form-group
      [initialData]="contract"
      (formValues)="onFormValues($event)"
    />
  `,
})
export class AppComponent {
  title = 'dynamic-forms';

  onFormValues(values: Dictionary) {
    console.table(values);
  }

  contract: Dictionary = {
    contractId: 'C12345',
    contractType: 'Employment',
    startDate: '2024-01-01',
    endDate: '2025-01-01',
    employer: {
      name: 'Tech Corp Inc.',
      address: '456 Technology Drive, Silicon Valley, USA',
      contact: {
        phone: '555-1234',
        email: 'hr@techcorp.com',
      },
    },
    employee: {
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '1985-05-15',
      address: '123 Main Street, Anytown, USA',
      phoneNumber: '123-456-7890',
      emergencyContact: {
        name: 'Jane Doe',
        relationship: 'Spouse',
        phoneNumber: '123-456-7891',
      },
    },
    jobDetails: {
      jobTitle: 'Senior Developer',
      jobDescription:
        'Responsible for developing and maintaining web applications.',
      salary: '75000',
      benefits: 'Health, Dental, Vision',
    },
    additionalInfo: {
      notes: 'Employee must complete a 90-day probation period.',
      department: 'Software Development',
    },
  };
}
