import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZIndexDbService {

    private db!: IDBDatabase;
  
    constructor() { }
  
    initializeDB() {
      return new Promise<void>((resolve, reject) => {
        const request = window.indexedDB.open('zumlo', 1);  
        request.onerror = (event) => {
          reject(event);
        };  
        request.onsuccess = (event) => {
          this.db = (event.target as any).result;
          resolve();
        };  
        request.onupgradeneeded = (event) => {
          this.db = (event.target as any).result;
          const store = this.db.createObjectStore('ecd', { keyPath: 'id', autoIncrement: true });
        };
      });
    }
  
    addObject(object: any) {
      let data = {ecd:btoa(JSON.stringify(object))}
      const transaction = this.db.transaction(['ecd'], 'readwrite');
      const store = transaction.objectStore('ecd');
      transaction.onerror = (event:any) => {
        console.error('Transaction error:', event.target.error);
      };
      const request = store.add(data);
      request.onsuccess = (event:any) => {
      };
      request.onerror = (event:any) => {
        console.error('Error adding data:', event.target.error);
      };
    }
  
    getAllObjects(): Promise<any[]> {
      return new Promise<any[]>((resolve, reject) => {
        const transaction = this.db.transaction(['ecd'], 'readonly');
        const store = transaction.objectStore('ecd');
        const request = store.getAll();
        request.onerror = (event) => {
          reject(event);
        };
        request.onsuccess = (event) => {
          const objects = (event.target as any).result;
          resolve(objects);
        };
      });
    }
  




}
