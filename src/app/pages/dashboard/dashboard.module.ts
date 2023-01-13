import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { DropdownMenuComponent } from 'src/app/core/components/dropdown-menu/dropdown-menu.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InfoCardComponent,
    DropdownMenuComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  providers: [],
  exports: []
})
export class DashboardModule { }
