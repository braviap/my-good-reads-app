import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { GoodRead } from '../../core/models/good-read.model';

@Component({
  selector: 'app-read-card',
  templateUrl: './read-card.component.html',
  styleUrls: ['./read-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReadCardComponent implements OnInit {
  @Input() readItem: GoodRead;
  @Output() deleteEvent: EventEmitter<null>;
  @Output() checkEvent: EventEmitter<null>;
  @Output() editEvent: EventEmitter<null>;

  constructor() {
    this.deleteEvent = new EventEmitter();
    this.checkEvent = new EventEmitter();
    this.editEvent = new EventEmitter();
  }

  ngOnInit() {}

  deleteItem() {
    this.deleteEvent.emit();
  }

  checkItem() {
    this.checkEvent.emit();
  }
  
  editItem() {
    this.editEvent.emit();
  }
}
