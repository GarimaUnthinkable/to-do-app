import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskUpdateComponent } from '../task-update/task-update.component';

export interface taskDetails {
  id: any;
}

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css'],
})
export class AllTasksComponent {
  task_list: any = [];
  task: any;
  task_details: any = {};
  task_status: any = false;
  filter: any = false;

  ngOnInit(): void {
    this.all_data();
    this.filter = false;
  }

  constructor(public dialog: MatDialog) {}

  all_data() {
    if (localStorage.getItem('task-details') == null) {
      return;
    } else {
      this.task_list = JSON.parse(localStorage.getItem('task-details')!);
    }
  }

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
    return (this.task = '');
  }

  status(id: any) {
    let tasks = JSON.parse(localStorage.getItem('task-details')!);
    let task = tasks.find((item: any) => item.id == id);
    task.status = true;
    let list = JSON.stringify(tasks);
    localStorage.setItem('task-details', list);
    this.task_list = JSON.parse(localStorage.getItem('task-details')!);
  }

  openDialog(id: any) {
    const dialogRef = this.dialog.open(TaskUpdateComponent, {
      data: { id: id },
    });

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
}
