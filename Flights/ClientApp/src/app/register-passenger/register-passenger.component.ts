import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PassengerService } from './../api/services/passenger.service'
import { AuthService } from '../auth/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-register-passenger',
  templateUrl: './register-passenger.component.html',
  styleUrls: ['./register-passenger.component.css']
})
export class RegisterPassengerComponent implements OnInit {

  constructor(
    private passengerService: PassengerService,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  form = this.fb.group({
    email: [''],
    firstName: [''],
    lastName: [''],
    isFemale: [true]
  });

  ngOnInit(): void {
  }

  checkPassenger(): void {
    const params = { email: this.form.get('email')?.value! };

    this.passengerService.passengerFind(params)
      .subscribe(this.login, e => {
        if (e.status != 404) {
          console.error(e)
        }
      })
  }
  register() {
    console.log("Form values: ", this.form.value);
    this.passengerService.passengerRegister({ body: this.form.value })
      .subscribe(this.login);
  }

  private login = () => {
    this.authService.logUser({ email: this.form.get('email')?.value! })
    this.router.navigate(['/'])
  }
}
