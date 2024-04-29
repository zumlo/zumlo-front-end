import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ZStorageService } from '../../services/z-storage/storage.service';

export const authGuard: CanActivateFn = (route, state) => {
  const store = inject(ZStorageService) //Injecting the service.
  const router = inject(Router)

  // Getting the token information from local storage.
  const token = store.getSessionStorage('token');
  if (!token) {
    router.navigateByUrl('/auth'); // If no token is found, then user will be redirected to the login screen.
    return false;
  }
  return true;
};
