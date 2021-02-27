import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { timerReducer } from './timer.reducer';

import { AppComponent } from './app.component';
import { MinuteSecondsPipe } from './minute-seconds.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MinuteSecondsPipe
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ state: timerReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
