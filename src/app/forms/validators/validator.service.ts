import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable()
export class ValidatorService {

    phoneValidator(control: FormControl): { [s: string]: boolean } {
      let mobileNumberRegex = /^\d{9}$/i;
        if (!control.value.match(mobileNumberRegex)) {
            return {invalidPhone: true};
        }
    }

    emailValidator(control: FormControl): { [s: string]: boolean } {
      let emailRegex = /^[A-Z0-9_.+-]+@[A-Z0-9-.]+\.[A-Z]+$/i;
        if (!control.value.match(emailRegex)) {
            return {invalidEmail: true};
        }
    }

    agreementValidator(control: FormControl): { [s: string]: boolean } {
        if (!control.value === true) {
            return {invalidAgreement: true};
        }
    }
}
