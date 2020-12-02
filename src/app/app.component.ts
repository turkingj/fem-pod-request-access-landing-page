import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(private fb: FormBuilder) {}

  /**
   * getters
   */
  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  /**
   * form errors
   */
  emailControlInvalid(): string {
    return this.email.touched && this.email.hasError('required')
      ? 'Oops! Please check your email'
      : this.email.touched && this.email.hasError('email')
      ? 'Oops! Please check your email'
      : '';
  }

  requestAccess(): void {
    const { value, valid } = this.form;
    if (valid) {
      console.log('TODO send email!');
      // this.sendEmail.emit(value);
    }
  }
}
