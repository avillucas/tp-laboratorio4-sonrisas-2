import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from '../../servicios/usuarios.service';
import { ITurnoId } from '../../models/turnoid.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-resena',
  templateUrl: './resena.component.html',
  styleUrls: ['./resena.component.css']
})
export class ResenaComponent implements OnInit {
  // turno sobre el que se esta aplicando al reseña
  @Input() iturnoid: ITurnoId;
  // aviso de que se desea guardar la reseña
  @Output() guardarResena = new EventEmitter();

  public ResenaControl: FormControl;
  public ResenaForm: FormGroup;

  constructor(
    private builder: FormBuilder
  ) {
    this.ResenaControl = new FormControl(this.ResenaControl, [Validators.required]);
    this.ResenaForm = this.builder.group({ resena: this.ResenaControl });
  }
  public get ResenaInput() {
    return this.ResenaForm.get('resena');
  }

  private reset() {
    this.ResenaInput.setValue('');
    this.iturnoid = null;
  }

  Guardar() {
    this.iturnoid.turno.resena = this.ResenaInput.value;
    this.iturnoid.turno.asistio = true;
    this.guardarResena.emit(this.iturnoid);
    this.reset();
  }

  ngOnInit() {
  }

}
