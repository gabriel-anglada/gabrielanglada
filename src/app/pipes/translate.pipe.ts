import { Pipe } from '@angular/core';
import {TranslatePipe as BaseTranslatePipe} from '@ngx-translate/core';

@Pipe({name: 'translate'})
export class TranslatePipe extends BaseTranslatePipe {
}
