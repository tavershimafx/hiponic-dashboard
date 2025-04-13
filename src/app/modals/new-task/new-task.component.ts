import { Component } from '@angular/core';
import { DialogService } from '@services/dialog-service';

@Component({
  selector: 'new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskModal{
  /**
   *
   */
  constructor(private dialogService: DialogService) {
   
  }

  users = [
    "../../../../assets/images/users/user-1.png",
    "../../../../assets/images/users/user-2.png",
    "../../../../assets/images/users/user-3.png",
    "../../../../assets/images/users/user-4.png",
  ]

  closeDialog(){
    this.dialogService.showDialog(null)
  }
}
