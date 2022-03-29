import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Todo } from './todo.model';

import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) { }


  // get todo
  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('http://localhost:8080/todos');
  }

  // add a todo
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(
      'http://localhost:8080/todos',
      todo
    );
  }

  // updates a todo
  updateTodo(id: number, todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(
      'http://localhost:8080/todos/' + id,
      todo
    );
  }

  // destroy a todo
  deleteTodo(id: number): Observable<Todo> {
    return this.http.delete<Todo>(
      'http://localhost:8080/todos/' + id
    );
  }
}



// setTodos(todos: Todo[]){
  //   this.todos = todos;
  //   this.todosChanged.next(this.todos.slice())
  // }

  // getAllTodos() {
  //   return this.todos.slice()
  // }

  // addTodo(todo: Todo) {
  //   this.todos.push(todo);
  //   this.todosChanged.next(this.todos.slice())
  // }

  // updateTodo(id: number, todo: Todo) {
  //   this.todos[id] = todo;
  //   this.todosChanged.next(this.todos.slice())
  // }

  // deleteTodo(id: number){
  //   this.todos.splice(id, 1);
  //   this.todosChanged.next(this.todos.slice())
  // }