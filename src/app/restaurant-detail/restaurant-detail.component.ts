import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ShareService } from '@ngx-share/core';

import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {

  max = 5;
  restaurant: Restaurant;

  constructor(
      private route: ActivatedRoute,
      private restaurantService: RestaurantService,
      private location: Location,
      public  share: ShareService
    ) { }

  ngOnInit(): void {
    this.getRestaurant();
  }

  getRestaurant(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.restaurantService.getRestaurant(id)
      .subscribe(hero => this.restaurant = hero);
  }

  goBack(): void {
    this.location.back();
  }

}
