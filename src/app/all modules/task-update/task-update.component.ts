import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { taskDetails } from '../../app.component';
import { DataService } from '../other files/data.service';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css'],
})
export class TaskUpdateComponent {
  task_name: any;
  task_title: any;

  constructor(
    public dialogRef: MatDialogRef<TaskUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: taskDetails,
    public data_service: DataService
  ) {}

  todo_tasks = JSON.parse(localStorage.getItem('task-details')!);

  ngOnInit(): void {
    this.fetch_previous_name();
  }

  fetch_previous_name() {
    let task = this.todo_tasks.find((item: any) => item.id == this.data.id);
    this.task_name = task.name;
    this.task_title = task.title;
  }

  update_todo() {
    let task = this.todo_tasks.find((item: any) => item.id == this.data.id);
    task.name = this.task_name;
    task.title = this.task_title;
    let list = JSON.stringify(this.todo_tasks);
    localStorage.setItem('task-details', list);
  }

  prevent_space(event: any) {
    this.data_service.prevent_empty_string(event);
  }
}
