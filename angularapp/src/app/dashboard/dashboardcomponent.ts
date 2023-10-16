import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FileService } from '../file.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service: ServiceService, private fireStorage: AngularFireStorage, private fileService: FileService) {
  }
  ngOnInit(): void {
  }
  logout() {
    this.service.logout();
  }

  abc: any = "../";
  async onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      console.log(file);
      const path = `yt/${file.name}`;
      const upload = await this.fireStorage.upload(path, file);
      const url = await upload.ref.getDownloadURL();
      console.log(url);
      this.abc = url;

    }
  }
}
