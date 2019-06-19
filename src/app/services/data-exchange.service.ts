import { Injectable, Input, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataExchangeService {

  constructor() { }

  // Selected Location
  public carDataValue: string;
  @Output() carData: EventEmitter<any> = new EventEmitter();
  setCarData(value: any){
    console.log(value);
    this.carDataValue = value;
    this.carData.emit(value);
  }
  getCarData(){
    return this.carData;
  }

  // Selected Location
  public selectedLocationValue: string;
  @Output() selectedLocation: EventEmitter<any> = new EventEmitter();
  setSelectedLocation(value: string){
    this.selectedLocationValue = value;
  	this.selectedLocation.emit(value);
  }
  getSelectedLocation(){
  	return this.selectedLocation;
  }

  // Selected Start Date
  public selectedDateValue: Date;
  @Output() selectedDate: EventEmitter<any> = new EventEmitter();
  setSelectedDate(value: Date){
    this.selectedDateValue = new Date(value);
    this.selectedDate.emit(value);
  }
  getSelectedDate(){
    return this.selectedDate;
  }

}
