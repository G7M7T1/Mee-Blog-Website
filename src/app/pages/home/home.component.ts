import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  featuredList: Array<any> | undefined
  featuredListLength: number | undefined
  postList: Array<any> | undefined

  constructor(private postService: PostsService) {
    this.postService.loadFeaturedData().subscribe(value => {
      this.featuredList = value
      this.featuredListLength = this.featuredList.length
    })

    this.postService.loadLatest().subscribe(value => {
      this.postList = value
    })
  }

  ngOnInit(): void {
  }

}
