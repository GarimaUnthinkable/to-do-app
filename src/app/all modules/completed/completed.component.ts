import { Component } from '@angular/core';
import { DataService } from 'src/app/all modules/other files/data.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css'],
})
export class CompletedComponent {
  todo_task_list: any;

  ngOnInit(): void {
    this.completed_tasks();
  }

  constructor(public data: DataService) {}

  completed_tasks() {
    let todo_task = this.data.get_localstorage_data.filter(
      (item: any) => item.status == true
    );
    this.todo_task_list = todo_task;
    return todo_task;
  }

  remove_todo(id: any) {
    let task_list = this.data.get_localstorage_data.filter(
      (item: any) => item.status == true
    );
    let todo_task = task_list.find((item: any) => item.id == id);
    let index = task_list.indexOf(todo_task);
    this.data.get_localstorage_data.splice(index, 1);
    this.completed_tasks();
    let list = JSON.stringify(this.data.get_localstorage_data);
    localStorage.setItem('task-details', list);
  }
}
