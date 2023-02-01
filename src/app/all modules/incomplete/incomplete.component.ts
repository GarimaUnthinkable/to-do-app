import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskUpdateComponent } from '../task-update/task-update.component';

@Component({
  selector: 'app-incomplete',
  templateUrl: './incomplete.component.html',
  styleUrls: ['./incomplete.component.css'],
})
export class IncompleteComponent {
  task_list: any;
  list_length: any;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.inCompleted_tasks();
  }

  inCompleted_tasks() {
    let tasks = JSON.parse(localStorage.getItem('task-details')!);
    let task = tasks.filter((item: any) => item.status == false);
    this.task_list = task;
    this.list_length = this.task_list.length;
  }

  openDialog(id: any) {
    const dialogRef = this.dialog.open(TaskUpdateComponent, {
      data: { id: id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.inCompleted_tasks();
    });
  }

  remove(id: any) {
    if (localStorage.getItem('task-details') == null) {
      return;
    } else {
      let tasks = JSON.parse(localStorage.getItem('task-details')!);
      let task = tasks.find((item: any) => item.id == id);
      let index = tasks.indexOf(task);
      let updated_list = tasks.splice(index, 1);
      let list = JSON.stringify(tasks);
      localStorage.setItem('task-details', list);
    }
    this.inCompleted_tasks();
  }
  status(id: any) {
    if (localStorage.getItem('task-details') == null) {
      return;
    } else {
      let tasks = JSON.parse(localStorage.getItem('task-details')!);
      let task = tasks.find((item: any) => item.id == id);
      task.status = true;
      let list = JSON.stringify(tasks);
      localStorage.setItem('task-details', list);
    }
    this.inCompleted_tasks();
  }
}
