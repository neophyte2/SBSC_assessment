import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent
      }
    ])
  ],
  providers:[
    DashboardService,
  ]
})
export class DashboardModule { }
