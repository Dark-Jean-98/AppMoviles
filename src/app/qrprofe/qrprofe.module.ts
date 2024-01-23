import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QRPROFEPageRoutingModule } from './qrprofe-routing.module';

import { QRPROFEPage } from './qrprofe.page';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRPROFEPageRoutingModule,
    QRCodeModule
  ],
  declarations: [QRPROFEPage]
})
export class QRPROFEPageModule {}
