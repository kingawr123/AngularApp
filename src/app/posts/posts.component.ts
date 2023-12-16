import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../posts/post.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit{
  posts: Post[] = [];
  post_title: string = "";
  post_body: string = "";

  constructor(private service: PostService) { }
  ngOnInit() {
    this.service.getPosts().subscribe(posts => this.posts = posts);
  }

  addPost() {
    const newid = this.posts.length + 1;

    if (this.post_title.length === 0) {
      alert('Please enter a title');
      return;
    }

    if (this.post_body.length === 0) {
      alert('Please enter a body');
      return;
    }

    const post: Post = {
      userid: 1,
      id: newid,
      title: this.post_title,
      body: this.post_body
    };

    this.service.addPost(post).subscribe(post => this.posts.push(post));
  }
}
