import { Route } from '@angular/router';
import { PageNotFoundComponent, unAuthGuard } from '@zumlo/ui';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
    canActivate: [unAuthGuard]
  },
  {
    path: '',
    loadChildren: () =>
      import('./features/features.module').then(
        (m) => m.FeaturesModule
      ),
  },
  {
    path: '**', component:PageNotFoundComponent
  }
];
