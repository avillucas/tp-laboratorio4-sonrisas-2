import { Component, OnInit, Input } from '@angular/core';
import { IUsuarioId } from 'src/app/models/usuarioid.model';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.css']
})
export class UsuariosListaComponent implements OnInit {

  @Input('UsuariosFiltrados') Usuarios: IUsuarioId[];

  constructor(private sService:UsuariosService) { }

  Borrar(usu: IUsuarioId) {
     // this.sService.borrar(usu.id);
  }

  ngOnInit() {
  }

}
