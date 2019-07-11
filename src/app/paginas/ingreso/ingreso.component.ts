import { environment } from './../../../environments/environment';
import { AuthService } from './../../servicios/auth.service';
import { Component, OnInit } from '@angular/core';
import { ILogin } from '../../models/login.model';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.sass']
})
export class IngresoComponent implements OnInit {

  public UsuariosDefault: Array<ILogin>;
  public EmailControl: FormControl;
  public PasswordControl: FormControl;
  public LoginForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private loadingBar: LoadingBarService
  ) {
    this.UsuariosDefault = environment.usuarios;
    this.EmailControl = new FormControl(this.EmailControl, [
      Validators.required,
      Validators.email,
      Validators.minLength(1),
      Validators.maxLength(255)
    ]);

    this.PasswordControl = new FormControl(this.PasswordControl, [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(255)
    ]);

    this.LoginForm = this.builder.group({
      email: this.EmailControl,
      password: this.PasswordControl
    });
  }

  public get EmailInput() {
    return this.LoginForm.get('email');
  }

  public get PasswordInput() {
    return this.LoginForm.get('password');
  }

  SeleccionDefault(usuarioSeleccionado: ILogin) {
    this.EmailInput.setValue(usuarioSeleccionado.email);
    this.PasswordInput.setValue(usuarioSeleccionado.password);
  }

  Ingresar() {
    this.loadingBar.start();
    this.authService.emailPasswordLogIn(this.EmailInput.value, this.PasswordInput.value)
      .then(res => {
        this.loadingBar.complete();
        this.router.navigate(['/']);
      },
        err => {
          this.loadingBar.complete();
          alert('Error en las credenciales, por favor revise los datos ingresados ');
        }
      );
  }

  ngOnInit() {
    const usuarioDefault = this.UsuariosDefault[0];
    this.EmailControl.setValue(usuarioDefault.email);
    this.PasswordControl.setValue(usuarioDefault.password);
  }
}
