import { Component, OnInit, Input } from '@angular/core';
import { PackageTypeModel } from 'app/shared/models/package-type-model';
import { Subscription } from 'rxjs/Subscription';
import { FalCargoService } from 'app/shared/services/fal-cargo.service';
import { CargoItemModel } from 'app/shared/models/cargo-item-model';

@Component({
  selector: 'app-cargo-item-form',
  templateUrl: './cargo-item-form.component.html',
  styleUrls: ['./cargo-item-form.component.css']
})
export class CargoItemFormComponent implements OnInit {
  @Input() cargoItemModel: CargoItemModel;

  packageTypeList: PackageTypeModel[] = [];
  selectedPackageType: PackageTypeModel;
  packageTypeListSubscription: Subscription;

  constructor(
    private cargoService: FalCargoService
  ) { }

  onPackageTypeSelect($event) {
    this.cargoItemModel.packageType = $event;
    this.cargoItemModel.packageTypeId = $event.packageTypeId;
  }

  ngOnInit() {
    this.packageTypeListSubscription = this.cargoService.getPackageTypeList().subscribe(
      result => {
        this.packageTypeList = result;
      }
    );
  }

  touchData() {
    // not implemented
  }

}
