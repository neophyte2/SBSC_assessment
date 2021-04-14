import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  payload;

  constructor(
    private dashService: DashboardService,
  ) { }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo() {
    this.dashService.getDashboardInfo().subscribe(res => {
      console.log({ res });
      const payload = res[0]
      console.log({ payload });
    })
  }

}
