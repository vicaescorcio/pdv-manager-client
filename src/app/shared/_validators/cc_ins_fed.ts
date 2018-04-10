import { AbstractControl } from '@angular/forms';
 
export class Cc_Ins_FedValidator {
 
	private static CC_INS_FED_REGEX = /[0-9]{14}/;
 
	static validate(control: AbstractControl): {[key: string]: boolean} {
		if (Cc_Ins_FedValidator.CC_INS_FED_REGEX.test(control.value)) {
			return null;
		}
		return { 'cc_ins_fed': true };
	}
}