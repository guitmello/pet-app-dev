import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonePipe'
})
export class PhonePipePipe implements PipeTransform {

  transform(val, args) {
    const foneFormat = '(' + val.toString().substr(0, 2) + ') ' +
      val.toString().substr(2, 5) + '-' + val.toString().substr(7, 4);
    return foneFormat;
  }

}
