import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { Person } from './interfaces/person';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Nikolas';
  lastName = 'Kontaxakis';

  person: Person = {
    givenName: 'Nikolas',
    surName: 'Kontaxakis',
    age: 24,
    email: '@aueb.gr',
    address: 'Athens, Greece'
  };
}