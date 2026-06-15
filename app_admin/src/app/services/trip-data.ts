import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Trip } from '../models/trip';
import { Authentication } from './authentication';

@Injectable({
  providedIn: 'root'
})
export class TripData {

  private apiBaseUrl = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient,
    private authentication: Authentication
  ) { }

  private getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.authentication.getToken()}`
    });
  }

  public getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(`${this.apiBaseUrl}/trips`);
  }

  public getTrip(tripCode: string): Observable<Trip> {
    return this.http.get<Trip>(`${this.apiBaseUrl}/trips/${tripCode}`);
  }

  public addTrip(formData: Trip): Observable<Trip> {
    return this.http.post<Trip>(
      `${this.apiBaseUrl}/trips`,
      formData,
      { headers: this.getAuthHeaders() }
    );
  }

  public updateTrip(formData: Trip): Observable<Trip> {
    return this.http.put<Trip>(
      `${this.apiBaseUrl}/trips/${formData.code}`,
      formData,
      { headers: this.getAuthHeaders() }
    );
  }

  public deleteTrip(tripCode: string): Observable<any> {
    return this.http.delete(
      `${this.apiBaseUrl}/trips/${tripCode}`,
      { headers: this.getAuthHeaders() }
    );
  }
}