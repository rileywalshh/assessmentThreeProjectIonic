import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-artist',
  templateUrl: './new-artist.page.html',
  styleUrls: ['./new-artist.page.scss'],
})
export class NewArtistPage implements OnInit {
  newArtistForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.newArtistForm = this.formBuilder.group({
      name: ['', Validators.required],
      DOB: [null, Validators.required],
      gender: ['', Validators.required],
      artWorkType: ['', Validators.required],
      contactInfo: ['', Validators.required],
      exhibitionDate: [null, Validators.required],
      specialNotes: [''],
      isArtistFeatured: [false]
    });
  }


  onSubmit() {
    if (this.newArtistForm.valid){
      const formValue = {...this.newArtistForm.value};
      console.log(this.newArtistForm.value);
    }
  }
}
