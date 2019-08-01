import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { MyComponent2Component } from './my-component2/my-component2.component';
import { DocsComponent } from './docs/docs.component';
import { DocsPresentorComponent } from './docs-presentor/docs-presentor.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    MyComponent2Component,
    DocsComponent,
    DocsPresentorComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
