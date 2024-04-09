import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      //defines a path to home. when URL matches home the route is activated.
      //imports the home module, on load it returns the HomePageModule so it can be used.
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
      },
      //defines a path to artists-list. when URL matches artist-list the route is activated.
      //imports the artist-list module, on load it returns the ArtistListPageModule so it can be used.
      {
        path: 'artists-list',
        loadChildren: () => import('../pages/artists-list/artists-list.module').then(m => m.ArtistsListPageModule)
      },
      //defines a path to featured-artists. when URL matches featured-artists the route is activated.
      //imports the featured-artists module, on load it returns the FeaturedArtistsPageModule so it can be used.
      {
        path: 'featured-artists',
        loadChildren: () => import('../pages/featured-artists/featured-artists.module').then(m => m.FeaturedArtistsPageModule)
      },
      //defines a path to modify-artists. when URL matches modify-artists the route is activated.
      //imports the modify-artists module, on load it returns the ModifyArtistsPageModule so it can be used.
      {
        path: 'modify-artists',
        loadChildren: () => import('../pages/modify-artists/modify-artists.module').then(m => m.ModifyArtistsPageModule)
      },
      //defines a path to new-artists. when URL matches new-artists the route is activated.
      //imports the new-artists module, on load it returns the NewArtistsPageModule so it can be used.
      {
        path: 'new-artist',
        loadChildren: () => import('../pages/new-artist/new-artist.module').then(m => m.NewArtistPageModule)
      },
      //defines a path to search-artists. when URL matches search-artists the route is activated.
      //imports the search-artists module, on load it returns the SearchArtistsPageModule so it can be used.
      {
        path: 'search-artists',
        loadChildren: () => import('../pages/search-artists/search-artists.module').then(m => m.SearchArtistsPageModule)
      },
      //defines a path to privacy-policy. when URL matches privacy-policy the route is activated.
      //imports the privacy-policy module, on load it returns the PrivacyPolicyPageModule so it can be used.
      {
        path: 'privacy-policy',
        loadChildren: () => import('../pages/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyPageModule)
      },
      //sets default path to home.
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
