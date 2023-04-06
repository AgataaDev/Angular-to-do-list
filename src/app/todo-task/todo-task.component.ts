import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {
  @Input ()
  tasksList:Array<string>=[];
  @Output ()
  emitDone = new EventEmitter<string>();
  @Output ()
  emitRemove = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  remove(task:string): void {
    this.emitRemove.emit(task);
  }
  done(task:string): void {
    this.emitDone.emit(task);
  }
  getColor(): string {
    return this.tasksList.length >=5 ? 'red' : 'green';
  }

}
