import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { LandingComponent } from './landing.component';
const routes: Routes = [
  {
    path: 'landing-page',
    component: LandingComponent,
    children: [{ path: '', component: PageComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
