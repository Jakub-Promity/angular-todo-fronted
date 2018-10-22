import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TodoListPageComponent } from './component/todo-list-page/todo-list-page.component';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { TodoListItemComponent } from './component/todo-list-item/todo-list-item.component';
import {TodoListService} from './service/todo-list.service';
import { TodoItemCreatorComponent } from './component/todo-item-creator/todo-item-creator.component';

@NgModule({
  declarations: [
    TodoListPageComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoItemCreatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TodoListService,
  ],
  bootstrap: [TodoListPageComponent]
})
export class AppModule { }
