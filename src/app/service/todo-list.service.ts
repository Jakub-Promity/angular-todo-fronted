import { Injectable } from '@angular/core';
import {TodoItem} from '../component/todo-list-item/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor() { }

  getAllTodos():Promise<Array<TodoItem>> {
    let dummyData:Array<TodoItem> = [];
    dummyData.push(new TodoItem('aaa'));
    dummyData.push(new TodoItem('bbb'));
    dummyData.push(new TodoItem('ccc'));

    return Promise.resolve(dummyData);
  }
}
