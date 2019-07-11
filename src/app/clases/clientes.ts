import { Usuario } from './usuario';
import { TipoUsuario } from '../enums/tipo-usuario.enum';

export class Cliente extends Usuario {
  constructor(email: string, nombre: string, profileImage: string) {
    super(email, nombre, TipoUsuario.cliente, profileImage);
  }
}
