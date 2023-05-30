import { Component } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';


@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent {
  developer: Developer = new Developer();

  constructor() {
    const skill1 = new Skill('HTML', 'Super HTML logo', 'HTML link');
    const skill2 = new Skill('CSS', 'Super CSS logo', 'CSS link');
    const skill3 = new Skill('JavaScript', 'Super JavaScript logo', 'JavaScript link');
    
    this.developer.lastName = 'Doe';
    this.developer.firstName = 'John';
    this.developer.age = 30;
    this.developer.gender = 'Male';
    this.developer.bio = 'Lorem ipsum dolor sit amet...';
    this.developer.skills = [skill1, skill2, skill3];
}
}