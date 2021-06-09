import { Component, OnInit } from '@angular/core';
import { Contact } from "src/app/contact";
import { ApiService } from "../api.service";

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

	contacts: any = [];
  	constructor(private apiService: ApiService) { }

  ngOnInit(): void {
	  this.apiService.getLeaderboard().subscribe((result)=>{
		  this.contacts = result;
		  console.log(this.contacts);
	  })
  }
}
