# Theme Picker

This is a re-work of [material.angular.io](https://github.com/angular/material.angular.io) theme-picker component, with new signals inputs and more customizing. 

## Getting Started

**Install.** Run `npm i ngx-theme-picker`

## How to Use

1. Import to Component:
```typescript
import { Theme, ThemePicker } from 'ngx-theme-picker';

@Component({
	imports: [ThemePicker],
})
export class MyComponent {
	themes: Theme[] = [
		{
      		color: '#d7e3ff',
      		displayName: 'Azure & Blue',
      		name: 'azure-blue',
      		background: '#fdfbff'
      	},
		...othersThemes
	];
}
```
2. Use in Template:
```html
<ngx-theme-picker [themes]="themes" />
```

3. Make sure you have CSS output styles configured with the name of theme in angular.json file:

```json
"styles": [
	{
    	"input": "src/styles/azure-blue.scss",
    	"bundleName": "azure-blue", <-- same name
    	"inject": false
	},
],
```

Here is an example of a custom theme scss file: 

```scss
@use "@angular/material" as mat;

$theme: mat.define-theme(
    (
        color: (
            theme-type: light,
            primary: mat.$azure-palette,
            tertiary: mat.$blue-palette,
        ),
    )
);

:root {
    @include mat.all-component-themes($theme);
}
```

## Source-Code

You can contribute to this project and others through its GitHub repository -> [ngx-sougabriel-libs](https://github.com/sougabriel/ngx-sougabriel-libs.git).

