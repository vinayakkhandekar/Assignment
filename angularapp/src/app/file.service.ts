import { Injectable } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/compat/storage';
import {AngularFirestore} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private fileStrore : AngularFirestore ,private fileStorage:AngularFireStorage) { }
  //save  data to firebase
  // saveMetaDataOfFile(fileObj:FileMetaData)
  // {
  //   const fileMeta={
  //     id:fileObj.id,
  //     file:fileObj.file,
  //     name:fileObj.name,
      
  //     url:fileObj.url,
  //     size:fileObj.size,
  //   }
  //   fileMeta.id=this.fileStrore.createId();
  //   this.fileStrore.collection('/Upload').add(fileMeta);
  // }
//display files
  getAllFiles()
  {
   return this.fileStrore.collection('/Upload').snapshotChanges();
  }
}

