import { Component, OnInit } from '@angular/core';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-white-general',
  templateUrl: './white-general.component.html'
})
export class WhiteGeneralComponent implements OnInit {
  
  //Array Social General
  social_general : any = [];
  
  //Inyección de Service
    constructor (private povService:POVService) {
    }
    
    ngOnInit(): void { 
      //Almacenamiento de datos
      this.povService.getData().subscribe(data => {
        //Información a mostrar
        this.social_general = data.social_general;
      })
    }
  
  }
  
