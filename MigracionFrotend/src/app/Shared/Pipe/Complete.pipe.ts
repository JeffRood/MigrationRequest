import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CompletedTracking'
})
export class CompleteTracking implements PipeTransform {

  transform(val) {
    if(val == null || val == ''){
      return 'Completado';
    }
    
      return val;
    }

}
