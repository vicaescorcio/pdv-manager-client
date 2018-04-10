import { AbstractControl } from '@angular/forms';
 
export class Cc_CptValidator {
 
	private static CC_CPT_REGEX = /\d{2}.\d{3}-\d{3}/;
 
	static validate(control: AbstractControl): {[key: string]: boolean} {
		if (Cc_CptValidator.CC_CPT_REGEX.test(control.value)) {
			return null;
		}
		return { 'cc_end_cpt': true };
	}
}