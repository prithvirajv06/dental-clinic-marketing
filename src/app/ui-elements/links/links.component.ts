import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-links',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss',
})
export class LinksComponent {
  @Input()
  lable!: string;
  @Input()
  linkRoute!: string;

  @Input()
  cId!: string;

  navigateTo() {
    const targetId = this.cId;
    const targetElement:any = document.querySelector('#'+targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  }
}
