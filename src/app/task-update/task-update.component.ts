import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css'],
})
export class TaskUpdateComponent {
  task_name: any;

  constructor(public route: ActivatedRoute, public router: Router) {}

  ngOnInit(): void {
    this.previous_name();
  }

  previous_name() {
    let tasks = JSON.parse(localStorage.getItem('task-details')!);
    this.route.queryParams.subscribe((res: any) => {
      let task = tasks.find((item: any) => item.id == res.id);
      this.task_name = task.name;
    });
  }

  update() {
    let tasks = JSON.parse(localStorage.getItem('task-details')!);
    this.route.queryParams.subscribe((res: any) => {
      let task = tasks.find((item: any) => item.id == res.id);
      task.name = this.task_name;
      let list = JSON.stringify(tasks);
      localStorage.setItem('task-details', list);
    });
  }
}
