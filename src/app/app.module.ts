import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductAddComponent, ProductEditComponent, ProductGetComponent } from './components';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    ProductGetComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule
  ],
  providers: [SlimLoadingBarModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
