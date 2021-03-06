import { Todo } from "./todo/todo.models";
import { ActionReducerMap } from "@ngrx/store";

import * as fromTodo from './todo/todo.reducer';
import * as fromFilter from './filter/filter.reducer';
import { validFilter } from "./filter/filter.actions";

export interface AppState {
    todos: Todo[];
    filter: validFilter;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: fromTodo.todoReducer,
    filter: fromFilter.filterReducer
}
