/* eslint-disable ngrx/prefer-selector-in-select */
/* eslint-disable ngrx/prefer-action-creator-in-dispatch */
/* eslint-disable ngrx/no-typed-global-store */

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { Todo } from '../service/todo.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as TodoActions from "../state/todos/todo.actions";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Observable<{ todos: Todo[] }>;

  constructor(
    private dialog: MatDialog,
    private store: Store<{ todos: { todos: Todo[] } }>) {
      this.todos = this.store.select('todos')
     }

  ngOnInit(): void {
    this.store.dispatch(new TodoActions.LoadTodo());

  }

  // OnSubmit method
  onSubmit(form: NgForm) {
    if (!form.value.text) {
      return alert('Form is invalid! Please enter text of your todo.');
    }
    if (form.value.text.length <= 2) {
      return alert('Form is invalid! Todo must be longer than 2 characters.');
    }

    this.store.dispatch(new TodoActions.AddTodo(new Todo(form.value.text)));

    form.reset();
  }

  // method to delete todo
  onDeleteClicked(todo: Todo) {
    this.store.dispatch(new TodoActions.DeleteTodo(todo))
  }

  // method for editing todo
  onEditClicked(id: number, todo: Todo) {
    let dialogRef = this.dialog.open(EditTodoComponent, {
      width: '700',
      data: todo,
    });

    dialogRef.afterClosed().subscribe((responseData: { message: string }) => {
      if (responseData) {
        this.store.dispatch(new TodoActions.UpdateTodo({ id: id, message: responseData.message, completed: false }))
      }
    });
  }
}
