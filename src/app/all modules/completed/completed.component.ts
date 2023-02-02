import { Component } from '@angular/core';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css'],
})
export class CompletedComponent {
  all_todo_tasks = JSON.parse(localStorage.getItem('task-details')!);
  todo_task_list: any;

  ngOnInit(): void {
    this.completed_tasks();
  }

  completed_tasks() {
    let todo_task = this.all_todo_tasks.filter(
      (item: any) => item.status == true
    );
    this.todo_task_list = todo_task;
  }

  remove_todo(id: any) {
    this.completed_tasks();
    let todo_task = this.todo_task_list.find((item: any) => item.id == id);
    let index = this.todo_task_list.indexOf(todo_task);
    this.all_todo_tasks.splice(index, 1);
    this.completed_tasks();
    let list = JSON.stringify(this.all_todo_tasks);
    localStorage.setItem('task-details', list);
  }
}
