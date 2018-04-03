import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Todo } from '../models/todo';
import { LogService } from '../services/log.service';
import { debug } from 'util';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TodoService {
  // private todosUrl = 'http://all.pre-prod.nissan.eu/etc/nissaneu/gms_app/data/test-drive.json';
  private todosUrl = 'http://localhost/api/todos';

  constructor(
    private http: HttpClient,
    private logger: LogService
  ) { }

  handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.logger.error(error);
      this.logger.log(`${operation} failed: ${error.message}`);

      return of(result as T)
    }
  }

  getTodos(): Observable<Todo[]> {
    this.logger.log('FETCH TODOS');

    return this.http.get<Todo[]>(this.todosUrl).pipe(
      tap(todos => this.logger.log(`fetched todos ${todos}`)),
      catchError(this.handleError('getTodos', []))
    )
  }

  addTodo(todo: Todo): Observable<any> {
    return this.http.post<Todo>(this.todosUrl, todo).pipe(
      tap(res => this.logger.log(`added todo id = ${todo.id}, ${res}`)),
      catchError(this.handleError<Todo>('addTodo'))
    );
  }

  removeTodo(todo: Todo | number): Observable<Todo> {
    const id = typeof todo === 'number' ? todo : todo.id;

    return this.http.delete<Todo>(`${this.todosUrl}/${id}`).pipe(
      tap(res => this.logger.log(`deleted todo id=${id}, ${res}`)),
      catchError(this.handleError<Todo>('removeTodo'))
    )
  }

  editTodo(id: number): boolean {
    return true;
  }
}
