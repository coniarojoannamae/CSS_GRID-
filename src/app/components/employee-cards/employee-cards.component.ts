import { Component } from '@angular/core';
import { Employee } from './employee-cards.model';

@Component({
  selector: 'app-employee-cards',
  templateUrl: './employee-cards.component.html',
  styleUrl: './employee-cards.component.css'
})
export class EmployeeCardsComponent {
  employees: Employee[] = [
    {
      name: 'John Doe',
      position: 'Software Engineer',
      bio: 'A passionate software engineer with 5 years of experience.',
      photo: 'John Doe.jpg'
    },
    {
      name: 'Jane Smith',
      position: 'Project Manager',
      bio: 'Experienced project manager with a knack for leadership.',
      photo: 'Jane Smith.jpg'
    },
    {
      name: 'Alice Johnson',
      position: 'UX Designer',
      bio: 'Creative UX designer focused on user-centered design.',
      photo: 'Alice Johnson.jpg'
    },
    {
      name: 'Bob Brown',
      position: 'Data Scientist',
      bio: 'Data scientist with expertise in machine learning.',
      photo: 'Bob Brown.jpg'
    },
    {
      name: 'Charlie Davis',
      position: 'DevOps Engineer',
      bio: 'DevOps engineer with a passion for automation.',
      photo: 'Charlie Davis.jpg'
    },
  ];
}
