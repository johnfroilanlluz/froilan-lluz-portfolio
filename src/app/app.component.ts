import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Johnfroilanlluz';
  ngOnInit() {
    AOS.init(); //AOS - 2
    AOS.refresh(); //refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
  }
}
