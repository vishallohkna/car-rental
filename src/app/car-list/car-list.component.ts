import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';

import { DataExchangeService } from '../services/data-exchange.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarListComponent implements OnInit {

  constructor(private dataService: DataExchangeService) { }

  public selectedLocation: string;
  public startDate: Date;
  public carData: any;
  public carDataToPresent: any;

  ngOnInit() {
    this.carData = this.dataService.carDataValue;
    this.selectedLocation = this.dataService.selectedLocationValue;
    this.startDate = this.dataService.selectedDateValue;
    this.dataService.getCarData().subscribe(
    (value) => {
      this.carData = value;
    });
    this.dataService.getSelectedLocation().subscribe(
    (value) => {
      this.selectedLocation = value;
      this.carDataToPresent = this.filterCarData(value, this.startDate);
    });
    this.dataService.getSelectedDate().subscribe(
    (value) => {
      this.startDate = value;
      this.carDataToPresent = this.filterCarData(this.selectedLocation, value);
    });
  }

  filterCarData(location, startDate) {
  	return this.carData.filter(object => {
  		return object['location'] == location;
  	});
  }

  selectedCar(event){
    $('.car-details').removeClass('active');
    $(event.currentTarget).addClass('active');
  }

}
