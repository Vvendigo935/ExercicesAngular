import { Component } from '@angular/core';
import { SortPipe } from '../../utils/sort-pipe';
import { Title } from '@angular/platform-browser';
import { Book } from './books';


type Order = "asc" | "desc"

@Component({
  selector: 'app-library',
  imports: [SortPipe],
  templateUrl: './library.html',
  styleUrl: './library.css'
})

export class Library {



  book1: Book[] = ["title1", "author1", false]
  book2: Book[] = ["title2", "author2", true]
  book3: Book[] = ["title3", "author3", false]

  order : Order = "desc"

  setOrder(order: Order) : void {
    this.order = order
  }

  removeBook(index : number) : void {
    this.books = this.books.filter((_, i) => i != index)
  }
}
