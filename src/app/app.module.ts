import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule,JsonpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { HeaderComponent } from './components/header.component';

@NgModule({
  imports:      [ BrowserModule,HttpModule,JsonpModule ],
  declarations: [ AppComponent,HeaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
