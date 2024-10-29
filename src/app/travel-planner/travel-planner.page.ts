import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-travel-planner',
  templateUrl: './travel-planner.page.html',
  styleUrls: ['./travel-planner.page.scss'],
})
export class TravelPlannerPage implements OnInit {
  searchForm: any;
  travelOptions:
    | {
        id: number;
        price: number;
        duration: string;
        carbon: number;
        segments: {
          type: string;
          from: string;
          to: string;
          duration: string;
        }[];
        accommodation: {
          type: string;
          name: string;
          rating: number;
          pricePerNight: number;
        };
      }[]
    | undefined;
  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      departure: [''],
      destination: [''],
      startDate: [''],
      endDate: [''],
      priceImportance: [70],
      timeImportance: [50],
      carbonImportance: [30],
    });
  }

  ngOnInit() {
    this.travelOptions = [
      {
        id: 1,
        price: 450,
        duration: '5h30',
        carbon: 85.5,
        segments: [
          { type: 'train', from: 'Paris', to: 'Lyon', duration: '2h00' },
          { type: 'plane', from: 'Lyon', to: 'Barcelona', duration: '1h30' },
        ],
        accommodation: {
          type: 'hotel',
          name: 'Hotel Central',
          rating: 4.2,
          pricePerNight: 120,
        },
      },
      {
        id: 2,
        price: 380,
        duration: '7h00',
        carbon: 45.2,
        segments: [
          { type: 'train', from: 'Paris', to: 'Barcelona', duration: '6h30' },
        ],
        accommodation: {
          type: 'airbnb',
          name: 'Appartement Vue Mer',
          rating: 4.5,
          pricePerNight: 95,
        },
      },
    ];
  }

  onSearch() {
    console.log('Recherche avec les critères:', this.searchForm.value);
    // Ici, vous appelleriez votre service pour obtenir les résultats
  }
}
