import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public phoneList = [
    {code: '+61', flag: 'https://www.countryflags.io/US/flat/64.png'},
    {code: '+43', flag: 'https://www.countryflags.io/US/flat/64.png'},
    {code: '+991', flag: 'https://www.countryflags.io/US/flat/64.png'},
    {code: '+380', flag: 'https://www.countryflags.io/US/flat/64.png'},
    {code: '+44', flag: 'https://www.countryflags.io/US/flat/64.png'},
  ];

  public showDropdown = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

}
