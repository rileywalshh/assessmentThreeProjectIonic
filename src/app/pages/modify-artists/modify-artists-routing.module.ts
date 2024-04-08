import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifyArtistsPage } from './modify-artists.page';

const routes: Routes = [
  {
    path: '',
    component: ModifyArtistsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifyArtistsPageRoutingModule {}
