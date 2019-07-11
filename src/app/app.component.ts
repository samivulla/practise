import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  myForm: FormGroup
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['SamiVulla', Validators.required],
      email: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(15)]]
    });
  }

  /**
   * @description Onsubmit form
   * @Params{Object}
   */
  myFormSubmit(form: FormGroup) {
    console.log('Valid?', form.valid);
    console.log('Name:', form.value.name);
    console.log('email:', form.value.email);
    console.log('message:', form.value.message);
  }
}
