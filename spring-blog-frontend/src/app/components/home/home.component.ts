import { Component, OnInit } from '@angular/core';
import {PostService} from "../add-post/post.service";
import {PostPayload} from "../add-post/post-payload";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: PostPayload[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAllPost().subscribe(data => {
      this.posts = data;
      console.log(this.posts)
    })

  }

}
