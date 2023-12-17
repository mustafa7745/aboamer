import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiHandlerService } from './services/api-handler.service';
import { MainPageComponent } from './main-page/main-page.component';
import { SubcategoryPageComponent } from './subcategory-page/subcategory-page.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SubcategoryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // HttpClientModule
    
  ],
  providers: [
    provideClientHydration(),
    // ApiHandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
