import { Component, OnInit, Injectable } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
@Injectable({providedIn: 'root'})
export class NavbarComponent implements OnInit {

  isDropdownDisplayed = false;   // store state
  constructor() { }

  ngOnInit() {
  }

  toggleDropdown() { // click handler
      let bool = this.isDropdownDisplayed;
      this.isDropdownDisplayed = bool === false ? true : false;
  }

  clickitem() {
    this.isDropdownDisplayed = false;
  }
}
