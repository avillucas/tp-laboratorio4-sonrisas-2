import { Pipe, PipeTransform } from '@angular/core';
import { Consultorios } from '../enums/consultorios.enum';

@Pipe({
  name: 'consultorio'
})
export class ConsultorioPipe implements PipeTransform {

  transform(value: Consultorios): string {
    return Consultorios[value].toString();
  }


}
