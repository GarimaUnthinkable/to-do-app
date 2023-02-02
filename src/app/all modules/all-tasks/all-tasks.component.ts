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
  todo_task_list: any = [];
  todo_task: any;
  todo_task_details: any = {};

  ngOnInit(): void {
    this.fetch_all_todo();
  }

  constructor(public dialog: MatDialog) {}

  fetch_all_todo() {
    if (localStorage.getItem('task-details') == null) {
      return;
    } else {
      this.todo_task_list = JSON.parse(localStorage.getItem('task-details')!);
    }
  }

  update_todo_list(list: any) {
    localStorage.setItem('task-details', JSON.stringify(list));
  }

  add_todo() {
    let todo_task_id = Math.floor(Math.random() * 1000);
    this.todo_task_details = {
      name: this.todo_task,
      status: false,
      id: todo_task_id,
    };
    this.todo_task_list.push(this.todo_task_details);
    console.log(this.todo_task_list);
    this.update_todo_list(this.todo_task_list);
    this.todo_task = '';
    this.fetch_all_todo();
  }

  update_status(id: any) {
    let all_todo_tasks = JSON.parse(localStorage.getItem('task-details')!);
    let todo_task = all_todo_tasks.find((item: any) => item.id == id);
    todo_task.status = true;
    this.update_todo_list(all_todo_tasks);
    this.fetch_all_todo();
  }

  open_dialog(id: any) {
    const dialogRef = this.dialog.open(TaskUpdateComponent, {
      data: { id: id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.fetch_all_todo();
    });
  }

  remove_todo(id: any) {
    let all_todo_tasks = JSON.parse(localStorage.getItem('task-details')!);
    let todo_task = all_todo_tasks.find((item: any) => item.id == id);
    let index = all_todo_tasks.indexOf(todo_task);
    all_todo_tasks.splice(index, 1);
    this.update_todo_list(all_todo_tasks);
    this.fetch_all_todo();
  }
}
