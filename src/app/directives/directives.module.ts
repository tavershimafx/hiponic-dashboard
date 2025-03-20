import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SideBarItemDirective } from "./sidebar-item.directive";
import { DropdownDirective } from "./dropdown.directive";

const components = [
   SideBarItemDirective,
   DropdownDirective
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
export default class DirectivesModule{}