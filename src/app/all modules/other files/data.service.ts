import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskUpdateComponent } from '../task-update/task-update.component';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  get_localstorage_data = JSON.parse(localStorage.getItem('task-details')!);
  constructor(public dialog: MatDialog) {}

  dialog_box(id: any) {
    const dialogRef = this.dialog.open(TaskUpdateComponent, {
      data: { id: id },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  update_todo_list(list: any) {
    localStorage.setItem('task-details', JSON.stringify(list));
  }
}
