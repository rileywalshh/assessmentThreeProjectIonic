import { Injectable } from '@angular/core';
import { Artist } from '../models/Artist';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {
  private artistsUrl = "https://prog2005.it.scu.edu.au/ArtGalley";
  constructor(private http: HttpClient) { }


  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.artistsUrl);
  }
}
