import { Component } from '@angular/core';
import { Developer } from '../models/developer.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent {
  developer: Developer = new Developer(
    'Doe',
    'John',
     30,
    'Male',
   'Lorem ipsum dolor sit amet...',
  [
    { name: 'HTML', logo: 'Super HTML logo', site: 'HTML link' },
    { name: 'CSS', logo: 'Super CSS logo', site: 'CSS link' },
    { name: 'JavaScrip', logo: 'Super JavaScript logo', site: 'avaScript link' }
  ]
  );
}
