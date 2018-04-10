import { AbstractControl } from '@angular/forms';
 
export class Tx_TelValidator {
 
	private static TX_TEL_REGEX = / (^\(\d{2}\)\s(\d{5}|\d{4})\-\d{4}$)*/;
 
	static validate(control: AbstractControl): {[key: string]: boolean} {
		if (Tx_TelValidator.TX_TEL_REGEX.test(control.value)) {
			return null;
		}
		return { 'tx_end_tel': true };
	}
}