import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Job } from '../models/Job';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class JobService {

constructor(private http: HttpClient) { }


getjobs():Observable<Job[]> {
  return this.http.get(environment.jobsUrl + "/jobs").pipe(
    map(function(response:any) {
      return response;
    })
  );
}

}
