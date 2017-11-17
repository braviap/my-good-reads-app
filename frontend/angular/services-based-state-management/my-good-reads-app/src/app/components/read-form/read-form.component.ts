import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { BackendService } from '../../core/services/backend.service';
import { Router } from '@angular/router';
import { GoodRead } from '../../core/models/good-read.model';

@Component({
  selector: 'app-read-form',
  templateUrl: './read-form.component.html',
  styleUrls: ['./read-form.component.css']
})
export class ReadFormComponent implements OnInit {

  myForm: FormGroup;
  subscription: Subscription;
  constructor(private formBuilder: FormBuilder, private apiService: BackendService,
  private router: Router) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      'title': ['', Validators.required],
      'description': ['', Validators.required],
      'url': ['', Validators.required],
      'category': ['Blog', Validators.required]
    })
  }

  addGoodRead(formValue) {
    const newRead = new GoodRead(formValue.title, formValue.description, formValue.category,
      formValue.url, false);
    this.subscription = this.apiService.addNewRead(newRead)
    .subscribe(() => {
      console.log('Data added successfully');
      // Navigate to home page
      this.router.navigate(['/home']);
    })
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
