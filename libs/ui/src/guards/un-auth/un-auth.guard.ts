import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ZStorageService } from '../../services/z-storage/storage.service';

export const unAuthGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const _storage = inject(ZStorageService);

  let token = _storage.getSessionStorage('token');
  if (!token)
    return true; // If there is no token then redirect to main login screen.
  else {
    // TODO will add the route as according to the routes.
    router.navigateByUrl('/super-admin') // If user refreshes screen then redirect to dashboard screen.
    return false;
  }
};
