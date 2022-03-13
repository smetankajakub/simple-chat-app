import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  persons: any[] = [];

  public addPerson(): void {
    this.persons.push('Person ' + (this.persons.length + 1));
  }
}
