import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersPage } from './pages/members/members.component';

const routes: Routes = [
  { path: '', redirectTo: "members", pathMatch: 'full' },
  { path: 'members', component: MembersPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
