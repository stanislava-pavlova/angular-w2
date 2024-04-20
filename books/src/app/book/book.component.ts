import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  @Input() book!: Book;
  @Output() rate = new EventEmitter<Book>();

  constructor(private bookService: BookService) {}

  rateBook(change: number) {
    const updatedRating = this.book.rating + change;
    const updatedVotes = this.book.votes + 1;

    const updatedBook: Book = {
      ...this.book,
      rating: updatedRating,
      votes: updatedVotes,
    };

    this.bookService.updateBook$(updatedBook).subscribe(() => {
      this.rate.emit(updatedBook);
    });
  }

  calulateAvgRate() {
    const numOfRatings = this.book.rating === 0 ? 1 : this.book.votes
    return (this.book.rating / numOfRatings).toFixed(2)
  }
}
