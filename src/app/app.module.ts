import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerDataService } from './services/server-data.service';
import { BranchComponent } from './branch/branch.component';

@NgModule({
  declarations: [
    AppComponent,
    BranchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ServerDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
