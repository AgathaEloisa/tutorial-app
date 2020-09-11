import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { HomeComponent } from './components/home/home.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { DetailTutorialComponent } from './components/detail-tutorial/detail-tutorial.component';
import { ModifyTutorialComponent } from './components/modify-tutorial/modify-tutorial.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'add-tutorial', component: AddTutorialComponent },
  { path: 'ditail-tutorial', component: DetailTutorialComponent },
  { path: 'modify-tutorial', component: ModifyTutorialComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
