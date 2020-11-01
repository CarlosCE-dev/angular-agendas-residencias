import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
moment.locale('es');

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: String): String {
    // @ts-ignore
    return moment(value).format('MMMM Do');
  }

}
