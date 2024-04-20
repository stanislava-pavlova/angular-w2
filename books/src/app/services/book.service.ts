import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'http://localhost:3000/books';

  constructor(private http: HttpClient) {}

  getBooks$(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  updateBook$(book: Book): Observable<Book> {
    const url = `${this.apiUrl}/${book.id}`;
    return this.http.put<Book>(url, book);
  }
}
