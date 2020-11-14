import { Professor } from './../models/Professor';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProfessorService } from './professor.service';


@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.scss']
})
export class ProfessoresComponent implements OnInit {


  public title = 'Professores';
  public profSelecionado: Professor;
  public profForm: FormGroup;
  public modalRef: BsModalRef;

  public professores: Professor[];

  constructor(private fb: FormBuilder, private modalService: BsModalService, private professorservice: ProfessorService) {
    this.criarForm();
  }
  ngOnInit(): void {

    this.carregarProfessor();
  }

  carregarProfessor() {

    this.professorservice.getAll().subscribe(

      (professores: Professor[]) => {

        this.professores = professores;
      },
      (error: any) => {

        console.log(error);
      }
    );
  }
  salvarProfessor(professor: Professor) {

    this.professorservice.put(professor.id, professor).subscribe(
      (professor: Professor) => {
        console.log(professor);
      },
      (error: any) => {
        console.log(error);
      }
    );

  }



  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  criarForm() {
    this.profForm = this.fb.group({
      id: [''],
      nome: ['', Validators.required]
    });
  }

  profSubmit() {

    this.salvarProfessor(this.profForm.value);
    this.carregarProfessor();
    console.log(this.profForm.value);

  }
  profSelect(professor: Professor) {
    this.profSelecionado = professor;
    this.profForm.patchValue(professor);
  }
  voltar() {
    this.profSelecionado = null;
  }

}