import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModifyArtistsPageRoutingModule } from './modify-artists-routing.module';
import { ModifyArtistsPage } from './modify-artists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifyArtistsPageRoutingModule
  ],
  declarations: [ModifyArtistsPage]
})
export class ModifyArtistsPageModule {}
