import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  hide = true;
  phoneForm = new FormGroup({
    phone: new FormControl(undefined, [Validators.required])
  });
  readonly phoneControl = new FormControl('', [
    Validators.required,
    Validators.pattern(('[6-9]\\d{9}'))
  ]);
  constructor() { }

  ngOnInit(): void {
  }

}
