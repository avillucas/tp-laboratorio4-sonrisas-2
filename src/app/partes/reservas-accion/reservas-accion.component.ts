import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITurnoId } from '../../models/turnoid.model';
import { TurnosService } from '../../servicios/turnos.service';

@Component({
  selector: 'app-reservas-accion',
  templateUrl: './reservas-accion.component.html',
  styleUrls: ['./reservas-accion.component.css']
})
export class ReservasAccionComponent implements OnInit {

  //  turnos filtrados por especialista y dia
  @Input() iturnoid: ITurnoId;
  // cliente qu esta entrando a realializar una reserva
  @Input() clienteUID: string;

  @Output() completarEncuesta = new EventEmitter();
  @Output() cancelarTurno = new EventEmitter();

  constructor() { }

  get AccionDisponible(): string {
    const iturnoid = this.iturnoid;
    if (TurnosService.completoEncuesta(iturnoid, this.clienteUID)) {
      return 'encuestado';
    }
    if (TurnosService.esCancelablePorUsuario(iturnoid, this.clienteUID)) {
      return 'cancelar';
    }
    if (TurnosService.esEncuestablePorUsuario(iturnoid, this.clienteUID)) {
      return 'encuesta';
    }

  }

  CompletarEncuesta(iturnoid: ITurnoId) {
    this.completarEncuesta.emit(iturnoid);
  }

  CancelarTurno(iturnoid: ITurnoId) {
    this.cancelarTurno.emit(iturnoid);
  }


  ngOnInit() {
  }

}
