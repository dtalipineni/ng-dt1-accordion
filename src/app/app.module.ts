import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgDt1AccordionModule } from './modules/ng-dt1-accordion/ng-dt1-accordion.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgDt1AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
