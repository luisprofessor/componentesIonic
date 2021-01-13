import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaPageRoutingModule } from './lista-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { ListaPage } from './lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ListaPageRoutingModule
  ],
  declarations: [ListaPage]
})
export class ListaPageModule {}
