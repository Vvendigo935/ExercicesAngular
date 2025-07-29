import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../components/library/books';

@Pipe({
    name: 'emoji',
    standalone: true
  })

  export class EmojiPipe implements PipeTransform {

    isRead: boolean = Book[...Book];
  
transform(value: any, ...args: any[]) {
    if(isRead === true){
       return "👍"
    }else{
       return "👎"
    }
}


  
  }