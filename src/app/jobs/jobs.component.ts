import { Component, OnInit } from "@angular/core";
import { JobService } from "../_services/Job.service";
import { AlertifyService } from "../_services/alertify.service";
import { error } from 'util';
import { Job } from '../models/Job';

@Component({
  selector: "app-jobs",
  templateUrl: "./jobs.component.html",
  styleUrls: ["./jobs.component.css"],
  providers: [JobService]
})
export class JobsComponent implements OnInit {
  listTitle = "Job List";
  jobs: Job[];
  job: Job;

  constructor(
    private jobService: JobService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {
    this.jobService.getjobs().subscribe(
      data => {this.jobs = data;
      },
      error=>{this.alertify.error("Hata oluştu.")}
      );
  }

  apply(job) {
   this.alertify.success("Successfully applied for " + job.title);
  }
} 