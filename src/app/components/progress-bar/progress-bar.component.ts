import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent {
  /**
   * The color for the progress bar
   */
  @Input() color: string = "theme"

  /**
   * The width in percent of progress
   */
  @Input() width: string = "40%"

  /**
   * An extra class style to be applied to the control
   */
  @Input("class") cssClass?: string

  getColor():string{
    return `var(--${this.color})`
  }
}
