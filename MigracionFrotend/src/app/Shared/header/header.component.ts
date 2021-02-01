import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

CerrarSeccion() {
  localStorage.removeItem('tokenKey'); // Remueve token anterior
 this.router.navigate(['login']);

  
}
}
