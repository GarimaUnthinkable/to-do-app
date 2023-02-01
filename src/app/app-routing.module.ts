import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TaskUpdateComponent } from './task-update/task-update.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'task-update', component: TaskUpdateComponent },
  { path: 'app', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
