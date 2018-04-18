import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  clientHeight: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private loginService: LoginService) { 
    this.clientHeight = window.innerHeight;
  }

  ngOnInit() {
    console.log("menu component loading...");
    console.log({
      "auth_token" : localStorage.getItem("auth_token")
    });
    if(!this.loginService.isLoggedIn()) {
      console.log("NOT LOGGED IN!");
      this.router.navigate(['/login']);
    }
  }

}
