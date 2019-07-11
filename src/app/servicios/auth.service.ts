import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap, map, take, tap, first } from 'rxjs/operators';
import { Usuario } from '../clases/usuario';
import { UsuariosService } from './usuarios.service';
import { IAuth } from '../models/auth.model';
import { IUsuario } from '../models/usuario.model';

@Injectable({ providedIn: 'root' })
export class AuthService {

  user$: Observable<IUsuario>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private uService: UsuariosService,
    private router: Router,
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {
          return this.afs.collection(environment.db.usuarios).doc<IUsuario>(user.uid).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    );
  }

  /**
   * Loguea un usuario por email y password
   * @param email email con el que se busca hacer el ingreso
   * @param password password con el que hacer el ingreso
   */
  async emailPasswordLogIn(email: string, password: string) {
    await this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  /**
   * Registro de un usuario y posterior logueo
   * @param nombre  nombre del cliente
   * @param email email del cliente
   * @param password  password del cliente
   */
  async clienteSingIn(usuario: Usuario, password: string) {
    const credential = await this.afAuth.auth.createUserWithEmailAndPassword(usuario.Email, password);
    const UID = credential.user.uid;
    return this.uService.crear(usuario, UID);
  }

  get CurrentUID(): string {
    return this.afAuth.auth.currentUser.uid;
  }

  traerUsuario() {
    return this.user$.pipe(first()).toPromise();
  }

  borrarEsteUsuario() {
    //https://firebase.google.com/docs/auth/web/manage-users?hl=es-419
    this.afAuth.auth.currentUser.delete().then(function () {
      console.info('borrado');
    }).catch(function (error) {
      console.info('error al borrar');
    });
  }
  /**
   * Cerrar sesion del cliente autenticado
   */
  async CerrarSesion() {
    await this.afAuth.auth.signOut();
    return this.router.navigate(['/']);
    return true;
  }
}
