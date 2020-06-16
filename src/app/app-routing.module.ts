import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full',
  },
  {
    path: 'todo',
    loadChildren: () =>
      import('./drops/todo/todo.module').then(({ TodoModule }) => TodoModule),
  },
  {
    path: 'screen',
    loadChildren: () =>
      import('./drops/beautiful-screen/beautiful-screen.module').then(
        ({ BeautifulScreenModule }) => BeautifulScreenModule
      ),
  },
  {
    path: 'banners',
    loadChildren: () =>
      import('./drops/banners-generator/banners-generator.module').then(
        ({ BannersGeneratorModule }) => BannersGeneratorModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
