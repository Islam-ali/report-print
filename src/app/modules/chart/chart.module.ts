import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartRoutingModule } from './chart-routing.module';
import { BarComponent } from './bar/bar.component';
import {ChartModule} from 'primeng/chart';


@NgModule({
  declarations: [
    BarComponent
  ],
  imports: [
    CommonModule,
    ChartRoutingModule,
    ChartModule
  ]
})
export class ChartsModule implements OnInit{
  ngOnInit(): void {
  }
}
