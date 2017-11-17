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

  constructor(public backendService: BackendService) { }

  ngOnInit() {
  }

  markItemAsRead(read: GoodRead) {
    this.subscriptions = this.backendService.markAsRead(read)
    .subscribe(() => {
      console.log('Item marked as read');
    });
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

}
