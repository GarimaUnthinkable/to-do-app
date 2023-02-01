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
  all_todo_tasks = JSON.parse(localStorage.getItem('task-details')!);
  todo_task_list: any = [];
  todo_task: any;
  todo_task_details: any = {};
  todo_task_status: any = false;
  todo_task_list_length: any;
  ngOnInit(): void {
    this.fetch_all_todo();
  }

  constructor(public dialog: MatDialog) {}

  fetch_all_todo() {
    if (localStorage.getItem('task-details') == null) {
      return;
    } else {
      this.todo_task_list = this.all_todo_tasks;
      this.todo_task_list_length = this.todo_task_list.length;
    }
  }

  store_updated_todo() {
    let list = JSON.stringify(this.todo_task_list);
    localStorage.setItem('task-details', list);
  }

  add_todo() {
    let todo_task_id = Math.floor(Math.random() * 1000);
    this.todo_task_details = {
      name: this.todo_task,
      status: this.todo_task_status,
      id: todo_task_id,
    };
    this.todo_task_list.push(this.todo_task_details);
    this.store_updated_todo();
    this.todo_task = '';
    this.todo_task_list = this.all_todo_tasks;
  }

  update_status(id: any) {
    let todo_task = this.all_todo_tasks.find((item: any) => item.id == id);
    todo_task.status = true;
    this.store_updated_todo();
    this.todo_task_list = this.all_todo_tasks;
  }

  open_dialog(id: any) {
    const dialogRef = this.dialog.open(TaskUpdateComponent, {
      data: { id: id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.todo_task_list = this.all_todo_tasks;
    });
  }

  remove_todo(id: any) {
    let todo_task = this.all_todo_tasks.find((item: any) => item.id == id);
    let index = this.all_todo_tasks.indexOf(todo_task);
    let updated_list = this.all_todo_tasks.splice(index, 1);
    this.store_updated_todo();
    this.todo_task_list = this.all_todo_tasks;
  }
}
