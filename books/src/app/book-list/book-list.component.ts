import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from '../book/book.component';

interface Book {
  title: string;
  description: string;
  author: string;
  rating: number;
}

@Component({
    selector: 'app-book-list',
    standalone: true,
    templateUrl: './book-list.component.html',
    styleUrl: './book-list.component.scss',
    imports: [CommonModule, BookComponent]
})
export class BookListComponent {
  books: Book[] = [
    {
      title: 'Book 1',
      description: 'Description of Book 1',
      author:  'Author 1',
      rating: 0,
    },
    {
      title: 'Book 2',
      description: 'Description of Book 2',
      author:  'Author 2',
      rating: 0,
    },
    {
      title: 'Book 3',
      description: 'Description of Book 3',
      author:  'Author 3',
      rating: 0,
    },
    {
      title: 'Book 4',
      description: 'Description of Book 4',
      author:  'Author 4',
      rating: 0,
    },
    {
      title: 'Book 5',
      description: 'Description of Book 5',
      author:  'Author 5',
      rating: 0,
    },
  ];
}
