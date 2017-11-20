// import { selectAllReads } from './../../reducers/good-reads.selector';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GoodRead } from '../../core/models/good-read.model';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../app.state';
import { GoodReadActions } from '../../actions/good-reads-actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allReads$: Observable<GoodRead[]>;

  constructor( private router: Router,
  private store: Store<AppState>, private goodReadActions: GoodReadActions) {
  }

  ngOnInit() {
    // this.allReads$ = this.store.select(selectAllReads);
    this.allReads$ = this.store.select((state: AppState) => state.readsCollection)
  }

  toggleItemRead(id: number, isRead: boolean) {
    if (isRead) {
      this.store.dispatch(this.goodReadActions.markAsRead(id))
    } else {
      this.store.dispatch(this.goodReadActions.markAsUnread(id))
    }
  }

  editItem(read: GoodRead) {
    this.store.dispatch(this.goodReadActions.loadRead(read))
    this.router.navigate([`/edit/${read.id}`]);
  }

  deleteItem(id: number) {
    // To implement
    console.log('Deleting not working still');
  }

  createNewItem() {
    this.store.dispatch(this.goodReadActions.loadNewRead());
    this.router.navigate(['/new']);
    
  }

  ngOnDestroy() {
  }

}
