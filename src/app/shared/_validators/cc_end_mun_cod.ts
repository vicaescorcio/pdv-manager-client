import { AbstractControl } from '@angular/forms';
 
export class Cc_MunCodValidator {
 
	private static CC_MUN_COD_REGEX = /\d{7}/;
 
	static validate(control: AbstractControl): {[key: string]: boolean} {
		if (Cc_MunCodValidator.CC_MUN_COD_REGEX.test(control.value)) {
			return null;
		}
		return { 'cc_end_mun_cod': true };
	}
}