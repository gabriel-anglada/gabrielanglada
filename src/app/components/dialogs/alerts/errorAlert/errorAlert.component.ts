import { Component, OnInit } from '@angular/core';
import { ConfirmModel } from '../confirm-model.interface';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

@Component({
  selector: 'error-alert',
  templateUrl: 'component-name.component.html',
  styleUrls:[ './error-alert.component.sccs']
})
export class ErrorAlert extends DialogComponent<ConfirmModel, boolean> implements OnInit, ConfirmModel {
  iconPath: string;
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
