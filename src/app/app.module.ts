import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { TermsComponent } from './pages/terms/terms.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { AboutComponent } from './pages/about/about.component';
import { SubscriptionFormComponent } from './components/subscription-form/subscription-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    TermsComponent,
    SinglePostComponent,
    ContactComponent,
    SingleCategoryComponent,
    AboutComponent,
    SubscriptionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
