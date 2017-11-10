import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {Observable} from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  lsPosts = [];
  apiResults = {};  
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    // Make the HTTP request:
    let url = "/api/postinfo/:"
    this.http.get(url).subscribe(data => {
      this.apiResults = data;
      this.lsPosts = data['data'];

      this.lsPosts.sort((a, b) => {
        if (+a.id == +b.id) {
          return 0;
        } else {
          if (+a.id > +b.id) {
            return -1;
          } else {
            return 1;
          }
        }
      });
    });
  }
}
