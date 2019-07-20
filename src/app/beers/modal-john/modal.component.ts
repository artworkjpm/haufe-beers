import {Component, Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'modal',
  styleUrls: ['./modal.component.scss'],
  templateUrl: './modal.component.html'
})
export class ModalComponent {
  @Output() onClose = new EventEmitter();

  close () {
    this.onClose.emit();
  }
}
