import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'new-artist',
    loadChildren: () => import('./pages/new-artist/new-artist.module').then( m => m.NewArtistPageModule)
  },
  {
    path: 'artists-list',
    loadChildren: () => import('./pages/artists-list/artists-list.module').then( m => m.ArtistsListPageModule)
  },
  {
    path: 'search-artists',
    loadChildren: () => import('./pages/search-artists/search-artists.module').then( m => m.SearchArtistsPageModule)
  },
  {
    path: 'featured-artists',
    loadChildren: () => import('./pages/featured-artists/featured-artists.module').then( m => m.FeaturedArtistsPageModule)
  },
  {
    path: 'modify-artists',
    loadChildren: () => import('./pages/modify-artists/modify-artists.module').then( m => m.ModifyArtistsPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
