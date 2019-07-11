import { environment } from '../../environments/environment';
import { IRangoHorario } from '../models/rangohorario.model';
export class Helpers {

  static toSlashes(date: Date): string {
    return (date).toISOString().slice(0, 10);
  }

  /**
   *  @returns yyyy/mm/dd string format of the Date date
   */
  static parseDateToISO(date: Date): string {
    return date.toISOString().substr(0, 10);
  }

/**
 *  @returns Rango del dia desde 00 a 23 hs del mismo
 */
  static traerRangoDeUnDia(dia: Date): IRangoHorario {
    const inicio: Date = new Date(dia);
    const fin: Date = new Date(dia);
    inicio.setHours(0, 0, 0, 0);
    fin.setHours(23, 59, 59, 59);
    return { inicio, fin } as IRangoHorario;
  }

  /**
   * @param dia  para que el que se busca determinar el rango de horas de la clinica
   */
  static traerRangoHorario(dia: Date): IRangoHorario {
    if (dia.getDay() === 0) {
      // domingo
      throw new Error('No es posible asignar turnos ya que la clinica no trabaja los domingos');
    }
    const fin: Date = new Date(dia);
    const inicio: Date = new Date(dia);
    if (dia.getDay() === 5) {
      // sabado
      inicio.setHours(environment.clinica.sab.inicio, 0, 0, 0);
      fin.setHours(environment.clinica.sab.fin, 0, 0, 0);
    } else {
      // es lav
      inicio.setHours(environment.clinica.lav.inicio, 0, 0, 0);
      fin.setHours(environment.clinica.lav.fin, 0, 0, 0);
    }
    return { inicio, fin } as IRangoHorario;
  }

}
