import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { LandingComponent } from './landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'
import { AuthGuard } from '../auth.guard';
const routes: Routes = [
  {
    path: 'landing-page',
    component: LandingComponent,
    children: [ { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: PageComponent, canActivate: [AuthGuard] },
    { path: 'register', component: RegisterComponent },
    { path: '**', redirectTo: 'login' } ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
