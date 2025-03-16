import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TextInputComponent } from "./text-input/text-input.component";
import { TextGroupComponent } from "./text-group/text-group.component";
import { CheckboxComponent } from "./checkbox/checkbox.component";

const components = [
    TextInputComponent,
    TextGroupComponent,
    CheckboxComponent
]

@NgModule({
    declarations: [
        ...components
    ],
    imports: [CommonModule, ReactiveFormsModule, FormsModule],
    exports: [
        ...components
    ]
})
export default class ComponentsModule{}