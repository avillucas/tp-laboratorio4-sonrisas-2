import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parte-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class PartesProfileComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) {
  }

  public CerrarSesion() {
    this.authService.CerrarSesion();
    this.router.navigate(['/']);
  }

  ngOnInit() {

  }

}
