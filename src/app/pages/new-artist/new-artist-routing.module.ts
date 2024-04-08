import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewArtistPage } from './new-artist.page';

const routes: Routes = [
  {
    path: '',
    component: NewArtistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewArtistPageRoutingModule {}
