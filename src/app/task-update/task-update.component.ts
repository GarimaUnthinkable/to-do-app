import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { taskDetails } from '../app.component';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css'],
})
export class TaskUpdateComponent {
  task_name: any;

  constructor(
    public dialogRef: MatDialogRef<TaskUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: taskDetails
  ) {}

  ngOnInit(): void {
    this.previous_name();
  }

  previous_name() {
    let tasks = JSON.parse(localStorage.getItem('task-details')!);
    let task = tasks.find((item: any) => item.id == this.data.id);
    this.task_name = task.name;
  }

  update() {
    let tasks = JSON.parse(localStorage.getItem('task-details')!);
    let task = tasks.find((item: any) => item.id == this.data.id);
    task.name = this.task_name;
    let list = JSON.stringify(tasks);
    localStorage.setItem('task-details', list);
  }
}
