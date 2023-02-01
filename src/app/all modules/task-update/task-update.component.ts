import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { taskDetails } from '../../app.component';

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

  todo_tasks = JSON.parse(localStorage.getItem('task-details')!);

  ngOnInit(): void {
    this.fetch_previous_name();
  }

  fetch_previous_name() {
    let task = this.todo_tasks.find((item: any) => item.id == this.data.id);
    this.task_name = task.name;
  }

  update_todo() {
    let task = this.todo_tasks.find((item: any) => item.id == this.data.id);
    task.name = this.task_name;
    let list = JSON.stringify(this.todo_tasks);
    localStorage.setItem('task-details', list);
  }
}
