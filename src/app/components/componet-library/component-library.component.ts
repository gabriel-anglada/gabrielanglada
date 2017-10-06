import { Component } from '@angular/core';
import { ErrorAlertComponent } from '../dialogs/alerts/errorAlert/errorAlert.component';
import { SuccessAlertComponent } from '../dialogs/alerts/successAlert/successAlert.component';
import { DialogService } from '../../services/custom-dialog-service.service';

@Component({
  selector: 'ons-page[component-library]',
  templateUrl: './component-library.component.html',
  styleUrls: [
    './component-library.component.scss'
  ]
})

export class ComponentLibrary {
  constructor(private dialogService: DialogService){

  }
  //card component
  private cardNumber = "1234 1234 1234 1234";
  private cardAmount = 1234.56;

  //tags
  private tagTitle = "Financiación";
  private tagAmount = 1234.56;

  //movement-lines
  private movements = [
    {price: 1234.12, name: "Pull Bear", company: "Arteixo"},
    {price: 4341.23, name: "Pull Cat", company: "Arteixo"},
    {price: 4344.43, name: "Pull Dog", company: "Arteixo"},
  ];

  //account lines
  private accounts = [
    {date: "3 May", name: "Suministros Luz - Endesa S.L. Corporation", balance: 12.56, total: 12867, type: "positive" },
    {date: "3 May", name: "Suministros Luz - Endesa S.L. Corporation", balance: -12.56, total: 12867, type: "negative" },
    {date: "3 May", name: "Suministros Luz - Endesa S.L. Corporation", balance: 12.56, total: 12867, type: "positive" },
    {date: "3 May", name: "Suministros Luz - Endesa S.L. Corporation", balance: -12.56, total: 12867, type: "negative" },
    {date: "3 May", name: "Suministros Luz - Endesa S.L. Corporation", balance: 12.56, total: 12867, type: "positive" }
  ];

  showError() {
    this.dialogService.addErrorDialog(ErrorAlertComponent, {
      message: "Error al transferir",
      labelButton: "De acuerdo"
    });
  }
  showSuccess() {
    this.dialogService.addSuccessDialog(SuccessAlertComponent, {
      message: "Transferencia exitosa",
      labelButton: "De acuerdo"
    });
  }
}
