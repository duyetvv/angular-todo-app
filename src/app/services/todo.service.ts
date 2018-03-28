import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Todo } from '../models/todo';
import { LogService } from '../services/log.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TodoService {
  private todosUrl = 'api/todos';

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

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions).pipe(
      tap(res => this.logger.log(`added todo id = ${todo.id}, ${res}`)),
      catchError(this.handleError<Todo>('addTodo'))
    );
  }

  removeTodo(todo: Todo | number): Observable<Todo> {
    const id = typeof todo === 'number' ? todo : todo.id;
    const url = `${this.todosUrl}/${id}`;
    debugger;
    return this.http.delete<Todo>(url, httpOptions).pipe(
      tap(res => {
        debugger;
        this.logger.log(`deleted todo id=${id}, ${res}`)
      }),
      catchError(this.handleError<Todo>('removeTodo'))
    )
  }

  editTodo(id: number): boolean {
    return true;
  }
}
