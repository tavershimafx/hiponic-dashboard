import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TimespanPipe } from "./timespan.pipe";

const components = [
   TimespanPipe
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
export default class PipesModule{}