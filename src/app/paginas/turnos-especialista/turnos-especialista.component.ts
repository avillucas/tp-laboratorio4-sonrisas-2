import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TurnosService } from 'src/app/servicios/turnos.service';
import { ITurnoId } from '../../models/turnoid.model';
import { AuthService } from '../../servicios/auth.service';
import { IUsuarioId } from '../../models/usuarioid.model';
import { IUsuario } from '../../models/usuario.model';
import { UsuariosService } from '../../servicios/usuarios.service';
import { Usuario } from '../../clases/usuario';


@Component({
  selector: 'app-turnos-especialista',
  templateUrl: './turnos-especialista.component.html',
  styleUrls: ['./turnos-especialista.component.css']
})
export class TurnosEspecialistaComponent implements OnInit {

  heading = 'Turnos';
  subheading = 'Turnos reservados por clientes';
  icon = 'pe-7s-display1 icon-gradient bg-premium-dark';

  private diaConsultado: Date;
  private atenciones: Observable<ITurnoId[]>;
  private especialista: IUsuarioId;
  private mostrarResena: boolean;
  private turnoResenado: ITurnoId;

  constructor(
    private tService: TurnosService,
    private aService: AuthService
  ) {
    this.mostrarResena = false;
    this.diaConsultado = new Date();
    this.aService.user$.subscribe(
      (iusuario: IUsuario) => {
        this.especialista = { id: this.aService.CurrentUID, usuario: UsuariosService.DataDAO(iusuario) } as IUsuarioId;
      });
  }

  public get DiaConsultado(): Date {
    return this.diaConsultado;
  }

  public get MostrarResena(): boolean {
    return this.mostrarResena;
  }

  public get TurnoResenado(): ITurnoId {
    return this.turnoResenado;
  }

  public get EspecialistaUID(): string {
    return this.especialista.id;
  }

  public get Especialista(): IUsuarioId {
    return this.especialista;
  }

  public get CurrentUID(): string {
    return this.aService.CurrentUID;
  }

  public get Atenciones(): Observable<ITurnoId[]> {
    return this.atenciones;
  }

  public MarcarAsistencia(iturnoid: ITurnoId) {
    this.mostrarResena = true;
    this.turnoResenado = iturnoid;
  }

  public GuardarResena(iturnoid: ITurnoId) {
    this.tService.CargarResena(iturnoid);
    this.mostrarResena = false;
  }

  public MarcarFalta(iturnoid: ITurnoId) {
    this.tService.MarcarFalta(iturnoid);
  }

  AplicarFiltros(diaConsultado: Date) {
    this.diaConsultado = diaConsultado;
    this.buscarAtenciones();
  }
  private buscarAtenciones() {
    this.atenciones = this.tService.traerAtencionesPorDiaEspecialista(this.diaConsultado, this.CurrentUID);
  }

  ngOnInit() {
    this.buscarAtenciones();
  }

}
