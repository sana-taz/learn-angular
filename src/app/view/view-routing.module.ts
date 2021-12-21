import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchitectureComponent } from './architecture/architecture.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { AngularCliSetupComponent } from './angular-cli-setup/angular-cli-setup.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { InteractionComponent } from './interaction/interaction.component';
import { ServicesComponent } from './services/services.component';
import { HttpRequestComponent } from './http-request/http-request.component';
import { ConfigTailwindComponent } from './config-tailwind/config-tailwind.component';
import { ConfigAngularMaterialComponent } from './config-angular-material/config-angular-material.component';
import { FormComponent } from './form/form.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
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
      { path: 'services', component: ServicesComponent },
      { path: 'httprequest', component: HttpRequestComponent},
      { path: 'tailwind', component: ConfigTailwindComponent},
      { path: 'angular-material', component: ConfigAngularMaterialComponent},
      { path: 'form', component: FormComponent},
      { path: 'todo', component: TodoAppComponent},
      { path: '**', component: PageNotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
