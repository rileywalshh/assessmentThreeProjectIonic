import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/Artist';
import { ArtistsService } from 'src/app/services/artists.service';

@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.page.html',
  styleUrls: ['./artists-list.page.scss'],
})
export class ArtistsListPage implements OnInit {
  artists: Artist[] = [];
  constructor(private artistsService: ArtistsService) { }

  ngOnInit() {
    this.artistsService.getArtists().subscribe((data) => {
      this.artists = data.map(artist => ({
        ...artist, dob: new Date(artist.dob), exhibition_date: new Date(artist.exhibition_date)
      }));
    }
  )};


}
