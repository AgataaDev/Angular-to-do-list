import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// ten komponent wyswietla zadania, posiada tablicę zadań i zadań wykonanych, wykonuje na nich operacje
//ale eventy odbiera z podrzednych komponentow
//podrzędne komponenty zajmują się wyświetlaniem i przyjmowaniem tasków, nie wykonują operacji
export class AppComponent implements OnInit {

  tasksList:Array<string> = [];
  doneList:Array<string> = [];
  title:string = '';
  ngOnInit(): void {
    this.tasksList = ['Sprzątanie', 'Nauka Angulara', 'Podlewanie kwiatów', 'Zakupy'];
  }

  add(task:string):void  {
    this.tasksList.push(task);
  }
  done(task:string):void {
    this.doneList.push(task);
    this.remove(task)
  }
  remove(task:string):void {
    this.tasksList = this.tasksList.filter(e => e!==task);
  }
}
