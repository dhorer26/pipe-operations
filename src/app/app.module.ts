import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {passedOneStringParameterPipe} from './passedOneStringParameter.pipe';
import { PassedAnymultiparametersPipe } from './passed-anymultiparameters.pipe';
import { IncludehtmlPipe } from './includehtml.pipe';
import { GetPositionofElementPipe } from './get-positionof-element.pipe';

@NgModule({
  declarations: [
    AppComponent,
    passedOneStringParameterPipe,
    PassedAnymultiparametersPipe,
    IncludehtmlPipe,
    GetPositionofElementPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
