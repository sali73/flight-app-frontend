import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl = ' https://flight-backend-application.herokuapp.com';
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
  constructor( private  http: HttpClient) { }

  getAllFlight(): Observable<any>{
    return this.http.get(this.baseurl + '/flight/' , {headers: this.httpHeaders});
  }

  getOneFlight(id): Observable<any>{
    return this.http.get(this.baseurl + '/flight/' + id + '/' , {headers: this.httpHeaders});
  }

   updateFlight(flight): Observable<any>{
    const body = {
      flight: flight.flight ,  date: flight.date, destination: flight.destination ,
      scheduled_departure_time: flight.scheduled_departure_time , assigned_plane_type: flight.assigned_plane_type ,
      capacity: flight.capacity , seats_reserved: flight.seats_reserved , seats_available: flight.seats_available };

    return this.http.put(this.baseurl + '/flight/' + flight.id + '/' , body , {headers: this.httpHeaders});
  }
  createFlight(flight): Observable<any>{
    const body = {
      flight: flight.flight ,  date: flight.date, destination: flight.destination ,
      scheduled_departure_time: flight.scheduled_departure_time , assigned_plane_type: flight.assigned_plane_type ,
      capacity: flight.capacity , seats_reserved: flight.seats_reserved , seats_available: flight.seats_available };

    return this.http.post(this.baseurl + '/flight/', body , {headers: this.httpHeaders});
  }
  deleteFlight(id): Observable<any>{
    return this.http.delete(this.baseurl + '/flight/' + id + '/' , {headers: this.httpHeaders});
  }


}

