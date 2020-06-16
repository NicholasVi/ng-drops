import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ConstructorComponent } from './constructor/constructor.component';
import { SettingsComponent } from './settings/settings.component';
import { BannersGeneratorRoutingModule } from './banners-generator-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, ConstructorComponent, SettingsComponent],
  imports: [CommonModule, BannersGeneratorRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class BannersGeneratorModule {}
