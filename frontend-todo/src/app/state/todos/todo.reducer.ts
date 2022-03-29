import { Todo } from "src/app/service/todo.model";
import * as TodoActions from "./todo.actions";

export interface TodoState {
    todos: Todo[];
}

const initialState = {
    todos: []
};


export function todoReducer(
    state: TodoState = initialState,
    action: TodoActions.TodoActions): TodoState {
    switch (action.type) {
        case TodoActions.LOAD_TODO:
            return {
                ...state,
                todos: []
            };
        case TodoActions.LOAD_TODO_SUCCESS:
            return {
                ...state,
                todos: action.payload
            }
        case TodoActions.ADD_TODO:
            return {
                ...state,
                todos: []
            }
        case TodoActions.ADD_TODO_SUCCESS:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case TodoActions.UPDATE_TODO:
            return {
                ...state,
                todos: []
            };
        case TodoActions.UPDATE_TODO_SUCCESS:
            const todoList: Todo[] = state.todos.map((todo: Todo) => {
                if (todo.id === action.payload.id) {
                    return new Todo(action.payload.message, action.payload.id, todo.completed)
                } else {
                    return todo
                }
            });
            return {
                ...state,
                todos: todoList
            };
        case TodoActions.DELETE_TODO:
            return {
                ...state,
                todos: []
            };
        case TodoActions.DELETE_TODO_SUCCESS:
            return {
                ...state,
                todos: state.todos.filter((todo) => {
                    return todo.id !== action.payload.id
                })
            };
        default:
            return state;
    }
}

