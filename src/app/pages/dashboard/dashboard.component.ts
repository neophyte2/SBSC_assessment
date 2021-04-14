import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  chart_stats: []
  payload;

  constructor(
    private dashService: DashboardService,
  ) { }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo() {
    this.dashService.getDashboardInfo().subscribe(res => {
      this.payload = res[0];
      this.chart_stats = res[0].chart_stat
      console.log({ test: this.chart_stats });
    })
  }

}
