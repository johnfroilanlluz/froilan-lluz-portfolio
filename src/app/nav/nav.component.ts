import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  activeLink: string = '';
  isMenuOpen: boolean = false;

  setActiveLink(link: string): void {
    this.activeLink = link;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
