import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { ItemComponent } from './components/item/item.component';
import { DetailComponent } from './components/detail/detail.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { format } from 'util';
import { DataService } from './services/data.service';
import { TodoService } from './services/todo.service';
import { LogService } from './services/log.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    ItemComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      DataService, { dataEncapsulation: false }
    )
  ],
  providers: [TodoService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {}
}
