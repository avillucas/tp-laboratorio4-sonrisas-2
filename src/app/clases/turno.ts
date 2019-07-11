import { Especialista } from './especialista';
import { Cliente } from './clientes';

export class Turno {

  private time: Date;
  private especialista: Especialista;
  private cliente: Cliente;

  constructor(time: Date, especialista: Especialista = null, cliente: Cliente = null) {
    this.time = time;
    this.especialista = especialista;
    this.cliente = cliente;
  }

  public get Time(): Date {
    return this.time;
  }
  public set Time(value: Date) {
    this.time = value;
  }

  public get Especialista(): Especialista {
    return this.especialista;
  }

  public set Especialista(value: Especialista) {
    this.especialista = value;
  }

  public get Cliente(): Cliente {
    return this.cliente;
  }

  public set Cliente(value: Cliente) {
    this.cliente = value;
  }

}
