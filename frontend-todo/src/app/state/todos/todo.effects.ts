import { Actions, ofType, createEffect } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { switchMap, map, Observable } from "rxjs";
import { DataService } from "src/app/service/todo.service";
import * as TodoActions from './todo.actions'
import { Todo } from "src/app/service/todo.model";
import { Action } from "@ngrx/store";


@Injectable()
export class TodoEffects {

    loadTodos$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(TodoActions.LOAD_TODO),
            switchMap(() => {
                return this.dataService.getAllTodos().pipe(
                    map((todos: Todo[]) => {
                        return new TodoActions.LoadTodoSuccess(todos)
                    }))
            }),
        )
    });

    addTodo$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(TodoActions.ADD_TODO),
            switchMap((action: TodoActions.AddTodo) => {
                return this.dataService.addTodo(action.payload)
            }),
            map((todo) => { return new TodoActions.AddTodoSuccess(todo) })
        )
    });

    updateTodo$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(TodoActions.UPDATE_TODO),
            switchMap((action: TodoActions.UpdateTodo) => {
                return this.dataService.updateTodo(action.payload.id!, action.payload)
            }),
            map((todo) => { return new TodoActions.UpdateTodoSuccess(todo) })
        )
    });

    deleteTodo$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(TodoActions.DELETE_TODO),
            switchMap((action: TodoActions.DeleteTodo) => {
                return this.dataService.deleteTodo(action.payload.id!)
            }),
            map((todo) => { return new TodoActions.DeleteTodoSuccess(todo) })
        )
    });


    constructor(private actions$: Actions, private dataService: DataService) { }
}