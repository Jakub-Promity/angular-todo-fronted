import { Component, OnInit } from '@angular/core';
import {TodoListService} from '../../service/todo-list.service';
import {TodoItem} from '../todo-list-item/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos:Array<TodoItem> = [];

  constructor(private todoListService:TodoListService) { }

  ngOnInit() {
    this.todoListService.getAllTodos().then(todos=>{
      this.todos = todos;
    });
  }

}
