## Postal Code Autocomplete | Autocomplete de códigos postales



### Install
```
npm install postal-code-autocomplete --save
```

## Component
### How use

```
<ng-postal-code-autocomplete [country]="country" [(zipCode)]="model"></ng-postal-code-autocomplete>
```

### Inputs

country |  string | default: es 

## Service
### How to use
Inject service _PostalCodeAutocomplete_, example:
```
  constructor(private readonly postalCode: PostalCodeAutocompleteService){
    console.log(postalCode.getZipCodeByCode(this.country,'23009'))
  }
```

### Methods
```
getZipCodeByCity(country: string = 'es', city: string): ZipCode
```
```
 getZipCodeByCode(country: string = 'es', code: string): ZipCode
```