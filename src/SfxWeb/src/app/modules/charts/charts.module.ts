import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardTileComponent } from './dashboard-tile/dashboard-tile.component';
import { DashboardTextTileComponent } from './dashboard-text-tile/dashboard-text-tile.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';


@NgModule({
  declarations: [DashboardTileComponent, DashboardTextTileComponent, BarChartComponent],
  imports: [
    CommonModule
  ],
  exports: [DashboardTileComponent, DashboardTextTileComponent, BarChartComponent]
})
export class ChartsModule { }
