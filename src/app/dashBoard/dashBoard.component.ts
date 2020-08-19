import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashBoard',
  templateUrl: './dashBoard.component.html',
  styleUrls: ['./dashBoard.component.scss']
})
export class DashBoardComponent implements OnInit {

  constructor() { }
  
  public title= 'DashBoard';

  ngOnInit() {
  }

}
