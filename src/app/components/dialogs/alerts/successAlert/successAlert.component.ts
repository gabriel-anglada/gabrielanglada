import { Component, OnInit } from '@angular/core';
import { ConfirmModel } from '../confirm-model.interface';
import { DialogComponent } from "ng2-bootstrap-modal";
import { CustomDialogService } from '../../../../services/custom-dialog-service.service';

@Component({
  selector: 'success-alert',
  templateUrl: 'successAlert.component.html',
  styleUrls:[ './successAlert.component.scss']
})
export class SuccessAlert extends DialogComponent<ConfirmModel, boolean> implements OnInit, ConfirmModel {
  message: string;
  labelButton: string;

  constructor(dialogService: CustomDialogService) {
    super(dialogService);
    }

  confirm() {
    this.result = true;
    this.close();
  }
  ngOnInit() {}
}
