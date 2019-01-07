import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-postinfo',
  templateUrl: './postinfo.component.html',
  styleUrls: ['./postinfo.component.css']
})
export class PostinfoComponent implements OnInit {
  
    post = {'title' : '', 'body' : ''};
    lsPosts = [];
    apiResults = {};  
    constructor(private http: HttpClient, private route: ActivatedRoute) {}
  
    ngOnInit() {
      let url: string;
      this.route.params.subscribe(params => {
        url = "/api/postinfo/" + params.post_id;
      });
      // Make the HTTP request:
      this.http.get(url).subscribe(data => {
        this.apiResults = data;
        this.lsPosts = data['data'];
        this.post = data['data'][0];
      });
    }
  }
  
