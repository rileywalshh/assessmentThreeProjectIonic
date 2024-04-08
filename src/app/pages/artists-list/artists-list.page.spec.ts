import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtistsListPage } from './artists-list.page';

describe('ArtistsListPage', () => {
  let component: ArtistsListPage;
  let fixture: ComponentFixture<ArtistsListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
