import { Component, ElementRef, Input, ViewChild, forwardRef  } from '@angular/core';
import { NG_VALUE_ACCESSOR} from '@angular/forms';
import { CustomFormControl } from '@extensions/control.extensions';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TextInputComponent),
  multi: true
};

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class TextInputComponent {

  constructor(){
   
  }

  /**
   * 
   */
  @Input("class") cssClass?: string

  /**
   * The type of input control
   */
  @Input("type") type: "text" | "password" | "number" | "phone" | "email" = "text"

  /**
   * The placeholder for the input
   */
  @Input() placeholder?: string = ""

  /**
   * The validation class to show accent color for the control when validating
   */
  @Input() validationClass?: string | "danger" | "success" | "info" | "warning" | null

  /**
   * Determines if validation messages and symbols should be displayed
   */
  @Input() showValidation?: boolean = false

  /**
   * The referenced form control
   */
  @Input() control!: CustomFormControl

  /**
   * The input element
   */
  @ViewChild("inputEl", {static: true}) inputEl!: ElementRef

  /**
   * The container element
   */
  @ViewChild("textEl", {static: true}) textEl!: ElementRef

  // #region NgModel template definiton
  private innerValue:any;

  visibility = "visible"

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

  showPassword(event: any){
    if (this.inputEl.nativeElement.type == "password"){
      this.inputEl.nativeElement.type = "text";
      this.visibility = "visibility"
    }else{
      this.inputEl.nativeElement.type = "password";
      this.visibility = "visibility_off"
    }
  }

  clearInput(){
    this.value = undefined
  }

  inputChanged(){
    this.validationClass = !this.control.valid? "danger" : "success"
  }
}
