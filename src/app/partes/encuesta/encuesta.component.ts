import { ITurnoId } from './../../models/turnoid.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { IEncuestaId } from '../../models/encuestaid.model';
import { IEncuesta } from '../../models/encuesta.model';
import { EncuestasService } from 'src/app/servicios/encuestas.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  @Output() guardarEncuesta = new EventEmitter();
  @Input() iturnoid: ITurnoId;

  private puntajeMaximo: number;
  public ExperienciaControl: FormControl;
  public PuntajeClinicaControl: FormControl;
  public PuntajeEspecialistaControl: FormControl;
  public EncuestaForm: FormGroup;

  constructor(
    private builder: FormBuilder
  ) {
    this.puntajeMaximo = environment.encuesta.puntajeMaximo;
    this.ExperienciaControl = new FormControl(this.ExperienciaControl, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(66)
    ]);

    this.PuntajeClinicaControl = new FormControl(this.PuntajeClinicaControl, [
      Validators.required
    ]);

    this.PuntajeEspecialistaControl = new FormControl(this.PuntajeClinicaControl, [
      Validators.required
    ]);

    this.EncuestaForm = this.builder.group({
      experiencia: this.ExperienciaControl,
      puntajeClinica: this.PuntajeClinicaControl,
      puntajeEspecialista: this.PuntajeEspecialistaControl
    });
  }

  public get ExperienciaInput() {
    return this.EncuestaForm.get('experiencia');
  }

  public get Puntajes() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  public get PuntajeClinicaInput() {
    return this.EncuestaForm.get('puntajeClinica');
  }

  public get PuntajeEspecialistaInput() {
    return this.EncuestaForm.get('puntajeEspecialista');
  }
  public get PuntajeMaximo(): number {
    return this.puntajeMaximo;
  }

  Guardar() {
    const puntajeClinica = this.PuntajeClinicaInput.value;
    const puntajeEspecialista = this.PuntajeEspecialistaInput.value;
    const experiencia = this.ExperienciaInput.value;
    const iencuestaid = EncuestasService.crearIEncuestaId(this.iturnoid, puntajeClinica, puntajeEspecialista, experiencia);
    this.guardarEncuesta.emit(iencuestaid);
    this.reset();
  }

  private reset() {
    this.PuntajeClinicaInput.setValue(5);
    this.PuntajeEspecialistaInput.setValue(5);
    this.ExperienciaInput.setValue('');
  }
  ngOnInit() {
    this.reset();
  }
}
