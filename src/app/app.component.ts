import { Component } from '@angular/core';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { Dictionary } from './models/dictionary.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DynamicFormComponent],
  template: `
    <div class="p-8">
      <h2 class="mb-4 text-xl font-bold">Persona Form</h2>
      <app-dynamic-form
        [initialData]="persona"
        (formValues)="onFormValues($event)"
      />

      <h2 class="mt-8 mb-4 text-xl font-bold">Contratto Form</h2>
      <app-dynamic-form
        [initialData]="contratto"
        (formValues)="onFormValues($event)"
      />
    </div>
  `,
})
export class AppComponent {
  title = 'dynamic-forms';

  onFormValues(values: Dictionary) {
    console.table(values);
  }

  persona: Dictionary = {
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: '1985-05-15',
    address: '123 Main Street, Anytown, USA',
    phoneNumber: '123-456-7890',
    email: 'john.doe@example.com',
    gender: 'Male',
    nationality: 'American',
    maritalStatus: 'Single',
    occupation: 'Software Engineer',
  };

  contratto: Dictionary = {
    contractId: 'C12345',
    contractType: 'Employment',
    startDate: '2024-01-01',
    endDate: '2025-01-01',
    employerName: 'Tech Corp Inc.',
    employeeName: 'John Doe',
    salary: '50000',
    benefits: 'Health, Dental, Vision',
    jobTitle: 'Senior Developer',
    jobDescription:
      'Responsible for developing and maintaining web applications.',
  };
}
