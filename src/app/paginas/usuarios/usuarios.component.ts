import { Component, OnInit } from '@angular/core';
import { IUsuarioId } from 'src/app/models/usuarioid.model';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { TipoUsuario } from 'src/app/enums/tipo-usuario.enum';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {


  private usuariosFiltrados: any;
  private tipoAMostrar: TipoUsuario;

  public get UsuariosFiltrados(): any {
    return this.usuariosFiltrados;
  }

  constructor(private uService: UsuariosService) { }

  aplicarFiltros(tipo: TipoUsuario) {
    this.usuariosFiltrados = this.uService.traerPorTipo(tipo);
  }

  ngOnInit() {
    this.usuariosFiltrados = this.uService.traerPorTipo(TipoUsuario.cliente);
  }

}
