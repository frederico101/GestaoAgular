import { Aluno } from './../models/Aluno';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public title = 'Alunos';
  public alunoSelecionado: Aluno;
  public text: string;
  public alunoForm: FormGroup;

  public alunos = [
    { id: 1, name: 'Frederico', secondName: 'brito', age: '35' },
    { id: 2, name: 'Aline', secondName: 'brito', age: '35' },
    { id: 3, name: 'Nathan', secondName: 'brito', age: '2' },
    { id: 4, name: 'AnaAlice', secondName: 'brito', age: '5' }
  ];
  constructor(private fb: FormBuilder){
    this.criarForm();
   }

  ngOnInit(): void {
  }
  alunoSubmit(): void{
    console.log(this.alunoForm.value);
  }

  criarForm(): void
  {
    this.alunoForm = this.fb.group({
      name: ['', Validators.required],
      secondName: [''],
      age: ['']
    });
  }

  alunoSelect(aluno: Aluno): void {
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }
  voltar(): void
  {
    this.alunoSelecionado = null;
  }



}
