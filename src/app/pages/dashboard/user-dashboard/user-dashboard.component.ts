import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html'
})
export class UserDashboardComponent implements OnInit {
    //Inyección de Title
    constructor (private title:Title) {
      //Seteo de Title
      title.setTitle('User Dashboard | Point of View');
    }
  
    ngOnInit(): void { 
      //Color del Ícono de Accesibilidad
      (window as any).interdeal.btnStyle.color.second = "#000000"; 
    }
    
    ngOnDestroy(): void { }

}
