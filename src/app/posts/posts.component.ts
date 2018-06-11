import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$: Object;
  author$: Object;

  constructor( private data: DataService) { }

  ngOnInit() {
    this.data.getPosts().subscribe(
      input => { 
        this.posts$ = input;
      }
    )


  }

}
