import { Observable } from 'rxjs';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITurnoId } from '../../../models/turnoid.model';
import { TurnosService } from '../../../servicios/turnos.service';

@Component({
  selector: 'app-tabla-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
// Reservas que se realizaron un por un cliente
export class ReservasComponent implements OnInit {

  //  turnos filtrados por especialista y dia
  @Input() reservas: Observable<ITurnoId[]>;
  // dia del que se filtro
  @Input() dia: Date;
  // especialista del que se filtro
  @Input() especialistaUID: string;
  // cliente qu esta entrando a realializar una reserva
  @Input() clienteUID: string;
  //
  @Output() cancelarTurno = new EventEmitter();
  @Output() completarEncuesta = new EventEmitter();

  constructor() {
  }

  get Dia(): Date {
    return this.dia;
  }

  get Reservas(): Observable<ITurnoId[]> {
    return this.reservas;
  }

  get EspecialistaUID(): string {
    return this.especialistaUID;
  }

  get ClienteUID(): string {
    return this.clienteUID;
  }

  CancelarTurno(iturnoid: ITurnoId) {
    this.cancelarTurno.emit(iturnoid);
  }

  CompletarEncuesta(iturnoid: ITurnoId) {
    this.completarEncuesta.emit(iturnoid);
  }

  ngOnInit() {

  }

}
