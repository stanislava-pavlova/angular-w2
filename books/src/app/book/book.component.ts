import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  @Input() book!: Book;
  @Output() rate = new EventEmitter<Book>();

  constructor(private bookService: BookService) {}

  rateBook(change: number) {
    const updatedBook = {
      ...this.book,
      rating: Math.min(Math.max(this.book.rating + change, 0), 5),
    };

    this.bookService.updateBook$(updatedBook).subscribe(() => {
      this.rate.emit(updatedBook);
    });
  }
}
