import { Component } from '@angular/core';
import { DialogService } from '@services/dialog-service';
import { NewTaskModal } from '@modals/new-task/new-task.component';

@Component({
  selector: 'index',
  standalone: false,
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent{
  users = [
    "../../../../assets/images/users/user-1.png",
    "../../../../assets/images/users/user-2.png",
    "../../../../assets/images/users/user-3.png",
    "../../../../assets/images/users/user-4.png",
  ]
  
  tab = 0
  constructor(private dialogService: DialogService){
   
  }

  newTask(n: number){
    this.dialogService.showDialog(NewTaskModal)?.subscribe({
      next: x =>{
        console.log("The dialog has closed")
        // reload the data if necessary
      }
    })
  }

  switchTab(index: number){
    this.tab = index
  }
}
