import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchitectureComponent } from './architecture/architecture.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { AngularCliSetupComponent } from './angular-cli-setup/angular-cli-setup.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { InteractionComponent } from './interaction/interaction.component';
import { ServicesComponent } from './services/services.component';
import { ViewComponent } from './view.component';
const routes: Routes = [
  {
    path: 'view',
    component: ViewComponent,
    children: [
      { path: 'architecture', component: ArchitectureComponent },
      { path: 'introduction', component: IntroductionComponent },
      { path: 'cli-setup', component: AngularCliSetupComponent },
      { path: 'databinding', component: DataBindingComponent },
      { path: 'directive', component: DirectivesComponent },
      { path: 'interaction', component: InteractionComponent },
      { path: 'services', component: ServicesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
