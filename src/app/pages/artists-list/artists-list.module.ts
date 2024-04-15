import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ArtistsListPageRoutingModule } from './artists-list-routing.module';
import { ArtistsListPage } from './artists-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtistsListPageRoutingModule
  ],
  declarations: [ArtistsListPage]
})
export class ArtistsListPageModule {}
