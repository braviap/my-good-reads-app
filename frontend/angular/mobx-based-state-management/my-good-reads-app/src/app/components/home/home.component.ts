import { GoodReadStore } from './../../core/store/reads.store';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GoodRead } from '../../core/models/good-read.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  subscriptions: Subscription;

  constructor(public store: GoodReadStore, private router: Router) {
    this.subscriptions = new Subscription();
  }

  ngOnInit() {
  }

  toggleItemRead(id: number, isRead: boolean) {
    this.store.toggleItemRead(id, isRead);
  }

  editItem(read: GoodRead) {
    this.router.navigate([`/edit/${read.id}`]);
  }

  deleteItem(id: number) {
    this.store.deleteRead(id);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
