import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../../shared/services/user.service';
import { UserModel } from '../../../../../shared/models/user-model';
import { Role } from '../../../../../shared/models/role-model';
import { AccountService } from '../../../../../shared/services/account.service';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
  providers: [UserModel, UserService, AccountService]
})

export class RegisterUserComponent implements OnInit {

  selectedRoles : any;
  roleList: any[];
  brandNew: boolean;
  errors: string;
  isRequesting: boolean;
  submitted: boolean = false;
  user: UserModel = { 
    userName: '',
    email: '',
    phoneNumber: '',
    firstName: '',
    lastName: ''
  };

  constructor(
    private userModel: UserModel,
    private userService: UserService,
    private accountService: AccountService
    ) { }

  registerUser({ value, valid }: { value: UserModel, valid: boolean }) {
    this.submitted = true;
    this.isRequesting = true;
    this.errors = '';
    if(valid) {
      this.userService.registerUser(value);
    }

    
  }

  ngOnInit() {
    this.accountService.getAllRoles().subscribe(
      data => this.roleList = data
    );
  }



}
