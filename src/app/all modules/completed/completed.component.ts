import { Component } from '@angular/core';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css'],
})
export class CompletedComponent {
  todo_task_list: any;
  todo_task_list_length: any;

  ngOnInit(): void {
    this.completed_tasks();
  }

  completed_tasks() {
    let all_todo_tasks = JSON.parse(localStorage.getItem('task-details')!);
    let todo_task = all_todo_tasks.filter((item: any) => item.status == true);
    this.todo_task_list = todo_task;
    this.todo_task_list_length = this.todo_task_list.length;
  }

  remove_todo(id: any) {
    if (localStorage.getItem('task-details') == null) {
      return;
    } else {
      let all_todo_tasks = JSON.parse(localStorage.getItem('task-details')!);
      let todo_task = all_todo_tasks.find((item: any) => item.id == id);
      let index = all_todo_tasks.indexOf(todo_task);
      let updated_list = all_todo_tasks.splice(index, 1);
      let list = JSON.stringify(all_todo_tasks);
      localStorage.setItem('task-details', list);
    }
    this.completed_tasks();
  }
}
