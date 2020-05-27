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

  open(content) {
    const modalRef = this.modalService.open(content);
  }
}
