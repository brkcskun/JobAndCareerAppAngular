import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { JobService } from "../_services/Job.service";
import { Job } from "../models/Job";
import { AlertifyService } from "../_services/alertify.service";

@Component({
  selector: "app-job-detail",
  templateUrl: "./job-detail.component.html",
  styleUrls: ["./job-detail.component.css"],
  providers: [JobService]
})
export class JobDetailComponent implements OnInit {
  job: Job;

  constructor(
    private activatedRoute: ActivatedRoute,
    private jobService: JobService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.getJobById(params["jobId"]);
      },
      error => {
        this.alertify.error("Hata oluştu.");
      }
    );
  }

  getJobById(id: number) {
    this.jobService.getJobById(id).subscribe(
      data => {
        this.job = data[0];
      },
      error => {
        this.alertify.error("Hata oluştu.");
      }
    );
  }

  apply(job) {
    this.alertify.success(job.title + " ilanına başvuruldu.");
  }
}
