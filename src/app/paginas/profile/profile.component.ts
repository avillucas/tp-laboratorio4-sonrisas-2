import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { IUsuario } from 'src/app/models/usuario.model';
import { StorageService } from 'src/app/servicios/storage.service';
import { IUsuarioId } from '../../models/usuarioid.model';
import { Observable, of } from 'rxjs';
import { switchMap, finalize } from 'rxjs/operators';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public NombreControl: FormControl;
  public ProfileForm: FormGroup;
  private porcentajeSubida: number;

  constructor(
    private builder: FormBuilder,
    private aService: AuthService,
    private uService: UsuariosService,
    public sService: StorageService
  ) {
    this.porcentajeSubida = 0;
    this.NombreControl = new FormControl(this.NombreControl, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(255)
    ]);

    this.ProfileForm = this.builder.group({
      nombre: this.NombreControl
    });
  }

  public get NombreInput() {
    return this.ProfileForm.get('nombre');
  }

  public get PorcetajeSubida(): number {
    return this.porcentajeSubida;
  }

  GuardarMiCuenta() {
    this.uService.actualizar(this.CurrentUID,
      {
        nombre: this.NombreInput.value
      }
    );
  }

  public get CurrentUID(): string {
    return this.aService.CurrentUID;
  }

  public get Iusuario(): Observable<IUsuario> {
    return this.aService.user$;
  }

  public DefinirAvatar($event) {
    this.sService.uploadFileOnEvent($event, this.CurrentUID).subscribe(res => {
      this.sService.Referencia(this.CurrentUID).getDownloadURL().subscribe(url => {
        this.uService.actualizar(this.CurrentUID, { profileImage: url });
      });
    });

  }

  ngOnInit() {
  }

}
