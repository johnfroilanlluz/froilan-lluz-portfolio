import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  activeLink: string = ''; // To keep track of the active link

  setActiveLink(link: string): void {
    this.activeLink = link;
  }
}
