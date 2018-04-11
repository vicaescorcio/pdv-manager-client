import { AbstractControl } from '@angular/forms';
 
export class Cc_InsMunValidator {
 
	private static CC_INS_MUN_REGEX = /\d*/;
 
	static validate(control: AbstractControl): {[key: string]: boolean} {
		if (Cc_InsMunValidator.CC_INS_MUN_REGEX.test(control.value)) {
			return null;
		}
		return { 'cc_ins_est': true };
	}
}