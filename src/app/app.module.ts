import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ResultListPageComponent } from './result-list-page/result-list-page.component';
import {RouterModule, PreloadAllModules} from '@angular/router';

const routes = [
  {path: '', component: HomePageComponent},
  {path: 'result', component: ResultListPageComponent},
  {path: '404', component: NotFoundPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    HomePageComponent,
    ResultListPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
