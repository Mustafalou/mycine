import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinemasessionComponent } from './cinemasession/cinemasession.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:"session/:roomname", component:CinemasessionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
