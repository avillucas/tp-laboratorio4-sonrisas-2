import { Observable } from 'rxjs';

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IUsuarioId } from '../../../models/usuarioid.model';
import { UsuariosService } from '../../../servicios/usuarios.service';
import { IUsuario } from '../../../models/usuario.model';

@Component({
  selector: 'app-especialista',
  templateUrl: './especialista.component.html',
  styleUrls: ['./especialista.component.css']
})
export class SelectorEspecialistaComponent implements OnInit {

  @Output() filtrosAplicados = new EventEmitter();

  public EspecialistaControl: FormControl;
  public FiltroForm: FormGroup;
  private especialistas: Observable<IUsuarioId[]>;

  constructor(
    private builder: FormBuilder,
    private eService: UsuariosService
  ) {
    this.especialistas = this.eService.traerEspecialistas();
    this.EspecialistaControl = new FormControl(this.EspecialistaControl, [Validators.required]);
    this.FiltroForm = this.builder.group({ especialista: this.EspecialistaControl });
  }
  public get EspecialistasInput() {
    return this.FiltroForm.get('especialista');
  }

  public get Especialistas(): Observable<IUsuarioId[]> {
    return this.especialistas;
  }

  Filtrar() {
    const especialista: IUsuarioId = this.EspecialistasInput.value as IUsuarioId;
    this.filtrosAplicados.emit(especialista);
  }

  ngOnInit() {
  }
}
