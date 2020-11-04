import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { zipcodes } from './zipcodes';

@Component({
  selector: 'ng-postal-code-autocomplete',
  templateUrl: './postal-code-autocomplete.html',
  styleUrls: [
    './postal-code-autocomplete.scss'
  ]
})
export class PostalCodeAutocompleteComponent implements OnInit, OnChanges {
  @Input() country: string;
  @Input() zipCode: any;
  @Output() zipCodeChange = new EventEmitter<any>();
  inputPlace: string;
  places: any[];
  closedDropdown: boolean;

  ngOnInit(): void {
   this.initInput(this.zipCode);
  }

  searchZip(ev): any {
    this.closedDropdown = false;
    console.log()
    const elementsFiltered = zipcodes[this.country].filter(place => {
       return place.zipcode.startsWith(ev) 
       || place.city.toLowerCase().startsWith(ev.toLowerCase())
       || (`${place.zipcode} ${place.city}, ${place.state}`).startsWith(ev);
    });

    this.places = elementsFiltered;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(typeof changes.zipCode.currentValue === 'string'){
      this.initInput(changes.zipCode.currentValue);
    }else{
      const place = changes.zipCode.currentValue;
      this.initInput(`${place.zipcode} ${place.city}, ${place.state}`);
    }    
  }

  selectZipObject(place): void {
    this.closedDropdown = true;
    this.inputPlace = `${place.zipcode} ${place.city}, ${place.state}`;
    this.zipCodeChange.emit(place);
  }

  private initInput(value: any): any{
    if (value) {
      this.inputPlace = value;
      this.closedDropdown = true;
      const elementFounded = zipcodes[this.country].find(place => {
        return place.zipcode.startsWith(this.inputPlace)
        || place.city.toLowerCase().startsWith(this.inputPlace.toLowerCase())
        || (`${place.zipcode} ${place.city}, ${place.state}`).startsWith(this.inputPlace);
      });
      this.selectZipObject(elementFounded);
    }
  }


}
