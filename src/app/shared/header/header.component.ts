import { Component } from '@angular/core';
import { LinksComponent } from '../../ui-elements/links/links.component';

@Component({
  selector: 'app-header',
  imports: [LinksComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  showMobileMenu = false;
}
