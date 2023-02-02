import { ListKeyManager } from '@angular/cdk/a11y';
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
  all_todo_tasks = JSON.parse(localStorage.getItem('task-details')!);

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.incompleted_tasks();
  }

  incompleted_tasks() {
    let task = this.all_todo_tasks.filter((item: any) => item.status == false);
    this.todo_task_list = task;
  }

  open_dialog(id: any) {
    const dialog_ref = this.dialog.open(TaskUpdateComponent, {
      data: { id: id },
    });

    dialog_ref.afterClosed().subscribe((result) => {
      this.incompleted_tasks();
    });
  }

  update_todo_list(list: any) {
    localStorage.setItem('task-details', JSON.stringify(list));
  }

  remove_todo(id: any) {
    this.incompleted_tasks();
    let todo_task = this.todo_task_list.find((item: any) => item.id == id);
    let index = this.todo_task_list.indexOf(todo_task);
    this.all_todo_tasks.splice(index, 1);
    this.incompleted_tasks();
    console.log(this.all_todo_tasks);
    this.update_todo_list(this.all_todo_tasks);
  }

  update_status(id: any) {
    this.incompleted_tasks();
    let task = this.todo_task_list.find((item: any) => item.id == id);
    task.status = true;
    this.incompleted_tasks();
    console.log(this.all_todo_tasks);
    this.update_todo_list(this.all_todo_tasks);
  }
}
