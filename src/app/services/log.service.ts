import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }

  log(msg: any) {
    console.log(`Todo App >> `, msg);
  }

  error(msg: any) {
    console.error('Todo App >> ', msg);
  }

  warn(msg: any) {
    console.warn('Todo App >> ', msg);
  }
}
