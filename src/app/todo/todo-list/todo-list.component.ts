import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reduers';
import { Todo } from '../todo.models';
import { validFilter } from '../../filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filter: validFilter;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    this.store.subscribe(
      state => {
        this.todos = state.todos;
        this.filter = state.filter;
      }
    )
  }

}
