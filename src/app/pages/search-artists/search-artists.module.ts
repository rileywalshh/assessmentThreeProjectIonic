import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchArtistsPageRoutingModule } from './search-artists-routing.module';

import { SearchArtistsPage } from './search-artists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchArtistsPageRoutingModule
  ],
  declarations: [SearchArtistsPage]
})
export class SearchArtistsPageModule {}
