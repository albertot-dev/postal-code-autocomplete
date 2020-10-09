import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {zipcode} from './zipcodes';

@Component({
  selector: 'ng-postal-code-autocomplete',
  templateUrl: './postal-code-autocomplete.html',
  styleUrls: [
    './postal-code-autocomplete.scss'
  ]
})
export class PostalCodeAutocompleteComponent {
  @Input() country: string;
  @Input() zipCode: any;
  @Output() zipCodeChange = new EventEmitter<any>();
  inputPlace: string = '';
  places: any[];
  closedDropdown: boolean;

  searchZip(ev) {
    this.closedDropdown = false;
    console.log(ev);
    const elementsFiltered = zipcode[this.country].filter(place => {
       return place.zipcode.startsWith(ev) 
       || place.city.toLowerCase().startsWith(ev.toLowerCase())
       || (`${place.zipcode} ${place.city}, ${place.state}`).startsWith(ev);
    });
    
    this.places = elementsFiltered;
  }


  selectZipObject(place) {
    this.inputPlace = `${place.zipcode} ${place.city}, ${place.state}`;
    this.closedDropdown = true;
    this.zipCodeChange.emit(place);
  }


}
