import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { IntroductionComponent } from './introduction/introduction.component';
import { AngularCliSetupComponent } from './angular-cli-setup/angular-cli-setup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { InteractionComponent } from './interaction/interaction.component';
import { ServicesComponent } from './services/services.component';
import { ViewModule } from './view/view.module';
import { LandingModule } from './landing/landing.module';


@NgModule({
  declarations: [AppComponent, IntroductionComponent, AngularCliSetupComponent, PageNotFoundComponent, ArchitectureComponent, DataBindingComponent, DirectivesComponent, InteractionComponent, ServicesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule,
    LandingModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ViewModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
