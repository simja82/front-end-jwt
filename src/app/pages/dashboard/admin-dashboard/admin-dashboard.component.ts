import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html'
})
export class AdminDashboardComponent implements OnInit {
    //Inyección de Title
    constructor (private title:Title) {
      //Seteo de Title
      title.setTitle('Admin Dashboard | Point of View');
    }
  
    ngOnInit(): void { 
      //Color del Ícono de Accesibilidad
      (window as any).interdeal.btnStyle.color.second = "#000000"; 
    }
    
    ngOnDestroy(): void { }

}
