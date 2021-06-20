import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutRwsInvitesComponent } from './about-rws-invites/about-rws-invites.component';
import { AppAccountComponent } from './app-account/app-account.component';
import { NoPageComponent } from './no-page/no-page.component';

const routes: Routes = [
  {path:'', component: NoPageComponent},
  {path:'about-rws-invites',component: AboutRwsInvitesComponent},
  {path:'app-account',component: AppAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
