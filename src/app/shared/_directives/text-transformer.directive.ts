import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Directive, forwardRef, Input, OnChanges, SimpleChanges, Renderer, ElementRef } from '@angular/core';
import { TextMaskModule, MaskedInputDirective } from 'angular2-text-mask';

@Directive({
    selector: 'input[type=text]',
    host: {
        '(input)': 'ref.nativeElement.value=$event.target.value.toUpperCase()',
    }

})
export class UpperCaseText {
    constructor(private ref: ElementRef) {
    }
}