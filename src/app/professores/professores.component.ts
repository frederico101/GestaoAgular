import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.scss']
})
export class ProfessoresComponent implements OnInit {

  constructor() { }
  public title = "Professores";
  public profSelecionado: string;
  public professores = [
    { id: 1, name: 'Frederico', secondeName: 'brito', Age: '35', disciplina:'programanção' },
    { id: 2, name: 'Aline', secondeName: 'brito', Age: '35'    , disciplina:'literatura' },
    { id: 3, name: 'Jesus', secondeName: 'Cristo', Age: '70*7' , disciplina:'biologia' }
  ];

  profSelect(professor: any)
  {
    this.profSelecionado = professor.name; 
  }
  voltar()
  {
    this.profSelecionado = '';
  }

  ngOnInit() {
  }

}
