import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Goal } from './Models/Goals';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {
  private GOALS_SERVICE_LINK_API = "http://localhost:3000/api/goals/";
  constructor(private http: HttpClient) { }

  public getGoals():Observable<Goal[]>{
    return this.http.get<Goal[]>(this.GOALS_SERVICE_LINK_API);
  }
}
