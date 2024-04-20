import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from '../book/book.component';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book-list',
  standalone: true,
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
  imports: [CommonModule, BookComponent],
})
export class BookListComponent {
  books!: Book[]
  currentBookIndex = 0;
  currentBook: Book | undefined;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks$().subscribe((books) => {
      this.books = books;
      this.currentBook = this.books[this.currentBookIndex];
    });
  }

  rateBookAndMoveNext(updatedBook: Book) {
    this.bookService.updateBook$(updatedBook).subscribe(() => {
      this.currentBookIndex++;
      if (this.currentBookIndex < this.books.length) {
        this.currentBook = this.books[this.currentBookIndex];
      } else {
        this.currentBook = undefined;
        this.currentBookIndex = 0;
      }
    });
  }

  confirmStartOver() {
    if (confirm('Do you want to start over?')) {
      // this.currentBookIndex = 0;
      // this.currentBook = this.books[this.currentBookIndex];
      this.getBooks()
    }
  }
}
