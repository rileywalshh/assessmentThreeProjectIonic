//imports for featured-artists.
import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/Artist';
import { ArtistsService } from 'src/app/services/artists.service';

@Component({
  selector: 'app-featured-artists',
  templateUrl: './featured-artists.page.html',
  styleUrls: ['./featured-artists.page.scss'],
})
export class FeaturedArtistsPage implements OnInit {
  //array to store featured artists fetched from api.
  featured_artists: Artist[] = [];

  //constructor injecting ArtistsService.
  constructor(private artistService: ArtistsService) {}

  
  //acts the same way as the init function on artists-list, but in addition maps over the artists to determine if featured.
  ngOnInit() {
    this.artistService.getFeaturedArtists().subscribe((featured_artists) => {
      this.featured_artists = featured_artists.map(artist => ({
        ...artist, dob: new Date(artist.dob), exhibition_date: new Date(artist.exhibition_date)
      }));
    });
  }

}
