# ACT27CSSGRID

## What CSS Grid?
CSS Grid is a powerful layout system in CSS that allows you to create complex and responsive two-dimensional layouts with rows and columns. It provides precise control over the position and alignment of elements in both horizontal and vertical dimensions

### Firebase: https://cssgridsvfc-4a.web.app
### Hashnode: https://act4.hashnode.dev/activity-27-css-grid

```typescript
## Product Layout
//products-layout.model.ts
export interface Product {
  name: string;
  description: string;
  price: number;
  image: string;
}

//product.component.ts
import { Component } from '@angular/core';
import { Product } from './product-layout.model';

@Component({
  selector: 'app-product-layout',
  templateUrl: './product-layout.component.html',
  styleUrls: ['./product-layout.component.css']
})
export class ProductLayoutComponent {
  products: Product[] = [
    {
      name: 'Sunglasses',
      description: 'Life is too short to wear boring sunglasses.',
      price: 29.99,
      image: 'sunglasses.jpg'
    },
    {
      name: 'Shirt',
      description: 'You can have anything you want in life if you dress for it.',
      price: 39.99,
      image: 'shirt.jpg'
    },
    {
      name: 'Bag',
      description: 'Life is short; buy the handbag',
      price: 19.99,
      image: 'bag.jpg'
    },
    {
      name: 'Shoes',
      description: 'I still have my feet on the ground, I just wear better shoes.',
      price: 49.99,
      image: 'shoes.jpg'
    },
    {
      name: 'Pants',
      description: 'No matter how you feel, get up, dress up and show up.',
      price: 59.99,
      image: 'pants.jpg'
    },
  ];
}


## Employee Cards
//employee-cards.model.ts
export interface Employee {
    name: string;
    position: string;
    bio: string;
    photo: string;
  }

//employee-cards.component.ts
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


## Student profiles

//student-profile.model.ts
export interface Student {
    name: string;
    major: string;
    bio: string;
    photo: string;
  }

//student-profile.component.ts
import { Component } from '@angular/core';
import { Student } from './student-profile.model';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.css'
})
export class StudentProfileComponent {
   // Sample student data
  student: Student = {
  name: 'Coniaro, Joanna Mae',
  major: 'Bachelor of Science in Information Technology',
  bio: 'A passionate learner and aspiring software developer.',
  photo: 'coniaro.jpg'
};
}


