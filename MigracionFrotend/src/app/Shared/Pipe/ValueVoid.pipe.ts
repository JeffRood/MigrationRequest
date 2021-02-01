import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkvoid'
})
export class CheckVoidPipe implements PipeTransform {

  transform(val) {
    if(val == null || val == ''){
      return `<small>No especificado</small>`;
    }
    
      return `${'<span>' + val + '</span>' }`;
    }

}
