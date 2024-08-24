import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';

interface Product {
  name: string;
  category: string;
  price: number;
}

@Component({
  selector: 'app-prime-ng-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    TableModule,
    CalendarModule,
    DropdownModule
  ],
  templateUrl: './app-prime-ng-demo.component.html',
  styleUrls: ['./app-prime-ng-demo.component.scss']
})
export class PrimeNgDemoComponent {
  inputText: string = '';
  submittedText: string = '';
  date: Date | undefined;
  selectedCategory: string | undefined;

  categories: { label: string, value: string }[] = [
    { label: 'Electronics', value: 'electronics' },
    { label: 'Clothing', value: 'clothing' },
    { label: 'Books', value: 'books' }
  ];

  products: Product[] = [
    { name: 'Smartphone', category: 'Electronics', price: 699.99 },
    { name: 'T-shirt', category: 'Clothing', price: 19.99 },
    { name: 'Novel', category: 'Books', price: 9.99 },
    { name: 'Laptop', category: 'Electronics', price: 1299.99 },
  ];

  onSubmit() {
    this.submittedText = this.inputText;
  }
}
