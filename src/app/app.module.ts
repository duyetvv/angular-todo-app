import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { ItemComponent } from './components/item/item.component';
import { DetailComponent } from './components/detail/detail.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { format } from 'util';
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
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TodoService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {}
}
