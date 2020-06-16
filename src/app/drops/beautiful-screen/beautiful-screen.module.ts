import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeautifulScreenRoutingModule } from './beautiful-screen-routing.module';
import { HomeComponent } from './home/home.component';
import { ScreenComponent } from './screen/screen.component';

@NgModule({
  declarations: [HomeComponent, ScreenComponent],
  imports: [CommonModule, BeautifulScreenRoutingModule],
})
export class BeautifulScreenModule {}
