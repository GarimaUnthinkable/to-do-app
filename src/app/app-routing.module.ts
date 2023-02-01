import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTasksComponent } from './all modules/all-tasks/all-tasks.component';
import { CompletedComponent } from './all modules/completed/completed.component';
import { IncompleteComponent } from './all modules/incomplete/incomplete.component';

const routes: Routes = [
  { path: '', component: AllTasksComponent },
  { path: 'all-tasks', component: AllTasksComponent },
  { path: 'completed', component: CompletedComponent },
  { path: 'incomplete', component: IncompleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
