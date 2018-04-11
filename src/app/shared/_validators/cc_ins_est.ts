import { AbstractControl } from '@angular/forms';
 
export class Cc_InsEstValidator {
 
	private static CC_INS_EST_REGEX = /\d+/;
 
	static validate(control: AbstractControl): {[key: string]: boolean} {
		if (Cc_InsEstValidator.CC_INS_EST_REGEX.test(control.value)) {
			return null;
		}
		return { 'cc_ins_est': true };
	}
}