import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { TripData } from '../services/trip-data';

@Component({
  selector: 'app-add-trip',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-trip.html',
  styleUrl: './add-trip.css'
})
export class AddTrip {

  newTrip: Trip = {
    code: '',
    name: '',
    length: '',
    start: '',
    resort: '',
    perPerson: '',
    image: '',
    description: ''
  };

  constructor(
    private tripData: TripData,
    private router: Router
  ) {}

  public addTrip(): void {

    console.log('Save button clicked');
    console.log(this.newTrip);

    this.tripData.addTrip(this.newTrip).subscribe({
      next: (response) => {
        console.log('Trip saved successfully');
        console.log(response);

        this.router.navigate(['']);
      },
      error: (err: any) => {
        console.error('Error saving trip');
        console.error(err);
      }
    });
  }
}