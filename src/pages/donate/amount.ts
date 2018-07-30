import { FormControl } from '@angular/forms';
 
export class AmountValidator {
 
    static isValid(control: FormControl): any {
 
        if(isNaN(control.value)){
            return {
                "not a number": true
            };
        }
 
        if(control.value <= 0.5 || control.value > 5000){
            return {
                "not realistic": true
            };
        }
 
        return null;
    }
 
}