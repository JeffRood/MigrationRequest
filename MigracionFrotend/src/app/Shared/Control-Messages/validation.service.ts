export class ValidationService {
  
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
      const config = {
          'required': 'Este Campo es Requerido',
          'invalidCreditCard': 'Is invalid credit card number',
          'invalidEmailAddress': 'Invalid email address',
          'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
          'maxlength': `El alcance debe ser menor de ${validatorValue.requiredLength}.`,
          'minlength': `Escribe mínimo ${validatorValue.requiredLength} caracteres`,
          'phoneNumberLength': `Escribe 10 caracteres mínimo`,
          'min': `Este Campo no acepta negativo`,
          'horaValida': `La Duración no es Válida`,
          'telefonoInvalido': `El Teléfono no es válido`,
          'email': 'El email no es válido ',
          'pattern': 'La URL no es valida debe contener al inicio http://',
          'patternUrl': 'La URL no es valida debe contener al inicio http://',
          'patternSpace': 'El permiso código no debe contener espacios',
      };

      return config[validatorName];
  }
}
