import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DateOfBirth } from './date-of-birth.interface';
import { PortCallPassengerListService } from 'app/shared/services/port-call-passenger-list.service';

@Component({
  selector: 'app-date-of-birth',
  templateUrl: './date-of-birth.component.html',
  styleUrls: ['./date-of-birth.component.css']
})
export class DateOfBirthComponent implements OnInit {
  dateOfBirthModel: DateOfBirth = {
    year: null,
    month: null,
    day: null
  };

  dateModel: NgbDateStruct;
  validDateFormat = true;

  constructor(private passengerService: PortCallPassengerListService) { }

  dateChanged($event): void {
    this.updateModel($event);
    console.log($event);
    console.log('dateOfBirthModel: ' + JSON.stringify(this.dateOfBirthModel));
  }

  private updateModel($event): void {
    if ($event != null) {
      if (this.hasValidDateFormat()) {
        this.updateValidDate(true);
        this.dateOfBirthModel.year = $event.year;
        this.dateOfBirthModel.month = $event.month;
        this.dateOfBirthModel.day = $event.day;
        this.validateData();
      } else {
        this.updateValidDate(false);
      }
    } else {
      this.updateValidDate(true);
    }
    // meningen at dette settes til null
    this.dateOfBirthModel.year = null;
    this.dateOfBirthModel.month = null;
    this.dateOfBirthModel.day = null;
    this.validateData();
  }

  private updateValidDate(valid: boolean) {
    this.validDateFormat = valid;
  }

  private hasValidDateFormat() {
    return typeof this.dateModel !== 'string';
  }

  private validateData() {
    // TODO: Validate
    // then:
    if (this.hasRequiredData()) {
      this.passengerService.setDateOfBirth(this.dateOfBirthModel);
    }
  }

  private hasRequiredData(): boolean {
    return (
      this.dateOfBirthModel.year != null &&
      this.dateOfBirthModel.month != null &&
      this.dateOfBirthModel.day != null
    );
  }

  ngOnInit() {
    this.passengerService.dateOfBirthData$.subscribe(date => {
      if (date) {
        this.dateOfBirthModel = date;
      }
    });

    if (this.dateOfBirthModel != null) {
      this.dateModel = {
        year: this.dateOfBirthModel.year,
        month: this.dateOfBirthModel.month,
        day: this.dateOfBirthModel.day
      };
    }
  }

}
