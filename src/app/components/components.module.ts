import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TextInputComponent } from "./text-input/text-input.component";
import { TextGroupComponent } from "./text-group/text-group.component";
import { CheckboxComponent } from "./checkbox/checkbox.component";
import { CardComponent } from "./cards/card/card.component";
import { CardHeaderComponent } from "./cards/card-header/card-header.component";
import { CardFooterComponent } from "./cards/card-footer/card-footer.component";
import { ToggleComponent } from "./toggle/toggle.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import DirectivesModule from "../directives/directives.module";

const components = [
    TextInputComponent,
    TextGroupComponent,
    CheckboxComponent,
    CardComponent,
    CardHeaderComponent,
    CardFooterComponent,
    ToggleComponent,
    SidebarComponent
]

@NgModule({
    declarations: [
        ...components
    ],
    imports: [CommonModule, ReactiveFormsModule, 
        FormsModule, 
        DirectivesModule],
    exports: [
        ...components
    ]
})
export default class ComponentsModule{}