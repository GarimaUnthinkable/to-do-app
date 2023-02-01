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
  tasks = JSON.parse(localStorage.getItem('task-details')!);
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.inCompleted_tasks();
  }

  inCompleted_tasks() {
    let task = this.tasks.filter((item: any) => item.status == false);
    this.task_list = task;
    this.list_length = this.task_list.length;
  }

  open_dialog(id: any) {
    const dialog_ref = this.dialog.open(TaskUpdateComponent, {
      data: { id: id },
    });

    dialog_ref.afterClosed().subscribe((result) => {
      this.inCompleted_tasks();
    });
  }

  remove_todo(id: any) {
    if (localStorage.getItem('task-details') == null) {
      return;
    } else {
      let task = this.tasks.find((item: any) => item.id == id);
      let index = this.tasks.indexOf(task);
      let updated_list = this.tasks.splice(index, 1);
      let list = JSON.stringify(this.tasks);
      localStorage.setItem('task-details', list);
    }
    this.inCompleted_tasks();
  }
  update_status(id: any) {
    if (localStorage.getItem('task-details') == null) {
      return;
    } else {
      let task = this.tasks.find((item: any) => item.id == id);
      task.status = true;
      let list = JSON.stringify(this.tasks);
      localStorage.setItem('task-details', list);
    }
    this.inCompleted_tasks();
  }
}
