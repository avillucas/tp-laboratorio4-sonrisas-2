import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITurnoId } from '../../models/turnoid.model';
import { TurnosService } from '../../servicios/turnos.service';

@Component({
  selector: 'app-turnos-accion',
  templateUrl: './turnos-accion.component.html',
  styleUrls: ['./turnos-accion.component.css']
})
export class TurnosAccionComponent implements OnInit {

  //  turnos filtrados por especialista y dia
  @Input() iturnoid: ITurnoId;
  // cliente qu esta entrando a realializar una reserva
  @Input() clienteUID: string;

  @Output() reservarTurno = new EventEmitter();
  @Output() cancelarTurno = new EventEmitter();

  constructor() { }

  get AccionDisponible(): string {
    const iturnoid = this.iturnoid;
    if (TurnosService.estaReservado(iturnoid)) {
      // tslint:disable-next-line: triple-equals
      if (TurnosService.esCancelablePorUsuario(iturnoid, this.clienteUID)) {
        return 'cancelar';
      }
      return 'reservado';
    } else {
      return 'reservar';
    }
  }

  ReservarTurno(iturnoid: ITurnoId) {
    this.reservarTurno.emit(iturnoid);
  }

  CancelarTurno(iturnoid: ITurnoId) {
    this.cancelarTurno.emit(iturnoid);
  }


  ngOnInit() {
  }

}
