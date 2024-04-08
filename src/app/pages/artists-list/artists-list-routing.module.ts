import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistsListPage } from './artists-list.page';

const routes: Routes = [
  {
    path: '',
    component: ArtistsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistsListPageRoutingModule {}
