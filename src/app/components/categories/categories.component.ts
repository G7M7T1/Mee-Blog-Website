import { Component, OnInit } from '@angular/core';
import {CategoriesService} from "../../services/categories.service";
import {PostsService} from "../../services/posts.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categoryList: Array<any> | undefined
  featuredListLength: number | undefined

  constructor(private categoryService: CategoriesService,
              private postService: PostsService,
              private router: Router) { }

  ngOnInit(): void {
    this.categoryService.loadData().subscribe(value => {
      this.categoryList = value
    })

    this.postService.loadFeaturedData().subscribe(value => {
      this.featuredListLength = value.length
    })
  }

  GoCategory(value:string) {
    let cate = value.toLowerCase()
    cate = cate.replace(/\s/g,'-')
    this.router.navigate([`/category/${cate}`])
  }

}
