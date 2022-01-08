import { NgModule } from '@angular/core';
import { defineCustomElements } from '@web-components/loader';

import { MyComponent } from './stencil-generated/proxies';

defineCustomElements(window);

@NgModule({
  imports: [],
  exports: [MyComponent],
  declarations: [MyComponent],
})
export class WebComponentsModule {}
