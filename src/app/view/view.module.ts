import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ArchitectureComponent } from './architecture/architecture.component';

import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { ViewComponent } from './view.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { AngularCliSetupComponent } from './angular-cli-setup/angular-cli-setup.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { InteractionComponent } from './interaction/interaction.component';
import { ServicesComponent } from './services/services.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    ArchitectureComponent,
    ViewComponent,
    IntroductionComponent,
    AngularCliSetupComponent,
    DataBindingComponent,
    DirectivesComponent,
    InteractionComponent,
    ServicesComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    ViewRoutingModule
  ]
})
export class ViewModule { }
