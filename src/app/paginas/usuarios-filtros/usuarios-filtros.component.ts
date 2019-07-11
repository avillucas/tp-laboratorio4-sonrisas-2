import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TipoUsuario } from 'src/app/enums/tipo-usuario.enum';


@Component({
  selector: 'app-usuarios-filtros',
  templateUrl: './usuarios-filtros.component.html',
  styleUrls: ['./usuarios-filtros.component.css']
})
export class UsuariosFiltrosComponent implements OnInit {

  @Output() filtrosAplicados = new EventEmitter();

  public TipoControl: FormControl;
  public FiltroForm: FormGroup;
  private tiposUsuario: TipoUsuario[];

  constructor(private builder: FormBuilder) {
    this.tiposUsuario = [TipoUsuario.administrador, TipoUsuario.especialista, TipoUsuario.recepcionista, TipoUsuario.cliente];
    this.TipoControl = new FormControl(this.TipoControl, [
      Validators.required
    ]);

    this.FiltroForm = this.builder.group({
      tipo: this.TipoControl,
    });

  }

  public get TipoInput() {
    return this.FiltroForm.get('tipo');
  }

  Filtrar() {
    this.filtrosAplicados.emit(this.TipoInput.value);
  }

  ngOnInit() {
    this.TipoInput.setValue(0);
  }

  public get TiposUsuario(): TipoUsuario[] {
    return this.tiposUsuario;
  }

}
