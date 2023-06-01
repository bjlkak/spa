import { Component, OnInit } from '@angular/core';
import * as baguettebox from 'node_modules/baguettebox.js'

@Component({
  selector: 'app-work5',
  templateUrl: './work5.component.html',
  styleUrls: ['./work5.component.css']
})
export class Work5Component implements OnInit {

  constructor() {
    /*for (let i = 1; i <= 4; i++) {
      const src = '../../assets/images/benches.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = '../../assets/images/benches.jpg';
      const album = {
         src: src,
         caption: caption,
         thumb: thumb
      };
 
      this._albums.push(album);>
    }*/



  }

  ngOnInit() {
    baguettebox.run('.tz-gallery');
  }

}
