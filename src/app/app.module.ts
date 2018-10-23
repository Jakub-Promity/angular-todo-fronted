import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TodoListPageComponent } from './component/page/todo-list-page.component';
import { TodoListComponent } from './component/list/todo-list.component';
import { TodoListItemComponent } from './component/item/todo-list-item.component';
import {TodoListService} from './service/todo-list.service';
import { TodoItemCreatorComponent } from './component/todo-item-creator/todo-item-creator.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatIconModule, MatInputModule, MatSnackBarModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    TodoListPageComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoItemCreatorComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule

  ],
  providers: [
    TodoListService,
  ],
  bootstrap: [TodoListPageComponent]
})
export class AppModule { }
