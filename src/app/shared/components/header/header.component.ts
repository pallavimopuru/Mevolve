import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent {
  menuopen: boolean = false;
  activeMenuItem: string = 'Home';
  constructor() {}

  togglemenu() {
    this.menuopen = !this.menuopen;
  }
  isActive(menuItem: string): boolean {
    return this.activeMenuItem === menuItem;
  }
  setActive(menuItem: string): void {
    this.activeMenuItem = menuItem;
  }
}
