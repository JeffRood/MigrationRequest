import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonePipe'
})
export class PhonePipePipe implements PipeTransform {

  transform(val) {
    if(val == null || val == ''){
      return;
    }
    
    let newStr = '';
    let newStr2 = '';
    let newStr3 = '';

    if (val !== null) {
      newStr = val.substr(0, 3) + '-';
      newStr2 = val.substr(3, 3) + '-';
      newStr3 = val.substr(6, 9); 
  
      return newStr + newStr2 + newStr3 ;
    } else {
      return '';
    }

}

}
