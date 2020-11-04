import { Component } from '@angular/core';
import { PostalCodeAutocompleteService } from 'postal-code-autocomplete';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'example-postal-code-autocomplete';
  zipCodeTest = "23009";
  country = 'es';


  constructor(private readonly postalCode: PostalCodeAutocompleteService){
    this.zipCodeTest = '23009';
    console.log(postalCode.getZipCodeByCode(this.country,'23009'))

  }

}
