import { Component, ElementRef, ViewChild, Input, OnInit } from '@angular/core'
import * as baguettebox from 'node_modules/baguettebox.js'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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

