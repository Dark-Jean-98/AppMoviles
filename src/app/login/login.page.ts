import { Component ,OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import { Router, ActivatedRoute, NavigationExtras} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ConsumoapiService } from '../services/consumoapi.service';
import { AuthguardGuard } from '../guards/authguard.guard';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LOGINPage implements OnInit {

  usuario = new FormGroup({
    user: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(20)]),
    pass: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(20)]),
  });

  nombreDocente="";
  passd="";
  correoDocente ="";

  alumno="Jcastillo";
  passa="5678";

  validar= false;

  login(){

    this.consumoapi.login('docente', 'password1').subscribe(response => {
      const data = response.body;
      this.nombreDocente = data.nombre;
      this.correoDocente = data.correo;
      console.log(data)
    })

    let nav : NavigationExtras = {
      state: {
        user : this.nombreDocente,
        correo : this.correoDocente
      }
    }

    console.log(this.usuario.value.user);
    if(this.usuario.value.user==this.nombreDocente && this.usuario.value.pass==this.passd){
      this.router.navigate(['/home'], nav);
      this.validar=true;
    }
    
    if(this.usuario.value.user==this.alumno && this.usuario.value.pass==this.passa){
      this.router.navigate(['/alumno'], nav);
      this.validar=true;

    }
    if (this.validar==false)
     this.presentAlert();

  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error Login',
      subHeader: 'Verificar',
      message: 'Usuario y/o Contraseña incorrecto',
      buttons: ['Cerrar'],
    });

    await alert.present();
  }

  constructor(private consumoapi:ConsumoapiService, private auth:AuthguardGuard, private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

}
