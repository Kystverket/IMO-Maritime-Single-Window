import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Credentials } from '../shared/models/credentials.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login_title = "LOGIN";

  private subscription: Subscription;

  brandNew: boolean;
  errors: string;
  isRequesting: boolean;
  submitted: boolean = false;
  credentials: Credentials = { email: '', password: ''}

  constructor() { }

  ngOnInit() {
  }

}
