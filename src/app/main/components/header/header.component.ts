import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

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
  constructor(private modalService: NgbModal) {
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
  open(content) {
    const modalRef = this.modalService.open(content);
  }
}
