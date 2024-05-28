import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { Dictionary } from '../../models/dictionary.interface';
import {
  AbstractControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { DynamicFormGeneratorService } from './service/dynamic-form-generator.service';

@Component({
  selector: 'app-dynamic-form-group',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './dynamic-form-group.component.html',
})
export class DynamicFormGroupComponent implements OnInit {
  @Output() formValues = new EventEmitter<Dictionary>();
  @Input() initialData?: Dictionary;
  @Input() formGroup: FormGroup = new FormGroup({});

  #dynamicFormService = inject(DynamicFormGeneratorService);
  objectKeys = Object.keys;

  ngOnInit(): void {
    if (this.initialData) {
      this.formGroup = this.#dynamicFormService.createForm(this.initialData);
    }
  }

  onSubmit(): void {
    if (!this.initialData || this.formGroup.invalid) return;
    this.formValues.emit(this.formGroup.value);
  }

  isGroup(control: AbstractControl | null): control is FormGroup {
    return control instanceof FormGroup;
  }

  getFormGroup(control: AbstractControl | null): FormGroup {
    return control as FormGroup;
  }
}
