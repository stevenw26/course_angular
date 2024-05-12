import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ProductsRoutingModule } from './products-routing.module';

import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { OrderComponent } from './pages/order/order.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';

import { CanFlyPipe } from './pipes/canFly.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';



@NgModule({
  declarations: [
    BasicsPageComponent,
    CanFlyPipe,
    NumbersPageComponent,
    OrderComponent,
    SortByPipe,
    ToggleCasePipe,
    UncommonPageComponent,

  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
