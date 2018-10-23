import {Injectable} from '@angular/core';
import {TodoItem} from '../component/item/todo-item';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private TODO_URL = environment.backendUrl + '/todoItem';

  constructor(private http: HttpClient, public snackBar: MatSnackBar) {
  }

  getAllTodos(): Promise<Array<TodoItem>> {
    let params = new HttpParams();
    params = params.append('size', '1000');

    return this.http.get(this.TODO_URL,{params: params}).toPromise().then(response => {
      return response['_embedded']['todoItem'].sort((todo1, todo2) => todo2.rank > todo1.rank ? -1 : 1) as Array<TodoItem>;
    });
  }

  insert(todo: TodoItem): Promise<TodoItem> {
    return this.http.post(this.TODO_URL, todo).toPromise().then(response => {
      return response as TodoItem;
    });
  }

  update(todo: TodoItem): Promise<void | TodoItem> {
    return this.http.put(this.TODO_URL + '/' + todo.id, todo).toPromise().then(response => {
      return response as TodoItem;
    });
  }

  showSnack(message) {
    this.snackBar.open(message, null, {
      duration: 600,
    });
  }
}
