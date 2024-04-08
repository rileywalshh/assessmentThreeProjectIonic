import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewArtistPageRoutingModule } from './new-artist-routing.module';

import { NewArtistPage } from './new-artist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewArtistPageRoutingModule
  ],
  declarations: [NewArtistPage]
})
export class NewArtistPageModule {}
