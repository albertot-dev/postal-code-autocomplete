import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { zipcodes } from './zipcodes';

@Component({
  selector: 'ng-postal-code-autocomplete',
  templateUrl: './postal-code-autocomplete.html',
  styleUrls: [
    './postal-code-autocomplete.scss'
  ]
})
export class PostalCodeAutocompleteComponent implements OnInit {
  @Input() country: string;
  @Input() zipCode: any;
  @Output() zipCodeChange = new EventEmitter<any>();
  inputPlace: string;
  places: any[];
  closedDropdown: boolean;

  ngOnInit(): void {
    if(this.zipCode) {
      this.inputPlace = this.zipCode;
      this.closedDropdown = true;
      const elementFounded = zipcodes[this.country].find(place => {
        return place.zipcode.startsWith(this.inputPlace) 
        || place.city.toLowerCase().startsWith(this.inputPlace.toLowerCase())
        || (`${place.zipcode} ${place.city}, ${place.state}`).startsWith(this.inputPlace);
     });
     this.selectZipObject(elementFounded);
    }
  }

  searchZip(ev) {
    this.closedDropdown = false;
    const elementsFiltered = zipcodes[this.country].filter(place => {
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
