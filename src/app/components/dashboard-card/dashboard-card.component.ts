import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent implements OnInit {

  @Input('totalConfirmed')
  totalConfirmed;
  
  @Input('totalDeath')
  totalDeath;
  
  @Input('totalRecoverd')
  totalRecoverd;
  
  @Input('totalActive')
  totalActive;
  constructor() { }

  ngOnInit(): void {
  }

}
