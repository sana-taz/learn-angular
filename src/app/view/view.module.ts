import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ArchitectureComponent } from './architecture/architecture.component';

import { HttpClientModule } from '@angular/common/http';

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
import { HttpRequestComponent } from './http-request/http-request.component';
import { ConfigTailwindComponent } from './config-tailwind/config-tailwind.component';
import { ConfigAngularMaterialComponent } from './config-angular-material/config-angular-material.component';
import { FormComponent } from './form/form.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { FormsModule } from '@angular/forms';
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
    PageNotFoundComponent,
    HttpRequestComponent,
    ConfigTailwindComponent,
    ConfigAngularMaterialComponent,
    FormComponent,
    TodoAppComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    ViewRoutingModule
  ]
})
export class ViewModule { }
