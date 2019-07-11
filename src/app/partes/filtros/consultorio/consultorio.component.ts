import { Observable } from 'rxjs';

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IUsuarioId } from '../../../models/usuarioid.model';
import { UsuariosService } from '../../../servicios/usuarios.service';
import { Consultorios } from '../../../enums/consultorios.enum';

@Component({
  selector: 'app-consultorio',
  templateUrl: './consultorio.component.html',
  styleUrls: ['./consultorio.component.css']
})
export class ConsultorioComponent implements OnInit {

  @Output() filtrosAplicados = new EventEmitter();

  public ConsultorioControl: FormControl;
  public FiltroForm: FormGroup;
  private consultorios: Consultorios[];

  constructor(
    private builder: FormBuilder,
    private eService: UsuariosService
  ) {
    this.consultorios = [
      Consultorios.A, Consultorios.B, Consultorios.C, Consultorios.D,
      Consultorios.E, Consultorios.F, Consultorios.G
    ];
    this.ConsultorioControl = new FormControl(this.ConsultorioControl, [Validators.required]);
    this.FiltroForm = this.builder.group({ consultorios: this.ConsultorioControl });
  }
  public get ConsultoriosInput() {
    return this.FiltroForm.get('consultorios');
  }

  public get Consultorios(): Consultorios[] {
    return this.consultorios;
  }

  Filtrar() {
    const consultorio = this.ConsultoriosInput.value;
    this.filtrosAplicados.emit(consultorio);
  }


  ngOnInit() {
  }

}
