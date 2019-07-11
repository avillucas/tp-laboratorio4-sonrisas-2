import { Component, OnInit } from '@angular/core';
import { Consultorios } from '../../../enums/consultorios.enum';
import { UsuariosService } from '../../../servicios/usuarios.service';
import { TurnosService } from '../../../servicios/turnos.service';
import { IUsuarioId } from '../../../models/usuarioid.model';
import { ITurnoId } from '../../../models/turnoid.model';

@Component({
  selector: 'app-asignacion-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})
export class AsignacionTurnosComponent implements OnInit {


  private diaConsultado: Date;
  private especialista: IUsuarioId;
  private consultorio: Consultorios;
  private ocultarConsultorio: boolean;
  private ocultarSelectorFechas: boolean;
  private mostrarCarga: boolean;

  constructor(private uService: UsuariosService) {
    this.ocultarConsultorio = true;
    this.ocultarSelectorFechas = true;
    this.mostrarCarga = false;
  }

  get Especialista(): IUsuarioId {
    return this.especialista;
  }

  get Consultorio(): Consultorios {
    return this.consultorio;
  }

  get OcultarSelectorConsultorio(): boolean {
    return this.ocultarConsultorio;
  }

  get OcultarSelectorFechas(): boolean {
    return this.ocultarSelectorFechas;
  }

  get MostrarCarga(): boolean {
    return this.mostrarCarga;
  }

  EspecialistaSeleccionado(especialista: IUsuarioId) {
    this.especialista = especialista;
    this.ocultarConsultorio = false;
  }

  ConsultorioSeleccionado(consultorio: Consultorios) {
    this.consultorio = consultorio;
    this.ocultarSelectorFechas = false;
  }

  FechaSeleccionada(fecha: Date) {
    this.diaConsultado = fecha;
    this.mostrarCarga = true;
  }

  Cargar() {
    const iturnosid: Array<ITurnoId> = TurnosService.generarTurnosDisponiblesTodoElDia(
      this.diaConsultado,
      this.consultorio,
      this.especialista
    );
    this.uService.agregarTurnos(iturnosid).then(res => {
      alert('turnos agregados')
    },
      error => {
        console.info(error);
        alert('error al agregar turnos')
      });
  }

  public get DiaConsultado(): Date {
    return this.diaConsultado;
  }

  ngOnInit() {
  }

}
