import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GoodReadStore } from '../../core/store/reads.store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {

  constructor(public store: GoodReadStore) { }

  ngOnInit() {
  }

}
