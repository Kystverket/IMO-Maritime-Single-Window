import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AccountService } from 'app/shared/services/';

@Component({
  selector: 'assign-password',
  templateUrl: './assign-password.component.html'
  //styleUrls: ['./password-change.component.css']
})
export class AssignPasswordComponent implements OnInit {

	public user:any = null;
	public newPassword:string = '';
	public newPasswordCheck:string = '';
	public purpose:string = '';

	// default constructor
	constructor(public activeModal: NgbActiveModal, private accountService: AccountService) { }

	ngOnInit() {}


	public setPassword():void {

		this.accountService.setUserPassword(this.newPassword,  this.user.id).subscribe((result) => {
			this.activeModal.close(true);
		}, 
		(err) => {
			this.activeModal.close(false);
		});

	}

}
