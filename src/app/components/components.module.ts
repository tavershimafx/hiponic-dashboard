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
import { NavTopComponent } from "./nav-top/nav-top.component";
import { ProgressBarComponent } from "./progress-bar/progress-bar.component";
import { NgApexchartsModule } from "ng-apexcharts";
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { StackedImagesComponent } from "./stacked-images/stacked-images.component";
import { ProfileDropdownComponent } from "./profile-dropdown/profile-dropdown.component";
import { RouterModule } from "@angular/router";

const components = [
    TextInputComponent,
    TextGroupComponent,
    CheckboxComponent,
    CardComponent,
    CardHeaderComponent,
    CardFooterComponent,
    ToggleComponent,
    SidebarComponent,
    NavTopComponent,
    ProgressBarComponent,
    StackedImagesComponent,
    ProfileDropdownComponent
]

@NgModule({
    declarations: [
        ...components
    ],
    imports: [CommonModule, ReactiveFormsModule, 
        RouterModule,
        FormsModule, 
        DirectivesModule,
        NgApexchartsModule,
        MatButtonModule, MatMenuModule
    ],
    exports: [
        ...components,
        NgApexchartsModule,
        MatButtonModule, MatMenuModule
    ]
})
export default class ComponentsModule{}