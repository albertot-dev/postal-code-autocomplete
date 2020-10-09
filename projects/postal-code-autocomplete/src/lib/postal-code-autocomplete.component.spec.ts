import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostalCodeAutocompleteComponent } from './postal-code-autocomplete.component';

describe('PostalCodeAutocompleteComponent', () => {
  let component: PostalCodeAutocompleteComponent;
  let fixture: ComponentFixture<PostalCodeAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostalCodeAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostalCodeAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
