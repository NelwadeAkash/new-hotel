import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from './../home/home.component';
import { HotelsComponent } from './../hotels/hotels.component';
import { ErrorComponent } from 'src/Error/Error.component';
import { UserComponent } from 'src/user/user.component';
import { AboutComponent } from 'src/about/about.component';

import { MovieComponent } from 'src/movie/movie.component';
import { RatingComponent } from 'src/rating/rating.component';
import { RegComponent } from 'src/reg/reg.component';
//import { SignComponent } from 'src/signup/sign.component';

//import { AppSharedModule } from "./_shared/app-shared.module";

@NgModule({
  declarations: [ AppComponent,
  HomeComponent,
  HotelsComponent,
  ErrorComponent,UserComponent,
  AboutComponent,
  MovieComponent,RatingComponent ,RegComponent ],

  imports: [BrowserModule, AppRoutingModule, FormsModule ],// AppSharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
