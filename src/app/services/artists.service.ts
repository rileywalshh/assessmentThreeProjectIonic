//imports for artists service.
import { Injectable } from '@angular/core';
import { Artist } from '../models/Artist';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  getArtists(): Observable<any[]> {
    return this.http.get<any[]>(this.artistsUrl);
  }
}
