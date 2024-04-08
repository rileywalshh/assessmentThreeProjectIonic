import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeaturedArtistsPageRoutingModule } from './featured-artists-routing.module';

import { FeaturedArtistsPage } from './featured-artists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeaturedArtistsPageRoutingModule
  ],
  declarations: [FeaturedArtistsPage]
})
export class FeaturedArtistsPageModule {}
