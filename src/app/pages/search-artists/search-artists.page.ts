import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/Artist';
import { ArtistsService } from 'src/app/services/artists.service';

@Component({
  selector: 'app-search-artists',
  templateUrl: './search-artists.page.html',
  styleUrls: ['./search-artists.page.scss'],
})
export class SearchArtistsPage implements OnInit {
  artist: Artist | null = null; // Holds a single artist or null
  errorMessage: string = '';
  searchArtistId: string = '';

  constructor(private artistsService: ArtistsService) { }

  ngOnInit() {
    console.log('test');
  }

  onSubmit() {
    if (this.searchArtistId) {
      this.artistsService.searchArtistById(this.searchArtistId).subscribe({
        next: (artist) => {
          this.artist = artist;
          this.errorMessage = '';
        },
        error: (error) => {
          console.error('Error fetching artist by ID', error);
          this.artist = null;
          this.errorMessage = 'Artist ID not found';
        }
      });
    } else {
      this.errorMessage = 'Please enter a valid artist ID';
      this.artist = null;
    }
  }
}
