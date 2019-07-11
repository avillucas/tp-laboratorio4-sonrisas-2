export interface IUsuario {
  email: string;
  nombre: string;
  tipo: number;
  profileImage?: string;
  // el como especialista los que tiene asignados son turnos
  turnos?: any;
  // el como cliente los que tiene reservados son reservas
  reservas?: any;

}
