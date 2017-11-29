import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../core/services/backend.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public backendService: BackendService) { }

  ngOnInit() {
  }

}
