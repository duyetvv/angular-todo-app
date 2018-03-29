import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public todo: Todo = {
    id: 0,
    name: 'demo',
    status: true
  }

  todos: Todo[];

  constructor(
    private todoService: TodoService,
    private logger: LogService
  ) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos as Todo[];
    });
  }

  onDelete(todo: Todo) {
    this.todoService.removeTodo(todo).subscribe(res => {
      console.log(res);
    })
  }

  onSubmit(evt) {
    evt.preventDefault();
    const length = this.todos.length;
    this.todo.id = this.todos[length - 1].id + 1;

    this.todoService.addTodo(this.todo).subscribe(res => {
      if (res.error) {
        console.log(res.msg);
        return;
      }

      this.todos.push(res as Todo);
    })
  }
}
