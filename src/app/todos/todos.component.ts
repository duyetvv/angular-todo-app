import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

export class TodosComponent implements OnInit {
  todos:any = [ ];
  name:string = '';
  filters:string[] = ['false'];

  constructor() { }

  ngOnInit() {
  }

  addTodo() {
    if (!this.name) {
      return;
    }

    this.todos.push({
      name: this.name,
      status: true
    });

    this.name = '';
  }

  toggleStatus(index) {
    this.todos[index].status = !this.todos[index].status;
  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
  }

  handleFilter(evt) {
    const target = evt.target;
    const name = target.name;

    if (evt.target.checked) {
      this.filters = Array.from(new Set(this.filters.concat(name)));
      return;
    }
    this.filters = this.filters.filter(ele => ele !== name)
  }
}
