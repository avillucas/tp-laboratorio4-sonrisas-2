import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TurnosService } from 'src/app/servicios/turnos.service';
import { ITurnoId } from '../../models/turnoid.model';
import { AuthService } from '../../servicios/auth.service';
import { IUsuarioId } from '../../models/usuarioid.model';
import { IUsuario } from '../../models/usuario.model';
import { UsuariosService } from '../../servicios/usuarios.service';
import { Usuario } from '../../clases/usuario';
import { IEncuesta } from '../../models/encuesta.model';
import { EncuestasService } from '../../servicios/encuestas.service';
import { IEncuestaId } from '../../models/encuestaid.model';

@Component({
  selector: 'app-turnos-recepcionista',
  templateUrl: './turnos-recepcionista.component.html',
  styleUrls: ['./turnos-recepcionista.component.css']
})
export class TurnosRecepcionistaComponent implements OnInit {

  private diaConsultado: Date;
  private turnos: Observable<ITurnoId[]>;
  private reservas: Observable<ITurnoId[]>;
  private especialista: IUsuarioId;
  private cliente: IUsuarioId;
  private ocultarSelectorFechas: boolean;
  private ocultarTablaTurnos: boolean;
  private turnoEncuestado: ITurnoId;
  private mostrarReservasPrevias: boolean;
  private mostrarReservaTurnos: boolean;


  constructor(
    private tService: TurnosService,
    private uService: UsuariosService,
    private aService: AuthService,
    private eService: EncuestasService
  ) {
    this.mostrarReservaTurnos = false;
    this.mostrarReservasPrevias = false;
    this.ocultarSelectorFechas = true;
    this.ocultarTablaTurnos = true;
    this.aService.user$.subscribe(
      (iusuario: IUsuario) => {
        this.cliente = { id: this.aService.CurrentUID, usuario: UsuariosService.DataDAO(iusuario) } as IUsuarioId;
      });
  }

  public get MostrarReservasPrevias(): boolean {
    return this.mostrarReservasPrevias;
  }

  public get MostrarReservaTurnos(): boolean {
    return this.mostrarReservaTurnos;
  }

  public get OcultarSelectorFechas(): boolean {
    return this.ocultarSelectorFechas;
  }

  public get TurnoEncuestado(): ITurnoId {
    return this.turnoEncuestado;
  }

  public get DiaConsultado(): Date {
    return this.diaConsultado;
  }

  public get EspecialistaUID(): string {
    return this.especialista.id;
  }

  public get Especialista(): IUsuarioId {
    return this.especialista;
  }

  public get Cliente(): IUsuarioId {
    return this.cliente;
  }

  public get CurrentUID(): string {
    return this.aService.CurrentUID;
  }

  public get Turnos(): Observable<ITurnoId[]> {
    return this.turnos;
  }

  public get Reservas(): Observable<ITurnoId[]> {
    return this.reservas;
  }

  public get OcultarTablaTurnos() {
    return this.ocultarTablaTurnos;
  }

  public ReservarTurno(iturnoid: ITurnoId) {
    iturnoid.turno.clienteUID = this.cliente.id;
    iturnoid.turno.clienteNombre = this.cliente.usuario.Nombre;
    this.tService.Reservar(iturnoid);
  }

  public CancelarTurno(iturnoid: ITurnoId) {
    this.tService.Cancelar(iturnoid);
  }

  ClienteSeleccionado(cliente: IUsuarioId) {
    this.cliente = cliente;
    this.buscarReservas();
    this.mostrarReservaTurnos = true;
    this.mostrarReservasPrevias = true;
  }

  EspecialistaSeleccionado(especialista: IUsuarioId) {
    this.especialista = especialista;
    this.ocultarSelectorFechas = false;
  }

  AplicarFiltros(diaConsultado: Date) {
    this.diaConsultado = diaConsultado;
    this.buscarTurnos();
  }

  private buscarTurnos() {
    this.ocultarTablaTurnos = false;
    this.turnos = this.tService.traerPorDiaEspecialista(this.diaConsultado, this.especialista.id);
  }

  private buscarReservas() {
    this.reservas = this.tService.traerReservasPorUsuario(this.Cliente.id);
  }

  ngOnInit() {

  }


}
