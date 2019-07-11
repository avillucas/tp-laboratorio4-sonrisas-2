import { Component, OnInit } from '@angular/core';
import { ThemeOptions } from '../../../../../theme-options';
import { AuthService } from '../../../../../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
})
export class UserBoxComponent implements OnInit {

  constructor(
    public globals: ThemeOptions,
    public authService: AuthService,
    private router: Router
  ) {
  }

  public CerrarSesion() {
    this.authService.CerrarSesion();
    this.router.navigate(['/']);
  }
  
  ngOnInit() {
  }

}
