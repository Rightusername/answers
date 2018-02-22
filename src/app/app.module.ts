import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';


import { AppComponent } from './app.component';
import { AnswersComponent } from './answers/answers.component';
import { Ng2DeviceDetectorModule } from 'ng2-device-detector';
import { DataService } from "./data.service";
import { AnotherComponent } from './another/another.component';
import { BindingComponent } from './binding/binding.component';
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    AnswersComponent,
    AnotherComponent,
    BindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2DeviceDetectorModule.forRoot(),
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
