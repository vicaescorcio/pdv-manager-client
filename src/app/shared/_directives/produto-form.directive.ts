import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";
import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[prod]"
})
export class ProdutoForm {
  constructor(private el: ElementRef) {}

  @HostListener("mouseenter")
  onMouseEnter() {
    this.prod("yellow");
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.prod(null);
  }
 
    // THIS WILL BE FIRED IF SOMEONE CHANGES THE INPUT
 @HostListener('keyup', ['$event'])
    inputChanged(event) {
    if (event.target.value) {
        console.log('not empty!');
        }
      else {}
    }  

  private prod(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
