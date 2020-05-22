import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public languages = [
    {name: 'En', flag: 'https://www.countryflags.io/US/flat/64.png'},
    {name: 'Ru', flag: 'https://www.countryflags.io/RU/flat/64.png'},
    {name: 'Pl', flag: 'https://www.countryflags.io/PL/flat/64.png'},
    {name: 'Ge', flag: 'https://www.countryflags.io/be/flat/64.png'}
  ];
  public status = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  clickEvent() {
    this.status = !this.status;
  }
}
