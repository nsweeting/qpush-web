import { Component, OnInit } from '@angular/core';

import { JobsService, Job } from './index';

@Component({
  moduleId: module.id,
  providers: [JobsService],
  selector: 'sd-jobs',
  templateUrl: 'jobs.component.html'
})
export class JobsComponent implements OnInit {
  jobs: Job[];
  errorMessage: string;

  constructor(private jobsService: JobsService) { }

  ngOnInit() {
    this.getJobs();
  }

  getJobs() {
    this.jobsService.getJobs()
                       .subscribe(jobs => this.jobs = jobs,
                                  error =>  this.errorMessage = <any>error);
   }
}
