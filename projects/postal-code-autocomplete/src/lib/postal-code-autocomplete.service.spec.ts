import { TestBed } from '@angular/core/testing';

import { PostalCodeAutocompleteService } from './postal-code-autocomplete.service';

describe('PostalCodeAutocompleteService', () => {
  let service: PostalCodeAutocompleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostalCodeAutocompleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
