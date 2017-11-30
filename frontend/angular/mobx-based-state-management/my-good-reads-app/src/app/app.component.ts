import { BackendService } from './core/services/backend.service';
import { Component, OnInit } from '@angular/core';
import { GoodReadStore } from './core/store/reads.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ 
  title = 'app';
  constructor(private store: GoodReadStore) {}

  ngOnInit() {
    this.store.loadAllReads();
  }
}
