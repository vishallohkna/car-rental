import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../services/api.service';
import { DataExchangeService } from '../services/data-exchange.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})

export class SearchBoxComponent implements OnInit {

  constructor(private api: ApiService,
  	private dataService: DataExchangeService,
    private router: Router) { }

  public carData: any;
  public locations: string[];
  public selectedLocation: string;
  public minDate: Date = new Date();
  public startDate: Date = new Date();

  ngOnInit() {
  	this.getCarData();
  }

  getCarData(){
  	this.api.getCarData().subscribe(
  	(response) => {
  		this.carData = response;
      this.dataService.setCarData(response);
      this.extractLocations();
  	},
  	(error) => {
  		console.log(error);
  	});
  }

  extractLocations(){
  	this.locations = [];
  	this.carData.map(
    (object) => {
    	if (!this.locations.includes(object.location))
    		this.locations.push(object.location);
    });
    this.selectedLocation = this.locations[0];
    var url = window.location.href.split('/')[3];
    if (url === 'car-list')
      this.updateCarList();
  }

  updateCarList(){
    this.dataService.setSelectedLocation(this.selectedLocation);
    this.dataService.setSelectedDate(this.startDate);
    this.router.navigate(['/car-list']);
  }

}
