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
  books!: Book[];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks$().subscribe((books) => (this.books = books));
  }

  updateBook(updatedBook: Book) {
    const index = this.books.findIndex((book) => book.id === updatedBook.id);
    if (index !== -1) {
      this.books[index] = updatedBook;
    }
  }
}
