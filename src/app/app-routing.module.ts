import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ClientInfoComponent} from "./client-info/client-info.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form', component: ClientInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
