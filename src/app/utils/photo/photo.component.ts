import { Component, Input } from '@angular/core';

@Component({
    selector: 'wb-photo',
    templateUrl: 'photo.component.html'
})
export class PhotoComponent {
  @Input() description = "";
  @Input() url = "";
  @Input() width = "";
}