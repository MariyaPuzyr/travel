import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  phoneForm = new FormGroup({
    phone: new FormControl(undefined, [Validators.required])
  });
  constructor() { }

  ngOnInit(): void {
  }

}
