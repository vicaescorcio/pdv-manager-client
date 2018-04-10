import { AbstractControl } from '@angular/forms';
 
export class Cc_FilValidator {
 
	private static CC_FIL_REGEX = /[0-9A-Z]{3}/;
 
	static validate(control: AbstractControl): {[key: string]: boolean} {
		if (Cc_FilValidator.CC_FIL_REGEX.test(control.value)) {
			return null;
		}
		return { 'cc_fil': true };
	}
}