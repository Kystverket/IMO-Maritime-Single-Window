import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../shared/services/login.service';
import { AccountService } from '../shared/services/account.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  clientHeight: number;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService,
    private accountService: AccountService) { 
    this.clientHeight = window.innerHeight;
  }

  ngOnInit() {
    var user_claims;
    if(user_claims = localStorage.getItem("user_claims")) {
      this.accountService.setUserClaims(
        JSON.parse(user_claims)
      );
    }
  }
  
}
