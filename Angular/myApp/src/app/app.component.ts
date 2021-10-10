import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  isAuth = false;

  lastUpdate = new Date();

 
  
  appareils: any[] | undefined;

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    )
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }

  onAllumer(){
    console.log('On allume tout !');
  }
}
