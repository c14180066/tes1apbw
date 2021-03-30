import { Component } from '@angular/core';
import { FotoserviceService } from '../fotoservice.service';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  urlImageStorage: string[] = [];

  constructor(private afStorage : AngularFireStorage, public fotoService: FotoserviceService) {}

  filePathTemp = "";
  dataImageTemp : File

  klik(isi1, isi2){
    console.log(isi1)
    console.log(isi2)
    this.filePathTemp = isi1
    this.dataImageTemp = isi2
  }
  
  

  async ngOnInit(){
    await this.fotoService.loadFoto();
  }
  TambahFoto(){
    this.fotoService.tambahFoto();
  }

  uploadFoto(){
    const imgFilePath = `imgStorage/${this.filePathTemp}`
    this.afStorage.upload(imgFilePath, this.dataImageTemp).then(() => {
      this.afStorage.storage.ref().child(imgFilePath).getDownloadURL().then((url) => {
        this.urlImageStorage.unshift(url)
      });
    }); 
  }
}
