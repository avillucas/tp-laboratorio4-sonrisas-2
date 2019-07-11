import { Usuario } from './usuario';
import { TipoUsuario } from '../enums/tipo-usuario.enum';

export class Recepcionista extends Usuario {
  constructor(email: string, nombre: string, profileImage: string) {
    super(email, nombre, TipoUsuario.recepcionista, profileImage);
  }
}
