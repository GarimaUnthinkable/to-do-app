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
  tasks = JSON.parse(localStorage.getItem('task-details')!);
  task_list: any = [];
  task: any;
  task_details: any = {};
  task_status: any = false;
  list_length: any;
  ngOnInit(): void {
    this.fetch_all_todo();
  }

  constructor(public dialog: MatDialog) {}

  fetch_all_todo() {
    if (localStorage.getItem('task-details') == null) {
      return;
    } else {
      this.task_list = this.tasks;
      this.list_length = this.task_list.length;
    }
  }

  add_todo() {
    let task_id = Math.floor(Math.random() * 1000);
    this.task_details = {
      name: this.task,
      status: this.task_status,
      id: task_id,
    };
    this.task_list.push(this.task_details);
    let list = JSON.stringify(this.task_list);
    localStorage.setItem('task-details', list);
    this.task = '';
    this.task_list = this.tasks;
  }

  update_status(id: any) {
    let tasks = this.tasks;
    let task = tasks.find((item: any) => item.id == id);
    task.status = true;
    let list = JSON.stringify(tasks);
    localStorage.setItem('task-details', list);
    this.task_list = this.tasks;
  }

  open_dialog(id: any) {
    const dialogRef = this.dialog.open(TaskUpdateComponent, {
      data: { id: id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.task_list = this.tasks;
    });
  }

  remove_todo(id: any) {
    let task = this.tasks.find((item: any) => item.id == id);
    let index = this.tasks.indexOf(task);
    let updated_list = this.tasks.splice(index, 1);
    let list = JSON.stringify(this.tasks);
    localStorage.setItem('task-details', list);
    this.task_list = this.tasks;
  }
}
