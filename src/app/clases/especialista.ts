import { Usuario } from './usuario';
import { TipoUsuario } from '../enums/tipo-usuario.enum';
import { environment } from '../../environments/environment';
import { IRangoHorario } from '../models/rangohorario.model';
import { Helpers } from './helpers';
import { ITurno } from '../models/turno.model';
import { TurnosService } from '../servicios/turnos.service';

export class Especialista extends Usuario {
  constructor(email: string, nombre: string, profileImage: string) {
    super(email, nombre, TipoUsuario.especialista, profileImage);
  }

}
