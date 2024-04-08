import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewArtistPage } from './new-artist.page';

describe('NewArtistPage', () => {
  let component: NewArtistPage;
  let fixture: ComponentFixture<NewArtistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewArtistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
