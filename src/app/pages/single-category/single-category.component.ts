import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.scss']
})
export class SingleCategoryComponent implements OnInit {

  postList: Array<any> | undefined

  categoryName: any

  constructor(private postService:PostsService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(value => {
      this.categoryName = value['id']
      if (this.categoryName.includes('-')) {
        let categoryNames = this.categoryName.split('-')

        let arrayName = ''
        for (let cate of categoryNames) {
          arrayName += (cate.charAt(0).toUpperCase() + cate.slice(1)) + ' '
        }
        this.categoryName = arrayName.slice(0,-1)
      }
    })

    this.postService.loadCategoryNamePosts(this.categoryName).subscribe(value => {
      this.postList = value
    })
  }

}
