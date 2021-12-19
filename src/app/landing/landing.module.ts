import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { PageComponent } from './page/page.component';
import { LandingComponent } from './landing.component';

@NgModule({
  declarations: [
    PageComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
