import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from 'src/app/service/todo.model';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css'],
})
export class EditTodoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditTodoComponent>,
    @Inject(MAT_DIALOG_DATA) public todo: Todo
  ) { }

  ngOnInit(): void { }

  onSubmit(form: NgForm) {
    // error popups
    if (!form.value.text) {
      return alert('Form is invalid! Please enter text of your todo.');
    }
    if (form.value.text.length <= 2) {
      return alert('Form is invalid! Todo must be longer than 2 characters.');
    }

    // closing with updated todo
    //ILLEGAL!!!!!!!!! CANNOT ASSIGN VALUES LIKE THIS
    // this.todo.message = form.value.text;
    this.dialogRef.close({message: form.value.text});
  }

  close() {
    this.dialogRef.close();
  }
}
