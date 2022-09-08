import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeProjectListComponent } from './pages/home/home-project-list/home-project-list.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'home',
    component: HomeProjectListComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
