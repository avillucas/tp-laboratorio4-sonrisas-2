import { Pipe, PipeTransform } from '@angular/core';
import { Timestamp } from 'rxjs/internal/operators/timestamp';

@Pipe({
  name: 'timestr'
})
export class TimestrPipe implements PipeTransform {

  transform(value: any, args?: any): Date {
    const fecha = new Date(value.seconds * 1000);
    return fecha;
  }

}
