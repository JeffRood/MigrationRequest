import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'EstadoSolicitud'
})
export class Estado_Solicitud implements PipeTransform { 
    
    transform(value: number): String {
    let Resultado = '';

    switch (value) {
        case 1: 
         case 2: 
            Resultado = 'Pendiente de Revision'
                break;
                
                case 3: 
                Resultado = 'Aprobado'
                    break;
                    
                    case 4: 
                    Resultado = 'Rechazado'
                        break;
        default: 'Pendiente de revisión'
            break;
    }
      

    
    return Resultado;
  }

}
