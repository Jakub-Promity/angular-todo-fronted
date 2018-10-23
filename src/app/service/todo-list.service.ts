import {Injectable} from '@angular/core';
import {TodoItem} from '../component/item/todo-item';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private TODO_URL = environment.backendUrl + '/todoItem';

  constructor(private http: HttpClient) {
  }

  getAllTodos(): Promise<Array<TodoItem>> {
    return this.http.get(this.TODO_URL).toPromise().then(response=>{
      return response['_embedded']['todoItem'].sort((todo1,todo2) => todo1.rank - todo2.rank) as Array<TodoItem>;
    })
  }

  insert(todo: TodoItem):Promise<TodoItem> {
    return this.http.post(this.TODO_URL, todo).toPromise().then(response =>{
      return response as TodoItem;
    })
  }

  remove(todo: TodoItem):Promise<any> {
    return this.http.delete(this.TODO_URL + '/' + todo.id).toPromise();
  }

  update(todo: TodoItem):Promise<TodoItem> {
    return this.http.put(this.TODO_URL + '/' + todo.id, todo).toPromise().then(response =>{
      return response as TodoItem;
    })
  }
}
