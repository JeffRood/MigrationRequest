import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'DateSpanishFormat'
})
export class DateSpanishFormatPipe implements PipeTransform {

  transform(val) {
    let meses = ['Ene', 'Feb', 'Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic']


    if(val == null || val == ''){
      return 'Completado';
    }


    
var result =  val.substr(0,2)+ '. '+  meses[+val.substr(3,2)- 1] +  ', ' + val.substr(6,4)
      return result;
    }

}

