import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { AngularCliSetupComponent } from './angular-cli-setup/angular-cli-setup.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DirectivesComponent } from './directives/directives.component';
import { InteractionComponent } from './interaction/interaction.component';
import { RouteComponent } from './route/route.component';
const routes: Routes = [
  {path:"", redirectTo: '/intro', pathMatch:'full'},
  {path:"intro", component: IntroductionComponent},
  {path:"route", component: RouteComponent},
  {path:"setup", component: AngularCliSetupComponent},
  {path:"architecture", component: ArchitectureComponent},
  {path:"databinding", component: DataBindingComponent},
  {path:"directives", component: DirectivesComponent},
  {path:"interaction", component: InteractionComponent},
  {path:"**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
