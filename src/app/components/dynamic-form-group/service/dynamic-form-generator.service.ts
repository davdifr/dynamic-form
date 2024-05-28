import { Injectable, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Dictionary } from '../../../models/dictionary.interface';

@Injectable({
  providedIn: 'root',
})
export class DynamicFormGeneratorService {
  #fb = inject(FormBuilder);

  createForm(data: Dictionary) {
    const formControls = this.createControls(data);
    return this.#fb.group(formControls);
  }

  private createControls(data: Dictionary): { [key: string]: AbstractControl } {
    return Object.keys(data).reduce((controls, key) => {
      if (typeof data[key] === 'object' && data[key] !== null) {
        controls[key] = this.#fb.group(
          this.createControls(data[key] as Dictionary)
        );
      } else {
        controls[key] = new FormControl(
          data[key] as string,
          Validators.required
        );
      }
      return controls;
    }, {} as { [key: string]: AbstractControl });
  }
}
