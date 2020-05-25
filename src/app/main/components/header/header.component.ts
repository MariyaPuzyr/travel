import {Component, Input, OnInit} from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Languages } from '../../consts/languages.const';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public languages = Languages;

  public phoneList = [
    {code: '+61', flag: 'https://www.countryflags.io/US/flat/64.png'},
    {code: '+43', flag: 'https://www.countryflags.io/US/flat/64.png'},
    {code: '+991', flag: 'https://www.countryflags.io/US/flat/64.png'},
    {code: '+380', flag: 'https://www.countryflags.io/US/flat/64.png'},
    {code: '+44', flag: 'https://www.countryflags.io/US/flat/64.png'},
  ];

  public showDropdown = false;

  ngOnInit(): void {
  }

  /* show modal */
  constructor(
    private modalService: NgbModal,
    private authService: AuthService,
  ) { }

  // this.authService.login({})
  // .subscribe((response) => {

  // });

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
  open(content) {
    const modalRef = this.modalService.open(content);
  }
}
