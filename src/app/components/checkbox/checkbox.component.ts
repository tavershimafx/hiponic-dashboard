import { Component, Input, forwardRef  } from '@angular/core';
import { NG_VALUE_ACCESSOR} from '@angular/forms';
import { CustomFormControl } from '@extensions/control.extensions';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxComponent),
  multi: true
};

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class CheckboxComponent {

  constructor(){
   
  }

  /**
   * A defined css class to be applied to the checkbox
   */
  @Input("class") cssClass?: string
  
  /**
   * Determines if validation messages and symbols should be displayed
   */
  @Input() showValidation?: boolean = false

  /**
   * The referenced form control
   */
  @Input() control!: CustomFormControl

  // #region NgModel template definiton
  private innerValue:any;


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
          this.onChangeCallback(value);
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
}
