import { Component, OnInit } from '@angular/core';
interface OrderBy {
  value: string;
}

@Component({
  selector: 'app-order-by',
  templateUrl: './order-by.component.html',
  styleUrls: ['./order-by.component.css']
})
export class OrderByComponent implements OnInit {
    /* Select */
    orderBy: OrderBy[] = [
      { value: 'title' },
      { value: 'date' }
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
