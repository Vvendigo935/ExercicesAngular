import { DatePipe, DecimalPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { SortedPipe } from '../../utils/sorted-pipe';
import { orderBy } from 'lodash';
import { Series } from '../../pages/series/series';

@Component({
  selector: 'app-pipes',
  imports: [UpperCasePipe, LowerCasePipe, DatePipe, DecimalPipe, SortedPipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css'
})
export class Pipes {

  series: string[] = []
}
