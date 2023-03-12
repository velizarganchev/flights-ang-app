import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from './../api/services/flight.service';
import { FlightRm } from '../api/models';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private flightService: FlightService,
    private router: Router,
    private authService: AuthService) { }

  flightId: string = "Not loaded";
  flight: FlightRm = {};

  ngOnInit(): void {

    if (!this.authService.currentUser) {
      this.router.navigate(['/register-passenger'])
    }

    this.route.paramMap
      .subscribe(p => this.findFlight(p.get("flightId")));
  }

  private findFlight = (flightId: string | null) => {
    this.flightId = flightId ?? 'not passed';

    this.flightService.flightFind({ id: this.flightId })
      .subscribe(flight => this.flight = flight,
        this.handleError);
  }
  private handleError = (err: any) => {

    if (err.status == 404) {
      alert("Flight not found!");
      this.router.navigate(['/']);
    }
    console.log('Response Error. Status: ', err.status);
    console.log('Response Error. Status Text: ', err.statusText);
    console.log(err)
  }
}
