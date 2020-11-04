import { Injectable } from '@angular/core';
import { ZipCode } from './zipcode';
import { zipcodes } from './zipcodes';

@Injectable({
    providedIn: 'root'
})
export class PostalCodeAutocompleteService {

    constructor() { }

    getZipCodeByCode(country: string = 'es', code: string): ZipCode {
        return zipcodes[country].find(place => {
            return place.zipcode === code;
        });
    }

    getZipCodeByCity(country: string = 'es', city: string) : ZipCode{
        return zipcodes[country].find(place => {
            return place.city.toLowerCase().startsWith(city.toLowerCase())
         });
    }

}