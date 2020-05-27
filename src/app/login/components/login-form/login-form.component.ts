import { Component, OnInit } from '@angular/core';
import {Phone} from '../../../main/consts/phone-code.conts';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  public phoneList = Phone;
  public showDropdown = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
}
