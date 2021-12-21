import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css'],
})
export class TodoAppComponent implements OnInit {
  public showEditInput = false;
  public showAddInput = false;
  public tasks: any;
  public errorMsg: any;
  public newIndex = -1;
  public newTask = { taskTitle: '' };
  constructor(private _taskservice: HttpService) {}

  ngOnInit(): void {
    this.getTasks();
  }
  getTasks() {
    this._taskservice.getTasks().subscribe(
      (data: any) => {
        this.tasks = data.tasks;
      },
      (error) => (this.errorMsg = error)
    );
  }
  showInputBox() {
    this.newTask.taskTitle = '';
    this.showAddInput = true;
  }
  createTask() {
    this._taskservice.addTask(this.newTask).subscribe(
      (data: any) => {
        const newTask = data.task;
        this.tasks.push(newTask);
        this.showAddInput = false;
        // if (this.newTask.taskTitle == null) {
        //   this.tasks.push(newTask);
        // }
        // Object.keys(newTask).forEach((key) => (newTask[key] = null));
      },
      (error) => (this.errorMsg = error)
    );
  }
  openEdit(task: any, index: any) {
    task = this.tasks[index];
    task.showInput = 'true';
    this.newIndex = index;
  }
  removeTask(task: any, index: any) {
    task = this.tasks[index];
    this.newIndex = index;
    this._taskservice.deleteTask(task.taskId).subscribe(
      (data: any) => {
        task = data.task;
      },
      (error) => (this.errorMsg = error)
    );
    this.tasks.splice(index, 1);
  }

  editTask(task: any, index: any) {
    task = this.tasks[index];
    task.showInput = 'false';
    this.newIndex = index;
    this._taskservice.updateTask(task.taskId, task).subscribe(
      (data: any) => {
        task = data.task;
      },
      (error) => (this.errorMsg = error)
    );
  }
}
