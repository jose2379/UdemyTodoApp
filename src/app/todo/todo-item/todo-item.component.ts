import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../todo.models';
import { FormControl, Validators } from '../../../../node_modules/@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reduers';
import { ToggleTodoAction, EditTodoAction, DeleteTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtInputRef') txtInputRef: ElementRef;

  chkField: FormControl;
  txtInput: FormControl;

  editing: boolean;

  constructor( private store: Store<AppState>) { }

  ngOnInit() {
    console.log('iten', this.todo);
    this.chkField = new FormControl( this.todo.completed );
    this.txtInput = new FormControl( this.todo.text, Validators.required );

    this.chkField.valueChanges.subscribe(
      () => {
        const action = new ToggleTodoAction( this.todo.id );
        this.store.dispatch( action );
      }
    )
  }

  edit = () => {
    this.editing = true;

    setTimeout(() => {
      this.txtInputRef.nativeElement.select();
    }, 1);
  }

  endEditing = () => {
    this.editing = false;
    if (this.txtInput.invalid) { return; }
    if (this.txtInput.value === this.todo.text) { return; }
    const action = new EditTodoAction( {id: this.todo.id, text: this.txtInput.value } );
    this.store.dispatch( action );
  }

  deleteTodo = () => {
    const action = new DeleteTodoAction( this.todo.id );
    this.store.dispatch( action );
  }

}
