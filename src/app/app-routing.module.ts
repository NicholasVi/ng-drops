import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'todo',
    loadChildren: () =>
      import('./drops/todo/todo.module').then((m) => m.TodoModule),
  },
  {
    path: 'screen',
    loadChildren: () =>
      import('./drops/beautiful-screen/beautiful-screen.module').then(
        (m) => m.BeautifulScreenModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
