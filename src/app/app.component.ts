import { Component } from '@angular/core';
import { PostalCodeAutocompleteService } from 'postal-code-autocomplete';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'example-postal-code-autocomplete';
  zipCodeTest = "";
  country = 'es';


  constructor(private readonly postalCode: PostalCodeAutocompleteService){

  }

}
