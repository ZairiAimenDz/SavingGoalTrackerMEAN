import { Component, OnInit } from '@angular/core';
import { GoalsService } from '../goals.service';
import { Goal } from '../Models/Goals';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {
  Goals: Goal[] = [];

  constructor(private goalsService:GoalsService,private transactionService:TransactionsService) { }

  ngOnInit(): void {
    this.goalsService.getGoals().subscribe((data:Goal[])=>{
        
        this.Goals = data;
    })
  }


}
