import { Component, ElementRef, Input, ViewChild, forwardRef  } from '@angular/core';
import { NG_VALUE_ACCESSOR} from '@angular/forms';
import { IKeyValue } from '@models/models';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectInputComponent),
  multi: true
};

@Component({
  selector: 'select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class SelectInputComponent {

  constructor(){
   this.blur = this.blur.bind(this)
  }

  /**
   * The placeholder for the input
   */
  @Input() placeholder?: string = ""

  /**
   * The placeholder for the input
   */
  @Input("class") cssClass?: string = ""

  /**
   * The options for the control
   */
  @Input() options?: IKeyValue[]

  /**
   * The items container
   */
  @ViewChild("dropItems", {static: true}) dropItems!: ElementRef

  /**
   * The parent container
   */
  //@ViewChild("dropContainer", {static: true}) dropContainer!: ElementRef

  // #region NgModel template definiton
  private innerValue: any;

  //Placeholders for the callbacks which are later provided
  //by the Control Value Accessor
  private onTouchedCallback: () => void = () => { };
  private onChangeCallback: (_: any) => void = () => { };

  //get accessor
  get value(): any {
      return this.innerValue;
  };

  //set accessor including call the onchange callback
  set value(v: any) {
      if (v !== this.innerValue) {
          this.innerValue = v;
          this.onChangeCallback(v);
      }
  }

  //Set touched on blur
  onBlur() {
      this.onTouchedCallback();
  }

  //From ControlValueAccessor interface
  writeValue(value: any) {
      if (value !== this.innerValue) {
          this.innerValue = value;
      }
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
      this.onChangeCallback = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
      this.onTouchedCallback = fn;
  }
  //#endregion

  selectOption(value: any){
    this.value = value
    this.drop()
  }

  drop(){
    if(this.dropItems.nativeElement.style.visibility == "visible"){
      this.dropItems.nativeElement.style.height = null
      this.dropItems.nativeElement.style.visibility = "hidden"
      this.dropItems.nativeElement.removeEventListener("blur", this.blur)
    }else{
      this.dropItems.nativeElement.style.height = "unset"
      this.dropItems.nativeElement.style.visibility = "visible"
      this.dropItems.nativeElement.focus()
      this.dropItems.nativeElement.addEventListener("blur", this.blur)
    }
  }

  blur(){
    this.drop()
  }

  getDisplay(): string{
    return this.options!.find(k => k.key == this.value)!.value
  }
}
