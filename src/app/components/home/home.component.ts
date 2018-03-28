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
      this.todos = todos;
    });
  }

  onDelete(todo: Todo) {
    this.todoService.removeTodo(todo).subscribe(res => {
      debugger;
      console.log(res);
    })
  }

  onSubmit(evt) {
    evt.preventDefault();
    const length = this.todos.length;
    this.todo.id = this.todos[length].id + 1;

    this.todoService.addTodo(this.todo).subscribe(_todo => {
      this.todos.push(_todo)
    })
  }
}
