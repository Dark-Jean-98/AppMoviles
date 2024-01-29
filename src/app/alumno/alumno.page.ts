import { Component} from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { ConsumoapiService } from '../services/consumoapi.service'
import { Camera, CameraResultType } from '@capacitor/camera';




@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage  {

  alumnoMostrar = "";
  idAlumnoM:any;
  
  alertButtons = ['Cerrar Sesión'];

  imageSource:any;

  constructor(private apiService:ConsumoapiService, private activeroute: ActivatedRoute, private router: Router) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.alumnoMostrar = this.router.getCurrentNavigation()?.extras.state?.['user'];
        this.idAlumnoM = this.router.getCurrentNavigation()?.extras.state?.['idProfesor'];
      }
  
    })
  }

  registrarAsistencia() {
    const body = {
      alumno_id: this.idAlumnoM,
      codigo: "PGY0000",
      seccion:"013V",
      curso:"1",
    };

    this.apiService.registrarAsistencia(body).subscribe((body: any) => {
      console.log(body);
    });
  }

  //  takePhoto(){

  //   const takePicture = async () => {
  //     const image = await Camera.getPhoto({
  //       quality: 90,
  //       allowEditing: true,
  //       resultType: CameraResultType.Uri
  //     });
  // }

  }
  



