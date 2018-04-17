import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../../shared/services/user.service';
import { UserModel } from '../../../../../shared/models/user-model';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
  providers: [UserModel, UserService]
})
export class RegisterUserComponent implements OnInit {

  constructor(private userModel: UserModel, private userService: UserService) { }

  registerUser(newUser: any) {
    this.userService.registerUser(newUser);
  }

  ngOnInit() {
  }

}
