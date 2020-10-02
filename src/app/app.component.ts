import { Component } from '@angular/core';
import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  flights = [{flight: 'test'}];
  selectedFlight;

  constructor(private  api: ApiService) {
    this.getFlights();
    this.selectedFlight = { id: -1 , flight: '' ,  date: '', destination: '', scheduled_departure_time : '' ,
    assigned_plane_type: '', capacity: '' , seats_reserved: '' , seats_available: '' };
  }
  getFlights = () => {
    this.api.getAllFlight().subscribe(
      data => {
        this.flights = data.results;
      },
      error => {
        console.log(error);
      }
    );
  }
  flightClicked = (flight) => {
    // console.log( flight.id)
    this.api.getOneFlight(flight.id).subscribe(
      data => {
        this.selectedFlight = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  updateFlight = () => {
        this.api.updateFlight(this.selectedFlight).subscribe(
      data => {
        this.getFlights();
      },
      error => {
        console.log(error);
      }
    );
  }
  createFlight = () => {
        this.api.createFlight(this.selectedFlight).subscribe(
      data => {
        this.flights.push(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteFlight = () => {
        this.api.deleteFlight(this.selectedFlight.id).subscribe(
      data => {
        this.getFlights();
      },
      error => {
        console.log(error);
      }
    );
  }
}

