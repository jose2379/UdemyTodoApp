import * as fromTodo from './todo.actions';
import { Todo } from './todo.models';


const todo1 = new Todo('Primera tarea');
const todo2 = new Todo('Segunda tarea');
const todo3 = new Todo('tercera tarea');
const todo4 = new Todo('CUARTA tarea');

todo3.completed = true;
const stateInit: Todo[] = [todo1, todo2, todo3, todo4];

export function todoReducer ( state = stateInit, action: fromTodo.Actions ):Todo[] {

    switch (action.type) {
        case fromTodo.ADD_TODO:
        const todo = new Todo( action.payload );
        return [...state, todo];

        case fromTodo.TOGGLE_TODO:
        return state.map( todoEdit => {
            if ( todoEdit.id === action.payload) {
                return {
                    ...todoEdit,
                    completed: !todoEdit.completed
                }
            } else { return todoEdit; }
        });

        case fromTodo.TOGGLE_ALL_TODO:
        return state.map( todoEdit => {
            return {
                ...todoEdit,
                completed: action.payload
            };
        });

        case fromTodo.EDIT_TODO:
        return state.map( todoEdit => {
            if (todoEdit.id === action.payload.id ) {
                return {
                    ...todoEdit,
                    text: action.payload.text
                }
            } else {
                return todoEdit
            }
        })

        case fromTodo.DELETE_TODO:
        return state.filter( todoEdit => todoEdit.id !== action.payload );

        case fromTodo.CLEAR_COMPLETED_TODO:
        return state.filter ( todoEdit => !todoEdit.completed)

        default:
        return state;
    }
} 