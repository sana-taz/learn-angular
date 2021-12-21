import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ToastrService } from 'ngx-toastr';
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
  public newTask = { taskTitle: '', showInput: 'false', status: 'pending' };
  constructor(
    private _taskservice: HttpService,
    private toastr: ToastrService
  ) {}
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
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
  showInputBox() {
    this.newTask.taskTitle = '';
    this.showAddInput = true;
  }
  createTask() {
    this._taskservice.addTask(this.newTask).subscribe(
      (data: any) => {
        const newTask = data.task;
        this.showAddInput = false;
        this.tasks.push(newTask);
      },
      (error) => (this.errorMsg = error)
    );
    this.toastr.success('Task Added successfully', '', {
      timeOut: 1500,
      disableTimeOut: false,
    });
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
    this.toastr.success('Task Deleted successfully', '', {
      timeOut: 1500,
      disableTimeOut: false,
    });
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
    this.toastr.success('Task updated successfully', '', {
      timeOut: 1500,
      disableTimeOut: false,
    });
  }
  statusChanged(task: any, index: any) {
    task = this.tasks[index];
    this.newIndex = index;
    task.status = 'completed';
    this._taskservice.completeTask(task.taskId).subscribe(
      (data: any) => {
        task = data.task;
      },
      (error) => (this.errorMsg = error)
    );
    this.toastr.success('Task Completed successfully', '', {
      timeOut: 1500,
      disableTimeOut: false,
    });
  }
}
