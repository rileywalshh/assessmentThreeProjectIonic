//imports for angular elements, artists interface and artists service.
import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/Artist';
import { ArtistsService } from 'src/app/services/artists.service';

@Component({
  selector: 'app--modify-artists',
  templateUrl: './modify-artists.page.html',
  styleUrls: ['./modify-artists.page.scss'],
})

//components class.
//array to store the artists data, starts empty but is populated with data from url.
export class ModifyArtistsPage implements OnInit {
  artists: Artist[] = [];

  //constructor.
  //injects ArtistsService into this component.
  constructor(private artistsService: ArtistsService) { }

  //on component init, calls the getArtists() function from ArtistsService, returns an observable.
  //subscribes to the observable to receive artists data.
  //maps through each artists.
  ngOnInit() {
    this.artistsService.getArtists().subscribe((data) => {
      this.artists = data.map(artist => ({
        ...artist, dob: new Date(artist.dob), exhibition_date: new Date(artist.exhibition_date)
      }));
    }
  )};
}
