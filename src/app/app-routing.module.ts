import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";


const routes: Routes = [
  { path: 'sidebar', component: SidebarComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
