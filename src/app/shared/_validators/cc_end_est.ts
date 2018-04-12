import { AbstractControl } from '@angular/forms';
 
export class Cc_EstValidator {
 
	private static CC_EST_REGEX = /[A-Z]{2}/;
    private static uf = [
    "AC",	 
    "AL",	 
    "AP",	 
    "AM",	 
    "BA",	 
    "CE",	 
    "DF",	 
    "ES",	 
    "GO",	 
    "MA",	 
    "MT",	 
    "MS",	 
    "MG",	 
    "PA",	 
    "PB",	 
    "PR",	 
    "PE",	 
    "PI",	 
    "RJ",	 
    "RN",	 
    "RS",	 
    "RO",	 
    "RR",	 
    "SC",	 
    "SP",	 
    "SE",	 
    "TO"];

   
	static validate(control: AbstractControl): {[key: string]: boolean} {
		if (Cc_EstValidator.CC_EST_REGEX.test(control.value) || !Cc_EstValidator.uf.includes(control.value)) {
			    return null;
		}
		return { 'cc_end_est': true };
	}
}