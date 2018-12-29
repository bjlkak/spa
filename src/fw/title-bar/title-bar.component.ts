import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../services/screen.service';
import { MenuService } from '../services/menu.service';
import {Router} from '@angular/router'

@Component({
  selector: 'fw-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

  constructor(private screenService: ScreenService,
              private menuService: MenuService,
              private router: Router) { }

  ngOnInit() {
  }

  /*routing() {
    this.router.navigate(['./home']);
  }*/

}
