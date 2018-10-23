import { Component, OnInit } from '@angular/core';
import {TodoListService} from '../../service/todo-list.service';
import {TodoItem} from '../item/todo-item';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

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

  handleCreatedTodo(todo: TodoItem) {
    this.todoListService.insert(todo).then(indexedTodo=>{
      this.todos.push(indexedTodo);
    });
  }

  handleDelete(todo:TodoItem){
    this.todoListService.remove(todo).then(()=>{
      this.todos.splice(this.todos.indexOf(todo),1);
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
    this.todos.forEach((todo, index) =>{
      todo.rank = (index+1) * 10;
      this.todoListService.update(todo);
    })
  }


}
