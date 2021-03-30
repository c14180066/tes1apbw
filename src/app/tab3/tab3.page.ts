import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FotoserviceService } from '../fotoservice.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public fotoService: FotoserviceService, private router: Router) {}

  gambar:string;

}
