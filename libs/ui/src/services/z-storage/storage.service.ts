import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZStorageService {

  // This service is for adding the local and session storage user can use this dynamically through this service.
  constructor() { }

  setSessionStorage(name: string,value: any) {
    sessionStorage.setItem(name, value);
  }

  getSessionStorage(name:string) {
    return sessionStorage.getItem(name);
  }

  clearSessionStorage(){
    return sessionStorage.clear();
  }

  removeSession(name:string) {
    sessionStorage.removeItem(name);
  }

  // localStorage

  saveLocalstorage(name: string, value: any){
   return localStorage.setItem(name, value);
  }

  getLocalStorage(name: string){
   return localStorage.getItem(name);
  }

  removeLocal(key: string) {
    localStorage.removeItem(key);
  }
}
