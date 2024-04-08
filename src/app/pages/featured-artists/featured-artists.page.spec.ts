import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturedArtistsPage } from './featured-artists.page';

describe('FeaturedArtistsPage', () => {
  let component: FeaturedArtistsPage;
  let fixture: ComponentFixture<FeaturedArtistsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedArtistsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
