/* eslint-disable ngrx/prefer-action-creator */
import { Action } from "@ngrx/store";

import { Todo } from "src/app/service/todo.model";

export const LOAD_TODO = 'LOAD_TODO';
export const LOAD_TODO_SUCCESS = 'LOAD_TODO_SUCCESS';
////
export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
////
export const UPDATE_TODO = 'UPDATE_TODO';
export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS';
////
export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';



export class LoadTodo implements Action {
    readonly type = LOAD_TODO;

    constructor() { }
}
export class LoadTodoSuccess implements Action {
    readonly type = LOAD_TODO_SUCCESS;

    constructor(public payload: Todo[]) { }
};

//////
export class AddTodo implements Action {
    readonly type = ADD_TODO;

    constructor(public payload: Todo) { }
}
export class AddTodoSuccess implements Action {
    readonly type = ADD_TODO_SUCCESS;

    constructor(public payload: Todo) { }
};

//////
export class UpdateTodo implements Action {
    readonly type = UPDATE_TODO;

    constructor(public payload: Todo) { }
}
export class UpdateTodoSuccess implements Action {
    readonly type = UPDATE_TODO_SUCCESS;

    constructor(public payload: Todo) { }
};

//////
export class DeleteTodo implements Action {
    readonly type = DELETE_TODO;

    constructor(public payload: { id: number }) { }
}
export class DeleteTodoSuccess implements Action {
    readonly type = DELETE_TODO_SUCCESS;

    constructor(public payload: { id: number }) { }
}


export type TodoActions =
    | LoadTodo
    | LoadTodoSuccess

    | AddTodo
    | AddTodoSuccess

    | UpdateTodo
    | UpdateTodoSuccess

    | DeleteTodo
    | DeleteTodoSuccess
