import { GoodReadActions } from './actions/good-reads-actions';
import { BackendService } from './core/services/backend.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ 
  title = 'app';
  constructor(private backendService: BackendService,
  private store: Store<AppState>, private goodReadActions: GoodReadActions) {}

  ngOnInit() {
    this.store.dispatch(this.goodReadActions.fetchAllReads());
  }
}
