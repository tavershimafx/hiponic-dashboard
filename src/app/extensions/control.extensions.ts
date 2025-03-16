import { FormControl, FormGroup } from "@angular/forms";

export class CustomFormControl extends FormControl {
  /**
   *
   * @param label The label attached to the control. This label is displayed to the user in error messages
   * @param defValue The default value for the control
   * @param article The article parameter is used to designate the proper to be used when displaying eror messages
   * for instance in the case of an email, the article 'an' will be used instead of a E.g An email is required
   * @param validators an array of Validators
   */
  constructor(private label: string, defValue: any, private article: string = "a", validators: any = null) {
    super(defValue, validators);
  }

  /**
   * 
   * @returns an array of validation messages for the control
   */
  getValidationMessages() {
    let messages: string[] = [];
    //console.log("Errors ", this.errors)
    if (this.errors) {
      for (let errorName in this.errors) {
        switch (errorName) {
          case "required":
          case "email":
            messages.push(`Please enter ${this.article} ${this.label}`);
            break;
          case "min":
            messages.push(`${this.article} ${this.label} must be at least ${this.errors['minlength'].requiredLength} characters long`);
            break;
          case "minlength":
            messages.push(`${this.article} ${this.label} must be at least ${this.errors['minlength'].requiredLength} characters long`);
            break;
          case "max":
            messages.push(`${this.article} ${this.label} must be not more than ${this.errors['maxlength'].requiredLength} characters long`);
            break;
          case "maxlength":
            messages.push(`${this.article} ${this.label} must be not more than ${this.errors['maxlength'].requiredLength} characters long`);
            break;
          case "pattern":
            messages.push(`The ${this.label} contains unwanted characters`);
            break;
          case "comparison":
            messages.push(`The ${this.label} comparison does not match`);
            break;
        }
      }
    }
    return messages;
  }

  validationClass = () => this.valid? "success" : "danger"
}

export class CustomFormGroup extends FormGroup {
  constructor(controls: { [key: string]: CustomFormControl; }) {
    super(controls)
  }

  get formControls(): CustomFormControl[] {
    return Object.keys(this.controls)
      .map(k => this.controls[k] as CustomFormControl);
  }

  public formControl(name: string): CustomFormControl {
    return this.controls[name] as CustomFormControl
  }

  getFormValidationMessages(form: any): string[] {
    let messages: string[] = [];
    this.formControls.forEach(c => c.getValidationMessages()
      .forEach(m => messages.push(m)));
    return messages;
  }
}