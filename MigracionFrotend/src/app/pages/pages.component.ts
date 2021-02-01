import { Component, OnInit } from '@angular/core';
import { PagesService } from './pages.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor( public PagesService: PagesService) {
    
   }

  ngOnInit(): void {
     
  }

}
