import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { IEncuesta } from '../models/encuesta.model';
import { IEncuestaId } from '../models/encuestaid.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITurnoId } from '../models/turnoid.model';

@Injectable({
  providedIn: 'root'
})
export class EncuestasService {

  private collection: AngularFirestoreCollection<IEncuesta>;

  constructor(private afs: AngularFirestore) {
    this.collection = this.afs.collection(environment.db.encuestas);
  }

  public static crearIEncuestaId(iturnoid: ITurnoId, puntajeClinica: number, puntajeEspecialista: number, experiencia: string) {
    return {
      id: iturnoid.id,
      encuesta: {
        especialistaUID: iturnoid.turno.especialistaUID,
        puntajeClinica,
        puntajeEspecialista,
        experiencia
      } as IEncuesta
    } as IEncuestaId;
  }

  get Collection(): AngularFirestoreCollection<IEncuesta> {
    return this.collection;
  }

  public Guardar(iencuestaid: IEncuestaId): Promise<void> {
    return this.collection.doc<IEncuesta>(iencuestaid.id).set(iencuestaid.encuesta);
  }

  private makeObservable(collection: AngularFirestoreCollection<IEncuesta>) {
    return collection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const iencuesta = a.payload.doc.data() as IEncuesta;
          const id = a.payload.doc.id;
          return { id, encuesta: iencuesta } as IEncuestaId;
        });
      }));
  }

}
