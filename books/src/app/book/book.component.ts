import { Component, Input } from '@angular/core';

interface Book {
  title: string;
  description: string;
  author: string;
  rating: number;
}

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  @Input() book!: Book;

  rateBook(change: number) {
    this.book.rating = Math.min(Math.max(this.book.rating + change, 0), 5);
  }
}
