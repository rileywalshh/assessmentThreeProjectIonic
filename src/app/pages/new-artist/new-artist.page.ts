import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArtistsService } from 'src/app/services/artists.service';

@Component({
  selector: 'app-new-artist',
  templateUrl: './new-artist.page.html',
  styleUrls: ['./new-artist.page.scss'],
})
export class NewArtistPage implements OnInit {
  newArtistForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private artistsService: ArtistsService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.newArtistForm = this.formBuilder.group({
      
    })
  }


  onSubmit() {
    
  }
}
