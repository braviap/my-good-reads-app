import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { BackendService } from './../../core/services/backend.service';
import { Component, OnInit } from '@angular/core';
import { GoodRead } from '../../core/models/good-read.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  subscriptions: Subscription;

  constructor(public backendService: BackendService, private router: Router) { }

  ngOnInit() {
  }

  toggleItemRead(read: GoodRead) {
    this.subscriptions = this.backendService.markItem(read)
    .subscribe(() => {
      console.log(`Item marked as ${read.isRead ? 'read' : 'unread'}`);
    });
  }

  editItem(read: GoodRead) {
    console.log('item to be edited');
    // this.router.navigate()
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

}
