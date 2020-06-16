import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScreenComponent } from './screen/screen.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'screen',
    component: ScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeautifulScreenRoutingModule { }
