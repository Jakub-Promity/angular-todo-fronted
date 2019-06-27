import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoItem} from './todo-item';
import {environment} from '../../../environments/environment';
import {TodoListService} from '../../service/todo-list.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {

  environment = environment;

  @Input()
  public todo:TodoItem;

  @Output()
  public deleteEvent:EventEmitter<TodoItem>;

  constructor(private todoService:TodoListService) {
    this.deleteEvent = new EventEmitter();
  }

  ngOnInit() {
  }

  toggleDone() {
    this.todo.done = !this.todo.done;
    this.todoService.update(this.todo);
  }
}
