import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/service/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  // @input to pass in a todo from parent component todo.component.html
  @Input() todo: Todo
  // @output so we can pass click event to parent
  @Output() todoClicked: EventEmitter<void> = new EventEmitter();
  @Output() editClicked: EventEmitter<number> = new EventEmitter();
  @Output() deleteClicked: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  onTodoClicked() {
    this.todoClicked.emit();
  }

  onDeleteClicked(id: number) {
    this.deleteClicked.emit(id);
  }

  onEditClicked(id: number) {
    this.editClicked.emit(id);
  }
}
