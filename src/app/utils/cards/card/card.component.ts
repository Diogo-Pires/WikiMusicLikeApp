import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wb-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }
}
