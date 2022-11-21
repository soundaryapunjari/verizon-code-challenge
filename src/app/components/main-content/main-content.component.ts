import { Component } from '@angular/core';
import {DataService} from "../../services/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {
  currentDate = new Date();
  isMenu = false;
  constructor(public router: Router, private dataService: DataService) {
    this.dataService.menuClick.subscribe(val=>{
      this.isMenu =  val;
    });

  }

  onMenuItem(url: string){
    this.router.navigateByUrl(url)
  }


}
