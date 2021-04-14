
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private api = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getDashboardInfo(): Observable<any>{
    return this.http.get(`${this.api}/dashboard`);
  }

}
