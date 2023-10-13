import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { Person } from './interfaces/person';
import { PersonAltComponent } from './person-alt/person-alt.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent, PersonAltComponent],
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

  person2: Person = {
    givenName: 'Niko',
    surName: 'Kont',
    age: 24,
    email: '@aueb.gr',
    address: 'Athens, Greece'
  };
}