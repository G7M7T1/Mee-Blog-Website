import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {SingleCategoryComponent} from "./pages/single-category/single-category.component";
import {SinglePostComponent} from "./pages/single-post/single-post.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "category", component: SingleCategoryComponent},
  {path: "post/:id", component: SinglePostComponent},

  {path: "category/:id", component: SingleCategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
