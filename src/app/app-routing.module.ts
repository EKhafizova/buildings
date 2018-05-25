import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyalbumComponent } from './myalbum/myalbum.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  { path: 'myalbum', component: MyalbumComponent },
  { path: 'aboutus', component: AboutusComponent},
  { path: '', redirectTo: 'myalbum', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
