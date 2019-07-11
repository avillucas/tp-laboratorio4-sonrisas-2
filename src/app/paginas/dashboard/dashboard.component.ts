import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})

export class DashboardComponent implements OnInit {


  heading = 'Dashboard';
  subheading = 'Bienvenido a Buena Sonrisa';
  icon = 'pe-7s-plane icon-gradient bg-tempting-azure';

  constructor() {

  }

  ngOnInit() {
  }

}
