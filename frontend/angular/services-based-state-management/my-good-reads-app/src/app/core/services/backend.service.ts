import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class BackendService {
  baseAPIRURL = 'http://localhost:3000/api';
  reads: GoodRead[];
  subs: Subscription;
  constructor(private http: HttpClient) { 
    this.reads = [];
  }

  fetchAllReads() {
    const url = `${this.baseAPIRURL}/index`;
    this.subs = this.http.get<GoodRead[]>(url)
    .subscribe(data => this.reads = data);
  }

  get allReads(): GoodRead[] {
    return this.reads;
  }

}
