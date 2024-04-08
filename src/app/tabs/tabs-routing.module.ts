import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'artists-list',
        loadChildren: () => import('../pages/artists-list/artists-list.module').then(m => m.ArtistsListPageModule)
      },
      {
        path: 'featured-artists',
        loadChildren: () => import('../pages/featured-artists/featured-artists.module').then(m => m.FeaturedArtistsPageModule)
      },
      {
        path: 'modify-artists',
        loadChildren: () => import('../pages/modify-artists/modify-artists.module').then(m => m.ModifyArtistsPageModule)
      },
      {
        path: 'new-artist',
        loadChildren: () => import('../pages/new-artist/new-artist.module').then(m => m.NewArtistPageModule)
      },
      {
        path: 'search-artists',
        loadChildren: () => import('../pages/search-artists/search-artists.module').then(m => m.SearchArtistsPageModule)
      },
      {
        path: 'privacy-policy',
        loadChildren: () => import('../pages/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyPageModule)
      },
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
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
