import { GoodRead } from './../../core/models/good-read.model';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BackendService } from '../../core/services/backend.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/skipWhile';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private store: Store<AppState>) { }
  readCounter$: Observable<number>;

  ngOnInit() {
    this.readCounter$ = this.store.select((state: AppState) => state.readsCollection)
      .skipWhile(data => !data)
      .do(x => console.log(`Reading counter at ${Date.now()}`))
      .map((arr: GoodRead[]) => arr.filter(read => read.isRead).length);
  }

}
