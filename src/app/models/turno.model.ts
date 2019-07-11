export interface ITurno {
  time: any;
  consultorio: string;
  reservado: boolean;
  encuestado: boolean;
  especialistaUID: string;
  especialistaNombre: string;
  clienteUID: string;
  clienteNombre: string;
  asistio?: boolean;
  resena?: string;
}

