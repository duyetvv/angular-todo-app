import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { TODOS } from '../data/todos';

@Injectable()
export class InMemoryTodoService implements InMemoryDbService {

  constructor() { }

  createDb() {
    return {
      todos: TODOS
    }
  }
}
