# Cookie Popup

A Lib to show cookie popup and set it on localStorage if accepted. Provide 'showMessageFromComponent' method to implement cookie logic in your application.  

<center>
    <img alt="Cookie popup message Appers with a accept button" src="https://raw.githubusercontent.com/sougabriel/ngx-sougabriel-libs/master/assets/cookie-popup.gif" width="80%"/>
</center>

## Getting Started

**Install.** Run `npm i ngx-cookie-popup`

## How to Use

### Inject to your Component:

```typescript
import { Component, inject } from '@angular/core';
import { CookiePopup } from 'ngx-cookie-popup';

@Component({
	...
})
export class MyComponent {
  cookie = inject(CookiePopup);
  constructor() {
    this.cookie.showSimpleMessage('Cookies?', 'Accept');
  }
}
```

## Source-Code

You can contribute to this project and others through its GitHub repository on [ngx-sougabriel-libs](https://github.com/sougabriel/ngx-sougabriel-libs.git).
