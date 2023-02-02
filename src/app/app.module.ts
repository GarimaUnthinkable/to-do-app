import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './all modules/other files/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskUpdateComponent } from './all modules/task-update/task-update.component';
import { AllTasksComponent } from './all modules/all-tasks/all-tasks.component';
import { CompletedComponent } from './all modules/completed/completed.component';
import { IncompleteComponent } from './all modules/incomplete/incomplete.component';
import { NewTaskComponent } from './all modules/new-task/new-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskUpdateComponent,
    AllTasksComponent,
    CompletedComponent,
    IncompleteComponent,
    NewTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
