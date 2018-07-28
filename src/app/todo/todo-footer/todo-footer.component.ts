import { Component, OnInit } from '@angular/core';

import * as fromFilter from '../../filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reduers';
import { Todo } from '../todo.models';
import { ClearCompletedTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  validFilter: fromFilter.validFilter[] = ['all', 'completed', 'pending'];
  currentFilter: fromFilter.validFilter;
  pending: number;

  constructor( private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(
      state => {
        this.currentFilter = state.filter;
        this.countPending( state.todos );        
      }
    )
  }

  changeFilter = ( newFilter: fromFilter.validFilter ) => {
    const action = new fromFilter.SetFilter( newFilter );
    this.store.dispatch( action );
  }

  countPending = ( todos: Todo[] ) => {
    this.pending = todos.filter( todo => !todo.completed ).length;
  }

  clearCompleted = () => {
    const action = new ClearCompletedTodoAction();
    this.store.dispatch( action );
  }

}
