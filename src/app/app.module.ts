import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { FormsModule } from '@angular/forms';
import { TaskUpdateComponent } from './task-update/task-update.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { CompletedComponent } from './completed/completed.component';
import { IncompleteComponent } from './incomplete/incomplete.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskUpdateComponent,
    AllTasksComponent,
    CompletedComponent,
    IncompleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
