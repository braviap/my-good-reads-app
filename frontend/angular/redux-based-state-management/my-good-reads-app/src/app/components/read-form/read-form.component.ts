import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { BackendService } from '../../core/services/backend.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GoodRead } from '../../core/models/good-read.model';

import 'rxjs/add/operator/map';
import { AppState } from '../../app.state';
import { GoodReadActions } from '../../actions/good-reads-actions';

@Component({
  selector: 'app-read-form',
  templateUrl: './read-form.component.html',
  styleUrls: ['./read-form.component.css']
})
export class ReadFormComponent implements OnInit {

  myForm: FormGroup;
  subscription: Subscription;
  itemToBeEdited: GoodRead;
  constructor(private formBuilder: FormBuilder, private store: Store<AppState>,
    private goodReadActions: GoodReadActions, private router: Router) { }

  ngOnInit() {
    this.subscription = this.store.select((state: AppState) => state.selectedRead)
    .subscribe((selectedItem: GoodRead) => {
      if (selectedItem) {
        this.itemToBeEdited = selectedItem;
        this.myForm = this.formBuilder.group({
          'title': [this.itemToBeEdited.title, Validators.required],
          'description': [this.itemToBeEdited.description, Validators.required],
          'url': [this.itemToBeEdited.url, Validators.required],
          'category': [this.itemToBeEdited.category, Validators.required]
        })
      } else {
        this.myForm = this.formBuilder.group({
          'title': ['', Validators.required],
          'description': ['', Validators.required],
          'url': ['', Validators.required],
          'category': ['Blog', Validators.required]
        })
      }
    })
  }

  addGoodRead(formValue) {
    if (this.itemToBeEdited) {
      const newRead = new GoodRead(formValue.title, formValue.description, formValue.category,
        formValue.url, this.itemToBeEdited.isRead, this.itemToBeEdited.id);
        this.store.dispatch(this.goodReadActions.editRead(newRead));
    } else {
      const newRead = new GoodRead(formValue.title, formValue.description, formValue.category,
        formValue.url, false);
        this.store.dispatch(this.goodReadActions.addNewRead(newRead));
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
