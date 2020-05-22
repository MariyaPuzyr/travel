import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

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
  closeResult = '';

  ngOnInit(): void {
  }

  /* show dropdown */
  clickEvent() {
    this.status = !this.status;
  }

  /* show modal */
  constructor(private modalService: NgbModal) {
  }

  /*  open() {
      const modalRef = this.modalService.open(SignInComponent);
      modalRef.componentInstance.name = 'World';
    }*/


  open(content) {
    const modalRef = this.modalService.open(content);
  }
}
