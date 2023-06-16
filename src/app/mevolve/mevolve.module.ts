import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MevolveRoutingModule } from './mevolve-routing.module';
import { HomeComponent } from './components/common/home/home.component';



@NgModule({
  declarations: [
    HomeComponent,


  ],
  imports: [
    CommonModule,
    MevolveRoutingModule,

  ]
})
export class MevolveModule { }
