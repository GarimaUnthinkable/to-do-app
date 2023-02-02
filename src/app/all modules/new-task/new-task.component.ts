import { Component } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent {
  todo_task_list: any = [];
  todo_task: any;
  todo_title: any;
  todo_task_details: any = {};

  add_todo() {
    let todo_task_id = Math.floor(Math.random() * 1000);
    this.todo_task_details = {
      title: this.todo_title,
      name: this.todo_task,
      status: false,
      id: todo_task_id,
    };
    this.todo_task_list = JSON.parse(localStorage.getItem('task-details')!);
    this.todo_task_list.push(this.todo_task_details);
    let list = JSON.stringify(this.todo_task_list);
    localStorage.setItem('task-details', list);
    this.todo_task = '';
  }
}
