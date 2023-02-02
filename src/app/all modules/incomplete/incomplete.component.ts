import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskUpdateComponent } from '../task-update/task-update.component';

@Component({
  selector: 'app-incomplete',
  templateUrl: './incomplete.component.html',
  styleUrls: ['./incomplete.component.css'],
})
export class IncompleteComponent {
  todo_task_list: any;
  todo_task_list_length: any;
  todo_tasks = JSON.parse(localStorage.getItem('task-details')!);
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.incompleted_tasks();
  }

  incompleted_tasks() {
    let task = this.todo_tasks.filter((item: any) => item.status == false);
    this.todo_task_list = task;
    this.todo_task_list_length = this.todo_task_list.length;
  }

  open_dialog(id: any) {
    const dialog_ref = this.dialog.open(TaskUpdateComponent, {
      data: { id: id },
    });

    dialog_ref.afterClosed().subscribe((result) => {
      this.incompleted_tasks();
    });
  }

  store_updated_todo() {
    let list = JSON.stringify(this.todo_task_list);
    localStorage.setItem('task-details', list);
  }

  remove_todo(id: any) {
    if (localStorage.getItem('task-details') == null) {
      return;
    } else {
      let task = this.todo_tasks.find((item: any) => item.id == id);
      let index = this.todo_tasks.indexOf(task);
      let updated_list = this.todo_tasks.splice(index, 1);
      this.store_updated_todo();
    }
    this.incompleted_tasks();
  }

  update_status(id: any) {
    if (localStorage.getItem('task-details') == null) {
      return;
    } else {
      let task = this.todo_tasks.find((item: any) => item.id == id);
      task.status = true;
      this.store_updated_todo();
    }
    this.incompleted_tasks();
  }
}
