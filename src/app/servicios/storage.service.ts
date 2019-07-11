import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  uploadPercent: Observable<number>;
  //downloadURL: Observable<string>;
  constructor(private storage: AngularFireStorage) {
    //this.downloadURL = new Observable<string>();
    this.uploadPercent = new Observable<number>();
  }

  public Referencia(UID: string): AngularFireStorageReference {
    const filePath = environment.storage.profileFolder + '/' + UID;
    return this.storage.ref(filePath);
  }

  uploadFileOnEvent(event, UID: string): Observable<any> {
    const file = event.target.files[0];
    const fileRef = this.Referencia(UID);
    const task = fileRef.put(file);
    // observe percentage changes
    this.uploadPercent = task.percentageChanges();

    return task.snapshotChanges();
  }


}
