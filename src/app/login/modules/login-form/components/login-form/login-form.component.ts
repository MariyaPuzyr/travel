import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  phoneForm = new FormGroup({
    phone: new FormControl(undefined, [Validators.required])
  });

  constructor() {

  }

  ngOnInit(): void {
  }

}
