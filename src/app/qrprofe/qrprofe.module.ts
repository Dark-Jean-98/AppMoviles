import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QRPROFEPageRoutingModule } from './qrprofe-routing.module';

import { QRPROFEPage } from './qrprofe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRPROFEPageRoutingModule
  ],
  declarations: [QRPROFEPage]
})
export class QRPROFEPageModule {}
