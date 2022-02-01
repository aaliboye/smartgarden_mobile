import { JardinService } from './../services/jardin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  locations: any[]

  constructor(private jarService: JardinService) {}

  ngOnInit(): void {
      this.locations = this.jarService.getJardins()
  }


}
