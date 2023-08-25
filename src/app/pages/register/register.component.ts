import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { POVService } from 'src/assets/services/pov.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //Campos Reactivos del Formulario
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  submitted = false;

  //Array Login
  login : any = []; 

  //Array Forms
  forms : any = [];

  //Array Helpers
  helpers : any = [];

  //Array Buttons
  buttons : any = [];
 
  //Array Banners
  banners : any = [];

  //Inyección de Title, Service y Constructor de Formularios
  constructor (private title:Title, private povService:POVService, private formBuilder: FormBuilder) {
    //Seteo de Title
    title.setTitle('Register | Point of View');
  }

  ngOnInit(): void { 
    //Color del Ícono de Accesibilidad
    (window as any).interdeal.btnStyle.color.second = "#000000";

   //Reglas de los Campos del Formulario
   this.form = this.formBuilder.group(
    {
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
    }
  );

    //Almacenamiento de datos
    this.povService.getData().subscribe(data => {
      //Información a mostrar
      this.banners = data.banners;
      this.buttons = data.buttons;
      this.login = data.login;
      this.forms = data.forms;
      this.helpers = data.helpers;
    })
  }

  ngOnDestroy(): void { }

  //Traer Formulario
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  //Enviar Formulario
  onSubmit(): void {
    //Válido
    this.submitted = true;
    //Inválido
    if (this.form.invalid) {
      return;
    }
  }  

}
