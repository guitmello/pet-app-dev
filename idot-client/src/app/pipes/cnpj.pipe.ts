import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cnpj'
})
export class CnpjPipe implements PipeTransform {

  transform(val, args) {
    const cnpjFormat = val.toString().substr(0, 2) + '.' +
      val.toString().substr(2, 3) + '.' + val.toString().substr(5, 3)
      + '/' + val.toString().substr(8, 4) + '-' + val.toString().substr(12, 2);
    return cnpjFormat;
  }

}
