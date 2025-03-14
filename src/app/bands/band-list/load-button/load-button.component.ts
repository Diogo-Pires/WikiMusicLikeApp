import { Component, Input } from '@angular/core';

@Component({
  selector: 'wb-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.css']
})
export class LoadButtonComponent {
  @Input() hasMore: Boolean = false;

  constructor() { }
}
