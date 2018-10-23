import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TodoItem} from '../item/todo-item';

@Component({
  selector: 'app-todo-item-creator',
  templateUrl: './todo-item-creator.component.html',
  styleUrls: ['./todo-item-creator.component.scss']
})
export class TodoItemCreatorComponent implements OnInit {

  public value;

  @Output()
  public todoCreated:EventEmitter<TodoItem>;

  constructor() {
    this.todoCreated = new EventEmitter();
  }

  ngOnInit() {
  }

  createTodo() {
    this.todoCreated.emit(new TodoItem(this.value));
  }

  checkSubmit(event:any){
    if(event.key == 'Enter'){
      this.createTodo();
      this.value = '';
    }
  }
}
