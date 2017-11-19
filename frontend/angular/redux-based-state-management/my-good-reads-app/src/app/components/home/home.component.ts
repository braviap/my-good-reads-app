// import { selectAllReads } from './../../reducers/good-reads.selector';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { BackendService } from './../../core/services/backend.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GoodRead } from '../../core/models/good-read.model';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  subscriptions: Subscription;
  allReads$: Observable<GoodRead[]>;

  constructor(public backendService: BackendService, private router: Router,
  private store: Store<AppState>) {
    this.subscriptions = new Subscription();
  }

  ngOnInit() {
    // this.allReads$ = this.store.select(selectAllReads);
    this.allReads$ = this.store.select((state: AppState) => state.readsCollection)
  }

  toggleItemRead(id: number, isRead: boolean) {
    this.subscriptions = this.backendService.markItem(id, isRead)
      .subscribe(() => {
        console.log(`Item marked as ${isRead ? 'read' : 'unread'}`);
      });
  }

  editItem(read: GoodRead) {
    this.router.navigate([`/edit/${read.id}`]);
  }

  deleteItem(id: number) {
    const subs = this.backendService.deleteItem(id)
      .subscribe(() => {
        console.log('Item Deleted successfully');
      });
    this.subscriptions.add(subs);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
