import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Dictionary } from '../../models/dictionary.interface';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, KeyValuePipe],
  templateUrl: './dynamic-form.component.html',
})
export class DynamicFormComponent {
  @Input({ required: true }) initialData: Dictionary = {};
  @Output() formValues = new EventEmitter<Dictionary>();

  #fb = inject(FormBuilder);
  form: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    const formControls = Object.keys(this.initialData).reduce(
      (controls, key) => {
        controls[key] = new FormControl(
          this.initialData[key],
          Validators.required
        );
        return controls;
      },
      {} as { [key: string]: FormControl }
    );

    this.form = this.#fb.group(formControls);
  }

  onSubmit() {
    this.formValues.emit(this.form.value);
  }
}
