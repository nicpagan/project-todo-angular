import { NgModule } from "@angular/core";
import { TodosRoutingModule } from "./todos-routing.module";
import { TodosComponent } from "./todos.component";

import { ObserversModule } from '@angular/cdk/observers';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule} from '@angular/material/list'
import { MatCardModule} from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TodoItemComponent } from "./todo-item/todo-item.component";
import { EditTodoComponent } from "./edit-todo/edit-todo.component";

import { MatIconModule } from '@angular/material/icon'
import { FormsModule } from "@angular/forms";

import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from "@angular/common";


@NgModule({
    imports: [
        FlexLayoutModule,
        MatCardModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        ObserversModule,
        TodosRoutingModule,
        MatDialogModule,
        FormsModule,
        CommonModule,
    ],

    declarations: [
        TodosComponent,
        TodoItemComponent,
        EditTodoComponent,
    ]
})

export class TodosModule { }