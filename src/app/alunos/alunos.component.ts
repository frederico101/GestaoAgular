import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public title = "Alunos";
  public alunoSelecionado: string;

  public alunos = [
    { id: 1, name: 'Frederico', secondeName: 'brito', age: '35' },
    { id: 2, name: 'Aline', secondeName: 'brito', age: '35' },
    { id: 3, name: 'Nathan', secondeName: 'brito', age: '2' },
    { id: 4, name: 'AnaAlice', secondeName: 'brito', age: '5' }
  ];

  alunoSelect(aluno: any) {
    this.alunoSelecionado = aluno.name;
  }
  voltar()
  {
    this.alunoSelecionado = '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
