import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecieverActiveLetsPageRoutingModule } from './reciever-active-lets-routing.module';

import { RecieverActiveLetsPage } from './reciever-active-lets.page';
import { SwiperModule } from 'swiper/angular';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecieverActiveLetsPageRoutingModule,
    SwiperModule
  ],
  declarations: [RecieverActiveLetsPage]
})
export class RecieverActiveLetsPageModule {}
