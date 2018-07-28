import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '../../../../node_modules/@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reduers';
import * as fromTodo from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    this.txtInput = new FormControl('', Validators.required );
  }

  addValue = () => {

    if ( !this.txtInput.valid ) { return; }

    const action = new fromTodo.AddTodoAction( this.txtInput.value );
    this.store.dispatch( action );

    this.txtInput.setValue('');

    console.log('add', this.txtInput.value);
  }

}
