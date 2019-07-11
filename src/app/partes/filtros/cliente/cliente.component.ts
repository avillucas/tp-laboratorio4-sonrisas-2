import { Observable } from 'rxjs';

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IUsuarioId } from '../../../models/usuarioid.model';
import { UsuariosService } from '../../../servicios/usuarios.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  @Output() filtrosAplicados = new EventEmitter();

  public ClientesControl: FormControl;
  public FiltroForm: FormGroup;
  private clientes: Observable<IUsuarioId[]>;

  constructor(
    private builder: FormBuilder,
    private eService: UsuariosService
  ) {
    this.clientes = this.eService.traerClientes();
    this.ClientesControl = new FormControl(this.ClientesControl, [Validators.required]);
    this.FiltroForm = this.builder.group({ clientesf: this.ClientesControl });
  }
  public get ClienteInput() {
    return this.FiltroForm.get('clientesf');
  }

  public get Clientes(): Observable<IUsuarioId[]> {
    return this.clientes;
  }


  Filtrar() {
    const cliente = this.ClientesControl.value;
    this.filtrosAplicados.emit(cliente);
  }

  ngOnInit() {
  }
}
