import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeaturedArtistsPage } from './featured-artists.page';

const routes: Routes = [
  {
    path: '',
    component: FeaturedArtistsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturedArtistsPageRoutingModule {}
