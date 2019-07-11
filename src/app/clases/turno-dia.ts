import { Observable } from 'rxjs';
import { ITurnoId } from '../models/turnoid.model';

export class TurnoDia {
  private dia: Date;
  private turnos: Observable<ITurnoId[]>;
  private especialista: string;

  constructor(dia: Date, turnos: Observable<ITurnoId[]>, especialista: string) {
    this.especialista = especialista;
    this.dia = dia;
    this.turnos = turnos;
  }

  get Turnos(): Observable<ITurnoId[]> {
    return this.turnos;
  }

  get Dia(): Date {
    return this.dia;
  }

  get Especialista(): string {
    return this.especialista;
  }

}

