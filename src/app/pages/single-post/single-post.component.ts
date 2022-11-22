import {Component, OnInit} from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {ActivatedRoute} from "@angular/router";
import {interval} from "rxjs";

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  postData: any

  NewPost: Array<any> | undefined

  constructor(private postService: PostsService,
              private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.router.params.subscribe(val => {
      this.postService.loadOnePostData(val['id']).subscribe(post => {
        this.postData = post
        // console.log(post)
      })
    })

    this.postService.loadLatest4().subscribe(post => {
      this.NewPost = post
    })

    //this.postService.addViews(postId, postViews)

    // this.postService.addViews(this.postData['id'],this.postData.views)
  }
}
