import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { IUsuario } from '../../models/usuario.model';

@Component({
  selector: 'app-partes-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class PartesMenuComponent implements OnInit {

  constructor(
    private aService: AuthService
  ) { }

  public get Iusuario(): Observable<IUsuario> {
    return this.aService.user$;
  }
  ngOnInit() {
  }

}
