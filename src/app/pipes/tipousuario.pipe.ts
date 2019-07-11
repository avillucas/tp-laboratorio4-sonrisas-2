import { Pipe, PipeTransform } from '@angular/core';
import { TipoUsuario } from '../enums/tipo-usuario.enum';

@Pipe({
  name: 'tipousuario'
})
export class TipousuarioPipe implements PipeTransform {

  transform(value: TipoUsuario): string {
    return TipoUsuario[value].toString();
  }

}
