import { Aluno } from './../models/Aluno';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlunoService } from './aluno.service';

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
  public modalRef: BsModalRef;

  public alunos: Aluno[];



  constructor(private fb: FormBuilder, private modalService: BsModalService,
    private alunoService: AlunoService) {
    this.criarForm();
  }
  ngOnInit() {

    this.carregarAlunos();
  }

  carregarAlunos() {
    this.alunoService.getAll().subscribe(
      (alunos: Aluno[]) => {
        this.alunos = alunos;
      },
      (erro: any) => {
        console.error(erro);
      }

    );
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  salvarAluno(aluno: Aluno) {
    this.alunoService.put(aluno.id, aluno).subscribe(
      (aluno: Aluno) => {
        console.log(aluno);
      },
      (erro: any) => {
        console.log(erro);
      }
    );
  }

  alunoSubmit(): void {
    this.salvarAluno(this.alunoForm.value);
    this.carregarAlunos();
    console.log(this.alunoForm.value);
  }

  criarForm(): void {
    this.alunoForm = this.fb.group({
      id: [''],
      nome: ['', Validators.required],
      sobrenome: [''],
      telefone: ['']
    });
  }


  alunoSelect(aluno: Aluno): void {
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }
  voltar(): void {
    this.alunoSelecionado = null;
  }
}
