import { Component } from '@angular/core';
import { DatabindingComponent } from './databinding';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
    <h1>Inline template</h1>
    <app-databinding></app-databinding>
  `,
  directives: [DatabindingComponent]
})
export class AppComponent {
}
