import { Component } from '@angular/core';
import { DialogService } from "ng2-bootstrap-modal";
import { ErrorAlert } from '../dialogs/alerts/errorAlert/errorAlert.component';

@Component({
  selector: 'ons-page[component-library]',
  templateUrl: './component-library.component.html',
  styleUrls: [
    './component-library.component.scss'
  ]
})

export class ComponentLibrary {

  constructor(private dialogService: DialogService) {}

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

showConfirm() {

}
}
