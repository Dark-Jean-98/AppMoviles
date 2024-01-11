import { Component ,OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import { Router, ActivatedRoute, NavigationExtras} from '@angular/router';
import { AlertController } from '@ionic/angular';


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

  profe="Dcares";
  passp="1234";

  alumno="Jcastillo";
  passa="5678";

  validar= false;

  login(){

    let nav : NavigationExtras = {
      state: {
        user : this.usuario.value.user
      }
    }

    console.log(this.usuario.value.user);
    if(this.usuario.value.user==this.profe && this.usuario.value.pass==this.passp){
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

  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

}
