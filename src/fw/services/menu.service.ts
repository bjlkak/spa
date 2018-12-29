import { Injectable } from '@angular/core';

export interface MenuItem {
    text: string,
    route: string,
    submenu: Array<MenuItem>,
    icon: string
}

@Injectable()
export class MenuService {

  items: Array<MenuItem>;
  isVertical = false;
  showingLeftSideMenu = false;

  toggleLeftSideMenu() : void {
    this.isVertical = true;
    this.showingLeftSideMenu = !this.showingLeftSideMenu;
  }
}
