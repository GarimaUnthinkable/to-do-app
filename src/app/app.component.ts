import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TaskUpdateComponent } from './task-update/task-update.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'to-do-app';
  task_list: any = [];
  task: any;
  task_details: any = {};
  task_status: any = false;
  filter: any = false;

  ngOnInit(): void {
    this.task_list = JSON.parse(localStorage.getItem('task-details')!);
    this.filter = false;
  }

  constructor(public dialog: MatDialog, public router: Router) {}
  onSubmit() {
    let task_id = Math.floor(Math.random() * 1000);
    this.task_details = {
      name: this.task,
      status: this.task_status,
      id: task_id,
    };
    this.task_list.push(this.task_details);
    let list = JSON.stringify(this.task_list);
    localStorage.setItem('task-details', list);
    this.task_list = JSON.parse(localStorage.getItem('task-details')!);
  }

  status(id: any) {
    let tasks = JSON.parse(localStorage.getItem('task-details')!);
    let task = tasks.find((item: any) => item.id == id);
    task.status = true;
    let list = JSON.stringify(tasks);
    localStorage.setItem('task-details', list);
  }

  openDialog(id: any) {
    this.router.navigate(['/task-update'], { queryParams: { id: id } });
    const dialogRef = this.dialog.open(TaskUpdateComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.task_list = JSON.parse(localStorage.getItem('task-details')!);
    });
  }

  remove(id: any) {
    let tasks = JSON.parse(localStorage.getItem('task-details')!);
    let task = tasks.find((item: any) => item.id == id);
    let index = tasks.indexOf(task);
    let updated_list = tasks.splice(index, 1);
    let list = JSON.stringify(tasks);
    localStorage.setItem('task-details', list);
    this.task_list = JSON.parse(localStorage.getItem('task-details')!);
  }

  inCompleted_tasks() {
    let tasks = JSON.parse(localStorage.getItem('task-details')!);
    let task = tasks.filter((item: any) => item.status == false);
    this.task_list = task;
    return (this.filter = true);
  }

  completed_tasks() {
    let tasks = JSON.parse(localStorage.getItem('task-details')!);
    let task = tasks.filter((item: any) => item.status == true);
    this.task_list = task;
    return (this.filter = true);
  }
}
