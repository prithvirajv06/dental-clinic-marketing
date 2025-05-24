import { Component } from '@angular/core';
import { TitleComponent } from '../../ui-elements/title/title.component';
import { ServiceCardComponent } from '../../shared/service-card/service-card.component';

@Component({
  selector: 'app-landing-screen',
  imports: [TitleComponent, ServiceCardComponent],
  templateUrl: './landing-screen.component.html',
  styleUrl: './landing-screen.component.scss',
})
export class LandingScreenComponent {
  showProfile = false;
}
