import { AbstractControl, ValidationErrors, Validators, Validator } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import validator from 'Validator';

export class AppValidators{

    constructor(){

    }

    static formBuilder: any;

          static  cannotcontainNegativeVal(control : AbstractControl): ValidationErrors| null{

                if((control.value) < 0){
                     return {cannotcontainNegativeVal : true};
                }
                else
                {
                    return null;
                }
            
            }

/*
           static  alphabet(control : AbstractControl): ValidationErrors| null{

                          
               if( (validator.isAlpha(control.value)) == true )
               {
                  return { alphabet : true}

               }
               else
               {
                   return null
               }

            }

          /*  static  alphanumeric(control : AbstractControl): ValidationErrors| null{


                if( (validator.isAlphanumeric(control.value)) == true )
                {
                   return { alphanumeric : true}
 
                }
                else
                {
                    return null
                }
 
             }

    
*/
        }