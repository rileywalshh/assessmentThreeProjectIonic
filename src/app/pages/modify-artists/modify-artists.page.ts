//imports for angular elements, artists interface and artists service.
import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/Artist';
import { ArtistsService } from 'src/app/services/artists.service';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app--modify-artists',
  templateUrl: './modify-artists.page.html',
  styleUrls: ['./modify-artists.page.scss'],
})

//components class.
//array to store the artists data, starts empty but is populated with data from url.
export class ModifyArtistsPage implements OnInit {
  artists: Artist[] = [];
  editArtistForm: FormGroup;
  currentArtist_id: string | null = null;

  //constructor.
  //injects ArtistsService into this component.
  constructor(private artistsService: ArtistsService, private alertController: AlertController, private formBuilder: FormBuilder) { 
    this.editArtistForm = this.formBuilder.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      artwork_type: ['', Validators.required],
      contact_info: ['', Validators.required],
      exhibition_date: ['', Validators.required],
      is_featured_artist: [''],
      special_notes: ['']
    });
  }

  //on component init, calls load artists.
  ngOnInit() {
    this.loadArtistsList();
   }

   //fetches and loads the current db of artists.
  loadArtistsList() {
    this.artistsService.getArtists().subscribe((data) => {
      this.artists = data.map(artist => ({
        ...artist, dob: new Date(artist.dob), exhibition_date: new Date(artist.exhibition_date)
      }));
    }
  )
  }

  //for deletion of an artist, when delete is clicked it checks for the name of the artist on that row, and deletes it.
  deleteArtist(name: string) {
    this.artistsService.deleteArtist(name).subscribe({
      next: () => {
        //Refreshes after deletion and logs to the console if it worked.
        console.log('entry deleted');
        this.loadArtistsList();
      },
      //Logs to the console if it could not delete.
      error: (err) => console.error('Error deleting entry', err)
    });
}

//This alert was based off an examples seen on youtube and stackoverflow.
//Creates a pop up/alert asking the user to confirm its deletion.
//if confirmed, it calls deleteArtist() with the name of the artist on the same row as the pressed button.
async confirmDeleteAlert(name: string) {
  const alert = await this.alertController.create({
    header: 'Please confirm',
    message: 'Are you sure you want to delete this entry?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          //for debugging used console logging.
          console.log('Deletion cancelled');
        }
      }, {
        text: 'Delete',
        handler: () => {
          this.deleteArtist(name);
        }
      }
    ]
  });
  await alert.present();
}
}
