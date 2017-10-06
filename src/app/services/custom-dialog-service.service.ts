import { Injectable, Type } from "@angular/core";
import { DialogService, DialogComponent, DialogOptions } from "ng2-bootstrap-modal";

import { Observable } from "rxjs";

export class DialogServiceConfig {
  container: HTMLElement=null;
}

@Injectable()
export class CustomDialogService extends DialogService {
  addSuccessDialog<T, T1>(component:Type<DialogComponent<T, T1>>, data?:T, options?:DialogOptions): Observable<T1> {
    return this.addDialog(component, data, options);
  }
  addErrorDialog<T, T1>(component:Type<DialogComponent<T, T1>>, data?:T, options?:DialogOptions): Observable<T1> {
    return this.addDialog(component, data, options);
  }
}
