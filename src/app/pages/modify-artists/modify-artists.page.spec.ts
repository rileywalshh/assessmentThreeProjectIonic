import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifyArtistsPage } from './modify-artists.page';

describe('ModifyArtistsPage', () => {
  let component: ModifyArtistsPage;
  let fixture: ComponentFixture<ModifyArtistsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyArtistsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
