import { Component, EventEmitter, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AccountService } from 'app/shared/services/';

@Component({
	standalone: false,
	selector: 'app-assign-password',
	changeDetection: ChangeDetectionStrategy.Eager,
	templateUrl: './assign-password.component.html'
	//styleUrls: ['./password-change.component.css']
})
export class AssignPasswordComponent implements OnInit {

	public user: any = null;
	public newPassword = '';
	public newPasswordCheck = '';
	public purpose = '';

        // Referenced by the template
        public fieldFocused = false;
        public submissionReady = false;
        public actionSucceeded = false;
        public successMessage = '';
        public errors = '';

        get fieldsFilled(): boolean {
                return this.newPassword !== '' && this.newPasswordCheck !== '';
        }

        get passwordMatch(): boolean {
                return this.fieldsFilled && this.newPassword === this.newPasswordCheck;
        }
	public $sucess: EventEmitter<boolean> = new EventEmitter;
	public $error: EventEmitter<boolean> = new EventEmitter;

	// default constructor
	constructor(public activeModal: NgbActiveModal, private accountService: AccountService) { }

	ngOnInit() { }


	public setPassword(): void {

		this.accountService.setUserPassword(this.newPassword, this.user.id).subscribe((result) => {
			this.activeModal.close(true);
		},
			(err) => {
				this.activeModal.close(false);
			});

	}

}
