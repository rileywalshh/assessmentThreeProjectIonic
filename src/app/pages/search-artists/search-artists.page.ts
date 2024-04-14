import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/Artist';
import { ArtistsService } from 'src/app/services/artists.service';

@Component({
  selector: 'app-search-artists',
  templateUrl: './search-artists.page.html',
  styleUrls: ['./search-artists.page.scss'],
})
export class SearchArtistsPage implements OnInit {
  artists: Artist[] = [];
  errorMessage: string = '';
  searchArtistName: string = ''; 

  constructor(private artistsService: ArtistsService) { }

  ngOnInit() {
  }

  OnSubmit (){
    //call searchartist of artistsService
    this.artistsService.searchArtists(this.searchArtistName).subscribe(
     (list: any) => {
          if (list.length > 0) {
            this.artists = list;
            this.errorMessage = '';
          } else {
            this.artists = [];
            this.errorMessage = 'Artist not found';
          }
      },
     (err: any) => {
      console.error('Error', err);
      this.errorMessage = 'Error occured';
    }
  );
}
}
