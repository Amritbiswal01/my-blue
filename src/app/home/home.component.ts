import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AppService]
})
export class HomeComponent implements OnInit {
  data:any = [
    {
      username:"userInput",
      password:"userInput"
    }
  ];

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  onClicked(){
    this.appService.storeData(this.data);
  }

}
