import { Component, OnInit } from '@angular/core';
import { ConfirmModel } from '../confirm-model.interface';
import { DialogComponent } from "ng2-bootstrap-modal";
import { DialogService } from '../../../../services/custom-dialog-service.service';

@Component({
  selector: 'error-alert',
  templateUrl: 'errorAlert.component.html',
  styleUrls:[ './errorAlert.component.scss']
})
export class ErrorAlert extends DialogComponent<ConfirmModel, boolean> implements OnInit, ConfirmModel {
  message: string;
  labelButton: string;

  constructor(dialogService: DialogService) {
    super(dialogService);
    }

  confirm() {
    this.result = true;
    this.close();
  }
  ngOnInit() {}
}
