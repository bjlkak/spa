import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FrameworkConfigService {
  showLanguageSelector = true;
  showUserControls = true;
  socialIcons = new Array<IconFiles>();

  configure(settings: FrameworkConfigSettings) : void {
    Object.assign(this, settings);
  }
}

export interface IconFiles {
  icon: string,
  alt: string,
  link: string
}
export interface FrameworkConfigSettings {
  showLanguageSelector?: boolean,
  showUserControls?: boolean,
  socialIcons?: Array<IconFiles>
}
