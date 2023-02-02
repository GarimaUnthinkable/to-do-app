import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/all modules/other files/data.service';

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

  ngOnInit(): void {
    this.fetch_all_todo();
  }

  constructor(public dialog: MatDialog, public data: DataService) {}

  fetch_all_todo() {
    if (localStorage.getItem('task-details') == null) {
      return;
    } else {
      this.todo_task_list = this.data.get_localstorage_data;
    }
  }

  update_status(id: any) {
    let all_todo_tasks = this.data.get_localstorage_data;
    let todo_task = all_todo_tasks.find((item: any) => item.id == id);
    todo_task.status = true;
    this.data.update_todo_list(all_todo_tasks);
    this.fetch_all_todo();
  }

  open_dialog(id: any) {
    this.data.dialog_box(id);
    this.fetch_all_todo();
  }

  remove_todo(id: any) {
    let all_todo_tasks = this.data.get_localstorage_data;
    let todo_task = all_todo_tasks.find((item: any) => item.id == id);
    let index = all_todo_tasks.indexOf(todo_task);
    all_todo_tasks.splice(index, 1);
    this.data.update_todo_list(all_todo_tasks);
    this.fetch_all_todo();
  }
}
