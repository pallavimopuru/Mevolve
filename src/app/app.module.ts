import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MevolveModule } from './mevolve/mevolve.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MevolveContainerComponent } from './mevolve/components/mevolve-container/mevolve-container.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MevolveContainerComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MevolveModule,
FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
