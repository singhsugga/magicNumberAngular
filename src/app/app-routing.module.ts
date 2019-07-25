import { NumberDetailsComponent } from './number-details/number-details.component';
import { NumberHomeComponent } from './number-home/number-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: NumberHomeComponent },
  { path: 'magic-number', component: NumberDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
