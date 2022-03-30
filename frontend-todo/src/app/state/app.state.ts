import { TodoState, todoReducer } from './todos/todo.reducer';
import { ActionReducerMap } from '@ngrx/store';


export const rootReducer = {};

export interface AppState {
    todos: TodoState;
};

export const reducers: ActionReducerMap<AppState, any> = {
    todos: todoReducer
};