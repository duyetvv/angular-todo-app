import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs/Observable';

import { TODOS } from '../data/todos';

@Injectable()
export class DataService implements InMemoryDbService{

  constructor() { }

  createDb() {
    const todos = TODOS;
    return { todos }
  }
}
