import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Trip } from '../models/trip';
import { TripData } from '../services/trip-data';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-trip.html',
  styleUrl: './edit-trip.css'
})
export class EditTrip implements OnInit {
  trip: Trip = {
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
    private route: ActivatedRoute,
    private router: Router,
    private tripData: TripData
  ) {}

  ngOnInit(): void {
    const tripCode = this.route.snapshot.paramMap.get('tripCode');

    if (tripCode) {
      this.tripData.getTrip(tripCode).subscribe({
        next: (value: Trip) => {
          this.trip = value;
        },
        error: (err: any) => {
          console.error(err);
        }
      });
    }
  }

  public updateTrip(): void {
    this.tripData.updateTrip(this.trip).subscribe({
      next: () => {
        this.router.navigate(['']);
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }
}