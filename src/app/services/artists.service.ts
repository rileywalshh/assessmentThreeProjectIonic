//imports for artists service.
import { Injectable } from '@angular/core';
import { Artist } from '../models/Artist';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  //Service is provided at all levels of app.
  providedIn: 'root'
})

//Url for artists api.
export class ArtistsService {
  private artistsUrl = "https://prog2005.it.scu.edu.au/ArtGalley";

  //constructor injecting HTTPClient into the service for requests.
  constructor(private http: HttpClient) { }


  //function to retrieve data from target api. returns an observable.
  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.artistsUrl);
  }

  //function to retrieve only featured artists from api.
  getFeaturedArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.artistsUrl).pipe(map(artists => artists.filter(artist => artist.is_featured_artist === 1)));
  }

  //method for creating/posting a new artists to the db.
  createNewArtist(artist: Omit<Artist, 'id'>): Observable<Artist> {
    return this.http.post<Artist>(this.artistsUrl, artist);
  }
}
