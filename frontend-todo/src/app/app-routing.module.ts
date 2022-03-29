import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// implement lazy loading!!
const routes: Routes = [
  {
    path: '',
    redirectTo: 'todos',
    pathMatch: 'full'
  },
  
  { path: 'todos',
  loadChildren: () => 
    import('./todos/todos.module').then(m => m.TodosModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
