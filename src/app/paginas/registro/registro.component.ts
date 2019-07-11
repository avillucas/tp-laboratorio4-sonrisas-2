import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { TipoUsuario } from 'src/app/enums/tipo-usuario.enum';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { IUsuario } from 'src/app/models/usuario.model';
import { StorageService } from 'src/app/servicios/storage.service';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.sass']
})
export class RegistroComponent implements OnInit {

  public NombreControl: FormControl;
  public EmailControl: FormControl;
  public PasswordControl: FormControl;
  public TipoControl: FormControl;
  public RegistroForm: FormGroup;
  private tiposUsuario: TipoUsuario[];

  constructor(
    private builder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private uService: UsuariosService,
    private sService: StorageService,
    private loadingBar: LoadingBarService
  ) {
    this.tiposUsuario = [TipoUsuario.especialista, TipoUsuario.recepcionista, TipoUsuario.cliente];
    this.NombreControl = new FormControl(this.NombreControl, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(255)
    ]);

    this.EmailControl = new FormControl(this.EmailControl, [
      Validators.required,
      Validators.email,
      Validators.minLength(4),
      Validators.maxLength(255)
    ]);

    this.PasswordControl = new FormControl(this.PasswordControl, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(255)
    ]);

    this.TipoControl = new FormControl(this.TipoControl, [
      Validators.required
    ]);

    this.RegistroForm = this.builder.group({
      nombre: this.NombreControl,
      email: this.EmailControl,
      password: this.PasswordControl,
      tipo: this.TipoControl,
    });
  }

  public get NombreInput() {
    return this.RegistroForm.get('nombre');
  }

  public get EmailInput() {
    return this.RegistroForm.get('email');
  }

  public get PasswordInput() {
    return this.RegistroForm.get('password');
  }

  public get TipoInput() {
    return this.RegistroForm.get('tipo');
  }

  private crear(email: string, nombre: string, tipo: TipoUsuario): Usuario {
    return UsuariosService.DataDAO({ email, nombre, tipo } as IUsuario);
  }

  Registrar() {
    this.loadingBar.start();
    const usuario: Usuario = this.crear(this.EmailInput.value, this.NombreInput.value, this.TipoInput.value);
    this.authService.clienteSingIn(usuario, this.PasswordInput.value).then(res => {
      this.loadingBar.complete();
      this.router.navigate(['']);
    }, err => {
      this.loadingBar.complete();
      alert('Error en las credenciales, por favor intente con otro usuario ');
    }
    );
  }

  public get TiposUsuario(): TipoUsuario[] {
    return this.tiposUsuario;
  }

  ngOnInit() {
    this.TipoInput.setValue(0);
  }

}
