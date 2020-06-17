import {Component, OnInit} from '@angular/core';
import {Phone} from '../../../../../main/consts/phone-code.conts';
import {FormArray, FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

// import {ConfigurationOptions} from 'intl-input-phone';

export interface State {
  flag: string;
  name: string;
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  phoneForm = new FormGroup({
    phone: new FormControl(undefined, [Validators.required])
  });
  public phoneList = Phone;


  constructor() {

  }

  ngOnInit(): void {
  }

}
