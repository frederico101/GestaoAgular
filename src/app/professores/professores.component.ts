import { Professor } from './../models/Professor';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.scss']
})
export class ProfessoresComponent implements OnInit {


  public title = 'Professores';
  public profSelecionado: Professor;
  public profForm: FormGroup;

  public professores = [
    { id: 1, name: 'Frederico', disciplina: 'programanção' },
    { id: 2, name: 'Aline', disciplina: 'literatura' },
    { id: 3, name: 'Jesus', disciplina: 'biologia' }
  ];

  constructor(private fb: FormBuilder) {
    this.criarForm();
  }
  ngOnInit(): void {
  }

  criarForm(){
    this.profForm = this.fb.group({
      name: ['', Validators.required],
      disciplina: ['']
    });
  }

   profSubmit(){
    console.log(this.profForm.value);
  }
  profSelect(professor: Professor){
    this.profSelecionado = professor;
    this.profForm.patchValue(professor);
  }
  voltar(){
    this.profSelecionado = null;
  }



}
