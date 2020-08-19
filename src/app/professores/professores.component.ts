import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.scss']
})
export class ProfessoresComponent implements OnInit {

  constructor() { }
  public title = "Professores";
  public professores = ["Jesus", "Frederico", "Aline"];

  ngOnInit() {
  }

}
