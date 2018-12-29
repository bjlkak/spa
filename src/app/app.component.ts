import { Component } from '@angular/core';
import { FrameworkConfigService, FrameworkConfigSettings } from 'src/fw/services/framework-config.service';
import { MenuService } from 'src/fw/services/menu.service';
import { initialMenuItems } from './app.menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (public frameworkConfigService: FrameworkConfigService,
                public menuService : MenuService) {
    let config:FrameworkConfigSettings = {
      socialIcons: [
        { icon: '../assets/instagram.png', alt: "Instagram", link: 'http://instagram.com'},
        { icon: '../assets/tumblr.png', alt: "Tumblr", link: 'http://tumblr.com'},
        { icon: '../assets/linkedin.png', alt: "Linkedin", link: 'http://linkedin.com'}
      ],
      showLanguageSelector: true,
      showUserControls: true
    };

    frameworkConfigService.configure(config);

    menuService.items = initialMenuItems;
  }
}
