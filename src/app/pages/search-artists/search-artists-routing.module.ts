import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchArtistsPage } from './search-artists.page';

const routes: Routes = [
  {
    path: '',
    component: SearchArtistsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchArtistsPageRoutingModule {}
