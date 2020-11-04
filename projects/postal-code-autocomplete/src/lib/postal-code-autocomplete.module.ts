import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostalCodeAutocompleteComponent } from './postal-code-autocomplete.component';
import { PostalCodeAutocompleteService } from './postal-code-autocomplete.service';



@NgModule({
  declarations: [PostalCodeAutocompleteComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [PostalCodeAutocompleteComponent],
  providers: [PostalCodeAutocompleteService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PostalCodeAutocompleteModule { }
