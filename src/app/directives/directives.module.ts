import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SideBarItemDirective } from "./sidebar-item.directive";
import { SidebarDirective } from "./sidebar.directive";
import { DropdownDirective } from "./dropdown.directive";
import { BadgeDirective } from "./badge.directive";

const components = [
   SideBarItemDirective,
   SidebarDirective,
   BadgeDirective,
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