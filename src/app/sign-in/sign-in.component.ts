import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  defaultName = 'Password';
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(submittedForm) {
    if(submittedForm.invalid) {
      return;
    }
    console.log(submittedForm);
    this.swService.addCharacter(submittedForm.value.name, submittedForm.value.side);
  }
}
