import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { GlobalDataSummary } from 'src/app/models/global-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalConfirmed = 0;
  totalActive = 0;
  totalDeath = 0;
  totalRecoverd = 0;
  globalData : GlobalDataSummary[];
  constructor(private dataServices : DataServiceService) { }

  ngOnInit(): void {

    this.dataServices.getGlobalData()  
    .subscribe(
      {
        next : (result)=>{
          console.log(result);
          this.globalData = result;
          result.forEach(cs=>{
            if(!Number.isNaN(cs.confirmed)){
              this.totalActive+=cs.active
            this.totalConfirmed+=cs.confirmed
            this.totalDeath+=cs.deaths
            this.totalRecoverd+=cs.recoverd
            }
            
          })

       }
      }      
    )
  }

}
