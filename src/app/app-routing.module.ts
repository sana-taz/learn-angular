import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { AngularCliSetupComponent } from './angular-cli-setup/angular-cli-setup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
  {path:"", redirectTo: '/intro', pathMatch:'full'},
  {path:"intro", component: IntroductionComponent},
  {path:"setup", component: AngularCliSetupComponent},
  {path:"architecture", component: ArchitectureComponent},
  {path:"**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
