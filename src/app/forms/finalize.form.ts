import { Injectable } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';

import { ValidatorService } from './index';

@Injectable()
export class FinalizeForm {

    /**
     * finalizeForm - group of form controls
     */

    finalizeForm: FormGroup;
    firstName: AbstractControl;
    lastName: AbstractControl;
    email: AbstractControl;
    phone: AbstractControl;
    agreement: AbstractControl;

    constructor( 
      private _fb: FormBuilder,
      private _validator: ValidatorService
     ) {
        this._buildForm(_fb);
     }

     _buildForm( fb: FormBuilder) {
      this.finalizeForm = this._fb.group({
        'firstName': ['', Validators.required],
        'lastName': ['', Validators.required],
        'email': ['',
                  Validators.compose([Validators.required, this._validator.emailValidator])],
        'phone': ['',
                  Validators.compose([Validators.required, this._validator.phoneValidator])],
        'agreement': ['',
                      Validators.compose([Validators.required, this._validator.agreementValidator])]
      });

      this.firstName = this.finalizeForm.controls['firstName'];
      this.lastName = this.finalizeForm.controls['lastName'];
      this.email = this.finalizeForm.controls['email'];
      this.phone = this.finalizeForm.controls['phone'];
      this.agreement = this.finalizeForm.controls['agreement'];
     }
}
