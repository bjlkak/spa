import { Component, ElementRef, ViewChild, Input, OnInit } from '@angular/core'
import * as baguettebox from 'node_modules/baguettebox.js'

@Component({
  selector: 'app-work1',
  templateUrl: './work1.component.html',
  styleUrls: ['./work1.component.css']
})
export class Work1Component implements OnInit {
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

