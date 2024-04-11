import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArtistsService } from 'src/app/services/artists.service';
import { Artist } from 'src/app/models/Artist';

@Component({
  selector: 'app-new-artist',
  templateUrl: './new-artist.page.html',
  styleUrls: ['./new-artist.page.scss'],
})
export class NewArtistPage implements OnInit {
  newArtistForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private artistsService: ArtistsService) { }
  

  //setting the validators for the form.
  ngOnInit() {
    this.newArtistForm = this.formBuilder.group({
      name: ['', Validators.required],
      dob: [new Date().toISOString(), Validators.required],
      gender: ['', Validators.required],
      artwork_type: ['', Validators.required],
      contact_info: ['', Validators.required],
      exhibition_date: [new Date().toISOString(), Validators.required],
      is_featured_artist: ['', Validators.required],
      specialNotes: ['']
    });
  }


  //called when the form submit button is clicked.
  //checks to see of all fields on form are valid.
  onSubmit() {
    if (this.newArtistForm.valid) {
      //creates a formValue object which will hold the form values.
      //uses spread operator to copy all current values.
      const formValue = { ...this.newArtistForm.value };
        //converts date values to a date object then to an ISO string, then matches to a YYYY-MM-DD format.
        formValue.dob = new Date(this.newArtistForm.value.dob).toISOString().split('T')[0];
        formValue.exhibition_date = new Date(this.newArtistForm.value.exhibition_date).toISOString().split('T')[0];
        formValue.is_featured_artist = Number(this.newArtistForm.value.isArtistFeatured ? 1 : 0);
      //calls artistsService to create a new artists entry in the database with the stored form values.
      this.artistsService.createNewArtist(formValue).subscribe({
        next: (createNewArtist) => {
          //console logging for debugging.
          console.log('new artist added to db', createNewArtist);
          this.newArtistForm.reset();
        },
        error: (error) => {
          console.error('could not send artist', error);
        }
      });
    }
  }
}
