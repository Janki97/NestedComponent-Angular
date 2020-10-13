import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input('parentFrom')

  public parentFrom:FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
