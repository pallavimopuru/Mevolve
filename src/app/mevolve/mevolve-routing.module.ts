import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/common/home/home.component';
import { MevolveContainerComponent } from './components/mevolve-container/mevolve-container.component';

const routes: Routes = [
  {
    path: '',
    component: MevolveContainerComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: ''
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MevolveRoutingModule {}
