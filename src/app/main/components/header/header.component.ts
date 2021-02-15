import {Component, Input, OnInit} from '@angular/core';

import { Languages } from '../../consts/languages.const';
import { AuthService } from 'src/app/core/shared/services/auth.service';
import {MatDialog} from '@angular/material/dialog';
import {ModalDialogComponent} from '../modal-dialog/modal-dialog.component';


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
    private authService: AuthService,
    public dialog: MatDialog
  ) { }

  // this.authService.login({})
  // .subscribe((response) => {

  // });

  openDialog() {
    this.dialog.open(ModalDialogComponent);
  }
}
