import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/todo.models';
import { validFilter } from './filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform( todos: Todo[], filter: validFilter): Todo[] {
    
    switch ( filter ) {
      case 'completed':
      return todos.filter( todo => todo.completed);

      case 'pending':
      return todos.filter( todo => !todo.completed);

      default:
      return todos;
    }
    
  }

}
