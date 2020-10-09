import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostalCodeAutocompleteComponent } from './postal-code-autocomplete.component';



@NgModule({
  declarations: [PostalCodeAutocompleteComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [PostalCodeAutocompleteComponent]
})
export class PostalCodeAutocompleteModule { }
