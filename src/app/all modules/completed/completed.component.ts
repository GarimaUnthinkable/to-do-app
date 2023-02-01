import { Component } from '@angular/core';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css'],
})
export class CompletedComponent {
  task_list: any;
  list_length: any;

  ngOnInit(): void {
    this.completed_tasks();
  }

  completed_tasks() {
    let tasks = JSON.parse(localStorage.getItem('task-details')!);
    let task = tasks.filter((item: any) => item.status == true);
    this.task_list = task;
    this.list_length = this.task_list.length;
    console.log(this.list_length);
  }

  remove_todo(id: any) {
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
    this.completed_tasks();
  }
}
