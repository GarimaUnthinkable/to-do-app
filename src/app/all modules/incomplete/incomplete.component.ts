import { ListKeyManager } from '@angular/cdk/a11y';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/all modules/other files/data.service';
import { TaskUpdateComponent } from '../task-update/task-update.component';

@Component({
  selector: 'app-incomplete',
  templateUrl: './incomplete.component.html',
  styleUrls: ['./incomplete.component.css'],
})
export class IncompleteComponent {
  todo_task_list: any;

  constructor(public dialog: MatDialog, public data: DataService) {}

  ngOnInit(): void {
    this.incompleted_tasks();
  }

  incompleted_tasks() {
    let todo_task = this.data.get_localstorage_data.filter(
      (item: any) => item.status == false
    );
    this.todo_task_list = todo_task;
    return todo_task;
  }

  open_dialog(id: any) {
    this.data.dialog_box(id);
  }

  remove_todo(id: any) {
    let task_list = this.data.get_localstorage_data.filter(
      (item: any) => item.status == false
    );
    let todo_task = task_list.find((item: any) => item.id == id);
    let index = this.data.get_localstorage_data.indexOf(todo_task);
    this.data.get_localstorage_data.splice(index, 1);
    this.incompleted_tasks();
    this.data.update_todo_list(this.data.get_localstorage_data);
  }

  update_status(id: any) {
    this.incompleted_tasks();
    let task = this.todo_task_list.find((item: any) => item.id == id);
    task.status = true;
    this.incompleted_tasks();
    this.data.update_todo_list(this.data.get_localstorage_data);
  }
}
