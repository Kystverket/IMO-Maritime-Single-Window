import { Component, EventEmitter, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AccountService } from 'app/shared/services/';

@Component({
  selector: 'assign-password',
  templateUrl: './assign-password.component.html'
  //styleUrls: ['./password-change.component.css']
})
export class AssignPasswordComponent implements OnInit {

	public user: any = null;
	public newPassword = '';
	public newPasswordCheck = '';
	public purpose = '';

	public $sucess: EventEmitter<boolean> = new EventEmitter;
	public $error: EventEmitter<boolean> = new EventEmitter;

	// default constructor
	constructor(public activeModal: NgbActiveModal, private accountService: AccountService) { }

	ngOnInit() {}


	public setPassword(): void {

		this.accountService.setUserPassword(this.newPassword,  this.user.id).subscribe((result) => {
			this.activeModal.close(true);
			console.log(result);
		},
		(err) => {
			console.log(err);
			this.activeModal.close(false);
		});

	}

}
