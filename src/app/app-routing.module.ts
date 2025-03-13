import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BandListComponent } from './bands/band-list/band-list.component';
import { BandFormComponent } from './bands/band-form/band-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { BandComponent } from './bands/band/band.component';
import { BandListResolver } from './bands/band-list/band-list.resolver';
import { SigninComponent } from './home/signin/signin/signin.component';

const routes: Routes = [
  { path: '', component: SigninComponent },
  { 
    path: 'bands', 
    component: BandListComponent, 
    resolve: { 
      bands: BandListResolver 
    }
  },
  { path: 'bands/add', component: BandFormComponent },
  { path: 'bands/:band', component: BandComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
