import { Component, OnInit } from "@angular/core";
import { JobService } from "../_services/Job.service";
import { AlertifyService } from "../_services/alertify.service";
import { error } from "util";
import { Job } from "../models/Job";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-jobs",
  templateUrl: "./jobs.component.html",
  styleUrls: ["./jobs.component.css"],
  providers: [JobService]
})
export class JobsComponent implements OnInit {
  listTitle = "İş İlanları";
  jobs: Job[];
  job: Job;

  constructor(
    private jobService: JobService,
    private alertify: AlertifyService,
    private SpinnerService: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.GetJobList();
  }

  GetJobList() {
    this.SpinnerService.show();
    setTimeout(() => {
      this.jobService.getjobs().subscribe(
        data => {
          this.jobs = data;
          this.SpinnerService.hide();
        },
        error => {
          this.alertify.error("Hata oluştu.");
        }
      );
    }, 500);
  }
}
