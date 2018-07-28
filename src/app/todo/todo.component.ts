import { Component, OnInit } from '@angular/core';
import { ToggleAllTodoAction } from './todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reduers';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  completed = false;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
  }

  toogleAll = () => {
    this.completed = !this.completed;
    const action = new ToggleAllTodoAction( this.completed );
    this.store.dispatch( action );
  }

}
