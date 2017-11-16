import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-read-form',
  templateUrl: './read-form.component.html',
  styleUrls: ['./read-form.component.css']
})
export class ReadFormComponent implements OnInit {

  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      'title': ['', Validators.required],
      'description': ['', Validators.required],
      'url': ['', Validators.required],
      'category': ['Blog',Validators.required]
    })
  }

  addGoodRead(value) {
    console.log(value);
  }

}
