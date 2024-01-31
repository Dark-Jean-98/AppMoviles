import { Component, OnInit} from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { ConsumoapiService } from '../services/consumoapi.service'
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';




@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage  {

  alumnoMostrar = "";
  idAlumnoM:any;
  isSupported = false;
  barcodes: Barcode[] = [];
  
  alertButtons = ['Cerrar Sesión'];

  imageSource:any;

  constructor(private apiService:ConsumoapiService, private activeroute: ActivatedRoute, private router: Router, private alertController: AlertController) {
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

  async scan(): Promise<void> {
    const granted = await this.requestPermissions();
    if (!granted) {
      this.presentAlert();
      return;
    }
    const { barcodes } = await BarcodeScanner.scan();
    this.barcodes.push(...barcodes);
  }

  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }

  async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permission denied',
      message: 'Please grant camera permission to use the barcode scanner.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  ngOnInit() {
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });
  }
  
}

 



  
  



