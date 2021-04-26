import { Component, OnInit } from '@angular/core';
import { ServicesService} from '../services.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name: any;
  department: any;

  constructor(private api:ServicesService) {}

  ngOnInit(){
    this.getData();
  }

  getData(){
    return this.api.getDetails().subscribe(data => {
      console.log("API DATA:", data);
      this.name = data;
    })
    }
}

