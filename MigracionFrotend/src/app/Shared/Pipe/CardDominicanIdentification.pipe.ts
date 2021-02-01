import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'identificacionPipe'
})
export class CedulaPipePipe implements PipeTransform {

  transform(val) {
    if(val == null || val == ''){
      return;
    }
    
    let newStr = '';
    let newStr2 = '';
    let newStr3 = '';

    if (val !== null) {
      newStr = val.substr(0, 3) + '-';
      newStr2 = val.substr(3, 10) + '-';
      newStr3 = val.substr(10, 11); 
  
      return newStr + newStr2 + newStr3 ;
    } else {
      return '';
    }

}

}
