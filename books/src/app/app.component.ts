import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookListComponent } from "./book-list/book-list.component";
import { BookComponent } from './book/book.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, BookListComponent, BookComponent]
})
export class AppComponent {
  title = 'books';
}
