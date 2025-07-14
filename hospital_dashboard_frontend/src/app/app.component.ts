import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HospitalPro';

  // PUBLIC_INTERFACE
  getPageTitle(): string {
    // Not using window (no-undef error and SSR); placeholder logic only
    return this.title;
  }
}
