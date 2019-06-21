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

  public searchText: string;
  public blockUI: boolean;
  public selectedLocation: string;
  public startDate: Date;
  public carData: any;
  public carDataToPresent: any;
  public filter_transmission_type: string = "Any";
  public filter_car_type: string = "Any";
  public filter_fuel_type: string = "Any";
  public sort_by_price: string = "None";

  ngOnInit() {
    this.blockUI = true;
    this.carData = this.dataService.carDataValue;
    this.selectedLocation = this.dataService.selectedLocationValue;
    this.startDate = this.dataService.selectedDateValue;
    this.dataService.getSelectedLocation().subscribe(
    (value) => {
      this.blockUI = true;
      this.selectedLocation = value;
      this.carDataToPresent = this.filterCarData(value, this.startDate);
      this.blockUI = false;
    });
    this.dataService.getSelectedDate().subscribe(
    (value) => {
      this.blockUI = true;
      this.startDate = value;
      this.carDataToPresent = this.filterCarData(this.selectedLocation, value);
      this.blockUI = false;
    });
    this.dataService.getCarData().subscribe(
    (value) => {
      this.blockUI = true;
      this.carData = value;
      this.carDataToPresent = this.filterCarData(this.selectedLocation, this.startDate);
      this.blockUI = false;
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

  filterData(filter_transmission_type, filter_car_type, filter_fuel_type){
    this.carDataToPresent = this.filterCarData(this.selectedLocation, this.startDate);
    this.carDataToPresent = this.filterDataType(filter_transmission_type, filter_car_type, filter_fuel_type);
  }
  filterDataType(tt, ct, ft){
    return this.carDataToPresent.filter(object => {
      if (tt != "Any" && ct != "Any" && ft != "Any")
        return (object['transmission'] == tt && object['car_Type'] == ct && object['fuel_Type'] == ft)
      else if (tt != "Any" && ct != "Any" && ft == "Any")
        return (object['transmission'] == tt && object['car_Type'] == ct)
      else if (tt != "Any" && ct == "Any" && ft != "Any")
        return (object['transmission'] == tt && object['fuel_Type'] == ft)
      else if (tt == "Any" && ct != "Any" && ft != "Any")
        return (object['car_Type'] == ct && object['fuel_Type'] == ft)
      else if (tt != "Any" && ct == "Any" && ft == "Any")
        return (object['transmission'] == tt)
      else if (tt == "Any" && ct != "Any" && ft == "Any")
        return (object['car_Type'] == ct)
      else if (tt == "Any" && ct == "Any" && ft != "Any")
        return (object['fuel_Type'] == ft)
      else
        return object;
    }); 
  }

  sortDataByPrice(sort_by_price){
    if(sort_by_price === "Price"){
      this.carDataToPresent.sort(function(a, b) {
        return a.price - b.price;
      });
    }
    else
      this.carDataToPresent = this.filterCarData(this.selectedLocation, this.startDate);
  }

}
