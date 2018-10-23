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
      this.todoListService.showSnack('Note created !');
      this.todos.push(indexedTodo);
      this.todos.sort((todo1, todo2) => todo2.rank > todo1.rank ? -1 : 1);
      this.setRank();
    }).catch(error=>this.todoListService.showSnack(error.status + " " + error.message));
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
    this.setRank();
  }

  private setRank(){
    this.todos.forEach((todo, index) =>{
      todo.rank = (index+1) * 10;
      this.todoListService.update(todo).catch(error=>this.todoListService.showSnack(error.status + " " + error.message));
    })
  }


}
